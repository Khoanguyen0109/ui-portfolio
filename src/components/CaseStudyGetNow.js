import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ── Primitives ── */
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

const Card = ({ children, className = '' }) => (
  <div className={`bg-bg border border-[#3f3f46] rounded-xl px-[22px] py-5 ${className}`}>
    {children}
  </div>
);

const MiniLabel = ({ children, color = 'text-accent' }) => (
  <div className={`text-[10px] font-bold tracking-[0.10em] uppercase mb-2 ${color}`}>{children}</div>
);

/* ════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════ */
export function CaseStudyGetNow() {
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

      {/* ══════════════════════════════
          SLIDE 01 — COVER / HERO
      ══════════════════════════════ */}
      <section className="px-12 pb-[72px] border-b border-[#3f3f46] relative overflow-hidden" style={{ paddingTop: '120px' }}>
        <div className="absolute pointer-events-none" style={{ top: '-200px', right: '-200px', width: '800px', height: '700px', background: 'radial-gradient(ellipse, rgba(167,139,250,0.08) 0%, transparent 65%)' }} />
        <div className="hero-grid-bg" />
        <div className="relative z-10 grid gap-16 items-start" style={{ gridTemplateColumns: '1fr 1fr' }}>

          <div>
            <div className="flex items-center gap-2.5 text-[12px] text-[#a1a1aa] uppercase tracking-[0.06em] mb-5">
              <span>Pharmacy Desktop</span>
              <span className="text-[#3f3f46]">·</span>
              <strong className="text-accent font-medium">Dispatch + Compliance · 2026</strong>
              <span className="text-[10px] font-bold tracking-[0.10em] uppercase text-accent bg-[rgba(167,139,250,0.10)] border border-[rgba(167,139,250,0.25)] px-2.5 py-[3px] rounded-full ml-1">
                Solo Designer
              </span>
            </div>

            <h1 className="font-serif font-normal text-white mb-5" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
              GetNow
            </h1>

            <p className="text-[18px] text-[#a1a1aa] leading-[1.5] mb-8 max-w-[520px]" style={{ letterSpacing: '-0.01em' }}>
              Auto verified and smart marketplace system
            </p>

            <p className="text-[14px] text-[#71717a] mb-10 max-w-[480px]">
              Interactive prototype and documentation
            </p>

            <div className="grid gap-px bg-[#3f3f46] border border-[#3f3f46] rounded-xl overflow-hidden" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
              {[
                { label: 'Designer', value: 'Hien Nguyen' },
                { label: 'Timeline', value: '8-week sprint', accent: true },
                { label: 'Platform', value: 'Desktop · Web' },
              ].map((m) => (
                <div key={m.label} className="bg-surface px-5 py-4">
                  <div className="text-[10px] tracking-[0.10em] uppercase text-[#a1a1aa] mb-1">{m.label}</div>
                  <div className={`text-[13px] font-medium ${m.accent ? 'text-accent' : 'text-white'}`}>{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="border border-[#3f3f46] rounded-2xl overflow-hidden bg-bg shadow-2xl self-start"
            style={{ animation: 'float 5s ease-in-out infinite' }}
          >
            <img src="/images/getnow/scene1.png" alt="GetNow dispatch board" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SLIDE 02 — MARKET
      ══════════════════════════════ */}
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader>
            <SectionLabel>Market</SectionLabel>
            <SkillTag>Vietnam pharmacy — size, gap, and opportunity</SkillTag>
          </SectionHeader>

          <div className="grid gap-4 mb-6 fade-up" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {[
              { stat: '$8.9B', label: 'Pharmacy retail market (2024)', sub: 'CAGR 8.18% through 2033' },
              { stat: '$130M → $275M', label: 'e-Pharmacy by 2030', sub: '13.34% CAGR · fast-growing segment' },
              { stat: '60,000+', label: 'Independent pharmacies', sub: '85% of all outlets · unserved by any platform' },
              { stat: 'Jan 2026', label: 'E-prescription mandate', sub: 'Ministry of Health · all facilities required' },
            ].map((m) => (
              <Card key={m.stat}>
                <div className="font-serif text-[22px] text-accent mb-1" style={{ letterSpacing: '-0.02em' }}>{m.stat}</div>
                <p className="text-[13px] font-medium text-white mb-0.5">{m.label}</p>
                <p className="text-[12px] text-[#71717a] leading-[1.5]">{m.sub}</p>
              </Card>
            ))}
          </div>

          {/* Scorecard table */}
          <div className="fade-up overflow-x-auto">
            <Card>
              <MiniLabel color="text-[#71717a]">Full competitive scorecard — 8 dimensions</MiniLabel>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
                <thead>
                  <tr>
                    {['COMPETITOR','RX VERIFICATION','PHARMACIST UI','OPEN NETWORK','DELIVERY INFRA','INDIE FOCUS','COMPLIANCE AUDIT','RX WALLET'].map((h) => (
                      <th key={h} className="text-left text-[10px] font-bold tracking-[0.07em] uppercase text-[#3f3f46] pb-2 pr-3 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name:'Long Chau',  sub:'Chain · 1,600 stores',  rx:['Proprietary only','#C68018','rgba(198,128,24,0.18)'],  ui:7, net:['Closed chain','#E24B4A','rgba(226,75,74,0.15)'],        del:8, indie:['None','#E24B4A','rgba(226,75,74,0.15)'],          audit:['Internal only','#C68018','rgba(198,128,24,0.18)'],  wallet:['None public','#E24B4A','rgba(226,75,74,0.15)'] },
                    { name:'Pharmacity', sub:'Chain · 900 stores',     rx:['Unknown','#C68018','rgba(198,128,24,0.18)'],           ui:5, net:['Closed chain','#E24B4A','rgba(226,75,74,0.15)'],        del:6, indie:['None','#E24B4A','rgba(226,75,74,0.15)'],          audit:['Unknown','#52525b','#18181b'],                      wallet:['None','#E24B4A','rgba(226,75,74,0.15)'] },
                    { name:'Medigo',     sub:'B2C · 1,000 partners',  rx:['Photo upload only','#C68018','rgba(198,128,24,0.18)'], ui:2, net:['Open','#1D9E75','rgba(29,158,117,0.15)'],               del:5, indie:['Primary model','#1D9E75','rgba(29,158,117,0.15)'], audit:['Unknown','#52525b','#18181b'],                      wallet:['None','#E24B4A','rgba(226,75,74,0.15)'] },
                    { name:'Jio Health', sub:'Telehealth + Rx',        rx:['Barcode scan only','#C68018','rgba(198,128,24,0.18)'], ui:2, net:['Limited','#C68018','rgba(198,128,24,0.18)'],            del:4, indie:['No','#E24B4A','rgba(226,75,74,0.15)'],            audit:['None','#E24B4A','rgba(226,75,74,0.15)'],            wallet:['None','#E24B4A','rgba(226,75,74,0.15)'] },
                    { name:'GrabMart',   sub:'Super-app',               rx:['None','#E24B4A','rgba(226,75,74,0.15)'],               ui:1, net:['Open marketplace','#1D9E75','rgba(29,158,117,0.15)'], del:9, indie:['Not specialized','#993C1D','rgba(120,30,20,0.25)'],audit:['None','#E24B4A','rgba(226,75,74,0.15)'],            wallet:['None','#E24B4A','rgba(226,75,74,0.15)'] },
                    { name:'Buymed',     sub:'B2B wholesale',           rx:['N/A (B2B)','#993C1D','rgba(120,30,20,0.25)'],          ui:6, net:['38K pharmacies','#1D9E75','rgba(29,158,117,0.15)'],   del:8, indie:['Core model','#1D9E75','rgba(29,158,117,0.15)'],   audit:['N/A','#52525b','#18181b'],                          wallet:['N/A','#52525b','#18181b'] },
                  ].map((r) => (
                    <tr key={r.name} className="border-t border-[#1e1e22]">
                      <td className="py-2 pr-3 align-top">
                        <div className="text-[12px] font-semibold text-white">{r.name}</div>
                        <div className="text-[10px] text-[#52525b]">{r.sub}</div>
                      </td>
                      <td className="py-2 pr-3 align-middle"><span style={{ background: r.rx[2], color: r.rx[1], border: `1px solid ${r.rx[1]}33` }} className="inline-block text-[10px] px-2 py-0.5 rounded-full leading-[1.4]">{r.rx[0]}</span></td>
                      <td className="py-2 pr-3 align-middle">
                        <div className="flex items-center gap-1.5">
                          <div className="w-10 h-1.5 bg-[#27272a] rounded-full overflow-hidden"><div className="h-full rounded-full" style={{ width: `${r.ui*10}%`, background: r.ui>=7?'#1D9E75':r.ui>=4?'#C68018':'#E24B4A' }} /></div>
                          <span className="text-[11px] text-[#52525b]">{r.ui}</span>
                        </div>
                      </td>
                      <td className="py-2 pr-3 align-middle"><span style={{ background: r.net[2], color: r.net[1], border: `1px solid ${r.net[1]}33` }} className="inline-block text-[10px] px-2 py-0.5 rounded-full leading-[1.4] whitespace-nowrap">{r.net[0]}</span></td>
                      <td className="py-2 pr-3 align-middle">
                        <div className="flex items-center gap-1.5">
                          <div className="w-10 h-1.5 bg-[#27272a] rounded-full overflow-hidden"><div className="h-full rounded-full" style={{ width: `${r.del*10}%`, background: r.del>=7?'#1D9E75':r.del>=4?'#C68018':'#E24B4A' }} /></div>
                          <span className="text-[11px] text-[#52525b]">{r.del}</span>
                        </div>
                      </td>
                      <td className="py-2 pr-3 align-middle"><span style={{ background: r.indie[2], color: r.indie[1], border: `1px solid ${r.indie[1]}33` }} className="inline-block text-[10px] px-2 py-0.5 rounded-full leading-[1.4]">{r.indie[0]}</span></td>
                      <td className="py-2 pr-3 align-middle"><span style={{ background: r.audit[2], color: r.audit[1], border: `1px solid ${r.audit[1]}33` }} className="inline-block text-[10px] px-2 py-0.5 rounded-full leading-[1.4]">{r.audit[0]}</span></td>
                      <td className="py-2 align-middle"><span style={{ background: r.wallet[2], color: r.wallet[1], border: `1px solid ${r.wallet[1]}33` }} className="inline-block text-[10px] px-2 py-0.5 rounded-full leading-[1.4]">{r.wallet[0]}</span></td>
                    </tr>
                  ))}
                  {/* GetNow row */}
                  <tr className="border-t-2 border-[#1D9E75]" style={{ background: 'rgba(29,158,117,0.06)' }}>
                    <td className="py-2.5 pr-3 align-top">
                      <div className="text-[12px] font-semibold text-[#1D9E75]">⚡ GetNow</div>
                      <div className="text-[10px] text-[#1D9E75] opacity-70">Target position</div>
                    </td>
                    {[
                      ['OCR + Human sign-off'], [''], ['Open marketplace'], [''], ['Primary target'], ['Audit log built-in'], ['Rx Wallet + refill']
                    ].map((_, ci) => {
                      const gn = [
                        { type:'badge', label:'OCR + Human sign-off' },
                        { type:'bar', score:9 },
                        { type:'badge', label:'Open marketplace' },
                        { type:'bar', score:8 },
                        { type:'badge', label:'Primary target' },
                        { type:'badge', label:'Audit log built-in' },
                        { type:'badge', label:'Rx Wallet + refill' },
                      ][ci];
                      return (
                        <td key={ci} className="py-2.5 pr-3 align-middle">
                          {gn.type === 'badge'
                            ? <span style={{ background:'rgba(29,158,117,0.22)', color:'#1D9E75', border:'1px solid #1D9E75' }} className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full leading-[1.4] whitespace-nowrap">{gn.label}</span>
                            : <div className="flex items-center gap-1.5"><div className="w-10 h-1.5 bg-[#1D9E75] rounded-full" /><span className="text-[11px] text-[#1D9E75] font-bold">{gn.score}</span></div>
                          }
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
              <p className="text-[10px] text-[#3f3f46] mt-3">Scores are based on public app data, market reports, and GetNow SUMMARY.md design specs. GetNow scores reflect target MVP + Phase 2 capabilities.</p>
            </Card>
          </div>

          <Card className="fade-up mt-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              <p className="text-[13px] text-[#a1a1aa]">
                <strong className="text-white">White space — marketplace fulfillment layer:</strong> nobody. Every competitor treats prescription handling as an afterthought or ignores it entirely. GetNow is the neutral OS for independent pharmacy delivery.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* ══════════════════════════════
          SLIDE 03 — THE BRIEF
      ══════════════════════════════ */}
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>The Brief</SectionLabel><SkillTag>Communication</SkillTag></SectionHeader>

          <div className="grid gap-4 mb-4 fade-up" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <Card>
              <MiniLabel>The Ask</MiniLabel>
              <p className="text-[13px] text-[#d4d4d8] leading-[1.75]">
                Design the pharmacy-side order management experience for GetNow — a same-day prescription delivery platform operating in Vietnam.
              </p>
            </Card>
            <Card>
              <MiniLabel>Process</MiniLabel>
              <p className="text-[13px] text-[#d4d4d8] leading-[1.75] mb-2">
                Research → Direction → Flows → Prototype
              </p>
              <p className="text-[13px] text-[#a1a1aa]">8-week solo design sprint · Desktop-first</p>
            </Card>
            <Card>
              <MiniLabel>Deliverables</MiniLabel>
              <p className="text-[13px] text-[#d4d4d8]">Interactive prototype</p>
              <p className="text-[13px] text-[#d4d4d8]">This presentation</p>
              <p className="text-[13px] text-[#a1a1aa] mt-2">Solo designer</p>
            </Card>
          </div>

          <Card className="fade-up">
            <MiniLabel>Challenge</MiniLabel>
            <p className="text-[14px] text-[#d4d4d8] leading-[1.8]">
              Pharmacy staff process 50–120 orders daily. Status tracking lives in chat threads and calls,
              OOS delays kill delivery SLAs, and the sign-off before dispatch happens on paper — or not at all.
            </p>
          </Card>
        </div>
      </section>

      {/* ══════════════════════════════
          SLIDE 03 — CONTEXT + PROBLEM
      ══════════════════════════════ */}
      <section className="px-12 py-20 bg-bg border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>Context + Problem</SectionLabel><SkillTag>Product Thinking</SkillTag></SectionHeader>

          <div className="grid gap-16 items-start" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="fade-up">
              <div
                className="font-serif font-normal text-white leading-[1.2] border-l-[3px] border-accent pl-6 mb-7"
                style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.02em' }}
              >
                Same-day delivery is won<br />
                <em className="not-italic text-accent">in the operational layer.</em>
              </div>
              <p className="text-[14px] text-[#a1a1aa] leading-[1.8] mb-5">
                Same-day pharmacy delivery is a hyper-competitive space. Players like Alto Pharmacy, Amazon,
                and regional chains are racing to close the last-mile gap. The operational layer — the internal
                dispatch workflow — is the invisible differentiator.
              </p>
              <p className="text-[14px] text-[#a1a1aa] leading-[1.8]">
                Staff are highly trained clinical professionals operating on consumer-grade tools: sticky notes,
                group chats, and phone trees. The mismatch is the product gap.
              </p>

              <div className="mt-6 bg-surface border border-[#3f3f46] rounded-xl px-5 py-4">
                <MiniLabel color="text-[#71717a]">Current workflow (observable)</MiniLabel>
                <p className="text-[13px] text-[#a1a1aa] leading-[1.7]">
                  Orders via phone/Zalo — handwritten, Rx matched on paper, OOS by phone with no record,
                  driver handoff with no audit.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 fade-up">
              <div className="text-[10px] font-bold tracking-[0.10em] uppercase text-[#52525b] mb-1">3 Root Causes</div>
              {[
                { n: '01', color: 'text-[#f87171]', title: 'Prescription verification is split across time and space.', body: 'No single moment confirms "this order is legally fulfillable."' },
                { n: '02', color: 'text-[#f0a500]', title: 'OOS has no structured resolution path.', body: 'No record, no substitute workflow, no system-readable outcome.' },
                { n: '03', color: 'text-accent', title: 'Driver handoff creates liability with no audit.', body: 'No chain of custody for controlled substances.' },
              ].map((c) => (
                <Card key={c.n}>
                  <div className="flex items-start gap-4">
                    <span className={`font-serif text-2xl flex-shrink-0 ${c.color}`}>{c.n}</span>
                    <div>
                      <p className="text-[13px] font-medium text-white mb-1">{c.title}</p>
                      <p className="text-[13px] text-[#a1a1aa] leading-[1.6]">{c.body}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SLIDE 04 — USER INSIGHT
      ══════════════════════════════ */}
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>User Insight</SectionLabel><SkillTag>Discovery</SkillTag></SectionHeader>

          <div className="grid gap-16 items-start" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="fade-up">
              <div className="border-l-[3px] border-accent pl-6 mb-6">
                <p className="font-serif text-white leading-[1.5] italic"
                  style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                  "The staff knew what was wrong. They used workarounds so fluently that observing them
                  felt like watching a system designed around broken tools."
                </p>
              </div>
              <p className="text-[14px] text-[#a1a1aa] leading-[1.8]">
                Every manual step was a designed solution to an absent feature. The insight wasn't about
                what was broken — it was about how elegantly they'd adapted to it.
              </p>
            </div>

            <div className="flex flex-col gap-3 fade-up">
              <div className="text-[10px] font-bold tracking-[0.10em] uppercase text-[#52525b] mb-1">Observed workarounds</div>
              {[
                { label: 'Workaround 1', body: 'WhatsApp groups as order status boards — no structure, no audit, real-time chaos.' },
                { label: 'Workaround 2', body: 'Personal phones for buyer OOS calls — no log, no record, no outcome tracking.' },
                { label: 'Workaround 3', body: 'Paper checklists before handoff — often skipped under time pressure, invisible to the system.' },
              ].map((w) => (
                <Card key={w.label}>
                  <MiniLabel>{w.label}</MiniLabel>
                  <p className="text-[13px] text-[#d4d4d8] leading-[1.7]">{w.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SLIDE 05 — NORTH STAR
      ══════════════════════════════ */}
      <section className="px-12 py-20 bg-bg border-b border-[#3f3f46] relative overflow-hidden">
        <div className="absolute pointer-events-none" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '500px', background: 'radial-gradient(ellipse, rgba(167,139,250,0.06) 0%, transparent 70%)' }} />
        <div className="max-w-[900px] mx-auto text-center relative z-10 fade-up">
          <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#52525b] mb-6">North Star</div>
          <h2
            className="font-serif text-white mb-6"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            Auto verified and<br />
            <em className="not-italic text-accent">smart marketplace system</em>
          </h2>
          <div className="w-12 h-px bg-[#27272a] mx-auto my-8" />
          <p className="text-[15px] text-[#a1a1aa] leading-[1.8] max-w-[640px] mx-auto mb-2">
            Every order state is visible at a glance. Every exception triggers a guided resolution.
            Every handoff requires a verified confirmation.
          </p>
          <p className="text-[15px] text-[#71717a] leading-[1.8]">
            The system does the checking — staff make the calls.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10 text-left max-w-[640px] mx-auto">
            <Card>
              <MiniLabel>Rules in</MiniLabel>
              <p className="text-[13px] text-[#d4d4d8] leading-[1.7]">
                Progressive commitment · blocking gates · immutable records at each transition
              </p>
            </Card>
            <Card>
              <MiniLabel color="text-[#71717a]">Rules out</MiniLabel>
              <p className="text-[13px] text-[#d4d4d8] leading-[1.7]">
                Free-form notes · unlogged calls · skippable compliance steps
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SLIDE 06 — DESIGN DECISIONS (overview)
      ══════════════════════════════ */}
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>Design Decisions</SectionLabel><SkillTag>3 Key Choices</SkillTag></SectionHeader>

          <div className="grid gap-4 mb-6 fade-up" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              { n: '01', tag: 'Layout', title: 'Kanban-style dispatch board', body: 'Status-column board replaces linear list. Every order state visible at a glance.' },
              { n: '02', tag: 'Exception handling', title: 'OOS resolution flow', body: 'Call buyer → offer substitute → confirm or cancel. Outcome logged, not described.' },
              { n: '03', tag: 'Compliance gate', title: 'Pre-dispatch sign-off', body: 'Checklist overlay + hold gesture. Dispatch locked until all items verified.' },
            ].map((d) => (
              <div key={d.n} className="bg-bg border border-[#3f3f46] rounded-xl px-6 py-6 relative overflow-hidden">
                <div className="absolute top-0 right-3 font-serif select-none pointer-events-none"
                  style={{ fontSize: '80px', lineHeight: 1, color: 'rgba(167,139,250,0.05)', top: '-8px' }}>
                  {d.n}
                </div>
                <div className="font-serif text-2xl text-accent mb-2">{d.n}</div>
                <div className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#71717a] mb-2">{d.tag}</div>
                <p className="text-[14px] font-medium text-white mb-2">{d.title}</p>
                <p className="text-[13px] text-[#a1a1aa] leading-[1.6]">{d.body}</p>
              </div>
            ))}
          </div>

          <Card className="fade-up">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              <p className="text-[13px] text-[#a1a1aa]">
                Each decision was framed as a tradeoff: what we gained in compliance and clarity vs. what we gave up in speed and simplicity.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* ══════════════════════════════
          SLIDE 07 — DECISION 1: KANBAN BOARD
      ══════════════════════════════ */}
      <section className="px-12 py-20 bg-bg border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader>
            <SectionLabel>Decision 1</SectionLabel>
            <SkillTag>Kanban Board</SkillTag>
          </SectionHeader>

          <h3 className="font-serif text-white mb-8" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', letterSpacing: '-0.02em' }}>
            Kanban-style dispatch board
          </h3>

          <div className="grid gap-6 fade-up" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="flex flex-col gap-4">
              <Card>
                <MiniLabel>What we chose</MiniLabel>
                <p className="text-[13px] text-[#d4d4d8] leading-[1.75]">
                  Replaced a list view with a status-column board. Staff see all orders by state simultaneously —
                  Queue, Preparing, Ready, Done — without scrolling or filtering.
                </p>
              </Card>
              <Card>
                <MiniLabel>StatsBar</MiniLabel>
                <p className="text-[13px] text-[#d4d4d8] leading-[1.75]">
                  Status chips (Queue · Preparing · Ready · Done) separated by a vertical divider from alert tags
                  (OOS · Ctrl). Why: status ≠ alert type. Mixing them creates cognitive load.
                </p>
              </Card>
              <Card>
                <MiniLabel color="text-[#f87171]">Rejected — list view</MiniLabel>
                <p className="text-[13px] text-[#a1a1aa] leading-[1.7]">
                  Simpler for any volume. Rejected: loses spatial status-at-a-glance needed when a driver arrives
                  early and staff need instant priority read.
                </p>
              </Card>
            </div>

            <div className="flex flex-col gap-4">
              <Card>
                <MiniLabel>Why not a list</MiniLabel>
                <p className="text-[13px] text-[#d4d4d8] leading-[1.75]">
                  Lists don't communicate urgency. A kanban column named "OOS" communicates it immediately.
                  Spatial position = priority. No scanning, no filtering.
                </p>
              </Card>
              <Card>
                <MiniLabel>Color system</MiniLabel>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {[
                    { hex: '#7c3aed', label: 'Purple — Queued' },
                    { hex: '#2563eb', label: 'Blue — Preparing' },
                    { hex: '#16a34a', label: 'Green — Ready' },
                    { hex: '#52525b', label: 'Slate — Done' },
                  ].map((c) => (
                    <div key={c.label} className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: c.hex }} />
                      <span className="text-[12px] text-[#a1a1aa]">{c.label}</span>
                    </div>
                  ))}
                </div>
              </Card>
              <Card>
                <MiniLabel color="text-[#f0a500]">Risk + mitigation</MiniLabel>
                <p className="text-[13px] text-[#a1a1aa] leading-[1.7]">
                  Risk: crowded at high volume (120+ orders). Mitigation: compact cards, StatsBar counts visible
                  at a glance without reading individual cards.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SLIDE 08 — DECISION 2: OOS RESOLUTION
      ══════════════════════════════ */}
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader>
            <SectionLabel>Decision 2</SectionLabel>
            <SkillTag>OOS Resolution</SkillTag>
          </SectionHeader>

          <h3 className="font-serif text-white mb-8" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', letterSpacing: '-0.02em' }}>
            OOS resolution flow
          </h3>

          <div className="grid gap-6 fade-up" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="flex flex-col gap-4">
              <Card>
                <MiniLabel>What we chose</MiniLabel>
                <p className="text-[13px] text-[#d4d4d8] leading-[1.75]">
                  When an item goes out of stock, the system triggers a guided 3-step modal.
                  The "Proceed to Sign-off" CTA stays disabled with the label "Resolve OOS items first"
                  until every OOS item is handled — the pharmacist can't skip the loop.
                </p>
              </Card>
              <Card>
                <MiniLabel>Why structured, not free text</MiniLabel>
                <p className="text-[13px] text-[#d4d4d8] leading-[1.75]">
                  The OOS call is a 30-second price confirmation only — not a medical consultation.
                  A structured handler covers 100% of V1 cases and produces machine-readable outcomes.
                  Free-text notes produce data the system can't act on.
                </p>
              </Card>
              <Card>
                <MiniLabel color="text-[#f0a500]">Unstructured OOS was the #1 delay driver</MiniLabel>
                <p className="text-[13px] text-[#a1a1aa] leading-[1.7]">
                  Removing ambiguity from the resolution path removes the delay.
                  Every call is logged automatically on click — no personal phone, no missing records.
                </p>
              </Card>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-[10px] font-bold tracking-[0.10em] uppercase text-[#52525b] mb-1">3-step guided modal</div>
              {[
                { n: '1', label: 'Call buyer', detail: 'In-app call button auto-logs on click. No personal phone needed. Call timestamp recorded automatically.' },
                { n: '2', label: 'Offer substitute', detail: 'Substitute picker shows stock count and price prominently. Same therapeutic function, approved under regulation. The call is a price confirmation — not a medical decision.' },
                { n: '3', label: 'Confirm or cancel', detail: 'One-tap confirmation. Outcome logged as a machine-readable record — not a chat message or sticky note.' },
              ].map((s) => (
                <Card key={s.n} className="flex gap-4">
                  <span className="font-serif text-2xl text-accent flex-shrink-0">{s.n}</span>
                  <div>
                    <p className="text-[13px] font-medium text-white mb-1">{s.label}</p>
                    <p className="text-[12px] text-[#a1a1aa] leading-[1.6]">{s.detail}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SLIDE 09 — DECISION 3: SIGN-OFF
      ══════════════════════════════ */}
      <section className="px-12 py-20 bg-bg border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader>
            <SectionLabel>Decision 3</SectionLabel>
            <SkillTag>Pre-dispatch Sign-off</SkillTag>
          </SectionHeader>

          <h3 className="font-serif text-white mb-8" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', letterSpacing: '-0.02em' }}>
            Pre-dispatch sign-off
          </h3>

          <div className="grid gap-6 fade-up" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="flex flex-col gap-4">
              <Card>
                <MiniLabel>What we chose</MiniLabel>
                <p className="text-[13px] text-[#d4d4d8] leading-[1.75]">
                  A checklist overlay locks the dispatch action until every item is verified.
                  After all 5 checks, a 1.5s hold gesture is required to confirm — intentional
                  friction for an irreversible action.
                </p>
              </Card>
              <Card>
                <MiniLabel>Why hold gesture, not a tap</MiniLabel>
                <p className="text-[13px] text-[#d4d4d8] leading-[1.75]">
                  Medical device UI precedent. The hold makes the gesture feel consequential.
                  A simple button is too easy to tap through without reading. The progress bar
                  signals to the user that their intent is being registered.
                </p>
              </Card>
              <Card>
                <MiniLabel color="text-[#f87171]">Rejected — simple button</MiniLabel>
                <p className="text-[13px] text-[#a1a1aa] leading-[1.7]">
                  Fast, but too easy to tap through without reading the checklist.
                  Compliance requires intentional confirmation, not a reflexive click.
                </p>
              </Card>
              <Card>
                <MiniLabel>Why not paper</MiniLabel>
                <p className="text-[13px] text-[#a1a1aa] leading-[1.7]">
                  Paper checklists are invisible to the system. A digital gate ties the sign-off
                  to the dispatch event — auditable, consistent, not bypassable.
                </p>
              </Card>
            </div>

            <div>
              <Card>
                <MiniLabel>5-item checklist</MiniLabel>
                <div className="flex flex-col gap-3 mt-3">
                  {[
                    'All items packed and sealed',
                    'Cold chain bag secured (if applicable)',
                    'Prescription documents included',
                    'Patient ID verified against order',
                    'Order ID matches dispatch record',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded border border-[rgba(167,139,250,0.4)] bg-[rgba(167,139,250,0.08)] flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-sm bg-accent" />
                      </div>
                      <span className="text-[13px] text-[#d4d4d8]">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SLIDE 10 — DEMO / SCREENS
      ══════════════════════════════ */}
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>Screens + Demo</SectionLabel><SkillTag>4 Scenes</SkillTag></SectionHeader>

          <p className="text-[14px] text-[#a1a1aa] leading-[1.7] mb-12 max-w-[640px]">
            Each scene follows one order through a complete workflow segment — from the dispatch
            board overview to the final driver handoff confirmation.
          </p>

          {/* Scene 1 */}
          <div className="mb-14 fade-up">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-accent">Scene 1 · 45s</span>
              <span className="text-[13px] font-medium text-white">Board Overview</span>
            </div>
            <p className="text-[13px] text-[#71717a] mb-4">
              Board overview → StatsBar → open Rx order → prescription drawer → "Prepare this order"
            </p>
            <div className="rounded-2xl overflow-hidden border border-[#3f3f46]">
              <img src="/images/getnow/scene1.png" alt="Kanban dispatch board" className="w-full h-auto block" loading="lazy" />
            </div>
          </div>

          {/* Scene 2 */}
          <div className="mb-14 fade-up">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-accent">Scene 2 · 75s</span>
              <span className="text-[13px] font-medium text-white">OOS Resolution</span>
            </div>
            <p className="text-[13px] text-[#71717a] mb-4">
              OOS order → "Call buyer" auto-logs, no personal phone → substitute picker, price shown → confirm → CTA unlocks
            </p>
            <div className="flex flex-col gap-3">
              {['scene2a', 'scene2b', 'scene2c'].map((s, i) => (
                <div key={s} className="rounded-xl overflow-hidden border border-[#3f3f46]">
                  <img src={`/images/getnow/${s}.png`} alt={`OOS step ${i + 1}`} className="w-full h-auto block" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Scene 3 */}
          <div className="mb-14 fade-up">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-accent">Scene 3 · 60s</span>
              <span className="text-[13px] font-medium text-white">Pre-dispatch Sign-off</span>
            </div>
            <p className="text-[13px] text-[#71717a] mb-4">
              All 5 checklist items → hold gesture → progress bar fills → order moves to Ready
            </p>
            <div className="rounded-2xl overflow-hidden border border-[#3f3f46]">
              <img src="/images/getnow/scene3.png" alt="Pre-dispatch sign-off" className="w-full h-auto block" loading="lazy" />
            </div>
          </div>

          {/* Scene 4 */}
          <div className="fade-up">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-accent">Scene 4 · 45s</span>
              <span className="text-[13px] font-medium text-white">Driver Handoff</span>
            </div>
            <p className="text-[13px] text-[#71717a] mb-4">
              Driver card → Order ID displayed large → pharmacist reads back → ID match confirmed → Confirm Handoff → Done
            </p>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl overflow-hidden border border-[#3f3f46]">
                <img src="/images/getnow/scene4a.png" alt="Handoff — awaiting confirmation" className="w-full h-auto block" loading="lazy" />
              </div>
              <div className="rounded-xl overflow-hidden border border-[#3f3f46]">
                <img src="/images/getnow/scene4b.png" alt="Handoff — ID confirmed, button enabled" className="w-full h-auto block" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SLIDE 11 — TRADEOFFS
      ══════════════════════════════ */}
      <section className="px-12 py-20 bg-bg border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>Tradeoffs</SectionLabel><SkillTag>Product Thinking</SkillTag></SectionHeader>

          <div className="grid gap-16 items-start" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="fade-up">
              <div
                className="font-serif font-normal text-white leading-[1.2] mb-6"
                style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.02em' }}
              >
                Every gate is a choice.<br />
                <em className="not-italic text-accent">These are the arguments.</em>
              </div>
              <p className="text-[14px] text-[#a1a1aa] leading-[1.8]">
                Compliance-first design means deliberate friction. Each tradeoff below was made with
                a clear rationale — not as a default, but as a reasoned position that can be revisited
                with data from V1.
              </p>
            </div>

            <div className="flex flex-col gap-3 fade-up">
              {[
                { title: 'Friction vs. speed', body: 'Blocking gates and hold gestures slow pharmacists down by ~10 seconds per order. A compliance failure costs far more. Business constraint wins over pure UX speed.' },
                { title: 'Single role vs. multi-role', body: 'One pharmacist owns an order end-to-end in V1. Most GetNow partners are single-staff. Multi-role (preparer + verifier) adds complexity most won\'t benefit from. Data model supports it for Phase 2.' },
                { title: 'Desktop-first vs. mobile-first', body: 'Kanban + master-detail needs horizontal space. 375px collapses the spatial benefit. Mobile "quick actions" view is Phase 2 — triggered by usage data, not assumption.' },
                { title: 'Structured OOS vs. free text', body: 'The OOS call is a price confirmation only. Structured handler covers 100% of V1 cases and produces machine-readable outcomes. Free-text produces data the system can\'t act on.' },
                { title: 'Rx-first scope vs. full OTC', body: 'Narrow, high-compliance scope builds trust with pharmacies and regulators. Expanding the OTC list after a compliance track record is far easier than retrofitting compliance onto a broad catalogue.' },
              ].map((t, i) => (
                <div key={i} className="bg-surface border border-[#3f3f46] rounded-xl px-5 py-4 flex gap-4">
                  <div className="w-5 h-5 rounded-full bg-[rgba(167,139,250,0.12)] border border-[rgba(167,139,250,0.25)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white mb-1">{t.title}</p>
                    <p className="text-[12px] text-[#a1a1aa] leading-[1.7]">{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SLIDE 12 — WHAT'S NEXT / RELEASE PLAN
      ══════════════════════════════ */}
      <section className="px-12 py-20 bg-surface border-b border-[#3f3f46]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader><SectionLabel>What's Next</SectionLabel><SkillTag>Release Plan</SkillTag></SectionHeader>

          <div className="grid gap-6 fade-up" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {/* V1 */}
            <div className="bg-bg border border-[#3f3f46] rounded-2xl p-7">
              <MiniLabel>V1 — First Release</MiniLabel>
              <p className="text-[16px] font-semibold text-white mb-5">The 4-tier funnel, fully wired</p>
              <div className="flex flex-col gap-2.5 mb-6">
                {[
                  'Kanban board + StatsBar — core dispatch workspace',
                  'Queue step (intake gate, Rx/Ctrl flag)',
                  'Detail step (OOS handler, substitute picker, in-app call log)',
                  'Sign-off step (5-item checklist + hold gesture)',
                  'Handoff step (Order ID read-back, driver card)',
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-[13px] text-[#d4d4d8] leading-[1.6]">{f}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#27272a] pt-4">
                <MiniLabel color="text-[#52525b]">Go signal</MiniLabel>
                <p className="text-[12px] text-[#71717a] leading-[1.6]">
                  5 pharmacies complete 20+ orders end-to-end without support.
                  Audit log matches physical paperwork in a spot check.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-bg border border-[#3f3f46] rounded-2xl p-7">
              <MiniLabel color="text-[#52525b]">Phase 2 — After V1 data</MiniLabel>
              <p className="text-[16px] font-semibold text-white mb-5">Expand when the foundation is proven</p>
              <div className="flex flex-col gap-3 mb-6">
                {[
                  { title: 'OCR-assisted Rx verification', why: 'Build after V1 confirms pharmacists trust the digital workflow' },
                  { title: 'Prescription Wallet', why: 'Needs V1 to prove Rx storage works legally first' },
                  { title: 'Family member ordering on behalf', why: 'Proxy identity introduces a different call confirmation flow; size the edge case from V1 data' },
                  { title: 'Bulk OOS management', why: 'When OOS spans many orders; requires cross-order data model' },
                  { title: 'Order transfer to nearest pharmacy', why: 'Network-level feature; needs sufficient pharmacy density' },
                  { title: 'Expanded OTC catalogue', why: 'Broaden once the platform has a compliance track record' },
                  { title: 'Multi-staff roles', why: 'Triggered by usage data showing scale beyond single-operator' },
                ].map((p, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3f3f46] mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-[13px] text-[#d4d4d8]">{p.title}</p>
                      <p className="text-[11px] text-[#71717a] leading-[1.5]">{p.why}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#27272a] pt-4">
                <MiniLabel color="text-[#52525b]">Phase 3</MiniLabel>
                <p className="text-[12px] text-[#71717a] leading-[1.6]">
                  Barcode picking · predictive OOS alerts · analytics dashboard · national drug database API integration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SLIDE 13 — CLOSING
      ══════════════════════════════ */}
      <section className="px-12 py-20 bg-bg">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center py-12 fade-up">
            <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#52525b] mb-8">Thank you</div>
            <h2 className="font-serif text-white mb-3" style={{ fontSize: 'clamp(36px, 5vw, 60px)', letterSpacing: '-0.025em' }}>
              GetNow
            </h2>
            <p className="text-[17px] text-[#a1a1aa] mb-2">Auto verified and smart marketplace system</p>
            <div className="w-12 h-px bg-[#27272a] mx-auto my-8" />
            <p className="text-[14px] text-[#71717a]">Product Designer: Hien Nguyen</p>
            <p className="text-[12px] text-[#52525b] mt-1">Pharmacy Desktop · Dispatch + Compliance · 2026</p>
          </div>

          <div className="mt-4 pt-8 border-t border-[#27272a] flex items-center justify-between">
            <p className="text-[12px] text-[#52525b]">Interactive prototype and documentation</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[13px] text-accent hover:text-white transition-colors"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to portfolio
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
