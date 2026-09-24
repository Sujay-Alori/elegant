import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Globe, ArrowUp, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenConsultation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0D14] text-white pt-20 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Blueprint Grid Dark */}
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="light" size="lg" />
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#38BDF8]">
              Architecture • Interiors • Consultancy
            </p>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm font-normal">
              Founded in 2016 by Ar. Ashok Kumar Sethi, Elegant Architects delivers visionary architectural, interior, and landscape master planning across Odisha and Eastern India.
            </p>

            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
              >
                <span>Book Direct Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#0284C7] text-gray-300 hover:text-white flex items-center justify-center transition-all border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#DC2626] text-gray-300 hover:text-white flex items-center justify-center transition-all border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#0284C7] text-gray-300 hover:text-white flex items-center justify-center transition-all border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Studio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Design Process</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Scope */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-semibold">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>01 — Architectural Design</li>
              <li>02 — Interior Design</li>
              <li>03 — Project Consultant</li>
              <li>04 — Structural Design</li>
              <li>05 — Landscape Design</li>
              <li>06 — Estimation & Valuation</li>
              <li>07 — Surveyor</li>
            </ul>
          </div>

          {/* Col 4: Studio Coordinates */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-semibold">
              Studio Coordinates
            </h4>
            <div className="space-y-3 text-xs text-gray-400">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DC2626] flex-shrink-0 mt-0.5" />
                <span>C-92, BDA Duplex Colony, Baramunda, Bhubaneswar, Odisha – 751003</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                <a href="tel:+919937344779" className="text-white hover:text-[#38BDF8] font-mono">
                  +91 99373 44779
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                <a href="mailto:KU.ASHOK@YMAIL.COM" className="hover:text-white font-mono">
                  KU.ASHOK@YMAIL.COM
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                <a href="https://www.elegantarchitects.in" className="hover:text-white font-mono">
                  www.elegantarchitects.in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © 2026 Elegant Architects. All Rights Reserved. • Founder: Ar. Ashok Kumar Sethi
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
