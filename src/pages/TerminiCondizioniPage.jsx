import React from 'react';
import LegalPageLayout, { LegalSection } from '../components/LegalPageLayout';

const TerminiCondizioniPage = () => (
  <LegalPageLayout
    id="termini"
    title={
      <>
        Termini e <span className="text-[#ffb399]">condizioni</span>
      </>
    }
    description="Termini e condizioni d'uso del sito web di Nemo Web Agency."
    ctaTitle={
      <>
        Domande sui <span className="text-[#ff7351]">termini</span>?
      </>
    }
    ctaDescription="Se hai domande riguardo ai nostri termini e condizioni, non esitare a contattarci."
  >
    <LegalSection title="1. Accettazione dei termini">
      <p>
        L&apos;accesso e l&apos;utilizzo di questo sito web implicano
        l&apos;accettazione dei presenti termini e condizioni. Se non si è
        d&apos;accordo con questi termini, si prega di non utilizzare il sito.
        Continuando a navigare o utilizzare il sito, si accetta di essere
        vincolati dai presenti termini.
      </p>
    </LegalSection>

    <LegalSection title="2. Utilizzo del sito">
      <p>
        Il sito è destinato esclusivamente a scopi informativi e per la
        richiesta di preventivi e consulenze. L&apos;utente si impegna a
        utilizzare il sito in modo legale e conforme a tutte le leggi e i
        regolamenti applicabili.
      </p>
      <p>
        È vietato utilizzare il sito per scopi illegali, fraudolenti o in
        qualsiasi modo che possa danneggiare, disabilitare, sovraccaricare o
        compromettere il funzionamento del sito o interferire con l&apos;utilizzo
        del sito da parte di altri utenti.
      </p>
    </LegalSection>

    <LegalSection title="3. Proprietà intellettuale">
      <p>
        Tutti i contenuti del sito, inclusi testi, immagini, loghi, design,
        grafica, video, audio, software e altri materiali, sono di proprietà di
        Nemo Web Agency o dei suoi licenzianti e sono protetti dalle leggi sul
        copyright, marchi di fabbrica e altre leggi sulla proprietà
        intellettuale.
      </p>
      <p>
        È vietato riprodurre, distribuire, modificare, creare opere derivate,
        pubblicare, eseguire, visualizzare pubblicamente o utilizzare in
        qualsiasi modo i contenuti del sito senza il previo consenso scritto di
        Nemo Web Agency.
      </p>
    </LegalSection>

    <LegalSection title="4. Servizi offerti">
      <p>
        I servizi descritti sul sito sono soggetti a disponibilità e possono
        essere modificati o sospesi in qualsiasi momento senza preavviso. I
        prezzi e le specifiche possono essere modificati senza preavviso.
      </p>
      <p>
        Ogni progetto viene valutato singolarmente e il preventivo finale può
        differire dalle indicazioni generali presenti sul sito. I preventivi
        sono validi per un periodo limitato e possono essere rivisti in base
        alle esigenze specifiche del progetto.
      </p>
      <p>
        Nemo Web Agency si riserva il diritto di rifiutare qualsiasi richiesta
        di servizio a sua discrezione.
      </p>
    </LegalSection>

    <LegalSection title="5. Limitazione di responsabilità">
      <p>
        Nemo Web Agency non è responsabile per eventuali danni diretti,
        indiretti, incidentali, consequenziali o punitivi derivanti
        dall&apos;utilizzo o dall&apos;impossibilità di utilizzare il sito.
      </p>
      <p>
        Il sito viene fornito &quot;così com&apos;è&quot; e &quot;come
        disponibile&quot; senza garanzie di alcun tipo, esplicite o implicite,
        inclusa ma non limitata alle garanzie di commerciabilità, idoneità per
        uno scopo particolare o non violazione.
      </p>
      <p>
        Nemo Web Agency non garantisce che il sito sarà sempre disponibile,
        sicuro, privo di errori o che eventuali difetti verranno corretti.
      </p>
    </LegalSection>

    <LegalSection title="6. Link a siti di terze parti">
      <p>
        Il sito può contenere link a siti web di terze parti. Questi link sono
        forniti solo per convenienza e Nemo Web Agency non ha controllo sul
        contenuto di questi siti. Non siamo responsabili per il contenuto, le
        politiche sulla privacy o le pratiche di qualsiasi sito di terze parti.
      </p>
    </LegalSection>

    <LegalSection title="7. Modifiche ai termini">
      <p>
        Nemo Web Agency si riserva il diritto di modificare questi termini e
        condizioni in qualsiasi momento. Le modifiche entreranno in vigore dal
        momento della pubblicazione sul sito. È responsabilità dell&apos;utente
        consultare periodicamente questi termini per rimanere informato sulle
        modifiche.
      </p>
    </LegalSection>

    <LegalSection title="8. Risoluzione delle controversie">
      <p>
        Qualsiasi controversia derivante da o correlata a questi termini o
        all&apos;utilizzo del sito sarà risolta attraverso negoziazione di
        buona fede tra le parti.
      </p>
      <p>
        Se non è possibile raggiungere una risoluzione attraverso la
        negoziazione, le controversie saranno sottoposte alla competenza
        esclusiva dei tribunali competenti.
      </p>
    </LegalSection>

    <LegalSection title="9. Legge applicabile">
      <p>
        Questi termini e condizioni sono governati e interpretati in conformità
        con le leggi italiane. Qualsiasi controversia sarà di competenza
        esclusiva dei tribunali italiani.
      </p>
    </LegalSection>

    <LegalSection title="10. Contatti">
      <p>
        Per qualsiasi domanda o chiarimento riguardo questi termini e
        condizioni, è possibile contattarci all&apos;indirizzo email:{' '}
        <a href="mailto:nemowebagency@gmail.com">nemowebagency@gmail.com</a>
      </p>
    </LegalSection>
  </LegalPageLayout>
);

export default TerminiCondizioniPage;
