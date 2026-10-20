import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 120);

      // Detect active section for indicator
      const sections = ['about', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth px-3.5 2xs:px-4 sm:px-8 pointer-events-none ${
        isScrolled
          ? 'py-3 sm:py-4 opacity-100 translate-y-0'
          : 'py-4 sm:py-6 opacity-0 -translate-y-4'
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Monogram Brand */}
        <a
          href="#"
          aria-label="Vaka Abhiram - Back to top"
          className="group flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold font-spaceGrotesk shadow-sm">
            VA
          </div>
          <span className="hidden xs:inline text-xs font-bold font-spaceGrotesk tracking-wide text-neutral-200 group-hover:text-white">
            Vaka Abhiram
          </span>
        </a>

        {/* Floating Nav Pill */}
        <nav
          aria-label="Main Navigation"
          className="flex items-center space-x-1 sm:space-x-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/10 shadow-lg"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-[11px] 2xs:text-xs sm:text-sm font-semibold px-2.5 2xs:px-3 py-1 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-white/15 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Quick Social Links */}
        <div className="flex items-center space-x-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/10 shadow-lg">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label="GitHub Profile"
            className="p-1 sm:p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={portfolioData.personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
            className="p-1 sm:p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
