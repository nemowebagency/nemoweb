import React from 'react';
import LegalPageLayout, {
  LegalSection,
  LegalCard,
} from '../components/LegalPageLayout';

const CookiePolicyPage = () => (
  <LegalPageLayout
    id="cookie-policy"
    title={
      <>
        Cookie <span className="text-[#ffb399]">policy</span>
      </>
    }
    description="Informazioni dettagliate sull'utilizzo dei cookie nel nostro sito web."
    ctaTitle={
      <>
        Domande sui <span className="text-[#ff7351]">cookie</span>?
      </>
    }
    ctaDescription="Se hai domande riguardo alla nostra cookie policy, non esitare a contattarci."
  >
    <LegalSection title="Cosa sono i cookie">
      <p>
        I cookie sono piccoli file di testo che i siti web memorizzano sul
        dispositivo dell&apos;utente quando visita una pagina. Vengono utilizzati
        per migliorare l&apos;esperienza di navigazione, fornire funzionalità
        personalizzate e raccogliere informazioni su come gli utenti utilizzano
        il sito.
      </p>
    </LegalSection>

    <LegalSection title="Tipi di cookie utilizzati">
      <div className="space-y-4">
        <LegalCard
          title="Cookie tecnici"
          note="Questi cookie non richiedono il consenso dell'utente in quanto sono essenziali per il funzionamento del sito."
        >
          <p>
            Sono necessari per il funzionamento del sito e non possono essere
            disabilitati. Permettono la navigazione e l&apos;utilizzo delle
            funzionalità base del sito, come l&apos;accesso alle aree protette o
            il mantenimento della sessione dell&apos;utente.
          </p>
        </LegalCard>

        <LegalCard
          title="Cookie di prestazione"
          note="Questi cookie raccolgono dati in forma aggregata e anonima."
        >
          <p>
            Raccolgono informazioni anonime su come gli utenti utilizzano il
            sito per migliorare le prestazioni e l&apos;esperienza utente. Questi
            cookie ci aiutano a capire quali pagine sono più visitate, quanto
            tempo gli utenti trascorrono sul sito e se ci sono problemi tecnici.
          </p>
        </LegalCard>

        <LegalCard
          title="Cookie di funzionalità"
          note="Se non accetti questi cookie, alcune funzionalità potrebbero non essere disponibili."
        >
          <p>
            Permettono al sito di ricordare le scelte dell&apos;utente (come
            lingua, regione o preferenze di visualizzazione) per fornire
            funzionalità migliorate e personalizzate. Questi cookie possono
            anche essere utilizzati per ricordare modifiche apportate alle
            dimensioni del testo, font e altre parti delle pagine web
            personalizzabili.
          </p>
        </LegalCard>
      </div>
    </LegalSection>

    <LegalSection title="Gestione dei cookie">
      <p>
        È possibile gestire o disabilitare i cookie attraverso le impostazioni
        del proprio browser. Tuttavia, la disabilitazione di alcuni cookie
        potrebbe limitare la funzionalità del sito o impedire l&apos;utilizzo di
        determinate caratteristiche.
      </p>
      <p>Per maggiori informazioni su come gestire i cookie nei principali browser:</p>
      <ul>
        <li>
          <strong>Google Chrome:</strong> Impostazioni → Privacy e sicurezza →
          Cookie e altri dati dei siti
        </li>
        <li>
          <strong>Mozilla Firefox:</strong> Opzioni → Privacy e sicurezza →
          Cookie e dati dei siti
        </li>
        <li>
          <strong>Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti
          web
        </li>
        <li>
          <strong>Microsoft Edge:</strong> Impostazioni → Privacy, ricerca e
          servizi → Cookie e autorizzazioni sito
        </li>
      </ul>
    </LegalSection>

    <LegalSection title="Cookie di terze parti">
      <p>
        Alcuni servizi di terze parti utilizzati sul nostro sito possono
        impostare i propri cookie. Questi includono servizi di analytics, social
        media e altri servizi esterni. Non abbiamo controllo diretto su questi
        cookie e ti consigliamo di consultare le rispettive policy sulla privacy
        di questi servizi.
      </p>
    </LegalSection>

    <LegalSection title="Aggiornamenti alla cookie policy">
      <p>
        Ci riserviamo il diritto di modificare questa Cookie Policy in qualsiasi
        momento. Le modifiche entreranno in vigore dal momento della
        pubblicazione sul sito. Ti consigliamo di consultare periodicamente
        questa pagina per rimanere aggiornato.
      </p>
    </LegalSection>
  </LegalPageLayout>
);

export default CookiePolicyPage;
