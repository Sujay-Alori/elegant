import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Lightbulb,
  FileSpreadsheet,
  HardHat,
  Sparkles,
  KeyRound,
  ArrowRight,
} from 'lucide-react';

interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  colorName: string;
  accentBg: string;
  iconColor: string;
  borderColor: string;
  hoverBorder: string;
  badgeBg: string;
}

const processStages: ProcessStage[] = [
  {
    step: '01',
    title: 'Understanding Client Requirements',
    subtitle: 'Meet & Agree',
    icon: Users,
    colorName: 'Blue',
    accentBg: 'bg-sky-50/70',
    iconColor: 'text-[#168BCB]',
    borderColor: 'border-sky-200/80',
    hoverBorder: 'hover:border-[#168BCB]',
    badgeBg: 'bg-[#168BCB]',
  },
  {
    step: '02',
    title: 'Design Development',
    subtitle: 'Idea & Concept',
    icon: Lightbulb,
    colorName: 'Teal',
    accentBg: 'bg-teal-50/70',
    iconColor: 'text-[#0D9488]',
    borderColor: 'border-teal-200/80',
    hoverBorder: 'hover:border-[#0D9488]',
    badgeBg: 'bg-[#0D9488]',
  },
  {
    step: '03',
    title: 'Drawing & Estimate',
    subtitle: 'Detailed drawings and project cost estimation',
    icon: FileSpreadsheet,
    colorName: 'Green',
    accentBg: 'bg-emerald-50/70',
    iconColor: 'text-[#16A34A]',
    borderColor: 'border-emerald-200/80',
    hoverBorder: 'hover:border-[#16A34A]',
    badgeBg: 'bg-[#16A34A]',
  },
  {
    step: '04',
    title: 'Construction',
    subtitle: 'Execution Stage Work',
    icon: HardHat,
    colorName: 'Orange',
    accentBg: 'bg-orange-50/70',
    iconColor: 'text-[#EA580C]',
    borderColor: 'border-orange-200/80',
    hoverBorder: 'hover:border-[#EA580C]',
    badgeBg: 'bg-[#EA580C]',
  },
  {
    step: '05',
    title: 'Interior Furnishing',
    subtitle: 'Interior finishing and furnishing',
    icon: Sparkles,
    colorName: 'Coral',
    accentBg: 'bg-rose-50/70',
    iconColor: 'text-[#E11D48]',
    borderColor: 'border-rose-200/80',
    hoverBorder: 'hover:border-[#E11D48]',
    badgeBg: 'bg-[#E11D48]',
  },
  {
    step: '06',
    title: 'Project Handover',
    subtitle: 'Final review and handover',
    icon: KeyRound,
    colorName: 'Pink',
    accentBg: 'bg-pink-50/70',
    iconColor: 'text-[#DB2777]',
    borderColor: 'border-pink-200/80',
    hoverBorder: 'hover:border-[#DB2777]',
    badgeBg: 'bg-[#DB2777]',
  },
];

export const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="scroll-mt-[70px] xs:scroll-mt-[80px] sm:scroll-mt-[95px] md:scroll-mt-[110px] py-16 sm:py-20 md:py-28 bg-[#FAF7F2] text-[#1C1C1B] relative w-full overflow-hidden"
      style={{ backgroundColor: '#FAF7F2' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          {/* Centered Decorative Line Accent */}
          <div className="flex items-center justify-center gap-1.5 mb-3">
            <span className="w-6 h-[2px] bg-[#168BCB] rounded-full" />
            <span className="w-2 h-2 rotate-45 bg-[#D92525] rounded-[1px]" />
            <span className="w-6 h-[2px] bg-[#168BCB] rounded-full" />
          </div>

          <span className="block text-xs font-mono uppercase tracking-[0.28em] text-[#77736B] mb-2 font-medium">
            METHODOLOGY
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-normal text-[#1C1C1B] tracking-tight uppercase mb-3.5 leading-tight">
            Our Process of Work
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-[#66635B] leading-relaxed max-w-2xl mx-auto">
            A disciplined, sequential architectural workflow taking your project seamlessly from initial consultation to turnkey handover.
          </p>
        </motion.div>

        {/* Desktop & Tablet Connected Process Infographic Sequence */}
        <div className="relative w-full">
          {/* Subtle Horizontal Connecting Rail for Desktop */}
          <div className="hidden lg:block absolute top-[92px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-sky-200 via-emerald-200 via-orange-200 via-rose-200 to-pink-200 z-0 pointer-events-none" />

          {/* Grid of 6 Tall Capsule Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-4 lg:gap-3.5 relative z-10">
            {processStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group relative bg-white rounded-[32px] sm:rounded-[36px] p-5 sm:p-5 lg:p-4.5 border ${stage.borderColor} ${stage.hoverBorder} shadow-[0_4px_18px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[300px] sm:min-h-[320px] lg:min-h-[350px] hover:-translate-y-1.5`}
                >
                  {/* Top Stage Capsule / Number Pill */}
                  <div className="w-full flex flex-col items-center">
                    <div className="flex items-center justify-center gap-1 mb-4">
                      <span
                        className={`text-[10px] font-mono font-bold text-white px-2.5 py-0.5 rounded-full ${stage.badgeBg} shadow-xs`}
                      >
                        STAGE {stage.step}
                      </span>
                    </div>

                    {/* Circular Icon Container */}
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${stage.accentBg} ${stage.iconColor} border ${stage.borderColor} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-108 shadow-xs`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75]" />
                    </div>

                    {/* Stage Title */}
                    <h3 className="font-serif text-sm sm:text-[15px] font-bold text-[#1C1C1B] tracking-tight uppercase leading-snug mb-2.5 px-1 min-h-[2.5rem] flex items-center justify-center">
                      {stage.title}
                    </h3>
                  </div>

                  {/* Stage Supporting Text */}
                  <div className="w-full pt-3 border-t border-[#F0ECE1] mt-auto">
                    <p className="font-sans text-[11px] sm:text-xs text-[#55524D] leading-relaxed">
                      {stage.subtitle}
                    </p>
                  </div>

                  {/* Flow Arrow indicator on mobile/tablet */}
                  {idx < processStages.length - 1 && (
                    <div className="lg:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border border-[#D8D4CA] flex items-center justify-center text-[#77736B] z-20 shadow-xs sm:hidden">
                      <ArrowRight className="w-3 h-3 rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
