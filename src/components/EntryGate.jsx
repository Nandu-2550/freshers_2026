import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { audioEngine } from '../utils/audio';

export default function EntryGate({ onUnlock }) {
  const [isInitializing, setIsInitializing] = useState(false);
  const [bootText, setBootText] = useState('ACCESS SYSTEM READY');

  const handleInitialize = () => {
    audioEngine.playFanfare();
    setIsInitializing(true);

    const steps = [
      'AUTHENTICATING CSE x AIDS IDENTITY...',
      'CONNECTING TO NEXUS 2K26 MAINFRAME...',
      'DECRYPTING FRESHERS GALA PORTAL...',
      'ACCESS GRANTED • WELCOME ABOARD!',
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setBootText(step);
      }, idx * 260);
    });

    setTimeout(() => {
      onUnlock();
    }, 1250);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] text-white px-4 overflow-hidden select-none">
      {/* Background Animated Rings & Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-tr from-[#ffd700]/20 via-[#d4af37]/25 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#ffd700]/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Futuristic Circular Radar / Portal Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] rounded-full border border-[#d4af37] animate-pulse" />
        <div className="absolute w-[240px] sm:w-[460px] h-[240px] sm:h-[460px] rounded-full border border-dashed border-[#ffd700] animate-spin" style={{ animationDuration: '40s' }} />
        <div className="absolute w-[160px] sm:w-[320px] h-[160px] sm:h-[320px] rounded-full border border-[#d4af37]/50" />
      </div>

      <div className={`relative z-10 max-w-lg w-full flex flex-col items-center text-center transition-all duration-700 ${
        isInitializing ? 'scale-105 opacity-90' : 'scale-100 opacity-100'
      }`}>
        {/* College Credentials Header */}
        <div className="mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14141e] border border-[#d4af37]/30 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#ffd700] mb-2 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Cpu className="w-3.5 h-3.5 text-[#ffd700]" />
            CAMPUS PORTAL v2.6
          </div>
          <h2 className="text-sm sm:text-base md:text-lg font-bold font-['Outfit'] uppercase tracking-wider text-gray-200">
            Government Engineering College
          </h2>
          <p className="text-[11px] sm:text-xs font-medium text-[#d4af37] uppercase tracking-widest mt-0.5">
            Mosalehosahalli, Hassan
          </p>
        </div>

        {/* Clean, Simple CSE x AIDS Presentation */}
        <div className="my-2.5 sm:my-3 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-bold font-['Outfit'] uppercase tracking-[0.22em] text-[#ffd700]">
          <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span>CSE &times; AIDS PRESENTS</span>
          <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>

        {/* Grand Title: NEXUS 2K26 */}
        <div className="relative my-2 sm:my-3">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#ffd700]/30 via-[#d4af37]/40 to-[#f59e0b]/30 blur-2xl opacity-60 rounded-full pointer-events-none" />
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black font-['Syne'] tracking-tight leading-none">
            <span className="gold-gradient-text drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)]">
              NEXUS
            </span>{' '}
            <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              2K26
            </span>
          </h1>
        </div>

        {/* Subtitle & Tagline */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gray-300 font-['Outfit'] font-semibold mt-1">
          Freshers' Celebration
        </p>
        <p className="text-sm sm:text-lg italic font-['Cinzel'] text-[#ffd700] tracking-wide mt-1">
          &ldquo;Two Minds. One Beginning.&rdquo;
        </p>

        {/* Event Quick Coordinates */}
        <div className="my-5 sm:my-6 px-4 py-2 rounded-xl bg-[#12121c]/90 border border-[#d4af37]/20 flex items-center justify-center gap-3 text-[11px] sm:text-xs text-gray-300 font-mono">
          <span>02 OCT 2026</span>
          <span className="text-[#d4af37]">&bull;</span>
          <span>9:00 AM</span>
          <span className="text-[#d4af37]">&bull;</span>
          <span>HMT CONVENTION HALL</span>
        </div>

        {/* Terminal Boot Sequence Text */}
        <div className="h-6 mb-4 flex items-center justify-center text-[10px] sm:text-xs font-mono text-amber-300 tracking-wider">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2" />
          {bootText}
        </div>

        {/* Initialize Portal Button - Mobile Optimized */}
        <button
          onClick={handleInitialize}
          disabled={isInitializing}
          className="w-full py-4 px-8 rounded-full font-black text-sm sm:text-base text-black bg-gradient-to-r from-[#ffe066] via-[#ffd700] to-[#f59e0b] shadow-[0_0_40px_rgba(212,175,55,0.6)] active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-85"
        >
          <Sparkles className={`w-4 h-4 text-black ${isInitializing ? 'animate-spin' : ''}`} />
          <span>{isInitializing ? 'INITIALIZING PORTAL...' : 'INITIALIZE PORTAL — ENTER'}</span>
          <ArrowRight className="w-4 h-4 text-black" />
        </button>

        <p className="text-[10px] text-gray-500 mt-4 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Official Campus Invitation &bull; Tap to Enter
        </p>
      </div>
    </div>
  );
}
