import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItem {
  id: string;
  number: string;
  title: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { id: 'home', number: '01', title: 'HOME', href: '#home' },
  { id: 'projects', number: '02', title: 'PROJECTS', href: '#projects' },
  { id: 'about', number: '03', title: 'ABOUT', href: '#about' },
  { id: 'services', number: '04', title: 'SERVICES', href: '#services' },
  { id: 'blog', number: '05', title: 'BLOG', href: '#blog' },
  { id: 'contact', number: '06', title: 'CONTACT', href: '#contact' },
];

export const MenuOverlay: React.FC = () => {
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

  const handleItemClick = (_item: MenuItem) => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Fixed Minimalist Top-Right Menu Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        className="fixed top-6 right-6 sm:top-8 sm:right-10 md:top-10 md:right-12 z-[100] flex items-center gap-3.5 bg-transparent border-0 p-2 cursor-pointer group select-none outline-none focus-visible:ring-1 focus-visible:ring-white/40"
      >
        {/* Label: MENU <-> CLOSE */}
        <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#FFFFFF]/80 group-hover:text-[#FFFFFF] transition-colors duration-200">
          {isOpen ? 'CLOSE' : 'MENU'}
        </span>

        {/* Dual Lines -> X Morph */}
        <div className="relative w-6 h-4 flex flex-col justify-between items-end">
          {/* Top Line */}
          <motion.span
            animate={
              isOpen
                ? { rotate: 45, y: 7, width: 24, backgroundColor: '#FFFFFF' }
                : { rotate: 0, y: 0, width: 24, backgroundColor: '#FFFFFF' }
            }
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="block h-[1.5px] origin-center opacity-90 group-hover:opacity-100 transition-opacity"
          />

          {/* Bottom Line */}
          <motion.span
            animate={
              isOpen
                ? { rotate: -45, y: -7, width: 24, backgroundColor: '#FFFFFF' }
                : { rotate: 0, y: 0, width: 18, backgroundColor: '#FFFFFF' }
            }
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="block h-[1.5px] origin-center opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </button>

      {/* Full-Screen Architectural Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] bg-[#171817] text-[#FFFFFF] flex flex-col justify-between px-8 py-10 sm:px-14 sm:py-14 md:px-20 md:py-16 overflow-y-auto select-none"
            style={{ backgroundColor: '#171817' }}
          >
            {/* Top Minimal Brand Datum / Coordinate */}
            <div className="flex items-center justify-between text-[#77736B] text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase">
              <span>ELEGANT ARCHITECTS</span>
              <span className="hidden sm:inline">20°17&apos;N 85°49&apos;E</span>
            </div>

            {/* Central Navigation Items */}
            <nav className="my-auto py-8">
              <ul className="flex flex-col space-y-4 sm:space-y-6 md:space-y-7">
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
                        delay: 0.08 + index * 0.05,
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
                        {/* Number Index */}
                        <span className="text-xs sm:text-sm font-mono text-[#77736B] mr-4 sm:mr-6 tracking-widest group-hover:text-[#FFFFFF]/70 transition-colors duration-200">
                          {item.number}
                        </span>

                        {/* Title with Subtle Horizontal Shift */}
                        <motion.span
                          animate={{ x: isHovered ? 12 : 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="font-display font-light text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.18em] uppercase text-[#FFFFFF]/85 group-hover:text-[#FFFFFF] transition-colors duration-200"
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

            {/* Bottom Minimal Footer Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08] text-[11px] sm:text-xs font-mono text-[#77736B] tracking-wider">
              <div>
                <span>STUDIO • BHUBANESWAR, ODISHA</span>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="mailto:contact@elegantarchitects.in"
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  INFO@ELEGANTARCHITECTS.IN
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
