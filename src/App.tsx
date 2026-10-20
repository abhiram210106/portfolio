import React from 'react';
import { portfolioData } from './data/portfolioData';
import { Hero } from './components/Hero';
import { AboutCard } from './components/AboutCard';
import { SectionHeader } from './components/SectionHeader';
import { ProjectsGrid } from './components/ProjectsGrid';
import { ShowcaseGrid } from './components/ShowcaseGrid';
import { ContactCard } from './components/ContactCard';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { BackToTop } from './components/BackToTop';
import { LightningIcon, SparklesIcon, ChatIcon } from './components/Icons';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full selection:bg-blue-500 selection:text-white bg-neutral-900">
      {/* Premium Custom Cursor for desktop and hybrid devices */}
      <CustomCursor />

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Floating Back to Top Button */}
      <BackToTop />

      <div className="relative bg-neutral-900 w-full max-w-full">
        {/* Full-screen Hero Section with parallax placement */}
        <Hero />

        {/* Scrollable Content Stack */}
        <div className="pt-[100vh] sm:pt-[100dvh] space-y-4 sm:space-y-6 relative z-10 w-full max-w-full">
          {/* About Section */}
          <AboutCard />

          {/* Section: I make things. */}
          <SectionHeader
            title={portfolioData.makeThings.heading}
            description={portfolioData.makeThings.subheading}
            icon={<LightningIcon />}
          />

          {/* Projects Grid */}
          <ProjectsGrid />

          {/* Section: I craft experiences. */}
          <SectionHeader
            title={portfolioData.craftExperiences.heading}
            description={portfolioData.craftExperiences.subheading}
            icon={<SparklesIcon />}
          />

          {/* Showcase / Education & Tech Badges */}
          <ShowcaseGrid />
        </div>

        {/* Section: I'd love to talk! */}
        <div className="relative z-10 w-full max-w-full pt-4">
          <SectionHeader
            title={portfolioData.contact.heading}
            description={portfolioData.contact.subheading}
            icon={<ChatIcon />}
          />

          {/* Contact Card with Socials & Avatar */}
          <ContactCard />
        </div>

        {/* Sleek Minimalist Footer */}
        <footer className="relative z-10 py-8 px-4 text-center text-xs text-neutral-500 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Vaka Abhiram. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span>Hyderabad, India</span>
              <span>•</span>
              <a
                href="https://github.com/abhiram210106"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-300 transition-colors"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/abhiram-vaka-92b549403/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-300 transition-colors"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
