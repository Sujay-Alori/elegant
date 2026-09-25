import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface HeroProps {
  onExploreWork?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.4,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="scroll-mt-[80px] sm:scroll-mt-[95px] md:scroll-mt-[110px] relative w-full h-[100svh] min-h-[500px] sm:min-h-[600px] overflow-hidden bg-[#171817] select-none pt-[80px] sm:pt-[95px] md:pt-[110px]"
    >
      {/* Cinematic Fullscreen Background Image with Subtle Slow Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="/hero.png"
          alt="Architectural Masterpiece by Elegant Architects"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            opacity: { duration: 1.4, ease: 'easeOut' },
            scale: { duration: 3.5, ease: [0.16, 1, 0.3, 1] },
          }}
          className="w-full h-full object-cover object-center pointer-events-none select-none"
        />

        {/* Subtle, Balanced Overlay Gradients: Preserves image luminance while guaranteeing readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171817]/65 via-[#171817]/20 to-[#171817]/35 pointer-events-none" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#171817]/55 via-[#171817]/20 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Container: Perfectly centered on mobile, lower-left on desktop */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-10 md:px-12 flex flex-col justify-center sm:justify-end items-center sm:items-start text-center sm:text-left pb-12 sm:pb-24 md:pb-28 pointer-events-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl sm:max-w-2xl flex flex-col items-center sm:items-start"
        >
          {/* Subtitle / Studio Label (Desktop only) */}
          <motion.div variants={itemVariants} className="hidden sm:block mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#FFFFFF]/80 drop-shadow">
              ELEGANT ARCHITECTS
            </span>
          </motion.div>

          {/* Main Editorial Architectural-Serif Slogan */}
          <h1 className="font-serif text-[20px] xs:text-[22px] sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.3] sm:leading-[1.16] tracking-[0.02em] sm:tracking-tight uppercase text-[#FFFFFF] drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            <span className="block overflow-hidden">
              <motion.span variants={lineVariants} className="block">
                Architecture that
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={lineVariants} className="block">
                shapes the way
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={lineVariants} className="block">
                you live.
              </motion.span>
            </span>
          </h1>

          {/* Minimal Architectural EXPLORE OUR WORK Link Directly Below Slogan */}
          <motion.div variants={itemVariants} className="mt-5 sm:mt-7">
            <a
              href="#projects"
              onClick={onExploreWork}
              className="group inline-flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#FFFFFF]/90 hover:text-[#FFFFFF] transition-colors duration-300 py-1 outline-none cursor-pointer"
            >
              <span className="relative">
                EXPLORE OUR WORK
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-[#168BCB] group-hover:w-full transition-all duration-300" />
              </span>
              <span className="transform group-hover:translate-x-1.5 transition-transform duration-300 text-[#FFFFFF]/80 group-hover:text-[#FFFFFF]">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Gentle Bottom-Left Scroll Indicator (Desktop only) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.5 }}
        className="hidden sm:flex absolute bottom-6 left-6 sm:bottom-8 sm:left-10 md:left-12 z-10 items-center gap-2 pointer-events-none"
      >
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#FFFFFF]/75"
        >
          SCROLL TO EXPLORE ↓
        </motion.span>
      </motion.div>
    </section>
  );
};
