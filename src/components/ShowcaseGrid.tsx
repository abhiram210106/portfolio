import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ShowcaseBadge } from './Icons';

export const ShowcaseGrid: React.FC = () => {
  const { items } = portfolioData.craftExperiences;

  return (
    <div id="skills" className="px-3.5 2xs:px-4 xs:px-6 sm:px-8 scroll-mt-24">
      <div className="content relative mx-auto max-w-7xl">
        {/* Glow backdrop */}
        <div className="absolute inset-0 p-6 sm:p-12 pointer-events-none overflow-hidden">
          <div
            className="mx-auto h-full w-full rotate-180 rounded-3xl opacity-40 blur-xl filter"
            style={{
              background:
                'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
            }}
          />
        </div>

        {/* Technical Skills & Knowledge Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl py-3 px-3.5 sm:px-4 relative shadow-md transition-all duration-300 ease-out h-full w-full group group-one overflow-hidden cursor-default hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl border border-white/80"
              style={{ background: 'linear-gradient(to top, #ecf2f7 0%, white 100%)' }}
            >
              <div className="p-0.5">
                <div className="mx-auto min-h-[44px] w-full transform-gpu transition-all duration-200 flex items-center">
                  <ShowcaseBadge
                    type={item.iconType}
                    name={item.name}
                    category={item.category}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
