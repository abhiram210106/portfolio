import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, icon }) => {
  return (
    <div className="px-3.5 2xs:px-4 xs:px-6 sm:px-8">
      <div className="content relative mx-auto max-w-7xl">
        <div className="my-10 2xs:my-14 xs:my-16 sm:my-20 md:my-28 flex flex-col justify-between md:flex-row md:items-center gap-6">
          <div className="order-2 md:order-1 max-w-2xl">
            <h2 className="mb-3 sm:mb-5 font-spaceGrotesk text-2xl 2xs:text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-100 break-words leading-[1.1]">
              {title}
            </h2>
            <p className="text-xs 2xs:text-sm xs:text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="order-1 md:order-2 shrink-0 md:px-6 flex items-center justify-start md:justify-center transform-gpu transition-transform duration-300 hover:scale-110">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};
