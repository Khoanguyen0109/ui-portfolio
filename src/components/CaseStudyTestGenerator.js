import { useEffect, useRef, useState } from 'react';

/* ── Small primitives ── */
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

/* ── Hero Product Preview ── */
const ProductPreview = () => (
  <div
    className="border border-[#3f3f46] rounded-2xl overflow-hidden bg-bg shadow-2xl"
    style={{ animation: 'float 5s ease-in-out infinite' }}
  >
    <div className="flex items-center gap-1.5 bg-[#09090b] border-b border-[#3f3f46] px-3.5 py-2.5">
      <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
      <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
      <span className="w-2 h-2 rounded-full bg-[#28c840]" />
      <span className="flex-1 bg-[rgba(255,255,255,0.04)] rounded px-2.5 py-1 text-[10px] text-[#a1a1aa] mx-2">
        testgen.app / generate
      </span>
    </div>
    <div className="grid" style={{ gridTemplateColumns: '140px 1fr', height: '340px' }}>
      {/* Sidebar */}
      <div className="bg-[#090909] border-r border-[#3f3f46] px-2 py-3">
        <div className="text-[9px] tracking-[0.12em] uppercase text-[#a1a1aa] px-2 py-1.5 mb-1">
          Feature Areas
        </div>
        {[
          { name: 'Authentication', count: '12', active: true },
          { name: 'Checkout', count: '8', active: false },
          { name: 'Search', count: '5', active: false },
          { name: 'User Profile', count: '3', active: false },
        ].map((a) => (
          <div
            key={a.name}
            className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md mb-0.5 text-[11px] ${
              a.active ? 'bg-[rgba(167,139,250,0.10)] text-accent' : 'text-[#d4d4d8]'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${a.active ? 'bg-accent' : 'bg-[#3f3f46]'}`} />
            <span className="flex-1 truncate">{a.name}</span>
            <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${a.active ? 'bg-[rgba(167,139,250,0.20)] text-accent' : 'text-[#a1a1aa] bg-[rgba(255,255,255,0.05)]'}`}>
              {a.count}
            </span>
          </div>
        ))}
        <div className="mx-2 mt-2.5 px-2 py-1.5 rounded-md text-[10px] text-accent border border-dashed border-[rgba(167,139,250,0.22)] text-center cursor-default">
          + Add Area
        </div>
      </div>
      {/* Main panel */}
      <div className="flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[#3f3f46]">
          <div>
            <div className="text-[12px] font-semibold text-white">Authentication</div>
            <div className="text-[10px] text-[#a1a1aa] mt-0.5">12 test cases</div>
          </div>
          <span className="flex items-center gap-1.5 bg-accent text-[#09090b] text-[10px] font-bold px-2.5 py-1 rounded-md">
            <svg width="9" height="9" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1v2M6.5 10v2M1 6.5h2M10 6.5h2M2.93 2.93l1.41 1.41M8.66 8.66l1.41 1.41M2.93 10.07l1.41-1.41M8.66 4.34l1.41-1.41" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            Generate
          </span>
        </div>
        <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
          <div className="text-[9px] text-[#a1a1aa] tracking-[0.10em] uppercase mb-0.5">AI Generated · 3 cases</div>
          {/* TC 1 — accepted */}
          <div className="bg-[rgba(167,139,250,0.07)] border border-[rgba(167,139,250,0.28)] rounded-lg p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[9px] font-bold text-accent tracking-[0.06em]">TC-001</span>
              <span className="text-[9px] text-[#a1a1aa] bg-[rgba(255,255,255,0.05)] px-1.5 py-0.5 rounded-full">Functional</span>
              <span className="ml-auto text-[9px] font-semibold text-accent flex items-center gap-1">✓ Accepted</span>
            </div>
            <div className="text-[11px] font-semibold text-white mb-1 leading-[1.4]">Valid credentials login success</div>
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
              <span className="text-[9px] text-[#f7a07e] bg-[rgba(247,160,126,0.08)] px-1.5 py-0.5 rounded-full ml-auto">Negative</span>
            </div>
            <div className="text-[11px] font-semibold text-white mb-1 leading-[1.4]">Account locked after 3 failed attempts</div>
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
    codeSnippet: null,
  },
  {
    num: '2',
    phase: 'Architecture',
    tool: 'Claude Code · Figma Make',
    title: 'Main flow and page hierarchy — defined before any screen work',
    body: 'Mapped the 5-step flow: Quality score → Upload attachments → Clarification → AI generation → Review (edit/accept/reject). Defined page hierarchy for each screen, then used Claude Code to build the initial prototype for team alignment.',
    result: 'Flow and hierarchy locked before Figma — zero structural rework after team review',
    codeSnippet: null,
  },
  {
    num: '3',
    phase: 'Prototyping',
    tool: 'Claude Code · VSCode',
    title: 'Interactive prototype in hours — brought to engineering, not sent after',
    body: 'Built a fully interactive HTML prototype in hours with Claude Code + VSCode. Brought it to the engineering session — not static screens. Feedback came in real time and was incorporated the same day.',
    result: 'Interactive prototype → engineering alignment → same-day revision: all in one session',
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
    tool: 'Figma Make · Claude',
    title: 'High-fidelity design — judgment-heavy, not generation-heavy',
    body: 'Used Figma Make to accelerate components, then focused on what AI can\'t decide: phrasing of quality warnings, tone of empty states, which actions to show by default. Components shared with engineers as they were completed — not at the end.',
    result: 'Engineers were never blocked waiting for specs — components shared in parallel',
    codeSnippet: null,
  },
  {
    num: '5',
    phase: 'Handoff',
    tool: 'Claude · VSCode',
    title: 'Handoff is where the real design work begins',
    body: 'Stayed embedded after handoff — reviewing builds on QA, pushing fixes immediately, looping in PM when requirements changed. Collaborated with QE and engineers continuously, treating every QA cycle as a design validation pass.',
    result: 'Shipped experience matched design intent — feedback loops caught and resolved gaps before release',
    codeSnippet: null,
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
    desc: "Requirements sync from Jira/ALM automatically. Each shows an AI quality badge: Good, Needs Clarification, or Vague — QE sees signal before opening anything.",
    aside: "Proactive evaluation on sync shifts QE behaviour upstream — fix weak requirements before generating, not after wasted output.",
    law: 'Zeigarnik Effect — unresolved quality flags draw attention',
  },
  {
    num: '2',
    title: 'QE reviews the requirement + quality breakdown',
    desc: "Full requirement text + AI breakdown side by side — what's clear, what's ambiguous, what's missing. Score is explained, not just shown.",
    aside: 'Showing reasoning behind the score builds trust and teaches QEs what good requirements look like over time.',
    law: 'Aesthetic-Usability Effect — transparent AI feels safer',
  },
  {
    num: '3',
    title: 'QE selects Feature Area + uploads attachments',
    desc: 'QE picks a Feature Area, then optionally uploads attachments (Figma, DOCX, API docs) to enrich AI context. More context = more specific test cases.',
    aside: 'Optional but impactful — UI shows a "coverage boost" signal when files are added, incentivising enrichment without blocking progress.',
    law: 'Goal-Gradient Effect — show QE getting closer to high-quality output',
  },
  {
    num: '4',
    title: 'If vague: AI asks clarifying questions',
    desc: 'For vague requirements, AI generates targeted clarifying questions. QE answers some, all, or none — each answer improves output. Skipping always allowed.',
    aside: 'Never blocking. Each answered question shows a live quality score update — value is tangible, QE stays in control.',
    law: "Tesler's Law — AI absorbs the clarification work, not the QE",
  },
  {
    num: '5',
    title: 'AI generates test cases',
    desc: 'Test cases appear in Given/When/Then format, scoped to the Feature Area. More context + answered questions = more complete coverage.',
    aside: "Familiar Given/When/Then format — no new mental model, immediate trust in AI output.",
    law: "Jakob's Law — familiar format = immediate trust",
  },
  {
    num: '6',
    title: 'QE reviews, edits, accepts — grouped by Feature Area',
    desc: 'Cases auto-grouped by Feature Area — QE edits inline, accepts or rejects in context. No sorting, no flat list hunting. Accepted cases land directly in the test suite.',
    aside: 'The final action is frictionless. The export confirmation is the last thing QE sees — make it feel like success, not a chore.',
    law: 'Peak-End Rule — end with effortless success',
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
    label: 'Reduction in time spent creating test cases',
    context: 'From ~40 min per requirement to under 12 min — measured across the QE team in the first sprint after launch.',
    highlight: true,
  },
  {
    value: '100%',
    label: 'Team adoption rate',
    context: 'Every QE on the team requested and actively uses the feature. Not mandated — chosen. The strongest signal a UX decision can get.',
    highlight: true,
  },
  {
    value: '0 → 1',
    label: 'AI in QA workflow',
    context: 'First AI-assisted feature shipped to the QA tool. Established the design pattern for all subsequent AI features in the product.',
    highlight: false,
  },
  {
    value: '3',
    label: 'Competitors studied, 1 gap found',
    context: 'Proactive quality evaluation + clarifying questions + Feature Area grouping. None of the 3 competitors ships all three. All three shipped in v1.',
    highlight: false,
  },
  {
    value: 'Same day',
    label: 'Prototype → engineering alignment → revision',
    context: 'Using Claude Code, feedback from the alignment session was incorporated in real time — not in the next sprint. Engineers saw their input reflected before the meeting ended.',
    highlight: false,
  },
  {
    value: 'Zero',
    label: 'Design drift at launch',
    context: 'Proactive engineering follow-up during implementation caught 3 interaction gaps before QA. The shipped product matched the design intent — not a common outcome.',
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
                { num: '0→1', label: 'AI in QA\nworkflow' },
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

          <div className="fade-up flex flex-col gap-0.5">
            {AI_STEPS.map((step, i) => (
              <div key={step.num} className={`grid bg-surface transition-colors hover:bg-[#18181b] ${i === 0 ? 'rounded-t-[14px]' : i === AI_STEPS.length - 1 ? 'rounded-b-[14px]' : ''}`} style={{ gridTemplateColumns: '56px 1fr' }}>
                <div className="flex items-start justify-center pt-[30px] font-serif text-[28px] text-[#3f3f46] border-r border-[#3f3f46] transition-colors hover:text-accent">
                  {step.num}
                </div>
                <div className="px-8 py-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#a1a1aa]">{step.phase}</span>
                    <span className="text-[10px] font-semibold text-accent bg-[rgba(167,139,250,0.10)] border border-[rgba(167,139,250,0.25)] px-2 py-0.5 rounded">{step.tool}</span>
                  </div>
                  <div className="text-[16px] font-semibold text-white mb-2 leading-[1.4]">{step.title}</div>
                  <div className="text-[13px] text-[#d4d4d8] leading-[1.65] mb-3">{step.body}</div>
                  {step.codeSnippet && (
                    <div className="mt-3 bg-bg border border-[#3f3f46] rounded-lg px-3.5 py-3 font-mono text-[11px] leading-[1.6] mb-3">
                      {step.codeSnippet.map((line, li) => (
                        <div key={li} className={line.type === 'comment' ? 'text-[#444]' : 'text-accent'}>{line.text}</div>
                      ))}
                    </div>
                  )}
                  <div className="text-[12px] text-accent font-medium">→ {step.result}</div>
                </div>
              </div>
            ))}
          </div>

          {/* AI-Era Workflow Diagram */}
          <div className="fade-up mt-0.5 bg-surface rounded-b-[14px] border-t-0 overflow-hidden border border-[#3f3f46]">
            <div className="px-8 py-7 border-b border-[#3f3f46]">
              <div className="inline-block text-[11px] font-bold tracking-[0.10em] uppercase text-[#a1a1aa] bg-[rgba(255,255,255,0.04)] border border-[#3f3f46] px-3 py-1 rounded mb-3">
                How I work as a designer in the AI era
              </div>
              <div className="font-serif text-white leading-[1.3] mb-2" style={{ fontSize: 'clamp(18px, 2vw, 26px)', letterSpacing: '-0.015em' }}>
                I leverage AI across every phase —<br /><em className="not-italic text-accent">to ship sharper, faster, with no gaps</em>
              </div>
              <div className="text-[13px] text-[#a1a1aa]">Compressing time between decisions and delivery — every judgment call stays mine.</div>
            </div>
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
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>The User Flow</SectionLabel><SkillTag>Interaction Design</SkillTag></SectionHeader>
          <h2 className="font-serif font-normal text-white leading-[1.1] mb-12" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', letterSpacing: '-0.02em' }}>
            From requirement<br />to test case, <em className="not-italic text-accent">in minutes.</em>
          </h2>

          <div className="fade-up flex flex-col gap-0.5">
            {FLOW_STEPS.map((step, i) => (
              <div key={step.num} className={`grid bg-bg transition-colors hover:bg-[#18181b] ${i === 0 ? 'rounded-t-[14px]' : i === FLOW_STEPS.length - 1 ? 'rounded-b-[14px]' : ''}`} style={{ gridTemplateColumns: '64px 1fr 340px' }}>
                <div className="flex items-center justify-center font-serif text-[20px] text-accent border-r border-[#3f3f46]" style={{ minHeight: '80px' }}>
                  {step.num}
                </div>
                <div className="px-8 py-7 border-r border-[#3f3f46]">
                  <div className="text-[16px] font-semibold text-white mb-2">{step.title}</div>
                  <div className="text-[13px] text-[#d4d4d8] leading-[1.65] max-w-[500px]">{step.desc}</div>
                </div>
                <div className="px-7 py-7">
                  <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#a1a1aa] mb-2.5">Design decision</div>
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

      {/* ── THE SHIPPED SCREENS ── */}
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
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
          <div className="fade-up grid gap-0.5 bg-[#3f3f46] border border-[#3f3f46] rounded-[14px] overflow-hidden" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
            {METRICS.map((m, i) => (
              <div key={m.label} className={`bg-bg px-7 py-8 ${i === 0 ? 'rounded-tl-[14px]' : i === 2 ? 'rounded-tr-[14px]' : i === 3 ? 'rounded-bl-[14px]' : i === 5 ? 'rounded-br-[14px]' : ''}`}>
                <div className={`font-serif font-normal leading-none mb-3 ${m.highlight ? 'text-accent' : 'text-white'}`} style={{ fontSize: '48px' }}>
                  {m.value}
                </div>
                <div className="text-[13px] font-semibold text-white mb-2.5 leading-[1.4]">{m.label}</div>
                <div className="text-[12px] text-[#a1a1aa] leading-[1.65]">{m.context}</div>
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
