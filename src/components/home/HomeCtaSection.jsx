import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, MessageCircle, Rocket } from 'lucide-react';
import PartnersCarousel from './PartnersCarousel';

const steps = [
  {
    step: '01',
    Icon: MessageCircle,
    title: 'Parliamo del progetto',
    description:
      'Ci racconti obiettivi, tempi e contesto: capiamo insieme cosa ti serve davvero.',
  },
  {
    step: '02',
    Icon: FileText,
    title: 'Proposta su misura',
    description:
      'Ti presentiamo un percorso chiaro su design e sviluppo, senza sorprese.',
  },
  {
    step: '03',
    Icon: Rocket,
    title: 'Partenza insieme',
    description:
      'Avviamo il lavoro con un team unico che ti segue fino al risultato.',
  },
];

const HomeCtaSection = () => (
  <section
    id="perche-nemo"
    className="section-padding relative scroll-mt-16 overflow-x-hidden border-b border-slate-200 bg-slate-50"
  >
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,_rgba(255,115,81,0.08),_transparent_45%),radial-gradient(circle_at_90%_70%,_rgba(255,115,81,0.05),_transparent_50%)]" />
      <div className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-[#ff7351]/10 blur-3xl" />
    </div>

    <div className="container-page relative z-10 space-y-16 md:space-y-24">
      <div className="space-y-12 md:space-y-16">
        <header className="mx-auto max-w-3xl text-center">
          <div className="space-y-3">
            <img
              src="/Nero-Arancio.png"
              alt=""
              aria-hidden
              className="mx-auto h-8 w-auto"
              loading="lazy"
              decoding="async"
            />
            <h2 className="section-title text-balance">
              Non solo siti web: costruiamo{' '}
              <span className="text-[var(--brand-muted)]">relazioni.</span>
            </h2>
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
              <p>
                Nemo unisce design, sviluppo e strategia in progetti pensati
                per durare nel tempo.
              </p>
              <p>
                Ogni progetto è un percorso condiviso: partiamo dagli obiettivi
                di business, definiamo una roadmap chiara e rilasciamo valore
                fin dalle prime fasi.
              </p>
              <p>
                Collaboriamo in modo trasparente con imprese e professionisti,
                su basi di competenza, cura e visione a lungo termine.
              </p>
            </div>
          </div>
        </header>

        <PartnersCarousel />
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.15fr,1fr] lg:items-center lg:gap-14">
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h2 className="section-title text-balance">
              Pronto a trasformare le tue{' '}
              <span className="text-[#ffb399]">idee in realtà?</span>
            </h2>
            <p className="mx-auto max-w-xl lg:mx-0">
              Consulenza gratuita e soluzioni web con un unico team: raccontaci
              il tuo progetto e troviamo la strada giusta.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link to="/contatti" className="btn-primary">
              Contattaci
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/servizi" className="btn-hero-link">
              Scopri i servizi
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#ff7351]">
            Come iniziare
          </p>
          <ol className="relative space-y-0">
            {steps.map(({ step, Icon, title, description }, index) => (
              <li key={step} className="relative flex gap-4 pb-8 last:pb-0">
                {index < steps.length - 1 ? (
                  <span
                    className="absolute bottom-0 left-5 top-12 w-px bg-gradient-to-b from-[#ffb399]/80 to-[#ffd0c2]/30"
                    aria-hidden
                  />
                ) : null}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ff7351]/10 text-[#ff7351] ring-1 ring-[#ff7351]/25">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="min-w-0 space-y-1 pt-0.5">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-[11px] font-semibold tracking-wider text-[#ff7351]/80">
                      {step}
                    </span>
                    <h3 className="text-base font-semibold text-slate-900">
                      {title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default HomeCtaSection;
