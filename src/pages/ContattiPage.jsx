import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Clock,
  AlertCircle,
  Loader2,
  ArrowRight,
} from 'lucide-react';
import { EMAILJS_CONFIG } from '../config/emailjs';

const inputClassName =
  'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition-all placeholder:text-slate-400 focus:border-[#ff7351] focus:outline-none focus:ring-2 focus:ring-[#ff7351]/25';

const ContattiPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
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
          budget: 'Non specificato',
          deadline: 'Non specificato',
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
          message: '',
        });
      }, 5000);
    } catch (err) {
      console.error('Errore invio email:', err);
      setError(
        "Errore nell'invio del messaggio. Riprova più tardi o contattaci direttamente."
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <PageHero
          id="contatti"
          scrollTarget="#contatti-form"
          title="Contattaci"
          description="Siamo qui per aiutarti a realizzare il tuo progetto digitale. Compila il form o scrivici direttamente: ti rispondiamo il prima possibile."
          actions={[
            {
              label: 'Invia un messaggio',
              href: '#contatti-form',
              variant: 'primary',
            },
            {
              label: 'Richiedi preventivo',
              href: '/richiedi-preventivo',
              variant: 'link',
            },
          ]}
        />

        <section
          id="contatti-form"
          className="section-padding relative scroll-mt-16 overflow-hidden border-b border-slate-200 bg-slate-50"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,_rgba(255,115,81,0.08),_transparent_45%),radial-gradient(circle_at_90%_70%,_rgba(255,115,81,0.05),_transparent_50%)]" />
            <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[#ff7351]/10 blur-3xl" />
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
                Parliamo del tuo{' '}
                <span className="text-[var(--brand-muted)]">progetto</span>
              </h2>
              <p className="max-w-2xl">
                Scegli il canale che preferisci oppure inviaci un messaggio
                dettagliato: ti aiutiamo a definire obiettivi, tempi e soluzioni.
              </p>
            </header>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Contact info */}
              <div
                data-scroll
                className="space-y-6 opacity-0 translate-y-8 transition-all duration-700"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Informazioni di contatto
                  </h3>
                  <p className="text-slate-600">
                    Disponibili per rispondere a domande su servizi, tempistiche
                    e preventivi.
                  </p>
                </div>

                <a
                  href="mailto:nemowebagency@gmail.com"
                  className="card-hover group flex items-start gap-4 p-5"
                >
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ff7351]/10 text-[#ff7351] ring-1 ring-[#ff7351]/30">
                    <Mail className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600 transition-colors group-hover:text-[#ff7351]">
                      nemowebagency@gmail.com
                    </p>
                  </div>
                </a>

                <div className="card-hover group flex items-start gap-4 p-5">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ff7351]/10 text-[#ff7351] ring-1 ring-[#ff7351]/30">
                    <Phone className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Telefono</h4>
                    <p className="text-slate-600">
                      <a
                        href="tel:+393295417220"
                        className="block transition-colors hover:text-[#ff7351] group-hover:text-[#ff7351]"
                      >
                        +39 329 541 7220
                      </a>
                      <a
                        href="tel:+393663352382"
                        className="block transition-colors hover:text-[#ff7351] group-hover:text-[#ff7351]"
                      >
                        +39 366 335 2382
                      </a>
                    </p>
                  </div>
                </div>

                <div className="card-hover flex items-start gap-4 p-5">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ff7351]/10 text-[#ff7351] ring-1 ring-[#ff7351]/30">
                    <Clock className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-slate-900">
                      Orari di disponibilità
                    </h4>
                    <div className="space-y-0.5 text-sm text-slate-600">
                      <p>Lunedì – Venerdì: 9:00 – 18:00</p>
                      <p>Sabato: chiuso</p>
                      <p>Domenica: chiuso</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link to="/richiedi-preventivo" className="btn-secondary">
                    Preferisci un preventivo dettagliato?
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Form */}
              <div
                data-scroll
                className="card-hover p-6 opacity-0 translate-y-8 transition-all duration-700 sm:p-8"
              >
                <div className="mb-6 space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Invia un <span className="text-[#ff7351]">messaggio</span>
                  </h3>
                  <p className="text-sm text-slate-600">
                    Compila i campi: ti ricontattiamo appena possibile.
                  </p>
                </div>

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
                        Messaggio inviato!
                      </p>
                      <p className="text-sm text-emerald-700">
                        Ti risponderemo il prima possibile.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
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

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Servizio di interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClassName}
                    >
                      <option value="">Seleziona un servizio</option>
                      <option value="sito-vetrina">Sito Vetrina</option>
                      <option value="sito-prenotazione">
                        Sito di Prenotazione
                      </option>
                      <option value="e-commerce">E-commerce</option>
                      <option value="altro">Altro</option>
                    </select>
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
                      rows={5}
                      className={`${inputClassName} resize-none`}
                      placeholder="Raccontaci del tuo progetto..."
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
                        Invia messaggio
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

        {/* Soft CTA band */}
        <section className="section-padding relative overflow-hidden border-b border-[#ffd0c2] bg-[#fff5f1]">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,_rgba(255,115,81,0.18),_transparent_62%)]" />
            <div className="services-it-grid absolute inset-0 opacity-[0.1]" />
          </div>

          <div className="container-page relative z-10">
            <div
              data-scroll
              className="mx-auto max-w-2xl space-y-5 text-center opacity-0 translate-y-8 transition-all duration-700"
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
                Hai già le idee{' '}
                <span className="text-[#ff7351]">chiare</span>?
              </h2>
              <p className="mx-auto max-w-xl text-slate-600">
                Vai direttamente al form preventivo e raccontaci servizio,
                budget e tempi: ti prepariamo una proposta su misura.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
                <Link to="/richiedi-preventivo" className="btn-primary">
                  Richiedi un preventivo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/servizi" className="btn-hero-link">
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

export default ContattiPage;
