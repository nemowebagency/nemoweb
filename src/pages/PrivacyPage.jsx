import React from 'react';
import LegalPageLayout, { LegalSection } from '../components/LegalPageLayout';

const PrivacyPage = () => (
  <LegalPageLayout
    id="privacy"
    title={
      <>
        Informativa sulla{' '}
        <span className="text-[#ffb399]">privacy</span>
      </>
    }
    description="Informazioni dettagliate sul trattamento dei dati personali da parte di Nemo Web Agency."
    ctaTitle={
      <>
        Domande sulla <span className="text-[#ff7351]">privacy</span>?
      </>
    }
    ctaDescription="Se hai domande riguardo alla nostra privacy policy, non esitare a contattarci."
  >
    <LegalSection title="1. Titolare del trattamento">
      <p>
        Il titolare del trattamento dei dati personali è{' '}
        <strong>Giuseppe Buscio</strong> (Nemo Web Agency).
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

    <LegalSection title="2. Dati raccolti">
      <p>
        Attraverso i moduli Contatti e Richiedi preventivo possiamo raccogliere:
      </p>
      <ul>
        <li>Nome e cognome</li>
        <li>Indirizzo email</li>
        <li>Numero di telefono (facoltativo)</li>
        <li>Tipo di servizio richiesto</li>
        <li>Messaggio / descrizione del progetto</li>
        <li>
          Nel form preventivo: budget previsto e scadenza progetto (facoltativi)
        </li>
        <li>
          Preferenza sul consenso cookie, salvata in locale sul dispositivo
          (<code>localStorage</code>, chiave <code>cookieConsent</code>)
        </li>
      </ul>
    </LegalSection>

    <LegalSection title="3. Finalità del trattamento">
      <p>I dati personali vengono trattati per le seguenti finalità:</p>
      <ul>
        <li>Rispondere alle richieste di informazioni e preventivi</li>
        <li>Fornire assistenza e supporto ai clienti</li>
        <li>Rispettare obblighi di legge</li>
      </ul>
      <p>
        Non utilizziamo i dati per marketing profilato o pubblicità
        comportamentale.
      </p>
    </LegalSection>

    <LegalSection title="4. Base giuridica">
      <p>
        Il trattamento dei dati personali si basa sul consenso
        dell&apos;interessato e sulla necessità di eseguire misure
        precontrattuali richieste dall&apos;interessato stesso (art. 6 GDPR).
      </p>
    </LegalSection>

    <LegalSection title="5. Conservazione dei dati">
      <p>
        I dati personali vengono conservati per il tempo necessario alle
        finalità per cui sono stati raccolti e in conformità con gli obblighi di
        legge. La preferenza sui cookie resta sul dispositivo fino a quando
        l&apos;utente non la modifica o cancella i dati del sito.
      </p>
    </LegalSection>

    <LegalSection title="6. Diritti dell'interessato">
      <p>Ai sensi del GDPR, l&apos;interessato ha diritto a:</p>
      <ul>
        <li>Accedere ai propri dati personali</li>
        <li>Richiedere la rettifica o la cancellazione dei dati</li>
        <li>Opporsi al trattamento dei dati</li>
        <li>Richiedere la limitazione del trattamento</li>
        <li>Richiedere la portabilità dei dati</li>
        <li>Revocare il consenso in qualsiasi momento</li>
      </ul>
      <p>
        Per esercitare i diritti, contattare il titolare agli indirizzi indicati
        nella sezione 1.
      </p>
    </LegalSection>

    <LegalSection title="7. Comunicazione dei dati e responsabili">
      <p>
        I dati inviati tramite i form vengono trasmessi mediante il servizio
        terzi <strong>EmailJS</strong> all&apos;indirizzo email del titolare, al
        solo scopo di gestire la richiesta. I dati non vengono venduti a terzi.
        Possono essere comunicati solo nei casi previsti dalla legge.
      </p>
    </LegalSection>

    <LegalSection title="8. Servizi esterni">
      <p>
        Il sito utilizza servizi esterni che possono trattare dati tecnici
        (come indirizzo IP) nell&apos;ambito della fornitura del servizio:
      </p>
      <ul>
        <li>
          <strong>EmailJS</strong> - invio dei messaggi dei form
        </li>
        <li>
          <strong>Google Fonts</strong> - caricamento dei caratteri tipografici
          dal CDN di Google
        </li>
      </ul>
    </LegalSection>

    <LegalSection title="9. Aggiornamenti">
      <p>
        La presente informativa può essere aggiornata. Ultimo aggiornamento:
        agosto 2026.
      </p>
    </LegalSection>
  </LegalPageLayout>
);

export default PrivacyPage;
