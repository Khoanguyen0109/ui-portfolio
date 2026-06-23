import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const TOTAL = 14;
const LABELS = [
  'GetNow', 'Market', 'Brief', 'Context', 'Problem framing', 'North star',
  'References', 'Explorations', 'System design',
  'Kanban board', '3-step detail panel', 'Demo', 'Tradeoffs', 'Release plan',
];

/* ── Primitives ── */
const SectionTag = ({ children }) => (
  <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#52525b] mb-1">{children}</div>
);
const SlideTitle = ({ children }) => (
  <h2 className="font-serif text-white text-[26px] mb-1" style={{ letterSpacing: '-0.02em' }}>{children}</h2>
);
const SlideSub = ({ children }) => (
  <p className="text-[13px] text-[#71717a] mb-5">{children}</p>
);
const PillTag = ({ children, variant = 'gray' }) => {
  const styles = {
    purple: 'text-[#7F77DD] bg-[rgba(127,119,221,0.12)] border border-[rgba(127,119,221,0.25)]',
    teal:   'text-[#1D9E75] bg-[rgba(29,158,117,0.12)] border border-[rgba(29,158,117,0.25)]',
    blue:   'text-[#185FA5] bg-[rgba(24,95,165,0.12)] border border-[rgba(24,95,165,0.25)]',
    amber:  'text-[#C68018] bg-[rgba(198,128,24,0.12)] border border-[rgba(198,128,24,0.25)]',
    gray:   'text-[#71717a] bg-[#18181b] border border-[#3f3f46]',
    red:    'text-[#E24B4A] bg-[rgba(226,75,74,0.10)] border border-[rgba(226,75,74,0.25)]',
  };
  return (
    <span className={`inline-block text-[10px] font-bold tracking-[0.10em] uppercase px-3 py-1 rounded-full ${styles[variant]}`}>
      {children}
    </span>
  );
};
const Card = ({ children, className = '' }) => (
  <div className={`bg-[#18181b] rounded-xl border border-[#27272a] p-4 ${className}`}>
    {children}
  </div>
);
const MiniLabel = ({ children, color = 'text-accent' }) => (
  <div className={`text-[10px] font-bold tracking-[0.12em] uppercase mb-2 ${color}`}>{children}</div>
);
const Body = ({ children, className = '' }) => (
  <p className={`text-[13px] text-[#d4d4d8] leading-[1.75] ${className}`}>{children}</p>
);
const Muted = ({ children, className = '' }) => (
  <p className={`text-[12px] text-[#a1a1aa] leading-[1.7] ${className}`}>{children}</p>
);
const SlideNum = ({ n }) => (
  <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#3f3f46] mb-1">
    {String(n).padStart(2, '0')} / {TOTAL}
  </div>
);
const WarnNote = ({ children }) => (
  <div className="flex items-start gap-2 bg-[rgba(239,127,26,0.08)] border border-[rgba(239,127,26,0.2)] rounded-lg px-3 py-2.5 my-3">
    <span className="text-[#EF7F1A] text-[13px] flex-shrink-0">⚠</span>
    <p className="text-[12px] text-[#a1a1aa] leading-[1.6]">{children}</p>
  </div>
);

/* ══════════════════════════════
   SLIDE 01 — COVER
══════════════════════════════ */
function Slide01() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full px-8 py-12">
      <SectionTag>Section 1 — Opening</SectionTag>
      <h1
        className="font-serif text-white mt-6 mb-3"
        style={{ fontSize: 'clamp(64px, 10vw, 104px)', lineHeight: 1 }}
      >
        GetNow
      </h1>
      <p className="text-[18px] text-[#a1a1aa] mb-6 max-w-md" style={{ letterSpacing: '-0.01em' }}>
        "Auto verified and smart marketplace system"
      </p>
      <div className="flex gap-2 flex-wrap justify-center mb-8">
        <PillTag variant="purple">Pharmacy side</PillTag>
        <PillTag variant="teal">Order management</PillTag>
        <PillTag variant="gray">Vietnam market</PillTag>
      </div>
      <p className="text-[13px] text-[#71717a]">Product Designer: Hien Nguyen</p>
      <p className="text-[12px] text-[#52525b] mt-1">Interactive prototype and documentation</p>
    </div>
  );
}

/* ── Scorecard helpers (used only in Slide02) ── */
const BADGE_STYLES = {
  amber:      'bg-[rgba(198,128,24,0.18)] text-[#C68018] border border-[rgba(198,128,24,0.3)]',
  red:        'bg-[rgba(226,75,74,0.15)] text-[#E24B4A] border border-[rgba(226,75,74,0.25)]',
  darkred:    'bg-[rgba(120,30,20,0.25)] text-[#993C1D] border border-[rgba(150,50,30,0.3)]',
  green:      'bg-[rgba(29,158,117,0.15)] text-[#1D9E75] border border-[rgba(29,158,117,0.25)]',
  brightgreen:'bg-[rgba(29,158,117,0.22)] text-[#1D9E75] border border-[#1D9E75] font-semibold',
  gray:       'bg-[#18181b] text-[#52525b] border border-[#27272a]',
};
const Badge = ({ label, color }) => (
  <span className={`inline-block text-[10px] px-2 py-0.5 rounded-full leading-[1.4] ${BADGE_STYLES[color] || BADGE_STYLES.gray}`}>
    {label}
  </span>
);
const ScoreBar = ({ score, isGetNow }) => {
  const barColor = isGetNow ? '#1D9E75' : score >= 7 ? '#1D9E75' : score >= 4 ? '#C68018' : '#E24B4A';
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-10 h-1.5 bg-[#27272a] rounded-full overflow-hidden flex-shrink-0">
        <div className="h-full rounded-full" style={{ width: `${score * 10}%`, background: barColor }} />
      </div>
      <span className={`text-[11px] tabular-nums ${isGetNow ? 'text-[#1D9E75] font-bold' : 'text-[#52525b]'}`}>{score}</span>
    </div>
  );
};

const ROWS = [
  { name: 'Long Chau',  sub: 'Chain · 1,600 stores',   rx: ['Proprietary only','amber'],  ui: 7, net: ['Closed chain','red'],        del: 8, indie: ['None','red'],            audit: ['Internal only','amber'],   wallet: ['None public','red'] },
  { name: 'Pharmacity', sub: 'Chain · 900 stores',      rx: ['Unknown','amber'],           ui: 5, net: ['Closed chain','red'],        del: 6, indie: ['None','red'],            audit: ['Unknown','gray'],          wallet: ['None','red'] },
  { name: 'Medigo',     sub: 'B2C · 1,000 partners',   rx: ['Photo upload only','amber'], ui: 2, net: ['Open','green'],              del: 5, indie: ['Primary model','green'],  audit: ['Unknown','gray'],          wallet: ['None','red'] },
  { name: 'Jio Health', sub: 'Telehealth + Rx',         rx: ['Barcode scan only','amber'], ui: 2, net: ['Limited','amber'],           del: 4, indie: ['No','red'],              audit: ['None','red'],              wallet: ['None','red'] },
  { name: 'GrabMart',   sub: 'Super-app',               rx: ['None','red'],                ui: 1, net: ['Open marketplace','green'],  del: 9, indie: ['Not specialized','darkred'], audit: ['None','red'],           wallet: ['None','red'] },
  { name: 'Buymed',     sub: 'B2B wholesale',           rx: ['N/A (B2B)','darkred'],       ui: 6, net: ['38K pharmacies','green'],    del: 8, indie: ['Core model','green'],     audit: ['N/A','gray'],             wallet: ['N/A','gray'] },
];
const GETNOW_ROW = {
  name: '⚡ GetNow', sub: 'Target position',
  rx: ['OCR + Human sign-off','brightgreen'], ui: 9,
  net: ['Open marketplace','brightgreen'], del: 8,
  indie: ['Primary target','brightgreen'],
  audit: ['Audit log built-in','brightgreen'],
  wallet: ['Rx Wallet + refill','brightgreen'],
};

/* ══════════════════════════════
   SLIDE 02 — MARKET
══════════════════════════════ */
function Slide02() {
  const COLS = ['RX VERIFICATION', 'PHARMACIST UI', 'OPEN NETWORK', 'DELIVERY INFRA', 'INDIE FOCUS', 'COMPLIANCE AUDIT', 'RX WALLET'];
  const renderRow = (r, isGetNow) => {
    const rowBg = isGetNow ? 'bg-[rgba(29,158,117,0.06)] border-t-2 border-[#1D9E75]' : 'border-t border-[#1e1e22]';
    return (
      <tr key={r.name} className={rowBg}>
        <td className="py-2.5 pr-3 align-top">
          <div className={`text-[12px] font-semibold ${isGetNow ? 'text-[#1D9E75]' : 'text-white'}`}>{r.name}</div>
          <div className="text-[10px] text-[#52525b] mt-0.5">{r.sub}</div>
        </td>
        <td className="py-2.5 pr-3 align-middle"><Badge label={r.rx[0]} color={r.rx[1]} /></td>
        <td className="py-2.5 pr-3 align-middle"><ScoreBar score={r.ui} isGetNow={isGetNow} /></td>
        <td className="py-2.5 pr-3 align-middle"><Badge label={r.net[0]} color={r.net[1]} /></td>
        <td className="py-2.5 pr-3 align-middle"><ScoreBar score={r.del} isGetNow={isGetNow} /></td>
        <td className="py-2.5 pr-3 align-middle"><Badge label={r.indie[0]} color={r.indie[1]} /></td>
        <td className="py-2.5 pr-3 align-middle"><Badge label={r.audit[0]} color={r.audit[1]} /></td>
        <td className="py-2.5 align-middle"><Badge label={r.wallet[0]} color={r.wallet[1]} /></td>
      </tr>
    );
  };

  return (
    <div className="w-full max-w-5xl">
      <SlideNum n={2} />
      <SectionTag>Section 1 — Opening</SectionTag>
      <SlideTitle>Market</SlideTitle>
      <SlideSub>Vietnam pharmacy — size, gap, and opportunity</SlideSub>

      {/* Scorecard */}
      <Card className="mb-4 overflow-x-auto">
        <div className="text-[10px] font-bold tracking-[0.10em] uppercase text-[#52525b] mb-3">Full competitive scorecard — 8 dimensions</div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th className="text-left text-[10px] font-bold tracking-[0.08em] uppercase text-[#3f3f46] pb-2 pr-3 w-[130px]">COMPETITOR</th>
              {COLS.map((c) => (
                <th key={c} className="text-left text-[10px] font-bold tracking-[0.08em] uppercase text-[#3f3f46] pb-2 pr-3">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => renderRow(r, false))}
            {renderRow(GETNOW_ROW, true)}
          </tbody>
        </table>
        <p className="text-[10px] text-[#3f3f46] mt-3">Scores are based on public app data, market reports, and GetNow SUMMARY.md design specs. GetNow scores reflect target MVP + Phase 2 capabilities.</p>
      </Card>

      {/* White space */}
      <div className="border-l-2 border-accent pl-3">
        <p className="text-[12px] text-[#d4d4d8] leading-[1.6]">
          <strong className="text-white">White space — marketplace fulfillment layer:</strong> nobody. Every competitor treats prescription handling as an afterthought or ignores it entirely. GetNow is the neutral OS for independent pharmacy delivery.
        </p>
      </div>
    </div>
  );
}

/* ══════════════════════════════
   SLIDE 03 — BRIEF
══════════════════════════════ */
function Slide03() {
  return (
    <div className="w-full max-w-3xl">
      <SlideNum n={3} />
      <SectionTag>Section 1 — Opening</SectionTag>
      <SlideTitle>Brief</SlideTitle>
      <SlideSub>What I was asked · what I delivered · how I worked</SlideSub>
      <div className="flex flex-col gap-3">
        <Card>
          <Body>
            <strong className="text-white">The ask:</strong> design the pharmacy-side order management experience for GetNow
          </Body>
        </Card>
        <Card>
          <Body className="mb-3"><strong className="text-white">Process:</strong></Body>
          <div className="flex gap-2 flex-wrap items-center">
            <PillTag variant="purple">Research</PillTag>
            <span className="text-[#52525b] text-[12px]">→</span>
            <PillTag variant="blue">Direction</PillTag>
            <span className="text-[#52525b] text-[12px]">→</span>
            <PillTag variant="teal">Flows</PillTag>
            <span className="text-[#52525b] text-[12px]">→</span>
            <PillTag variant="amber">Prototype</PillTag>
          </div>
        </Card>
        <Card>
          <Body>
            <strong className="text-white">Deliverables:</strong> Interactive prototype and documentation
          </Body>
        </Card>
      </div>
    </div>
  );
}

/* ══════════════════════════════
   SLIDE 04 — CONTEXT
══════════════════════════════ */
function Slide04() {
  return (
    <div className="w-full max-w-3xl">
      <SlideNum n={4} />
      <SectionTag>Section 2 — Context + Problem Framing</SectionTag>
      <SlideTitle>Context</SlideTitle>
      <SlideSub>Vietnam pharmacy landscape — what I learned</SlideSub>
      <Card className="mb-3">
        <Body className="mb-3"><strong className="text-white">Verified / citable facts:</strong></Body>
        <ul className="text-[13px] text-[#d4d4d8] leading-[1.75] list-disc pl-5 space-y-2">
          <li><strong className="text-white">Circular 02/2018/TT-BYT</strong> — mandates prescription retention for Schedule 1–5 drugs. Digital images legally accepted since 2018.</li>
          <li>Vietnam e-commerce grew 25% YoY 2022–23 (VECOM) — medicine delivery is rising with no dominant compliant player</li>
          <li>Ministry of Health pharmacy census — 40,000–60,000 licensed pharmacies</li>
        </ul>
        <WarnNote>"70% solo-operator" and "30% delivery-first" need a citation or removal before presenting.</WarnNote>
      </Card>
      <Card>
        <Body>
          <strong className="text-white">Current workflow (observable):</strong> orders via phone/Zalo — handwritten, Rx matched on paper, OOS by phone with no record, driver handoff with no audit
        </Body>
      </Card>
    </div>
  );
}

/* ══════════════════════════════
   SLIDE 05 — PROBLEM FRAMING
══════════════════════════════ */
function Slide05() {
  return (
    <div className="w-full max-w-3xl">
      <SlideNum n={5} />
      <SectionTag>Section 2 — Context + Problem Framing</SectionTag>
      <SlideTitle>Problem framing</SlideTitle>
      <SlideSub>How I framed the problem — and what I assumed</SlideSub>
      <Card className="mb-4">
        <Body className="mb-3"><strong className="text-white">3 root causes:</strong></Body>
        <ol className="text-[13px] text-[#d4d4d8] leading-[1.75] list-decimal pl-5 space-y-2">
          <li>Prescription verification is split across time and space. No single moment confirms "this order is legally fulfillable."</li>
          <li>OOS has no structured resolution path. No record, no substitute workflow, no system-readable outcome.</li>
          <li>Driver handoff creates liability with no audit. No chain of custody for controlled substances.</li>
        </ol>
      </Card>
      <Body className="mb-3"><strong className="text-white">4 assumptions + design implications:</strong></Body>
      <div className="grid grid-cols-2 gap-3">
        {[
          { n: 'A1', body: 'Connected to national medicine DB → pharmacist never verifies drug legality, only order-level Rx match' },
          { n: 'A2', body: "Non-compliant Rx rejected upstream → pharmacist's step is identity match only" },
          { n: 'A3', body: 'Buyer + driver have own apps → pharmacist app is an ops tool, not a comms hub' },
          { n: 'A4', body: 'OOS call is price confirmation only — not a medical consultation → structured handler' },
        ].map((a) => (
          <Card key={a.n}>
            <MiniLabel>{a.n}</MiniLabel>
            <Muted>{a.body}</Muted>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════
   SLIDE 06 — NORTH STAR
══════════════════════════════ */
function Slide06() {
  return (
    <div className="w-full max-w-3xl">
      <SlideNum n={6} />
      <SectionTag>Section 2 — Context + Problem Framing</SectionTag>
      <SlideTitle>North star</SlideTitle>
      <SlideSub>Auto verified and smart marketplace system</SlideSub>
      <Card className="mb-4">
        <Body>Every order that reaches the pharmacist is pre-validated at the platform level. The pharmacist's role is execution and custody — not compliance judgment.</Body>
      </Card>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <Card className="border-l-2 border-l-[#7F77DD]">
          <MiniLabel style={{ color: '#3C3489' }}>Rules in</MiniLabel>
          <ul className="text-[12px] text-[#d4d4d8] leading-[1.75] list-disc pl-4 space-y-1">
            <li>Progressive commitment</li>
            <li>Blocking gates</li>
            <li>Immutable records at each transition</li>
          </ul>
        </Card>
        <Card>
          <MiniLabel color="text-[#71717a]">Rules out</MiniLabel>
          <ul className="text-[12px] text-[#d4d4d8] leading-[1.75] list-disc pl-4 space-y-1">
            <li>Free-form notes</li>
            <li>Unlogged calls</li>
            <li>Skippable compliance steps</li>
          </ul>
        </Card>
      </div>
      <Muted>Each step narrows what the pharmacist can do, making the right path the obvious path. Every decision has a structured UI path with a machine-readable outcome and an audit record.</Muted>
    </div>
  );
}

/* ══════════════════════════════
   SLIDE 07 — REFERENCES
══════════════════════════════ */
function Slide07() {
  return (
    <div className="w-full max-w-3xl">
      <SlideNum n={7} />
      <SectionTag>Section 3 — Design Decisions + Explorations</SectionTag>
      <SlideTitle>References</SlideTitle>
      <SlideSub>Products and patterns I referenced — and why</SlideSub>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { src: 'Linear / Trello', label: 'Kanban workspace', what: 'Status-gated columns, not free drag-and-drop' },
          { src: 'Stripe Dashboard', label: 'Master-detail panel', what: '3-step linear flow inside the panel' },
          { src: 'Amazon / Alto Pharmacy', label: 'Prescription-first ordering', what: 'Pharmacy-side identity verification' },
          { src: 'Square POS / Toast', label: 'Hold-to-confirm gesture', what: 'Progress bar makes the gesture feel responsive' },
        ].map((r) => (
          <Card key={r.label}>
            <MiniLabel>{r.label}</MiniLabel>
            <Muted className="mb-1">{r.src}</Muted>
            <Body>{r.what}</Body>
          </Card>
        ))}
      </div>
      <div className="border-l-2 border-[#D85A30] pl-3">
        <p className="text-[12px] text-[#a1a1aa] leading-[1.6]">
          <strong className="text-[#d4d4d8]">Rejected — chat-based OOS resolution:</strong> Per A4, the OOS call is a 30-second price confirmation. A structured handler covers 100% of the case and produces a machine-readable record.
        </p>
      </div>
    </div>
  );
}

/* ══════════════════════════════
   SLIDE 08 — EXPLORATIONS
══════════════════════════════ */
function Slide08() {
  return (
    <div className="w-full max-w-3xl">
      <SlideNum n={8} />
      <SectionTag>Section 3 — Design Decisions + Explorations</SectionTag>
      <SlideTitle>Explorations</SlideTitle>
      <SlideSub>What I tried and what I discarded</SlideSub>
      <div className="flex flex-col gap-3">
        {[
          {
            d: 'Layout',
            reject: 'List view — simpler, any volume',
            choose: 'Kanban — columns = order status. Risk: crowded at high volume. Mitigation: compact cards, StatsBar counts.',
          },
          {
            d: 'StatsBar',
            reject: "Mixed row — compact but confusing (is 'ctrl' a status or a type?)",
            choose: "Status chips + divider + alert tags — separates 'where are my orders' from 'what needs attention.'",
          },
          {
            d: 'Sign-off',
            reject: 'Button — fast but too easy to tap through without reading',
            choose: 'Hold gesture — 1.5s hold + all 5 checks required. Intentional friction for an irreversible action. Precedent: medical device UIs.',
          },
        ].map((e) => (
          <Card key={e.d}>
            <MiniLabel>Decision — {e.d}</MiniLabel>
            <p className="text-[12px] text-[#a1a1aa] leading-[1.6] mb-1">
              <span className="text-[#993C1D]">✕ Rejected:</span> {e.reject}
            </p>
            <p className="text-[12px] text-[#d4d4d8] leading-[1.6]">
              <span className="text-[#0F6E56]">✓ Chosen:</span> {e.choose}
            </p>
          </Card>
        ))}
        <Muted className="mt-1">In the actual slide: show side-by-side visuals of each option.</Muted>
      </div>
    </div>
  );
}

/* ══════════════════════════════
   SLIDE 09 — SYSTEM DESIGN
══════════════════════════════ */
function Slide09() {
  return (
    <div className="w-full max-w-3xl">
      <SlideNum n={9} />
      <SectionTag>Section 3 — Design Decisions + Explorations</SectionTag>
      <SlideTitle>System design</SlideTitle>
      <SlideSub>The 4-tier verification funnel</SlideSub>
      <div className="grid grid-cols-2 gap-3">
        {[
          { n: 'Tier 1', l: 'Intake',           g: 'Rx/Ctrl flag',        b: "'Prepare' until Rx is viewed",              r: 'Viewed timestamp' },
          { n: 'Tier 2', l: 'Item verification', g: 'OOS handler',         b: "'Proceed' until every item resolved",        r: 'Call log, substitute, skip' },
          { n: 'Tier 3', l: 'Pre-dispatch',      g: 'Checklist + hold',    b: "'Sign off' until all 5 checked",            r: 'Completion timestamp' },
          { n: 'Tier 4', l: 'Handoff',           g: 'Order ID read-back',  b: "'Confirm Handoff' until ID match confirmed", r: 'Handoff timestamp, driver ID, Order ID match' },
        ].map((t) => (
          <Card key={t.n}>
            <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-accent mb-1">{t.n}</div>
            <div className="text-[13px] font-semibold text-white mb-2">{t.l}</div>
            <p className="text-[12px] text-[#a1a1aa] mb-1"><strong className="text-[#d4d4d8]">Gate:</strong> {t.g}</p>
            <p className="text-[12px] text-[#a1a1aa] mb-1"><strong className="text-[#d4d4d8]">Blocks:</strong> {t.b}</p>
            <p className="text-[12px] text-[#a1a1aa]"><strong className="text-[#d4d4d8]">Records:</strong> {t.r}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════
   SLIDE 10 — KANBAN BOARD
══════════════════════════════ */
function Slide10() {
  return (
    <div className="w-full max-w-3xl">
      <SlideNum n={10} />
      <SectionTag>Section 4 — Screens + Demo</SectionTag>
      <SlideTitle>Kanban board</SlideTitle>
      <SlideSub>The pharmacist's primary workspace</SlideSub>
      <Card className="mb-4">
        <Body className="mb-3">Annotations for the prototype screenshot:</Body>
        <ul className="text-[13px] text-[#d4d4d8] leading-[1.75] list-disc pl-5 space-y-2">
          <li><strong className="text-white">StatsBar:</strong> status chips (Queue · Preparing · Ready · Done) + vertical divider + alert tags (OOS · Ctrl). Why status ≠ alert type.</li>
          <li><strong className="text-white">Order cards:</strong> buyer name, time received, item count, Rx/OOS/Ctrl badge. What was included vs. deliberately excluded.</li>
        </ul>
      </Card>
      <div className="flex gap-2 flex-wrap mb-4">
        <PillTag variant="purple">Queue — purple</PillTag>
        <PillTag variant="blue">Preparing — blue</PillTag>
        <PillTag variant="teal">Ready — green</PillTag>
        <PillTag variant="gray">Done — slate</PillTag>
      </div>
      <div className="border-l-2 border-[#27272a] pl-3">
        <p className="text-[12px] text-[#a1a1aa] leading-[1.6]">Annotate directly on the screenshot — not a separate layer.</p>
      </div>
    </div>
  );
}

/* ══════════════════════════════
   SLIDE 11 — 3-STEP DETAIL PANEL
══════════════════════════════ */
function Slide11() {
  return (
    <div className="w-full max-w-3xl">
      <SlideNum n={11} />
      <SectionTag>Section 4 — Screens + Demo</SectionTag>
      <SlideTitle>3-step detail panel</SlideTitle>
      <SlideSub>One order, start to finish: Detail → Sign-off → Handoff</SlideSub>
      <div className="flex flex-col gap-3 mb-4">
        {[
          {
            s: 'Step 1', l: 'Detail',
            d: "Customer info · medicine list with in/OOS chips · OOS handler (call → substitute picker → skip). 'Proceed to Sign-off' disabled with label 'Resolve OOS items first' until all items resolved.",
          },
          {
            s: 'Step 2', l: 'Sign-off',
            d: '5-item pre-dispatch checklist + hold gesture + progress bar. Annotate: why hold gesture, what the progress bar signals.',
          },
          {
            s: 'Step 3', l: 'Handoff',
            d: "Driver card (name, plate, ETA). Order ID displayed large — driver reads it aloud. 'Order ID matches' confirmation → Confirm Handoff unlocks.",
          },
        ].map((s) => (
          <Card key={s.s}>
            <MiniLabel>{s.s} — {s.l}</MiniLabel>
            <Muted>{s.d}</Muted>
          </Card>
        ))}
      </div>
      <div className="border-l-2 border-[#27272a] pl-3">
        <p className="text-[12px] text-[#a1a1aa] leading-[1.6]">
          <strong className="text-[#d4d4d8]">Key annotation:</strong> Why the driver reads to the pharmacist (not the reverse) — chain of custody flows toward the record-keeper.
        </p>
      </div>
    </div>
  );
}

/* ══════════════════════════════
   SLIDE 12 — DEMO
══════════════════════════════ */
const DEMO_SCREENS = [
  { label: 'Screen 1', src: '/images/getnow/screen1.jpg', alt: 'OOS order detail — call buyer' },
  { label: 'Screen 2', src: '/images/getnow/screen2.jpg', alt: 'Kanban board overview' },
  { label: 'Screen 3', src: '/images/getnow/screen3.jpg', alt: 'Substitute picker' },
  { label: 'Screen 4', src: '/images/getnow/screen4.jpg', alt: 'Substitute offered — proceed to sign-off' },
  { label: 'Screen 5', src: '/images/getnow/screen5.jpg', alt: 'Pre-dispatch checklist' },
  { label: 'Screen 6', src: '/images/getnow/screen6.jpg', alt: 'Handoff — driver not assigned' },
  { label: 'Screen 7', src: '/images/getnow/screen7.jpg', alt: 'Handoff — Order ID confirmed' },
];

function Slide12() {
  return (
    <div className="w-full max-w-4xl">
      <SlideNum n={12} />
      <SectionTag>Section 4 — Screens + Demo</SectionTag>
      <SlideTitle>Demo</SlideTitle>
      <SlideSub>7 screens — live prototype walkthrough</SlideSub>

      <div className="flex flex-col gap-6">
        {DEMO_SCREENS.map(({ label, src, alt }) => (
          <div key={label}>
            <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-accent mb-2">{label}</div>
            <div className="rounded-xl overflow-hidden border border-[#27272a]">
              <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════
   SLIDE 13 — TRADEOFFS
══════════════════════════════ */
function Slide13() {
  return (
    <div className="w-full max-w-3xl">
      <SlideNum n={13} />
      <SectionTag>Section 5 — Tradeoffs + Release Plan</SectionTag>
      <SlideTitle>Tradeoffs</SlideTitle>
      <SlideSub>Key tradeoffs — what I prioritized and why</SlideSub>
      <div className="flex flex-col gap-3">
        {[
          { n: 'Friction vs. speed',           d: 'Blocking gates slow pharmacists down. A compliance failure costs far more than 10 extra seconds. Business constraint wins.' },
          { n: 'Single role vs. multi-role',    d: 'One pharmacist owns an order end-to-end in V1. Data model supports multi-role for Phase 2.' },
          { n: 'Tablet-first vs. mobile-first', d: "Kanban + master-detail needs horizontal space. Mobile 'quick actions' view is Phase 2." },
          { n: 'Structured OOS vs. free text',  d: 'OOS call is a price confirmation only. Structured handler covers 100% of V1 case and produces machine-readable outcomes.' },
          { n: 'Rx-first scope vs. full OTC',   d: 'Narrow, high-compliance scope builds trust with pharmacies and regulators. Expanding the OTC list is easier once the platform has a compliance track record.' },
        ].map((t) => (
          <Card key={t.n} className="flex gap-3">
            <div className="w-5 h-5 rounded-full bg-[rgba(167,139,250,0.12)] border border-[rgba(167,139,250,0.25)] flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
            <div>
              <Body className="font-semibold text-white mb-1">{t.n}</Body>
              <Muted>{t.d}</Muted>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════
   SLIDE 14 — RELEASE PLAN
══════════════════════════════ */
function Slide14() {
  return (
    <div className="w-full max-w-3xl">
      <SlideNum n={14} />
      <SectionTag>Section 5 — Tradeoffs + Release Plan</SectionTag>
      <SlideTitle>Release plan</SlideTitle>
      <SlideSub>First release and what comes after — with rationale</SlideSub>
      <Card className="mb-3">
        <MiniLabel>V1 — first release</MiniLabel>
        <div className="flex flex-col gap-2 mb-4">
          {[
            'Kanban board + StatsBar',
            'Queue step (intake gate, Rx/Ctrl flag)',
            'Detail step (OOS handler, substitute picker, call log)',
            'In-app calling — call auto-logged with timestamp, core to reliable audit trail',
            'Sign-off step (5-item checklist + hold gesture)',
            'Handoff step (Order ID read-back, driver card)',
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-[#1D9E75] text-[13px] mt-0.5 flex-shrink-0">✓</span>
              <span className="text-[13px] text-[#d4d4d8] leading-[1.5]">{f}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-[#27272a] pt-3">
          <MiniLabel color="text-[#52525b]">Go signal</MiniLabel>
          <Muted>5 pharmacies complete 20+ orders end-to-end without support. Audit log matches physical paperwork in a spot check.</Muted>
        </div>
      </Card>
      <Card className="mb-3">
        <MiniLabel color="text-[#52525b]">Phase 2</MiniLabel>
        <div className="flex flex-wrap gap-2 mt-1">
          {['OCR Rx verification', 'Prescription wallet', 'Family member ordering', 'Bulk OOS management', 'Order transfer', 'Expanded OTC catalogue', 'Multi-staff roles'].map((f) => (
            <PillTag key={f} variant="gray">{f}</PillTag>
          ))}
        </div>
      </Card>
      <Card>
        <MiniLabel color="text-[#52525b]">Phase 3</MiniLabel>
        <Muted>Barcode picking · predictive OOS alerts · analytics dashboard · national drug database API integration</Muted>
      </Card>
    </div>
  );
}

/* ── Slide router ── */
const SLIDES = [Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07,
                Slide08, Slide09, Slide10, Slide11, Slide12, Slide13, Slide14];

/* ════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════ */
export function CaseStudyGetNowSlides() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const go = useCallback((next) => {
    const target = Math.max(0, Math.min(TOTAL - 1, next));
    if (target === current || fading) return;
    setFading(true);
    setTimeout(() => { setCurrent(target); setFading(false); }, 180);
  }, [current, fading]);

  const prev = useCallback(() => go(current - 1), [go, current]);
  const next = useCallback(() => go(current + 1), [go, current]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  const Comp = SLIDES[current];

  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col" style={{ height: '100dvh' }}>

      {/* ── Top nav ── */}
      <div className="flex-shrink-0 border-b border-[#18181b] bg-[#09090b]/95 backdrop-blur-sm z-10">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[12px] text-[#71717a] hover:text-white transition-colors">
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Portfolio
          </Link>

          <div className="flex items-center gap-1">
            <span className="text-[11px] text-[#3f3f46] mr-3 hidden sm:block truncate max-w-[160px]">
              {LABELS[current]}
            </span>
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#71717a] hover:text-white hover:bg-[#18181b] disabled:opacity-25 disabled:cursor-not-allowed transition-all"
            >
              <svg width="13" height="13" fill="none" viewBox="0 0 13 13">
                <path d="M8 2L3 6.5 8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="text-[11px] text-[#52525b] w-12 text-center tabular-nums">{current + 1} / {TOTAL}</span>
            <button
              onClick={next}
              disabled={current === TOTAL - 1}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#71717a] hover:text-white hover:bg-[#18181b] disabled:opacity-25 disabled:cursor-not-allowed transition-all"
            >
              <svg width="13" height="13" fill="none" viewBox="0 0 13 13">
                <path d="M5 2l5 4.5-5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <span className="text-[11px] text-[#3f3f46] hidden sm:block">← → to navigate</span>
        </div>
      </div>

      {/* ── Slide area ── */}
      <div
        className="flex-1 overflow-y-auto flex items-start justify-center px-6 py-10 transition-opacity duration-[180ms]"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <Comp />
      </div>

      {/* ── Dots ── */}
      <div className="flex-shrink-0 pb-4 pt-2 flex justify-center gap-1">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            title={LABELS[i]}
            className="rounded-full transition-all duration-200"
            style={{
              width: i === current ? '20px' : '6px',
              height: '6px',
              background: i === current ? '#a78bfa' : '#27272a',
            }}
          />
        ))}
      </div>
    </div>
  );
}
