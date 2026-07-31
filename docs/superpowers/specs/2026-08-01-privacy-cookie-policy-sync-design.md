# Privacy & Cookie Policy Sync — Design

**Date:** 2026-08-01  
**Approach:** B (content sync + CookieBanner visual align)  
**Status:** Awaiting user review

## Goal

Allineare Privacy Policy, Cookie Policy e CookieBanner a ciò che il sito fa davvero dopo il redesign, con titolare aggiornato.

## Scope

**In:**
- `src/pages/PrivacyPage.jsx` — contenuti
- `src/pages/CookiePolicyPage.jsx` — contenuti
- `src/components/CookieBanner.jsx` — stile (token del design system attuale)

**Out:**
- Termini e condizioni
- Rimozione `dns-prefetch` Google Analytics in `index.html`
- Nuovi tool analytics / cookie di marketing
- Cambio layout di `LegalPageLayout` (già allineato)

## Contatti titolare

| Campo | Valore |
|-------|--------|
| Titolare | Giuseppe Buscio (Nemo Web Agency) |
| Email | nemowebagency@gmail.com |
| Telefono | +39 329 541 7220 |

## Privacy Policy — struttura contenuti

1. **Titolare del trattamento** — Giuseppe Buscio / Nemo Web Agency; email; telefono cliccabile (`tel:+393295417220`).
2. **Dati raccolti** — da form Contatti e Richiedi preventivo: nome e cognome, email, telefono (facoltativo), tipo di servizio, messaggio; sul preventivo anche budget previsto e scadenza progetto; preferenza consenso cookie in `localStorage`; dati tecnici di connessione eventualmente ricevuti da servizi terzi (vedi § comunicazione).
3. **Finalità** — rispondere a richieste/preventivi; assistenza; obblighi di legge. Nessuna finalità di marketing profilato.
4. **Base giuridica** — consenso / misure precontrattuali (art. 6 GDPR).
5. **Conservazione** — tempo necessario alle finalità e obblighi di legge; consenso cookie fino a modifica/cancellazione da parte dell’utente.
6. **Diritti dell’interessato** — elenco GDPR invariato + come esercitarli (email/telefono sopra).
7. **Comunicazione / responsabili** — i dati dei form sono trasmessi tramite **EmailJS** (fornitore terzo) all’indirizzo email del titolare; non venduti a terzi; eventuali obblighi di legge.
8. **Trasferimenti / servizi esterni** — EmailJS; caricamento font da Google Fonts (richiesta al CDN Google).
9. **Aggiornamenti** — data di ultimo aggiornamento: agosto 2026.

## Cookie Policy — struttura contenuti

1. **Cosa sono i cookie** — definizione breve.
2. **Cosa usiamo davvero** — solo cookie/storage **tecnici** necessari:
   - preferenza consenso salvata in `localStorage` (`cookieConsent`: accepted/rejected);
   - nessun cookie di profilazione, marketing o analytics sul sito.
3. **Cosa non usiamo** — rimuovere sezioni “Cookie di prestazione”, “Cookie di funzionalità” e riferimenti a analytics di terze parti (non presenti nel codice).
4. **Servizi esterni collegati** — Google Fonts (richiesta di risorse tipografiche; non è un cookie di profilazione del sito, ma può implicare trasferimento di dati tecnici a Google).
5. **Gestione** — banner sul sito + istruzioni browser (Chrome, Firefox, Safari, Edge) come oggi.
6. **Aggiornamenti** — agosto 2026.
7. **Contatti** — stessi dati titolare della Privacy (Giuseppe Buscio, email, telefono).

## CookieBanner — design

Allineare al resto del sito senza cambiare la logica di consenso:

- Palette: `slate-*` al posto di `gray-*`
- Card: `rounded-2xl`, bordo `border-slate-200`, ombra coerente
- Pulsante Accetta: classe `btn-primary`
- Pulsante Rifiuta: bordo slate, hover soft
- Pulsante floating impostazioni: stesso linguaggio visuale
- Testo banner: confermare “solo cookie/storage tecnici, niente profilazione o marketing”

## Criteri di accettazione

- [ ] Privacy cita Giuseppe Buscio, email e +39 329 541 7220
- [ ] Privacy elenca i campi reali dei form (incluso budget/scadenza) e EmailJS
- [ ] Cookie policy non menziona analytics / prestazione / funzionalità inesistenti
- [ ] Cookie policy menziona `localStorage` consenso e Google Fonts
- [ ] CookieBanner usa token del nuovo design
- [ ] Nessuna modifica a Termini o ad analytics reali (non presenti)

## Note

Documento di design solo: l’implementazione parte dopo approvazione esplicita di questa spec.
