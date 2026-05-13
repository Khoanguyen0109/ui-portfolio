import { useEffect, useRef } from 'react';

const CHIPS = [
  { label: 'Enterprise UX', hi: false },
  { label: 'AI-Augmented Design', hi: true },
  { label: 'Design Systems', hi: false },
  { label: 'Rapid Prototyping', hi: true },
  { label: 'Figma', hi: false },
  { label: 'Claude + VSCode', hi: true },
];

const STATS = [
  { number: '6', label: 'Years enterprise design' },
  { number: '4×', label: 'Faster ideation cycles' },
  { number: '100%', label: 'Adoption on shipped AI feature' },
  { number: '3w→5d', label: 'Design-to-handoff' },
];

export const Hero = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.12 }
    );
    if (statsRef.current) {
      statsRef.current.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-12 pt-[120px] pb-20 overflow-hidden"
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

      <div className="relative z-10 max-w-[820px]">
        {/* Identity bar */}
        <div className="flex items-center gap-2.5 mb-7">
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
          className="font-serif font-normal text-white mb-6"
          style={{
            fontSize: 'clamp(44px, 6.5vw, 88px)',
            lineHeight: 1.04,
            letterSpacing: '-0.025em',
          }}
        >
          Adaptive designer.<br />
          I solve every problem<br />
          <em className="not-italic text-accent">faster with AI.</em>
        </h1>

        {/* Sub */}
        <p className="text-base text-[#a1a1aa] max-w-[540px] leading-[1.75] mb-8">
          6 years across startup and enterprise — from 0→1 products to scaled design systems.{' '}
          <strong className="text-[#d4d4d8] font-medium">I leverage Claude, Figma Make &amp; VSCode</strong>{' '}
          to compress every phase and ship at a speed no traditional workflow can match.
        </p>

        {/* Chips */}
        <div className="flex flex-wrap gap-2 mb-11">
          {CHIPS.map((c) => (
            <span
              key={c.label}
              className="text-[11px] font-semibold tracking-[0.05em] px-3.5 py-1 rounded-full border"
              style={
                c.hi
                  ? {
                      color: '#a78bfa',
                      background: 'rgba(167,139,250,0.08)',
                      borderColor: 'rgba(167,139,250,0.22)',
                    }
                  : {
                      color: '#71717a',
                      background: '#18181b',
                      borderColor: '#3f3f46',
                    }
              }
            >
              {c.label}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-5">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-accent font-semibold px-6 py-3 rounded-full text-[14px] tracking-[0.02em] hover:opacity-90 hover:-translate-y-px transition-all no-underline"
            style={{ color: '#09090b' }}
          >
            View my work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#toolkit"
            className="inline-flex items-center gap-2 text-[14px] text-[#a1a1aa] hover:text-white transition-colors group no-underline"
          >
            See my AI process
            <svg
              className="transition-transform group-hover:translate-x-1"
              width="14" height="14" viewBox="0 0 14 14" fill="none"
            >
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex mt-16 pt-10 border-t border-[#3f3f46]"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="fade-up flex-1 pr-8 border-r border-[#3f3f46] mr-8 last:border-r-0 last:mr-0 last:pr-0"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className="font-serif text-white mb-1.5"
                style={{ fontSize: '34px', lineHeight: 1 }}
              >
                {s.number}
              </div>
              <div className="text-[11px] text-[#a1a1aa] tracking-[0.06em] uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
