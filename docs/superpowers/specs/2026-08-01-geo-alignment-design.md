# GEO (Generative Engine Optimization) — Design Spec

**Date:** 2026-08-01  
**Project:** Nemo Web Agency (`nemoweb`)  
**Status:** Approved  
**Approach:** B — technical GEO + answer-first copy + visible FAQs

---

## Goal

Make Nemo Web Agency easier for AI systems (ChatGPT, Perplexity, Claude, Google AI Overviews) to understand, retrieve, and cite: clear entity facts, allowlisted crawlers, `llms.txt`, FAQ schema, and extractable on-page answers.

## Non-goals

- SSR / prerender for SPA HTML (document as limitation)
- Static markdown agent pages (`/about.md`)
- Third-party citation campaigns / monitoring dashboards
- English locale

## Constraints

- Reuse contacts from SEO work: email `nemowebagency@gmail.com`, phone `+39 329 541 7220`, Sicilia, Instagram + Facebook
- Preserve current visual design language; FAQ blocks must fit Soft UI / existing section patterns
- No hero clutter on Home (FAQ below fold only if added)

---

## Deliverables

### 1. `public/llms.txt`

Plain-text map for AI agents: brand summary, services, key URLs, contact facts. Optional `llms-full.txt` only if needed for length; prefer one curated `llms.txt`.

### 2. `public/robots.txt`

Keep `Allow: /` for `*`. Add explicit Allow comments/blocks for major AI crawlers: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended. Keep Sitemap line. Link to `llms.txt` in a comment if useful.

### 3. FAQPage JSON-LD

Extend `SEO.jsx` / config so Home, Servizi, and Chi siamo emit `FAQPage` (or `@graph` with Organization/WebPage + FAQPage) matching on-page FAQ content exactly.

### 4. On-page answer-first + FAQ UI

- **Servizi** and **Chi siamo**: short answer-first lead under PageHero or first content section; visible FAQ section (4–5 Q&A)
- **Home**: optional compact FAQ or answer strip below main sections — only if it does not fight the Riverloop composition; prefer one concise “Cosa fa Nemo” answer block + small FAQ near final CTA

### 5. Docs

Add GEO section to `SEO_README.md` (or short `GEO_README.md`) describing files, crawlers, FAQ/schema, SPA crawl limitation.

---

## Success criteria

- `/llms.txt` and updated `/robots.txt` served from `public/`
- FAQ visible and schema-identical on target pages
- Organization schema unchanged in accuracy; FAQ does not invent facts
- Design remains coherent with existing components

---

## Testing

- Open `/llms.txt`, `/robots.txt` in browser
- Inspect JSON-LD for FAQPage on `/`, `/servizi`, `/chi-siamo`
- Spot-check FAQ answers match visible copy
