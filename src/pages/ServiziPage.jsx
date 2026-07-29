import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import {
  Home,
  Calendar,
  ShoppingBag,
  ArrowRight,
  Check,
  Globe,
  Settings,
  BarChart,
  Shield,
  Zap,
  Palette,
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Siti Vetrina',
    value: 'sito-vetrina',
    price: 'da 600€',
    description:
      'Siti web professionali e moderni per presentare la tua attività online. Perfetti per attività locali, professionisti e artisti che vogliono una presenza digitale di qualità.',
    features: [
      'Design moderno e responsive',
      'Fino a 5 pagine personalizzate',
      'Modulo di contatto avanzato',
      'Ottimizzazione SEO base',
      'Pannello di gestione contenuti',
      'Supporto tecnico incluso',
      'Velocità di caricamento ottimizzata',
      'Integrazione social media',
    ],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Workspace digitale con analytics e laptop',
  },
  {
    icon: Calendar,
    title: 'Siti di Prenotazione',
    value: 'sito-prenotazione',
    price: 'da 1600€',
    description:
      'Sistemi di prenotazione online completi per ristoranti, saloni, studi medici, B&B e tutte le attività che necessitano di gestione prenotazioni.',
    features: [
      'Sistema di calendario interattivo',
      'Gestione disponibilità in tempo reale',
      'Notifiche email automatiche',
      'Pannello amministrativo completo',
      'Integrazione con calendari esterni',
      'Sistema di conferma automatica',
      'Gestione cancellazioni',
      'Statistiche e report prenotazioni',
    ],
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Team al lavoro su laptop in un ambiente collaborativo',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    value: 'e-commerce',
    price: 'da 2100€',
    description:
      'Piattaforme di vendita online complete con catalogo prodotti, sistema di pagamento sicuro, gestione ordini e spedizioni per far crescere il tuo business.',
    features: [
      'Catalogo prodotti illimitato',
      'Carrello e checkout sicuro',
      'Integrazione pagamenti (PayPal, Stripe, etc.)',
      'Gestione ordini e spedizioni',
      'Pannello amministrativo avanzato',
      'Integrazione con corrieri',
      'Sistema di gestione inventario',
      'Marketing e coupon system',
    ],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pagamento con carta su dispositivo digitale',
  },
];

const includedFeatures = [
  { icon: Globe, title: 'Design responsive', desc: 'Perfetto su ogni dispositivo' },
  { icon: Zap, title: 'Performance ottimizzate', desc: 'Caricamento velocissimo' },
  { icon: Shield, title: 'Sicurezza avanzata', desc: 'Protezione dati garantita' },
  { icon: BarChart, title: 'Analytics integrati', desc: 'Monitora le performance' },
  { icon: Settings, title: 'Facile da gestire', desc: 'Pannello intuitivo' },
  { icon: Palette, title: 'Design personalizzato', desc: 'Unico come la tua attività' },
];

const ServiziPage = () => {
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

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const timeout = window.setTimeout(() => {
      const element = document.getElementById(hash.substring(1));
      if (!element) return;
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 300);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <PageHero
          id="servizi"
          scrollTarget="#servizi-elenco"
          title={
            <>
              I nostri <span className="text-[#ffb399]">servizi</span>
            </>
          }
          description="Soluzioni web complete e personalizzate per far crescere il tuo business online. Tre percorsi chiari, un unico partner."
          actions={[
            {
              label: 'Scopri le soluzioni',
              href: '#servizi-elenco',
              variant: 'primary',
            },
            {
              label: 'Richiedi preventivo',
              href: '/richiedi-preventivo',
              variant: 'link',
            },
          ]}
        />

        {/* Services */}
        <section
          id="servizi-elenco"
          className="section-padding relative scroll-mt-16 overflow-hidden border-b border-slate-200 bg-slate-50"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,_rgba(255,115,81,0.08),_transparent_45%),radial-gradient(circle_at_90%_70%,_rgba(255,115,81,0.05),_transparent_50%)]" />
            <div className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-[#ff7351]/10 blur-3xl" />
          </div>

          <div className="container-page relative z-10 space-y-16 md:space-y-24">
            <header className="max-w-3xl space-y-3">
              <img
                src="/logo-512x512.png"
                alt=""
                aria-hidden
                className="h-8 w-auto"
                loading="lazy"
                decoding="async"
              />
              <h2 className="section-title text-balance">
                Tre soluzioni, un unico{' '}
                <span className="text-[var(--brand-muted)]">ecosistema</span>
              </h2>
              <p className="max-w-2xl">
                Siti vetrina, prenotazioni ed e-commerce: scegli il percorso giusto
                per la tua attività.
              </p>
            </header>

            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <article
                  key={service.value}
                  id={service.value}
                  data-scroll
                  className={`grid scroll-mt-24 gap-8 opacity-0 translate-y-8 transition-all duration-700 lg:grid-cols-2 lg:items-center lg:gap-12 ${
                    !isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-2'}`}>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ff7351]/10 text-[#ff7351] ring-1 ring-[#ff7351]/30">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                        {service.title}
                      </h3>
                      <p className="text-2xl font-semibold text-[#ff7351]">
                        {service.price}
                      </p>
                    </div>

                    <p className="text-slate-600">{service.description}</p>

                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#ff7351]"
                            aria-hidden
                          />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-1">
                      <Link
                        to={`/richiedi-preventivo?service=${service.value}`}
                        className="btn-primary"
                      >
                        Richiedi preventivo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <div
                    className={
                      isEven ? '' : 'lg:col-start-1 lg:row-start-1'
                    }
                  >
                    <div className="card-hover group overflow-hidden">
                      <div
                        className="min-h-[260px] bg-cover bg-center transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] sm:min-h-[320px]"
                        style={{ backgroundImage: `url('${service.image}')` }}
                        role="img"
                        aria-label={service.alt}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
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

        {/* Included in every project */}
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
                src="/logo-512x512.png"
                alt=""
                aria-hidden
                className="mx-auto h-8 w-auto"
                loading="lazy"
                decoding="async"
              />
              <h2 className="section-title text-balance">
                Cosa include ogni{' '}
                <span className="text-[#ff7351]">progetto</span>
              </h2>
              <p className="mx-auto max-w-2xl">
                Caratteristiche standard in tutti i nostri servizi.
              </p>
            </header>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {includedFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={feature.title}
                    data-scroll
                    className="card-hover group relative flex flex-col overflow-hidden p-5 opacity-0 translate-y-8 transition-all duration-700"
                    style={{ transitionDelay: `${index * 70}ms` }}
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
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-600">{feature.desc}</p>
                    </div>
                  </article>
                );
              })}
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
                src="/Bianco-Arancio.png"
                alt=""
                aria-hidden
                className="mx-auto h-8 w-auto opacity-90"
                loading="lazy"
                decoding="async"
              />
              <h2 className="section-title-light text-balance">
                Pronto a iniziare il tuo{' '}
                <span className="text-[#ffd0c2]">progetto</span>?
              </h2>
              <p className="mx-auto max-w-xl text-white/90">
                Contattaci per una consulenza gratuita e ricevi un preventivo
                personalizzato.
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

export default ServiziPage;
