import { useEffect, useRef } from 'react';

const SKILL_GROUPS = [
  {
    label: 'Design',
    tags: [
      { label: 'Enterprise UX', hi: false },
      { label: 'Design Systems', hi: false },
      { label: 'Interaction Design', hi: false },
      { label: 'User Research', hi: false },
    ],
  },
  {
    label: 'AI & Code',
    tags: [
      { label: 'Claude Code', hi: true },
      { label: 'Figma Make', hi: true },
      { label: 'VSCode', hi: true },
      { label: 'Rapid Prototyping', hi: false },
    ],
  },
  {
    label: 'Collaboration',
    tags: [
      { label: 'PM Alignment', hi: false },
      { label: 'Engineering', hi: false },
      { label: 'QA Partnership', hi: false },
      { label: 'Stakeholder Mgmt', hi: false },
    ],
  },
];

const PROOF = [
  {
    num: '70%',
    title: 'Time saved on test case creation',
    sub: 'Shipped AI feature at Katalon — 100% voluntary team adoption.',
  },
  {
    num: '0→1',
    title: 'First AI feature in QA workflow',
    sub: 'Set the design pattern for all future AI features in the product.',
  },
  {
    num: '3w→5d',
    title: 'Design-to-handoff compression',
    sub: 'AI-augmented workflow across research, prototype, and delivery.',
  },
  {
    num: 'Zero',
    title: 'Design drift at launch',
    sub: 'Stayed embedded post-handoff — shipped experience matched intent.',
  },
];

export const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.12 }
    );
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center px-16 pt-[120px] pb-20 overflow-hidden"
      id="hero"
    >
      {/* Grid background */}
      <div className="hero-grid-bg" />
      {/* Purple glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-200px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '700px',
          background: 'radial-gradient(ellipse, rgba(167,139,250,0.10) 0%, transparent 65%)',
        }}
      />

      <div
        className="relative z-10 w-full max-w-[1280px] mx-auto grid items-start gap-20"
        style={{ gridTemplateColumns: '1fr 380px' }}
      >
        {/* ── LEFT: Content ── */}
        <div>
          {/* Identity bar */}
          <div className="flex items-center gap-2.5 mb-7 fade-up visible">
            <span
              className="w-[7px] h-[7px] rounded-full bg-[#34d399] flex-shrink-0"
              style={{
                boxShadow: '0 0 0 3px rgba(52,211,153,0.18)',
                animation: 'pulse-dot 2.4s ease-in-out infinite',
              }}
            />
            <span className="text-[13px] text-[#a1a1aa]">
              Senior Product Designer at{' '}
              <strong className="text-white font-medium">Katalon</strong>
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-serif font-normal text-white mb-6 fade-up visible"
            style={{
              fontSize: 'clamp(36px, 5vw, 68px)',
              lineHeight: 1.04,
              letterSpacing: '-0.025em',
            }}
          >
            Designing products<br />
            that solve real problems —<br />
            <em className="not-italic text-accent">not just polished screens.</em>
          </h1>

          {/* Sub */}
          <p className="text-base text-[#a1a1aa] max-w-[540px] leading-[1.75] mb-9 fade-up visible">
            6 years across startups and enterprise, designing complex products across various domains.
            In the AI era, I know how to help businesses ship real solutions that deliver value to real users.
          </p>

          {/* Skill groups */}
          <div className="flex flex-col gap-5 mb-11 fade-up visible">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label} className="flex flex-col gap-2">
                <div className="text-[10px] font-bold tracking-[0.10em] uppercase text-[#a1a1aa]">
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.tags.map((t) => (
                    <span
                      key={t.label}
                      className="text-[12px] font-medium px-3 py-1 rounded-full border"
                      style={
                        t.hi
                          ? { color: '#a78bfa', background: 'rgba(167,139,250,0.08)', borderColor: 'rgba(167,139,250,0.22)' }
                          : { color: '#a1a1aa', background: '#18181b', borderColor: '#3f3f46' }
                      }
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-5 fade-up visible">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-accent font-semibold px-6 py-3 rounded-full text-[14px] tracking-[0.02em] hover:opacity-90 hover:-translate-y-px transition-all no-underline"
              style={{ color: '#09090b' }}
            >
              View my work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-[14px] text-[#a1a1aa] hover:text-white transition-colors group no-underline"
            >
              See case studies
              <svg
                className="transition-transform group-hover:translate-x-1"
                width="14" height="14" viewBox="0 0 14 14" fill="none"
              >
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── RIGHT: Proof of impact ── */}
        <div
          className="flex flex-col gap-px bg-[#3f3f46] border border-[#3f3f46] rounded-2xl overflow-hidden fade-up visible mt-[52px]"
        >
          <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#a1a1aa] px-[22px] pt-4 pb-0 bg-surface">
            Proof of impact
          </div>
          {PROOF.map((p) => (
            <div
              key={p.num}
              className="bg-surface flex items-center gap-[18px] px-[22px] py-[18px] hover:bg-[#3f3f46] transition-colors"
            >
              <div
                className="font-serif text-accent flex-shrink-0 leading-none"
                style={{ fontSize: '28px', minWidth: '72px' }}
              >
                {p.num}
              </div>
              <div>
                <div className="text-[12px] font-semibold text-white mb-0.5">{p.title}</div>
                <div className="text-[11px] text-[#a1a1aa] leading-[1.5]">{p.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
