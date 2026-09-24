import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Building, Home, Hotel, Store } from 'lucide-react';

export const MissionVision: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FFFFFF] relative overflow-hidden">
      {/* Subtle Blueprint Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl p-8 sm:p-12 bg-[#F8FAFC] border border-slate-200 hover:border-[#0284C7] shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
          >
            {/* Architectural Drafting Corner Lines */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
            <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-400">
              STATEMENT // 01
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 text-[#0284C7] flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#0284C7] group-hover:text-white transition-all">
                <Target className="w-7 h-7" />
              </div>

              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#0284C7] uppercase block mb-2">
                OUR PURPOSE
              </span>

              <h3 className="text-3xl sm:text-4xl font-bold font-display uppercase tracking-tight text-[#0A0D14] mb-6">
                MISSION
              </h3>

              <blockquote className="text-lg sm:text-xl text-slate-800 font-serif italic leading-relaxed border-l-4 border-[#0284C7] pl-5 mb-8">
                "To provide creative and elegant design solutions for homes, offices, stores, hotels and restaurants."
              </blockquote>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 text-xs font-mono text-slate-600">
                <span className="px-3 py-1 bg-white rounded border border-slate-200 flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-[#0284C7]" /> Homes
                </span>
                <span className="px-3 py-1 bg-white rounded border border-slate-200 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#0284C7]" /> Offices
                </span>
                <span className="px-3 py-1 bg-white rounded border border-slate-200 flex items-center gap-1.5">
                  <Store className="w-3.5 h-3.5 text-[#0284C7]" /> Stores
                </span>
                <span className="px-3 py-1 bg-white rounded border border-slate-200 flex items-center gap-1.5">
                  <Hotel className="w-3.5 h-3.5 text-[#DC2626]" /> Hotels & Restaurants
                </span>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl p-8 sm:p-12 bg-[#0A0D14] text-white border border-slate-800 hover:border-[#DC2626] shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DC2626]/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
            <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-500">
              STATEMENT // 02
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/15 text-[#38BDF8] flex items-center justify-center mb-8 group-hover:bg-[#DC2626] group-hover:text-white transition-all">
                <Compass className="w-7 h-7" />
              </div>

              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#DC2626] uppercase block mb-2">
                OUR HORIZON
              </span>

              <h3 className="text-3xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white mb-6">
                VISION
              </h3>

              <blockquote className="text-lg sm:text-xl text-gray-200 font-serif italic leading-relaxed border-l-4 border-[#DC2626] pl-5 mb-8">
                "To create spectacular and magnificent living and working environments while helping clients achieve their objectives."
              </blockquote>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800 text-xs font-mono text-gray-400">
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-gray-300">
                  Spectacular Spaces
                </span>
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-gray-300">
                  Sustainable Legacy
                </span>
                <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-[#38BDF8]">
                  Client Centricity
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
