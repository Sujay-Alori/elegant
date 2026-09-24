import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  onOpenConsultation: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#0284C7] text-white relative overflow-hidden">
      {/* Background Architectural Blueprint Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      {/* Decorative Red Accent Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DC2626]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono tracking-[0.25em] text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-ping" />
              START YOUR ARCHITECTURAL JOURNEY
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white uppercase leading-[1.1] mb-6">
              Let's Build Something Remarkable.
            </h2>

            <p className="text-lg sm:text-xl text-sky-100 font-normal leading-relaxed">
              Have a project in mind? Let's discuss your vision with Ar. Ashok Kumar Sethi and transform your plot into an architectural statement.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0A0D14] hover:bg-black text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 group border border-slate-700"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#38BDF8]" />
            </button>

            <a
              href="tel:+919937344779"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#0A0D14] hover:bg-slate-100 font-semibold text-sm tracking-wider transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
            >
              <Phone className="w-4 h-4 text-[#DC2626]" />
              <span className="font-mono font-bold">+91 99373 44779</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
