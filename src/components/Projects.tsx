import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight, Eye } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import type { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Hospitality', 'Institutional'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#FFFFFF] relative overflow-hidden">
      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header & Category Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-slate-200 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-[#0284C7]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
                PORTFOLIO SHOWCASE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#0A0D14] uppercase">
              Selected Works
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#0A0D14] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Masonry / Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => onSelectProject(project)}
                className="group relative cursor-pointer bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#0284C7] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                {/* Image Container with Zoom and Overlay */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14]/90 via-[#0A0D14]/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-md bg-[#0A0D14]/80 backdrop-blur-md text-white text-[11px] font-mono font-medium tracking-wider border border-white/15">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#0284C7]/90 text-white text-[10px] font-mono font-bold tracking-wider">
                      {project.year}
                    </span>
                  </div>

                  {/* Hover Inspect Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                    <div className="px-4 py-2 rounded-full bg-white/95 text-slate-900 text-xs font-mono font-semibold tracking-wider flex items-center gap-2 shadow-xl border border-white/40">
                      <Eye className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>EXPLORE BLUEPRINT & PHOTOS</span>
                    </div>
                  </div>

                  {/* Bottom Image Sub-info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-mono mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-xl font-bold font-display text-[#0A0D14] group-hover:text-[#0284C7] transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-sans text-slate-500 line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">
                      AREA: <strong className="text-slate-700 font-bold">{project.area}</strong>
                    </span>

                    <span className="inline-flex items-center gap-1 text-[#0284C7] font-semibold group-hover:translate-x-1 transition-transform">
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Bottom Red Accent Indicator Bar on hover */}
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#DC2626] transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
