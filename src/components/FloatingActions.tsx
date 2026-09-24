import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent('Hello Ar. Ashok Kumar Sethi, I would like to inquire about architectural consultancy for my project with ELEGANT ARCHITECTS.');
    window.open(`https://wa.me/919937344779?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* WhatsApp Floating Button */}
      <button
        onClick={openWhatsApp}
        aria-label="Direct WhatsApp message to Ar. Ashok Kumar Sethi"
        className="group relative flex items-center justify-center w-13 h-13 p-3.5 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-emerald-500/40"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-mono font-bold pl-0 group-hover:pl-2">
          Chat with Architect
        </span>
      </button>

      {/* Back to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-11 h-11 rounded-full bg-[#0A0D14] text-white hover:bg-[#0284C7] shadow-xl border border-slate-700 flex items-center justify-center transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
