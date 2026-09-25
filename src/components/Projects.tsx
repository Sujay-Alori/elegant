import React from 'react';
import { motion } from 'framer-motion';

interface ProjectItem {
  id: string;
  number: string;
  src: string;
  colSpan: string;
  minHeight: string;
}

const projectGallery: ProjectItem[] = [
  // Block 1: Featured Large Landscape (img-1) + Tall Portrait (img-2)
  {
    id: 'work-01',
    number: '01',
    src: '/img-1.jpg',
    colSpan: 'md:col-span-8',
    minHeight: 'min-h-[320px] sm:min-h-[420px] md:min-h-[540px]',
  },
  {
    id: 'work-02',
    number: '02',
    src: '/img-2.jpg',
    colSpan: 'md:col-span-4',
    minHeight: 'min-h-[320px] sm:min-h-[420px] md:min-h-[540px]',
  },

  // Block 2: 3-column architectural rhythm (img-3, img-4, img-5)
  {
    id: 'work-03',
    number: '03',
    src: '/img-3.jpg',
    colSpan: 'md:col-span-4',
    minHeight: 'min-h-[280px] sm:min-h-[360px] md:min-h-[420px]',
  },
  {
    id: 'work-04',
    number: '04',
    src: '/img-4.jpg',
    colSpan: 'md:col-span-4',
    minHeight: 'min-h-[280px] sm:min-h-[360px] md:min-h-[420px]',
  },
  {
    id: 'work-05',
    number: '05',
    src: '/img-5.jpg',
    colSpan: 'md:col-span-4',
    minHeight: 'min-h-[280px] sm:min-h-[360px] md:min-h-[420px]',
  },

  // Block 3: Asymmetric composition (img-6 & img-7)
  {
    id: 'work-06',
    number: '06',
    src: '/img-6.jpg',
    colSpan: 'md:col-span-7',
    minHeight: 'min-h-[300px] sm:min-h-[400px] md:min-h-[500px]',
  },
  {
    id: 'work-07',
    number: '07',
    src: '/img-7.jpg',
    colSpan: 'md:col-span-5',
    minHeight: 'min-h-[300px] sm:min-h-[400px] md:min-h-[500px]',
  },

  // Block 4: Balanced dual frame (img-8 & img-9)
  {
    id: 'work-08',
    number: '08',
    src: '/img-8.jpg',
    colSpan: 'md:col-span-6',
    minHeight: 'min-h-[280px] sm:min-h-[380px] md:min-h-[440px]',
  },
  {
    id: 'work-09',
    number: '09',
    src: '/img-9.jpg',
    colSpan: 'md:col-span-6',
    minHeight: 'min-h-[280px] sm:min-h-[380px] md:min-h-[440px]',
  },
];

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-[80px] sm:scroll-mt-[95px] md:scroll-mt-[110px] py-24 sm:py-32 md:py-40 bg-[#F5F3EE] text-[#1C1C1B] select-none relative"
      style={{ backgroundColor: '#F5F3EE' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12">
        {/* Minimal Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20 md:mb-24"
        >
          <span className="block text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#77736B] mb-3">
            PORTFOLIO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#1C1C1B] tracking-tight uppercase">
            Selected Works
          </h2>
        </motion.div>

        {/* Editorial Masonry Gallery (No cards, no borders, no shadows) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
          {projectGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.8,
                delay: (index % 3) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${item.colSpan} relative group overflow-hidden bg-[#E8E4DA] cursor-pointer`}
            >
              <div className={`w-full h-full ${item.minHeight} overflow-hidden relative`}>
                <img
                  src={item.src}
                  alt={`Selected Architectural Work ${item.number}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Minimal Project Number reveal on hover */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="text-xs sm:text-sm font-mono tracking-widest text-[#FFFFFF] bg-[#171817]/80 backdrop-blur-sm px-2.5 py-1">
                    {item.number}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
