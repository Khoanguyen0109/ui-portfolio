import { useEffect, useRef } from 'react';

const PHASES = [
  {
    num: 'Phase 01',
    icon: '🔍',
    title: 'Research &\nSynthesis',
    desc: 'Define sharp research questions. Conduct interviews. Let AI turn hours of transcripts into structured insight maps.',
    result: '6hrs of user interviews → structured insight clusters in 45 minutes, not 3 days.',
    tools: ['Claude', 'Figma FigJam'],
  },
  {
    num: 'Phase 02',
    icon: '💡',
    title: 'Ideation &\nExploration',
    desc: 'Define constraints and design principles. Use AI to generate 20+ concept directions to react to — not start from blank.',
    result: 'Stakeholder review on day 3, not day 10. 4× more concepts explored per sprint.',
    tools: ['Claude Code', 'Figma'],
  },
  {
    num: 'Phase 03',
    icon: '⚡',
    title: 'Prototyping &\nHandoff',
    desc: 'Make the critical design decisions. Use AI to generate production-ready code, specs, and accessibility documentation.',
    result: 'Design-to-handoff reduced from 3 weeks to 5 days. Zero spec ambiguity for engineering.',
    tools: ['Claude Code', 'VSCode', 'Figma Dev Mode'],
  },
  {
    num: 'Phase 04',
    icon: '🔁',
    title: 'Validation &\nIteration',
    desc: 'Interpret user signals and make judgment calls. Use AI to synthesize test notes and draft iteration hypotheses.',
    result: 'Usability test synthesis in 30 minutes. Stakeholder updates drafted automatically from findings.',
    tools: ['Claude', 'Figma'],
  },
];

export const AIToolkit = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.12 }
    );
    if (gridRef.current) {
      gridRef.current.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-12 py-24 bg-bg" id="toolkit">
      {/* Section label */}
      <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#a1a1aa] mb-5 before:content-[''] before:w-4 before:h-px before:bg-[#a1a1aa]">
        My Process
      </div>

      {/* Header */}
      <div className="flex justify-between items-end mb-15 gap-10 mb-14">
        <h2
          className="font-serif font-normal text-white leading-[1.1]"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em', maxWidth: '480px' }}
        >
          An{' '}
          <em className="not-italic text-accent">AI-augmented</em>
          <br />
          design workflow
        </h2>
        <p className="max-w-[320px] text-sm text-[#a1a1aa] leading-[1.7] text-right">
          I don't use AI to replace design thinking. I use it to eliminate the distance between a decision and its expression.
        </p>
      </div>

      {/* 4-col grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-4 gap-px bg-[#3f3f46] border border-[#3f3f46] rounded-2xl overflow-hidden"
        style={{ gridTemplateColumns: 'repeat(4,1fr)' }}
      >
        {PHASES.map((p, i) => (
          <div
            key={p.num}
            className="fade-up bg-surface px-8 py-9 relative cursor-default transition-colors duration-250 group hover:bg-[#18181b]"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="text-[11px] font-semibold tracking-[0.10em] text-accent uppercase mb-5">
              {p.num}
            </div>
            <div className="w-10 h-10 rounded-[10px] bg-[rgba(167,139,250,0.10)] flex items-center justify-center mb-5 text-lg">
              {p.icon}
            </div>
            <div className="text-[16px] font-semibold text-white mb-3 leading-[1.3] whitespace-pre-line">
              {p.title}
            </div>
            <div className="text-[13px] text-[#a1a1aa] leading-[1.65]">{p.desc}</div>

            {/* Expand on hover */}
            <div
              className="overflow-hidden transition-all duration-350 ease-out mt-5"
              style={{ maxHeight: 0, opacity: 0 }}
              ref={(el) => {
                if (!el) return;
                const card = el.closest('.group');
                const enter = () => {
                  el.style.maxHeight = '120px';
                  el.style.opacity = '1';
                };
                const leave = () => {
                  el.style.maxHeight = '0';
                  el.style.opacity = '0';
                };
                card?.addEventListener('mouseenter', enter);
                card?.addEventListener('mouseleave', leave);
              }}
            >
              <p className="text-[12px] text-[#888] leading-[1.55] border-l-2 border-[#3f3f46] pl-3 mb-4">
                {p.result}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tools.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium text-accent bg-[rgba(167,139,250,0.10)] px-2.5 py-1 rounded-full tracking-[0.04em]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
