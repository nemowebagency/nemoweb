import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const floatingTags = [
  {
    label: 'Siti vetrina',
    position: 'left-[5%] top-[16%] md:left-[8%] md:top-[20%]',
    rotation: '-rotate-[7deg]',
    animation: 'hero-float',
    delay: '0s',
    toneClass: 'bridge-bg-tag--deep',
  },
  {
    label: 'Prenotazioni',
    position: 'right-[5%] top-[26%] md:right-[9%] md:top-[32%]',
    rotation: 'rotate-[8deg]',
    animation: 'hero-float-alt',
    delay: '-2s',
    toneClass: 'bridge-bg-tag--mid',
  },
  {
    label: 'E-commerce',
    position: 'left-[8%] bottom-[22%] md:left-[12%] md:bottom-[26%]',
    rotation: 'rotate-[5deg]',
    animation: 'hero-float-slow',
    delay: '-4s',
    toneClass: 'bridge-bg-tag--dark',
  },
  {
    label: 'SEO & performance',
    position: 'right-[6%] bottom-[18%] md:right-[11%] md:bottom-[22%]',
    rotation: '-rotate-[6deg]',
    animation: 'hero-float',
    delay: '-1.5s',
    toneClass: 'bridge-bg-tag--accent',
  },
  {
    label: 'Progetti su misura',
    position: 'left-[32%] top-[10%] md:left-[36%]',
    rotation: '-rotate-[3deg]',
    animation: 'hero-float-alt',
    delay: '-3s',
    toneClass: 'bridge-bg-tag--bright',
    hideMobile: true,
  },
];

const HomeBridgeSection = () => (
  <section className="relative overflow-hidden border-b border-[#ffd0c2] bg-[#fff5f1] py-20 md:py-28">
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,_rgba(255,115,81,0.22),_transparent_62%),radial-gradient(circle_at_12%_70%,_rgba(232,90,58,0.14),_transparent_48%),radial-gradient(circle_at_92%_35%,_rgba(255,115,81,0.16),_transparent_52%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffe8e0]/80 via-[#fff5f1] to-white" />
      <div className="services-it-grid absolute inset-0 opacity-[0.12]" />
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#ff7351]/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#ff7351]/15 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffb399]/20 blur-3xl" />
      <div className="absolute right-[8%] top-[16%] h-40 w-40 rounded-full border border-dashed border-[#ffb399]/70 md:h-56 md:w-56" />

      {floatingTags.map((tag) => (
        <div
          key={tag.label}
          className={`absolute ${tag.hideMobile ? 'hidden lg:block' : 'hidden md:block'} ${tag.position} ${tag.animation}`}
          style={tag.delay ? { animationDelay: tag.delay } : undefined}
        >
          <span className={`bridge-bg-tag ${tag.toneClass} ${tag.rotation}`}>
            {tag.label}
          </span>
        </div>
      ))}
    </div>

    <div className="container-page relative z-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <img
            src="/logo-512x512.png"
            alt=""
            aria-hidden
            className="h-8 w-auto opacity-80"
            loading="lazy"
            decoding="async"
          />
        <div className="space-y-3">
          <h2 className="section-title text-balance">
            Dalle idee ai progetti{' '}
            <span className="text-[#ff7351]">che funzionano.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Design, sviluppo e supporto si integrano in servizi concreti: scopri
            come possiamo far crescere la tua presenza digitale.
          </p>
        </div>
        <Link to="/#services" className="btn-primary">
          Esplora i servizi
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default HomeBridgeSection;
