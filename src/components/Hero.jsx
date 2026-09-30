import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { audioEngine } from '../utils/audio';

export default function Hero() {
  // Target: October 2, 2026, 9:00 AM (09:00:00 Morning Kickoff)
  const targetDate = new Date('2026-10-02T09:00:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id) => {
    audioEngine.playClick();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center pt-10 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
    >
      {/* Ambient Gold Radial Spotlight & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[750px] h-[340px] sm:h-[450px] bg-gradient-to-b from-[#d4af37]/20 via-[#f59e0b]/10 to-transparent blur-[100px] sm:blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#ffd700]/5 blur-[70px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-4 sm:right-10 w-60 sm:w-96 h-60 sm:h-96 bg-[#b45309]/10 blur-[90px] pointer-events-none rounded-full" />

      {/* Decorative vertical grid lines with subtle gold shimmer */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.75px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] opacity-[0.07] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center w-full">
        {/* Grand College Headline - Clean & Responsive */}
        <div className="w-full flex flex-col items-center text-center mb-2 animate-fade-in">
          <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black font-['Outfit'] uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-amber-200 drop-shadow-[0_4px_25px_rgba(212,175,55,0.35)] leading-tight max-w-4xl px-2">
            GOVERNMENT ENGINEERING COLLEGE
          </h2>
          <p className="text-xs sm:text-base md:text-xl font-bold font-['Outfit'] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#d4af37] mt-1">
            MOSALEHOSAHALLI, HASSAN
          </p>
        </div>

        {/* Clean, Simple & Elegant CSE x AIDS Subtitle */}
        <div className="my-2 sm:my-3 flex items-center justify-center gap-2.5 sm:gap-3">
          <div className="h-[1px] w-6 sm:w-14 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span className="text-sm sm:text-xl md:text-2xl font-black font-['Outfit'] uppercase tracking-[0.25em] text-[#ffd700] drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]">
            CSE &times; AIDS
          </span>
          <div className="h-[1px] w-6 sm:w-14 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>

        {/* Main Title: NEXUS 2K26 */}
        <div className="relative my-2 select-none">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#ffd700]/25 via-[#d4af37]/30 to-[#f59e0b]/20 blur-2xl opacity-60 rounded-3xl -z-10" />

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight font-['Syne'] leading-none">
            <span className="gold-gradient-text drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)]">
              NEXUS
            </span>{' '}
            <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.35)]">
              2K26
            </span>
          </h1>
        </div>

        {/* Subtitle & Tagline */}
        <div className="mt-2 sm:mt-4 mb-6 sm:mb-8 flex flex-col items-center gap-1.5 sm:gap-2 px-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-[1px] w-6 sm:w-16 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
            <p className="text-sm sm:text-xl lg:text-2xl uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gray-200 font-['Outfit'] font-semibold">
              Freshers' Celebration
            </p>
            <div className="h-[1px] w-6 sm:w-16 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
          </div>

          <p className="text-sm sm:text-xl italic font-['Cinzel'] text-[#ffd700]/90 tracking-wide mt-0.5 sm:mt-1 font-medium">
            &ldquo;Two Minds. One Beginning.&rdquo;
          </p>
          <p className="text-[11px] sm:text-sm text-gray-400 max-w-lg mt-0.5 sm:mt-1 font-light leading-relaxed">
            Where the core logic of Computer Science fuses with the boundless future of Artificial Intelligence and Data Science.
          </p>
        </div>

        {/* Live Countdown Timer - Daytime Morning Gala */}
        <div className="w-full max-w-3xl my-2 sm:my-4 p-4 sm:p-7 rounded-2xl sm:rounded-3xl glass-card border border-[#d4af37]/30 shadow-[0_0_40px_rgba(212,175,55,0.15)] relative group">
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]/60"></div>
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#d4af37]/60"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#d4af37]/60"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]/60"></div>

          <div className="flex items-center justify-between mb-3 sm:mb-4 border-b border-[#d4af37]/15 pb-2.5 sm:pb-3">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-semibold text-[#ffd700]">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4af37] animate-spin" style={{ animationDuration: '10s' }} />
              <span>COUNTDOWN TO CELEBRATION</span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 text-amber-300 border border-[#d4af37]/30">
              02 OCT 2026 &bull; 9:00 AM
            </span>
          </div>

          {/* Time Boxes */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            <div className="flex flex-col items-center p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#09090d]/90 border border-[#d4af37]/25 shadow-inner">
              <span className="text-2xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-white tracking-tight">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs font-semibold uppercase tracking-wider text-[#d4af37] mt-0.5 sm:mt-1">
                Days
              </span>
            </div>

            <div className="flex flex-col items-center p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#09090d]/90 border border-[#d4af37]/25 shadow-inner">
              <span className="text-2xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-white tracking-tight">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs font-semibold uppercase tracking-wider text-[#d4af37] mt-0.5 sm:mt-1">
                Hours
              </span>
            </div>

            <div className="flex flex-col items-center p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#09090d]/90 border border-[#d4af37]/25 shadow-inner">
              <span className="text-2xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-white tracking-tight">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs font-semibold uppercase tracking-wider text-[#d4af37] mt-0.5 sm:mt-1">
                Mins
              </span>
            </div>

            <div className="flex flex-col items-center p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#09090d]/90 border border-[#d4af37]/25 shadow-inner relative overflow-hidden">
              <span className="text-2xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-[#ffd700] tracking-tight">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs font-semibold uppercase tracking-wider text-[#d4af37] mt-0.5 sm:mt-1">
                Secs
              </span>
              <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#ffd700]/40 animate-pulse" />
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-2">
          <button
            onClick={() => handleScrollTo('rsvp')}
            className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-lg text-black bg-gradient-to-r from-[#ffe066] via-[#ffd700] to-[#f59e0b] shadow-[0_0_35px_rgba(212,175,55,0.5)] hover:shadow-[0_0_50px_rgba(212,175,55,0.8)] active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:rotate-12 transition-transform" />
            <span>RSVP Now — Claim VIP Pass</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => handleScrollTo('details')}
            className="w-full sm:w-auto px-6 py-3.5 sm:px-7 sm:py-4 rounded-full font-semibold text-sm sm:text-base text-gray-200 bg-[#121218]/90 hover:bg-[#1b1b24] border border-[#d4af37]/40 hover:border-[#d4af37] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Event Highlights &amp; Schedule</span>
            <ChevronDown className="w-4 h-4 text-[#d4af37]" />
          </button>
        </div>

        {/* Fast Facts Banner */}
        <div className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-[#d4af37]/15 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8 text-center w-full max-w-4xl text-gray-400">
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-bold text-white font-['Outfit']">1 Grand Day</span>
            <span className="text-[10px] sm:text-xs text-[#d4af37]/90 uppercase tracking-wider">Daytime Gala</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-bold text-white font-['Outfit']">2 Elite Branches</span>
            <span className="text-[10px] sm:text-xs text-[#d4af37]/90 uppercase tracking-wider">CSE &times; AIDS Synergy</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-bold text-white font-['Outfit']">100+ Freshers</span>
            <span className="text-[10px] sm:text-xs text-[#d4af37]/90 uppercase tracking-wider">Welcomed in Style</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-bold text-white font-['Outfit']">Free Entry</span>
            <span className="text-[10px] sm:text-xs text-[#d4af37]/90 uppercase tracking-wider">Exclusive Invitation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
