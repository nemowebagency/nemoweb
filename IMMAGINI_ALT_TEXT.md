# Lista Immagini - Attributi Alt Text

Inventario aggiornato al redesign 2026 (home Riverloop-style).  
Le immagini decorative restano `alt=""`; logo e partner hanno testo descrittivo.

---

## NAVBAR (`src/components/Navbar.jsx`)

### Logo Navbar
- **File**: `/Logo Nero.png`
- **Attuale**: `alt="Logo Nemo Web Agency"`
- **Note**: Unica variante logo in navbar sul design attuale.

---

## FOOTER (`src/components/Footer.jsx`)

### Logo Footer
- **File**: `/Logo Nero.png`
- **Attuale**: `alt="Logo Nemo Web Agency"`

---

## HOMEPAGE — Hero (`src/components/home/Hero.jsx`)

### Icona decorativa hero
- **File**: `/icona arancione.png`
- **Attuale**: `alt=""` + `aria-hidden` (decorativa)

### Icone floating Lucide
- Decorative (`aria-hidden`), nessun `alt` richiesto

### Lottie scroll cue
- Controllato via `aria-label` sul link: "Scorri alla sezione successiva"

---

## HOMEPAGE — Tracks (`src/components/home/HomeTracksSection.jsx`)

### Icona sezione
- **File**: `/icona arancione.png`
- **Attuale**: `alt=""` (decorativa)

### Cover tracks (background CSS Unsplash)
- Siti vetrina / Prenotazioni / E-commerce — immagini di sfondo CSS, non `<img>` (nessun alt)

---

## HOMEPAGE — Bridge / Services / Projects CTA / Relations CTA

### Elementi decorativi (`alt=""`)
- `HomeBridgeSection`, `HomeServicesSection` (icone/sfondi), `HomeProjectsCtaSection`, `HomeCtaSection`: immagini decorative o di atmosfera con `alt=""`

### Services brand mark
- **File**: dove presente img Nemo
- **Attuale**: `alt="Nemo"` in `HomeServicesSection` (accettabile; opzionale: `Logo Nemo Web Agency`)

---

## HOMEPAGE — Partners (`src/components/home/PartnersCarousel.jsx`)

Alt già definiti in `partnerAltTexts` (es. `Logo del partner Accademia del Gusto`, …).

---

## ALTRE PAGINE

PageHero / sezioni Chi Siamo, Servizi, Contatti, Preventivo, Legal: immagini decorative e wash di brand con `alt=""`.

---

## OPEN GRAPH

- **File**: `/og-image.jpg` (1200×630)
- Usata solo in meta `og:image` / Twitter card — non richiede alt HTML
