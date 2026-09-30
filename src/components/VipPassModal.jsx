import React, { useRef, useEffect } from 'react';
import { X, CheckCircle2, Download, Share2, Sparkles, QrCode, Calendar, Clock, MapPin, ShieldCheck, Printer, Phone } from 'lucide-react';
import { audioEngine } from '../utils/audio';

export default function VipPassModal({ passData, onClose }) {
  const passRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!passData) return null;

  const handlePrint = () => {
    audioEngine.playClick();
    window.print();
  };

  const handleShare = () => {
    audioEngine.playClick();
    if (navigator.share) {
      navigator.share({
        title: 'My VIP Pass to NEXUS 2K26!',
        text: `I'm attending NEXUS 2K26 Freshers' Celebration hosted by CSE x AIDS at GEC Mosalehosahalli! My Pass ID is ${passData.passId}.`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(
        `NEXUS 2K26 Freshers' Pass confirmed! Pass ID: ${passData.passId} for ${passData.fullName}`
      );
      alert('Pass details copied to clipboard!');
    }
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-[#0d0d12] border border-[#d4af37]/50 shadow-[0_0_60px_rgba(212,175,55,0.35)] p-5 sm:p-7">
        
        {/* Close Button */}
        <button
          onClick={() => {
            audioEngine.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close pass"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Confirmation Header */}
        <div className="text-center mb-4 sm:mb-5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-[#d4af37] p-[2px] mx-auto mb-2.5 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            <div className="w-full h-full bg-[#0d0d12] rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400" />
            </div>
          </div>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#ffd700] font-semibold">
            RSVP Confirmed &bull; Access Granted
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold font-['Syne'] text-white mt-0.5">
            You're In for <span className="gold-gradient-text">NEXUS 2K26</span>!
          </h2>
          <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">
            Show this digital VIP ticket on your phone at reception.
          </p>
        </div>

        {/* The Digital VIP Ticket Card - Phone-Optimized */}
        <div
          ref={passRef}
          className="relative rounded-2xl bg-gradient-to-b from-[#181824] via-[#12121a] to-[#0c0c10] border-2 border-[#d4af37]/60 shadow-[0_0_30px_rgba(212,175,55,0.25)] p-4 sm:p-6 overflow-hidden my-3"
        >
          {/* Holographic Watermark effect */}
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-[#ffd700]/20 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-gradient-to-tr from-[#d4af37]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Ticket Header */}
          <div className="flex items-center justify-between border-b border-[#d4af37]/30 pb-3 mb-3">
            <div>
              <span className="text-[9px] font-mono tracking-wider uppercase text-[#d4af37] block">
                GOVT ENGINEERING COLLEGE
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-['Syne'] text-white flex items-center gap-1 mt-0.5">
                NEXUS <span className="text-[#ffd700]">2K26</span>
              </h3>
            </div>
            <div className="text-right">
              <span className="inline-block px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-[#d4af37]/20 text-[#ffd700] border border-[#d4af37]/50 shadow-sm">
                VIP ADMIT ONE
              </span>
              <p className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 font-mono">{passData.passId}</p>
            </div>
          </div>

          {/* Attendee Details Grid */}
          <div className="grid grid-cols-2 gap-3 py-1.5 text-left">
            <div>
              <span className="text-[9px] uppercase tracking-wider text-gray-400 block">
                Attendee Name
              </span>
              <span className="text-sm sm:text-base font-bold font-['Outfit'] text-white block truncate">
                {passData.fullName}
              </span>
            </div>

            <div>
              <span className="text-[9px] uppercase tracking-wider text-gray-400 block">
                Phone Number
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-[#ffd700] block truncate">
                {passData.phone}
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="text-[9px] uppercase tracking-wider text-gray-400 block">
                Department
              </span>
              <span className="text-xs font-semibold text-gray-200 block truncate">
                {passData.department}
              </span>
            </div>

            {passData.songRequest && (
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[9px] uppercase tracking-wider text-gray-400 block">
                  DJ Request
                </span>
                <span className="text-xs font-medium text-amber-200 block truncate italic">
                  "{passData.songRequest}"
                </span>
              </div>
            )}
          </div>

          {/* Event Quick Specs */}
          <div className="my-3 p-2.5 rounded-xl bg-[#08080c]/80 border border-[#d4af37]/20 flex flex-wrap items-center justify-between gap-1.5 text-[11px]">
            <div className="flex items-center gap-1 text-gray-300">
              <Calendar className="w-3 h-3 text-[#ffd700]" />
              <span>02 Oct 2026</span>
            </div>
            <div className="flex items-center gap-1 text-gray-300">
              <Clock className="w-3 h-3 text-[#ffd700]" />
              <span>9:00 AM Onwards</span>
            </div>
            <div className="flex items-center gap-1 text-gray-300">
              <MapPin className="w-3 h-3 text-[#ffd700]" />
              <span>HMT Convention Hall</span>
            </div>
          </div>

          {/* Ticket Footer with Barcode & QR Code */}
          <div className="pt-2.5 border-t border-[#d4af37]/20 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-white text-black">
                <QrCode className="w-9 h-9" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[8px] text-gray-400 uppercase tracking-widest font-mono">
                  SECURITY TOKEN
                </span>
                <span className="text-[10px] font-mono text-[#ffd700] tracking-wider">
                  VERIFIED-PASS
                </span>
                <span className="text-[9px] text-gray-400 flex items-center gap-1">
                  <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" />
                  Free Entry
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[8px] text-[#d4af37]/80 italic block">
                Hosted by
              </span>
              <span className="text-[11px] font-bold font-['Outfit'] text-white">
                CSE &times; AIDS
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-row items-center gap-2.5">
          <button
            onClick={handlePrint}
            className="flex-1 py-3 px-3 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-[#ffe066] to-[#f59e0b] shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-black" />
            <span>Save / Screenshot</span>
          </button>

          <button
            onClick={handleShare}
            className="flex-1 py-3 px-3 rounded-xl font-semibold text-xs text-gray-200 bg-[#161622] hover:bg-[#1f1f2e] border border-[#d4af37]/40 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-[#ffd700]" />
            <span>Share Pass</span>
          </button>
        </div>
      </div>
    </div>
  );
}
