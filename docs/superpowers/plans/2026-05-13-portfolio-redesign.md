# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the React portfolio's visual layer to match `ai-portfolio/index.html` (Home) and `ai-portfolio/test-generator.html` (Detail), using Tailwind CSS with design tokens.

**Architecture:** Full component overhaul — drop Bootstrap, add Tailwind with design-token extensions, rewrite all visual components. Routing (react-router-dom v6) and asset files are unchanged. Detail page branches: project id=1 → full CaseStudyTestGenerator, all others → ImageGallery.

**Tech Stack:** React 18, react-router-dom v6, Tailwind CSS 3, react-lazy-load-image-component

---

### Task 1: Tailwind Setup

**Files:**
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Modify: `package.json` (add tailwindcss, autoprefixer, postcss)
- Modify: `src/index.css` (add Tailwind directives, Google Fonts)

- [ ] Install Tailwind: `npm install -D tailwindcss autoprefixer postcss`
- [ ] Create `tailwind.config.js` with design token extensions
- [ ] Create `postcss.config.js`
- [ ] Replace `src/index.css` with Tailwind directives + Google Fonts + base reset + fade-up animation classes

---

### Task 2: Clean App.js + Remove Bootstrap

**Files:**
- Modify: `src/App.js`

- [ ] Remove `import 'bootstrap/dist/css/bootstrap.min.css'`
- [ ] Remove Footer from App.js (Footer will be rendered per-page)
- [ ] Keep Router + Routes + Wrapper as-is

---

### Task 3: Enhance data.js

**Files:**
- Modify: `src/data.js`

- [ ] Add `tag`, `year`, `impact`, `chips`, `thumbBg`, `caseStudyType` to each project

---

### Task 4: Rewrite NavBar.js

**Files:**
- Modify: `src/components/NavBar.js`

- [ ] Rewrite using Tailwind — fixed, transparent → frosted on scroll
- [ ] Logo text "Hien Nguyen", nav links Work/AI Toolkit/About, CTA pill "Get in touch"
- [ ] On detail pages: show "← Back to work" instead of nav links

---

### Task 5: Create Hero.js

**Files:**
- Create: `src/components/Hero.js`

- [ ] Grid background + purple glow effects
- [ ] Identity bar (green pulse dot + company line)
- [ ] DM Serif h1 with italic accent span
- [ ] Sub text, CTA row (primary + ghost buttons), chip tags row
- [ ] Stats row (4 items with vertical border separators)
- [ ] Fade-up animation via `fade-up` CSS class

---

### Task 6: Create Marquee.js

**Files:**
- Create: `src/components/Marquee.js`

- [ ] Infinite scroll strip with skill name items + dot separators
- [ ] CSS `marquee` keyframe animation (28s linear infinite)

---

### Task 7: Create AIToolkit.js

**Files:**
- Create: `src/components/AIToolkit.js`

- [ ] 4-column grid (2-col tablet, 1-col mobile)
- [ ] Each phase card: num, icon, title, description
- [ ] Hover-expand: `max-height` transition reveals result text + tool chips

---

### Task 8: Rewrite Work.js + ProjectCard.js

**Files:**
- Modify: `src/components/Work.js`
- Modify: `src/components/ProjectCard.js`

- [ ] Work.js: section label + header row + 2-col grid
- [ ] ProjectCard.js: thumbnail wrap (260px, scale on hover), tag pill, arrow icon, body (meta/title/impact/chips)
- [ ] Card links to `/details/:id` via React Router Link

---

### Task 9: Create About.js

**Files:**
- Create: `src/components/About.js`

- [ ] 2-col grid: left (headline, paragraph, skills list with accent dashes), right (3 stacked belief cards)
- [ ] Fade-up animations on belief cards

---

### Task 10: Rewrite Contact.js

**Files:**
- Modify: `src/components/Contact.js`

- [ ] Centered layout, DM Serif h2, sub text, two CTA buttons

---

### Task 11: Rewrite Footer.js

**Files:**
- Modify: `src/components/Footer.js`

- [ ] `border-t` rule, copyright left, footer nav links right

---

### Task 12: Rewrite Home.js

**Files:**
- Modify: `src/pages/Home.js`

- [ ] Compose: NavBar, Hero, Marquee, AIToolkit, Work, About, Contact, Footer

---

### Task 13: Create useScrollReveal.js hook

**Files:**
- Create: `src/hooks/useScrollReveal.js`

- [ ] IntersectionObserver hook that adds `.visible` to elements with class `.fade-up`

---

### Task 14: Create ImageGallery.js

**Files:**
- Create: `src/components/ImageGallery.js`

- [ ] New-style gallery header (project name, tag pill, year)
- [ ] Lazy-loaded images stacked full-width on dark bg

---

### Task 15: Create CaseStudyTestGenerator.js

**Files:**
- Create: `src/components/CaseStudyTestGenerator.js`

Sections (hardcoded content from test-generator.html):
- [ ] Hero: 2-col (breadcrumb, title, sub, meta cells, impact strip, skill chips; right: floating product preview mockup)
- [ ] Market: 2-col (pull quote + pain cards)
- [ ] Competitor table: 4-col comparison (Feature / Browserstack / Qase / Testrail + insight box + gap row)
- [ ] AI Process: numbered steps (Discovery/Architecture/Prototyping/Review/Ship)
- [ ] Flow (UX flow steps): 5 steps with design decisions aside
- [ ] Designs / Live demo: wizard mockup with step navigation
- [ ] Metrics: 3-col outcome numbers grid
- [ ] Reflection: lesson cards with numbered left column

---

### Task 16: Rewrite Detail.js

**Files:**
- Modify: `src/pages/Detail.js`

- [ ] Branch on `project.caseStudyType === 'full'` → CaseStudyTestGenerator
- [ ] Otherwise → ImageGallery
- [ ] Remove PasswordModal reference

---

### Task 17: Cleanup

**Files:**
- Delete: `src/components/Banner.js`, `Skills.js`, `Tool.js`, `Newsletter.js`, `PasswordModal.js`, `Intro.js`
- Modify: `package.json` (remove bootstrap, react-bootstrap, animate.css, react-on-screen entries)

- [ ] Delete unused components
- [ ] Run `npm install` to sync
- [ ] Run `npm run build` to verify no errors
