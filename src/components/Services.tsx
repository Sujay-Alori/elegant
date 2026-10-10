import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Paintbrush,
  HardHat,
  ClipboardCheck,
  Ruler,
  Trees,
  Calculator,
  Crosshair,
  FileCheck2,
  type LucideIcon,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

// Map icon names to Lucide icon components
const iconMap: Record<string, LucideIcon> = {
  Compass,
  Paintbrush,
  HardHat,
  ClipboardCheck,
  Ruler,
  Trees,
  Calculator,
  Crosshair,
  FileCheck2,
};

export const Services: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="services"
      className="scroll-mt-[70px] xs:scroll-mt-[80px] sm:scroll-mt-[95px] md:scroll-mt-[110px] py-16 sm:py-20 md:py-24 bg-[#F4F0E8] text-[#1C1C1B] relative w-full"
      style={{ backgroundColor: '#F4F0E8' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full">
        {/* Top Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto"
        >
          {/* Centered Decorative Accent Line */}
          <div className="flex items-center justify-center gap-1.5 mb-3">
            <span className="w-6 h-[2px] bg-[#168BCB] rounded-full" />
            <span className="w-2 h-2 rotate-45 bg-[#D92525] rounded-[1px]" />
            <span className="w-6 h-[2px] bg-[#168BCB] rounded-full" />
          </div>

          {/* Centered Eyebrow */}
          <span className="block text-xs font-mono uppercase tracking-[0.25em] text-[#77736B] mb-1.5 font-medium">
            OUR EXPERTISE
          </span>

          {/* Centered Serif Main Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-normal text-[#1C1C1B] tracking-tight uppercase mb-3 leading-tight">
            Services We Offer
          </h2>

          {/* Supporting Subheading */}
          <p className="font-sans text-xs sm:text-sm text-[#66635B] leading-relaxed max-w-xl mx-auto">
            Comprehensive design, civil engineering, and turnkey execution solutions crafted with architectural excellence.
          </p>
        </motion.div>

        {/* 3-Column Grid on Desktop, 2 on Tablets, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 w-full">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Compass;
            const hasImgError = imageErrors[service.id];

            return (
              <motion.div
                key={service.id || service.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-white rounded-2xl border border-[#E8E4DA] shadow-[0_4px_18px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden cursor-default"
              >
                {/* Decorative Top Section with Centered Large Circular Icon / Image (76-88px) */}
                <div className="relative w-full overflow-hidden bg-[#FAF7F2]">
                  {/* Decorative cream-colored facet banner */}
                  <div
                    className="h-24 sm:h-26 md:h-28 w-full bg-gradient-to-b from-[#F3ECE1] to-[#EAE0D1]"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 68%, 50% 98%, 0% 68%)',
                    }}
                  />

                  {/* Large Circular Icon / Asset Container with Dark Background & White Outer Border */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-[84px] sm:h-[84px] md:w-[88px] md:h-[88px] rounded-full bg-[#1C1C1B] ring-4 ring-white shadow-lg overflow-hidden flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-105">
                    {service.image && !hasImgError ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        onError={() => handleImageError(service.id)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 text-white stroke-[1.6]" />
                    )}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="pt-6 sm:pt-7 pb-6 sm:pb-7 px-5 sm:px-6 flex flex-col items-center text-center flex-1 justify-start">
                  {/* Service Number Index */}
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#77736B] tracking-[0.2em] uppercase block mb-1 font-medium">
                    {service.number}
                  </span>

                  {/* Service Title with Serif Typography */}
                  <h3 className="font-serif text-base sm:text-[17px] font-bold text-[#1C1C1B] tracking-tight uppercase mb-2.5 min-h-[2.4rem] flex items-center justify-center leading-snug">
                    {service.title}
                  </h3>

                  {/* Optional Subheading (for VASTU SERVICES on Landscape Design) */}
                  {service.subheading && (
                    <span className="block font-mono text-[10px] sm:text-[11px] font-bold text-[#168BCB] tracking-[0.2em] uppercase mb-1.5">
                      {service.subheading}
                    </span>
                  )}

                  {/* Service Description directly beneath title */}
                  <p className="font-sans text-xs text-[#55524D] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
