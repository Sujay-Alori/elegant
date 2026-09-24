import React from 'react';
import { motion } from 'framer-motion';
import { Award, Layers, Users2, ZoomIn } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-7 h-7 text-[#38BDF8]" />,
      title: 'Experienced Design Approach',
      description: 'Over a decade of demonstrated architectural practice since 2016, synthesizing climatic vernacular wisdom with cutting-edge contemporary construction technologies.',
    },
    {
      icon: <Layers className="w-7 h-7 text-[#DC2626]" />,
      title: 'Multidisciplinary Expertise',
      description: 'All 7 disciplines under one roof: Architecture, Interiors, Structural Engineering, Landscape, Quantity Estimation, and Topographical Surveying.',
    },
    {
      icon: <Users2 className="w-7 h-7 text-[#38BDF8]" />,
      title: 'Client-Focused Solutions',
      description: 'Every project is uniquely customized around your lifestyle, organizational workflow, budget parameters, and site-specific micro-environment.',
    },
    {
      icon: <ZoomIn className="w-7 h-7 text-[#DC2626]" />,
      title: 'Attention to Detail',
      description: 'Zero compromises on construction tolerance, acoustic refinement, shadow line reveal joints, waterproofing integrity, and material finish craftsmanship.',
    },
  ];

  return (
    <section className="py-28 sm:py-36 bg-[#0A0D14] text-white relative overflow-hidden">
      {/* Background Architectural Luxury Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85"
          alt="Architectural detailing by Elegant Architects"
          className="w-full h-full object-cover object-center opacity-25 filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/90 to-[#0A0D14]" />
        <div className="absolute inset-0 bg-grid-dark opacity-35" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-[0.25em] text-[#38BDF8] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            THE ELEGANT DISTINCTION
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white uppercase leading-tight">
            Why Elegant Architects
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl font-normal leading-relaxed">
            Elevating Odisha's built environment through architectural rigor, structural innovation, and unwavering design commitment.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-8 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 hover:border-[#0284C7] transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-transparent group-hover:bg-[#0284C7] transition-colors" />

              <div>
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#0284C7]/20 group-hover:border-[#0284C7]/40 transition-all">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold font-display tracking-wide uppercase text-white mb-3 group-hover:text-[#38BDF8] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>PILLAR 0{idx + 1}</span>
                <span className="text-[#38BDF8]">GUARANTEED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
