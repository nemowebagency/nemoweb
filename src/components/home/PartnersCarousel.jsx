import React, { useEffect, useRef } from 'react';

const partners = [
  'AccademiaDelGusto.png',
  'ales.png',
  'AndreaAsaro.png',
  'BarBonventre.png',
  'BeYou.png',
  'BonifatoCalcio.png',
  'CarlaFerroni.png',
  'DueCLimited.png',
  'FigliDItalia.png',
  'HolidaySicily.png',
  'LivingLab.png',
  'MangiareSicano.png',
  'Riverloop.png',
  'Scopeltour.png',
  'SimoneGrasso.png',
  'SocialSail.png',
];

const partnerAltTexts = {
  'AccademiaDelGusto.png': 'Logo del partner Accademia del Gusto',
  'ales.png': 'Logo del partner Alessandro Accomando',
  'AndreaAsaro.png': 'Logo del partner Andrea Asaro',
  'BarBonventre.png': 'Logo del partner Bar Bonventre',
  'BeYou.png': 'Logo del partner BeYou',
  'BonifatoCalcio.png': 'Logo del partner Bonifato',
  'CarlaFerroni.png': 'Logo del partner Carla Ferroni',
  'DueCLimited.png': 'Logo del partner DueCLimited',
  'FigliDItalia.png': "Logo del partner Figli d'Italia",
  'HolidaySicily.png': 'Logo del partner Holiday Sicily',
  'LivingLab.png': 'Logo del partner Livinglab',
  'MangiareSicano.png': 'Logo del partner Mangiare Sicano',
  'Riverloop.png': 'Logo del partner Riverloop',
  'Scopeltour.png': 'Logo del partner Scopeltour',
  'SimoneGrasso.png': 'Logo del partner Simone Grasso',
  'SocialSail.png': 'Logo del partner Social Sail',
};

const PartnersCarousel = () => {
  const partnersWrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = partnersWrapperRef.current;
    if (!wrapper) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    let animationId;
    let currentOffset = 0;
    const partnersCount = partners.length;

    const updateCardWidth = () => {
      const isMobile = window.innerWidth < 768;
      return isMobile ? window.innerWidth / 3 : window.innerWidth / 6;
    };

    const getOneSetWidth = () => partnersCount * updateCardWidth();

    const animate = () => {
      const el = partnersWrapperRef.current;
      if (!el) {
        if (animationId) cancelAnimationFrame(animationId);
        return;
      }

      currentOffset -= 1;
      const oneSetWidth = getOneSetWidth();
      if (Math.abs(currentOffset) >= oneSetWidth) {
        currentOffset = 0;
      }

      el.style.transform = `translate3d(${currentOffset}px, 0, 0)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      currentOffset = 0;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
      <div
        ref={partnersWrapperRef}
        className="flex items-center"
        style={{ willChange: 'transform', transition: 'none' }}
      >
        {[...partners, ...partners, ...partners].map((partner, index) => (
          <div
            key={`${partner}-${index}`}
            className="flex h-32 w-[calc(100vw/3)] flex-shrink-0 items-center justify-center md:w-[calc(100vw/6)]"
          >
            <img
              src={`/partner/${partner}`}
              alt={partnerAltTexts[partner] || partner.replace('.png', '')}
              className="max-h-16 max-w-full object-contain px-4 opacity-90 transition-opacity hover:opacity-100 md:max-h-20 md:px-8"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;
