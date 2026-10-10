import React from 'react';
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
  ArrowRight,
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
  const handleScrollToContact = (serviceTitle: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const messageInput = contactSection.querySelector('textarea') as HTMLTextAreaElement | null;
        if (messageInput) {
          messageInput.value = `I am interested in consulting regarding: ${serviceTitle}.`;
          messageInput.focus();
        }
      }, 400);
    }
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

        {/* Compact 3-Column Grid on Desktop, 2 on Tablets, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-6 w-full">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Compass;

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
                className="group relative bg-white rounded-xl border border-[#E8E4DA] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:border-[#168BCB]/40 transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                {/* Compact Decorative Top Banner with Angled Geometric Facet */}
                <div className="relative w-full overflow-hidden bg-[#FAF7F2]">
                  <div
                    className="h-14 sm:h-16 w-full bg-gradient-to-b from-[#F3ECE1] to-[#EAE0D1] transition-colors duration-300 group-hover:from-[#EFE6DB] group-hover:to-[#E4D8C8]"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 98%, 0% 65%)',
                    }}
                  />

                  {/* Compact Circular Icon centered at the top */}
                  <div className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1C1C1B] text-white flex items-center justify-center shadow-sm ring-4 ring-white group-hover:bg-[#168BCB] transition-colors duration-300 z-10">
                    <IconComponent className="w-5 h-5 sm:w-5 sm:h-5 stroke-[1.75]" />
                  </div>
                </div>

                {/* Compact Card Content Body */}
                <div className="pt-5 sm:pt-6 pb-5 px-5 sm:px-6 flex flex-col items-center text-center flex-1 justify-between">
                  <div className="w-full">
                    {/* Service Number Index */}
                    <span className="font-mono text-[10px] sm:text-[11px] text-[#77736B] tracking-[0.2em] uppercase block mb-1 font-medium">
                      {service.number}
                    </span>

                    {/* Service Title */}
                    <h3 className="font-serif text-base sm:text-[17px] font-bold text-[#1C1C1B] tracking-tight uppercase mb-2.5 min-h-[2.5rem] flex items-center justify-center leading-snug">
                      {service.title}
                    </h3>

                    {/* Optional Subheading (for VASTU SERVICES on Landscape Design) */}
                    {service.subheading && (
                      <span className="block font-mono text-[10px] sm:text-[11px] font-bold text-[#168BCB] tracking-[0.2em] uppercase mb-2">
                        {service.subheading}
                      </span>
                    )}

                    {/* Exact Service Description directly beneath title */}
                    <p className="font-sans text-xs text-[#55524D] leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Direct "Read More" Contact / Inquiry Link */}
                  <div className="w-full pt-3 border-t border-[#F2EFE8] flex justify-center mt-auto">
                    <button
                      type="button"
                      onClick={() => handleScrollToContact(service.title)}
                      className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#1C1C1B] group-hover:text-[#168BCB] transition-colors duration-200 cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 bg-[#168BCB] rounded-[1px] shrink-0" />
                      <span>Read More</span>
                      <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                  </div>
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
