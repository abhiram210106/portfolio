import React, { useState, useEffect } from 'react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 ease-spring active:scale-90 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto hover:scale-110'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};
