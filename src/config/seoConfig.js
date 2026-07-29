export const baseUrl = 'https://www.nemoagency.it';

export const seoConfig = {
  default: {
    siteName: 'Nemo Web Agency',
    siteDescription:
      'Agenzia web specializzata nella creazione di siti web professionali, moderni e orientati ai risultati. Siti vetrina, e-commerce e sistemi di prenotazione dal 2016.',
    keywords:
      'web agency, siti web, sviluppo web, e-commerce, siti prenotazione, web design, Sicilia, agenzia digitale, siti vetrina, web development',
    author: 'Nemo Web Agency',
    ogImage: `${baseUrl}/og-image.jpg`,
    twitterCard: 'summary_large_image',
    twitterSite: '@nemoagency',
    locale: 'it_IT',
  },
  pages: {
    '/': {
      title: 'Nemo Web Agency - Creiamo il Tuo Successo Digitale',
      description:
        "Sviluppiamo soluzioni digitali innovative con design moderno e tecnologie all'avanguardia. Siti web professionali, e-commerce e sistemi di prenotazione per far crescere il tuo business online.",
      keywords:
        'web agency Sicilia, siti web professionali, sviluppo siti web, agenzia digitale, e-commerce Sicilia, siti prenotazione, web design moderno, sviluppo web',
    },
    '/chi-siamo': {
      title: 'Chi Siamo - Nemo Web Agency | La Nostra Storia',
      description:
        "Siamo Nemo Web Agency, un'agenzia digitale specializzata nella creazione di siti web professionali dal 2016. Scopri la nostra mission, i nostri valori e il nostro team.",
      keywords:
        'chi siamo nemo web agency, agenzia web Sicilia, team sviluppo web, storia agenzia digitale, mission web agency',
    },
    '/servizi': {
      title: 'Servizi Web - Siti Vetrina, E-commerce e Prenotazione | Nemo Web Agency',
      description:
        'Offriamo servizi completi per ogni esigenza digitale: siti vetrina, sistemi di prenotazione ed e-commerce. Soluzioni personalizzate e moderne per il tuo business.',
      keywords:
        'servizi web, siti vetrina prezzi, e-commerce Sicilia, sistemi prenotazione online, sviluppo siti web, web design personalizzato',
    },
    '/contatti': {
      title: 'Contatti - Richiedi una Consulenza Gratuita | Nemo Web Agency',
      description:
        'Contattaci per una consulenza gratuita sul tuo progetto digitale. Siamo disponibili per rispondere a tutte le tue domande e aiutarti a realizzare la tua presenza online.',
      keywords:
        'contatti web agency, consulenza gratuita, preventivo sito web, contattare nemo web agency',
    },
    '/richiedi-preventivo': {
      title: 'Richiedi un Preventivo - Servizi Web Professionali | Nemo Web Agency',
      description:
        'Richiedi un preventivo gratuito per il tuo sito web. Compila il form con i dettagli del tuo progetto e riceverai una proposta personalizzata in tempi brevi.',
      keywords:
        'preventivo sito web, preventivo gratuito, preventivo e-commerce, preventivo sito prenotazione, richiesta preventivo',
    },
    '/privacy': {
      title: 'Privacy Policy - Informativa sulla Privacy | Nemo Web Agency',
      description:
        'Informativa sulla privacy di Nemo Web Agency. Come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.',
      keywords: 'privacy policy, informativa privacy, trattamento dati personali, GDPR',
    },
    '/cookie-policy': {
      title: 'Cookie Policy - Informativa sui Cookie | Nemo Web Agency',
      description:
        'Informativa sui cookie utilizzati dal sito web di Nemo Web Agency. Scopri come utilizziamo i cookie e come gestirli.',
      keywords: 'cookie policy, informativa cookie, gestione cookie, privacy cookie',
    },
    '/termini-condizioni': {
      title: 'Termini e Condizioni - Condizioni di Utilizzo | Nemo Web Agency',
      description:
        "Termini e condizioni di utilizzo del sito web di Nemo Web Agency. Leggi le condizioni che regolano l'uso dei nostri servizi.",
      keywords: 'termini e condizioni, condizioni di utilizzo, termini di servizio',
    },
    '/sitemap': {
      title: 'Sitemap - Mappa del Sito | Nemo Web Agency',
      description:
        'Naviga facilmente attraverso tutte le pagine del sito web di Nemo Web Agency. Mappa completa del sito con tutte le sezioni e pagine disponibili.',
      keywords: 'sitemap, mappa del sito, navigazione sito, struttura sito web',
    },
  },
};

export const getCanonicalUrl = (path) => `${baseUrl}${path}`;

export const getSeoData = (path) => {
  const pageConfig = seoConfig.pages[path] || seoConfig.pages['/'];
  return {
    title: pageConfig.title || seoConfig.default.siteName,
    description: pageConfig.description || seoConfig.default.siteDescription,
    keywords: pageConfig.keywords || seoConfig.default.keywords,
    canonical: getCanonicalUrl(path),
    ogImage: pageConfig.ogImage || seoConfig.default.ogImage,
    locale: seoConfig.default.locale,
  };
};
