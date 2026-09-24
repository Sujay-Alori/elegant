import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 600);
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 5;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0D14] text-white overflow-hidden"
        >
          {/* Subtle Blueprint Grid Background */}
          <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />

          {/* Architectural Drafting Lines Effect */}
          <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
            {/* Animated Architectural Logo Emblem */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-28 h-28 mb-8"
            >
              <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-2xl">
                {/* Drafting Circles */}
                <motion.circle
                  cx="60"
                  cy="60"
                  r="52"
                  stroke="#0284C7"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  fill="none"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Architectural Blueprint Triangle Wireframe with Line Drawing */}
                <motion.path
                  d="M60 20 L102 92 H18 Z"
                  stroke="#38BDF8"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />

                {/* Red Core Geometric Mass */}
                <motion.path
                  d="M60 40 L84 86 H36 Z"
                  fill="#DC2626"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.95 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                />

                {/* 'E' Letterform Construction */}
                <motion.path
                  d="M48 54 H72 M48 64 H66 M48 74 H72"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.9, duration: 0.7 }}
                />
                <motion.path
                  d="M48 54 V74"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />

                {/* Elevation Benchmark Node */}
                <motion.circle
                  cx="60"
                  cy="20"
                  r="4.5"
                  fill="#EF4444"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                />
              </svg>
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-2"
            >
              <h1 className="text-2xl sm:text-3xl font-bold font-display tracking-[0.35em] text-white uppercase">
                ELEGANT <span className="text-[#0284C7]">ARCHITECTS</span>
              </h1>
              <p className="text-xs font-mono tracking-[0.35em] text-gray-400 uppercase">
                ESTD. 2016 • BHUBANESWAR, ODISHA
              </p>
            </motion.div>

            {/* Architectural Blueprint Progress Bar */}
            <div className="w-64 mt-8">
              <div className="flex justify-between items-center text-[10px] font-mono text-cyan-400 mb-2 tracking-widest">
                <span>DRAFTING SPACES</span>
                <span>{Math.min(progress, 100)}%</span>
              </div>
              <div className="h-[2px] w-full bg-slate-800 relative overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#DC2626]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
