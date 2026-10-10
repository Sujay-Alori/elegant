import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCheck } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  image: string;
  imageOnLeft: boolean;
  bgVariant: 'light' | 'cream';
}

const teamMembers: TeamMember[] = [
  {
    id: 'ashok-sethi',
    name: 'Ashok Kumar Sethi',
    role: 'Principal Architect, Founder',
    initials: 'AS',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    imageOnLeft: true,
    bgVariant: 'light',
  },
  {
    id: 'santosh-sahu',
    name: 'Santosh Sahu',
    role: 'Site Engineer',
    initials: 'SS',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    imageOnLeft: false,
    bgVariant: 'cream',
  },
  {
    id: 'rajashree-sahoo',
    name: 'Rajashree Sahoo',
    role: 'Structural Engineer',
    initials: 'RS',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    imageOnLeft: true,
    bgVariant: 'cream',
  },
  {
    id: 'mukta-rath',
    name: 'Mukta Rath',
    role: 'Assistant Architect',
    initials: 'MR',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    imageOnLeft: false,
    bgVariant: 'light',
  },
  {
    id: 'avijit-mohanty',
    name: 'Avijit Mohanty',
    role: 'Junior Architect',
    initials: 'AM',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    imageOnLeft: true,
    bgVariant: 'light',
  },
  {
    id: 'rabin-bisoi',
    name: 'Rabin Bisoi',
    role: 'Site Architect/Engineer',
    initials: 'RB',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    imageOnLeft: false,
    bgVariant: 'cream',
  },
];

const statistics = [
  { value: '109', label: 'Finished Projects', suffix: '+' },
  { value: '92', label: 'Happy Clients', suffix: '+' },
  { value: '06', label: 'Years of Experience', suffix: '+' },
  { value: '66', label: 'Team Members', suffix: '+' },
];

export const Team: React.FC = () => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImgError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="team"
      className="scroll-mt-[70px] xs:scroll-mt-[80px] sm:scroll-mt-[95px] md:scroll-mt-[110px] py-16 sm:py-24 md:py-32 bg-[#F4F0E8] text-[#1C1C1B] relative w-full"
      style={{ backgroundColor: '#F4F0E8' }}
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
            PEOPLE & EXPERTISE
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-normal text-[#1C1C1B] tracking-tight uppercase mb-3.5 leading-tight">
            Elegant Team
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-[#66635B] leading-relaxed max-w-2xl mx-auto">
            A dedicated collective of principal architects, structural engineers, and site coordinators steering every project with uncompromised precision.
          </p>
        </motion.div>

        {/* 2-Column Grid of Wide Horizontal Cards with Alternating Overlapping Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-9 lg:gap-10 mb-16 sm:mb-24">
          {teamMembers.map((member, index) => {
            const hasError = imgErrors[member.id];
            const isLeft = member.imageOnLeft;

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 border transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 ${
                  member.bgVariant === 'light'
                    ? 'bg-white border-[#E8E4DA] hover:border-[#168BCB]/40'
                    : 'bg-[#F9F6F0] border-[#DFD9CD] hover:border-[#168BCB]/40'
                }`}
              >
                <div
                  className={`flex flex-col sm:flex-row items-center gap-5 sm:gap-6 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse text-left sm:text-right'
                  }`}
                >
                  {/* Overlapping Photo Capsule / Circle */}
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-[#1C1C1B] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      {!hasError ? (
                        <img
                          src={member.image}
                          alt={`Placeholder portrait for ${member.name} — ${member.role}`}
                          onError={() => handleImgError(member.id)}
                          className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#1C1C1B] text-white flex items-center justify-center font-serif text-2xl font-bold tracking-widest">
                          {member.initials}
                        </div>
                      )}
                    </div>

                    {/* Subtle role badge dot */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#168BCB] text-white flex items-center justify-center shadow-xs text-[10px]">
                      <UserCheck className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Name, Role & Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div
                      className={`flex items-center gap-2 mb-1.5 ${
                        isLeft ? 'justify-start' : 'justify-start sm:justify-end'
                      }`}
                    >
                      <span className="font-mono text-[10px] sm:text-[11px] text-[#77736B] tracking-[0.2em] uppercase font-medium">
                        0{index + 1} // TEAM
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C1C1B] tracking-tight uppercase leading-snug mb-1 group-hover:text-[#168BCB] transition-colors duration-200">
                      {member.name}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm font-medium text-[#168BCB] tracking-wide mb-2.5">
                      {member.role}
                    </p>

                    <div
                      className={`w-10 h-[1.5px] bg-[#E0DBCF] group-hover:bg-[#168BCB] transition-colors duration-300 ${
                        isLeft ? 'self-start' : 'self-start sm:self-end'
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Preserved Architectural Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="pt-10 sm:pt-14 border-t border-[#D8D4CA] w-full"
        >
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#77736B] uppercase font-medium">
              MEASURING OUR IMPACT
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {statistics.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-white/70 border border-[#E8E4DA] shadow-xs"
              >
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1C1B] tracking-tight mb-1">
                  {stat.value}
                  <span className="text-[#168BCB] text-2xl sm:text-3xl font-normal ml-0.5">
                    {stat.suffix}
                  </span>
                </span>
                <span className="font-mono text-xs sm:text-[13px] uppercase tracking-wider text-[#55524D] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
