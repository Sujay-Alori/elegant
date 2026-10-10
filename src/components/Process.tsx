import React, { useState } from 'react';
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
  image?: string;
  outlineColor: string;
  badgeBg: string;
  iconBg: string;
  iconColor: string;
  softGlow: string;
}

const processStages: ProcessStage[] = [
  {
    step: '01',
    title: 'Understanding Client Requirements',
    subtitle: 'Meet & Agree',
    icon: Users,
    outlineColor: 'border-[#168BCB] hover:border-[#0E699B]',
    badgeBg: 'bg-[#168BCB]',
    iconBg: 'bg-sky-50 text-[#168BCB] border-[#168BCB]/40',
    iconColor: 'text-[#168BCB]',
    softGlow: 'hover:shadow-[0_12px_32px_rgba(22,139,203,0.18)]',
  },
  {
    step: '02',
    title: 'Design Development',
    subtitle: 'Idea & Concept',
    icon: Lightbulb,
    image: '/Architectural-Design.jpeg',
    outlineColor: 'border-[#0D9488] hover:border-[#0F766E]',
    badgeBg: 'bg-[#0D9488]',
    iconBg: 'bg-teal-50 text-[#0D9488] border-[#0D9488]/40',
    iconColor: 'text-[#0D9488]',
    softGlow: 'hover:shadow-[0_12px_32px_rgba(13,148,136,0.18)]',
  },
  {
    step: '03',
    title: 'Drawing & Estimate',
    subtitle: 'Detailed Drawings & Costing',
    icon: FileSpreadsheet,
    image: '/Cost-Estimation.jpg',
    outlineColor: 'border-[#16A34A] hover:border-[#15803D]',
    badgeBg: 'bg-[#16A34A]',
    iconBg: 'bg-emerald-50 text-[#16A34A] border-[#16A34A]/40',
    iconColor: 'text-[#16A34A]',
    softGlow: 'hover:shadow-[0_12px_32px_rgba(22,163,74,0.18)]',
  },
  {
    step: '04',
    title: 'Construction',
    subtitle: 'Execution Stage Work',
    icon: HardHat,
    image: '/Construction.jpg',
    outlineColor: 'border-[#EA580C] hover:border-[#C2410C]',
    badgeBg: 'bg-[#EA580C]',
    iconBg: 'bg-orange-50 text-[#EA580C] border-[#EA580C]/40',
    iconColor: 'text-[#EA580C]',
    softGlow: 'hover:shadow-[0_12px_32px_rgba(234,88,12,0.18)]',
  },
  {
    step: '05',
    title: 'Interior Furnishing',
    subtitle: 'Interior Finishing & Styling',
    icon: Sparkles,
    image: '/Interior-Design.jpg',
    outlineColor: 'border-[#E11D48] hover:border-[#BE123C]',
    badgeBg: 'bg-[#E11D48]',
    iconBg: 'bg-rose-50 text-[#E11D48] border-[#E11D48]/40',
    iconColor: 'text-[#E11D48]',
    softGlow: 'hover:shadow-[0_12px_32px_rgba(225,29,72,0.18)]',
  },
  {
    step: '06',
    title: 'Project Handover',
    subtitle: 'Final Review & Handover',
    icon: KeyRound,
    image: '/rev-1.jpg',
    outlineColor: 'border-[#DB2777] hover:border-[#BE185D]',
    badgeBg: 'bg-[#DB2777]',
    iconBg: 'bg-pink-50 text-[#DB2777] border-[#DB2777]/40',
    iconColor: 'text-[#DB2777]',
    softGlow: 'hover:shadow-[0_12px_32px_rgba(219,39,119,0.18)]',
  },
];

export const Process: React.FC = () => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImgError = (step: string) => {
    setImgErrors((prev) => ({ ...prev, [step]: true }));
  };

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

        {/* Connected Stages Infographic */}
        <div className="relative w-full">
          {/* Horizontal Connecting Rail across stages on Desktop */}
          <div className="hidden lg:block absolute top-[108px] left-[7%] right-[7%] h-[2.5px] bg-gradient-to-r from-[#168BCB] via-[#16A34A] via-[#EA580C] via-[#E11D48] to-[#DB2777] z-0 opacity-40 pointer-events-none" />

          {/* Grid of 6 Tall Capsule Cards with Colored Outlines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-4 lg:gap-3.5 relative z-10">
            {processStages.map((stage, idx) => {
              const Icon = stage.icon;
              const hasImg = Boolean(stage.image && !imgErrors[stage.step]);

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
                  className={`group relative bg-white rounded-[38px] p-5 sm:p-5 lg:p-4.5 border-2 ${stage.outlineColor} shadow-[0_4px_18px_rgba(0,0,0,0.03)] ${stage.softGlow} transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[340px] sm:min-h-[360px] lg:min-h-[380px] hover:-translate-y-2`}
                >
                  {/* Top Content: Number Badge & Enlarged Circular Icon / Image */}
                  <div className="w-full flex flex-col items-center">
                    {/* Stage Number Pill Badge */}
                    <div className="flex items-center justify-center mb-4">
                      <span
                        className={`text-[11px] font-mono font-bold text-white px-3 py-1 rounded-full ${stage.badgeBg} shadow-sm tracking-wider`}
                      >
                        STAGE {stage.step}
                      </span>
                    </div>

                    {/* Slightly Larger Centered Circular Background for Icon/Image */}
                    <div
                      className={`w-16 h-16 sm:w-[72px] sm:h-[72px] md:w-[78px] md:h-[78px] rounded-full ${stage.iconBg} border-2 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-108 shadow-sm overflow-hidden`}
                    >
                      {hasImg ? (
                        <img
                          src={stage.image}
                          alt={stage.title}
                          onError={() => handleImgError(stage.step)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      ) : (
                        <Icon className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.8]" />
                      )}
                    </div>

                    {/* Stage Title */}
                    <h3 className="font-serif text-sm sm:text-[15px] font-bold text-[#1C1C1B] tracking-tight uppercase leading-snug mb-2 px-1 min-h-[2.6rem] flex items-center justify-center">
                      {stage.title}
                    </h3>
                  </div>

                  {/* Stage Supporting Text & Bottom Decorative Accent Dot */}
                  <div className="w-full pt-3 border-t border-[#F0ECE1] mt-auto flex flex-col items-center">
                    <p className="font-sans text-[11px] sm:text-xs text-[#55524D] leading-relaxed mb-2 font-medium">
                      {stage.subtitle}
                    </p>
                    <span className={`w-2 h-2 rounded-full ${stage.badgeBg} opacity-70`} />
                  </div>

                  {/* Flow Arrow indicator on mobile/tablet */}
                  {idx < processStages.length - 1 && (
                    <div className="lg:hidden absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border border-[#D8D4CA] flex items-center justify-center text-[#77736B] z-20 shadow-xs sm:hidden">
                      <ArrowRight className="w-3.5 h-3.5 rotate-90" />
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
