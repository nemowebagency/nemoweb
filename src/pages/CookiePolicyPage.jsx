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
    description="Informazioni sull'utilizzo di cookie e storage tecnico sul sito di Nemo Web Agency."
    ctaTitle={
      <>
        Domande sui <span className="text-[#ff7351]">cookie</span>?
      </>
    }
    ctaDescription="Se hai domande riguardo alla nostra cookie policy, non esitare a contattarci."
  >
    <LegalSection title="1. Cosa sono i cookie">
      <p>
        I cookie sono piccoli file di testo che i siti web possono memorizzare
        sul dispositivo dell&apos;utente. Tecnologie simili (come{' '}
        <code>localStorage</code>) possono essere usate per salvare preferenze
        tecniche necessarie al funzionamento del sito.
      </p>
    </LegalSection>

    <LegalSection title="2. Cosa utilizziamo">
      <div className="space-y-4">
        <LegalCard
          title="Cookie / storage tecnici"
          note="Necessari al funzionamento; non richiedono consenso di marketing."
        >
          <p>
            Sul sito salviamo la preferenza di consenso in{' '}
            <code>localStorage</code> con chiave <code>cookieConsent</code>{' '}
            (valori: <code>accepted</code> o <code>rejected</code>), così da
            ricordare la scelta e non mostrare continuamente il banner.
          </p>
          <p>
            Non utilizziamo cookie di profilazione, marketing o analytics.
          </p>
        </LegalCard>
      </div>
    </LegalSection>

    <LegalSection title="3. Servizi esterni">
      <p>
        Il sito carica i font da <strong>Google Fonts</strong>. Si tratta di una
        richiesta di risorse tipografiche verso i server di Google e non di un
        cookie di profilazione impostato da Nemo Web Agency; possono comunque
        essere trasmessi dati tecnici di connessione al fornitore.
      </p>
    </LegalSection>

    <LegalSection title="4. Gestione delle preferenze">
      <p>
        Puoi gestire la preferenza tramite il banner cookie presente sul sito
        (pulsante impostazioni in basso a sinistra dopo la prima scelta). Puoi
        anche cancellare i dati del sito dalle impostazioni del browser.
      </p>
      <p>Nei principali browser:</p>
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

    <LegalSection title="5. Contatti">
      <p>
        Per domande su questa Cookie Policy puoi contattare il titolare{' '}
        <strong>Giuseppe Buscio</strong> (Nemo Web Agency):
      </p>
      <ul>
        <li>
          Email:{' '}
          <a href="mailto:nemowebagency@gmail.com">nemowebagency@gmail.com</a>
        </li>
        <li>
          Telefono:{' '}
          <a href="tel:+393295417220">+39 329 541 7220</a>
        </li>
      </ul>
    </LegalSection>

    <LegalSection title="6. Aggiornamenti">
      <p>
        Ci riserviamo di aggiornare questa Cookie Policy. Ultimo aggiornamento:
        agosto 2026.
      </p>
    </LegalSection>
  </LegalPageLayout>
);

export default CookiePolicyPage;
