import { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    document.documentElement.classList.add('custom-cursor')

    const cursor = cursorRef.current

    const onMove = (e) => {
      if (!cursor) return
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      cursor.style.opacity = '1'
    }

    const onLeave = () => {
      if (!cursor) return
      cursor.style.opacity = '0'
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave)

    return () => {
      document.documentElement.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
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
