import React, { useEffect, useMemo, useState } from 'react';
import Lottie from 'lottie-react';
import {
  ArrowRight,
  Code2,
  Cpu,
  Database,
  Terminal,
  Cloud,
  Monitor,
  Server,
  Laptop,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SCROLL_LOTTIE_SRC = '/scroll-down.json';

const SCROLL_LOTTIE_FILTER =
  'brightness(0) saturate(100%) invert(58%) sepia(58%) saturate(1200%) hue-rotate(325deg) brightness(102%) contrast(101%)';

const floatingIconsLeft = [
  {
    id: 'code',
    Icon: Code2,
    position: 'left-[4%] top-[20%] xl:left-[8%]',
    size: 'h-12 w-12 md:h-14 md:w-14',
    animation: 'hero-float',
    delay: '0s',
  },
  {
    id: 'terminal',
    Icon: Terminal,
    position: 'left-[10%] top-[48%] xl:left-[14%]',
    size: 'h-9 w-9 md:h-11 md:w-11',
    animation: 'hero-float-alt',
    delay: '-2s',
  },
  {
    id: 'database',
    Icon: Database,
    position: 'left-[3%] bottom-[28%] xl:left-[6%]',
    size: 'h-10 w-10 md:h-12 md:w-12',
    animation: 'hero-float-slow',
    delay: '-4s',
  },
  {
    id: 'cpu',
    Icon: Cpu,
    position: 'left-[14%] top-[32%] xl:left-[18%]',
    size: 'h-8 w-8 md:h-10 md:w-10',
    animation: 'hero-float-alt',
    delay: '-1s',
  },
];

const floatingIconsRight = [
  {
    id: 'monitor',
    Icon: Monitor,
    position: 'right-[4%] top-[22%] xl:right-[8%]',
    size: 'h-12 w-12 md:h-14 md:w-14',
    animation: 'hero-float-alt',
    delay: '-1.5s',
  },
  {
    id: 'cloud',
    Icon: Cloud,
    position: 'right-[11%] top-[50%] xl:right-[15%]',
    size: 'h-9 w-9 md:h-11 md:w-11',
    animation: 'hero-float',
    delay: '-3s',
  },
  {
    id: 'server',
    Icon: Server,
    position: 'right-[3%] bottom-[26%] xl:right-[6%]',
    size: 'h-10 w-10 md:h-12 md:w-12',
    animation: 'hero-float-slow',
    delay: '-5s',
  },
  {
    id: 'laptop',
    Icon: Laptop,
    position: 'right-[13%] top-[34%] xl:right-[17%]',
    size: 'h-8 w-8 md:h-10 md:w-10',
    animation: 'hero-float',
    delay: '-2.5s',
  },
];

const HeroFloatingIcons = ({ icons }) => (
  <>
    {icons.map(({ id, Icon, position, size, animation, delay }) => (
      <div
        key={id}
        className={`absolute ${position} ${animation} text-[#ff7351]/40`}
        style={delay ? { animationDelay: delay } : undefined}
      >
        <Icon className={size} strokeWidth={1.25} aria-hidden />
      </div>
    ))}
  </>
);

const HeroDecorations = () => (
  <div
    className="pointer-events-none absolute inset-0 overflow-hidden"
    aria-hidden="true"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,_rgba(255,115,81,0.08),_transparent_45%),radial-gradient(circle_at_90%_70%,_rgba(255,115,81,0.05),_transparent_50%)]" />
    <div className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-[#ff7351]/10 blur-3xl" />

    <div className="hidden md:block">
      <HeroFloatingIcons icons={floatingIconsLeft} />
      <HeroFloatingIcons icons={floatingIconsRight} />
    </div>

    <div
      className="absolute bottom-0 left-1/2 z-0 h-28 w-full max-w-[min(95vw,40rem)] -translate-x-1/2 overflow-hidden sm:h-32 md:h-40"
      aria-hidden
    >
      <img
        src="/icona%20arancione.png"
        alt=""
        className="absolute bottom-0 left-1/2 h-56 w-auto max-w-[min(95vw,40rem)] -translate-x-1/2 translate-y-1/2 opacity-10 sm:h-64 md:h-80"
        width={512}
        height={512}
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
);

const HeroScrollCue = ({ href, label }) => {
  const [scrollLottie, setScrollLottie] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(SCROLL_LOTTIE_SRC)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setScrollLottie(data);
      })
      .catch(() => {
        if (!cancelled) setScrollLottie(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <a
      href={href}
      aria-label={label}
      className="absolute bottom-6 left-1/2 z-20 block -translate-x-1/2 opacity-70 transition-opacity hover:opacity-100 md:bottom-8"
    >
      {scrollLottie ? (
        <Lottie
          animationData={scrollLottie}
          loop
          className="mx-auto h-9 w-9 md:h-11 md:w-11"
          style={{ filter: SCROLL_LOTTIE_FILTER }}
        />
      ) : (
        <div className="mx-auto h-9 w-9 md:h-11 md:w-11" aria-hidden />
      )}
    </a>
  );
};

const Hero = () => {
  const heroWords = useMemo(
    () => ['siti web', 'progetti', 'software', 'soluzioni'],
    []
  );
  const [wordIndex, setWordIndex] = useState(0);
  const [typedCount, setTypedCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setTypedCount(heroWords[wordIndex].length);
      setIsDeleting(false);
      return;
    }

    const word = heroWords[wordIndex];
    const doneTyping = typedCount >= word.length;
    const doneDeleting = typedCount <= 0;
    const TYPE_MS = isDeleting ? 40 : 70;
    const PAUSE_MS = 900;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (doneTyping) {
          setIsDeleting(true);
          return;
        }
        setTypedCount((c) => Math.min(word.length, c + 1));
        return;
      }

      if (doneDeleting) {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % heroWords.length);
        return;
      }
      setTypedCount((c) => Math.max(0, c - 1));
    }, doneTyping && !isDeleting ? PAUSE_MS : TYPE_MS);

    return () => window.clearTimeout(timeout);
  }, [heroWords, isDeleting, typedCount, wordIndex]);

  const typedWord = heroWords[wordIndex].slice(0, typedCount);

  return (
    <section
      id="home"
      data-navbar-hero
      className="relative overflow-hidden border-b border-slate-200 bg-slate-50"
    >
      <HeroDecorations />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <div className="w-full space-y-6 text-center fade-in-up">
          <h1 className="flex justify-center text-center text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            <span className="inline-flex flex-col items-center justify-center gap-y-2 leading-[0.95] sm:flex-row sm:items-baseline sm:gap-x-3 sm:translate-x-16">
              <span className="text-slate-900">Creiamo&nbsp;</span>
              <span
                className="relative inline-block h-[1.05em] w-[11ch] overflow-hidden text-center align-baseline text-[#ffb399] sm:text-left"
                aria-live="polite"
              >
                <span className="font-mono">
                  {typedWord}
                  <span
                    className="ml-0.5 inline-block h-[0.80em] w-[8px] bg-[#ffb399] align-[-0.08em]"
                    aria-hidden
                  />
                </span>
              </span>
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-slate-700">
            Progettiamo siti web su misura per far crescere la tua presenza
            online. Un partner unico per design, sviluppo e risultati concreti.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <Link to="/servizi" className="btn-primary">
              Scopri i servizi
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/contatti" className="btn-hero-link">
              Inizia un progetto
            </Link>
          </div>
        </div>
      </div>

      <HeroScrollCue
        href="#home-tracks"
        label="Scorri alla sezione successiva"
      />
    </section>
  );
};

export default Hero;
export { HeroDecorations, HeroScrollCue };
