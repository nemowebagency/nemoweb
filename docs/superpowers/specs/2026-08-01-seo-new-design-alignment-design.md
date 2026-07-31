# SEO Alignment to New Design — Design Spec

**Date:** 2026-08-01  
**Project:** Nemo Web Agency (`nemoweb`)  
**Status:** Approved for planning  
**Approach:** Full package — copy + technical SEO + Open Graph asset

---

## Goal

Align site SEO (meta tags, structured data, sitemap/manifest, social share image, alt docs) with the redesigned UI and messaging so search engines and social previews match what users see on the site.

## Non-goals

- Server-side rendering / prerender for crawlers
- English locale / hreflang EN
- Breadcrumb or FAQ schema
- Changing page UI/layout beyond alt attributes and SEO-related head assets
- Keyword-stuffed or outdated “successo digitale” positioning

## Constraints (confirmed)

| Item | Value |
|------|--------|
| Primary phone (schema) | `+39 329 541 7220` |
| Email | `nemowebagency@gmail.com` |
| Address in schema | Region only: Sicilia (no street/city) |
| Social sameAs | Instagram + Facebook (from Footer); no Twitter/X unless a real profile exists |
| Scope | Approach 2 — complete alignment including `og-image.jpg` |

---

## Architecture

### Source of truth

- **`src/config/seoConfig.js`** — per-page title, description, keywords; site defaults; `baseUrl`; OG image URL
- **`src/components/SEO.jsx`** — runtime meta updates + JSON-LD injection on route change
- **`index.html`** — crawlable defaults for first paint / non-JS fallbacks (must match home defaults)
- **`public/og-image.jpg`** — 1200×630 social share image
- **`public/sitemap.xml`**, **`public/robots.txt`**, **`public/manifest.json`** — discovery / PWA metadata

```
Route change → SEO.jsx → getSeoData(path) → document.title + meta + canonical + JSON-LD
index.html    → static defaults (home) aligned with seoConfig.default / pages['/']
```

### Messaging direction

Align with new hero and page heroes:

- Hero H1 pattern: **“Creiamo”** + rotating *siti web / progetti / software / soluzioni*
- Supporting line: siti su misura, partner unico per design, sviluppo, risultati
- Drop generic slogans like “Creiamo il Tuo Successo Digitale”

### Page copy (targets)

| Path | Title | Description direction |
|------|--------|------------------------|
| `/` | `Nemo Web Agency — Creiamo siti web, software e soluzioni` | Partner digitale: siti su misura, design + sviluppo, risultati concreti dal 2016 |
| `/servizi` | `Servizi web — Tre percorsi, un unico partner \| Nemo Web Agency` | Allineato a “tre percorsi chiari” |
| `/chi-siamo` | `Chi siamo — Nemo Web Agency dal 2016` | Mission/valori, tone of current PageHero |
| `/contatti` | `Contatti — Consulenza sul tuo progetto digitale \| Nemo Web Agency` | Match Contatti PageHero: form/email, risposta rapida |
| `/richiedi-preventivo` | `Richiedi preventivo — Siti web e soluzioni digitali \| Nemo Web Agency` | Match form PageHero: preventivo senza impegno, consulenza gratuita |
| `/privacy`, `/cookie-policy`, `/termini-condizioni`, `/sitemap` | Brand-consistent titles (keep structure, drop fluff); slim keywords | Accuracy over ranking |

Keywords: keep but slim (low SEO weight); Italian only; no fake EN variants.

Exact final strings are finalized in implementation to stay within ~50–60 char titles and ~150–160 char descriptions where practical.

---

## Component / file changes

### `seoConfig.js`

- Update `default.siteDescription` and `default.keywords`
- Rewrite `pages[*].title|description|keywords` per table above
- Ensure `ogImage` points to `${baseUrl}/og-image.jpg`
- Remove any implied EN/multilingual leftovers in comments or unused fields

### `SEO.jsx`

- Organization JSON-LD (home `/`):
  - `@type`: `Organization`
  - `name`, `url`, `logo`, `description`
  - `email`: `nemowebagency@gmail.com`
  - `telephone`: `+39-329-541-7220`
  - `address`: `PostalAddress` with `addressCountry: IT`, `addressRegion: Sicilia` only
  - `sameAs`: Instagram + Facebook URLs from Footer
  - Remove placeholder phone; remove empty/fake Twitter
- WebPage JSON-LD (other paths): keep `WebPage` + `isPartOf` WebSite pattern; ensure description/title match config
- Twitter meta: keep `summary_large_image`; **omit** `twitter:site` if no real X handle (or leave unset)
- Do not invent contact data

### `index.html`

- Sync title, description, keywords, OG, Twitter, canonical with home config
- Switch Google Fonts link from Titillium Web to **Montserrat** (design system)
- Keep `theme-color` / brand `#FF7351`
- Keep `lang="it"`

### `public/manifest.json`

- Align `name` / `short_name` with “Nemo Web Agency” / “Nemo”
- Description tone matching new positioning (not “Sito Web Moderno” generic)
- Keep theme/background colors brand-consistent

### `public/sitemap.xml`

- Refresh `lastmod` to implementation date
- Include all indexable routes present in the app (including `/sitemap` if routed)
- Keep Italian hreflang only (no EN)

### `public/robots.txt`

- Verify allows indexing and references sitemap URL; fix if stale

### Open Graph asset

- Create **`public/og-image.jpg`** at **1200×630**
- Art direction: brand-first, slate/light background, soft coral wash, Nemo logo, headline “Creiamo siti web”, short subtitle, accent `#FF7351`
- No badges, collage, or dense marketing clutter
- Wire meta `og:image` / Twitter image to this file

### Alt text / docs

- Apply meaningful alt on logos (Navbar, Footer) where still generic
- Decorative images remain `alt=""`
- Update **`IMMAGINI_ALT_TEXT.md`** to match current home structure (Hero icons/Lottie, tracks, services, CTA — not obsolete `manpc.png` hero if removed)
- Update **`SEO_README.md`** to reflect IT-only, real contacts, OG asset present, no EN claims

---

## Data flow / behavior

1. User lands on any route → `SEO` reads `pathname` → applies meta from `seoConfig`
2. Crawlers / social bots that only read `index.html` get home defaults + OG image URL
3. JSON-LD updates with route; Organization on home, WebPage elsewhere
4. Sitemap/robots support discovery; manifest supports install/brand chrome

## Error handling

- Missing page path in config → fall back to home page SEO data (existing behavior)
- Do not emit invalid schema fields (no `XXX` placeholders)
- If OG file generation fails in tooling, block merge until asset exists in `public/`

## Testing / verification

- Spot-check `document.title` and meta description on each main route in browser
- Validate JSON-LD with [Google Rich Results Test](https://search.google.com/test/rich-results) (post-deploy or against built HTML where applicable)
- Confirm `og-image.jpg` loads at `/og-image.jpg` and Facebook Sharing Debugger / similar shows correct preview after deploy
- Lighthouse SEO audit: no missing description / crawlable issues introduced
- Confirm Montserrat loads; Titillium unused in head
- Confirm sitemap lists expected URLs and robots references it

---

## Success criteria

- Home/social title and description match new brand voice and hero messaging
- No placeholder phone or fake Twitter in head/schema
- Real email, phone, Instagram, Facebook in Organization schema
- `og-image.jpg` exists and is referenced
- Docs (`SEO_README`, `IMMAGINI_ALT_TEXT`) match the live site structure
- Manifest and sitemap refreshed for the redesign

---

## Implementation notes

- Prefer editing existing SEO modules over adding new libraries (no react-helmet required unless already present)
- Keep SPA client-side SEO pattern; do not expand scope to prerender
- Footer phone numbers other than primary may remain in UI; schema uses only `+39 329 541 7220`
