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
        Il titolare del trattamento dei dati personali è Nemo Web Agency. Per
        qualsiasi domanda relativa alla privacy, è possibile contattarci
        all&apos;indirizzo email:{' '}
        <a href="mailto:nemowebagency@gmail.com">nemowebagency@gmail.com</a>
      </p>
    </LegalSection>

    <LegalSection title="2. Dati raccolti">
      <p>I dati personali che raccogliamo includono:</p>
      <ul>
        <li>Nome e cognome</li>
        <li>Indirizzo email</li>
        <li>Numero di telefono (facoltativo)</li>
        <li>Informazioni sul progetto richiesto</li>
        <li>Dati di navigazione e cookie tecnici</li>
      </ul>
    </LegalSection>

    <LegalSection title="3. Finalità del trattamento">
      <p>I dati personali vengono trattati per le seguenti finalità:</p>
      <ul>
        <li>Rispondere alle richieste di informazioni e preventivi</li>
        <li>Fornire assistenza e supporto ai clienti</li>
        <li>Migliorare i servizi offerti</li>
        <li>Rispettare obblighi di legge</li>
      </ul>
    </LegalSection>

    <LegalSection title="4. Base giuridica">
      <p>
        Il trattamento dei dati personali si basa sul consenso dell&apos;interessato
        e sulla necessità di eseguire misure precontrattuali richieste
        dall&apos;interessato stesso.
      </p>
    </LegalSection>

    <LegalSection title="5. Conservazione dei dati">
      <p>
        I dati personali vengono conservati per il tempo necessario alle finalità
        per cui sono stati raccolti e in conformità con gli obblighi di legge. I
        dati utilizzati per finalità promozionali possono essere conservati fino
        alla revoca del consenso.
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
    </LegalSection>

    <LegalSection title="7. Comunicazione dei dati">
      <p>
        I dati personali non vengono comunicati a terzi, salvo nei casi previsti
        dalla legge o quando necessario per l&apos;erogazione dei servizi
        richiesti.
      </p>
    </LegalSection>
  </LegalPageLayout>
);

export default PrivacyPage;
