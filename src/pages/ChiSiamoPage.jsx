import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import {
  ArrowRight,
  Heart,
  Target,
  Zap,
  Shield,
  Users,
  Palette,
  HeadphonesIcon,
  MessageCircle,
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passione',
    description:
      'Mettiamo cura in ogni progetto, dal design allo sviluppo finale.',
  },
  {
    icon: Target,
    title: 'Obiettivi chiari',
    description:
      'Lavoriamo per risultati concreti e misurabili per il tuo business.',
  },
  {
    icon: Zap,
    title: 'Innovazione',
    description:
      'Utilizziamo tecnologie moderne per soluzioni performanti e scalabili.',
  },
  {
    icon: Shield,
    title: 'Affidabilità',
    description:
      'Supporto continuo, aggiornamenti e assistenza quando ne hai bisogno.',
  },
];

const stats = [
  { number: '150+', label: 'Clienti soddisfatti' },
  { number: '300+', label: 'Progetti completati' },
  { number: '8+', label: 'Anni di esperienza' },
  { number: '100%', label: 'Soddisfazione garantita' },
];

const approachItems = [
  {
    icon: MessageCircle,
    title: 'Consulenza personalizzata',
    description: 'Analizziamo le tue esigenze per creare la soluzione perfetta.',
  },
  {
    icon: Palette,
    title: 'Design unico',
    description: 'Ogni sito è creato su misura per riflettere la tua identità.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Supporto continuo',
    description: 'Siamo sempre qui per aiutarti anche dopo il lancio.',
  },
];

const ChiSiamoPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('[data-scroll]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <PageHero
          id="chi-siamo"
          scrollTarget="#about-mission"
          title={
            <>
              Chi <span className="text-[#ffb399]">siamo</span>
            </>
          }
          description="Siamo Nemo Web Agency, un'agenzia digitale specializzata nella creazione di siti web professionali, moderni e orientati ai risultati. Dal 2016 aiutiamo imprese e professionisti a crescere online."
          actions={[
            {
              label: 'La nostra mission',
              href: '#about-mission',
              variant: 'primary',
            },
            { label: 'Contattaci', href: '/contatti', variant: 'link' },
          ]}
        />

        {/* Mission */}
        <section
          id="about-mission"
          className="section-padding relative scroll-mt-16 overflow-hidden border-b border-slate-200 bg-slate-50"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,_rgba(255,115,81,0.08),_transparent_45%),radial-gradient(circle_at_90%_70%,_rgba(255,115,81,0.05),_transparent_50%)]" />
            <div className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-[#ff7351]/10 blur-3xl" />
          </div>

          <div className="container-page relative z-10 space-y-12 md:space-y-16">
            <header className="max-w-3xl space-y-3">
              <img
                src="/icona%20arancione.png"
                alt=""
                aria-hidden
                className="h-10 w-auto"
                loading="lazy"
                decoding="async"
              />
              <h2 className="section-title text-balance">
                La nostra <span className="text-[var(--brand-muted)]">mission</span>
              </h2>
              <p className="max-w-2xl">
                Creare siti web che non siano solo belli da vedere, ma che
                portino risultati concreti al tuo business.
              </p>
            </header>

            <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
              <div
                data-scroll
                className="flex flex-col justify-center space-y-4 opacity-0 translate-y-8 transition-all duration-700"
              >
                <p>
                  Il nostro obiettivo è studiare ogni progetto per rispondere
                  alle esigenze specifiche del cliente e raggiungere i suoi
                  obiettivi di business.
                </p>
                <p>
                  Crediamo in un approccio personalizzato: ogni attività merita
                  una soluzione su misura. Per questo lavoriamo a stretto
                  contatto con i nostri clienti per trasformare le necessità in
                  soluzioni digitali efficaci.
                </p>
                <div className="pt-2">
                  <Link to="/servizi" className="btn-primary">
                    Scopri i servizi
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <article
                data-scroll
                className="card-hover group overflow-hidden opacity-0 translate-y-8 transition-all duration-700"
              >
                <div
                  className="h-full min-h-[280px] bg-cover bg-center transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] sm:min-h-[320px]"
                  style={{ backgroundImage: "url('/chisiamo.jpg')" }}
                />
              </article>
            </div>

            <div
              data-scroll
              className="card-hover grid grid-cols-2 gap-6 p-6 opacity-0 translate-y-8 transition-all duration-700 md:grid-cols-4 md:p-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mb-2 text-3xl font-extrabold tracking-tight text-[#ff7351] md:text-4xl">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-32 w-[100vw] -translate-x-1/2 overflow-hidden sm:h-40 md:h-48"
            aria-hidden
          >
            <img
              src="/logo%20arancione.png"
              alt=""
              className="absolute bottom-0 left-4 right-4 h-64 w-full max-w-none translate-y-1/2 object-contain object-bottom opacity-10 sm:left-6 sm:right-6 sm:h-80 md:h-96 lg:left-8 lg:right-8"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Values */}
        <section className="section-padding relative overflow-hidden border-b border-[#ffd0c2] bg-[#fff5f1]">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,_rgba(255,115,81,0.18),_transparent_62%)]" />
            <div className="services-it-grid absolute inset-0 opacity-[0.1]" />
          </div>

          <div className="container-page relative z-10 space-y-10">
            <header
              data-scroll
              className="mx-auto max-w-3xl space-y-3 text-center opacity-0 translate-y-8 transition-all duration-700"
            >
              <img
                src="/icona%20arancione.png"
                alt=""
                aria-hidden
                className="mx-auto h-10 w-auto"
                loading="lazy"
                decoding="async"
              />
              <h2 className="section-title text-balance">
                I nostri <span className="text-[#ff7351]">valori</span>
              </h2>
              <p className="mx-auto max-w-2xl">
                I principi che guidano il nostro lavoro ogni giorno.
              </p>
            </header>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <article
                    key={value.title}
                    data-scroll
                    className="card-hover group relative flex flex-col overflow-hidden p-5 opacity-0 translate-y-8 transition-all duration-700"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <Icon
                      className="pointer-events-none absolute right-0 top-1/2 h-24 w-24 -translate-y-1/2 translate-x-1/2 text-[#ff7351] opacity-20"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                    <div className="relative space-y-3 pr-12">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ff7351]/10 text-[#ff7351] ring-1 ring-[#ff7351]/30 transition-[background-color,box-shadow] duration-500 group-hover:bg-[#ff7351]/15 group-hover:shadow-[0_8px_24px_-12px_rgba(255,115,81,0.45)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {value.title}
                      </h3>
                      <p className="text-sm text-slate-600">{value.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="section-padding relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="container-page space-y-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
              <article
                data-scroll
                className="card-hover relative overflow-hidden p-8 opacity-0 translate-y-8 transition-all duration-700 sm:p-10"
              >
                <Users
                  className="mb-6 h-12 w-12 text-[#ff7351]"
                  strokeWidth={1.25}
                />
                <h3 className="mb-2 text-2xl font-semibold text-slate-900">
                  Il nostro team
                </h3>
                <p className="mb-4 text-sm font-medium text-[#ff7351]">
                  Web Developers & Designers
                </p>
                <p className="text-slate-600">
                  Un team di professionisti esperti che lavora insieme per
                  trasformare le tue idee in realtà digitali.
                </p>
              </article>

              <div
                data-scroll
                className="space-y-6 opacity-0 translate-y-8 transition-all duration-700"
              >
                <div className="space-y-3">
                  <img
                    src="/icona%20arancione.png"
                    alt=""
                    aria-hidden
                    className="h-10 w-auto"
                    loading="lazy"
                    decoding="async"
                  />
                  <h2 className="section-title">
                    Il nostro{' '}
                    <span className="text-[var(--brand-muted)]">approccio</span>
                  </h2>
                  <p>
                    Lavoriamo come partner del tuo business, non come semplici
                    fornitori. Ogni progetto inizia con un&apos;analisi delle
                    esigenze, seguita da design personalizzato e sviluppo curato
                    nei minimi dettagli.
                  </p>
                  <p>
                    Il processo è trasparente: ti teniamo sempre informato e
                    siamo disponibili per rispondere alle tue domande.
                  </p>
                </div>

                <ol className="space-y-4">
                  {approachItems.map(({ icon: Icon, title, description }) => (
                    <li key={title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ff7351]/10 text-[#ff7351] ring-1 ring-[#ff7351]/25">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{title}</h4>
                        <p className="text-sm text-slate-600">{description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden border-b border-[#e85a3a]/30">
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#e85a3a]/95 via-[#ff7351]/90 to-[#c94a32]/95"
            aria-hidden
          />

          <div className="container-page relative z-10 py-16 md:py-20">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <img
                src="/icona%20bianca.png"
                alt=""
                aria-hidden
                className="mx-auto h-10 w-auto"
                loading="lazy"
                decoding="async"
              />
              <h2 className="section-title-light text-balance">
                Inizia il tuo progetto{' '}
                <span className="text-[#ffd0c2]">con noi</span>
              </h2>
              <p className="mx-auto max-w-xl text-white/90">
                Contattaci per una consulenza gratuita e scopri come possiamo
                aiutare il tuo business a crescere online.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
                <Link to="/richiedi-preventivo" className="btn-on-dark">
                  Richiedi un preventivo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/contatti" className="btn-hero-link-on-dark">
                  Contattaci
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ChiSiamoPage;
