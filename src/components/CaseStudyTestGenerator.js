import { useEffect, useRef } from 'react';

/* ── Small reusable primitives ── */
const SectionLabel = ({ children }) => (
  <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#a1a1aa] mb-5 before:content-[''] before:w-4 before:h-px before:bg-[#a1a1aa]">
    {children}
  </div>
);

const SkillTag = ({ children }) => (
  <span className="inline-flex items-center text-[10px] font-bold tracking-[0.10em] uppercase text-accent bg-[rgba(167,139,250,0.10)] border border-[rgba(167,139,250,0.25)] px-3 py-1 rounded-full ml-3 align-middle">
    {children}
  </span>
);

const SectionHeader = ({ children }) => (
  <div className="flex items-center flex-wrap gap-1 mb-5">{children}</div>
);

/* ── Hero Product Preview (right column) ── */
const ProductPreview = () => (
  <div
    className="border border-[#3f3f46] rounded-2xl overflow-hidden bg-bg shadow-2xl"
    style={{ animation: 'float 5s ease-in-out infinite' }}
  >
    {/* Titlebar */}
    <div className="flex items-center gap-1.5 bg-[#09090b] border-b border-[#3f3f46] px-3.5 py-2.5">
      <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
      <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
      <span className="w-2 h-2 rounded-full bg-[#28c840]" />
      <span className="flex-1 bg-[rgba(255,255,255,0.04)] rounded px-2.5 py-1 text-[10px] text-[#a1a1aa] mx-2">
        katalon.com · AI Test Generator
      </span>
    </div>
    {/* App layout */}
    <div className="grid" style={{ gridTemplateColumns: '140px 1fr', height: '340px' }}>
      {/* Sidebar */}
      <div className="bg-[#090909] border-r border-[#3f3f46] px-2 py-3">
        <div className="text-[9px] tracking-[0.12em] uppercase text-[#a1a1aa] px-2 py-1.5 mb-1">
          Feature Areas
        </div>
        {[
          { name: 'Authentication', count: '12', active: true },
          { name: 'Search & Filter', count: '8', active: false },
          { name: 'Checkout Flow', count: '15', active: false },
          { name: 'User Profile', count: '6', active: false },
        ].map((a) => (
          <div
            key={a.name}
            className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md mb-0.5 text-[11px] ${
              a.active ? 'bg-[rgba(167,139,250,0.10)] text-accent' : 'text-[#d4d4d8]'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                a.active ? 'bg-accent' : 'bg-[#3f3f46]'
              }`}
            />
            <span className="flex-1 truncate">{a.name}</span>
            <span
              className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                a.active ? 'bg-[rgba(167,139,250,0.20)] text-accent' : 'text-[#a1a1aa] bg-[rgba(255,255,255,0.05)]'
              }`}
            >
              {a.count}
            </span>
          </div>
        ))}
      </div>

      {/* Main panel */}
      <div className="flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[#3f3f46]">
          <span className="text-[12px] font-semibold text-white">Authentication</span>
          <span className="flex items-center gap-1.5 bg-accent text-[#09090b] text-[10px] font-bold px-2.5 py-1 rounded-md">
            ⚡ Generate
          </span>
        </div>
        <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
          {/* TC 1 */}
          <div className="bg-[rgba(167,139,250,0.07)] border border-[rgba(167,139,250,0.28)] rounded-lg p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[9px] font-bold text-accent tracking-[0.06em]">TC-001</span>
              <span className="text-[9px] text-[#7eb8f7] bg-[rgba(126,184,247,0.08)] px-1.5 py-0.5 rounded-full ml-auto">
                Functional
              </span>
            </div>
            <div className="text-[11px] font-semibold text-white mb-1 leading-[1.4]">
              Valid credentials login success
            </div>
            <div className="text-[10px] text-[#d4d4d8] leading-[1.55]">
              <span className="font-semibold text-[#a78bfa]">Given</span> a registered user<br />
              <span className="font-semibold text-[#f7e07e]">When</span> they submit valid credentials<br />
              <span className="font-semibold text-[#7eb8f7]">Then</span> redirected to dashboard
            </div>
          </div>
          {/* TC 2 */}
          <div className="bg-surface border border-[#3f3f46] rounded-lg p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[9px] font-bold text-accent tracking-[0.06em]">TC-002</span>
              <span className="text-[9px] text-[#f7a07e] bg-[rgba(247,160,126,0.08)] px-1.5 py-0.5 rounded-full ml-auto">
                Negative
              </span>
            </div>
            <div className="text-[11px] font-semibold text-white mb-1 leading-[1.4]">
              Account locked after 3 failed attempts
            </div>
            <div className="text-[10px] text-[#d4d4d8] leading-[1.55]">
              <span className="font-semibold text-[#a78bfa]">Given</span> wrong password × 3<br />
              <span className="font-semibold text-[#f7e07e]">When</span> 3rd attempt fails<br />
              <span className="font-semibold text-[#7eb8f7]">Then</span> account temporarily locked
            </div>
            <div className="flex gap-1.5 mt-2">
              <span className="text-[9px] bg-[rgba(167,139,250,0.10)] text-accent px-2 py-1 rounded-full">✓ Accept</span>
              <span className="text-[9px] bg-[rgba(255,255,255,0.05)] text-[#a1a1aa] px-2 py-1 rounded-full">Edit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ── AI Process Steps ── */
const AI_STEPS = [
  {
    num: '1',
    phase: 'Discovery',
    tool: 'Claude',
    title: 'Research and competitive analysis — before the first meeting',
    body: 'Used Claude to map the competitive landscape, extract QE mental models, and define the 5 core design questions — before the first PM session. Walked in with a clear point of view, not a blank canvas.',
    result: 'Competitor gap confirmed and design questions defined — before kickoff',
  },
  {
    num: '2',
    phase: 'Architecture',
    tool: 'Claude Code · Figma Make',
    title: 'Main flow and page hierarchy — defined before any screen work',
    body: 'Mapped the 5-step flow: Quality score → Upload attachments → Clarification → AI generation → Review (edit/accept/reject). Defined page hierarchy for each screen, then used Claude Code to build the initial prototype for team alignment.',
    result: 'Flow and hierarchy locked before Figma — zero structural rework after team review',
  },
  {
    num: '3',
    phase: 'Prototyping',
    tool: 'Claude Code · VSCode',
    title: 'Interactive prototype in hours — brought to engineering, not sent after',
    body: 'Built a fully interactive HTML prototype in hours with Claude Code + VSCode. Brought it to the engineering session — not static screens. Feedback came in real time and was incorporated the same day.',
    result: 'Engineering signed off on the interaction model in one session — no back-and-forth',
  },
  {
    num: '4',
    phase: 'Review',
    tool: 'Claude · Figma Dev Mode',
    title: 'Handoff documentation written by AI, reviewed by me',
    body: "Used Claude to generate full component specs, edge-case documentation, and accessibility notes directly from the prototype. I reviewed for accuracy and added judgment calls that AI couldn't make.",
    result: 'Zero ambiguity questions from engineering during implementation sprint',
  },
  {
    num: '5',
    phase: 'Validation',
    tool: 'Claude · Figma',
    title: 'Usability findings synthesized in 30 minutes',
    body: 'After 6 usability sessions, dumped all notes into Claude and got structured insight clusters, prioritized issues, and draft iteration hypotheses — then applied the two critical fixes before the next sprint.',
    result: '100% adoption on launch. The Feature Area structure was cited by QEs as the key differentiator.',
  },
];

/* ── UX Flow Steps ── */
const FLOW_STEPS = [
  {
    num: '1',
    title: 'Quality Score — before the QE even opens a requirement',
    desc: 'Each requirement surfaces a quality score on the list — Good, Needs Clarification, or Vague — before the QE clicks in. The goal: let QEs triage at a glance and focus effort where AI needs the most guidance.',
    aside: 'Proactive evaluation — not reactive. No competitor does this at the list level.',
    law: 'Signal before action',
  },
  {
    num: '2',
    title: 'Attachment enrichment — give AI more to work with',
    desc: 'QEs can attach Jira tickets, acceptance criteria docs, or API specs directly to a requirement. The more context AI has, the more accurate and complete the generated test cases.',
    aside: 'Reduces vague requirements from a generation blocker to a starting point.',
    law: 'Context > prompting',
  },
  {
    num: '3',
    title: 'Clarifying questions — AI asks, QE answers',
    desc: 'For vague or ambiguous requirements, AI generates 2–3 targeted clarifying questions instead of generating poor test cases. QEs answer inline. This one flow eliminates the most common failure mode.',
    aside: 'No competitor has this. It\'s the difference between garbage output and reviewable output.',
    law: 'AI asks, human decides',
  },
  {
    num: '4',
    title: 'Generation — Feature Area grouping structures the output',
    desc: 'Test cases are generated grouped by Feature Area — not as a flat list. QEs can review, edit, accept, or reject per Feature Area or per test case. The structure makes large outputs manageable.',
    aside: 'Feature Area is the key structural layer. QEs don\'t need to reorganize — it\'s done for them.',
    law: 'Structure reduces cognitive load',
  },
  {
    num: '5',
    title: 'Review and export — the QE stays in control',
    desc: 'Every generated test case is editable, acceptable, and rejectable. Nothing ships to the test suite without a human decision. Export is one click once the QE is satisfied with coverage.',
    aside: 'Trust through control. 100% adoption happened because QEs felt in charge, not replaced.',
    law: 'AI augments, human owns',
  },
];

/* ── Competitor table ── */
const COMP_ROWS = [
  {
    feature: 'Jira / ALM integration',
    bs: { icon: '✓', label: 'Available', col: 'text-[#a78bfa]' },
    qase: { icon: '✓', label: 'Available', col: 'text-[#a78bfa]' },
    tr: { icon: '✓', label: 'Available', col: 'text-[#a78bfa]' },
    highlight: false,
  },
  {
    feature: 'AI-assisted generation',
    bs: { icon: '◐', label: 'Beta / limited', col: 'text-[#f0a500]' },
    qase: { icon: '◐', label: 'Beta', col: 'text-[#f0a500]' },
    tr: { icon: '✗', label: 'Not available', col: 'text-[#ff6b6b]' },
    highlight: false,
  },
  {
    feature: '🎯 Proactive quality evaluation',
    bs: { icon: '✗', label: 'Not available', col: 'text-[#ff6b6b]' },
    qase: { icon: '✓', label: 'Available', col: 'text-[#a78bfa]' },
    tr: { icon: '✗', label: 'Not available', col: 'text-[#ff6b6b]' },
    highlight: true,
  },
  {
    feature: '🎯 Clarifying questions flow',
    bs: { icon: '✗', label: 'Not available', col: 'text-[#ff6b6b]' },
    qase: { icon: '✗', label: 'Not available', col: 'text-[#ff6b6b]' },
    tr: { icon: '✗', label: 'Not available', col: 'text-[#ff6b6b]' },
    highlight: true,
  },
  {
    feature: '🎯 Feature Area grouping',
    bs: { icon: '✗', label: 'Not available', col: 'text-[#ff6b6b]' },
    qase: { icon: '✗', label: 'Not available', col: 'text-[#ff6b6b]' },
    tr: { icon: '✗', label: 'Not available', col: 'text-[#ff6b6b]' },
    highlight: true,
  },
  {
    feature: 'Attachment enrichment',
    bs: { icon: '✓', label: 'Available', col: 'text-[#a78bfa]' },
    qase: { icon: '✗', label: 'Not available', col: 'text-[#ff6b6b]' },
    tr: { icon: '✗', label: 'Not available', col: 'text-[#ff6b6b]' },
    highlight: false,
  },
];

/* ── Outcomes ── */
const METRICS = [
  {
    value: '70%',
    label: 'Time saved per sprint',
    context: 'QEs previously spent 5–15 min per test case on parsing and writing. AI handles that — they spend time on review and coverage judgment.',
    highlight: true,
  },
  {
    value: '100%',
    label: 'Adoption on launch',
    context: 'No forced rollout. QEs chose to use it — because the Feature Area structure made large-scale generation actually manageable for the first time.',
    highlight: true,
  },
  {
    value: '3w→5d',
    label: 'Design-to-handoff',
    context: 'AI-augmented workflow compressed the entire design phase. Engineering received zero ambiguity handoff docs generated by Claude and reviewed by me.',
    highlight: false,
  },
];

/* ── Reflection lessons ── */
const LESSONS = [
  {
    num: '01',
    tag: 'AI Design',
    tagType: 'accent',
    title: 'The structural layer is the differentiator — not the generation quality',
    body: "Every competitor generates test cases. <strong>Feature Area grouping</strong> is what makes the output usable at scale. A flat list of 40 AI-generated test cases is overwhelming. Grouped by feature area, it's a review queue. That structural decision — made before any AI feature was built — is what drove 100% adoption.",
  },
  {
    num: '02',
    tag: 'Process',
    tagType: 'warn',
    title: 'AI-first prototyping changes the conversation, not just the timeline',
    body: "When I brought an <strong>interactive HTML prototype</strong> to the engineering session instead of static screens, the conversation shifted from 'what does it look like' to 'how does it behave.' Engineering caught three interaction edge cases in that session that would have become back-and-forth in Jira. The prototype wasn't just faster — it was a better alignment tool.",
  },
  {
    num: '03',
    tag: 'Future',
    tagType: 'future',
    title: "What I'd do differently: earlier QE involvement in the clarifying questions design",
    body: "The clarifying questions flow was designed based on research synthesis. <strong>If I had run one co-design session with 2 QEs on that specific flow</strong> before prototyping, I would have caught that QEs want to see the generated questions before they answer — not after. We added that in v1.1. It should have been in v1.",
  },
];

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
      <section
        className="px-12 pb-[72px] border-b border-[#3f3f46] relative overflow-hidden"
        style={{ paddingTop: '120px' }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-100px', right: '-100px',
            width: '700px', height: '600px',
            background: 'radial-gradient(ellipse, rgba(167,139,250,0.07) 0%, transparent 65%)',
          }}
        />
        <div className="hero-grid-bg" />
        <div
          className="relative z-10 grid gap-16 items-start"
          style={{ gridTemplateColumns: '1fr 1fr' }}
        >
          {/* Left */}
          <div>
            <div className="flex items-center gap-2.5 text-[12px] text-[#a1a1aa] uppercase tracking-[0.06em] mb-7">
              <span>Portfolio</span>
              <span className="text-[#3f3f46]">/</span>
              <strong className="text-accent font-medium">AI · QA Testing</strong>
            </div>
            <h1
              className="font-serif font-normal text-white mb-5"
              style={{ fontSize: 'clamp(36px, 4.5vw, 62px)', lineHeight: 1.05, letterSpacing: '-0.025em' }}
            >
              AI Test Generator —<br />
              <em className="not-italic text-accent">a new chapter</em><br />
              for QA teams
            </h1>
            <p className="text-[15px] text-[#a1a1aa] leading-[1.75] mb-10">
              Designed the end-to-end AI test case generation experience for Katalon — from requirement quality evaluation to Feature Area–grouped output with accept/edit/reject review. Solo designer. Shipped in 2026.
            </p>
            {/* Meta cells */}
            <div
              className="grid gap-px bg-[#3f3f46] border border-[#3f3f46] rounded-xl overflow-hidden mb-10"
              style={{ gridTemplateColumns: 'repeat(3,1fr)' }}
            >
              {[
                { label: 'Role', value: 'Solo Designer' },
                { label: 'Timeline', value: '8 weeks' },
                { label: 'Scope', value: 'End-to-end flow' },
              ].map((m) => (
                <div key={m.label} className="bg-surface px-5 py-4">
                  <div className="text-[10px] tracking-[0.10em] uppercase text-[#a1a1aa] mb-1">{m.label}</div>
                  <div className="text-[13px] font-medium text-white">{m.value}</div>
                </div>
              ))}
            </div>
            {/* Impact numbers */}
            <div className="flex gap-8 pt-8 border-t border-[#3f3f46]">
              {[
                { num: '70%', label: 'Time saved' },
                { num: '100%', label: 'Adoption' },
                { num: '5d', label: 'Design-to-handoff' },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="font-serif text-accent mb-1.5"
                    style={{ fontSize: '40px', lineHeight: 1 }}
                  >
                    {s.num}
                  </div>
                  <div className="text-[12px] text-[#a1a1aa] leading-[1.5]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right — floating product preview */}
          <div className="pt-4">
            <ProductPreview />
          </div>
        </div>
      </section>

      {/* ── MARKET MOMENT ── */}
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader>
            <SectionLabel>The Context</SectionLabel>
            <SkillTag>Market Research</SkillTag>
          </SectionHeader>
          <div className="grid gap-20 items-start" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div>
              <div
                className="font-serif font-normal text-white leading-[1.35] border-l-2 border-accent pl-7 mb-6"
                style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', letterSpacing: '-0.02em' }}
              >
                Testing is entering<br />
                <em className="not-italic text-accent">a new chapter.</em><br />
                AI is writing it.
              </div>
              <p className="text-[15px] text-[#a1a1aa] leading-[1.8] mb-4">
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
                <div key={c.label} className="bg-bg border border-[#3f3f46] rounded-xl px-6 py-5 transition-colors hover:border-[#3f3f46]">
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
          <SectionHeader>
            <SectionLabel>Competitor Analysis</SectionLabel>
            <SkillTag>Competitive Research</SkillTag>
          </SectionHeader>
          <h2
            className="font-serif font-normal text-white leading-[1.1] mb-12"
            style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', letterSpacing: '-0.02em' }}
          >
            What the market<br />already gets <em className="not-italic text-accent">wrong.</em>
          </h2>

          <div className="fade-up border border-[#3f3f46] rounded-2xl overflow-hidden mb-8">
            {/* Header */}
            <div className="grid bg-surface border-b border-[#3f3f46]" style={{ gridTemplateColumns: '240px 1fr 1fr 1fr' }}>
              {['Feature', 'Browserstack', 'Qase', 'Testrail'].map((h, i) => (
                <div key={h} className={`px-6 py-4 text-[12px] font-semibold tracking-[0.08em] uppercase border-r border-[#3f3f46] last:border-r-0 ${i > 0 ? 'text-[#a1a1aa]' : 'text-[#a1a1aa]'}`}>
                  {h}
                </div>
              ))}
            </div>
            {/* Rows */}
            {COMP_ROWS.map((row) => (
              <div
                key={row.feature}
                className="grid border-b border-[#3f3f46] last:border-b-0 transition-colors hover:bg-surface"
                style={{
                  gridTemplateColumns: '240px 1fr 1fr 1fr',
                  background: row.highlight ? 'rgba(167,139,250,0.05)' : undefined,
                }}
              >
                <div className={`px-6 py-[18px] text-[13px] font-medium border-r border-[#3f3f46] flex items-center ${row.highlight ? 'text-accent' : 'text-white'}`}>
                  {row.feature}
                </div>
                {[row.bs, row.qase, row.tr].map((cell, ci) => (
                  <div key={ci} className="px-6 py-[18px] text-[13px] text-[#d4d4d8] border-r border-[#3f3f46] last:border-r-0 flex items-center gap-2">
                    <span className={`text-[14px] ${cell.col}`}>{cell.icon}</span>
                    {cell.label}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Insight box */}
          <div className="fade-up bg-[rgba(167,139,250,0.10)] border border-[rgba(167,139,250,0.25)] rounded-xl px-7 py-6 flex gap-4 items-start mb-6">
            <span className="text-[20px] flex-shrink-0 mt-0.5">💡</span>
            <p className="text-[14px] text-white leading-[1.7]">
              Qase has quality evaluation — but it's reactive, triggered after the QE opens a requirement.
              Our product evaluates <strong className="text-accent">before the QE opens it</strong>, surfacing signal on the list itself.
              No competitor combines proactive evaluation with a <strong className="text-accent">clarifying questions flow</strong> and{' '}
              <strong className="text-accent">Feature Area grouping</strong> in a single workflow. All three shipped in v1.
            </p>
          </div>

          {/* Gap row */}
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
          <SectionHeader>
            <SectionLabel>AI-Augmented Design Process</SectionLabel>
            <SkillTag>AI-Augmented Design</SkillTag>
          </SectionHeader>
          <h2
            className="font-serif font-normal text-white leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', letterSpacing: '-0.02em' }}
          >
            My process —<br /><em className="not-italic text-accent">AI-native from day one.</em>
          </h2>
          <p className="text-[16px] text-[#a1a1aa] max-w-[600px] leading-[1.7] mb-12">
            Not as a shortcut — as a force multiplier. Claude Code, Figma Make, and VSCode let me stay in the room with engineering and PM at every stage, not just at handoff.
          </p>

          <div className="fade-up flex flex-col gap-0.5">
            {AI_STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`grid bg-surface transition-colors hover:bg-[#18181b] ${
                  i === 0 ? 'rounded-t-[14px]' : i === AI_STEPS.length - 1 ? 'rounded-b-[14px]' : ''
                }`}
                style={{ gridTemplateColumns: '56px 1fr' }}
              >
                <div
                  className="flex items-start justify-center pt-[30px] font-serif text-[28px] text-[#3f3f46] border-r border-[#3f3f46] transition-colors group-hover:text-accent"
                  style={{ borderRight: '1px solid #3f3f46' }}
                >
                  {step.num}
                </div>
                <div className="px-8 py-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#a1a1aa]">
                      {step.phase}
                    </span>
                    <span className="text-[10px] font-semibold text-accent bg-[rgba(167,139,250,0.10)] border border-[rgba(167,139,250,0.25)] px-2 py-0.5 rounded">
                      {step.tool}
                    </span>
                  </div>
                  <div className="text-[16px] font-semibold text-white mb-2 leading-[1.4]">
                    {step.title}
                  </div>
                  <div className="text-[13px] text-[#d4d4d8] leading-[1.65] mb-3">{step.body}</div>
                  <div className="text-[12px] text-accent font-medium">→ {step.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UX FLOW ── */}
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader>
            <SectionLabel>The UX Flow</SectionLabel>
            <SkillTag>Interaction Design</SkillTag>
          </SectionHeader>
          <h2
            className="font-serif font-normal text-white leading-[1.1] mb-12"
            style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', letterSpacing: '-0.02em' }}
          >
            5 steps. Every decision<br /><em className="not-italic text-accent">has a reason.</em>
          </h2>

          <div className="flex flex-col gap-0.5">
            {FLOW_STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`grid bg-bg transition-colors hover:bg-[#18181b] ${
                  i === 0 ? 'rounded-t-[14px]' : i === FLOW_STEPS.length - 1 ? 'rounded-b-[14px]' : ''
                }`}
                style={{ gridTemplateColumns: '64px 1fr 340px' }}
              >
                <div className="flex items-center justify-center font-serif text-[20px] text-accent border-r border-[#3f3f46]" style={{ minHeight: '80px' }}>
                  {step.num}
                </div>
                <div className="px-8 py-7 border-r border-[#3f3f46]">
                  <div className="text-[16px] font-semibold text-white mb-2">{step.title}</div>
                  <div className="text-[13px] text-[#d4d4d8] leading-[1.65] max-w-[500px]">{step.desc}</div>
                </div>
                <div className="px-7 py-7">
                  <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#a1a1aa] mb-2.5">
                    Design decision
                  </div>
                  <div className="text-[12px] text-[#d4d4d8] leading-[1.6] mb-3">{step.aside}</div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-accent bg-[rgba(167,139,250,0.10)] px-2.5 py-1 rounded-full">
                    ✦ {step.law}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionLabel>Outcomes</SectionLabel>
          <h2
            className="font-serif font-normal text-white leading-[1.1] mb-12"
            style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', letterSpacing: '-0.02em' }}
          >
            Numbers that<br /><em className="not-italic text-accent">speak for themselves.</em>
          </h2>
          <div
            className="grid gap-0.5 bg-[#3f3f46] border border-[#3f3f46] rounded-[14px] overflow-hidden"
            style={{ gridTemplateColumns: 'repeat(3,1fr)' }}
          >
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className={`bg-bg px-7 py-8 ${
                  i === 0 ? 'rounded-tl-[14px]' : i === 1 ? '' : 'rounded-tr-[14px]'
                }`}
              >
                <div
                  className={`font-serif font-normal leading-none mb-3 ${
                    m.highlight ? 'text-accent' : 'text-white'
                  }`}
                  style={{ fontSize: '48px' }}
                >
                  {m.value}
                </div>
                <div className="text-[13px] font-semibold text-white mb-2.5 leading-[1.4]">
                  {m.label}
                </div>
                <div className="text-[12px] text-[#a1a1aa] leading-[1.65]">{m.context}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFLECTION ── */}
      <section className="px-12 py-20 bg-bg">
        <div className="max-w-[1100px] mx-auto">
          <SectionLabel>Reflection</SectionLabel>
          <h2
            className="font-serif font-normal text-white leading-[1.1] mb-10"
            style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', letterSpacing: '-0.02em' }}
          >
            What I learned.<br /><em className="not-italic text-accent">What I'd do differently.</em>
          </h2>

          <div className="flex flex-col gap-0.5 border border-[#3f3f46] rounded-2xl overflow-hidden">
            {LESSONS.map((lesson, i) => (
              <div
                key={lesson.num}
                className="bg-surface border-b border-[#3f3f46] last:border-b-0"
                style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '40px', padding: '32px 36px', alignItems: 'start' }}
              >
                <div className="flex flex-col gap-3">
                  <div className="font-serif text-[36px] text-accent leading-none">
                    {lesson.num}
                  </div>
                  <span
                    className={`text-[10px] font-bold tracking-[0.10em] uppercase px-2.5 py-1 rounded border inline-block w-fit ${
                      lesson.tagType === 'accent'
                        ? 'text-accent bg-[rgba(167,139,250,0.10)] border-[rgba(167,139,250,0.25)]'
                        : lesson.tagType === 'warn'
                        ? 'text-[#f0a500] bg-[rgba(240,165,0,0.08)] border-[rgba(240,165,0,0.25)]'
                        : 'text-[#34d399] bg-[rgba(52,211,153,0.08)] border-[rgba(52,211,153,0.25)]'
                    }`}
                  >
                    {lesson.tag}
                  </span>
                  <div className="text-[16px] font-bold text-white leading-[1.4]">
                    {lesson.title}
                  </div>
                </div>
                <div
                  className="text-[14px] text-[#d4d4d8] leading-[1.8] pt-1"
                  dangerouslySetInnerHTML={{ __html: lesson.body }}
                />
              </div>
            ))}
          </div>

          {/* Next project link */}
          <div className="mt-20 pt-12 border-t border-[#3f3f46] flex justify-between items-center">
            <div>
              <div className="text-[12px] text-[#a1a1aa] uppercase tracking-[0.08em] mb-2">Next project</div>
              <div className="text-[20px] font-semibold text-white">Nobee — USA Housing Rental App</div>
            </div>
            <a
              href="/details/2"
              className="inline-flex items-center gap-2.5 text-[14px] text-[#a1a1aa] no-underline hover:text-accent transition-colors group"
            >
              View case study
              <svg
                className="transition-transform group-hover:translate-x-1"
                width="14" height="14" viewBox="0 0 14 14" fill="none"
              >
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
