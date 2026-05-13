import { useEffect, useRef } from 'react';

const SKILLS = [
  'Enterprise product design at scale',
  'AI-augmented research & rapid prototyping',
  'Cross-functional stakeholder alignment',
];

const BELIEFS = [
  {
    label: 'What AI accelerates',
    text: 'The execution gap between a good idea and a tested prototype. I use AI to close that gap in hours, not weeks.',
  },
  {
    label: 'What AI cannot replace',
    text: "The judgment to know which problem is worth solving. Empathy for users who can't articulate what they need. The political awareness to ship something in a real organization.",
  },
  {
    label: 'What that means for your team',
    text: 'You get a senior designer who ships at the pace of a team of three, without sacrificing the strategic depth that makes the work stick.',
  },
];

export const About = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.12 }
    );
    if (cardsRef.current) {
      cardsRef.current.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="px-12 py-24 bg-surface border-y border-[#3f3f46]"
      id="about"
    >
      <div className="grid gap-20" style={{ gridTemplateColumns: '1fr 1fr' }}>
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#a1a1aa] mb-5 before:content-[''] before:w-4 before:h-px before:bg-[#a1a1aa]">
            About me
          </div>
          <h2
            className="font-serif font-normal text-white leading-[1.15] mb-6"
            style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', letterSpacing: '-0.02em' }}
          >
            Design is clarity.<br />
            <em className="not-italic text-accent">AI is how I</em><br />
            get there faster.
          </h2>
          <p className="text-[15px] text-[#a1a1aa] leading-[1.75] mb-9">
            Great enterprise design reduces organizational complexity into clarity for users.
            AI doesn't change that goal — it removes the distance between insight and execution.
            I use it to think faster, explore wider, and stay in the decisions that actually matter.
          </p>
          <div className="flex flex-col gap-3">
            {SKILLS.map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 text-[14px] text-white before:content-[''] before:w-5 before:h-px before:bg-accent before:flex-shrink-0"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Right — belief cards */}
        <div ref={cardsRef} className="flex flex-col gap-px">
          {BELIEFS.map((b, i) => (
            <div
              key={b.label}
              className={`fade-up bg-bg px-7 py-6 transition-colors hover:bg-[#0f0f0f] ${
                i === 0
                  ? 'rounded-t-xl'
                  : i === BELIEFS.length - 1
                  ? 'rounded-b-xl'
                  : ''
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-[11px] font-semibold tracking-[0.10em] uppercase text-accent mb-2">
                {b.label}
              </div>
              <div className="text-[14px] text-[#999] leading-[1.65]">{b.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
