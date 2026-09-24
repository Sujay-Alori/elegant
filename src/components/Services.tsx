import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Layout, 
  Briefcase, 
  Layers, 
  Trees, 
  Calculator, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'Layout':
        return <Layout className="w-6 h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      case 'Layers':
        return <Layers className="w-6 h-6" />;
      case 'Trees':
        return <Trees className="w-6 h-6" />;
      case 'Calculator':
        return <Calculator className="w-6 h-6" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6" />;
      default:
        return <Compass className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-[#0284C7]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
                COMPREHENSIVE PRACTICE SCOPE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#0A0D14] uppercase">
              Our Expertise
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mt-4 md:mt-0 font-normal">
            Seven unified architectural disciplines engineered to deliver holistic excellence from concept sketch to structural occupancy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative bg-white rounded-xl p-8 border border-slate-200 hover:border-[#0284C7] shadow-sm hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 flex flex-col justify-between ${
                index === 0 ? 'lg:col-span-2 bg-gradient-to-br from-white via-white to-sky-50/40' : ''
              }`}
            >
              {/* Subtle Red Accent Top-Corner Detail on Hover */}
              <div className="absolute top-0 right-8 w-12 h-1 bg-transparent group-hover:bg-[#DC2626] transition-colors duration-300 rounded-b" />
              
              {/* Architectural drafting ticks */}
              <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-300 group-hover:text-[#0284C7] transition-colors">
                REF // {service.number}
              </div>

              <div>
                {/* Header: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-slate-400 group-hover:text-[#0284C7] transition-colors">
                    {service.number} —
                  </span>

                  <div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-[#0284C7] group-hover:text-white transition-all duration-300 flex items-center justify-center border border-slate-200/80 group-hover:border-[#0284C7] shadow-sm">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0A0D14] group-hover:text-[#0284C7] transition-colors mb-2">
                  {service.title}
                </h3>

                <p className="text-xs font-mono uppercase text-[#0369A1] tracking-wider mb-3">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Deliverables list */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Key Deliverables:
                  </div>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0284C7] group-hover:bg-[#DC2626] transition-colors flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-800 group-hover:text-[#0284C7] transition-colors"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-[#DC2626] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
