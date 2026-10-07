import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 5 High-Quality Architectural Background Images for Continuous Crossfade Loop
const heroImages = [
  {
    src: '/images/cover_bg_1.jpg',
    alt: 'Masterpiece Architecture by Elegant Architects',
  },
  {
    src: '/images/img_bg_1.jpg',
    alt: 'Contemporary Living & Structural Design',
  },
  {
    src: '/images/img_bg_2.jpg',
    alt: 'Bespoke Luxury Villa & Spatial Planning',
  },
  {
    src: '/images/img_bg_3.jpg',
    alt: 'Modern Architectural Elevation & Form',
  },
  {
    src: '/images/img-1.jpg',
    alt: 'Tropical Modernist Residence',
  },
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Preload all 5 architectural images on mount to ensure zero flickering during transitions
  useEffect(() => {
    heroImages.forEach((img) => {
      const imageObj = new Image();
      imageObj.src = img.src;
    });
  }, []);

  // Automatic slideshow rotation every 4.5 seconds with continuous looping (1 -> 2 -> 3 -> 4 -> 5 -> 1)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const currentImage = heroImages[currentImageIndex];

  return (
    <section
      id="home"
      className="scroll-mt-[70px] xs:scroll-mt-[80px] sm:scroll-mt-[95px] md:scroll-mt-[110px] relative w-full h-[100svh] min-h-[560px] sm:min-h-[640px] md:min-h-[720px] overflow-hidden bg-[#171817] select-none pt-[70px] xs:pt-[80px] sm:pt-[95px] md:pt-[110px] flex items-center justify-center"
      aria-label="Elegant Architects Hero Showcase"
    >
      {/* Rotating Background Slideshow Container with Smooth Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImage.src}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1.0] },
              scale: { duration: 5.5, ease: 'linear' },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-full object-cover object-center pointer-events-none select-none filter brightness-[0.95]"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle, Balanced Architectural Dark Overlay Gradients for High Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171817]/85 via-[#171817]/35 to-[#171817]/45 pointer-events-none" />
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      {/* Hero Content: Centered Architectural Slogan & Brand Statement */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 md:px-12 flex flex-col items-center justify-center text-center pointer-events-auto">
        {/* Subtle Studio Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3 sm:mb-5"
        >
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.35em] text-[#FFFFFF]/85 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            ELEGANT ARCHITECTS • ESTD. 2014
          </span>
        </motion.div>

        {/* Main Architectural Serif Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal leading-[1.25] sm:leading-[1.18] tracking-[0.03em] sm:tracking-[0.05em] uppercase text-[#FFFFFF] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] max-w-4xl"
        >
          ARCHITECTURE THAT SHAPES THE WAY YOU LIVE.
        </motion.h1>

        {/* Minimal Editorial Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base font-sans font-light text-[#FFFFFF]/85 max-w-2xl leading-relaxed tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
        >
          Designing bespoke residential, commercial and interior spaces with timeless craftsmanship.
        </motion.p>

        {/* Subtle CTA Anchor to Explore Selected Works */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-6 sm:mt-8"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#FFFFFF]/90 hover:text-[#FFFFFF] transition-colors duration-300 py-1 cursor-pointer"
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
      </div>

      {/* Gentle Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.2 }}
        className="hidden sm:flex absolute bottom-6 left-6 sm:bottom-8 sm:left-10 md:left-12 z-10 items-center gap-2 pointer-events-none"
      >
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#FFFFFF]/75 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]"
        >
          SCROLL TO EXPLORE ↓
        </motion.span>
      </motion.div>
    </section>
  );
};
