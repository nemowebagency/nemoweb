import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar, ShoppingBag } from 'lucide-react';

const tracks = [
  {
    id: 'sito-vetrina',
    icon: Home,
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    title: 'Siti vetrina',
    cta: 'Scopri i siti vetrina',
    to: '/servizi#sito-vetrina',
  },
  {
    id: 'sito-prenotazione',
    icon: Calendar,
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    title: 'Prenotazioni',
    cta: 'Esplora le prenotazioni',
    to: '/servizi#sito-prenotazione',
  },
  {
    id: 'e-commerce',
    icon: ShoppingBag,
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    title: 'E-commerce',
    cta: "Scopri l'e-commerce",
    to: '/servizi#e-commerce',
  },
];

const HomeTracksSection = () => (
  <section
    id="home-tracks"
    className="section-padding relative scroll-mt-16 overflow-x-hidden border-b border-slate-200 bg-slate-50"
  >
    <div className="container-page relative z-10 space-y-10">
      <header className="max-w-3xl space-y-4">
        <div className="space-y-3">
          <img
            src="/logo-512x512.png"
            alt=""
            aria-hidden
            className="h-8 w-auto"
            loading="lazy"
            decoding="async"
          />
          <h2 className="section-title">
            Tre soluzioni, un unico{' '}
            <span className="text-[var(--brand-muted)]">ecosistema digitale</span>.
          </h2>
          <p>
            Siti vetrina, sistemi di prenotazione ed e-commerce lavorano insieme
            per accompagnare il tuo business online.
          </p>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {tracks.map((track) => {
          const Icon = track.icon;
          return (
            <article
              key={track.id}
              className="card-hover group flex flex-col overflow-hidden"
            >
              <div
                className="h-40 bg-cover bg-center transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                style={{ backgroundImage: `url('${track.image}')` }}
              />
              <div className="flex flex-1 flex-col p-5">
                <div className="flex-1 space-y-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ff7351]/10 text-[#ff7351] ring-1 ring-[#ff7351]/30 transition-[background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#ff7351]/15 group-hover:shadow-[0_8px_24px_-12px_rgba(255,115,81,0.45)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {track.title}
                  </h3>
                </div>
                <div className="mt-4">
                  <Link to={track.to} className="btn-secondary">
                    {track.cta}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>

    <div
      className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-32 w-[100vw] -translate-x-1/2 overflow-hidden sm:h-40 md:h-48"
      aria-hidden
    >
        <img
          src="/Nero-Arancio.png"
          alt=""
          className="absolute bottom-0 left-4 right-4 h-64 w-full max-w-none translate-y-1/2 object-contain object-bottom opacity-10 sm:left-6 sm:right-6 sm:h-80 md:h-96 lg:left-8 lg:right-8"
          loading="lazy"
          decoding="async"
        />
    </div>
  </section>
);

export default HomeTracksSection;
