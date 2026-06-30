import { useEffect, useRef } from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data';

export const Work = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.08 }
    );
    if (gridRef.current) {
      gridRef.current.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-12 py-24 bg-bg" id="work">
      {/* Header */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#a1a1aa] mb-5 before:content-[''] before:w-4 before:h-px before:bg-[#a1a1aa]">
            Selected Work
          </div>
          <h2
            className="font-serif font-normal text-white leading-[1.1]"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em' }}
          >
            {projects.filter(p => !p.hidden).length} case studies
          </h2>
        </div>
        <a
          href="#work"
          className="inline-flex items-center gap-1.5 text-[13px] text-[#a1a1aa] no-underline hover:text-white transition-colors group tracking-[0.03em]"
        >
          View all work
          <svg
            className="transition-transform group-hover:translate-x-1"
            width="14" height="14" viewBox="0 0 14 14" fill="none"
          >
            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* 2-col grid */}
      <div
        ref={gridRef}
        className="grid gap-5"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        {projects.filter(p => !p.hidden).map((project, i) => (
          <div
            key={project.id}
            className="fade-up"
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
};
