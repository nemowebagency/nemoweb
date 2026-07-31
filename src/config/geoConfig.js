export const geoFaqs = {
  '/': [
    {
      question: 'Cosa fa Nemo Web Agency?',
      answer:
        'Nemo Web Agency progetta e sviluppa siti web su misura: siti vetrina, sistemi di prenotazione ed e-commerce. Uniamo design, sviluppo e strategia per far crescere la presenza online di imprese e professionisti, con sede operativa in Sicilia e attività dal 2016.',
    },
    {
      question: 'Quali servizi web offrite?',
      answer:
        'Offriamo tre percorsi principali: siti vetrina (da 600€), siti di prenotazione (da 1600€) ed e-commerce (da 2100€). Ogni soluzione include design responsive, performance curate e supporto dopo il lancio.',
    },
    {
      question: 'Come posso richiedere un preventivo?',
      answer:
        'Puoi contattarci dal form Contatti o dalla pagina Richiedi preventivo. La consulenza è gratuita e senza impegno; rispondiamo in tempi rapidi a nemowebagency@gmail.com o al +39 329 541 7220.',
    },
    {
      question: 'Dove opera Nemo Web Agency?',
      answer:
        'Nemo Web Agency opera in Italia, con radici in Sicilia. Lavoriamo con clienti locali e remoti su progetti digitali in italiano.',
    },
  ],
  '/servizi': [
    {
      question: 'Quali servizi web offre Nemo?',
      answer:
        'Nemo offre tre percorsi chiari: siti vetrina per presentare l’attività online, siti di prenotazione per gestire appuntamenti e disponibilità, ed e-commerce per vendere prodotti online con pagamenti e gestione ordini.',
    },
    {
      question: 'Quanto costa un sito vetrina?',
      answer:
        'Un sito vetrina parte da 600€ e include design moderno e responsive, fino a 5 pagine, modulo di contatto, SEO base e supporto tecnico. Il prezzo finale dipende da pagine, contenuti e integrazioni richieste.',
    },
    {
      question: 'Cosa include un sito di prenotazione?',
      answer:
        'I siti di prenotazione partono da 1600€ e includono calendario interattivo, disponibilità in tempo reale, notifiche email, pannello amministrativo e gestione cancellazioni: ideali per ristoranti, saloni, studi e B&B.',
    },
    {
      question: 'Cosa include un e-commerce Nemo?',
      answer:
        'L’e-commerce parte da 2100€ e comprende catalogo prodotti, checkout sicuro, integrazioni di pagamento (come PayPal e Stripe), gestione ordini e spedizioni, inventario e strumenti di marketing come coupon.',
    },
    {
      question: 'Posso chiedere un preventivo personalizzato?',
      answer:
        'Sì. Compila il form su Richiedi preventivo o Contatti: ricevi una proposta su misura senza impegno, dopo una consulenza gratuita sul tuo progetto.',
    },
  ],
  '/chi-siamo': [
    {
      question: 'Chi è Nemo Web Agency?',
      answer:
        'Nemo Web Agency è un’agenzia digitale italiana che dal 2016 crea siti web professionali, moderni e orientati ai risultati. Aiutiamo imprese e professionisti a crescere online con design e sviluppo su misura.',
    },
    {
      question: 'Da quanto tempo operate?',
      answer:
        'Operiamo dal 2016. In questi anni abbiamo accompagnato numerosi clienti su progetti digitali, con focus su qualità, affidabilità e risultati di business misurabili.',
    },
    {
      question: 'Qual è la vostra mission?',
      answer:
        'Creare siti web che non siano solo belli da vedere, ma che portino risultati concreti: analizziamo le esigenze del cliente, progettiamo un’esperienza chiara e sviluppiamo soluzioni performanti e scalabili.',
    },
    {
      question: 'Come lavorate con i clienti?',
      answer:
        'Lavoriamo come partner, non come semplici fornitori: consulenza personalizzata, design unico e supporto continuo anche dopo il lancio, con un processo trasparente e comunicazione costante.',
    },
  ],
};

export const getGeoFaqs = (path) => geoFaqs[path] || null;
