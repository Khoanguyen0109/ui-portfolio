import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NavBar = ({ variant = 'home' }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isDetail = location.pathname.startsWith('/details/');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(9,9,11,0.92)] backdrop-blur-sm border-b border-[#3f3f46]'
          : 'border-b border-transparent'
      }`}
    >
      <Link
        to="/"
        className="text-[13px] font-medium tracking-[0.08em] uppercase text-white no-underline"
      >
        Hien Nguyen
      </Link>

      {isDetail ? (
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[13px] text-[#a1a1aa] no-underline hover:text-white transition-colors group"
        >
          <svg
            className="transition-transform group-hover:-translate-x-1"
            width="14" height="14" viewBox="0 0 14 14" fill="none"
          >
            <path d="M12 7H2M7 2L2 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to work
        </Link>
      ) : (
        <ul className="flex gap-9 list-none">
          <li>
            <a href="#work" className="text-[13px] text-[#a1a1aa] no-underline tracking-[0.04em] hover:text-white transition-colors">
              Work
            </a>
          </li>
          <li>
            <a href="#toolkit" className="text-[13px] text-[#a1a1aa] no-underline tracking-[0.04em] hover:text-white transition-colors">
              AI Toolkit
            </a>
          </li>
          <li>
            <a href="#about" className="text-[13px] text-[#a1a1aa] no-underline tracking-[0.04em] hover:text-white transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[13px] font-medium text-bg bg-accent px-5 py-2 rounded-full tracking-[0.04em] hover:opacity-85 transition-opacity no-underline"
              style={{ color: '#09090b' }}
            >
              Get in touch
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};
