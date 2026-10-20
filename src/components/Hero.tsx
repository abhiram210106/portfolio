import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { BlobAnimation } from './BlobAnimation';

export const Hero: React.FC = () => {
  return (
    <div
      style={{ background: 'radial-gradient(circle, #222222 0%, rgba(23,23,23,1) 75%)' }}
      className="faded-div absolute top-0 left-0 grid h-screen w-full"
    >
      <div
        className="m-0 h-full w-full max-w-full p-0 relative"
        style={{
          background: `url(${import.meta.env.BASE_URL}assets/images/background.png) center / cover no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        {/* 3D Animated Blob */}
        <BlobAnimation />

        {/* Hero Title & Subtitle centered above the 3D sphere */}
        <div className="relative z-20 grid h-full w-full items-center text-center text-white pointer-events-none select-none px-4">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="font-spaceGrotesk text-3xl 2xs:text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9.5rem] 2xl:text-[11rem] font-bold tracking-tight leading-[0.95] drop-shadow-sm">
              {portfolioData.hero.name}
            </h1>
            <p className="text-xs 2xs:text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-medium tracking-normal text-neutral-300 mt-2 sm:mt-3">
              {portfolioData.hero.role}
            </p>
          </div>
        </div>

        {/* Scroll down animated indicator */}
        <a
          href="#about"
          aria-label="Scroll down to About section"
          className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-0 right-0 mx-auto w-fit z-30 transition-opacity duration-300 hover:opacity-80 focus:outline-none p-3"
        >
          <div className="relative mx-auto h-4 w-4 md:h-6 md:w-6">
            <span className="absolute -rotate-45 transform-gpu border-l-2 border-b-2 border-white/80 animate-scroll rounded-sm h-4 w-4 md:h-6 md:w-6 top-0"></span>
            <span className="absolute -rotate-45 transform-gpu border-l-2 border-b-2 border-white/80 animate-scroll rounded-sm h-4 w-4 md:h-6 md:w-6 top-3 animation-delay-200 md:top-4"></span>
            <span className="absolute -rotate-45 transform-gpu border-l-2 border-b-2 border-white/80 animate-scroll rounded-sm h-4 w-4 md:h-6 md:w-6 top-6 animation-delay-400 md:top-8"></span>
          </div>
        </a>
      </div>
    </div>
  );
};
