import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceItem {
  number: string;
  title: string;
  description?: string;
  subtitle?: string;
}

const servicesList: ServiceItem[] = [
  {
    number: '01',
    title: 'ARCHITECTURAL DESIGN',
    description:
      'We provide to you, we will take into consideration, of your individual tastes and designs. If you can express clearly about the type of Architecture & Interiors you would like to have for your house.',
  },
  {
    number: '02',
    title: 'INTERIOR DESIGN & EXECUTION (TURNKEY)',
    description:
      'We understand that your space is more than just a place of —it’s an extension of your brand and your promise to those you do business /live with us.',
  },
  { number: '03', title: 'CONSTRUCTION (TURNKEY)' },
  { number: '04', title: 'PROJECT MANAGEMENT CONSULTANT' },
  { number: '05', title: 'STRUCTURAL DESIGN' },
  {
    number: '06',
    title: 'LANDSCAPE DESIGN',
    subtitle: 'Vastu Services',
    description:
      'Vastu Shastra services are an effective & versatile way to make a radical difference in your life. It plays an important role in health, happiness & harmony. A correct vastu gives you positive energy so that environment works in your favor.',
  },
  { number: '07', title: 'ESTIMATION & VALUATION' },
  { number: '08', title: 'SURVEYOR' },
  { number: '09', title: 'BUILDING APPROVAL' },
];

const processList: string[] = [
  'Understanding Clients Requirements (Meet & Agree)',
  'Design Development (Idea & Concept)',
  'Drawing & Estimate',
  'Construction (Execution Stage Work)',
  'Interior Furnishing',
  'Project Handover',
];

const teamList: string[] = [
  'Ashok Kumar Sethi. Principal Architects, Founder',
  'Santosh Sahu, Site Engineer',
  'Rajashree Sahoo – Structural Engineer',
  'Mukta Rath – Assistant Architects',
  'Avijit Mohanty – Jr. Architects',
  'Rabin Bisoi – Site Architects/Engineer.',
];

const statsList: string[] = [
  'Finish Project – 109',
  'Happy Clients – 92',
  'Year of Experience – 06',
  'Team Member – 66',
];

export const Services: React.FC = () => {
  const [expandedNumber, setExpandedNumber] = useState<string | null>(null);

  const toggleExpand = (service: ServiceItem) => {
    if (!service.description) return;
    setExpandedNumber((prev) => (prev === service.number ? null : service.number));
  };

  return (
    <section
      id="services"
      className="scroll-mt-[70px] xs:scroll-mt-[80px] sm:scroll-mt-[95px] md:scroll-mt-[110px] py-20 sm:py-28 md:py-36 bg-[#F4F0E8] text-[#1C1C1B] select-none w-full"
      style={{ backgroundColor: '#F4F0E8' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 w-full">
        {/* 1. SERVICES Section */}
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
          {servicesList.map((service, index) => {
            const isExpandable = Boolean(service.description);
            const isExpanded = expandedNumber === service.number;

            return (
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
                onClick={() => toggleExpand(service)}
                className={`group w-full py-4 xs:py-5 sm:py-6 md:py-8 border-b border-[#D8D4CA] flex flex-col transition-colors duration-300 ${
                  isExpandable ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="flex items-baseline gap-3 xs:gap-4 sm:gap-8 md:gap-12 w-full">
                  {/* Number on the left */}
                  <span className="font-mono text-xs sm:text-sm md:text-base text-[#77736B] tracking-widest min-w-[24px] xs:min-w-[28px] sm:min-w-[36px] md:min-w-[44px] shrink-0">
                    {service.number}
                  </span>

                  {/* Service Title and Expandable Content */}
                  <div className="flex-1 flex flex-col min-w-0">
                    <div className="flex items-center justify-between w-full">
                      <motion.span
                        whileHover={isExpandable ? { x: 4 } : {}}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className={`font-serif text-sm xs:text-base sm:text-2xl md:text-3xl lg:text-[32px] font-normal tracking-[0.02em] sm:tracking-[0.03em] uppercase transition-colors duration-300 leading-snug break-words ${
                          isExpanded
                            ? 'text-[#168BCB]'
                            : isExpandable
                            ? 'text-[#1C1C1B] group-hover:text-[#168BCB]'
                            : 'text-[#1C1C1B]'
                        }`}
                      >
                        {service.title}
                      </motion.span>
                    </div>

                    {/* Expandable Smooth Description Content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && service.description && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden w-full"
                        >
                          <div className="pt-3 sm:pt-4 md:pt-5 max-w-3xl space-y-2">
                            {service.subtitle && (
                              <h4 className="font-serif text-sm sm:text-base md:text-lg font-medium text-[#1C1C1B] tracking-wide">
                                {service.subtitle}
                              </h4>
                            )}
                            <p className="font-sans text-xs xs:text-sm sm:text-base font-normal text-[#55524D] leading-relaxed break-words">
                              {service.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 2. OUR PROCESS OF WORK Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 xs:mt-20 sm:mt-28 md:mt-36 mb-8 sm:mb-12"
        >
          <span className="block text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#77736B] mb-3">
            METHODOLOGY
          </span>
          <h3 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#1C1C1B] tracking-tight uppercase">
            OUR PROCESS OF WORK
          </h3>
        </motion.div>

        {/* Process Top Thin Horizontal Divider */}
        <div className="w-full h-[1px] bg-[#D8D4CA]" />

        {/* Process Vertical List */}
        <div className="w-full flex flex-col">
          {processList.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group w-full py-4 xs:py-5 sm:py-6 md:py-8 border-b border-[#D8D4CA] flex items-baseline gap-3 xs:gap-4 sm:gap-6 md:gap-8 transition-colors duration-300 cursor-default"
            >
              <span className="text-[#168BCB] text-sm xs:text-base sm:text-xl md:text-2xl shrink-0 font-serif select-none">
                ➢
              </span>
              <motion.span
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="font-serif text-sm xs:text-base sm:text-2xl md:text-3xl lg:text-[32px] font-normal tracking-[0.02em] sm:tracking-[0.03em] uppercase text-[#1C1C1B] group-hover:text-[#168BCB] transition-colors duration-300 leading-snug break-words flex-1 min-w-0"
              >
                {item}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* 3. ELEGANT TEAM Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 xs:mt-20 sm:mt-28 md:mt-36 mb-8 sm:mb-12"
        >
          <span className="block text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#77736B] mb-3">
            PEOPLE & EXPERTISE
          </span>
          <h3 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#1C1C1B] tracking-tight uppercase">
            ELEGANT TEAM
          </h3>
        </motion.div>

        {/* Team Top Thin Horizontal Divider */}
        <div className="w-full h-[1px] bg-[#D8D4CA]" />

        {/* Team Members Vertical List */}
        <div className="w-full flex flex-col">
          {teamList.map((member, index) => (
            <motion.div
              key={member}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group w-full py-4 xs:py-5 sm:py-6 md:py-8 border-b border-[#D8D4CA] flex items-baseline gap-3 xs:gap-4 sm:gap-6 md:gap-8 transition-colors duration-300 cursor-default"
            >
              <span className="text-[#168BCB] text-sm xs:text-base sm:text-xl md:text-2xl shrink-0 font-serif select-none">
                ➢
              </span>
              <motion.span
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="font-serif text-sm xs:text-base sm:text-2xl md:text-3xl lg:text-[32px] font-normal tracking-[0.02em] sm:tracking-[0.03em] uppercase text-[#1C1C1B] group-hover:text-[#168BCB] transition-colors duration-300 leading-snug break-words flex-1 min-w-0"
              >
                {member}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Statistics Vertical List directly below Team */}
        <div className="w-full flex flex-col mt-6 sm:mt-10">
          {statsList.map((stat, index) => (
            <motion.div
              key={stat}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group w-full py-4 xs:py-5 sm:py-6 md:py-8 border-b border-[#D8D4CA] flex items-baseline gap-3 xs:gap-4 sm:gap-6 md:gap-8 transition-colors duration-300 cursor-default"
            >
              <span className="text-[#168BCB] text-sm xs:text-base sm:text-xl md:text-2xl shrink-0 font-serif select-none">
                ➢
              </span>
              <motion.span
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="font-serif text-sm xs:text-base sm:text-2xl md:text-3xl lg:text-[32px] font-normal tracking-[0.02em] sm:tracking-[0.03em] uppercase text-[#1C1C1B] group-hover:text-[#168BCB] transition-colors duration-300 leading-snug break-words flex-1 min-w-0"
              >
                {stat}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
