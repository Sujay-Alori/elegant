import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Architectural Design',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#0284C7', '#38BDF8', '#DC2626'],
    });
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Elegant Architects,\nName: ${formData.name || 'Client'}\nPhone: ${formData.phone}\nService: ${formData.projectType}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919937344779?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#0284C7]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              CONNECT WITH OUR STUDIO
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#0A0D14] uppercase">
            Contact Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal">
            Whether you are planning a luxury villa, commercial development or seeking comprehensive project consultancy, we look forward to collaborating.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0A0D14] text-white p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0284C7]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-[#DC2626]/40 pointer-events-none" />

              <h3 className="text-2xl font-bold font-display uppercase tracking-widest text-white mb-2">
                ELEGANT <span className="text-[#0284C7]">ARCHITECTS</span>
              </h3>
              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-8">
                Principal: Ar. Ashok Kumar Sethi (Estd. 2016)
              </p>

              <div className="space-y-6 text-sm">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#38BDF8] border border-white/10">
                    <MapPin className="w-5 h-5 text-[#DC2626]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-gray-400 tracking-wider mb-1">
                      Studio Address
                    </div>
                    <p className="text-gray-200 leading-relaxed font-medium">
                      C-92, BDA Duplex Colony,<br />
                      Baramunda, Bhubaneswar,<br />
                      Odisha – 751003
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#38BDF8] border border-white/10">
                    <Phone className="w-5 h-5 text-[#0284C7]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-gray-400 tracking-wider mb-1">
                      Direct Line / WhatsApp
                    </div>
                    <a
                      href="tel:+919937344779"
                      className="text-white hover:text-[#38BDF8] font-mono font-bold text-base transition-colors"
                    >
                      +91 99373 44779
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#38BDF8] border border-white/10">
                    <Mail className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-gray-400 tracking-wider mb-1">
                      Official Inquiries
                    </div>
                    <div className="space-y-1">
                      <a
                        href="mailto:KU.ASHOK@YMAIL.COM"
                        className="block text-gray-200 hover:text-[#38BDF8] font-mono text-xs transition-colors"
                      >
                        KU.ASHOK@YMAIL.COM
                      </a>
                      <a
                        href="mailto:ELEGANT_INFO@MAIL.COM"
                        className="block text-gray-200 hover:text-[#38BDF8] font-mono text-xs transition-colors"
                      >
                        ELEGANT_INFO@MAIL.COM
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-gray-400 border border-white/10">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-gray-400 tracking-wider mb-1">
                      Studio Hours
                    </div>
                    <p className="text-xs text-gray-300">
                      Monday – Saturday: 10:00 AM – 7:30 PM<br />
                      Sunday: By Prior Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xl relative">
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-[#0A0D14] mb-2">
                Send Project Enquiry
              </h3>
              <p className="text-sm text-slate-600 mb-8">
                Fill out the brief below and our principal architect will connect with you promptly.
              </p>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-bold font-display text-slate-900">
                    Message Successfully Dispatched!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.name || 'Client'}</strong>. Ar. Ashok Kumar Sethi and our design team will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-slate-200 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Mohanty"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 99373 44779"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Project Category
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all bg-white"
                      >
                        <option value="Architectural Design">01 — Architectural Design</option>
                        <option value="Interior Design">02 — Interior Design</option>
                        <option value="Project Consultant">03 — Project Consultant</option>
                        <option value="Structural Design">04 — Structural Design</option>
                        <option value="Landscape Design">05 — Landscape Design</option>
                        <option value="Estimation & Valuation">06 — Estimation & Valuation</option>
                        <option value="Surveyor">07 — Surveyor</option>
                        <option value="Turnkey Execution">Turnkey Architectural Execution</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message & Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please share your plot location, size, timeline, and architectural requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 border border-emerald-500/40 text-emerald-700 hover:bg-emerald-50 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp Quick Inquiry</span>
                    </button>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-[#0284C7]/25 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
