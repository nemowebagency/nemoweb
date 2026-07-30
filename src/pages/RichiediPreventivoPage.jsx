import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import {
  CheckCircle2,
  Send,
  Home,
  Calendar,
  ShoppingBag,
  FileText,
  DollarSign,
  Clock,
  AlertCircle,
  Loader2,
  ArrowRight,
} from 'lucide-react';
import { EMAILJS_CONFIG } from '../config/emailjs';

const inputClassName =
  'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition-all placeholder:text-slate-400 focus:border-[#ff7351] focus:outline-none focus:ring-2 focus:ring-[#ff7351]/25';

const services = [
  { value: 'sito-vetrina', label: 'Sito Vetrina', icon: Home },
  { value: 'sito-prenotazione', label: 'Sito di Prenotazione', icon: Calendar },
  { value: 'e-commerce', label: 'E-commerce', icon: ShoppingBag },
  { value: 'altro', label: 'Altro', icon: FileText },
];

const budgetRanges = [
  'Fino a 500€',
  '500€ - 1000€',
  '1000€ - 2000€',
  '2000€ - 5000€',
  'Oltre 5000€',
  'Da definire',
];

const benefits = [
  {
    icon: Clock,
    title: 'Risposta rapida',
    description: 'Riceverai il preventivo entro 24-48 ore.',
  },
  {
    icon: DollarSign,
    title: 'Trasparente',
    description: 'Prezzi chiari, senza sorprese nascoste.',
  },
  {
    icon: CheckCircle2,
    title: 'Senza impegno',
    description: 'Consulenza gratuita e preventivo dettagliato.',
  },
];

const RichiediPreventivoPage = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    deadline: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (
        EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' ||
        EMAILJS_CONFIG.TEMPLATE_ID_QUOTE === 'YOUR_TEMPLATE_ID_QUOTE' ||
        EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
      ) {
        throw new Error(
          'EmailJS non è configurato. Controlla il file src/config/emailjs.js'
        );
      }

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_QUOTE,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Non fornito',
          service: formData.service || 'Non specificato',
          budget: formData.budget || 'Non specificato',
          deadline: formData.deadline || 'Non specificato',
          message: formData.message,
          to_email: 'nemowebagency@gmail.com',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setIsSubmitted(true);
      setIsLoading(false);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          deadline: '',
          message: '',
        });
      }, 5000);
    } catch (err) {
      console.error('Errore invio email:', err);
      setError(
        "Errore nell'invio della richiesta. Riprova più tardi o contattaci direttamente."
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <PageHero
          id="preventivo"
          scrollTarget="#preventivo-form"
          title={
            <>
              Richiedi un{' '}
              <span className="text-[#ffb399]">preventivo</span>
            </>
          }
          description="Compila il form con i dettagli del tuo progetto. Ti inviamo un preventivo personalizzato in tempi rapidi, senza impegno. La consulenza è sempre gratuita."
          actions={[
            {
              label: 'Compila il form',
              href: '#preventivo-form',
              variant: 'primary',
            },
            { label: 'Contattaci', href: '/contatti', variant: 'link' },
          ]}
        />

        {/* Form */}
        <section
          id="preventivo-form"
          className="section-padding relative scroll-mt-16 overflow-hidden border-b border-slate-200 bg-slate-50"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,_rgba(255,115,81,0.08),_transparent_45%),radial-gradient(circle_at_90%_70%,_rgba(255,115,81,0.05),_transparent_50%)]" />
            <div className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-[#ff7351]/10 blur-3xl" />
          </div>

          <div className="container-page relative z-10">
            <div className="space-y-8">
              <header className="space-y-3 text-center sm:text-left">
                <img
                  src="/icona%20arancione.png"
                  alt=""
                  aria-hidden
                  className="mx-auto h-10 w-auto sm:mx-0"
                  loading="lazy"
                  decoding="async"
                />
                <h2 className="section-title text-balance">
                  Dettagli del tuo{' '}
                  <span className="text-[var(--brand-muted)]">progetto</span>
                </h2>
                <p className="mx-auto max-w-2xl sm:mx-0">
                  Più informazioni ci dai, più il preventivo sarà preciso e
                  utile.
                </p>
              </header>

              <div
                data-scroll
                className="card-hover p-6 opacity-0 translate-y-8 transition-all duration-700 sm:p-8 md:p-10"
              >
                {error && (
                  <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4">
                    <AlertCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-red-600"
                      aria-hidden
                    />
                    <div>
                      <p className="font-semibold text-red-900">Errore</p>
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  </div>
                )}

                {isSubmitted && (
                  <div className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                      aria-hidden
                    />
                    <div>
                      <p className="font-semibold text-emerald-900">
                        Richiesta inviata con successo!
                      </p>
                      <p className="text-sm text-emerald-700">
                        Ti contatteremo al più presto con un preventivo
                        personalizzato. Controlla la tua email nei prossimi
                        giorni.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Nome e cognome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClassName}
                        placeholder="Mario Rossi"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClassName}
                        placeholder="mario.rossi@esempio.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClassName}
                      placeholder="+39 123 456 7890"
                    />
                  </div>

                  <fieldset>
                    <legend className="mb-3 text-sm font-medium text-slate-700">
                      Tipo di servizio *
                    </legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {services.map(({ value, label, icon: Icon }) => {
                        const selected = formData.service === value;
                        return (
                          <label
                            key={value}
                            className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition-all ${
                              selected
                                ? 'border-[#ff7351] bg-[#ff7351]/5 ring-2 ring-[#ff7351]/20'
                                : 'border-slate-200 bg-white hover:border-[#ffd0c2]'
                            }`}
                          >
                            <input
                              type="radio"
                              name="service"
                              value={value}
                              checked={selected}
                              onChange={handleChange}
                              required
                              className="sr-only"
                            />
                            <span
                              className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
                                selected
                                  ? 'bg-[#ff7351] text-white'
                                  : 'bg-[#ff7351]/10 text-[#ff7351] ring-1 ring-[#ff7351]/25'
                              }`}
                            >
                              <Icon className="h-5 w-5" aria-hidden />
                            </span>
                            <span className="text-sm font-semibold text-slate-900">
                              {label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Budget previsto
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={inputClassName}
                      >
                        <option value="">Seleziona un range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="deadline"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Scadenza progetto
                      </label>
                      <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Messaggio *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`${inputClassName} resize-none`}
                      placeholder="Raccontaci di più sul tuo progetto..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Invio in corso...
                      </>
                    ) : (
                      <>
                        Invia richiesta
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
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

        {/* Benefits */}
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
                Perché richiedere un{' '}
                <span className="text-[#ff7351]">preventivo</span>
              </h2>
              <p className="mx-auto max-w-2xl">
                Tre motivi per partire con noi: velocità, chiarezza e zero
                impegno.
              </p>
            </header>

            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <article
                    key={benefit.title}
                    data-scroll
                    className="card-hover group relative flex flex-col overflow-hidden p-5 text-center opacity-0 translate-y-8 transition-all duration-700 sm:p-6"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <Icon
                      className="pointer-events-none absolute right-0 top-1/2 h-24 w-24 -translate-y-1/2 translate-x-1/2 text-[#ff7351] opacity-20"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                    <div className="relative mx-auto space-y-3">
                      <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff7351]/10 text-[#ff7351] ring-1 ring-[#ff7351]/30 transition-[background-color,box-shadow] duration-500 group-hover:bg-[#ff7351]/15 group-hover:shadow-[0_8px_24px_-12px_rgba(255,115,81,0.45)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {benefit.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Soft CTA */}
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
                Preferisci parlare{' '}
                <span className="text-[#ffd0c2]">prima</span>?
              </h2>
              <p className="mx-auto max-w-xl text-white/90">
                Scrivici o chiamaci: ti aiutiamo a chiarire obiettivi e
                priorità prima del preventivo formale.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
                <Link to="/contatti" className="btn-on-dark">
                  Vai ai contatti
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/servizi" className="btn-hero-link-on-dark">
                  Guarda i servizi
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

export default RichiediPreventivoPage;
