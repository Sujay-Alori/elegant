import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Maximize2, Tag, CheckCircle, ArrowRight, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onConsultProject: (title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onConsultProject,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const allImages = [project.image, ...(project.gallery || [])];

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A0D14]/85 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 z-10 my-6 max-h-[92vh] flex flex-col"
        >
          {/* Floating Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#0A0D14]/70 text-white hover:bg-[#0A0D14] transition-all backdrop-blur-md border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto flex-1 custom-scrollbar">
            {/* Project Image Gallery Hero */}
            <div className="relative h-[320px] sm:h-[460px] bg-black overflow-hidden group">
              <img
                src={allImages[activeImageIndex]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Image Carousel Controls */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all backdrop-blur-sm border border-white/10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all backdrop-blur-sm border border-white/10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Gallery Dots */}
              <div className="absolute bottom-6 right-6 flex gap-2 z-10">
                {allImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`h-2 transition-all rounded-full ${
                      activeImageIndex === i ? 'w-8 bg-[#0284C7]' : 'w-2 bg-white/50 hover:bg-white'
                    }`}
                  />
                ))}
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-6 left-6 right-24 text-white z-10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded bg-[#0284C7] text-white text-xs font-mono font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-white/20 text-gray-200 text-xs font-mono">
                    {project.status}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-300 font-sans mt-0.5">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Project Details Grid */}
            <div className="p-6 sm:p-10 space-y-8">
              {/* Key Architectural Specifications Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#0284C7]" /> Location
                  </div>
                  <div className="text-sm font-bold text-slate-900">{project.location}</div>
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Maximize2 className="w-3.5 h-3.5 text-[#DC2626]" /> Built-Up Area
                  </div>
                  <div className="text-sm font-bold text-slate-900">{project.area}</div>
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#0284C7]" /> Completed
                  </div>
                  <div className="text-sm font-bold text-slate-900">{project.year}</div>
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Tag className="w-3.5 h-3.5 text-[#DC2626]" /> Typology
                  </div>
                  <div className="text-sm font-bold text-slate-900">{project.category}</div>
                </div>
              </div>

              {/* Description & Highlights */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-lg font-bold font-display uppercase tracking-wider text-[#0A0D14] flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-[#0284C7]" />
                    Architectural Narrative
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                    {project.description}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                    Designed under the principal direction of <strong>Ar. Ashok Kumar Sethi</strong> at Elegant Architects, incorporating bioclimatic passive solar strategies, structural discipline, and material authenticity.
                  </p>
                </div>

                <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#0284C7]/20 rounded-full blur-2xl" />
                  <h4 className="text-sm font-mono uppercase tracking-widest text-[#38BDF8] mb-4 flex items-center gap-2">
                    <span>KEY HIGHLIGHTS</span>
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-300">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Call to Action Footer */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-600">
                  Inspired by this design? Request a custom architectural blueprint tailored to your plot.
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="tel:+919937344779"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-semibold transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#DC2626]" /> +91 99373 44779
                  </a>
                  <button
                    onClick={() => {
                      onClose();
                      onConsultProject(project.title);
                    }}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-semibold transition-all shadow-md"
                  >
                    <span>Inquire Similar Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
