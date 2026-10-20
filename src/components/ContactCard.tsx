import React from 'react';
import { portfolioData, type SocialLink } from '../data/portfolioData';
import { GithubIcon, MailIcon, LinkedinIcon } from './Icons';

export const ContactCard: React.FC = () => {
  const { contact, personal } = portfolioData;

  const renderSocialIcon = (social: SocialLink) => {
    const iconClass =
      'h-8 w-8 text-neutral-600 scale-90 transition-all duration-200 hover:scale-100 active:scale-75 hover:text-neutral-900';
    switch (social.type) {
      case 'github':
        return <GithubIcon className={iconClass} />;
      case 'email':
        return <MailIcon className={iconClass} />;
      case 'linkedin':
        return <LinkedinIcon className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <div id="contact" className="px-3.5 2xs:px-4 xs:px-6 sm:px-8 mb-10 sm:mb-16 scroll-mt-24">
      <div className="content relative mx-auto max-w-7xl">
        <div
          className="rounded-2xl sm:rounded-3xl p-5 2xs:p-6 xs:p-8 sm:p-12 md:p-16 relative shadow-xl hover:shadow-2xl transition-all duration-300 ease-out h-full w-full group-one overflow-hidden border border-white/80"
          style={{ background: 'linear-gradient(to top, #ecf2f7 0%, white 100%)' }}
        >
          <div className="my-8 sm:my-12 md:my-16 space-y-3.5 sm:space-y-4 text-center text-neutral-900">
            <p className="text-xs 2xs:text-sm sm:text-base font-medium text-neutral-600">
              {contact.callToAction}
            </p>
            <div className="px-1 max-w-full overflow-hidden">
              <a
                href={contact.emailLink}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-spaceGrotesk text-base 2xs:text-lg xs:text-xl sm:text-3xl md:text-5xl font-bold tracking-tight transition-all duration-300 hover:opacity-85 inline-block break-all xs:break-normal max-w-full"
              >
                {contact.email}
              </a>
            </div>
            <p className="text-xs 2xs:text-sm sm:text-base font-medium text-neutral-600">
              {contact.subtext}
            </p>

            {/* Actionable Social Links: GitHub, LinkedIn, Email */}
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 pt-2">
              {contact.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  title={social.title}
                  aria-label={social.title}
                  className="inline-flex items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-neutral-200/60 hover:bg-neutral-200 text-neutral-700 hover:text-neutral-950 transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  target={social.type === 'email' ? undefined : '_blank'}
                  rel={social.type === 'email' ? undefined : 'noopener noreferrer'}
                >
                  {renderSocialIcon(social)}
                </a>
              ))}
            </div>

            {/* Contact Avatar peaking from bottom */}
            <div className="mx-auto w-full max-w-[200px] 2xs:max-w-[240px] xs:max-w-[280px] sm:max-w-[320px] md:max-w-[360px]">
              <img
                src={contact.avatarSrc}
                alt={personal.name}
                className="-mb-[4.5rem] 2xs:-mb-[5.5rem] md:-mb-24 w-full rounded-full shadow-xl border-4 border-white object-cover aspect-square transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
