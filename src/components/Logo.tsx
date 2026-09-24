import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'mono';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const titleSizes = {
    sm: 'text-base font-bold tracking-widest',
    md: 'text-lg font-bold tracking-[0.2em]',
    lg: 'text-2xl font-bold tracking-[0.25em]',
    xl: 'text-3xl font-bold tracking-[0.3em]',
  };

  const subSizes = {
    sm: 'text-[9px] tracking-[0.22em]',
    md: 'text-[10px] tracking-[0.28em]',
    lg: 'text-xs tracking-[0.35em]',
    xl: 'text-sm tracking-[0.4em]',
  };

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Precision Geometric Architectural Logo Mark */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]} transition-transform duration-300 group-hover:scale-105`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Subtle Outer Drafting Compass Arc */}
          <circle cx="50" cy="50" r="44" stroke="#0284C7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
          <circle cx="50" cy="50" r="38" stroke="#38BDF8" strokeWidth="0.75" opacity="0.25" />

          {/* Solid Architectural Base Plinth (Dark Charcoal) */}
          <rect x="16" y="80" width="68" height="4" rx="2" fill={isLight ? '#FFFFFF' : '#0A0D14'} />
          
          {/* Blue / Cyan Triangular Cantilever & Elevation Frame */}
          <path
            d="M50 16 L84 76 H16 Z"
            stroke="#0284C7"
            strokeWidth="3.5"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Deep Red Inverted Structural Anchor / Focal Apex */}
          <path
            d="M50 32 L70 72 H30 Z"
            fill="#DC2626"
            opacity="0.92"
          />

          {/* Architectural 'E' Linear Drafting Mark in White/Contrast */}
          <path
            d="M40 44 H60 M40 52 H55 M40 60 H60"
            stroke="#FFFFFF"
            strokeWidth="2.75"
            strokeLinecap="round"
          />
          <path
            d="M40 44 V60"
            stroke="#FFFFFF"
            strokeWidth="2.75"
            strokeLinecap="round"
          />

          {/* Precision Red Benchmark Point at Apex */}
          <circle cx="50" cy="16" r="3" fill="#DC2626" />
          <circle cx="50" cy="16" r="5" stroke="#EF4444" strokeWidth="1" opacity="0.6" />

          {/* Coordinate Tick Marks */}
          <line x1="84" y1="76" x2="88" y2="76" stroke="#0284C7" strokeWidth="2" />
          <line x1="16" y1="76" x2="12" y2="76" stroke="#0284C7" strokeWidth="2" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span className={`font-display uppercase leading-tight ${titleSizes[size]} ${isLight ? 'text-white' : 'text-[#0A0D14]'}`}>
            ELEGANT
          </span>
          <span className={`font-display uppercase leading-tight ${titleSizes[size]} text-[#0284C7]`}>
            ARCHITECTS
          </span>
        </div>
        {showSubtitle && (
          <span className={`font-sans uppercase font-medium mt-0.5 ${subSizes[size]} ${isLight ? 'text-gray-400' : 'text-slate-500'}`}>
            Architecture <span className="text-[#DC2626] font-bold">•</span> Interiors <span className="text-[#0284C7] font-bold">•</span> Consultancy
          </span>
        )}
      </div>
    </div>
  );
};
