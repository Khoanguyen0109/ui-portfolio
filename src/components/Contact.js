export const Contact = () => (
  <section
    className="px-12 text-center bg-bg"
    style={{ paddingTop: '120px', paddingBottom: '120px' }}
    id="contact"
  >
    <div
      className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#a1a1aa] mb-5 justify-center before:content-[''] before:w-4 before:h-px before:bg-[#a1a1aa]"
    >
      Let's talk
    </div>
    <h2
      className="font-serif font-normal text-white leading-[1.1] mb-5"
      style={{ fontSize: 'clamp(36px, 5vw, 68px)', letterSpacing: '-0.02em' }}
    >
      Ready to build<br />
      <em className="not-italic text-accent">something great?</em>
    </h2>
    <p className="text-[16px] text-[#a1a1aa] max-w-[420px] mx-auto mb-11 leading-[1.7]">
      Open to Senior Product Designer roles at companies building complex, meaningful enterprise software.
    </p>
    <div className="flex justify-center gap-4">
      <a
        href="mailto:hien.nguyen@email.com"
        className="inline-flex items-center gap-2 bg-accent font-semibold px-6 py-3 rounded-full text-[14px] tracking-[0.02em] hover:opacity-90 hover:-translate-y-px transition-all no-underline"
        style={{ color: '#09090b' }}
      >
        Send me an email
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/hien-nguyen-449761181/"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-[14px] text-[#a1a1aa] hover:text-white transition-colors group no-underline"
      >
        View LinkedIn
        <svg
          className="transition-transform group-hover:translate-x-1"
          width="14" height="14" viewBox="0 0 14 14" fill="none"
        >
          <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  </section>
);
