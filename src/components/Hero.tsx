import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Architectural Luxury Imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
          alt="Modern Architectural Masterpiece by Elegant Architects"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
        />
        {/* Layered Architectural Gradients for Maximum Contrast and Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D14]/95 via-[#0A0D14]/75 to-[#0A0D14]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-[#0A0D14]/40" />
        <div className="absolute inset-0 bg-grid-dark opacity-35" />
      </div>

      {/* Floating Blueprint Axis Guidelines */}
      <div className="absolute inset-0 pointer-events-none z-10 max-w-7xl mx-auto px-4 hidden sm:block">
        <div className="h-full w-full border-x border-white/5 relative">
          <div className="absolute top-1/4 -left-3 text-[10px] font-mono text-cyan-400/40 rotate-90 origin-top-left">
            ELEVATION AXIS +32.40M
          </div>
          <div className="absolute bottom-1/4 -right-3 text-[10px] font-mono text-cyan-400/40 -rotate-90 origin-bottom-right">
            GRID COORDINATE 20°17'N 85°49'E
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-white w-full">
        <div className="max-w-3xl">
          {/* Architectural Badge Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-medium tracking-[0.25em] text-[#38BDF8] mb-6 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-ping" />
            <span className="text-gray-200">ARCHITECTURE • INTERIORS • CONSULTANCY</span>
          </motion.div>

          {/* Main Hero Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white uppercase leading-[1.08] mb-6 drop-shadow-lg"
          >
            DESIGNING SPACES.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#38BDF8] to-[#0284C7]">
              CREATING EXPERIENCES.
            </span>
          </motion.h1>

          {/* Supporting Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl mb-10"
          >
            Architecture, interiors and design solutions that bring your vision to life.
            Founded by <strong className="text-white font-semibold">Ar. Ashok Kumar Sethi</strong> in 2016, crafting iconic residential, commercial and institutional landmarks across Odisha.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#0284C7]/30 flex items-center justify-center gap-3 group border border-[#38BDF8]/40"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-300 border border-white/25 hover:border-white/50 flex items-center justify-center gap-3"
            >
              <Compass className="w-4 h-4 text-[#DC2626]" />
              <span>Start a Project</span>
            </button>
          </motion.div>

          {/* Studio Quick Trust Credentials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-white/15 max-w-2xl"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                2016
              </div>
              <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-0.5">
                ESTABLISHED STUDIO
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-[#38BDF8] tracking-tight">
                180+
              </div>
              <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-0.5">
                PROJECTS DESIGNED
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                100%
              </div>
              <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-0.5">
                CLIENT SATISFACTION
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[11px] font-mono tracking-[0.25em] uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#0284C7] group-hover:text-white transition-colors" />
        </motion.div>
      </motion.a>
    </section>
  );
};
