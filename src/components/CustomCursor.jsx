import { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const root = document.documentElement
    root.classList.add('custom-cursor')

    const cursor = cursorRef.current
    // Browsers often emit one last clamped mousemove at the viewport
    // edge after leave - suppress those so the image doesn't stick.
    let ignoreMovesUntil = 0

    const hide = () => {
      ignoreMovesUntil = performance.now() + 150
      if (!cursor) return
      cursor.style.opacity = '0'
    }

    const onMove = (e) => {
      if (!cursor || performance.now() < ignoreMovesUntil) return
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      cursor.style.opacity = '1'
    }

    const onEnter = () => {
      ignoreMovesUntil = 0
    }

    // relatedTarget is null only when the pointer leaves the document
    const onDocOut = (e) => {
      if (e.relatedTarget == null) hide()
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    root.addEventListener('mouseenter', onEnter)
    root.addEventListener('mouseleave', hide)
    root.addEventListener('pointerenter', onEnter)
    root.addEventListener('pointerleave', hide)
    document.addEventListener('mouseout', onDocOut)
    window.addEventListener('blur', hide)

    return () => {
      root.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', onMove)
      root.removeEventListener('mouseenter', onEnter)
      root.removeEventListener('mouseleave', hide)
      root.removeEventListener('pointerenter', onEnter)
      root.removeEventListener('pointerleave', hide)
      document.removeEventListener('mouseout', onDocOut)
      window.removeEventListener('blur', hide)
    }
  }, [])

  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: coarse)').matches
  ) {
    return null
  }

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0 will-change-transform"
      aria-hidden
    >
      <img
        src="/cursore-cursor.png"
        alt=""
        draggable={false}
        className="block h-6 w-6 origin-top-left select-none"
        width={32}
        height={32}
      />
    </div>
  )
}

export default CustomCursor
