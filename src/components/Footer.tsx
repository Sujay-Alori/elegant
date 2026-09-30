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
        {/* Exactly 3 Columns: Left Logo & Social, Center Navigation (with MAP), Right Direct Enquiries */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Column 1: LEFT — LOGO & SOCIAL */}
          <div className="flex flex-col items-start">
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

            {/* Social Media Links: Facebook & Instagram */}
            <div className="mt-8">
              <span className="block text-[11px] font-mono uppercase tracking-[0.25em] text-[#77736B] mb-4">
                (SOCIAL)
              </span>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-6">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/Elegant779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium tracking-[0.14em] text-[#1C1C1B] hover:text-[#168BCB] transition-colors duration-200 outline-none"
                >
                  <svg
                    className="w-4 h-4 fill-current transition-transform duration-200 group-hover:scale-110"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/elegant_architects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium tracking-[0.14em] text-[#1C1C1B] hover:text-[#168BCB] transition-colors duration-200 outline-none"
                >
                  <svg
                    className="w-4 h-4 fill-current transition-transform duration-200 group-hover:scale-110"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
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
