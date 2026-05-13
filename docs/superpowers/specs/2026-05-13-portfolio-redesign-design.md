# Portfolio Redesign — Design Spec

**Date:** 2026-05-13  
**Topic:** Apply new UI from `ai-portfolio/index.html` (Home) and `ai-portfolio/test-generator.html` (Detail) to the React app.

---

## 1. Goal

Rebuild the visual layer of the existing Create React App portfolio to match the design and content of two reference HTML files:
- `ai-portfolio/index.html` → Home page
- `ai-portfolio/test-generator.html` → Detail page for the AI Test Generator project

All other project detail pages retain a new-style image gallery (same design language, no case-study structure).

---

## 2. Design Language

| Token | Value |
|---|---|
| Background | `#09090b` |
| Surface | `#18181b` |
| Border | `#3f3f46` |
| Text | `#fafafa` |
| Muted | `#a1a1aa` |
| Accent | `#a78bfa` |
| Accent dim | `rgba(167,139,250,0.10)` |
| Red | `#ff6b6b` |

**Fonts:**
- Body: Inter (300, 400, 500, 600) — Google Fonts
- Display headings: DM Serif Display (regular, italic) — Google Fonts

**All tokens are defined in `tailwind.config.js`** under `theme.extend.colors` and `theme.extend.fontFamily`.

---

## 3. Tech Stack Changes

### Add
- `tailwindcss` + `autoprefixer` + `postcss` (dev dependencies)
- `tailwind.config.js` and `postcss.config.js`
- `@tailwindcss/typography` (optional, for case study body text)

### Remove
- `bootstrap` and `react-bootstrap` CSS/components imports  
  (React Router, react-lazy-load, etc. remain)
- `animate.css`
- `react-on-screen`
- Custom Centra font (`src/assets/font/`)

### Keep
- `react-router-dom` v6 — routing unchanged
- `react-router-hash-link`
- `react-lazy-load-image-component` — gallery still lazy-loads
- All `src/assets/` image/video files — untouched

---

## 4. File Structure

### New / Rewritten
```
tailwind.config.js             — design token extensions
postcss.config.js              — autoprefixer
src/index.css                  — Google Fonts @import, Tailwind directives, base reset
src/App.js                     — remove Bootstrap import, keep Router + routes
src/data.js                    — enhanced with rich project metadata
src/components/NavBar.js       — rewrite (fixed, scroll-frosted, new links)
src/components/Hero.js         — new component
src/components/Marquee.js      — new component
src/components/AIToolkit.js    — new component (4-phase cards)
src/components/Work.js         — new component (2-col case card grid)
src/components/ProjectCard.js  — rewrite
src/components/About.js        — rewrite
src/components/Contact.js      — rewrite
src/components/Footer.js       — rewrite
src/pages/Home.js              — rewrite (compose all sections)
src/pages/Detail.js            — rewrite (branch on caseStudyType)
src/components/ImageGallery.js — new component (gallery detail view)
src/components/CaseStudyTestGenerator.js — new component (full AI Test Generator case study)
```

### Deleted
```
src/components/Banner.js
src/components/Skills.js
src/components/Tool.js
src/components/Newsletter.js
src/components/PasswordModal.js
src/components/Intro.js
```

> Note: `PasswordModal` is deleted because the case study for the AI Test Generator is now a full public page. The `requirePassword` field in `data.js` can be kept as data but no longer triggers a modal.

---

## 5. Data Layer — `data.js` Additions

Each project entry gets these additional fields:

```js
{
  id: 1,
  name: "AI Test Generator — a new chapter for QA teams",
  tag: "AI · QA Testing",
  category: "QA Testing",
  year: "2026",
  impact: "↓ 70% time saved · 100% adoption. AI-powered test case generation from requirements, with Feature Area grouping — the structural layer no competitor provides.",
  chips: ["AI-augmented design", "Feature Area system", "Solo designer"],
  thumbBg: "linear-gradient(135deg,#1a1a2e,#16213e)",  // placeholder gradient
  caseStudyType: "full",   // "full" = CaseStudyTestGenerator, "gallery" = ImageGallery
  thumbnail: testcaseThumb,
  images: [ ... ]          // existing arrays unchanged
}
```

Existing projects (Nobee, TikTok, CarNow, Cine) get `caseStudyType: "gallery"` and appropriate `tag`, `year`, `impact`, `chips`, `thumbBg`.

---

## 6. Home Page — Section by Section

### NavBar
- Fixed position; transparent until `window.scrollY > 40`, then `bg-zinc-950/92 backdrop-blur-sm border-b border-zinc-800`
- Left: "Hien Nguyen" logo (text, 13px, uppercase, font-medium)
- Center: nav links — Work, AI Toolkit, About (muted, hover white)
- Right: "Get in touch" pill button (accent bg, dark text, links to `#contact`)
- On mobile (< 600px): hide nav links

### Hero
- `min-h-screen`, centered vertically, `pt-[120px] pb-[80px] px-12`
- Background: subtle grid (CSS `background-image` linear-gradient lines) with radial mask; purple radial glow centered top
- **Identity bar:** pulsing green dot + "Senior Product Designer at Katalon"
- **H1:** DM Serif Display, `clamp(44px, 6.5vw, 88px)`, line-height 1.04; italic accent-colored "faster with AI."
- **Sub:** 16px muted text, max-w-[540px]
- **CTA row:** Primary pill button "View my work →" (accent), ghost link "See my AI process →"
- **Stats row:** 4 items separated by vertical borders — "6 / Years enterprise design", "4× / Faster ideation", "100% / Adoption on shipped AI feature", "3w→5d / Design-to-handoff"
- Fade-up animation on scroll (IntersectionObserver)

### Marquee
- `border-y border-zinc-800 bg-zinc-900 py-4 overflow-hidden`
- Single `marquee-track` div, `animation: marquee 28s linear infinite`
- Items: Figma, Claude AI, Enterprise UX, Design Systems, VSCode, AI-Augmented Design, Rapid Prototyping, User Research Synthesis, Stakeholder Alignment (duplicated for seamless loop)

### AI Toolkit
- Section label "My Process"
- Header: 2-col (h2 left, descriptor text right)
- **4-col phase grid** (2-col on tablet, 1-col on mobile); `gap: 1px; background: border-color` trick for gutters
- Each phase card: phase number, icon, title, description
- **Hover expand:** `max-h-0 opacity-0` → `max-h-[120px] opacity-100` transition reveals result text + tool chips

### Work
- Section label "Selected Work"
- Header row: h2 "4 enterprise case studies" + "View all work →" link (placeholder)
- **2-col CSS grid, `gap: 2px`** (1-col on mobile)
- Rounded corners only on outer edges (first-child top-left, last-child bottom-right, etc.)
- Card: thumb wrap (260px height, `object-fit: cover`, scale on hover), absolute `case-tag` pill, absolute arrow icon (opacity 0 → 1 on hover), body (meta, title, impact, chips)
- Card links to `/details/:id`

### About
- Surface background, border-y
- **2-col grid** (1-col on mobile): left (h2 with italic accent, paragraph, skills list with accent dash), right (3 stacked belief cards: "What AI accelerates", "What AI cannot replace", "What that means for your team")

### Contact
- Centered, `pt-[120px]`
- DM Serif h2 "Ready to build *something great?*"
- Sub text
- Two buttons: "Send me an email" (primary), "View LinkedIn" (ghost)

### Footer
- `border-t border-zinc-800 px-12 py-7`
- Left: "© 2026 Hien Nguyen · Built with React, deployed on Vercel"
- Right: nav links

---

## 7. Detail Page — Branching

```jsx
// Detail.js
const project = projects.find(p => p.id === parseInt(projectId));
if (project.caseStudyType === 'full') {
  return <CaseStudyTestGenerator project={project} />;
}
return <ImageGallery project={project} />;
```

### ImageGallery
- NavBar at top (with "← Back to work" link in place of nav links — same as detail nav in HTML)
- Hero: project name as h1, tag pill, year/category meta cells, thumbnail or first image
- Images: lazy-loaded, full width, stacked vertically, dark bg
- No password modal

### CaseStudyTestGenerator
Implements `test-generator.html` sections in order:
1. **Nav** — fixed, logo + "← Back to work" link
2. **Hero** — 2-col: left (breadcrumb, title with italic accent, sub, meta cells: role/timeline/scope, impact numbers strip, skill tag chips); right (animated floating product preview mockup: sidebar with Feature Areas list, main panel with test case cards — pure HTML/CSS, no external library)
3. **Market** — 2-col: left (pull quote, body paragraphs), right (Before/After pain cards)
4. **Competitor Table** — 4-col comparison: Feature / Testim / TestRail / Katalon (highlighted)
5. **Vision** — 2-col: left (quote card, body, constraints list), right (body content)
6. **Persona** — card: identity left + stats grid right + goals/frustrations bottom grid
7. **Scope** — In / Out scope grid
8. **AI Process** — numbered steps (5-phase: Discovery → Synthesis → Ideation → Prototyping → Validation) with phase tags, tool badges, code snippet examples
9. **Key Insight** — hero callout box + secondary insight cards
10. **Outcomes** — impact numbers + evidence cards
11. **Reflection** — what worked / what I'd do differently

All content is hardcoded in the component (no data.js dependency for case study body content).

---

## 8. Scroll Animations

Replace `react-on-screen` + `animate.css` with a single `useIntersectionObserver` custom hook:

```js
// src/hooks/useScrollReveal.js
// Observes elements with class "fade-up", adds "visible" when 12% in view
// CSS: .fade-up { opacity:0; transform:translateY(24px); transition: 0.7s ease }
//      .fade-up.visible { opacity:1; transform:translateY(0) }
```

Applied to: hero stats, phase cards, case cards, belief cards.

---

## 9. Routing — No Changes

```
/                     → Home
/details/:projectId   → Detail (branches internally)
```

---

## 10. Out of Scope

- Dark/light mode toggle
- Search or filter on projects
- CMS / headless content management
- Animation library (Framer Motion, GSAP)
- Testing (unit or e2e)
- Converting to Next.js or TypeScript

---

## 11. Success Criteria

- [ ] Home page visually matches `ai-portfolio/index.html` section by section
- [ ] Navigating to `/details/1` renders the full `test-generator.html` case study
- [ ] Navigating to any other project ID renders the new-style image gallery
- [ ] All existing project images/assets load correctly
- [ ] NavBar scroll behavior matches the HTML (transparent → frosted glass)
- [ ] Marquee animates continuously
- [ ] Phase cards hover-expand works
- [ ] Fade-up scroll animations work
- [ ] App builds without errors (`npm run build`)
- [ ] Responsive: works on mobile (< 600px) and tablet (< 900px)
