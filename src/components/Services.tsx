import React from 'react';
import { motion } from 'framer-motion';

interface ServiceItem {
  number: string;
  title: string;
}

const servicesList: ServiceItem[] = [
  { number: '01', title: 'ARCHITECTURAL DESIGN' },
  { number: '02', title: 'INTERIOR DESIGN & EXECUTION (TURNKEY)' },
  { number: '03', title: 'CONSTRUCTION (TURNKEY)' },
  { number: '04', title: 'PROJECT MANAGEMENT CONSULTANT' },
  { number: '05', title: 'STRUCTURAL DESIGN' },
  { number: '06', title: 'LANDSCAPE DESIGN' },
  { number: '07', title: 'ESTIMATION & VALUATION' },
  { number: '08', title: 'SURVEYOR' },
  { number: '09', title: 'BUILDING APPROVAL' },
];

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="scroll-mt-[80px] sm:scroll-mt-[95px] md:scroll-mt-[110px] py-20 sm:py-28 md:py-36 bg-[#F4F0E8] text-[#1C1C1B] select-none"
      style={{ backgroundColor: '#F4F0E8' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 w-full">
        {/* Eyebrow & Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-12"
        >
          <span className="block text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#77736B] mb-3">
            OUR EXPERTISE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#1C1C1B] tracking-tight uppercase">
            SERVICES
          </h2>
        </motion.div>

        {/* Top Thin Horizontal Divider */}
        <div className="w-full h-[1px] bg-[#D8D4CA]" />

        {/* Clean Vertical Numbered Editorial List */}
        <div className="w-full flex flex-col">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group w-full py-5 sm:py-6 md:py-8 border-b border-[#D8D4CA] flex items-baseline justify-between transition-colors duration-300 cursor-default"
            >
              <div className="flex items-baseline gap-4 sm:gap-8 md:gap-12 w-full">
                {/* Number on the left */}
                <span className="font-mono text-xs sm:text-sm md:text-base text-[#77736B] tracking-widest min-w-[28px] sm:min-w-[36px] md:min-w-[44px] shrink-0">
                  {service.number}
                </span>

                {/* Service Name with subtle horizontal shift and color transition on hover */}
                <motion.span
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="font-serif text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-[32px] font-normal tracking-[0.02em] sm:tracking-[0.03em] uppercase text-[#1C1C1B] group-hover:text-[#168BCB] transition-colors duration-300 leading-snug"
                >
                  {service.title}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
