import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-[80px] sm:scroll-mt-[95px] md:scroll-mt-[110px] py-24 sm:py-32 md:py-40 bg-[#F4F0E8] text-[#1C1C1B] select-none relative"
      style={{ backgroundColor: '#F4F0E8' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        {/* Contact Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 sm:mb-20 md:mb-24"
        >
          {/* Eyebrow */}
          <span className="block text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#77736B] mb-5 sm:mb-6">
            CONTACT
          </span>

          {/* Main Editorial Serif Heading */}
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#1C1C1B] tracking-tight">
            Let&apos;s build<br />
            something<br />
            timeless.
          </h2>
        </motion.div>

        {/* Enquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {isSubmitted ? (
            <div className="py-12 border-t border-b border-[#D8D4CA]">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1C1B] mb-3">
                Thank you for your enquiry.
              </h3>
              <p className="text-sm sm:text-base font-light text-[#55524D] leading-relaxed">
                Our team will review your message and get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
              {/* Name Field */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-[0.2em] text-[#77736B] mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1C1C1B]/20 py-3 text-sm sm:text-base text-[#1C1C1B] placeholder-[#1C1C1B]/35 focus:outline-none focus:border-[#1C1C1B] transition-colors duration-200"
                />
              </div>

              {/* Email & Phone Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-[0.2em] text-[#77736B] mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1C1C1B]/20 py-3 text-sm sm:text-base text-[#1C1C1B] placeholder-[#1C1C1B]/35 focus:outline-none focus:border-[#1C1C1B] transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-[0.2em] text-[#77736B] mb-2">
                    PHONE
                  </label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1C1C1B]/20 py-3 text-sm sm:text-base text-[#1C1C1B] placeholder-[#1C1C1B]/35 focus:outline-none focus:border-[#1C1C1B] transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-[0.2em] text-[#77736B] mb-2">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your project or enquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1C1C1B]/20 py-3 text-sm sm:text-base text-[#1C1C1B] placeholder-[#1C1C1B]/35 focus:outline-none focus:border-[#1C1C1B] transition-colors duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1C1C1B] text-[#F4F0E8] text-xs font-mono uppercase tracking-[0.25em] hover:bg-[#168BCB] transition-colors duration-300 outline-none cursor-pointer"
                >
                  <span>SEND ENQUIRY</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
