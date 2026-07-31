# Privacy & Cookie Policy Sync Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Allineare Privacy Policy, Cookie Policy e CookieBanner alla realtà del sito (form + EmailJS + solo storage tecnico) con titolare Giuseppe Buscio.

**Architecture:** Contenuti delle pagine legali aggiornati in-place usando `LegalPageLayout` / `LegalSection` / `LegalCard` già esistenti. CookieBanner restyling solo CSS/classi Tailwind, logica `localStorage` invariata.

**Tech Stack:** React 18, React Router, Tailwind CSS, Lucide icons, Vite

## Global Constraints

- Titolare: Giuseppe Buscio (Nemo Web Agency)
- Email: nemowebagency@gmail.com
- Telefono: +39 329 541 7220 (`tel:+393295417220`)
- Non inventare cookie analytics / marketing / prestazione
- Non modificare Termini e condizioni né `index.html`
- Non fare commit git salvo richiesta esplicita dell’utente
- Spec di riferimento: `docs/superpowers/specs/2026-08-01-privacy-cookie-policy-sync-design.md`

## File map

| File | Responsabilità |
|------|----------------|
| `src/pages/PrivacyPage.jsx` | Testo informativa privacy |
| `src/pages/CookiePolicyPage.jsx` | Testo cookie policy |
| `src/components/CookieBanner.jsx` | UI banner consenso (stesso comportamento) |

---

### Task 1: Privacy Policy contents

**Files:**
- Modify: `src/pages/PrivacyPage.jsx`
- Test: manual — aprire `/privacy` in dev server

**Interfaces:**
- Consumes: `LegalPageLayout`, `LegalSection` from `../components/LegalPageLayout`
- Produces: pagina Privacy con sezioni 1–9 come da spec

- [ ] **Step 1: Sostituire il contenuto di `PrivacyPage.jsx`**

Sostituisci l’intero file con:

```jsx
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
          (`localStorage`, chiave <code>cookieConsent</code>)
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
          <strong>EmailJS</strong> — invio dei messaggi dei form
        </li>
        <li>
          <strong>Google Fonts</strong> — caricamento dei caratteri tipografici
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
```

- [ ] **Step 2: Verifica manuale**

Run: `npm run dev` (se non già attivo), apri `http://localhost:5173/privacy`  
Expected: titolo hero ok; sezione 1 con Giuseppe Buscio, email e telefono; sezioni EmailJS e Google Fonts presenti; niente riferimenti a marketing profilato come finalità attiva.

---

### Task 2: Cookie Policy contents

**Files:**
- Modify: `src/pages/CookiePolicyPage.jsx`
- Test: manual — aprire `/cookie-policy`

**Interfaces:**
- Consumes: `LegalPageLayout`, `LegalSection`, `LegalCard`
- Produces: cookie policy allineata allo storage tecnico reale

- [ ] **Step 1: Sostituire il contenuto di `CookiePolicyPage.jsx`**

Sostituisci l’intero file con:

```jsx
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
```

- [ ] **Step 2: Verifica manuale**

Apri `http://localhost:5173/cookie-policy`  
Expected: nessuna sezione “prestazione” / “funzionalità” / analytics di terze parti; presente `cookieConsent` e Google Fonts; contatti Giuseppe Buscio.

---

### Task 3: CookieBanner visual align

**Files:**
- Modify: `src/components/CookieBanner.jsx`
- Test: manual — banner a primo accesso o dopo clear di `localStorage.cookieConsent`

**Interfaces:**
- Consumes: `localStorage` key `cookieConsent`; route `/cookie-policy`
- Produces: stesso API di comportamento (`accepted` / `rejected`), UI aggiornata

- [ ] **Step 1: Aggiornare le classi Tailwind del banner**

Mantieni tutta la logica (`useState` / `useEffect` / handler) invariata. Aggiorna solo il markup di presentazione:

**Pannello banner** (`showBanner === true`):
- Container card: `m-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl md:m-0`
- Titolo: `text-lg font-semibold text-slate-900`
- Icona close: `text-slate-400 hover:text-slate-600`
- Testo: `mb-6 text-sm text-slate-600` con copy:  
  `Questo sito utilizza cookie e storage tecnici necessari al funzionamento. Non utilizziamo cookie di profilazione o marketing. Puoi gestire le tue preferenze in qualsiasi momento.`
- Accetta: `className="btn-primary flex-1 justify-center"`
- Rifiuta: `flex-1 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50`
- Link policy: `text-xs text-slate-500 underline transition-colors hover:text-[#ff7351]`

**Pulsante floating** (quando `consent` è valorizzato):
- `group fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-lg transition-all duration-300 hover:shadow-xl`
- Label: `text-xs text-slate-700`

- [ ] **Step 2: Verifica manuale**

Nella console browser: `localStorage.removeItem('cookieConsent')` poi reload.  
Expected: banner con stile slate/brand; Accetta/Rifiuta salvano ancora `accepted`/`rejected`; link a `/cookie-policy` funziona; floating settings riapre il banner.

---

### Task 4: Acceptance checklist

- [ ] **Step 1: Controllare i criteri della spec**

- [ ] Privacy cita Giuseppe Buscio, email e +39 329 541 7220
- [ ] Privacy elenca campi form reali (incluso budget/scadenza) e EmailJS
- [ ] Cookie policy non menziona analytics / prestazione / funzionalità inesistenti
- [ ] Cookie policy menziona `localStorage` consenso e Google Fonts
- [ ] CookieBanner usa token del nuovo design
- [ ] Nessuna modifica a Termini o ad analytics

- [ ] **Step 2: Commit solo se l’utente lo chiede**

Se richiesto:

```bash
git add src/pages/PrivacyPage.jsx src/pages/CookiePolicyPage.jsx src/components/CookieBanner.jsx docs/superpowers/specs/2026-08-01-privacy-cookie-policy-sync-design.md docs/superpowers/plans/2026-08-01-privacy-cookie-policy-sync.md
git commit -m "sync privacy and cookie policy with current site behavior"
```
