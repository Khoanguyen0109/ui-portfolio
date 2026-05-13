import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to all `.fade-up` elements in the document.
 * Adds `.visible` class when 12% of the element is in view.
 * Call this once at the top-level page component.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
