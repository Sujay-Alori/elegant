import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="scroll-mt-[80px] sm:scroll-mt-[95px] md:scroll-mt-[110px] py-24 sm:py-32 md:py-40 bg-[#F5F3EE] text-[#1C1C1B] select-none relative"
      style={{ backgroundColor: '#F5F3EE' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Eyebrow & Founder Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-col justify-between"
          >
            <div>
              <span className="block text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#77736B] mb-2">
                ABOUT US
              </span>
              <div className="w-8 h-[1px] bg-[#1C1C1B]/20 mb-6 hidden lg:block" />
            </div>

            <div className="hidden lg:block pt-8 border-t border-[#1C1C1B]/15 text-xs font-mono text-[#77736B]">
              <span className="block uppercase tracking-wider text-[#1C1C1B] font-medium mb-1">
                Ar. Ashok Kumar Sethi
              </span>
              <span className="block uppercase tracking-widest text-[10px]">
                Founder & Principal Architect
              </span>
              <span className="block mt-2 text-[10px] text-[#77736B]">
                ESTD. 2014 • BHUBANESWAR
              </span>
            </div>
          </motion.div>

          {/* Right Column: Main Editorial Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-9"
          >
            {/* Main Editorial Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.14] text-[#1C1C1B] tracking-tight uppercase mb-8 sm:mb-10">
              DESIGNING WITH<br />
              PURPOSE.
            </h2>

            {/* Paragraph 1: Foundation & Pedigree */}
            <p className="text-base sm:text-lg md:text-xl font-normal text-[#1C1C1B] leading-[1.8] max-w-3xl mb-6">
              <strong className="font-semibold text-[#1C1C1B]">ELEGANT ARCHITECTS</strong>, founded by{' '}
              <strong className="font-semibold text-[#1C1C1B]">Ar. Ashok Kumar Sethi</strong> in 2014, What sets the studio apart is a brilliant combination of tradition and modernity. After Completing Master Degree from College of Engineering & Technology, Bhubaneswar. He worked with some of the finest architects of the country and then found his own practice.
            </p>

            {/* Paragraph 2: Multidisciplinary Scope */}
            <p className="text-sm sm:text-base md:text-lg font-normal text-[#1C1C1B]/85 leading-[1.8] max-w-3xl mb-12 sm:mb-16">
              It is a multidisciplinary architecture firm, work at multiple scales right from private client to corporate. This allows us to experiment and diversify our work: Architectural, Interior & Landscape Projects such as Luxury Bungalows, Unique Offices Decorum, Commercial & Residential Complexes, Institutional Complex, Hotel & Restaurants etc.
            </p>

            {/* Large Clean Editorial Architectural Image */}
            <div className="w-full my-10 sm:my-14 overflow-hidden">
              <motion.img
                src="/images/img_bg_1.jpg"
                alt="Architectural space designed by Elegant Architects"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-[280px] sm:h-[400px] md:h-[480px] object-cover"
                loading="lazy"
              />
            </div>

            {/* Mission Subsection */}
            <div className="pt-10 sm:pt-12 border-t border-[#1C1C1B]/15 mb-10 sm:mb-12">
              <span className="block text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#77736B] mb-3">
                MISSION
              </span>
              <p className="text-sm sm:text-base md:text-lg font-normal text-[#1C1C1B]/90 leading-[1.8] max-w-3xl">
                We are creative, passionate and professional Architect and Interior designer in Bhubaneswar. Our mission is to provide the Creative & Elegant design solutions whatsoever the design service you need, be it for home, office, store, hotel and restaurant. Our objective is simple, creating your premise unique and passionate that people appreciate and color your dream to be true.
              </p>
            </div>

            {/* Vision Subsection */}
            <div className="pt-10 sm:pt-12 border-t border-[#1C1C1B]/15">
              <span className="block text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#77736B] mb-3">
                VISION
              </span>
              <p className="text-sm sm:text-base md:text-lg font-normal text-[#1C1C1B]/90 leading-[1.8] max-w-3xl">
                Our vision is to create spectacular as well as magnificent living or working environment for our clients. We help our clients to meet their business objectives by way of our interior design solutions. We have different type of work for our clients, but we look after their projects from same perspective to satisfy them with best of the best works.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
