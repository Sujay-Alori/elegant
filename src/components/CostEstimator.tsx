import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CostEstimatorProps {
  onOpenConsultationWithEstimate: (details: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onOpenConsultationWithEstimate }) => {
  const [projectType, setProjectType] = useState<'residential' | 'commercial' | 'interior'>('residential');
  const [plotArea, setPlotArea] = useState<number>(2500);
  const [floors, setFloors] = useState<number>(2);
  const [finishQuality, setFinishQuality] = useState<'standard' | 'premium' | 'ultra-luxury'>('premium');

  // Rates per sq.ft approximate benchmarks
  const rateMultiplier = {
    residential: {
      standard: 1800,
      premium: 2400,
      'ultra-luxury': 3400,
    },
    commercial: {
      standard: 2000,
      premium: 2800,
      'ultra-luxury': 3800,
    },
    interior: {
      standard: 1200,
      premium: 1900,
      'ultra-luxury': 2900,
    }
  };

  const totalBuiltUpArea = projectType === 'interior' ? plotArea : plotArea * floors;
  const ratePerSqFt = rateMultiplier[projectType][finishQuality];
  const estimatedCost = totalBuiltUpArea * ratePerSqFt;

  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(2)} Lakhs`;
  };

  const handleConsultWithCalc = () => {
    const summary = `${projectType.toUpperCase()} Project | ${totalBuiltUpArea} sq.ft (${finishQuality.toUpperCase()}) | Est: ${formatINR(estimatedCost)}`;
    onOpenConsultationWithEstimate(summary);
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-dark opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-[0.2em] text-[#38BDF8] mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#DC2626]" />
            ESTIMATION & VALUATION TOOL
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white">
            Architectural Project Cost Estimator
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-2">
            Calculate approximate construction and interior design budget for projects in Bhubaneswar and Odisha.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#0A0D14] rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Typology */}
              <div>
                <label className="block text-xs font-mono uppercase text-gray-400 mb-2">
                  1. Project Typology
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['residential', 'commercial', 'interior'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setProjectType(t)}
                      className={`py-2 px-3 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
                        projectType === t
                          ? 'bg-[#0284C7] text-white shadow-md'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Slider */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-gray-400 uppercase">2. Built-up / Carpet Area</span>
                  <span className="text-cyan-400 font-bold">{plotArea.toLocaleString()} SQ.FT</span>
                </div>
                <input
                  type="range"
                  min="800"
                  max="15000"
                  step="100"
                  value={plotArea}
                  onChange={(e) => setPlotArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#0284C7]"
                />
              </div>

              {/* Floors (if not interior) */}
              {projectType !== 'interior' && (
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-gray-400 uppercase">3. Number of Floors / Levels</span>
                    <span className="text-cyan-400 font-bold">{floors} Floors (G+{floors - 1})</span>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        onClick={() => setFloors(num)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                          floors === num
                            ? 'bg-[#0284C7] text-white'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        G+{num - 1}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quality */}
              <div>
                <label className="block text-xs font-mono uppercase text-gray-400 mb-2">
                  4. Finish & Specification Grade
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['standard', 'premium', 'ultra-luxury'] as const).map((q) => (
                    <button
                      key={q}
                      onClick={() => setFinishQuality(q)}
                      className={`py-2 px-2 rounded-lg text-[11px] font-mono uppercase tracking-wider font-semibold transition-all ${
                        finishQuality === q
                          ? 'bg-[#DC2626] text-white shadow-md'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {q.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#111827] p-6 sm:p-8 rounded-xl border border-slate-700/80 text-center flex flex-col justify-between h-full">
              <div>
                <div className="text-[11px] font-mono uppercase text-gray-400 tracking-widest mb-1">
                  ESTIMATED CONSTRUCTION COST
                </div>
                <div className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight my-2">
                  {formatINR(estimatedCost)}
                </div>
                <div className="text-xs font-mono text-cyan-400">
                  Approx. ₹{ratePerSqFt}/sq.ft • {totalBuiltUpArea.toLocaleString()} sq.ft total
                </div>
              </div>

              <div className="py-4 my-4 border-y border-slate-800 text-left text-xs text-gray-300 space-y-1.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Includes Architectural & Structural vetting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Customizable detailed BOQ available</span>
                </div>
              </div>

              <button
                onClick={handleConsultWithCalc}
                className="w-full py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Request Exact BOQ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
