import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export default function VenueSection() {
  return (
    <section id="venue" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[11px] sm:text-xs font-semibold text-[#ffd700] uppercase tracking-widest mb-2.5">
          <MapPin className="w-3.5 h-3.5" />
          Location &amp; Route
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-['Syne'] text-white">
          Venue &amp; <span className="gold-gradient-text">Getting There</span>
        </h2>
        <p className="mt-2 text-xs sm:text-base text-gray-400">
          Everything you need to know about reaching HMT Convention Hall comfortably on October 2, 2026.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-w-5xl mx-auto">
        {/* Left: Venue details & Transit */}
        <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#d4af37]/30 flex flex-col justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffd700]" />
              HMT Convention Hall
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              Hassan, Karnataka — 573201
            </p>
            <p className="text-[11px] sm:text-xs text-gray-400 mt-1">
              Easily accessible for all students of Government Engineering College, Mosalehosahalli.
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-[#d4af37]/15 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#09090d]/80 border border-[#d4af37]/20">
              <span className="text-[9px] sm:text-[10px] uppercase font-mono text-[#d4af37] block">CAMPUS TRANSIT</span>
              <span className="text-xs sm:text-sm font-semibold text-white block mt-1">College Shuttles</span>
              <span className="text-[10px] sm:text-[11px] text-gray-400 block mt-0.5">Frequent trips from hostel gate</span>
            </div>

            <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#09090d]/80 border border-[#d4af37]/20">
              <span className="text-[9px] sm:text-[10px] uppercase font-mono text-[#d4af37] block">PARKING</span>
              <span className="text-xs sm:text-sm font-semibold text-white block mt-1">Spacious Parking</span>
              <span className="text-[10px] sm:text-[11px] text-gray-400 block mt-0.5">For two-wheelers &amp; cars</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive styled map mockup and directions card */}
        <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#d4af37]/30 flex flex-col justify-between overflow-hidden relative group">
          <div>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5" />
                Live Navigation
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Open Route
              </span>
            </div>

            {/* Stylized Dark Map Canvas Preview */}
            <div className="relative w-full h-48 sm:h-60 rounded-xl sm:rounded-2xl overflow-hidden border border-[#d4af37]/30 bg-[#0a0a0f] flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0,120 Q120,60 240,130 T480,100"
                  fill="none"
                  stroke="rgba(212,175,55,0.4)"
                  strokeWidth="3"
                  strokeDasharray="6,4"
                />
                <path
                  d="M80,0 Q150,110 280,140 T500,200"
                  fill="none"
                  stroke="rgba(255,215,0,0.6)"
                  strokeWidth="4"
                />
              </svg>

              <div className="relative z-10 flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#d4af37]/30 animate-ping absolute" />
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#ffd700] to-[#b45309] shadow-[0_0_20px_rgba(212,175,55,1)] flex items-center justify-center text-black font-black">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black fill-black" />
                  </div>
                </div>
                <div className="mt-2 sm:mt-3 px-3 py-1 rounded-full bg-black/80 border border-[#d4af37] backdrop-blur-md shadow-xl text-center">
                  <p className="text-[11px] sm:text-xs font-bold text-white font-['Outfit']">HMT Convention Hall</p>
                  <p className="text-[9px] sm:text-[10px] text-amber-300">Hassan, Karnataka</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4">
            <a
              href="https://maps.app.goo.gl/2RYxBhdRyxUcgUTU7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 px-5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-95 transition-all"
            >
              <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
              <span>Launch Directions in Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
