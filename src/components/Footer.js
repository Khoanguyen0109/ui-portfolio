export const Footer = () => (
  <footer className="border-t border-[#3f3f46] px-12 py-7 flex justify-between items-center bg-bg">
    <p className="text-[12px] text-[#a1a1aa] tracking-[0.04em]">
      © 2026 Hien Nguyen · Built with React, deployed on Vercel
    </p>
    <ul className="flex gap-6 list-none">
      {['Work', 'AI Process', 'About', 'Email'].map((l) => (
        <li key={l}>
          <a
            href={l === 'Email' ? 'mailto:hien.nguyen@email.com' : `#${l.toLowerCase().replace(' ', '')}`}
            className="text-[12px] text-[#a1a1aa] no-underline hover:text-white transition-colors tracking-[0.04em]"
          >
            {l}
          </a>
        </li>
      ))}
    </ul>
  </footer>
);
