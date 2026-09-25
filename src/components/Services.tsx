import React from 'react';
import { motion } from 'framer-motion';

interface ServiceItem {
  number: string;
  title: string;
}

const servicesList: ServiceItem[] = [
  { number: '01', title: 'General Contracting' },
  { number: '02', title: 'Pre-Construction Design' },
  { number: '03', title: 'Building & Modeling' },
  { number: '04', title: 'Construction Management' },
  { number: '05', title: 'Design & Build' },
  { number: '06', title: 'House Remodeling' },
  { number: '07', title: 'Construction Management' },
  { number: '08', title: 'Painting & Tiling' },
  { number: '09', title: 'Kitchen Remodeling' },
];

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="scroll-mt-[80px] sm:scroll-mt-[95px] md:scroll-mt-[110px] py-24 sm:py-32 md:py-40 bg-[#F4F0E8] text-[#1C1C1B] select-none relative"
      style={{ backgroundColor: '#F4F0E8' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20 md:mb-24"
        >
          <span className="block text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#77736B] mb-3">
            OUR EXPERTISE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#1C1C1B] tracking-tight uppercase">
            Services
          </h2>
        </motion.div>

        {/* Minimal Editorial Service List (No cards, no colorful boxes, no gradients) */}
        <div className="border-t border-[#1C1C1B]/15">
          {servicesList.map((service, index) => (
            <motion.div
              key={`${service.number}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.03,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative border-b border-[#1C1C1B]/15 py-6 sm:py-8 md:py-10 cursor-pointer"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-baseline gap-6 sm:gap-10 md:gap-14 lg:gap-20 flex-1">
                  {/* Service Number Index */}
                  <span className="font-mono text-xs sm:text-sm md:text-base text-[#77736B] tracking-widest flex-shrink-0 group-hover:text-[#1C1C1B] transition-colors duration-300">
                    {service.number}
                  </span>

                  {/* Service Title */}
                  <h3 className="font-display font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#1C1C1B] tracking-[0.04em] uppercase transform transition-transform duration-300 ease-out group-hover:translate-x-3 sm:group-hover:translate-x-4">
                    {service.title}
                  </h3>
                </div>

                {/* Subtle Interactive Arrow Reveal on Hover */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out text-[#1C1C1B] text-lg sm:text-2xl md:text-3xl font-light">
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
