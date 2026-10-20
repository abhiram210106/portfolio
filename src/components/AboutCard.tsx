import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const AboutCard: React.FC = () => {
  const { about, personal } = portfolioData;

  return (
    <div id="about" className="px-3.5 2xs:px-4 xs:px-6 sm:px-8 scroll-mt-24">
      <div className="content relative mx-auto max-w-7xl">
        <div
          className="rounded-2xl sm:rounded-3xl p-5 2xs:p-6 xs:p-8 sm:p-10 md:p-12 relative shadow-xl hover:shadow-2xl transition-all duration-300 ease-out h-full w-full group-one overflow-hidden border border-white/80"
          style={{ background: 'linear-gradient(to top, #ecf2f7 0%, white 100%)' }}
        >
          <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-2">
            <div className="order-2 space-y-3.5 sm:space-y-4 text-neutral-900 md:order-1 md:ml-2">
              <img
                src={about.emojiSrc}
                alt="Hey!"
                title="Hey!"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg object-contain transition-transform duration-300 hover:scale-110"
              />
              <p className="font-bold text-base sm:text-lg md:text-xl text-neutral-900 leading-snug">
                {about.introBold}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-neutral-800 leading-relaxed">
                {about.paragraph1}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-neutral-800 leading-relaxed">
                {about.paragraph2}
              </p>

              {/* Education & Certifications info */}
              <div className="pt-2 space-y-2">
                <div className="flex items-start space-x-2 text-xs sm:text-sm font-semibold text-neutral-700 bg-neutral-200/70 px-3 py-2 rounded-xl border border-neutral-300/40">
                  <span className="shrink-0 text-base">🎓</span>
                  <span className="leading-snug break-words">{about.educationLabel}</span>
                </div>
                <div className="flex items-start space-x-2 text-xs sm:text-sm font-medium text-neutral-700 bg-neutral-100/90 px-3 py-2 rounded-xl border border-neutral-200/70">
                  <span className="shrink-0 text-base">📜</span>
                  <span className="leading-snug break-words">{about.certificationsLabel}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-500 font-medium pt-1 flex items-center gap-1.5">
                <span>📍</span>
                <span>{about.location}</span>
              </p>
            </div>
            <div className="order-1 mx-auto w-full max-w-[220px] 2xs:max-w-[260px] xs:max-w-[290px] sm:max-w-[320px] md:max-w-[380px] md:order-2">
              <img
                src={about.avatarSrc}
                alt={personal.name}
                className="mx-auto rounded-2xl sm:rounded-3xl object-cover w-full aspect-square shadow-md transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
