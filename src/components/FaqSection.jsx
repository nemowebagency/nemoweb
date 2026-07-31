import React from 'react';

/**
 * Visible FAQ block for GEO (answer extractability) - keep copy identical to geoConfig / JSON-LD.
 */
const FaqSection = ({
  id = 'faq',
  title = (
    <>
      Domande <span className="text-[var(--brand-muted)]">frequenti</span>
    </>
  ),
  intro,
  items = [],
}) => {
  if (!items.length) return null;

  return (
    <section
      id={id}
      className="section-padding relative scroll-mt-16 overflow-hidden border-b border-slate-200 bg-white"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,_rgba(255,115,81,0.06),_transparent_45%),radial-gradient(circle_at_90%_70%,_rgba(255,115,81,0.04),_transparent_50%)]" />
      </div>

      <div className="container-page relative z-10 space-y-10">
        <header className="mx-auto max-w-3xl space-y-3 text-center">
          <img
            src="/icona%20arancione.png"
            alt=""
            aria-hidden
            className="mx-auto h-10 w-auto"
            loading="lazy"
            decoding="async"
          />
          <h2 className="section-title text-balance">{title}</h2>
          {intro ? <p className="mx-auto max-w-2xl text-slate-600">{intro}</p> : null}
        </header>

        <div className="mx-auto max-w-3xl space-y-3">
          {items.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-3xl border border-slate-200 bg-slate-50/80 px-5 py-4 open:border-[#ff7351]/40 open:bg-white open:shadow-sm"
            >
              <summary className="cursor-pointer list-none font-semibold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span>{question}</span>
                  <span
                    className="mt-0.5 shrink-0 text-[#ff7351] transition-transform duration-300 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
