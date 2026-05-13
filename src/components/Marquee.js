const ITEMS = [
  'Figma',
  'Claude AI',
  'Enterprise UX',
  'Design Systems',
  'VSCode',
  'AI-Augmented Design',
  'Rapid Prototyping',
  'User Research Synthesis',
  'Stakeholder Alignment',
];

export const Marquee = () => (
  <div className="border-y border-[#3f3f46] py-4 overflow-hidden bg-[#18181b]">
    <div className="marquee-track">
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-4 px-8 text-[12px] font-medium tracking-[0.10em] uppercase text-[#a1a1aa]"
        >
          <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
          {item}
        </span>
      ))}
    </div>
  </div>
);
