import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'intro' | 'hold' | 'exit' | 'complete'>('intro');

  useEffect(() => {
    // Prevent scrolling while preloader is active
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalWidth = document.body.style.width;

    document.body.style.overflow = 'hidden';

    // Sequence Timing (~4 seconds total):
    // 0.0s -> 1.0s: Logo smoothly appears (opacity: 0 -> 1, scale: 0.96 -> 1)
    // 1.0s -> 3.0s: Logo remains visible (~2s)
    // 3.0s -> 4.0s: Smooth fade-out (~1s)
    // 4.0s: Preloader disappears completely
    const holdTimer = setTimeout(() => {
      setStage('hold');
    }, 1000);

    const exitTimer = setTimeout(() => {
      setStage('exit');
    }, 3000);

    const completeTimer = setTimeout(() => {
      setStage('complete');
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.width = originalWidth;
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.width = originalWidth;
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== 'complete' && (
        <motion.div
          key="clean-architectural-preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: stage === 'exit' ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#171817] overflow-hidden select-none pointer-events-auto"
          style={{ backgroundColor: '#171817' }}
        >
          {/* Centered Logo Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={
              stage === 'exit'
                ? { opacity: 0, scale: 1.01 }
                : { opacity: 1, scale: 1 }
            }
            transition={{
              opacity: {
                duration: stage === 'exit' ? 0.7 : 0.9,
                ease: 'easeInOut',
              },
              scale: {
                duration: stage === 'exit' ? 0.7 : 1.0,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            className="flex items-center justify-center p-4"
          >
            <img
              src={logoImg}
              alt="Elegant Architects"
              className="w-[160px] sm:w-[190px] md:w-[210px] h-auto object-contain pointer-events-none select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
