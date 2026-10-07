import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, X, Maximize2, MapPin, Calendar, Layers } from 'lucide-react';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  location: string;
  category: string;
  year: string;
  area: string;
  src: string;
  alt: string;
  description: string;
}

// Configurable Project Data Array (easily replaceable)
export const projectsData: ProjectItem[] = [
  {
    id: 'project-01',
    number: '01',
    title: 'Modern Residence',
    location: 'Bangalore',
    category: 'Private Residence',
    year: '2024',
    area: '6,400 sq.ft',
    src: '/images/img-1.jpg',
    alt: 'Modern Residence in Bangalore by Elegant Architects',
    description:
      'A contemporary multi-level sanctuary featuring monolithic concrete planes, floor-to-ceiling glazing, and seamless indoor-outdoor courtyards tailored for tropical urban living.',
  },
  {
    id: 'project-02',
    number: '02',
    title: 'Villa Residence',
    location: 'Mangalore',
    category: 'Luxury Villa',
    year: '2023',
    area: '8,200 sq.ft',
    src: '/images/img-2.jpg',
    alt: 'Villa Residence in Mangalore by Elegant Architects',
    description:
      'Harmonizing coastal architecture with modernist geometry, this villa celebrates natural breeze channels, deep overhangs, and warm earth tones.',
  },
  {
    id: 'project-03',
    number: '03',
    title: 'Commercial Complex',
    location: 'Bhubaneswar',
    category: 'Commercial Architecture',
    year: '2024',
    area: '45,000 sq.ft',
    src: '/images/img-3.jpg',
    alt: 'Commercial Complex in Bhubaneswar by Elegant Architects',
    description:
      'A landmark commercial edifice balancing sustainable passive ventilation, distinctive parametric louvers, and dynamic retail-office zoning.',
  },
  {
    id: 'project-04',
    number: '04',
    title: 'Luxury Interior',
    location: 'Bangalore',
    category: 'Interior Architecture',
    year: '2024',
    area: '4,800 sq.ft',
    src: '/images/img-4.jpg',
    alt: 'Luxury Interior in Bangalore by Elegant Architects',
    description:
      'Bespoke interior curation highlighting natural Italian marble, handcrafted teak accents, concealed ambient lighting, and bespoke minimalist joinery.',
  },
  {
    id: 'project-05',
    number: '05',
    title: 'Contemporary Villa',
    location: 'Mysore',
    category: 'Residential Villa',
    year: '2023',
    area: '7,100 sq.ft',
    src: '/images/img-5.jpg',
    alt: 'Contemporary Villa in Mysore by Elegant Architects',
    description:
      'An expansive private estate merging serene water features with double-height volume spaces and textured stone masonry walls.',
  },
  {
    id: 'project-06',
    number: '06',
    title: 'Office Interior',
    location: 'Mangalore',
    category: 'Corporate Workspace',
    year: '2024',
    area: '12,500 sq.ft',
    src: '/images/img-6.jpg',
    alt: 'Office Interior in Mangalore by Elegant Architects',
    description:
      'A modern biophilic corporate workspace designed to foster collaboration through acoustic modular pods, open work-lounges, and sculpted ceilings.',
  },
  {
    id: 'project-07',
    number: '07',
    title: 'Residential Apartment',
    location: 'Hyderabad',
    category: 'High-rise Living',
    year: '2023',
    area: '3,800 sq.ft',
    src: '/images/img-7.jpg',
    alt: 'Residential Apartment in Hyderabad by Elegant Architects',
    description:
      'An expansive penthouse dwelling framing panoramic skyline vistas with understated monochrome finishes and curated tactile textures.',
  },
  {
    id: 'project-08',
    number: '08',
    title: 'Resort Architecture',
    location: 'Coorg',
    category: 'Hospitality',
    year: '2024',
    area: '32,000 sq.ft',
    src: '/images/img-8.jpg',
    alt: 'Resort Architecture in Coorg by Elegant Architects',
    description:
      'Nestled on lush hillside contours, this boutique eco-resort features indigenous slate, timber stilts, and panoramic coffee-plantation lookouts.',
  },
  {
    id: 'project-09',
    number: '09',
    title: 'Coastal Retreat',
    location: 'Gokarna',
    category: 'Boutique Stay',
    year: '2023',
    area: '14,000 sq.ft',
    src: '/images/img-9.jpg',
    alt: 'Coastal Retreat in Gokarna by Elegant Architects',
    description:
      'A tranquil oceanfront sanctuary designed around cliff-side vistas, terracotta finishes, and open-air pavilion terraces.',
  },
  {
    id: 'project-10',
    number: '10',
    title: 'Urban Sanctuary',
    location: 'Bhubaneswar',
    category: 'Landscape & Villa',
    year: '2024',
    area: '9,500 sq.ft',
    src: '/images/cover_bg_1.jpg',
    alt: 'Urban Sanctuary in Bhubaneswar by Elegant Architects',
    description:
      'A harmonious fusion of lush landscaped courtyards and contemporary brutalist concrete volumes creating a private green haven.',
  },
];

export const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const totalProjects = projectsData.length;

  const nextProject = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  }, [totalProjects]);

  const prevProject = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  }, [totalProjects]);

  const goToProject = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Keyboard navigation when user is focusing or browsing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'ArrowRight') {
        nextProject();
      } else if (e.key === 'ArrowLeft') {
        prevProject();
      } else if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextProject, prevProject, selectedProject]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 45; // Minimum px for swipe
    if (distance > minSwipeDistance) {
      nextProject();
    } else if (distance < -minSwipeDistance) {
      prevProject();
    }
  };

  const current = projectsData[currentIndex];
  const prevItem = projectsData[(currentIndex - 1 + totalProjects) % totalProjects];
  const nextItem = projectsData[(currentIndex + 1) % totalProjects];

  // Motion variants for slide/fade animation
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      zIndex: 20,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      zIndex: 10,
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="scroll-mt-[70px] xs:scroll-mt-[80px] sm:scroll-mt-[95px] md:scroll-mt-[110px] py-16 sm:py-24 md:py-32 bg-[#F5F3EE] text-[#1C1C1B] relative w-full overflow-hidden select-none"
      style={{ backgroundColor: '#F5F3EE' }}
      aria-label="Projects Portfolio Carousel"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        {/* Section Category Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between mb-8 sm:mb-12 border-b border-[#1C1C1B]/10 pb-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#77736B]">
              PORTFOLIO
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1C1C1B]/30" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#77736B] hidden xs:inline-block">
              SELECTED WORKS
            </span>
          </div>

          {/* Project Index Counter Indicator */}
          <div className="flex items-center gap-1 font-mono text-xs sm:text-sm tracking-widest text-[#77736B]">
            <span className="text-[#1C1C1B] font-semibold">{current.number}</span>
            <span className="opacity-40">/</span>
            <span>{totalProjects.toString().padStart(2, '0')}</span>
          </div>
        </motion.div>

        {/* Carousel Header Bar: Project Name, Location, View Project & Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
          {/* Left: Project Title & Location */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal leading-[1.1] text-[#1C1C1B] tracking-tight uppercase">
                  {current.title}
                </h2>
                <div className="flex items-center gap-2 mt-2 sm:mt-3">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#77736B] shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base font-mono uppercase tracking-[0.2em] text-[#77736B]">
                    {current.location}
                  </span>
                  <span className="text-[#77736B]/40">•</span>
                  <span className="text-xs sm:text-sm font-mono tracking-wider text-[#77736B]/80 hidden sm:inline">
                    {current.category}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: "View Project" Link & Circular Black Navigation Buttons */}
          <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 shrink-0 pt-2 md:pt-0">
            {/* Small "View Project" button */}
            <button
              type="button"
              onClick={() => setSelectedProject(current)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.18em] text-[#1C1C1B] hover:text-[#168BCB] transition-colors py-2 px-1 group cursor-pointer"
              aria-label={`View details for ${current.title}`}
            >
              <span>View Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Navigation Arrows: Two Circular Black Buttons */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={prevProject}
                aria-label="Previous Project"
                className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#171817] text-white flex items-center justify-center shadow-md hover:bg-[#2E302E] hover:scale-[1.04] active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#168BCB]"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                type="button"
                onClick={nextProject}
                aria-label="Next Project"
                className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#171817] text-white flex items-center justify-center shadow-md hover:bg-[#2E302E] hover:scale-[1.04] active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#168BCB]"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Image Stage with Layered/Stacked Effect */}
        <div
          className="relative w-full max-w-full my-4 sm:my-8 touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Visual Carousel Stage Container */}
          <div className="relative w-full flex items-center justify-center min-h-[280px] xs:min-h-[340px] sm:min-h-[440px] md:min-h-[520px] lg:min-h-[580px] xl:min-h-[640px]">
            {/* Left Layered Card (Previous project peek behind) */}
            <div
              onClick={prevProject}
              className="hidden md:block absolute left-0 lg:left-4 xl:left-8 w-[78%] md:w-[80%] lg:w-[82%] aspect-[16/10] sm:aspect-[16/10] max-h-[540px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out z-0 -translate-x-10 lg:-translate-x-14 scale-[0.88] lg:scale-[0.91] opacity-35 hover:opacity-60 shadow-lg pointer-events-auto bg-[#E8E4DA]"
              title={`Previous: ${prevItem.title}`}
              aria-hidden="true"
            >
              <img
                src={prevItem.src}
                alt={prevItem.alt}
                className="w-full h-full object-cover filter brightness-[0.92]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[0.5px]" />
            </div>

            {/* Right Layered Card (Next project peek behind) */}
            <div
              onClick={nextProject}
              className="hidden md:block absolute right-0 lg:right-4 xl:right-8 w-[78%] md:w-[80%] lg:w-[82%] aspect-[16/10] sm:aspect-[16/10] max-h-[540px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out z-0 translate-x-10 lg:translate-x-14 scale-[0.88] lg:scale-[0.91] opacity-35 hover:opacity-60 shadow-lg pointer-events-auto bg-[#E8E4DA]"
              title={`Next: ${nextItem.title}`}
              aria-hidden="true"
            >
              <img
                src={nextItem.src}
                alt={nextItem.alt}
                className="w-full h-full object-cover filter brightness-[0.92]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[0.5px]" />
            </div>

            {/* Main Featured Active Image Card */}
            <div className="w-full md:w-[86%] lg:w-[88%] xl:w-[90%] relative z-20 mx-auto">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current.id}
                  custom={direction}
                  variants={shouldReduceMotion ? undefined : slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative w-full aspect-[4/3] xs:aspect-[16/11] sm:aspect-[16/10] max-h-[620px] rounded-2xl sm:rounded-3xl md:rounded-[28px] overflow-hidden bg-[#E8E4DA] shadow-[0_16px_40px_rgba(0,0,0,0.12)] sm:shadow-[0_24px_55px_rgba(0,0,0,0.15)] group cursor-pointer border border-[#1C1C1B]/5"
                  onClick={() => setSelectedProject(current)}
                >
                  <img
                    src={current.src}
                    alt={current.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    loading="eager"
                  />

                  {/* Subtle Elegant Gradient Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171817]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Expand / Quick View Badge on Hover */}
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
                    <div className="flex items-center gap-2 bg-[#171817]/85 backdrop-blur-md text-white px-3.5 py-2 rounded-full text-xs font-mono tracking-wider shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>View Story</span>
                    </div>
                  </div>

                  {/* Minimal Project Category Tag in Top Left */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 pointer-events-none">
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#FFFFFF] bg-[#171817]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                      {current.category}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Stack Hint / Swipe Guide (Visible on mobile/tablet) */}
          <div className="flex md:hidden items-center justify-between mt-4 px-1 text-xs font-mono text-[#77736B]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#168BCB]" />
              Swipe left or right to explore
            </span>
            <span className="uppercase">{current.year}</span>
          </div>
        </div>

        {/* Bottom Project Thumbnail & Progress Bar Pagination */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-[#1C1C1B]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Paging Dots / Mini Bars */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
            {projectsData.map((project, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={project.id}
                  onClick={() => goToProject(idx)}
                  className={`group relative py-2 px-1 focus:outline-none cursor-pointer transition-all duration-300`}
                  aria-label={`Go to project ${project.number}: ${project.title}`}
                >
                  <div
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-8 sm:w-10 bg-[#171817]'
                        : 'w-2 sm:w-2.5 bg-[#1C1C1B]/20 group-hover:bg-[#1C1C1B]/50'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Quick Specifications Meta Bar */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs font-mono text-[#77736B] uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{current.year}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>{current.area}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal / Lightbox Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#171817]/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-[#F5F3EE] text-[#1C1C1B] w-full max-w-4xl max-h-[90vh] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col relative border border-[#1C1C1B]/15"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 sm:p-7 border-b border-[#1C1C1B]/10">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#77736B] block">
                    PROJECT {selectedProject.number} • {selectedProject.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1C1B] tracking-tight uppercase mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-[#171817] text-white flex items-center justify-center hover:bg-[#2E302E] transition-colors cursor-pointer"
                  aria-label="Close project modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
                {/* Image */}
                <div className="w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-[#E8E4DA]">
                  <img
                    src={selectedProject.src}
                    alt={selectedProject.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-[#1C1C1B]/10 text-xs font-mono">
                  <div>
                    <span className="block text-[#77736B] uppercase tracking-wider text-[10px]">Location</span>
                    <span className="text-[#1C1C1B] font-medium text-sm mt-0.5 block">{selectedProject.location}</span>
                  </div>
                  <div>
                    <span className="block text-[#77736B] uppercase tracking-wider text-[10px]">Year</span>
                    <span className="text-[#1C1C1B] font-medium text-sm mt-0.5 block">{selectedProject.year}</span>
                  </div>
                  <div>
                    <span className="block text-[#77736B] uppercase tracking-wider text-[10px]">Scale / Area</span>
                    <span className="text-[#1C1C1B] font-medium text-sm mt-0.5 block">{selectedProject.area}</span>
                  </div>
                  <div>
                    <span className="block text-[#77736B] uppercase tracking-wider text-[10px]">Practice</span>
                    <span className="text-[#1C1C1B] font-medium text-sm mt-0.5 block">Elegant Architects</span>
                  </div>
                </div>

                {/* Editorial Description */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#77736B] mb-2">
                    ARCHITECTURAL CONCEPT
                  </h4>
                  <p className="text-sm sm:text-base font-normal text-[#1C1C1B]/90 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              {/* Modal Footer with quick navigation */}
              <div className="p-4 sm:p-6 bg-[#EFECE4] border-t border-[#1C1C1B]/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    const prevIdx = (currentIndex - 1 + totalProjects) % totalProjects;
                    setCurrentIndex(prevIdx);
                    setSelectedProject(projectsData[prevIdx]);
                  }}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1C1C1B] hover:text-[#168BCB] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
                <span className="text-xs font-mono text-[#77736B]">
                  {selectedProject.number} / {totalProjects.toString().padStart(2, '0')}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const nextIdx = (currentIndex + 1) % totalProjects;
                    setCurrentIndex(nextIdx);
                    setSelectedProject(projectsData[nextIdx]);
                  }}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1C1C1B] hover:text-[#168BCB] transition-colors cursor-pointer"
                >
                  <span>Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
