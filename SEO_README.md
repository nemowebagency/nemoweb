# Guida SEO - Nemo Web Agency

Soluzione SEO client-side allineata al redesign 2026.

## Componenti

1. **`src/components/SEO.jsx`** — meta tag dinamici + JSON-LD per route
2. **`src/config/seoConfig.js`** — titoli, description, keywords, OG image URL
3. **`index.html`** — default crawlabili (home) + Open Graph / Twitter
4. **`public/og-image.jpg`** — anteprima social 1200×630
5. **`public/sitemap.xml`** / **`public/robots.txt`** / **`public/manifest.json`**

## Cosa include

- Title, description, keywords, canonical, robots per ogni pagina
- Open Graph e Twitter Card (`summary_large_image`) — **senza** handle X fittizio
- JSON-LD:
  - Home: `Organization` (email, telefono `+39-329-541-7220`, Sicilia, Instagram + Facebook)
  - Altre route: `WebPage` collegata al sito
- Lingua: **solo italiano** (`hreflang="it"` + `x-default`)
- Font head: Montserrat (design system)

## Contatti in schema

| Campo | Valore |
|--------|--------|
| Email | `nemowebagency@gmail.com` |
| Telefono | `+39 329 541 7220` |
| Regione | Sicilia (IT) |
| Social | Instagram, Facebook |

## Pagine in `seoConfig`

`/`, `/chi-siamo`, `/servizi`, `/contatti`, `/richiedi-preventivo`, `/privacy`, `/cookie-policy`, `/termini-condizioni`, `/sitemap`

## Modificare i testi

Aggiorna `src/config/seoConfig.js` (e allinea i default home in `index.html` se cambi la home).

## Verifica

- DevTools: title/description/JSON-LD al cambio route
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) dopo deploy
- `https://www.nemoagency.it/sitemap.xml` e `/robots.txt`
- Lighthouse SEO

## Note SPA

I meta si aggiornano lato client. Per massimizzare l’indicizzazione futura si può valutare prerender/SSR; fuori dallo scope di questo allineamento.
