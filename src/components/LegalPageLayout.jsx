import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageHero from './PageHero';

const LegalPageLayout = ({
  id,
  title,
  description,
  scrollTarget = '#legal-content',
  children,
  ctaTitle,
  ctaDescription,
}) => {
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
          id={id}
          scrollTarget={scrollTarget}
          title={title}
          description={description}
          actions={[
            {
              label: 'Leggi il documento',
              href: scrollTarget,
              variant: 'primary',
            },
            { label: 'Contattaci', href: '/contatti', variant: 'link' },
          ]}
        />

        <section
          id={scrollTarget.replace('#', '')}
          className="section-padding relative scroll-mt-16 overflow-hidden border-b border-slate-200 bg-slate-50"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,_rgba(255,115,81,0.08),_transparent_45%),radial-gradient(circle_at_90%_70%,_rgba(255,115,81,0.05),_transparent_50%)]" />
            <div className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-[#ff7351]/10 blur-3xl" />
          </div>

          <div className="container-page relative z-10">
            <div
              data-scroll
              className="mx-auto max-w-3xl opacity-0 translate-y-8 transition-all duration-700"
            >
              <div className="mb-8 space-y-3">
                <img
                  src="/icona%20arancione.png"
                  alt=""
                  aria-hidden
                  className="h-10 w-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="card-hover space-y-8 p-6 sm:p-8 md:p-10">
                {children}
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-32 w-[100vw] -translate-x-1/2 overflow-hidden sm:h-40 md:h-48"
            aria-hidden
          >
            <img
              src="/Logo%20Nero.png"
              alt=""
              className="absolute bottom-0 left-4 right-4 h-64 w-full max-w-none translate-y-1/2 object-contain object-bottom opacity-10 sm:left-6 sm:right-6 sm:h-80 md:h-96 lg:left-8 lg:right-8"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

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
              <h2 className="section-title text-balance">{ctaTitle}</h2>
              <p className="mx-auto max-w-xl text-slate-600">{ctaDescription}</p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
                <a
                  href="mailto:nemowebagency@gmail.com"
                  className="btn-primary"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Scrivici
                </a>
                <Link to="/contatti" className="btn-hero-link">
                  Vai ai contatti
                  <ArrowRight className="ml-2 h-4 w-4" />
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

export const LegalSection = ({ title, children }) => (
  <section className="space-y-3">
    <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
      {title}
    </h2>
    <div className="space-y-3 text-slate-600 [&_a]:font-medium [&_a]:text-[#ff7351] [&_a]:underline-offset-2 hover:[&_a]:underline [&_li]:leading-relaxed [&_p]:leading-relaxed [&_strong]:text-slate-800 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
      {children}
    </div>
  </section>
);

export const LegalCard = ({ title, children, note }) => (
  <article className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6">
    <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
    <div className="space-y-2 text-sm leading-relaxed text-slate-600">
      {children}
    </div>
    {note && <p className="mt-3 text-sm italic text-slate-500">{note}</p>}
  </article>
);

export default LegalPageLayout;
