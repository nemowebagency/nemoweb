# SEO New Design Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align meta tags, JSON-LD, sitemap/manifest, OG image, fonts, alt docs, and SEO README with the redesigned Nemo site messaging.

**Architecture:** Keep the existing SPA SEO pattern (`seoConfig.js` + `SEO.jsx` + static `index.html` defaults). Update copy and structured data; add `public/og-image.jpg`; refresh discovery/PWA files and docs. No SSR, no EN locale, no new SEO libraries.

**Tech Stack:** React + Vite + React Router; client-side meta via DOM updates; Schema.org JSON-LD; static assets in `public/`.

## Global Constraints

- Primary phone (schema only): `+39 329 541 7220` (format `+39-329-541-7220` in JSON-LD)
- Email: `nemowebagency@gmail.com`
- Address: `addressCountry: IT`, `addressRegion: Sicilia` only
- sameAs: Instagram `https://www.instagram.com/nemowebagency/` + Facebook `https://www.facebook.com/profile.php?id=61574662467359&locale=it_IT`
- No Twitter/X `twitter:site` / sameAs
- Italian only; no hreflang EN
- Drop “Creiamo il Tuo Successo Digitale”
- OG image 1200×630 at `public/og-image.jpg`
- Font in `index.html`: Montserrat (not Titillium)

## File map

| File | Responsibility |
|------|----------------|
| `src/config/seoConfig.js` | Titles, descriptions, keywords, defaults, OG URL |
| `src/components/SEO.jsx` | Meta + JSON-LD runtime |
| `index.html` | Static home defaults + font |
| `public/og-image.jpg` | Social share image |
| `public/manifest.json` | PWA name/description |
| `public/sitemap.xml` | URL list + lastmod |
| `public/robots.txt` | Verify sitemap pointer |
| `src/components/Navbar.jsx`, `Footer.jsx` | Logo alt if needed |
| `IMMAGINI_ALT_TEXT.md`, `SEO_README.md` | Docs sync |

---

### Task 1: Update `seoConfig.js` copy

**Files:**
- Modify: `src/config/seoConfig.js`

**Interfaces:**
- Produces: `getSeoData(path)` returns updated `title`, `description`, `keywords`, `ogImage`, `canonical` for all routes in `seoConfig.pages`

- [ ] **Step 1: Replace page + default copy**

Set exact strings:

```javascript
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
      title: 'Nemo Web Agency — Creiamo siti web, software e soluzioni',
      description:
        'Progettiamo siti web su misura per far crescere la tua presenza online. Un partner unico per design, sviluppo e risultati concreti dal 2016.',
      keywords:
        'web agency Sicilia, siti web professionali, sviluppo software, e-commerce, siti prenotazione, Nemo Web Agency',
    },
    '/chi-siamo': {
      title: 'Chi siamo — Nemo Web Agency dal 2016',
      description:
        "Siamo Nemo Web Agency: creiamo siti web professionali, moderni e orientati ai risultati. Dal 2016 aiutiamo imprese e professionisti a crescere online.",
      keywords:
        'chi siamo Nemo Web Agency, agenzia web Sicilia, team sviluppo web, mission agenzia digitale',
    },
    '/servizi': {
      title: 'Servizi web — Tre percorsi, un unico partner | Nemo Web Agency',
      description:
        'Soluzioni web complete e personalizzate: siti vetrina, sistemi di prenotazione ed e-commerce. Tre percorsi chiari, un unico partner.',
      keywords:
        'servizi web, siti vetrina, e-commerce Sicilia, sistemi prenotazione, sviluppo siti web',
    },
    '/contatti': {
      title: 'Contatti — Consulenza sul tuo progetto digitale | Nemo Web Agency',
      description:
        'Contattaci per il tuo progetto digitale. Compila il form o scrivici: ti rispondiamo il prima possibile. Consulenza senza impegno.',
      keywords:
        'contatti Nemo Web Agency, consulenza sito web, preventivo web agency Sicilia',
    },
    '/richiedi-preventivo': {
      title: 'Richiedi preventivo — Siti web e soluzioni digitali | Nemo Web Agency',
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
        "Termini e condizioni di utilizzo del sito e dei servizi di Nemo Web Agency.",
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
```

Remove `twitterSite` from defaults (no X handle). Keep `getCanonicalUrl` / `getSeoData` logic unchanged except reading updated config.

- [ ] **Step 2: Verify exports**

Run: `node -e "import('./src/config/seoConfig.js').then(m => console.log(m.getSeoData('/').title))"`
Expected: prints the new home title.

- [ ] **Step 3: Commit**

```bash
git add src/config/seoConfig.js
git commit -m "seo: align page titles and descriptions with new design"
```

---

### Task 2: Fix `SEO.jsx` structured data and Twitter meta

**Files:**
- Modify: `src/components/SEO.jsx`

**Interfaces:**
- Consumes: `getSeoData`, `baseUrl` from seoConfig
- Produces: Organization JSON-LD on `/`; WebPage elsewhere; no placeholder phone; no `twitter:site`

- [ ] **Step 1: Update Organization block and Twitter tags**

In the `useEffect` structured data for home:

```javascript
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: baseUrl,
  logo: `${baseUrl}/icona%20arancione.png`,
  description: finalDescription,
  email: 'nemowebagency@gmail.com',
  sameAs: [
    'https://www.instagram.com/nemowebagency/',
    'https://www.facebook.com/profile.php?id=61574662467359&locale=it_IT',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+39-329-541-7220',
    contactType: 'customer service',
    email: 'nemowebagency@gmail.com',
    availableLanguage: ['Italian'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IT',
    addressRegion: 'Sicilia',
  },
};
```

- Remove `updateMetaTag('twitter:site', '@nemoagency')` (or remove the tag if present by setting empty — prefer not creating it).
- Keep WebPage branch for `path !== '/'` as today, with `name`/`description`/`url`/`inLanguage`/`isPartOf`.

- [ ] **Step 2: Manual check**

Start or use `npm run dev`, open `/` and `/servizi`, inspect `<script type="application/ld+json" data-seo>` and Twitter meta — phone correct, no `@nemoagency`.

- [ ] **Step 3: Commit**

```bash
git add src/components/SEO.jsx
git commit -m "seo: fix Organization schema contacts and drop fake Twitter handle"
```

---

### Task 3: Sync `index.html` + manifest + sitemap + robots

**Files:**
- Modify: `index.html`
- Modify: `public/manifest.json`
- Modify: `public/sitemap.xml`
- Modify: `public/robots.txt` (only if needed)

- [ ] **Step 1: Align `index.html` with home seoConfig**

- Title/description/keywords/OG/Twitter match Task 1 home strings
- Remove `twitter:site` meta if present
- Replace Titillium font link with Montserrat:

```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

- Keep theme-color `#FF7351`, `lang="it"`, hreflang it + x-default only

- [ ] **Step 2: Update manifest**

```json
{
  "short_name": "Nemo",
  "name": "Nemo Web Agency",
  "description": "Creiamo siti web, software e soluzioni digitali.",
  "icons": [ /* keep existing icon entries */ ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#FF7351",
  "background_color": "#FAFAF9"
}
```

- [ ] **Step 3: Refresh sitemap**

- `lastmod`: `2026-08-01` for all URLs
- Include: `/`, `/chi-siamo`, `/servizi`, `/contatti`, `/richiedi-preventivo`, `/privacy`, `/cookie-policy`, `/termini-condizioni`, `/sitemap`
- Italian xhtml:link only

- [ ] **Step 4: Verify robots.txt**

Confirm `Sitemap: https://www.nemoagency.it/sitemap.xml` and `Allow: /` — no change if already correct.

- [ ] **Step 5: Commit**

```bash
git add index.html public/manifest.json public/sitemap.xml public/robots.txt
git commit -m "seo: sync index.html, manifest, and sitemap with redesign"
```

---

### Task 4: Create Open Graph image

**Files:**
- Create: `public/og-image.jpg` (1200×630)

- [ ] **Step 1: Generate asset**

Create brand-first OG image: light slate background, soft coral wash `#FF7351`, Nemo logo if available from `public/`, headline “Creiamo siti web”, short subtitle “Design, sviluppo e risultati concreti”, no badges/collage.

Use image generation or a local canvas/script; export JPEG 1200×630 to `public/og-image.jpg`.

- [ ] **Step 2: Verify file**

Confirm file exists and is referenced by `seoConfig.default.ogImage` and `index.html` `og:image`.

- [ ] **Step 3: Commit**

```bash
git add public/og-image.jpg
git commit -m "seo: add Open Graph share image for social previews"
```

---

### Task 5: Alt text + docs

**Files:**
- Modify: `src/components/Navbar.jsx` (logo alt if needed)
- Modify: `src/components/Footer.jsx` (logo alt if needed)
- Modify: `IMMAGINI_ALT_TEXT.md`
- Modify: `SEO_README.md`

- [ ] **Step 1: Logo alts**

- Navbar logo: `alt="Logo Nemo Web Agency"` (or keep if already correct)
- Footer logo: `alt="Logo Nemo Web Agency"`

Decorative images stay `alt=""`.

- [ ] **Step 2: Rewrite `IMMAGINI_ALT_TEXT.md`**

Document current structure: Hero (decorative icona + Lottie), tracks Unsplash, services grid, projects CTA, partners carousel alts, Navbar/Footer logos. Remove obsolete `manpc.png` hero entries if no longer in code.

- [ ] **Step 3: Rewrite `SEO_README.md`**

Reflect: IT-only, real contacts, OG present, no EN/hreflang claims, point to `seoConfig.js` / `SEO.jsx`, list verification tools.

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.jsx src/components/Footer.jsx IMMAGINI_ALT_TEXT.md SEO_README.md
git commit -m "seo: update alt docs and SEO README for new site structure"
```

---

### Task 6: Smoke verification

- [ ] **Step 1: Dev check**

Run `npm run dev`. On `/`, `/servizi`, `/chi-siamo`, `/contatti` verify:
- `document.title` matches config
- meta description updated
- JSON-LD phone/email/sameAs correct on home
- `/og-image.jpg` returns 200

- [ ] **Step 2: Done**

No further commits unless fixes needed.
