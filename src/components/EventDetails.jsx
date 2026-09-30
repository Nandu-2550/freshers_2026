import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus, Navigation, Sparkles, CheckCircle2 } from 'lucide-react';
import { audioEngine } from '../utils/audio';

export default function EventDetails() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Google Calendar Link generator for Daytime 9:00 AM
  const createGoogleCalendarUrl = () => {
    const title = encodeURIComponent("NEXUS 2K26 - CSE x AIDS Freshers' Celebration");
    const details = encodeURIComponent(
      "Official Freshers' Celebration invitation for NEXUS 2K26 hosted by CSE x AIDS departments at Government Engineering College, Mosalehosahalli. Tagline: Two Minds. One Beginning."
    );
    const location = encodeURIComponent("HMT Convention Hall, Hassan, Karnataka");
    // Start: 2026-10-02 09:00:00 IST -> 20261002T033000Z to 20261002T113000Z (5:00 PM IST)
    const dates = "20261002T033000Z/20261002T113000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  const copyAddress = () => {
    audioEngine.playClick();
    navigator.clipboard.writeText("HMT Convention Hall, Hassan, Karnataka (https://maps.app.goo.gl/2RYxBhdRyxUcgUTU7)");
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="details" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#d4af37]/10 blur-[110px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[11px] sm:text-xs font-semibold text-[#ffd700] uppercase tracking-widest mb-2.5">
          <Sparkles className="w-3.5 h-3.5" />
          Event Essentials
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-['Syne'] text-white tracking-tight">
          When &amp; Where The Magic <span className="gold-gradient-text">Happens</span>
        </h2>
        <p className="mt-2 sm:mt-3 text-xs sm:text-base text-gray-400">
          Mark your calendar for the most anticipated day of the academic year. Three key coordinates you need to know.
        </p>
      </div>

      {/* 3 Distinct Glassmorphism Cards - Responsive for Phones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        
        {/* CARD 1: DATE */}
        <div className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 glass-card border border-[#d4af37]/25 hover:border-[#d4af37]/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(212,175,55,0.2)] flex flex-col justify-between overflow-hidden">
          {/* Card Top Glow */}
          <div className="absolute top-0 right-0 w-28 sm:w-32 h-28 sm:h-32 bg-gradient-to-br from-[#ffd700]/15 to-transparent rounded-bl-full pointer-events-none" />
          
          <div>
            {/* Icon Halo */}
            <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#ffd700]/20 via-[#d4af37]/10 to-transparent border border-[#d4af37]/40 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-[#ffd700]" />
            </div>

            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              The Grand Day
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-['Outfit'] text-white mt-1 mb-2">
              2nd October <span className="text-[#ffd700]">2026</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Friday daytime celebration. Start your college life with a festival of lights, beats, and friendships.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#d4af37]/15">
            <a
              href={createGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => audioEngine.playClick()}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#ffd700] hover:text-white bg-[#d4af37]/10 hover:bg-[#d4af37]/30 border border-[#d4af37]/30 px-4 py-3 rounded-full transition-all w-full justify-center group-hover:border-[#ffd700]"
            >
              <CalendarPlus className="w-4 h-4" />
              <span>Add to Google Calendar</span>
              <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-70" />
            </a>
          </div>
        </div>

        {/* CARD 2: TIME (DAYTIME 9:00 AM) */}
        <div className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 glass-card border border-[#d4af37]/25 hover:border-[#d4af37]/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(212,175,55,0.2)] flex flex-col justify-between overflow-hidden">
          {/* Card Top Glow */}
          <div className="absolute top-0 right-0 w-28 sm:w-32 h-28 sm:h-32 bg-gradient-to-br from-[#ffd700]/15 to-transparent rounded-bl-full pointer-events-none" />

          <div>
            {/* Icon Halo */}
            <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#ffd700]/20 via-[#d4af37]/10 to-transparent border border-[#d4af37]/40 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#ffd700]" />
            </div>

            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Event Timing (Daytime)
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-['Outfit'] text-white mt-1 mb-2">
              9:00 AM <span className="text-[#ffd700] text-lg sm:text-2xl font-semibold">Morning</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Doors open at <strong>8:30 AM</strong> for red carpet arrivals, wristband pickup, and morning welcome coolers.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#d4af37]/15">
            <div className="flex items-center justify-between text-xs text-amber-200/90 bg-[#16161e] border border-[#d4af37]/20 px-3.5 py-2.5 rounded-full">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Admission
              </span>
              <span className="font-semibold text-white">Freshers &bull; Free Entry</span>
            </div>
          </div>
        </div>

        {/* CARD 3: VENUE */}
        <div className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 glass-card border border-[#d4af37]/25 hover:border-[#d4af37]/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(212,175,55,0.2)] flex flex-col justify-between overflow-hidden">
          {/* Card Top Glow */}
          <div className="absolute top-0 right-0 w-28 sm:w-32 h-28 sm:h-32 bg-gradient-to-br from-[#ffd700]/15 to-transparent rounded-bl-full pointer-events-none" />

          <div>
            {/* Icon Halo */}
            <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#ffd700]/20 via-[#d4af37]/10 to-transparent border border-[#d4af37]/40 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#ffd700]" />
            </div>

            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Celebration Arena
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-['Outfit'] text-white mt-1 mb-2 leading-tight">
              HMT Convention Hall
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Hassan, Karnataka. Premium banquet hall with stage acoustic setup, spacious seating, and dining lounge.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#d4af37]/15 flex flex-col sm:flex-row gap-2">
            <a
              href="https://maps.app.goo.gl/2RYxBhdRyxUcgUTU7"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => audioEngine.playClick()}
              className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-black bg-gradient-to-r from-amber-300 to-yellow-500 px-4 py-3 rounded-full hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all flex-1"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Maps</span>
            </a>

            <button
              onClick={copyAddress}
              className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-gray-300 hover:text-white bg-[#16161e] border border-[#d4af37]/30 px-3 py-3 rounded-full hover:border-[#d4af37] transition-all"
            >
              {copiedAddress ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <span>Copy Address</span>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
