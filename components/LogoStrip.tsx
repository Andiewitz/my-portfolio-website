import React from 'react';

// Reusable SVG wrapper for consistent sizing
const TechIconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
    {children}
  </svg>
);

const icons = {
  React: () => (
    <TechIconWrapper>
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
         <ellipse cx="12" cy="12" rx="10" ry="4.5" />
         <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
         <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      </g>
    </TechIconWrapper>
  ),
  Vercel: () => (
    <TechIconWrapper>
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </TechIconWrapper>
  ),
  NextJS: () => (
    <TechIconWrapper>
      <path d="M18.665 21.978L8.68 5.923 8.618 5.823l-.128-.216a.54.54 0 00-.094-.123l-.014-.013h-.001a1.272 1.272 0 00-.19-.187.97.97 0 00-.116-.076.903.903 0 00-.317-.087h-.062a.965.965 0 00-.236.009L4.82 5.37a.89.89 0 00-.638.77l-.004.09v11.54a.89.89 0 00.89.89h.002a.89.89 0 00.89-.89V9.563l8.604 13.826c.237.382.653.612 1.103.612h.002a1.3 1.3 0 001.3-1.3l.004-.09V5.13a.89.89 0 00-.89-.89h-.002a.89.89 0 00-.89.89v10.966l-.004 1.276.012-1.276z" />
      <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-23.11c6.136 0 11.11 4.974 11.11 11.11S18.136 23.11 12 23.11 0.89 18.136 0.89 12 5.864.89 12 .89z" fillOpacity=".2"/>
    </TechIconWrapper>
  ),
  TypeScript: () => (
    <TechIconWrapper>
      <path d="M2 2h20v20H2V2zm16.53 14.88c-.68 0-1.16-.27-1.42-.81l-1.38.73c.47 1.05 1.48 1.63 2.84 1.63 2.11 0 3.32-1.12 3.32-2.73 0-1.39-.81-2.1-2.58-2.45l-.89-.18c-.89-.18-1.21-.44-1.21-.91 0-.58.62-.91 1.55-.91 1.11 0 1.83.39 2.09.99l1.32-.63c-.45-1.12-1.65-1.8-3.41-1.8-1.84 0-3.03 1.07-3.03 2.5 0 1.29.84 1.99 2.51 2.34l.9.19c1.07.23 1.34.52 1.34 1.01 0 .72-.77 1.03-1.95 1.03zM7.22 8.67v8.58H9.8V8.67h3.42V6.22H3.8v2.45h3.42z" />
    </TechIconWrapper>
  ),
  NodeJS: () => (
    <TechIconWrapper>
      <path d="M12 2L2 7.8v11.6l10 5.8 10-5.8V7.8L12 2zm0 2.3l8 4.6v9.2l-8 4.6-8-4.6V8.9l8-4.6z" />
      <path d="M12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" opacity="0.5"/>
    </TechIconWrapper>
  ),
  Tailwind: () => (
    <TechIconWrapper>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </TechIconWrapper>
  ),
  Docker: () => (
    <TechIconWrapper>
      <path d="M13,6h2v2h-2V6z M10,6h2v2h-2V6z M13,3h2v2h-2V3z M23.1,8.3c-0.2-1.2-1-2.2-2.1-2.6c-0.3-0.1-0.6-0.2-1-0.2h-3V3h-2v2.5H13 V3h-2v2.5h-2V3H7v2.5H6c-1.3,0-2.5,0.8-2.9,2.1C0.7,8.6,0.3,11,1.5,13.2C2.4,14.9,4.2,16,6.1,16c2.8,0,5.6,0,8.3,0 c0.6,1.4,2,2.4,3.6,2.4c2.2,0,4-1.8,4-4C22,12.2,23.3,10.2,23.1,8.3z" />
    </TechIconWrapper>
  ),
  Vue: () => (
    <TechIconWrapper>
      <path d="M2,3h4l6,10.4L18,3h4L12,20L2,3z" />
      <path d="M6,3h3.5L12,7.5L14.5,3H18L12,13L6,3z" fillOpacity="0.5"/>
    </TechIconWrapper>
  ),
  Python: () => (
    <TechIconWrapper>
      <path d="M12,0c-2,0-3.5,0.4-4.5,1.2C6.4,2.1,6,3.4,6,5v2h6V6h2v1h-8C3,7,1,9,1,12s2,5,5,5h2v-2c0-1.7,1.3-3,3-3h5V8 C16,3,14,0,12,0z M11,2h2v2h-2V2z M13,9v3c0,1.7-1.3,3-3,3H5v4c0,2,2,5,7,5s4.5-0.4,5.5-1.2c1.1-0.9,1.5-2.2,1.5-3.8v-2h-6v1h2 v-1h6c3,0,5-2,5-5s-2-5-5-5H13z M11,20h2v2h-2V20z" />
    </TechIconWrapper>
  ),
  Django: () => (
    <TechIconWrapper>
      <path d="M12.72 1.68c-1.32.02-2.4.24-3.53.66l-1.44.54v8.11c0 1.96-.92 2.48-1.7 2.48-.68 0-1.16-.36-1.16-1.22V5.55h-3.6v6.94c0 1.34.42 2.5 1.2 3.32.78.8 1.8 1.22 3.16 1.22 1.34 0 2.58-.5 3.5-1.32.26.54.82 1.02 1.64 1.3 1.02.34 2.12.52 3.7.52h5.08V14h-4.3c-1.4 0-1.78-.34-1.78-1.2V2.32l-.76-.64zM22.5 10.95h-3.6V1.75h3.6v9.2z" />
    </TechIconWrapper>
  ),
  Java: () => (
    <TechIconWrapper>
      <path d="M10.5,17c-4,0-6,1.5-6,2.5s3,2.5,7,2.5s8-1,8-2.5c0-0.6-0.6-1.1-1.6-1.5c-0.3,1.1-2.5,2-5.9,2C9.5,20,7.6,18.8,10.5,17z M12.5,15.5c4,0,5,1.5,5,2c0,0.1,0,0.2-0.1,0.3c0.1-0.2,2.1-0.5,2.1-1.8c0-2-3-3-8-3c-4,0-6,1.5-6,2.5 C5.5,17,8.5,15.5,12.5,15.5z M13.8,9.8c2.2,0.6,2.9,2.5,1.7,4.5c2.6-1.5,2.6-4.5-0.1-5.6C14.8,8.5,14.2,9.2,13.8,9.8z M9.8,7.3 c2.6,0.6,3.4,2.9,2,5.3c3.1-1.7,3-5.3-0.2-6.5C11,5.8,10.3,6.6,9.8,7.3z M6.8,4.3C9.9,5,11,8.1,9.3,11C13,9,12.9,4.8,9.1,3.3 C8.4,3.2,7.5,3.4,6.8,4.3z" />
    </TechIconWrapper>
  ),
  SpringBoot: () => (
    <TechIconWrapper>
      <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M17.2,16.8c-1.5,1.5-3.5,2.2-5.7,1.8 c-0.8-0.1-1.5-0.4-2.2-0.8c2.2-0.5,4-1.9,5.2-3.8c0.1-0.2,0.2-0.4,0.3-0.6c0.6-1.1,0.8-2.3,0.6-3.6c0.5,1.1,0.7,2.4,0.4,3.7 C15.5,14.6,16.2,15.8,17.2,16.8z M10.6,15.6c0.8,0.5,1.7,0.8,2.7,0.8c0.6,0,1.2-0.1,1.8-0.3c-0.6,0.4-1.3,0.7-2.1,0.7 C11.9,16.9,11.2,16.3,10.6,15.6z M12.5,5.1c0.1-0.6,0.5-1.1,1.1-1.4c-0.5-0.2-1-0.3-1.6-0.3c-2.8,0-5.1,1.7-6,4.2 c1,0.6,2.2,1,3.4,1C10.7,8.6,11.8,7,12.5,5.1z M7.2,15c-1.3-1.5-1.9-3.5-1.5-5.5c0.3-1.4,1-2.7,2.1-3.7C6.7,6.8,5.8,8.3,5.6,10 C5.3,11.8,5.9,13.6,7.2,15z" />
    </TechIconWrapper>
  ),
};

export const LogoStrip: React.FC = () => {
  const logos = [
    { name: 'React', icon: icons.React },
    { name: 'Vercel', icon: icons.Vercel },
    { name: 'Next.js', icon: icons.NextJS },
    { name: 'TypeScript', icon: icons.TypeScript },
    { name: 'Node.js', icon: icons.NodeJS },
    { name: 'Tailwind', icon: icons.Tailwind },
    { name: 'Docker', icon: icons.Docker },
    { name: 'Vue', icon: icons.Vue },
    { name: 'Python', icon: icons.Python },
    { name: 'Django', icon: icons.Django },
    { name: 'Java', icon: icons.Java },
    { name: 'Spring Boot', icon: icons.SpringBoot },
  ];

  return (
    <div className="w-full py-8 md:py-10 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-xs uppercase tracking-widest text-gray-500 font-bold whitespace-nowrap text-center md:text-left">
          Core Technologies
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="flex overflow-hidden select-none">
        
        {/* Loop 1 */}
        <div className="flex shrink-0 animate-marquee items-center gap-12 md:gap-20 pr-12 md:pr-20">
          {logos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
              <div className="text-white">
                <logo.icon />
              </div>
              <span className="text-sm md:text-base font-bold text-white tracking-wide">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Loop 2 */}
        <div className="flex shrink-0 animate-marquee items-center gap-12 md:gap-20 pr-12 md:pr-20" aria-hidden="true">
           {logos.map((logo, index) => (
            <div key={`${logo.name}-duplicate-${index}`} className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
              <div className="text-white">
                <logo.icon />
              </div>
              <span className="text-sm md:text-base font-bold text-white tracking-wide">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};