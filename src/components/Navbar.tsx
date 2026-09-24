import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = ['home', 'about', 'services', 'projects', 'philosophy', 'process', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav-scrolled py-3 border-b border-slate-200/80 shadow-sm'
            : 'bg-white/95 sm:bg-white/80 backdrop-blur-md py-4 sm:py-5 border-b border-slate-200/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="group">
              <Logo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-200 py-1 ${
                      isActive
                        ? 'text-[#0284C7]'
                        : 'text-slate-700 hover:text-[#0284C7]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0284C7] to-[#DC2626]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Button & Phone snippet */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+919937344779"
                className="flex items-center gap-2 text-xs font-mono font-medium text-slate-600 hover:text-[#0284C7] transition-colors"
                title="Call Ar. Ashok Kumar Sethi"
              >
                <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
                <span>+91 99373 44779</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="relative group overflow-hidden px-5 py-2.5 rounded-lg bg-[#0A0D14] hover:bg-[#0284C7] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#0284C7]/25 flex items-center gap-2 border border-slate-800 hover:border-[#0284C7]"
              >
                <span>Let's Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-lg text-slate-800 hover:text-[#0284C7] hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[70px] z-30 bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col divide-y divide-slate-100">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 text-sm font-semibold uppercase tracking-widest text-slate-800 hover:text-[#0284C7] flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-slate-400">→</span>
                  </a>
                ))}
              </div>

              {/* Mobile Quick Contacts */}
              <div className="pt-3 border-t border-slate-200 space-y-3">
                <a
                  href="tel:+919937344779"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 text-slate-800 text-sm font-medium hover:bg-slate-100"
                >
                  <Phone className="w-4 h-4 text-[#DC2626]" />
                  <span>+91 99373 44779</span>
                </a>
                <a
                  href="mailto:KU.ASHOK@YMAIL.COM"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 text-slate-800 text-sm font-medium hover:bg-slate-100"
                >
                  <Mail className="w-4 h-4 text-[#0284C7]" />
                  <span>KU.ASHOK@YMAIL.COM</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3.5 px-4 bg-[#0284C7] text-white rounded-lg font-semibold uppercase text-xs tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Let's Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
