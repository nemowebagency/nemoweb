import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroDecorations, HeroScrollCue } from './home/Hero';

const PageHero = ({
  id,
  title,
  description,
  scrollTarget = '#page-content',
  actions = [],
}) => (
  <section
    id={id}
    data-navbar-hero
    className="relative overflow-hidden border-b border-slate-200 bg-slate-50"
  >
    <HeroDecorations />

    <div className="relative z-10 mx-auto flex min-h-[50vh] w-full max-w-7xl flex-col items-center justify-center px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="fade-in-up w-full max-w-4xl space-y-6 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-6xl xl:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto max-w-2xl text-slate-700">{description}</p>
        )}
        {actions.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            {actions.map(({ label, href, variant = 'primary' }) => {
              const className =
                variant === 'primary' ? 'btn-primary' : 'btn-hero-link';
              const content =
                variant === 'primary' ? (
                  <>
                    {label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  label
                );

              if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
                return (
                  <a key={href} href={href} className={className}>
                    {content}
                  </a>
                );
              }

              return (
                <Link key={href} to={href} className={className}>
                  {content}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>

    <HeroScrollCue
      href={scrollTarget}
      label="Scorri alla sezione successiva"
    />
  </section>
);

export default PageHero;
