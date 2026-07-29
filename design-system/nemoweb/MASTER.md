# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Nemoweb
**Generated:** 2026-07-29
**Category:** Creative Web Agency
**Design Dials:** Variance 5/10 (Balanced / Modern) | Motion 7/10 (Standard)

---

## Global Rules

### Color Palette (Brand — overrides skill defaults)

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#FF7351` | `--color-primary` |
| Primary Hover | `#ff8466` | `--color-primary-hover` |
| On Primary | `#FFFFFF` | `--color-on-primary` |
| Secondary | `#F96AB1` | `--color-secondary` |
| Background | `#FAFAF9` | `--color-background` |
| Surface | `#FFFFFF` | `--color-surface` |
| Foreground | `#1d1d1f` | `--color-foreground` |
| Muted | `#86868b` | `--color-muted` |
| Border | `#E8E8E6` | `--color-border` |
| Ink Dark | `#0c0c0d` | `--color-ink` |

**Do not use:** pink/purple SaaS palettes, cream+#terracotta editorial defaults, purple gradients.

### Typography

- **Heading / Body Font:** Montserrat (brand established)
- **Mood:** professional, modern, approachable, Mediterranean digital

### Landing Pattern

**Hero-Centric + Storytelling**

1. Hero (full-bleed, brand-first)
2. Services
3. Portfolio
4. Process
5. Testimonials / Partners
6. Final CTA

### Style

Soft UI Evolution — subtle depth, clear contrast, WCAG AA, 200–300ms transitions. No neo-brutal thick borders. No glow stacks.

### Motion

- Hero entrance: fade + slight rise (400–600ms)
- Scroll reveal: stagger on section children
- Partners: continuous marquee
- Respect `prefers-reduced-motion`

### Anti-patterns

- Stats / badges / chips in the hero
- Card grid in the hero
- Icon-row feature strips as primary content
- Flat single-color hero with no atmosphere
- Headline that overpowers the brand name
