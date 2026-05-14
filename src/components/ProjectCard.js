import { Link } from 'react-router-dom';

export const ProjectCard = ({ project, index }) => {
  const { id, name, tag, category, year, impact, chips, thumbBg, thumbnail } = project;

  const cornerClass = [
    'rounded-tl-2xl',
    'rounded-tr-2xl',
    'rounded-bl-2xl',
    'rounded-br-2xl',
  ][index] || '';

  return (
    <Link
      to={`/details/${id}`}
      className={`flex flex-col bg-surface overflow-hidden text-white no-underline cursor-pointer transition-colors duration-250 hover:bg-[#18181b] group ${cornerClass}`}
      style={{ textDecoration: 'none', minHeight: '460px' }}
    >
      {/* Thumbnail */}
      <div
        className="overflow-hidden relative"
        style={{ height: '260px', background: thumbBg || '#141414' }}
      >
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-5xl opacity-[0.12] transition-transform duration-500 group-hover:scale-[1.04]"
            style={{ background: thumbBg }}
          />
        )}
        {/* Tag pill */}
        <span className="absolute top-4 left-4 text-[11px] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full bg-accent"
          style={{ color: '#09090b' }}>
          {tag}
        </span>
        {/* Arrow */}
        <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center opacity-0 translate-x-[-4px] translate-y-[4px] transition-all duration-250 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2v7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>

      {/* Body */}
      <div className="flex-1 px-7 pt-7 pb-8">
        <div className="text-[12px] text-[#a1a1aa] tracking-[0.05em] uppercase mb-2.5">
          {category} · {year}
        </div>
        <div className="text-[20px] font-semibold text-white leading-[1.3] mb-3">
          {name}
        </div>
        <div className="text-[13px] text-[#888] leading-[1.6]">
          {impact?.split('**').map((part, i) =>
            i % 2 === 1 ? (
              <strong key={i} className="text-accent font-semibold">{part}</strong>
            ) : (
              part
            )
          )}
        </div>
        {chips && (
          <div className="flex flex-wrap gap-1.5 mt-5">
            {chips.map((c) => (
              <span
                key={c}
                className="text-[11px] text-[#a1a1aa] bg-[rgba(255,255,255,0.04)] border border-[#3f3f46] px-2.5 py-0.5 rounded-full tracking-[0.03em]"
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
