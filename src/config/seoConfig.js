export const baseUrl = 'https://www.nemoagency.it';

export const seoConfig = {
  default: {
    siteName: 'Nemo Web Agency',
    siteDescription:
      'Progettiamo siti web su misura per far crescere la tua presenza online. Partner unico per design, sviluppo e risultati concreti dal 2016.',
    keywords:
      'web agency, siti web, sviluppo web, e-commerce, siti prenotazione, web design, Sicilia, Nemo Web Agency',
    author: 'Nemo Web Agency',
    ogImage: `${baseUrl}/og-image.jpg`,
    twitterCard: 'summary_large_image',
    locale: 'it_IT',
  },
  pages: {
    '/': {
      title: 'Nemo Web Agency - Creiamo siti web, software e soluzioni',
      description:
        'Progettiamo siti web su misura per far crescere la tua presenza online. Un partner unico per design, sviluppo e risultati concreti dal 2016.',
      keywords:
        'web agency Sicilia, siti web professionali, sviluppo software, e-commerce, siti prenotazione, Nemo Web Agency',
    },
    '/chi-siamo': {
      title: 'Chi siamo - Nemo Web Agency dal 2016',
      description:
        'Siamo Nemo Web Agency: creiamo siti web professionali, moderni e orientati ai risultati. Dal 2016 aiutiamo imprese e professionisti a crescere online.',
      keywords:
        'chi siamo Nemo Web Agency, agenzia web Sicilia, team sviluppo web, mission agenzia digitale',
    },
    '/servizi': {
      title: 'Servizi web - Tre percorsi, un unico partner | Nemo Web Agency',
      description:
        'Soluzioni web complete e personalizzate: siti vetrina, sistemi di prenotazione ed e-commerce. Tre percorsi chiari, un unico partner.',
      keywords:
        'servizi web, siti vetrina, e-commerce Sicilia, sistemi prenotazione, sviluppo siti web',
    },
    '/contatti': {
      title: 'Contatti - Consulenza sul tuo progetto digitale | Nemo Web Agency',
      description:
        'Contattaci per il tuo progetto digitale. Compila il form o scrivici: ti rispondiamo il prima possibile. Consulenza senza impegno.',
      keywords:
        'contatti Nemo Web Agency, consulenza sito web, preventivo web agency Sicilia',
    },
    '/richiedi-preventivo': {
      title:
        'Richiedi preventivo - Siti web e soluzioni digitali | Nemo Web Agency',
      description:
        'Richiedi un preventivo personalizzato per il tuo sito web. Consulenza gratuita, senza impegno: ti rispondiamo in tempi rapidi.',
      keywords:
        'preventivo sito web, preventivo e-commerce, preventivo prenotazione online, Nemo Web Agency',
    },
    '/privacy': {
      title: 'Privacy Policy | Nemo Web Agency',
      description:
        'Informativa sulla privacy di Nemo Web Agency: come raccogliamo, utilizziamo e proteggiamo i dati personali.',
      keywords: 'privacy policy, informativa privacy, GDPR, Nemo Web Agency',
    },
    '/cookie-policy': {
      title: 'Cookie Policy | Nemo Web Agency',
      description:
        'Informativa sui cookie utilizzati dal sito di Nemo Web Agency e come gestirli.',
      keywords: 'cookie policy, informativa cookie, Nemo Web Agency',
    },
    '/termini-condizioni': {
      title: 'Termini e Condizioni | Nemo Web Agency',
      description:
        'Termini e condizioni di utilizzo del sito e dei servizi di Nemo Web Agency.',
      keywords: 'termini e condizioni, condizioni di utilizzo, Nemo Web Agency',
    },
    '/sitemap': {
      title: 'Sitemap | Nemo Web Agency',
      description:
        'Mappa del sito Nemo Web Agency: tutte le sezioni e le pagine disponibili.',
      keywords: 'sitemap, mappa del sito, Nemo Web Agency',
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
