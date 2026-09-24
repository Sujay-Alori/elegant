import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export const MapSection: React.FC = () => {
  return (
    <section className="relative bg-[#0A0D14] text-white overflow-hidden border-t border-slate-800">
      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#38BDF8]">
                STUDIO LOCATION
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wide text-white">
              Visit Elegant Architects in Bhubaneswar
            </h3>
          </div>

          <a
            href="https://maps.google.com/?q=BDA+Duplex+Colony+Baramunda+Bhubaneswar+Odisha+751003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-mono font-semibold uppercase tracking-wider transition-all shadow-lg shadow-[#0284C7]/20"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Map Container */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-[380px] sm:h-[440px] bg-slate-900 group">
          {/* Responsive Google Maps Iframe centered on Baramunda, Bhubaneswar */}
          <iframe
            title="Elegant Architects Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14969.309033328577!2d85.78918239999999!3d20.2796112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a79cbb45eb5b%3A0x6b60ad2c8fffa422!2sBDA%20Duplex%20Colony%2C%20Baramunda%2C%20Bhubaneswar%2C%20Odisha%20751003!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'contrast(1.05) brightness(0.95)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />

          {/* Floating Studio Pin Card on Map */}
          <div className="absolute bottom-6 left-6 max-w-sm p-4 rounded-xl bg-[#0A0D14]/95 backdrop-blur-md border border-white/15 text-white shadow-2xl hidden sm:block">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0284C7] flex items-center justify-center flex-shrink-0 text-white shadow-md">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="text-xs">
                <div className="font-bold font-display uppercase tracking-wider text-[#38BDF8] mb-0.5">
                  ELEGANT ARCHITECTS STUDIO
                </div>
                <p className="text-gray-300">
                  C-92, BDA Duplex Colony, Baramunda, Bhubaneswar, Odisha – 751003
                </p>
                <div className="mt-2 text-[11px] font-mono text-cyan-300">
                  Ar. Ashok Kumar Sethi • +91 99373 44779
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
