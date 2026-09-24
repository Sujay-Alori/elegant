import React from 'react';
import { motion } from 'framer-motion';

export const Philosophy: React.FC = () => {
  const principles = [
    {
      number: '01',
      name: 'FUNCTION',
      subtitle: 'Purposeful Utility & Spatial Flow',
      description: 'Prioritizing circulation, bioclimatic sun-path optimization, structural efficiency, and effortless human ergonomics to create spaces that perform flawlessly for generations.',
      color: '#0284C7',
    },
    {
      number: '02',
      name: 'FORM',
      subtitle: 'Sculptural Precision & Material Authenticity',
      description: 'Expressing bold geometric massing, disciplined cantilevers, and authentic regional materials—honoring Odishan heritage while executing razor-sharp contemporary lines.',
      color: '#38BDF8',
    },
    {
      number: '03',
      name: 'EXPERIENCE',
      subtitle: 'Atmospheric Emotion & Light Architecture',
      description: 'Choreographing natural light, ventilation breezes, tactile textures, and green courtyards to evoke peace, prestige, and memorable living and working sensations.',
      color: '#DC2626',
    },
  ];

  return (
    <section id="philosophy" className="py-28 sm:py-36 bg-[#0A0D14] text-white relative overflow-hidden">
      {/* Blueprint Grid Dark Background */}
      <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none" />

      {/* Blueprint Vector Line Graphics & Elevation Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-20">
        <svg viewBox="0 0 500 500" className="w-full h-full">
          <circle cx="250" cy="250" r="230" stroke="#0284C7" strokeWidth="1" strokeDasharray="6 6" fill="none" />
          <circle cx="250" cy="250" r="180" stroke="#38BDF8" strokeWidth="0.75" fill="none" />
          <circle cx="250" cy="250" r="120" stroke="#DC2626" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          <line x1="20" y1="250" x2="480" y2="250" stroke="#0284C7" strokeWidth="0.5" />
          <line x1="250" y1="20" x2="250" y2="480" stroke="#0284C7" strokeWidth="0.5" />
          <path d="M250 80 L397 335 H103 Z" stroke="#38BDF8" strokeWidth="1.5" fill="none" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-[0.25em] text-[#38BDF8] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            DESIGN PHILOSOPHY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white uppercase mb-6"
          >
            Tradition Meets Modernity
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-gray-300 font-normal leading-relaxed"
          >
            "We believe architecture should be functional, expressive and timeless — creating environments that are both meaningful and memorable."
          </motion.p>
        </div>

        {/* 3 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p, idx) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative rounded-2xl p-8 bg-gradient-to-b from-[#111827]/90 to-[#0A0D14]/90 border border-slate-800 hover:border-[#0284C7] shadow-xl group transition-all duration-300"
            >
              {/* Top Accent corner */}
              <div className="absolute top-0 right-8 w-12 h-1 bg-slate-800 group-hover:bg-[#DC2626] transition-colors" />

              {/* Number and Step badge */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-3xl font-display font-bold text-slate-600 group-hover:text-white transition-colors">
                  {p.number}
                </span>

                <div className="text-[10px] font-mono tracking-widest px-3 py-1 rounded bg-white/5 border border-white/10 text-cyan-400">
                  PRINCIPLE // {p.number}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold font-display tracking-wider uppercase text-white mb-1 group-hover:text-[#38BDF8] transition-colors">
                {p.name}
              </h3>

              <p className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-4">
                {p.subtitle}
              </p>

              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                {p.description}
              </p>

              {/* Bottom Drafting Mark */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-gray-500">
                <span>ELEGANT CORE</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
