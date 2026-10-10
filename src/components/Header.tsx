import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoDarkImg from '../assets/logo-dark.png';

interface MenuItem {
  id: string;
  number: string;
  title: string;
  href: string;
  isExternal?: boolean;
}

const menuItems: MenuItem[] = [
  { id: 'home', number: '01', title: 'HOME', href: '#home' },
  { id: 'projects', number: '02', title: 'PROJECTS', href: '#projects' },
  { id: 'about', number: '03', title: 'ABOUT', href: '#about' },
  { id: 'services', number: '04', title: 'SERVICES', href: '#services' },
  { id: 'contact', number: '05', title: 'CONTACT', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Prevent background scrolling while the menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleItemClick = (item: MenuItem) => {
    setIsOpen(false);
    if (item.isExternal) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
      return;
    }
    setTimeout(() => {
      const targetElement = document.querySelector(item.href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <>
      {/* Top Ivory Navbar */}
      <header
        className="fixed top-0 left-0 right-0 z-[100] bg-[#F4F0E8] h-[70px] xs:h-[80px] sm:h-[95px] md:h-[110px] border-b border-[#D8D4CA] transition-colors duration-300 select-none"
        style={{ backgroundColor: '#F4F0E8' }}
      >
        <div className="w-full h-full px-4 xs:px-6 sm:px-9 md:px-11 lg:px-12 flex items-center justify-between">
          {/* FAR LEFT: Elegant Architects Logo */}
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            aria-label="Elegant Architects Home"
            className="flex items-center outline-none focus-visible:ring-1 focus-visible:ring-[#242424]/40"
          >
            <img
              src={logoDarkImg}
              alt="Elegant Architects"
              className="w-[90px] xs:w-[102px] sm:w-[120px] md:w-[138px] h-auto object-contain select-none cursor-pointer"
              draggable={false}
            />
          </a>

          {/* FAR RIGHT: Single Unified Menu/Close Toggle Control */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            className="group flex items-center gap-2.5 xs:gap-3.5 bg-transparent border-0 py-2 px-1 xs:py-3 xs:px-2 cursor-pointer select-none outline-none focus-visible:ring-1 focus-visible:ring-[#242424]/40 hover:opacity-80 transition-opacity duration-200"
          >
            {/* Dual Horizontal Lines -> Symmetrical Intersecting X Morph */}
            <div className="relative w-[22px] xs:w-[24px] h-[16px] flex items-center justify-center">
              <motion.span
                animate={{
                  y: isOpen ? 0 : -4,
                  rotate: isOpen ? 45 : 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute w-[22px] xs:w-[24px] h-[2px] bg-[#242424] origin-center block rounded-full"
              />

              <motion.span
                animate={{
                  y: isOpen ? 0 : 4,
                  rotate: isOpen ? -45 : 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute w-[22px] xs:w-[24px] h-[2px] bg-[#242424] origin-center block rounded-full"
              />
            </div>

            {/* Menu Label: MENU <-> CLOSE in #242424 */}
            <span className="text-[11px] xs:text-xs sm:text-[13px] font-mono uppercase tracking-[0.25em] font-semibold text-[#242424] min-w-[44px] xs:min-w-[50px] text-left">
              {isOpen ? 'CLOSE' : 'MENU'}
            </span>
          </button>
        </div>
      </header>

      {/* Full-Screen Architectural Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] bg-[#151515] text-[#FFFFFF] flex flex-col justify-between px-6 py-8 sm:px-14 sm:py-14 md:px-20 md:py-16 overflow-y-auto select-none pt-[90px] sm:pt-[115px] md:pt-[130px]"
            style={{ backgroundColor: '#151515' }}
          >
            {/* Top Minimal Brand Datum / Coordinate */}
            <div className="flex items-center justify-between text-[#77736B] text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase">
              <span>ELEGANT ARCHITECTS</span>
              <span className="hidden sm:inline">20°17&apos;N 85°49&apos;E</span>
            </div>

            {/* Central Navigation Items */}
            <nav className="my-auto py-6 sm:py-8">
              <ul className="flex flex-col space-y-3.5 sm:space-y-6 md:space-y-7">
                {menuItems.map((item, index) => {
                  const isHovered = hoveredId === item.id;

                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 16 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.05 + index * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex items-center"
                    >
                      <button
                        type="button"
                        onClick={() => handleItemClick(item)}
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className="group flex items-baseline text-left bg-transparent border-0 p-0 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                      >
                        {/* Number Index: 01 to 06 */}
                        <span className="text-[11px] sm:text-sm font-mono text-[#77736B] mr-3 sm:mr-6 tracking-widest group-hover:text-[#FFFFFF]/70 transition-colors duration-200">
                          {item.number}
                        </span>

                        {/* Title with Subtle Horizontal Shift */}
                        <motion.span
                          animate={{ x: isHovered ? 12 : 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="font-display font-light text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] sm:tracking-[0.18em] uppercase text-[#FFFFFF]/85 group-hover:text-[#FFFFFF] transition-colors duration-200"
                        >
                          {item.title}
                        </motion.span>

                        {/* Subtle Brand Accent Line Indicator on Hover */}
                        <motion.span
                          initial={{ width: 0, opacity: 0 }}
                          animate={{
                            width: isHovered ? 36 : 0,
                            opacity: isHovered ? 1 : 0,
                            marginLeft: isHovered ? 16 : 0,
                          }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="h-[1.5px] bg-[#168BCB] inline-block origin-left"
                        />
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Bottom Minimal Area: Privacy Policy & Terms & Conditions */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="flex items-center gap-6 sm:gap-8 text-[10px] sm:text-[11px] font-mono text-[#77736B] tracking-wider uppercase">
                <a
                  href="#home"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#FFFFFF] transition-colors duration-200"
                >
                  PRIVACY POLICY
                </a>
                <a
                  href="#home"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#FFFFFF] transition-colors duration-200"
                >
                  TERMS & CONDITIONS
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
