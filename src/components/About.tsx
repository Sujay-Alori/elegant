import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface AboutProps {
  onOpenConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FFFFFF] relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-[2px] bg-[#0284C7]" />
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
            ABOUT ELEGANT ARCHITECTS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Architectural Image Layout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85"
                alt="Architectural Masterpiece by Ar. Ashok Kumar Sethi"
                className="w-full h-[450px] sm:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14]/80 via-transparent to-transparent" />

              {/* Floating Architectural Badge */}
              <div className="absolute top-6 left-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl max-w-[200px]">
                <div className="text-2xl font-bold font-display text-[#0A0D14]">2016</div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#0284C7] font-semibold">
                  ESTABLISHED
                </div>
                <div className="text-[11px] text-slate-500 mt-1 border-t border-slate-200 pt-1">
                  Bhubaneswar, Odisha
                </div>
              </div>

              {/* Bottom Image Caption Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-xl bg-[#0A0D14]/90 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono uppercase text-[#38BDF8] tracking-wider mb-1">
                      PRACTICE SCOPE
                    </div>
                    <div className="text-sm font-semibold font-display">
                      Architecture <span className="text-[#DC2626]">|</span> Interior <span className="text-[#0284C7]">|</span> Landscape
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#0284C7]/20 border border-[#0284C7]/40 flex items-center justify-center text-[#38BDF8]">
                    <Compass className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Blueprint Graphic */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-[#0284C7]/30 pointer-events-none" />
          </motion.div>

          {/* Right Column: About Text & Founder Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#0A0D14] uppercase leading-tight">
                Architecture Rooted in Vision
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <strong className="text-[#0A0D14] font-semibold">ELEGANT ARCHITECTS</strong>, founded by{' '}
              <strong className="text-[#0284C7] font-semibold">Ar. Ashok Kumar Sethi</strong>, is a multidisciplinary architecture and design practice combining tradition with modernity.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Based in Bhubaneswar, Odisha, our studio orchestrates bespoke projects across <strong>private residential villas, commercial landmarks, corporate offices, institutional buildings, and luxury hospitality</strong> destinations. We approach every brief as an opportunity to synthesize contextual heritage, environmental passive cooling, and cutting-edge structural precision.
            </p>

            {/* Founder Profile Capsule */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0A0D14] text-white flex items-center justify-center font-display font-bold text-lg flex-shrink-0 shadow-md">
                AS
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-display">
                      Ar. Ashok Kumar Sethi
                    </h3>
                    <p className="text-xs font-mono text-[#0284C7] uppercase tracking-wider">
                      Founder & Principal Architect
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 bg-white px-2.5 py-1 rounded border border-slate-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Regd. Architect
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Directly steering each project from initial sketch ideation through structural coordination and turnkey execution.
                </p>
              </div>
            </div>

            {/* Core Competencies Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Private Luxury Residences & Villas',
                'Corporate & Commercial Complexes',
                'Hospitality & Boutique Resorts',
                'Institutional & Educational Campuses',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="w-4 h-4 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-lg bg-[#0A0D14] hover:bg-[#0284C7] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2"
              >
                <span>Consult With Ar. Ashok Sethi</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              
              <a
                href="#services"
                className="px-6 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                Explore Practice Areas
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
