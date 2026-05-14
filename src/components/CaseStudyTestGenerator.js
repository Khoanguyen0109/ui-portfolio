import { useEffect, useRef, useState } from 'react';

/* ── Small primitives ── */
const SectionLabel = ({ children }) => (
  <div className="inline-flex items-center gap-2.5 text-[13px] font-bold tracking-[0.10em] uppercase text-[#d4d4d8] before:content-[''] before:w-6 before:h-0.5 before:bg-accent before:rounded-sm flex-shrink-0">
    {children}
  </div>
);

const SkillTag = ({ children }) => (
  <span className="inline-flex items-center text-[11px] font-bold tracking-[0.08em] uppercase text-accent bg-[rgba(167,139,250,0.10)] border border-[rgba(167,139,250,0.25)] px-3.5 py-[5px] rounded-full ml-2.5 align-middle">
    {children}
  </span>
);

const SectionHeader = ({ children }) => (
  <div className="flex items-center flex-wrap gap-1 mb-6">{children}</div>
);

/* ── Hero Product Preview ── */
const ProductPreview = () => (
  <div
    className="border border-[#3f3f46] rounded-2xl overflow-hidden bg-bg shadow-2xl"
    style={{ animation: 'float 5s ease-in-out infinite' }}
  >
    <img
      src="/images/test-generator-hero.png"
      alt="AI Test Generator product preview"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    />
  </div>
);

/* ── AI Process Steps ── */
const AI_STEPS = [
  {
    num: '1',
    phase: 'Discovery',
    tool: 'Claude',
    title: 'Research & competitive analysis — before the first meeting',
    body: 'Used Claude to map the competitive landscape, extract QE mental models, and define 5 core design questions before the first PM session.',
    result: 'Gap confirmed + questions defined before kickoff',
  },
  {
    num: '2',
    phase: 'Architecture',
    tool: 'Claude Code · Figma Make',
    title: 'Flow & hierarchy locked — before any screen work',
    body: 'Mapped the 5-step flow and page hierarchy for each screen, then built an initial prototype with Claude Code for team alignment.',
    result: 'Zero structural rework after team review',
  },
  {
    num: '3',
    phase: 'Prototyping',
    tool: 'Claude Code · VSCode',
    title: 'Interactive prototype in hours — live in the engineering session',
    body: 'Built a fully interactive HTML prototype and brought it to the engineering session. Real-time feedback incorporated same day — no static handoff.',
    result: 'Prototype → alignment → revision in one session',
    codeSnippet: [
      { type: 'comment', text: '// Prompt to Claude Code' },
      { type: 'accent', text: '"Build a 4-step test generator prototype.' },
      { type: 'accent', text: ' Step 1: requirement list with AI quality badges.' },
      { type: 'accent', text: ' Step 2: detail + upload + quality analysis panel.' },
      { type: 'accent', text: ' Step 3: clarifying questions, skippable.' },
      { type: 'accent', text: ' Step 4: generated cases streaming in, accept/edit/reject."' },
    ],
  },
  {
    num: '4',
    phase: 'Refinement',
    tool: 'Figma',
    title: 'High-fidelity — judgment-heavy, not generation-heavy',
    body: 'Figma Make accelerated components. Focused designer judgment on phrasing, tone, default actions. Specs shared with engineers as completed — not at the end.',
    result: 'Engineers never blocked — specs delivered in parallel',
  },
  {
    num: '5',
    phase: 'Handoff',
    tool: 'Figma',
    title: 'Handoff is where the real design work begins',
    body: 'Stayed embedded post-handoff — reviewing QA builds, fixing gaps immediately, syncing with PM on requirement changes and QE on validation.',
    result: 'Shipped experience matched design intent',
  },
];

const AED_PHASES = [
  { num: '01', name: 'Research', tool: 'Claude', output: 'Competitor map, mental models, design questions — ready before the first PM meeting' },
  { num: '02', name: 'Architecture', tool: 'Claude Code', output: '5-step flow defined, page hierarchy set — validated before touching Figma' },
  { num: '03', name: 'Prototype', tool: 'Claude Code · VSCode', output: 'Working HTML prototype same day — engineers click through and push back in real time' },
  { num: '04', name: 'High-Fidelity', tool: 'Figma Make · Claude', output: 'Screens judgment-led, not generated — AI scaffolds, designer decides every call' },
  { num: '05', name: 'Ship + Iterate', tool: 'Claude · VSCode', output: 'Continuous QA follow-up, PM re-sync, UX fixes — loop never closes until experience is right' },
];

/* ── User Flow Steps ── */
const FLOW_STEPS = [
  {
    num: '1',
    title: 'QE arrives at the Requirements page',
    desc: 'Requirements sync from Jira/ALM automatically. Each shows an AI quality badge — Good, Needs Clarification, or Vague — before opening anything.',
    skill: 'Information Architecture',
    decision: 'Surface quality signal at the list level, not inside each item',
    why: "Most tools hide quality issues until the QE opens a requirement. I moved evaluation to sync time — QE scans the list and knows where to focus before spending any time.",
    valueLabel: 'User value',
    valueText: 'No wasted effort on vague requirements — triage happens at a glance',
    law: 'Zeigarnik Effect',
  },
  {
    num: '2',
    title: 'QE reviews requirement + AI quality breakdown',
    desc: "Full requirement text + AI analysis side by side — what's clear, ambiguous, missing. Score is explained with reasoning, not just shown as a number.",
    skill: 'Trust Design',
    decision: "Show the AI's reasoning, not just its verdict",
    why: "A score alone is opaque and untrustworthy. Showing the breakdown tells QEs exactly what the AI found — builds confidence and teaches better requirement writing over time.",
    valueLabel: 'User value',
    valueText: "QE trusts the AI output because they can see its work — not just its answer",
    law: 'Aesthetic-Usability Effect',
  },
  {
    num: '3',
    title: 'QE enriches context before generating',
    desc: 'Before hitting Generate, QE can upload attachments — Figma files, DOCX specs, API docs. More context given to AI = more accurate, specific test cases as output.',
    skill: 'Input Design · Output Quality',
    decision: 'Give QE control over what AI knows before it generates',
    why: 'AI output quality is only as good as its input. I designed this step so QEs can actively improve what the AI sees — attachments feed directly into generation context, making output more targeted and reducing manual edits after.',
    valueLabel: 'User value',
    valueText: 'Better input = better output — QE spends less time editing AI-generated cases after the fact',
    law: 'Goal-Gradient Effect',
  },
  {
    num: '4',
    title: 'AI asks targeted clarifying questions',
    desc: 'For vague requirements, AI generates clarifying questions. QE answers some, all, or none — every answer improves output. Skipping always allowed.',
    skill: 'Complexity Management',
    decision: 'Offload clarification work to AI, keep QE in choice not obligation',
    why: "Instead of QE chasing PMs for clarification, AI generates the questions. Live quality score updates after each answer make the value tangible — QE sees progress, not a form to fill.",
    valueLabel: 'User value',
    valueText: 'QE gets smarter output without extra meetings — AI does the legwork',
    law: "Tesler's Law",
  },
  {
    num: '5',
    title: 'AI generates test cases',
    desc: 'Each test case is generated with: name, precondition, description, and test steps — scoped to the Feature Area. More context + answered questions = more complete coverage.',
    skill: 'Mental Model Design',
    decision: 'Match the exact structure QEs already write — zero re-learning required',
    why: 'Name, precondition, description, test steps — this is the structure QEs already use in their test management tools. AI output maps directly to what they know, so review starts immediately with no reformatting needed.',
    valueLabel: 'User value',
    valueText: 'Output feels native — QE can review and edit immediately, no mental translation required',
    law: "Jakob's Law",
  },
  {
    num: '6',
    title: 'QE reviews, edits, accepts — grouped by Feature Area',
    desc: 'Cases auto-grouped by Feature Area. QE edits inline, accepts or rejects in context. No flat list hunting. Accepted cases land directly in the test suite.',
    skill: 'End-State Design · Control',
    decision: 'Grouping by Feature Area removes the hardest cognitive task — orientation',
    why: 'Flat lists at scale are unusable. Feature Area grouping gives QEs a mental map of what they\'re reviewing before they read a single case. The final export confirmation closes the loop — it feels like success.',
    valueLabel: 'User value',
    valueText: 'Review is fast and structured — QE stays in judgment mode, not search mode',
    law: 'Peak-End Rule',
  },
];

/* ── Wizard steps ── */
const WIZARD_STEPS = [
  {
    num: '01',
    label: 'Requirement\nquality score',
    title: 'Requirement details — quality score',
    text: 'AI evaluates every requirement on sync and surfaces a quality score — Good, Needs Clarification, or Vague — with a full breakdown of what\'s clear and what\'s missing. QE sees signal before touching anything.',
    images: ['/images/quality score2.jpg'],
  },
  {
    num: '02',
    label: 'Upload\nattachment',
    title: 'Upload more attachment',
    text: 'QE uploads design specs, mockups, or API docs to enrich the AI context before generating. More context means higher coverage and more specific test cases — shown as a clear value signal in the UI.',
    images: ['/images/Upload attachments.jpg'],
  },
  {
    num: '03',
    label: 'Clarification\nrequirement',
    title: 'Clarification requirement',
    text: 'When a requirement is vague, AI generates targeted clarifying questions. QE answers what they can — or skips entirely. Every answered question directly improves output quality.',
    images: ['/images/Requirement clarification.jpg'],
  },
  {
    num: '04',
    label: 'Thinking\nprocess',
    title: 'Thinking process',
    text: 'AI reads requirement, analyses scenarios, generates test cases, and finalises steps — shown as a transparent 4-stage progress. QEs know exactly what the AI is doing, building trust in the output.',
    images: ['/images/Generate process.jpg'],
  },
  {
    num: '05',
    label: 'AI test cases\ngenerated',
    title: 'AI test cases generated',
    text: 'AI test cases are automatically grouped by Feature Area — so QE reviews in context, not across a flat list. Each case can be edited inline, accepted, or rejected individually. The grouping makes bulk review fast and exact, with accepted cases landing directly in the right place in the test suite.',
    images: [
      '/images/AI test cases generated.jpg',
      '/images/AI test cases generated 1.jpg',
      '/images/AI test cases generated 2.jpg',
    ],
  },
];

/* ── Success Metrics ── */
const METRICS = [
  {
    value: '70%',
    label: 'Time saved on test case creation',
    context: '~40 min → under 12 min per requirement, first sprint post-launch.',
    highlight: true,
  },
  {
    value: '100%',
    label: 'Team adoption rate',
    context: 'Every QE requested and uses it. Not mandated — chosen.',
    highlight: true,
  },
  {
    value: '0→1',
    label: 'First AI feature in QA tool',
    context: 'Set the design pattern for all subsequent AI features.',
    highlight: false,
  },
  {
    value: '3',
    label: 'Competitors studied, 1 gap found',
    context: 'All 3 differentiators shipped in v1 — no competitor matched.',
    highlight: false,
  },
  {
    value: 'Same day',
    label: 'Prototype → alignment → revision',
    context: 'Engineer feedback incorporated same session via Claude Code.',
    highlight: false,
  },
  {
    value: 'Zero',
    label: 'Design drift at launch',
    context: '3 interaction gaps caught pre-QA. Shipped matched intent.',
    highlight: false,
  },
];

/* ── Lessons Learned ── */
const LESSONS = [
  {
    num: '01',
    tag: 'Core value',
    tagType: 'accent',
    title: 'AI as a trusted partner — not a threat',
    body: 'AI surfaces quality signals — QE always makes the final call. Every interaction was designed to build trust gradually: score badges, transparent reasoning, always-editable output. <strong>100% voluntary adoption</strong> was the proof that QEs felt safe, not threatened.',
  },
  {
    num: '02',
    tag: 'Technical challenge',
    tagType: 'warn',
    title: 'Multi-agent friction and hallucination',
    body: 'Chaining <strong>multiple AI agents</strong> introduces real risk: context loss, inconsistent format, hallucination on vague requirements. The clarification step lets QE correct AI assumptions before generation; the review screen catches bad output. We <strong>continuously test each agent</strong> in isolation and in full flow — this is ongoing, not a one-time fix.',
  },
  {
    num: '03',
    tag: 'Roadmap',
    tagType: 'future',
    title: 'Next: AI-powered test execution',
    body: 'Once QE accepts generated cases, the system should run them automatically — capturing results and surfacing failures without manual handoff. From <strong>"AI writes tests"</strong> to <strong>"AI writes and runs tests"</strong>. Planned as the next phase.',
  },
];

/* ═══════════════════════════════════
   WIZARD COMPONENT
═══════════════════════════════════ */
const Wizard = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-surface rounded-2xl overflow-hidden border border-[#3f3f46]">
      {/* Guide hint */}
      <div className="flex items-center gap-1.5 px-9 pt-2.5 text-[11px] text-[#a1a1aa] font-medium">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M6.5 5.5v3M6.5 4h.01" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        Click each step to view details
      </div>

      {/* Step nav */}
      <div className="flex items-center px-9 py-7 gap-0 border-b border-[#3f3f46] bg-bg">
        {WIZARD_STEPS.map((step, i) => (
          <div key={i} className="flex items-center flex-1">
            <button
              onClick={() => setActive(i)}
              className={`flex flex-col items-center gap-2 cursor-pointer flex-shrink-0 px-1.5 py-1 rounded-xl transition-all hover:-translate-y-0.5 border-none bg-transparent group ${
                i === active ? 'opacity-100' : 'opacity-60 hover:opacity-80'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all ${
                  i < active
                    ? 'bg-[rgba(167,139,250,0.15)] border-[rgba(167,139,250,0.4)]'
                    : i === active
                    ? 'bg-[rgba(167,139,250,0.10)] border-accent shadow-[0_0_0_4px_rgba(167,139,250,0.12)]'
                    : 'bg-[rgba(255,255,255,0.05)] border-[#3f3f46]'
                }`}
              >
                {i < active ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3.5 3.5 5.5-6" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <span className={`text-[12px] font-bold ${i === active ? 'text-accent' : 'text-[#a1a1aa]'}`}>
                    {step.num}
                  </span>
                )}
              </div>
              <div
                className={`text-[11px] font-medium text-center leading-tight whitespace-pre-line ${
                  i === active ? 'text-accent' : 'text-[#a1a1aa]'
                }`}
              >
                {step.label}
              </div>
            </button>
            {i < WIZARD_STEPS.length - 1 && (
              <div className="flex-1 h-px mx-1" style={{ background: i < active ? 'rgba(167,139,250,0.3)' : '#3f3f46' }} />
            )}
          </div>
        ))}
      </div>

      {/* Panel */}
      <div className="px-9 py-8">
        <div key={active} style={{ animation: 'stepIn 0.3s ease both' }}>
          {/* Step images */}
          <div className="flex flex-col gap-4 mb-8">
            {WIZARD_STEPS[active].images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${WIZARD_STEPS[active].title}${WIZARD_STEPS[active].images.length > 1 ? ` ${idx + 1}` : ''}`}
                className="w-full rounded-2xl border border-[#3f3f46] object-cover"
                loading="lazy"
              />
            ))}
          </div>
          {/* Description */}
          <div className="flex gap-6 items-start max-w-[680px]">
            <div className="font-serif text-[28px] text-[#3f3f46] flex-shrink-0 leading-none mt-1">
              {WIZARD_STEPS[active].num}
            </div>
            <div>
              <div className="text-[16px] font-semibold text-white mb-2 leading-[1.4]">
                {WIZARD_STEPS[active].title}
              </div>
              <div className="text-[14px] text-[#a1a1aa] leading-[1.75]">
                {WIZARD_STEPS[active].text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════ */
export const CaseStudyTestGenerator = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    if (!pageRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.08 }
    );
    pageRef.current.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="bg-bg min-h-screen">

      {/* ── HERO ── */}
      <section className="px-12 pb-[72px] border-b border-[#3f3f46] relative overflow-hidden" style={{ paddingTop: '120px' }}>
        <div className="absolute pointer-events-none" style={{ top: '-100px', right: '-100px', width: '700px', height: '600px', background: 'radial-gradient(ellipse, rgba(167,139,250,0.07) 0%, transparent 65%)' }} />
        <div className="hero-grid-bg" />
        <div className="relative z-10 grid gap-16 items-start" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {/* Left */}
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2.5 text-[12px] text-[#a1a1aa] uppercase tracking-[0.06em] mb-7">
              <span>Work</span>
              <span className="text-[#3f3f46]">/</span>
              <strong className="text-accent font-medium">Test Generator</strong>
            </div>
            <h1 className="font-serif font-normal text-white mb-5" style={{ fontSize: 'clamp(36px, 4.5vw, 62px)', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
              AI Test Generator —<br />
              <em className="not-italic text-accent">a new chapter</em><br />
              for QA teams.
            </h1>
            <p className="text-[15px] text-[#a1a1aa] leading-[1.75] mb-10">
              Generates test cases from requirements, evaluates requirement quality,
              and introduces Feature Area grouping — the structural layer every QE
              needs but no competitor provides.
            </p>
            {/* Meta cells */}
            <div className="grid gap-px bg-[#3f3f46] border border-[#3f3f46] rounded-xl overflow-hidden mb-10" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
              {[{ label: 'My Role', value: 'Solo Senior Designer' }, { label: 'Timeline', value: '2026 · Shipped' }, { label: 'AI Tools', value: 'Claude Code · VSCode · Figma Make' }].map((m) => (
                <div key={m.label} className="bg-surface px-5 py-4">
                  <div className="text-[10px] tracking-[0.10em] uppercase text-[#a1a1aa] mb-1">{m.label}</div>
                  <div className="text-[13px] font-medium text-white">{m.value}</div>
                </div>
              ))}
            </div>
            {/* Impact strip — 4 items matching HTML */}
            <div className="flex gap-8 pt-8 border-t border-[#3f3f46]">
              {[
                { num: '70%', label: 'Time saved on\ntest case creation' },
                { num: '100%', label: 'Adoption rate\n(user-requested)' },
                { num: '3', label: 'Competitors studied,\n1 gap found' },
              ].map((s) => (
                <div key={s.num}>
                  <div className="font-serif text-accent mb-1.5" style={{ fontSize: '40px', lineHeight: 1 }}>{s.num}</div>
                  <div className="text-[12px] text-[#a1a1aa] leading-[1.5] whitespace-pre-line">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className="pt-4">
            <ProductPreview />
          </div>
        </div>
      </section>

      {/* ── MARKET MOMENT ── */}
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>The Context</SectionLabel><SkillTag>Market Research</SkillTag></SectionHeader>
          <div className="grid gap-20 items-start" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div>
              <div className="font-serif font-normal text-white leading-[1.35] border-l-2 border-accent pl-7 mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', letterSpacing: '-0.02em' }}>
                Testing is entering<br /><em className="not-italic text-accent">a new chapter.</em><br />AI is writing it.
              </div>
              <p className="text-[15px] text-[#a1a1aa] leading-[1.8]">
                QEs have written test cases manually for decades — slow, inconsistent, disconnected from engineering speed.
                AI changes this by removing the <em className="text-white not-italic">busywork</em>, not the QE —
                freeing them for coverage strategy, edge cases, and quality gates.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "The QE's today", color: 'text-[#ff6b6b]', text: '20–40 test cases per sprint, written manually from incomplete requirements. 5–15 min each — mostly reading and parsing, not thinking.' },
                { label: 'The opportunity', color: 'text-accent', text: 'AI handles parsing and drafting. QE spends time on judgment — reviewing, refining coverage, catching what AI misses.' },
                { label: 'The constraint', color: 'text-[#a1a1aa]', text: 'QEs must trust the output. Every AI result is reviewable, editable, and never final on its own.' },
              ].map((c) => (
                <div key={c.label} className="bg-bg border border-[#3f3f46] rounded-xl px-6 py-5">
                  <div className={`text-[11px] font-semibold tracking-[0.10em] uppercase mb-2 ${c.color}`}>{c.label}</div>
                  <div className="text-[14px] text-[#d4d4d8] leading-[1.6]">{c.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPETITOR ANALYSIS ── */}
      <section className="px-12 py-20 bg-bg border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>Competitor Analysis</SectionLabel><SkillTag>Competitive Research</SkillTag></SectionHeader>
          <h2 className="font-serif font-normal text-white leading-[1.1] mb-12" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', letterSpacing: '-0.02em' }}>
            What the market<br />already gets <em className="not-italic text-accent">wrong.</em>
          </h2>

          <div className="fade-up border border-[#3f3f46] rounded-2xl overflow-hidden mb-8">
            <div className="grid bg-surface border-b border-[#3f3f46]" style={{ gridTemplateColumns: '240px 1fr 1fr 1fr' }}>
              {['Feature', 'Browserstack', 'Qase', 'Testrail'].map((h) => (
                <div key={h} className="px-6 py-4 text-[12px] font-semibold tracking-[0.08em] uppercase text-[#a1a1aa] border-r border-[#3f3f46] last:border-r-0">{h}</div>
              ))}
            </div>
            {[
              { feature: 'Jira / ALM integration', bs: { icon: '✓', label: 'Available', c: 'text-accent' }, qase: { icon: '✓', label: 'Available', c: 'text-accent' }, tr: { icon: '✓', label: 'Available', c: 'text-accent' }, hi: false },
              { feature: 'AI-assisted generation', bs: { icon: '◐', label: 'Beta / limited', c: 'text-[#f0a500]' }, qase: { icon: '◐', label: 'Beta', c: 'text-[#f0a500]' }, tr: { icon: '✗', label: 'Not available', c: 'text-[#ff6b6b]' }, hi: false },
              { feature: '🎯 Proactive quality evaluation', bs: { icon: '✗', label: 'Not available', c: 'text-[#ff6b6b]' }, qase: { icon: '✓', label: 'Available', c: 'text-accent' }, tr: { icon: '✗', label: 'Not available', c: 'text-[#ff6b6b]' }, hi: true },
              { feature: '🎯 Clarifying questions flow', bs: { icon: '✗', label: 'Not available', c: 'text-[#ff6b6b]' }, qase: { icon: '✗', label: 'Not available', c: 'text-[#ff6b6b]' }, tr: { icon: '✗', label: 'Not available', c: 'text-[#ff6b6b]' }, hi: true },
              { feature: '🎯 Feature Area grouping', bs: { icon: '✗', label: 'Not available', c: 'text-[#ff6b6b]' }, qase: { icon: '✗', label: 'Not available', c: 'text-[#ff6b6b]' }, tr: { icon: '✗', label: 'Not available', c: 'text-[#ff6b6b]' }, hi: true },
              { feature: 'Attachment enrichment', bs: { icon: '✓', label: 'Available', c: 'text-accent' }, qase: { icon: '✗', label: 'Not available', c: 'text-[#ff6b6b]' }, tr: { icon: '✗', label: 'Not available', c: 'text-[#ff6b6b]' }, hi: false },
            ].map((row) => (
              <div key={row.feature} className="grid border-b border-[#3f3f46] last:border-b-0 transition-colors hover:bg-surface" style={{ gridTemplateColumns: '240px 1fr 1fr 1fr', background: row.hi ? 'rgba(167,139,250,0.05)' : undefined }}>
                <div className={`px-6 py-[18px] text-[13px] font-medium border-r border-[#3f3f46] flex items-center ${row.hi ? 'text-accent' : 'text-white'}`}>{row.feature}</div>
                {[row.bs, row.qase, row.tr].map((cell, ci) => (
                  <div key={ci} className="px-6 py-[18px] text-[13px] text-[#d4d4d8] border-r border-[#3f3f46] last:border-r-0 flex items-center gap-2">
                    <span className={`text-[14px] ${cell.c}`}>{cell.icon}</span>{cell.label}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="fade-up bg-[rgba(167,139,250,0.10)] border border-[rgba(167,139,250,0.25)] rounded-xl px-7 py-6 flex gap-4 items-start mb-6">
            <span className="text-[20px] flex-shrink-0 mt-0.5">💡</span>
            <p className="text-[14px] text-white leading-[1.7]">
              Qase has quality evaluation — but it's reactive, triggered after the QE opens a requirement.
              Our product evaluates <strong className="text-accent">before the QE opens it</strong>, surfacing signal on the list itself.
              No competitor combines proactive evaluation with a <strong className="text-accent">clarifying questions flow</strong> and{' '}
              <strong className="text-accent">Feature Area grouping</strong> in a single workflow. All three shipped in v1.
            </p>
          </div>

          <div className="fade-up grid gap-0.5 bg-[#3f3f46] border border-[#3f3f46] rounded-xl overflow-hidden" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            {[
              { name: 'Browserstack', text: 'Strong execution layer, but no structural grouping. QEs end up with flat lists of test cases with no area context.' },
              { name: 'Qase', text: 'Has quality evaluation and AI in beta — but no clarifying questions flow and no Feature Area grouping. Surfaces issues without guiding the QE to resolve them.' },
              { name: 'Testrail', text: 'Enterprise gold standard but no AI at all. Suites exist but require heavy manual setup with no guidance.' },
            ].map((c) => (
              <div key={c.name} className="bg-bg px-6 py-5">
                <div className="text-[12px] font-semibold text-[#a1a1aa] tracking-[0.06em] uppercase mb-2">{c.name}</div>
                <div className="text-[13px] text-[#555] leading-[1.6] italic">{c.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI DESIGN PROCESS ── */}
      <section className="px-12 py-20 bg-bg border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>AI-Augmented Design Process</SectionLabel><SkillTag>AI-Augmented Design</SkillTag></SectionHeader>
          <h2 className="font-serif font-normal text-white leading-[1.1] mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', letterSpacing: '-0.02em' }}>
            My process —<br /><em className="not-italic text-accent">AI-native from day one.</em>
          </h2>
          <p className="text-[16px] text-[#a1a1aa] max-w-[600px] leading-[1.7] mb-12">
            Not as a shortcut — as a force multiplier. Claude Code, Figma Make, and VSCode let me stay in the room with engineering and PM at every stage, not just at handoff.
          </p>

          <div className="fade-up flex flex-col gap-px bg-[#3f3f46] border border-[#3f3f46] rounded-[14px] overflow-hidden">
            {AI_STEPS.map((step) => (
              <div
                key={step.num}
                className="group grid bg-surface transition-colors hover:bg-[#1c1c1f]"
                style={{ gridTemplateColumns: '48px 200px 1fr 260px' }}
              >
                {/* Num */}
                <div className="flex items-center justify-center font-serif text-[18px] text-[#3f3f46] group-hover:text-accent border-r border-[#3f3f46] transition-colors py-4">
                  {step.num}
                </div>
                {/* Phase + tool */}
                <div className="px-[18px] py-4 border-r border-[#3f3f46] flex flex-col justify-center gap-2">
                  <span className="text-[10px] font-bold tracking-[0.10em] uppercase text-[#a1a1aa]">{step.phase}</span>
                  <span className="text-[10px] font-semibold text-accent bg-[rgba(167,139,250,0.10)] border border-[rgba(167,139,250,0.22)] px-2 py-0.5 rounded w-fit">{step.tool}</span>
                </div>
                {/* Title + body */}
                <div className="px-5 py-4">
                  <div className="text-[13px] font-semibold text-white mb-1 leading-[1.4]">{step.title}</div>
                  <div className="text-[12px] text-[#a1a1aa] leading-[1.65]">{step.body}</div>
                  {step.codeSnippet && (
                    <div className="mt-3 bg-bg border border-[#3f3f46] rounded-lg px-3.5 py-3 font-mono text-[11px] leading-[1.6]">
                      {step.codeSnippet.map((line, li) => (
                        <div key={li} className={line.type === 'comment' ? 'text-[#444]' : 'text-accent'}>{line.text}</div>
                      ))}
                    </div>
                  )}
                </div>
                {/* Result */}
                <div className="px-5 py-4 text-[11px] font-semibold text-accent border-l border-[#3f3f46] flex items-center">
                  → {step.result}
                </div>
              </div>
            ))}
          </div>

          {/* AI-Era Workflow Diagram */}
          <SectionHeader>
            <SectionLabel>How I work as a designer in the AI era</SectionLabel>
            <SkillTag>AI-Augmented Design</SkillTag>
          </SectionHeader>
          <h2 className="font-serif font-normal text-white leading-[1.1] mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', letterSpacing: '-0.02em' }}>
            I leverage AI across every phase —<br /><em className="not-italic text-accent">to ship sharper, faster, with no gaps</em>
          </h2>
          <p className="text-[15px] text-[#a1a1aa] max-w-[600px] leading-[1.7] mb-12">Compressing time between decisions and delivery — every judgment call stays mine.</p>

          <div className="fade-up bg-surface rounded-[14px] overflow-hidden border border-[#3f3f46]">
            <div className="grid" style={{ gridTemplateColumns: 'repeat(5,1fr)' }}>
              {AED_PHASES.map((p, i) => (
                <div key={p.num} className="px-5 py-6 border-r border-[#3f3f46] last:border-r-0 relative">
                  {i < AED_PHASES.length - 1 && (
                    <div className="absolute top-7 right-[-9px] w-4 h-4 bg-[#3f3f46] border border-[#3f3f46] rounded-full z-10 flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 4h4M4 2l2 2-2 2" stroke="#71717a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  )}
                  <div className="text-[10px] font-bold tracking-[0.08em] text-[#d4d4d8] mb-2">{p.num}</div>
                  <div className="text-[13px] font-bold text-white mb-2">{p.name}</div>
                  <div className="inline-block text-[10px] font-semibold text-accent bg-[rgba(167,139,250,0.10)] border border-[rgba(167,139,250,0.25)] px-2 py-0.5 rounded mb-3">{p.tool}</div>
                  <div className="text-[11px] text-[#a1a1aa] leading-[1.55]">
                    <strong className="text-[#d4d4d8] font-semibold">{p.output.split(' — ')[0]}</strong>
                    {p.output.includes(' — ') && ` — ${p.output.split(' — ')[1]}`}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-[#3f3f46] bg-[rgba(167,139,250,0.04)] px-8 py-4 flex items-center gap-5 flex-wrap">
              <div className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#a1a1aa] whitespace-nowrap">Always in sync with</div>
              <div className="flex items-center gap-2 flex-wrap">
                {['PM — requirement changes', 'Engineering — build review', 'QE — validate & iterate'].map((node, i, arr) => (
                  <div key={node} className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-white bg-[#3f3f46] border border-[#3f3f46] px-3 py-1 rounded-full">{node}</span>
                    {i < arr.length - 1 && <div className="w-6 h-px bg-[#3f3f46]" />}
                  </div>
                ))}
              </div>
              <div className="ml-auto text-[11px] text-[#a1a1aa] text-right max-w-[360px]">Every QA cycle is a design validation pass — gaps fixed same session</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USER FLOW ── */}
      <section className="px-12 py-20 bg-[#09090b] border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>The User Flow</SectionLabel><SkillTag>Interaction Design</SkillTag></SectionHeader>
          <h2 className="font-serif font-normal text-white leading-[1.1] mb-10" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', letterSpacing: '-0.02em' }}>
            From requirement<br />to test case, <em className="not-italic text-accent">in minutes.</em>
          </h2>

          {/* Column headers */}
          <div className="grid border border-[#3f3f46] rounded-t-xl overflow-hidden bg-[#3f3f46]" style={{ gridTemplateColumns: '44px 1fr 1fr 220px' }}>
            <div className="bg-[#3f3f46] border-r border-[#3f3f46]" />
            <div className="bg-surface px-[22px] py-2.5 text-[10px] font-bold tracking-[0.10em] uppercase text-[#a1a1aa] border-r border-[#3f3f46]">What happens</div>
            <div className="bg-surface px-[22px] py-2.5 text-[10px] font-bold tracking-[0.10em] uppercase text-[#a1a1aa] border-r border-[#3f3f46]">My design decision</div>
            <div className="bg-surface px-[18px] py-2.5 text-[10px] font-bold tracking-[0.10em] uppercase text-[#a1a1aa]">User value + principle</div>
          </div>

          <div className="fade-up flex flex-col gap-px bg-[#3f3f46] border border-t-0 border-[#3f3f46] rounded-b-xl overflow-hidden">
            {FLOW_STEPS.map((step, i) => (
              <div
                key={step.num}
                className="grid bg-surface transition-colors hover:bg-[#3f3f46]"
                style={{ gridTemplateColumns: '44px 1fr 1fr 220px' }}
              >
                {/* Num */}
                <div
                  className="flex items-center justify-center font-serif text-[16px] text-[#3f3f46] border-r border-[#3f3f46] transition-colors"
                  style={{ alignSelf: 'stretch' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#a78bfa'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#3f3f46'}
                >
                  {step.num}
                </div>
                {/* What happens */}
                <div className="px-[22px] py-[18px] border-r border-[#3f3f46]">
                  <div className="text-[13px] font-semibold text-white mb-1.5">{step.title}</div>
                  <div className="text-[12px] text-[#a1a1aa] leading-[1.6]">{step.desc}</div>
                </div>
                {/* Design decision */}
                <div className="px-[22px] py-[18px] border-r border-[#3f3f46] flex flex-col gap-2">
                  <div className="text-[10px] font-bold tracking-[0.10em] uppercase text-accent">{step.skill}</div>
                  <div className="text-[12px] font-semibold text-white">{step.decision}</div>
                  <div className="text-[12px] text-[#a1a1aa] leading-[1.6]">{step.why}</div>
                </div>
                {/* Value + principle */}
                <div className="px-[18px] py-[18px] flex flex-col gap-2 justify-center">
                  <div className="text-[10px] font-bold tracking-[0.10em] uppercase text-[#a1a1aa]">{step.valueLabel}</div>
                  <div className="text-[12px] text-[#d4d4d8] leading-[1.55]">{step.valueText}</div>
                  <span className="inline-flex items-center text-[10px] text-accent bg-[rgba(167,139,250,0.10)] px-2 py-[3px] rounded-full w-fit">
                    {step.law}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE SHIPPED SCREENS ── */}
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>Final Flow &amp; Interaction</SectionLabel><SkillTag>Prototyping</SkillTag></SectionHeader>
          <h2 className="font-serif font-normal text-white leading-[1.1] mb-12" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', letterSpacing: '-0.02em' }}>
            The shipped screens,<br /><em className="not-italic text-accent">step by step.</em>
          </h2>
          <Wizard />
        </div>
      </section>

      {/* ── SUCCESS METRICS ── */}
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>Success Metrics</SectionLabel><SkillTag>Impact</SkillTag></SectionHeader>
          <h2 className="font-serif font-normal text-white leading-[1.1] mb-12" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', letterSpacing: '-0.02em' }}>
            What shipped<br />and <em className="not-italic text-accent">what changed.</em>
          </h2>
          <div className="fade-up border border-[#3f3f46] rounded-[14px] overflow-hidden">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="grid border-b border-[#3f3f46] last:border-b-0 bg-bg hover:bg-surface transition-colors"
                style={{ gridTemplateColumns: '180px 1fr', alignItems: 'center' }}
              >
                <div className={`px-8 py-7 border-r border-[#3f3f46] font-serif font-normal leading-none ${m.highlight ? 'text-accent' : 'text-white'}`} style={{ fontSize: 'clamp(32px, 3vw, 48px)' }}>
                  {m.value}
                </div>
                <div className="px-8 py-7">
                  <div className="text-[14px] font-semibold text-white mb-1.5 leading-[1.4]">{m.label}</div>
                  <div className="text-[13px] text-[#a1a1aa] leading-[1.65]">{m.context}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LESSONS LEARNED ── */}
      <section className="px-12 py-20 bg-bg">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>Lessons Learned</SectionLabel><SkillTag>Design Maturity</SkillTag></SectionHeader>
          <h2 className="font-serif font-normal text-white leading-[1.1] mb-10" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', letterSpacing: '-0.02em' }}>
            What I learned,<br />and <em className="not-italic text-accent">what comes next.</em>
          </h2>

          <div className="fade-up flex flex-col gap-0.5 border border-[#3f3f46] rounded-2xl overflow-hidden">
            {LESSONS.map((lesson) => (
              <div key={lesson.num} className="bg-surface border-b border-[#3f3f46] last:border-b-0"
                style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '40px', padding: '32px 36px', alignItems: 'start' }}>
                <div className="flex flex-col gap-3">
                  <div className="font-serif text-[36px] text-accent leading-none">{lesson.num}</div>
                  <span className={`text-[10px] font-bold tracking-[0.10em] uppercase px-2.5 py-1 rounded border inline-block w-fit ${
                    lesson.tagType === 'accent' ? 'text-accent bg-[rgba(167,139,250,0.10)] border-[rgba(167,139,250,0.25)]'
                    : lesson.tagType === 'warn' ? 'text-[#f0a500] bg-[rgba(240,165,0,0.08)] border-[rgba(240,165,0,0.25)]'
                    : 'text-[#34d399] bg-[rgba(52,211,153,0.08)] border-[rgba(52,211,153,0.25)]'
                  }`}>{lesson.tag}</span>
                  <div className="text-[16px] font-bold text-white leading-[1.4]">{lesson.title}</div>
                </div>
                <div className="text-[14px] text-[#d4d4d8] leading-[1.8] pt-1" dangerouslySetInnerHTML={{ __html: lesson.body }} />
              </div>
            ))}
          </div>

          {/* Next project */}
          <div className="mt-20 pt-12 border-t border-[#3f3f46] flex justify-between items-center">
            <div>
              <div className="text-[12px] text-[#a1a1aa] uppercase tracking-[0.08em] mb-2">Next case study</div>
              <div className="text-[20px] font-semibold text-white">Import Test Case to System</div>
            </div>
            <a href="#work" className="inline-flex items-center gap-2.5 text-[14px] text-[#a1a1aa] no-underline hover:text-accent transition-colors group">
              View project
              <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes stepIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
