import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, LayoutTemplate, FileCode2, Key, CheckCircle } from 'lucide-react';
import type { ProcessStep } from '../types';

export const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      step: '01',
      title: 'DISCOVER',
      tagline: 'Vision & Site Analysis',
      description: 'Understanding your vision and requirements.',
      details: [
        'Client aspiration & lifestyle briefing',
        'Topographical survey & sun-path orientation analysis',
        'Zoning regulations, setback & BDA statutory review',
        'Budget parameterization & project roadmap'
      ]
    },
    {
      step: '02',
      title: 'CONCEPT',
      tagline: 'Design Direction & Massing',
      description: 'Developing the design direction.',
      details: [
        'Preliminary zoning & spatial circulation sketches',
        '3D conceptual massing & architectural volumes',
        'Mood boards, material palettization & daylight studies',
        'Iterative design alignment with client feedback'
      ]
    },
    {
      step: '03',
      title: 'DESIGN',
      tagline: 'Architecture & Interiors',
      description: 'Refining architecture, interiors and details.',
      details: [
        'Photorealistic 3D architectural renderings & walkthroughs',
        'Facade articulation & climate-responsive shading',
        'Interior spatial schematics, ceiling & lighting design',
        'Material finish selection and structural interface'
      ]
    },
    {
      step: '04',
      title: 'DEVELOP',
      tagline: 'Technical Drawings & BOQ',
      description: 'Technical drawings and project coordination.',
      details: [
        'Comprehensive working drawings (GFC) & detail sheets',
        'Integrated structural, electrical, plumbing (MEP) schematics',
        'Precise Bill of Quantities (BOQ) & cost estimation',
        'Municipal authority approvals & contractor tendering'
      ]
    },
    {
      step: '05',
      title: 'DELIVER',
      tagline: 'Execution & Handover',
      description: 'Turning the vision into reality.',
      details: [
        'Rigorous on-site architectural quality supervision',
        'Contractor alignment & milestone progress tracking',
        'Finishing audits, fixture testing & snag clearing',
        'Final handover of your completed architectural landmark'
      ]
    }
  ];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Search className="w-5 h-5" />;
      case 1: return <PenTool className="w-5 h-5" />;
      case 2: return <LayoutTemplate className="w-5 h-5" />;
      case 3: return <FileCode2 className="w-5 h-5" />;
      case 4: return <Key className="w-5 h-5" />;
      default: return <CheckCircle className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#FFFFFF] relative overflow-hidden">
      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#0284C7]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              METHODOLOGY & TIMELINE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#0A0D14] uppercase">
            Our Process
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal">
            A structured, 5-phase architectural workflow delivering seamless execution from early concept through final occupancy.
          </p>
        </div>

        {/* Timeline Sequence */}
        <div className="relative">
          {/* Central Connecting Blueprint Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-[2px] bg-slate-200 -translate-x-1/2">
            <div className="h-full w-full bg-gradient-to-b from-[#0284C7] via-[#38BDF8] to-[#DC2626]" />
          </div>

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Process Card */}
                  <div className="w-full lg:w-[calc(50%-48px)]">
                    <div className="bg-slate-50 hover:bg-white rounded-xl p-6 sm:p-8 border border-slate-200 hover:border-[#0284C7] shadow-sm hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#0284C7] bg-sky-50 px-3 py-1 rounded border border-sky-100">
                          PHASE {step.step}
                        </span>
                        <span className="text-xs font-mono text-slate-400 uppercase">
                          {step.tagline}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold font-display tracking-wide uppercase text-[#0A0D14] group-hover:text-[#0284C7] transition-colors mb-2">
                        {step.step} — {step.title}
                      </h3>

                      <p className="text-base text-slate-700 font-medium mb-4">
                        {step.description}
                      </p>

                      {/* Detailed Phase Checklist */}
                      <ul className="space-y-2 pt-4 border-t border-slate-200/80 text-xs text-slate-600">
                        {step.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-1.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-xl bg-[#0A0D14] text-white flex items-center justify-center border-2 border-white shadow-xl group">
                    <div className="text-[#38BDF8] group-hover:scale-110 transition-transform">
                      {getStepIcon(idx)}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#DC2626] rounded-full border-2 border-white" />
                  </div>

                  {/* Empty Spacer Column for Desktop alternating layout */}
                  <div className="hidden lg:block w-[calc(50%-48px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
