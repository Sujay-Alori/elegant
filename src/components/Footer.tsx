import React from 'react';
import logoDarkImg from '../assets/logo-dark.png';

interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

const navLinks: NavLink[] = [
  { label: 'HOME', href: '#home' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'MAP', href: 'https://maps.app.goo.gl/DS2J3d8okmhyB24BA', isExternal: true },
  { label: 'CONTACT', href: '#contact' },
];

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: NavLink) => {
    if (link.isExternal) {
      return;
    }
    e.preventDefault();
    const targetElement = document.querySelector(link.href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="bg-[#F4F0E8] text-[#1C1C1B] py-16 sm:py-20 md:py-24 border-t border-[#D8D4CA] select-none"
      style={{ backgroundColor: '#F4F0E8' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        {/* Exactly 3 Columns: Left Logo, Center Navigation (with MAP), Right Direct Enquiries */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Column 1: LEFT — LOGO ONLY */}
          <div className="flex items-start">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, { label: 'HOME', href: '#home' })}
              className="inline-block outline-none focus-visible:ring-1 focus-visible:ring-[#1C1C1B]/40"
            >
              <img
                src={logoDarkImg}
                alt="Elegant Architects"
                className="w-[125px] sm:w-[140px] h-auto object-contain cursor-pointer"
                draggable={false}
              />
            </a>
          </div>

          {/* Column 2: CENTER — NAVIGATION */}
          <div className="md:text-left">
            <span className="block text-[11px] font-mono uppercase tracking-[0.25em] text-[#77736B] mb-5 sm:mb-6">
              (NAVIGATION)
            </span>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                    onClick={(e) => handleNavClick(e, link)}
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-[0.16em] uppercase text-[#1C1C1B] hover:text-[#168BCB] transition-colors duration-200 outline-none"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[#168BCB] group-hover:w-full transition-all duration-200" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: RIGHT — DIRECT ENQUIRIES */}
          <div className="md:text-left">
            <span className="block text-[11px] font-mono uppercase tracking-[0.25em] text-[#77736B] mb-5 sm:mb-6">
              (DIRECT ENQUIRIES)
            </span>
            <div className="space-y-2 text-xs sm:text-sm font-mono text-[#1C1C1B]">
              <div>
                <a
                  href="tel:+919937344779"
                  className="hover:text-[#168BCB] transition-colors duration-200"
                >
                  +91 99373 44779
                </a>
              </div>
              <div>
                <a
                  href="tel:+919438102423"
                  className="hover:text-[#168BCB] transition-colors duration-200"
                >
                  +91 94381 02423
                </a>
              </div>
              <div>
                <a
                  href="tel:+919937344779"
                  className="hover:text-[#168BCB] transition-colors duration-200"
                >
                  +91 99373 44779
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
