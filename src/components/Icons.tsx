import React from 'react';

export const LightningIcon: React.FC<{ className?: string }> = ({ className = "h-20 w-20 text-white md:h-24 md:w-24" }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 10 16" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 7H6l3-7-9 9h4l-3 7 9-9z"></path>
  </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className = "h-20 w-20 text-white md:h-24 md:w-24" }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"></path>
  </svg>
);

export const ChatIcon: React.FC<{ className?: string }> = ({ className = "h-20 w-20 text-white md:h-24 md:w-24" }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm7.194 2.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"></path>
  </svg>
);

export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export const TwitterIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
  </svg>
);

export const GithubIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
  </svg>
);

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
  </svg>
);

export const DiscordIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
  </svg>
);

export const MailIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

// Project Card Logos (h-16 w-16)
export const ProjectLogo: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'voltammetry':
      // Cyclic Voltammetry ML: Electrochemical duck curve with data signal
      return (
        <svg viewBox="0 0 64 64" className="h-16 w-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="64" height="64" rx="16" fill="white" fillOpacity="0.15" />
          <line x1="14" y1="32" x2="50" y2="32" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="32" y1="14" x2="32" y2="50" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="2 2" />
          <path
            d="M16 34 C20 34, 26 18, 36 18 C44 18, 48 30, 48 34 C48 38, 42 46, 32 46 C24 46, 18 36, 16 34 Z"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="36" cy="18" r="3.5" fill="#60a5fa" />
          <circle cx="32" cy="46" r="3.5" fill="#93c5fd" />
        </svg>
      );
    case 'oralabs':
      // ORALABSPREDICT: Chemical structure with prediction vectors
      return (
        <svg viewBox="0 0 64 64" className="h-16 w-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="64" height="64" rx="16" fill="#1e293b" fillOpacity="0.08" />
          <polygon
            points="32,15 46,23 46,39 32,47 18,39 18,23"
            stroke="#0f172a"
            strokeWidth="2.5"
            fill="none"
          />
          <circle cx="32" cy="31" r="7" stroke="#0f172a" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
          <path d="M42 45L49 52M49 52H44M49 52V47" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="32" cy="15" r="2.5" fill="#2563eb" />
          <circle cx="46" cy="23" r="2.5" fill="#2563eb" />
          <circle cx="18" cy="23" r="2.5" fill="#2563eb" />
        </svg>
      );
    default:
      return null;
  }
};

// Showcase / Skills Badges (h-12 w-full object-contain)
export const ShowcaseBadge: React.FC<{ type: string; name: string; category: string }> = ({ type, name, category }) => {
  const renderIcon = () => {
    switch (type) {
      case 'python':
        return (
          <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9 1.5C6.9 1.5 7.2 3.7 7.2 3.7L7.3 6h4.8v0.7H5.4S2 6.3 2 11.3c0 5 3 4.8 3 4.8h1.8v-2.5s-0.1-3 3-3h5.1s2.9 0.1 2.9-2.9V4.5s0.5-3-5.9-3zm-2.8 1.8c0.6 0 1.1 0.5 1.1 1.1s-0.5 1.1-1.1 1.1-1.1-0.5-1.1-1.1 0.5-1.1 1.1-1.1z" fill="#387EB8"/>
            <path d="M12.1 22.5c5 0 4.7-2.2 4.7-2.2l-0.1-2.3H11.9v-0.7h6.7s3.4 0.4 3.4-4.6c0-5-3-4.8-3-4.8h-1.8v2.5s0.1 3-3 3H9.1s-2.9-0.1-2.9 2.9v3.2s-0.5 3 5.9 3zm2.8-1.8c-0.6 0-1.1-0.5-1.1-1.1s0.5-1.1 1.1-1.1 1.1 0.5 1.1 1.1c0 0.6-0.5 1.1-1.1 1.1z" fill="#FFE052"/>
          </svg>
        );
      case 'java':
        return (
          <div className="w-7 h-7 shrink-0 rounded bg-gradient-to-tr from-[#E76F00] to-[#5382A1] flex items-center justify-center text-white text-xs font-black shadow-sm">
            ☕
          </div>
        );
      case 'swing':
        return (
          <div className="w-7 h-7 shrink-0 rounded bg-[#5382A1] flex items-center justify-center text-white text-xs font-bold shadow-sm">
            UI
          </div>
        );
      case 'jdbc':
        return (
          <div className="w-7 h-7 shrink-0 rounded bg-blue-700 flex items-center justify-center text-white text-xs font-black shadow-sm">
            DB
          </div>
        );
      case 'sqlite':
        return (
          <div className="w-7 h-7 shrink-0 rounded bg-[#003B57] flex items-center justify-center text-white text-xs font-bold shadow-sm">
            SQL
          </div>
        );
      case 'git':
        return (
          <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="#F05032" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.9 4.5l2.6 2.6c.6-.2 1.3 0 1.8.5.5.5.6 1.2.4 1.8l2.5 2.5c.6-.2 1.3 0 1.8.5.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.7-1.4-.4-2.1l-2.4-2.4v5.3c.2.2.4.5.4.8 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.6.3-1.1.8-1.3V9.6c-.5-.2-.8-.7-.8-1.3 0-.6.3-1.1.8-1.3L8 4.4 2.4 10c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.5-8.5c.7-.6.7-1.6.1-2.2z"/>
          </svg>
        );
      case 'htmlcss':
        return (
          <div className="w-7 h-7 shrink-0 rounded bg-orange-600 flex items-center justify-center text-white text-xs font-black shadow-sm">
            &lt;/&gt;
          </div>
        );
      case 'dataanalysis':
        return (
          <div className="w-7 h-7 shrink-0 rounded bg-emerald-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
            📊
          </div>
        );
      case 'ml':
        return (
          <div className="w-7 h-7 shrink-0 rounded bg-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
            🧠
          </div>
        );
      case 'cv':
        return (
          <div className="w-7 h-7 shrink-0 rounded bg-teal-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
            👁️
          </div>
        );
      case 'powerbi':
        return (
          <div className="w-7 h-7 shrink-0 rounded bg-[#F2C811] flex items-center justify-center text-neutral-900 text-xs font-black shadow-sm">
            BI
          </div>
        );
      case 'excel':
        return (
          <div className="w-7 h-7 shrink-0 rounded bg-[#107C41] flex items-center justify-center text-white text-xs font-black shadow-sm">
            XLS
          </div>
        );
      case 'genai':
        return (
          <div className="w-7 h-7 shrink-0 rounded bg-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
            ✨
          </div>
        );
      case 'copilot':
        return (
          <div className="w-7 h-7 shrink-0 rounded bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-black shadow-sm">
            Co
          </div>
        );
      case 'responsibleai':
        return (
          <div className="w-7 h-7 shrink-0 rounded bg-sky-700 flex items-center justify-center text-white text-xs font-bold shadow-sm">
            ⚖️
          </div>
        );
      case 'ailiteracy':
        return (
          <div className="w-7 h-7 shrink-0 rounded bg-amber-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
            💡
          </div>
        );
      default:
        return (
          <div className="w-7 h-7 shrink-0 rounded bg-neutral-700 flex items-center justify-center text-white text-xs font-bold">
            •
          </div>
        );
    }
  };

  return (
    <div className="flex items-center space-x-2.5 sm:space-x-3 w-full h-full text-left min-w-0">
      <div className="shrink-0">{renderIcon()}</div>
      <div className="leading-tight min-w-0 flex-1 overflow-hidden">
        <span className="block text-xs sm:text-sm font-extrabold text-neutral-900 truncate">{name}</span>
        <span className="block text-[10px] sm:text-[11px] text-neutral-500 font-medium truncate mt-0.5">{category}</span>
      </div>
    </div>
  );
};
