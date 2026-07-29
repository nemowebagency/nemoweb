import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Globe,
  Layout,
  MousePointerClick,
  Sparkles,
  Zap,
} from 'lucide-react';

const ORBIT_RADIUS = '9rem';

const orbitIcons = [
  {
    id: 'sparkles',
    Icon: Sparkles,
    angle: -90,
    size: 'h-11 w-11 md:h-12 md:w-12',
    animation: 'hero-float',
    delay: '0s',
  },
  {
    id: 'layout',
    Icon: Layout,
    angle: -18,
    size: 'h-9 w-9 md:h-10 md:w-10',
    animation: 'hero-float-alt',
    delay: '-2s',
  },
  {
    id: 'zap',
    Icon: Zap,
    angle: 54,
    size: 'h-10 w-10 md:h-11 md:w-11',
    animation: 'hero-float-slow',
    delay: '-4s',
  },
  {
    id: 'globe',
    Icon: Globe,
    angle: 126,
    size: 'h-8 w-8 md:h-9 md:w-9',
    animation: 'hero-float-alt',
    delay: '-1s',
  },
  {
    id: 'click',
    Icon: MousePointerClick,
    angle: 198,
    size: 'h-9 w-9 md:h-10 md:w-10',
    animation: 'hero-float',
    delay: '-3s',
  },
];

const OrbitIcons = ({ icons }) => (
  <>
    {icons.map(({ id, Icon, angle, size, animation, delay }) => (
      <div
        key={id}
        className="absolute left-0 top-0"
        style={{
          transform: `rotate(${angle}deg) translateY(calc(-1 * ${ORBIT_RADIUS}))`,
        }}
      >
        <div style={{ transform: `rotate(${-angle}deg)` }}>
          <div
            className={`${animation} text-white/50`}
            style={delay ? { animationDelay: delay } : undefined}
          >
            <Icon className={size} strokeWidth={1.25} aria-hidden />
          </div>
        </div>
      </div>
    ))}
  </>
);

const HomeProjectsCtaSection = () => (
  <section className="relative overflow-hidden border-b border-[#e85a3a]/30">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80')",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#e85a3a]/95 via-[#ff7351]/90 to-[#c94a32]/95"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,_rgba(255,255,255,0.12),_transparent_42%),radial-gradient(circle_at_85%_60%,_rgba(255,255,255,0.08),_transparent_48%)]" />
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#ffb399]/25 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-px w-[min(90%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-32 w-[100vw] -translate-x-1/2 overflow-hidden sm:h-40 md:h-48">
          <img
            src="/Bianco-Arancio.png"
            alt=""
            className="absolute bottom-0 left-4 right-4 h-64 w-full max-w-none translate-y-1/2 object-contain object-bottom opacity-[0.12] sm:left-6 sm:right-6 sm:h-80 md:h-96 lg:left-8 lg:right-8"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="container-page relative z-10 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div className="relative space-y-6 text-left">
            <h2 className="section-title-light text-balance">
              Investi in una presenza digitale{' '}
              <span className="text-[#ffd0c2]">che converte</span>
            </h2>
            <p className="max-w-xl text-white/90">
              Dal concept al go-live: siti moderni, veloci e pensati per i tuoi
              obiettivi di business. Consulenza gratuita e roadmap chiara.
            </p>
            <div className="relative flex flex-wrap items-center gap-4 pt-1">
              <Link to="/servizi" className="btn-on-dark">
                Guarda i servizi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/contatti" className="btn-hero-link-on-dark">
                Richiedi informazioni
              </Link>
            </div>
          </div>

          <div
            className="relative mx-auto hidden h-80 w-full max-w-md lg:flex lg:items-center lg:justify-center"
            aria-hidden
          >
            <div className="relative size-72">
              <div className="absolute inset-0 rounded-full border border-white/15" />
              <div className="absolute inset-10 rounded-full border border-dashed border-white/20" />
              <div className="absolute inset-[4.5rem] rounded-full bg-white/10 shadow-[0_0_60px_-12px_rgba(255,255,255,0.35)] backdrop-blur-sm" />
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-white/25 to-white/5 ring-1 ring-white/20" />

              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/Bianco-Arancio.png"
                  alt=""
                  aria-hidden
                  className="relative z-10 h-8 w-auto max-w-none shrink-0 object-contain opacity-90"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="absolute left-1/2 top-1/2 size-0">
                <OrbitIcons icons={orbitIcons} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default HomeProjectsCtaSection;
