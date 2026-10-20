import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectLogo, ExternalLinkIcon, GithubIcon } from './Icons';

export const ProjectsGrid: React.FC = () => {
  const { projects } = portfolioData.makeThings;

  return (
    <div id="projects" className="px-3.5 2xs:px-4 xs:px-6 sm:px-8 scroll-mt-24">
      <div className="content relative mx-auto max-w-5xl">
        {/* Glow backdrop */}
        <div className="absolute -inset-6 sm:-inset-12 pointer-events-none">
          <div
            className="mx-auto h-full w-full rotate-180 opacity-40 blur-2xl filter"
            style={{
              background:
                'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
              maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 72%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 72%)',
            }}
          />
        </div>

        {/* Exactly Two Project Cards Grid */}
        <div className="group grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl sm:rounded-3xl p-5 2xs:p-6 sm:p-7 md:p-8 relative shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:z-20 hover:-translate-y-1 md:hover:scale-[1.01] active:scale-[0.99] hover:!opacity-100 md:group-hover:opacity-65 h-full w-full group-one overflow-hidden flex flex-col justify-between border border-white/20"
              style={{ background: project.gradient }}
            >
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <ProjectLogo type={project.iconType} />
                  <span
                    className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shrink-0 shadow-sm ${
                      project.isOngoing
                        ? 'bg-amber-500/20 text-amber-900 border border-amber-500/30'
                        : 'bg-white/20 text-white border border-white/25'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div>
                  <h3 className={`text-xl 2xs:text-2xl sm:text-3xl font-spaceGrotesk font-bold break-words leading-tight ${project.textColor}`}>
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p
                      className={`text-xs sm:text-sm font-semibold tracking-wide mt-1 break-words ${
                        project.textColor === 'text-neutral-900'
                          ? 'text-neutral-600'
                          : 'text-neutral-200'
                      }`}
                    >
                      {project.subtitle}
                    </p>
                  )}
                </div>

                <p
                  className={`text-xs 2xs:text-sm sm:text-base leading-relaxed font-normal ${
                    project.textColor === 'text-neutral-900'
                      ? 'text-neutral-700'
                      : 'text-neutral-100/90'
                  }`}
                >
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5 2xs:gap-2 pt-1">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`rounded-lg px-2 2xs:px-2.5 py-0.5 2xs:py-1 text-[10px] 2xs:text-xs font-semibold tracking-wide shadow-sm transition-transform duration-200 hover:scale-105 ${
                        tag.isLightCard
                          ? 'bg-neutral-900/10 text-neutral-900'
                          : 'bg-white/20 text-white'
                      }`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Functional Live Demo & GitHub Action Links */}
              <div className="pt-5 sm:pt-6 mt-4 border-t border-white/20 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center space-x-2 text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded-xl transition-all duration-200 active:scale-95 flex-1 2xs:flex-initial ${
                    project.textColor === 'text-neutral-900'
                      ? 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-md hover:shadow-lg'
                      : 'bg-white text-neutral-900 hover:bg-neutral-100 shadow-md hover:shadow-lg'
                  }`}
                >
                  <span>Live Demo</span>
                  <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center space-x-2 text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded-xl transition-all duration-200 active:scale-95 flex-1 2xs:flex-initial ${
                    project.textColor === 'text-neutral-900'
                      ? 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border border-neutral-300 shadow-sm'
                      : 'bg-white/15 text-white hover:bg-white/25 border border-white/25 shadow-sm'
                  }`}
                >
                  <GithubIcon className="h-3.5 w-3.5 shrink-0" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Top-right corner hover slide-in indicator */}
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open Live Demo for ${project.title}`}
                className="hidden sm:block absolute right-0 top-0 transition-all duration-300 -translate-y-full transform-gpu group-one:hover:translate-y-0 p-4"
              >
                <ExternalLinkIcon
                  className={`h-4 w-4 ${
                    project.textColor === 'text-neutral-900'
                      ? 'text-neutral-900'
                      : 'text-white'
                  }`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
