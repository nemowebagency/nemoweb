import React from 'react';
import {
  Braces,
  Code2,
  Cpu,
  Database,
  Globe2,
  Network,
  Server,
  Terminal,
  Home,
  Calendar,
  ShoppingBag,
  Search,
  Shield,
  Palette,
} from 'lucide-react';

const bgIcons = [
  { Icon: Code2, className: 'left-[6%] top-[12%] h-16 w-16 md:h-20 md:w-20' },
  { Icon: Terminal, className: 'right-[8%] top-[18%] h-14 w-14 md:h-16 md:w-16' },
  { Icon: Database, className: 'left-[12%] bottom-[20%] h-12 w-12 md:h-14 md:w-14' },
  {
    Icon: Server,
    className: 'right-[10%] bottom-[15%] h-16 w-16 md:h-[4.5rem] md:w-[4.5rem]',
  },
  { Icon: Cpu, className: 'left-[42%] top-[8%] h-10 w-10 opacity-60' },
  { Icon: Globe2, className: 'right-[38%] bottom-[10%] h-11 w-11 opacity-60' },
  { Icon: Network, className: 'left-[28%] bottom-[8%] h-9 w-9 opacity-50' },
  { Icon: Braces, className: 'right-[22%] top-[10%] h-12 w-12 opacity-70' },
];

const ServicesSectionBackground = () => (
  <div
    className="pointer-events-none absolute inset-0 overflow-hidden"
    aria-hidden
  >
    <div className="services-it-grid absolute inset-0" />
    <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#ffb399]/20 blur-3xl" />
    <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-[#ff7351]/10 blur-3xl" />
    <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffd0c2]/25 blur-3xl" />

    <span className="absolute left-[4%] top-[45%] select-none font-mono text-[clamp(4rem,12vw,9rem)] font-bold leading-none text-[#ff7351]/[0.04]">
      {'{ }'}
    </span>
    <span className="absolute right-[5%] top-[38%] select-none font-mono text-[clamp(3rem,10vw,7rem)] font-bold leading-none text-slate-900/[0.04]">
      01
    </span>
    <span className="absolute bottom-[12%] left-[35%] select-none font-mono text-4xl font-semibold text-[#ff7351]/[0.05] md:text-5xl">
      &lt;/&gt;
    </span>

    {bgIcons.map(({ Icon, className }, index) => (
      <Icon
        key={index}
        className={`absolute text-[#ff7351]/25 ${className}`}
        strokeWidth={1}
      />
    ))}
  </div>
);

const services = [
  {
    title: 'Siti vetrina',
    icon: Home,
    description:
      'Presenza professionale, responsive e ottimizzata per raccontare la tua attività.',
  },
  {
    title: 'Sistemi di prenotazione',
    icon: Calendar,
    description:
      'Calendari, notifiche e pagamenti per ristoranti, saloni, studi e hospitality.',
  },
  {
    title: 'E-commerce',
    icon: ShoppingBag,
    description:
      'Catalogo, carrello e checkout sicuro per vendere online con controllo totale.',
  },
  {
    title: 'Design & brand',
    icon: Palette,
    description:
      'Interfacce chiare e identità visiva coerente con il tuo posizionamento.',
  },
  {
    title: 'SEO & performance',
    icon: Search,
    description:
      'Velocità, accessibilità e ottimizzazione per essere trovati e convertire.',
  },
  {
    title: 'Manutenzione & supporto',
    icon: Shield,
    description:
      'Aggiornamenti, sicurezza e assistenza continua dopo il lancio.',
  },
];

const HomeServicesSection = () => (
  <section id="services" className="section-padding relative overflow-hidden">
    <ServicesSectionBackground />
    <div className="container-page relative z-10 space-y-10">
      <header className="fade-in-up max-w-3xl space-y-4">
        <div className="space-y-3">
          <img
            src="/icona%20arancione.png"
            alt="Logo Nemo Web Agency"
            className="h-10 w-auto"
            loading="lazy"
            decoding="async"
          />
          <h2 className="section-title">
            Un unico partner per{' '}
            <span className="text-[var(--brand-muted)]">
              design, sviluppo e crescita.
            </span>
          </h2>
          <p>
            Soluzioni integrate per trasformare le tue idee in siti web efficaci
            e misurabili.
          </p>
        </div>
      </header>

      <div className="fade-in-up grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              className="card-hover group relative flex flex-col overflow-hidden p-5"
            >
              <Icon
                className="pointer-events-none absolute right-0 top-1/2 h-28 w-28 -translate-y-1/2 translate-x-1/2 text-[#ff7351] opacity-20"
                strokeWidth={1.25}
                aria-hidden
              />
              <div className="relative space-y-4 pr-16">
                <h3 className="text-base font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600">{service.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default HomeServicesSection;
