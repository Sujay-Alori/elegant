import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="scroll-mt-[80px] sm:scroll-mt-[95px] md:scroll-mt-[110px] relative w-full h-[100svh] min-h-[500px] sm:min-h-[600px] overflow-hidden bg-[#171817] select-none pt-[80px] sm:pt-[95px] md:pt-[110px] flex items-center justify-center"
    >
      {/* Cinematic Fullscreen Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          src="/main.png"
          alt="Elegant Architects Masterpiece"
          initial={{ scale: 1.04, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            opacity: { duration: 1.1, ease: 'easeOut' },
            scale: { duration: 2.5, ease: [0.16, 1, 0.3, 1] },
          }}
          className="w-full h-full object-cover object-center pointer-events-none select-none"
        />

        {/* Subtle dark overlay for optimal slogan readability */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
      </div>

      {/* Hero Content: Centered Slogan Only */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 md:px-12 flex flex-col items-center justify-center text-center pointer-events-auto">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.3] sm:leading-[1.2] tracking-[0.03em] sm:tracking-[0.05em] uppercase text-[#FFFFFF] drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)] max-w-4xl"
        >
          ARCHITECTURE THAT SHAPES THE WAY YOU LIVE.
        </motion.h1>
      </div>
    </section>
  );
};
