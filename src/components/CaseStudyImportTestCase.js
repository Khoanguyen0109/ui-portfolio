import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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

/* ── Data ── */
const AI_STEPS = [
  {
    num: '1',
    phase: 'Discovery',
    tool: 'Claude',
    title: 'Competitor import flows dissected, in hours, not days',
    body: 'Used Claude to systematically analyse TestRail and Qase import UX, extract pain points from user reviews, and map the 3 critical gaps before the first PM meeting. Walked in with a differentiation strategy, not questions.',
    result: 'Competitive gaps defined before kickoff',
  },
  {
    num: '2',
    phase: 'Architecture',
    tool: 'Claude · Figma',
    title: '4-step wizard + all edge cases mapped before any screen work',
    body: 'Claude helped map every decision point: empty states, admin-locked fields, conflict types, error recovery paths. The full flow was validated with PM before opening Figma. Zero structural rework after review.',
    result: 'Flow locked, edge cases covered before design',
  },
  {
    num: '3',
    phase: 'Prototyping',
    tool: 'Claude Code · VSCode',
    title: 'Interactive prototype built same day, live in engineering review',
    body: 'Built a functional HTML prototype of the mapping table, conflict states, and progress modal with Claude Code + VSCode. Engineers reviewed live interactions, not static screens. Feedback incorporated same session.',
    result: 'Alignment in 1 session, not 3 rounds',
  },
  {
    num: '4',
    phase: 'Refinement',
    tool: 'Figma',
    title: 'High-fidelity focused on judgment: status states, error tone, empty states',
    body: 'Figma work was focused on decisions AI can\'t make: the exact wording of conflict warnings, how to rank error severity visually, what "Requires Admin to configure" should look and feel like to a non-admin user.',
    result: 'Specs shared with engineering in parallel',
  },
  {
    num: '5',
    phase: 'Handoff',
    tool: 'Figma',
    title: 'Embedded post-handoff, QA cycles treated as design validation',
    body: 'Stayed in QA builds reviewing import edge cases, fixing UI gaps immediately, looping PM when requirement edge cases surfaced. Every QA cycle was a final design pass. Shipped experience matched intent.',
    result: 'Zero design drift at launch',
  },
];

const FLOW_STEPS = [
  {
    num: '1',
    title: 'Upload file + choose destination',
    desc: 'User uploads a CSV or Excel file (one at a time). Selects the folder location before proceeding. AI generation is offered as an alternative via a dismissible banner.',
    skill: 'Onboarding Design · Cross-sell',
    decision: 'Offer AI generation as an escape hatch, reduce churn before it starts',
    why: "Some users arrive with incomplete or badly formatted CSVs. Rather than let them fail, the AI generation banner offers a smarter alternative at the moment of friction, turning a potential drop-off into a feature discovery.",
    valueLabel: 'User value',
    valueText: "Users who aren't CSV-ready find a better path, reducing abandonment at step 1",
    law: 'Progressive Disclosure',
  },
  {
    num: '2',
    title: 'Map CSV fields to platform fields',
    desc: 'System auto-maps recognised fields. QA Lead reviews and adjusts. Each row shows status: Mapped, Skipped, Conflict, Unmapped, or Requires Admin. Inline "Update" resolves issues without leaving the step.',
    skill: 'Data UX · Error Prevention',
    decision: 'Surface every conflict inline, fix now, not after a failed import',
    why: 'Competitors hide mapping errors until post-import, when data is already lost. Showing conflicts inline, with a direct "Update" action, means every issue is resolvable before any data moves. The 3-stat summary (Mapped / Skipped / Issues) gives an instant health check at the top.',
    valueLabel: 'User value',
    valueText: 'No surprises after import. Every data issue is visible and fixable before it\'s too late',
    law: 'Error Prevention (Nielsen)',
  },
  {
    num: '3',
    title: 'Review summary + preview test cases',
    desc: '4 summary stats: total rows, columns mapped, skipped, custom fields to create. Warning banner flags skipped columns. User can paginate through first 5 test cases to verify how data will look in the platform.',
    skill: 'Confidence Design · Decision Gates',
    decision: 'Give users a final preview before an irreversible action',
    why: "Import is destructive. There's no undo on 10,000 test cases. Showing a full data preview before the final button gives users the confidence to commit. The warning banner for skipped columns is a last-chance checkpoint, not a blocker.",
    valueLabel: 'User value',
    valueText: 'User commits to import with full visibility. Trust replaces anxiety',
    law: 'Visibility of System Status',
  },
  {
    num: '4',
    title: 'Real-time import progress',
    desc: 'A modal shows live progress: "X of Y created, N failed." Progress bar fills as rows are processed. User knows exactly what\'s happening. No black-box wait screen.',
    skill: 'Feedback Design · Anxiety Reduction',
    decision: 'Replace a spinner with a live counter, make progress tangible',
    why: 'For large imports (thousands of rows), an indeterminate spinner is terrifying. Users don\'t know if it\'s working or stuck. Showing a live row count ("40 of 48 created") turns waiting into watching progress. Failed rows surface immediately, not in a post-mortem.',
    valueLabel: 'User value',
    valueText: 'No anxiety during long imports. User knows exactly what\'s happening at every second',
    law: 'Visibility of System Status',
  },
  {
    num: '5',
    title: 'Import complete — success summary and next actions',
    desc: 'Modal shows: rows imported successfully, rows skipped with reason, downloadable error report. Three clear paths: back to test list / import another file / view imported test cases.',
    skill: 'End-State Design · Recovery Flow',
    decision: 'Acknowledge errors without shame, give a clear path to fix them',
    why: 'A failed row isn\'t a failure if the user knows exactly which rows and why. The error report download closes the loop. Users can fix issues and re-import. The three-action footer ensures every outcome (full success, partial, retry) has a clear next step.',
    valueLabel: 'User value',
    valueText: 'Every outcome — success or partial — ends with clarity and a clear next step',
    law: 'Peak-End Rule',
  },
];

const WIZARD_STEPS = [
  {
    num: '01',
    label: 'Upload\nFile',
    title: 'Upload file + choose destination',
    text: 'User drags a CSV or Excel file into the upload zone, or browses to select. They pick their folder destination first, so imported test cases land exactly where they want. An AI generation banner offers a smarter alternative if their file isn\'t ready, reducing step-1 abandonment.',
    images: ['/images/import-test-case/Upload file.jpg'],
  },
  {
    num: '02',
    label: 'Fields\nMapping',
    title: 'Map CSV fields → platform fields',
    text: 'System auto-maps recognised columns. The QA Lead reviews each field, adjusting mappings, resolving conflicts inline, or creating new custom fields on the spot. A 3-stat summary (Mapped / Skipped / Issues) gives instant health visibility. Every issue has a direct "Update" action — no dead ends.',
    images: [
      '/images/import-test-case/Fields Mapping 1.jpg',
      '/images/import-test-case/Fields Mapping 2.jpg',
      '/images/import-test-case/Fields Mapping 3.jpg',
    ],
  },
  {
    num: '03',
    label: 'Review &\nImport',
    title: 'Review summary + preview test cases',
    text: 'Before committing, the user sees a full summary: total rows, columns mapped vs skipped, custom fields to create. A warning banner flags any columns that will be skipped. A paginated preview shows exactly how each test case will appear in the platform — confidence before an irreversible action.',
    images: ['/images/import-test-case/Review & Import.jpg'],
  },
  {
    num: '04',
    label: 'Importing\n...',
    title: 'Live progress, row by row',
    text: 'A modal shows real-time import progress: rows created vs rows failed, and a live progress bar. For large imports with thousands of test cases, users see exactly what\'s happening at every moment. No spinner, no guessing. Failed rows surface immediately, not after waiting.',
    images: ['/images/import-test-case/Importing....jpg'],
  },
  {
    num: '05',
    label: 'Import\nComplete',
    title: 'Clear outcome, with a path for every result',
    text: 'The completion modal shows exactly what happened: rows imported, rows skipped, and why. An error report is downloadable so teams can fix issues and re-import cleanly. Three clear next actions — back to list, import another file, or view imported cases — ensure every outcome ends with momentum, not confusion.',
    images: ['/images/import-test-case/Import Complete.jpg'],
  },
];

const METRICS = [
  { value: '3w', label: 'Brainstorm to shipped', context: 'Full design, prototype, and handoff in 3 weeks, compressed by AI-augmented workflow across every phase.' },
  { value: '0', label: 'Data loss rate', context: 'Inline conflict resolution and full-row preview ensured no test cases were silently dropped or corrupted.' },
  { value: '3', label: 'Competitor gaps closed', context: 'Auto-mapping, inline conflict resolution, and real-time progress. Features no competitor had combined in one flow.' },
  { value: '1st', label: 'Migration feature in platform', context: 'Unlocked a new acquisition channel. Teams could now switch from TestRail or Qase without losing years of test history.' },
  { value: 'Same day', label: 'Prototype → alignment', context: 'Interactive prototype built with Claude Code brought to engineering same day, feedback incorporated in one session.' },
  { value: 'Zero', label: 'Design drift at launch', context: 'Stayed embedded in QA, every build reviewed, every gap fixed before release. Shipped experience matched design intent.' },
];

const COMP_ROWS = [
  { feature: 'CSV / Excel import', testrail: { ok: true, text: 'Available' }, qase: { ok: true, text: 'Available' }, katalon: { ok: true, text: 'Available' } },
  { feature: 'Auto field mapping', testrail: { ok: false, text: 'Manual only' }, qase: { ok: 'partial', text: 'Partial' }, katalon: { ok: true, text: 'Auto + editable' } },
  { feature: 'Conflict value resolution', testrail: { ok: false, text: 'Not available' }, qase: { ok: false, text: 'Not available' }, katalon: { ok: true, text: 'Inline, per field' } },
  { feature: 'Create custom fields on import', testrail: { ok: false, text: 'Pre-configure required' }, qase: { ok: false, text: 'Pre-configure required' }, katalon: { ok: true, text: 'During import flow' } },
  { feature: 'Preview before import', testrail: { ok: false, text: 'Not available' }, qase: { ok: 'partial', text: 'Count only' }, katalon: { ok: true, text: 'Full row preview' } },
  { feature: 'Real-time import progress', testrail: { ok: false, text: 'Page redirect' }, qase: { ok: 'partial', text: 'Basic spinner' }, katalon: { ok: true, text: 'Live count + errors' } },
  { feature: 'Error report download', testrail: { ok: false, text: 'Not available' }, qase: { ok: false, text: 'Not available' }, katalon: { ok: true, text: 'Post-import download' } },
];

/* ── Wizard Component ── */
const Wizard = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-surface rounded-2xl overflow-hidden border border-[#3f3f46]">
      {/* Guide hint */}
      <div className="flex items-center gap-1.5 px-9 pt-2.5 pb-0 text-[11px] text-[#a1a1aa] font-medium">
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
              className={`flex flex-col items-center gap-2 cursor-pointer flex-shrink-0 px-1.5 py-1 rounded-xl transition-all hover:-translate-y-0.5 border-none bg-transparent ${
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
              <div
                className="flex-1 h-px mx-1"
                style={{ background: i < active ? 'rgba(167,139,250,0.3)' : '#3f3f46' }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Panel */}
      <div className="px-9 py-8">
        <div key={active} style={{ animation: 'stepIn 0.3s ease both' }}>
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

/* ── Competitor Cell ── */
const CompCell = ({ cell }) => {
  if (cell.ok === true)
    return <span className="flex items-center gap-1.5 text-[13px] text-[#a1a1aa]"><span className="text-[#34d399]">✓</span>{cell.text}</span>;
  if (cell.ok === false)
    return <span className="flex items-center gap-1.5 text-[13px] text-[#a1a1aa]"><span className="text-[#f87171]">✗</span>{cell.text}</span>;
  return <span className="flex items-center gap-1.5 text-[13px] text-[#a1a1aa]"><span className="text-[#f0a500]">◐</span>{cell.text}</span>;
};

/* ═══════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════ */
export const CaseStudyImportTestCase = () => {
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
        <div className="absolute pointer-events-none" style={{ top: '-200px', right: '-200px', width: '800px', height: '700px', background: 'radial-gradient(ellipse, rgba(167,139,250,0.08) 0%, transparent 65%)' }} />
        <div className="hero-grid-bg" />
        <div className="relative z-10 grid gap-16 items-start" style={{ gridTemplateColumns: '1fr 1fr' }}>

          {/* Left */}
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2.5 text-[12px] text-[#a1a1aa] uppercase tracking-[0.06em] mb-5">
              <span>Katalon True Platform</span>
              <span className="text-[#3f3f46]">/</span>
              <strong className="text-accent font-medium">QA Testing · 2026</strong>
              <span className="text-[10px] font-bold tracking-[0.10em] uppercase text-accent bg-[rgba(167,139,250,0.10)] border border-[rgba(167,139,250,0.25)] px-2.5 py-[3px] rounded-full ml-1">
                Senior Designer
              </span>
            </div>

            <h1 className="font-serif font-normal text-white mb-5" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
              Import Test Cases,<br />
              <em className="not-italic text-accent">migrate millions,<br />lose nothing.</em>
            </h1>

            <p className="text-[15px] text-[#a1a1aa] leading-[1.75] mb-10 max-w-[580px]">
              A 4-step guided import flow that lets QE teams migrate thousands of test cases
              from TestRail, Qase, Excel, or CSV into Katalon True Platform, with full field mapping,
              conflict resolution, and zero data loss. Shipped in{' '}
              <strong className="text-[#d4d4d8]">3 weeks</strong>.
            </p>

            {/* Meta cells */}
            <div className="grid gap-px bg-[#3f3f46] border border-[#3f3f46] rounded-xl overflow-hidden" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
              {[
                { label: 'My Role', value: 'Senior Designer' },
                { label: 'Timeline', value: '3 weeks · Shipped', accent: true },
                { label: 'AI Tools', value: 'Claude · Figma · VSCode' },
              ].map((m) => (
                <div key={m.label} className="bg-surface px-5 py-4">
                  <div className="text-[10px] tracking-[0.10em] uppercase text-[#a1a1aa] mb-1">{m.label}</div>
                  <div className={`text-[13px] font-medium ${m.accent ? 'text-accent' : 'text-white'}`}>{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product preview */}
          <div
            className="border border-[#3f3f46] rounded-2xl overflow-hidden bg-bg shadow-2xl self-start"
            style={{ animation: 'float 5s ease-in-out infinite' }}
          >
            <img
              src="/images/import-test-case-hero.png"
              alt="Import Test Cases product preview"
              style={{ width: '100%', display: 'block' }}
            />
          </div>

        </div>
      </section>

      {/* ── THE CONTEXT ── */}
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>The Context</SectionLabel><SkillTag>Market Research</SkillTag></SectionHeader>
          <div className="grid gap-20 items-start" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div>
              <div
                className="font-serif font-normal text-white leading-[1.2] border-l-[3px] border-accent pl-6 mb-7"
                style={{ fontSize: 'clamp(26px, 3vw, 40px)', letterSpacing: '-0.02em' }}
              >
                You can't acquire a customer<br />
                <em className="not-italic text-accent">if they can't bring their data.</em>
              </div>
              <p className="text-[14px] text-[#a1a1aa] leading-[1.8]">
                Katalon True Platform was gaining traction, but conversion from competitors stalled.
                The blocker wasn't pricing or features. It was <strong className="text-[#d4d4d8] font-medium">data lock-in</strong>.<br /><br />
                QE teams had years of test cases in TestRail, Qase, or Excel. Switching to a new platform
                meant re-creating everything from scratch — a cost no team could justify. We had to remove that wall.<br /><br />
                The goal wasn't just an import tool. It was a{' '}
                <strong className="text-[#d4d4d8] font-medium">customer acquisition mechanism.</strong>{' '}
                A frictionless migration experience that made switching feel safe, fast, and worth it.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                {
                  label: 'The blocker',
                  color: 'text-[#f87171]',
                  text: 'QE teams had up to millions of test cases in competitor tools. No migration path = no switch, no matter how good the product.',
                },
                {
                  label: 'The constraint',
                  color: 'text-[#f0a500]',
                  text: '3 weeks from brainstorming to shipped. No room for ambiguity. Every design decision had to be right the first time.',
                },
                {
                  label: 'The opportunity',
                  color: 'text-accent',
                  text: 'Competitors had brittle, confusing import flows. A smoother, smarter migration experience was a direct competitive differentiator.',
                },
              ].map((card) => (
                <div key={card.label} className="bg-bg border border-[#3f3f46] rounded-xl px-[22px] py-5">
                  <div className={`text-[10px] font-bold tracking-[0.10em] uppercase mb-2 ${card.color}`}>{card.label}</div>
                  <div className="text-[13px] text-[#d4d4d8] leading-[1.6]">{card.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── USER PERSONA ── */}
      <section className="px-12 py-20 bg-bg border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>User Persona</SectionLabel><SkillTag>User Research</SkillTag></SectionHeader>
          <h2 className="font-serif font-normal text-white mb-8" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
            Who does the migration,<br /><em className="not-italic text-accent">and what they fear most.</em>
          </h2>

          <div className="fade-up bg-surface border border-[#3f3f46] rounded-2xl overflow-hidden" style={{ display: 'grid', gridTemplateColumns: 'auto 1px 1fr' }}>
            {/* Identity */}
            <div className="px-7 py-6 flex items-start gap-3.5 min-w-[300px] max-w-[320px]">
              <div className="w-10 h-10 rounded-full flex-shrink-0 bg-gradient-to-br from-[#27272a] to-[#3f3f46] flex items-center justify-center text-[18px]">
                👩‍💼
              </div>
              <div>
                <div className="text-[14px] font-semibold text-white mb-0.5">Linh, QA Lead</div>
                <div className="text-[11px] text-accent mb-2">QA Lead / Admin · Mid-large enterprise team · 6+ years</div>
                <div className="text-[11px] text-[#a1a1aa] leading-[1.6]">
                  Owns the test infrastructure. Responsible for platform decisions, team onboarding, and data integrity
                  across hundreds of test suites. Any migration failure lands on her.
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="bg-[#3f3f46]" />

            {/* Pain points */}
            <div className="px-7 py-6">
              <div className="flex items-center gap-5 mb-3.5">
                <div className="text-[10px] font-bold tracking-[0.10em] uppercase text-[#f87171]">
                  Migration fears, before this feature
                </div>
                <div className="flex gap-3 flex-wrap">
                  {[
                    '100s–1M+ test cases to migrate',
                    'Manual re-creation = weeks of work',
                    'Silent failures = data lost unnoticed',
                  ].map((chip) => (
                    <span key={chip} className="text-[11px] text-[#d4d4d8] bg-bg border border-[#3f3f46] rounded-md px-2.5 py-1">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="flex flex-col gap-2">
                {[
                  'Data loss is unacceptable. Years of test history would be gone with no recovery path',
                  'Field mismatches between systems mean values get dropped or mapped incorrectly',
                  'Import failures with no clear error messages leave teams guessing what went wrong',
                  'Having to re-create custom fields manually defeats the purpose of migrating',
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start text-[12px] text-[#d4d4d8] leading-[1.5]">
                    <span className="text-[#f87171] text-[11px] mt-[1px] flex-shrink-0">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPETITOR ANALYSIS ── */}
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>Competitor Analysis</SectionLabel><SkillTag>Competitive Research</SkillTag></SectionHeader>
          <h2 className="font-serif font-normal text-white mb-10" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
            What competitors get wrong<br /><em className="not-italic text-accent">on import.</em>
          </h2>

          <div className="fade-up bg-bg border border-[#3f3f46] rounded-2xl overflow-hidden mb-8">
            {/* Header row */}
            <div className="grid bg-[#27272a] border-b border-[#3f3f46]" style={{ gridTemplateColumns: '1.4fr 1fr 1fr 1fr' }}>
              {['Capability', 'TestRail', 'Qase', 'Katalon (our design)'].map((h, i) => (
                <div key={h} className={`px-[18px] py-3 text-[11px] font-bold tracking-[0.08em] uppercase ${i === 3 ? 'text-accent' : 'text-[#a1a1aa]'}`}>
                  {h}
                </div>
              ))}
            </div>
            {/* Data rows */}
            {COMP_ROWS.map((row) => (
              <div key={row.feature} className="grid border-b border-[#3f3f46] last:border-b-0 transition-colors hover:bg-surface" style={{ gridTemplateColumns: '1.4fr 1fr 1fr 1fr' }}>
                <div className="px-[18px] py-3.5 text-[13px] font-medium text-white flex items-center">{row.feature}</div>
                <div className="px-[18px] py-3.5 flex items-center"><CompCell cell={row.testrail} /></div>
                <div className="px-[18px] py-3.5 flex items-center"><CompCell cell={row.qase} /></div>
                <div className="px-[18px] py-3.5 flex items-center">
                  <span className="flex items-center gap-1.5 text-[13px] font-semibold text-accent">
                    <span className="text-[#34d399]">✓</span>{row.katalon.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {[
              {
                brand: 'TestRail',
                text: 'Import requires manual field matching with no auto-mapping. No conflict resolution. Mismatched values are silently dropped. No row-level preview before committing.',
                highlight: 'No conflict resolution.',
              },
              {
                brand: 'Qase',
                text: 'Partial auto-mapping exists but custom fields must be pre-created by admins before importing. No inline resolution. Teams hit walls mid-flow with no path forward.',
                highlight: 'custom fields must be pre-created',
              },
            ].map((card) => (
              <div key={card.brand} className="bg-bg border border-[#3f3f46] rounded-xl px-[22px] py-5">
                <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#a1a1aa] mb-2">{card.brand}</div>
                <div className="text-[13px] text-[#d4d4d8] leading-[1.6]">{card.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI-AUGMENTED DESIGN PROCESS ── */}
      <section className="px-12 py-20 bg-bg border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>AI-Augmented Design Process</SectionLabel><SkillTag>AI-Augmented Design</SkillTag></SectionHeader>
          <h2 className="font-serif font-normal text-white mb-3" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
            3 weeks, start to ship,<br /><em className="not-italic text-accent">AI at every stage.</em>
          </h2>
          <p className="text-[14px] text-[#a1a1aa] max-w-[600px] leading-[1.65] mb-10">
            Speed was the constraint. AI wasn't a shortcut. It was how I compressed weeks of work into days without sacrificing depth or quality.
          </p>

          <div className="fade-up flex flex-col gap-px bg-[#3f3f46] border border-[#3f3f46] rounded-2xl overflow-hidden">
            {AI_STEPS.map((step, i) => (
              <div
                key={i}
                className="group grid bg-surface transition-colors hover:bg-[#27272a]"
                style={{ gridTemplateColumns: '48px 200px 1fr 260px' }}
              >
                <div className="flex items-center justify-center font-serif text-[18px] text-[#3f3f46] group-hover:text-accent border-r border-[#3f3f46] transition-colors py-4">
                  {step.num}
                </div>
                <div className="px-[18px] py-4 border-r border-[#3f3f46] flex flex-col justify-center gap-2">
                  <span className="text-[10px] font-bold tracking-[0.10em] uppercase text-[#a1a1aa]">{step.phase}</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 bg-[rgba(167,139,250,0.10)] text-accent border border-[rgba(167,139,250,0.22)] rounded w-fit">{step.tool}</span>
                </div>
                <div className="px-5 py-4">
                  <div className="text-[13px] font-semibold text-white mb-1 leading-[1.4]">{step.title}</div>
                  <div className="text-[12px] text-[#a1a1aa] leading-[1.65]">{step.body}</div>
                </div>
                <div className="px-5 py-4 text-[11px] font-semibold text-accent border-l border-[#3f3f46] flex items-center gap-1.5">
                  <span>→</span>{step.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE USER FLOW ── */}
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>The User Flow</SectionLabel><SkillTag>Interaction Design</SkillTag></SectionHeader>
          <h2 className="font-serif font-normal text-white mb-10" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
            Every step designed to<br /><em className="not-italic text-accent">build confidence, not anxiety.</em>
          </h2>

          {/* Column headers */}
          <div className="grid border border-[#3f3f46] rounded-xl rounded-b-none overflow-hidden bg-[#27272a]" style={{ gridTemplateColumns: '44px 1fr 1fr 220px' }}>
            <div className="border-r border-[#3f3f46]" />
            {['What happens', 'My design decision', 'User value + principle'].map((h) => (
              <div key={h} className="px-[22px] py-2.5 text-[10px] font-bold tracking-[0.10em] uppercase text-[#a1a1aa] border-r border-[#3f3f46] last:border-r-0">
                {h}
              </div>
            ))}
          </div>

          <div className="fade-up flex flex-col gap-px bg-[#3f3f46] border border-[#3f3f46] border-t-0 rounded-b-2xl overflow-hidden">
            {FLOW_STEPS.map((step, i) => (
              <div
                key={i}
                className="group grid bg-surface transition-colors hover:bg-[#27272a]"
                style={{ gridTemplateColumns: '44px 1fr 1fr 220px' }}
              >
                {/* Number */}
                <div className="flex items-center justify-center font-serif text-[16px] text-[#3f3f46] group-hover:text-accent border-r border-[#3f3f46] transition-colors py-4">
                  {step.num}
                </div>
                {/* What happens */}
                <div className="px-[22px] py-[18px] border-r border-[#3f3f46]">
                  <div className="text-[13px] font-semibold text-white mb-1.5">{step.title}</div>
                  <div className="text-[12px] text-[#a1a1aa] leading-[1.6]">{step.desc}</div>
                </div>
                {/* Design decision */}
                <div className="px-[22px] py-[18px] border-r border-[#3f3f46] flex flex-col gap-1.5">
                  <div className="text-[10px] font-bold tracking-[0.10em] uppercase text-accent">{step.skill}</div>
                  <div className="text-[12px] font-semibold text-white">{step.decision}</div>
                  <div className="text-[12px] text-[#a1a1aa] leading-[1.6]">{step.why}</div>
                </div>
                {/* Value */}
                <div className="px-[18px] py-[18px] flex flex-col gap-2 justify-center">
                  <div className="text-[10px] font-bold tracking-[0.10em] uppercase text-[#a1a1aa]">{step.valueLabel}</div>
                  <div className="text-[12px] text-[#d4d4d8] leading-[1.55]">{step.valueText}</div>
                  <span className="inline-flex items-center text-[10px] text-accent bg-[rgba(167,139,250,0.10)] px-2 py-0.5 rounded-full w-fit">
                    {step.law}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL FLOW & INTERACTION ── */}
      <section className="px-12 py-20 bg-bg border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>Final Flow &amp; Interaction</SectionLabel><SkillTag>Prototyping</SkillTag></SectionHeader>
          <h2 className="font-serif font-normal text-white mb-10" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
            The shipped screens,<br /><em className="not-italic text-accent">step by step.</em>
          </h2>
          <div className="fade-up">
            <Wizard />
          </div>
        </div>
      </section>

      {/* ── SUCCESS METRICS ── */}
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>Success Metrics</SectionLabel><SkillTag>Impact</SkillTag></SectionHeader>
          <h2 className="font-serif font-normal text-white mb-8" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
            What shipped<br />and <em className="not-italic text-accent">what changed.</em>
          </h2>

          <div className="fade-up grid gap-px bg-[#3f3f46] border border-[#3f3f46] rounded-2xl overflow-hidden" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {METRICS.map((m) => (
              <div key={m.label} className="bg-bg px-[22px] py-5 flex gap-3.5 items-center">
                <div className="font-serif text-white flex-shrink-0 leading-[1.1]" style={{ fontSize: '28px', minWidth: '88px' }}>
                  {m.value}
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-[#d4d4d8] mb-1">{m.label}</div>
                  <div className="text-[11px] text-[#a1a1aa] leading-[1.6]">{m.context}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEXT PROJECT FOOTER ── */}
      <section className="px-12 py-16 bg-bg">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[13px] text-[#a1a1aa] no-underline hover:text-white transition-colors group"
          >
            <svg className="transition-transform group-hover:-translate-x-1" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M12 7H2M7 2L2 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to work
          </Link>
          <div className="text-[12px] text-[#a1a1aa]">Hien Nguyen · Senior Product Designer</div>
        </div>
      </section>

    </div>
  );
};
