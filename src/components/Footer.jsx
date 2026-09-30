import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, Heart, Shield } from 'lucide-react';
import { audioEngine } from '../utils/audio';

export default function Footer() {
  const scrollToTop = () => {
    audioEngine.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050508] border-t border-[#d4af37]/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#ffd700]/50 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-80 h-40 bg-[#d4af37]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#d4af37]/15">
          {/* Brand & Institution Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#8c731f] flex items-center justify-center font-['Syne'] font-black text-black text-base shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                NX
              </div>
              <span className="text-2xl font-black font-['Syne'] text-white tracking-wider">
                NEXUS <span className="text-[#ffd700]">2K26</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 font-light max-w-md leading-relaxed">
              The flagship annual Freshers' Gala organized exclusively by the <strong className="text-gray-200">Department of Computer Science &amp; Engineering (CSE)</strong> and <strong className="text-gray-200">Department of Artificial Intelligence &amp; Data Science (AIDS)</strong>.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#d4af37]/90 font-medium">
              <MapPin className="w-4 h-4 text-[#ffd700]" />
              <span>Government Engineering College, Mosalehosahalli, Hassan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ffd700] mb-4 font-['Outfit']">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="#hero" className="hover:text-[#ffd700] transition-colors">
                  Home &amp; Countdown
                </a>
              </li>
              <li>
                <a href="#details" className="hover:text-[#ffd700] transition-colors">
                  Date, Time &amp; Venue
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#ffd700] transition-colors">
                  Highlights &amp; Welcome
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-[#ffd700] transition-colors">
                  Evening Schedule
                </a>
              </li>
              <li>
                <a href="#rsvp" className="hover:text-[#ffd700] transition-colors">
                  VIP Pass Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Student Coordinators / Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ffd700] mb-4 font-['Outfit']">
              Organizing Team
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#ffd700] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <p className="text-white font-medium">Student Coordinators</p>
                  <a href="tel:+918123797004" className="text-gray-400 text-xs hover:text-[#ffd700] transition-colors mt-0.5">
                    +91 81237 97004
                  </a>
                  <a href="tel:+919880012345" className="text-gray-400 text-xs hover:text-[#ffd700] transition-colors mt-0.5">
                    +91 98800 12345
                  </a>
                  <a href="tel:+919448067890" className="text-gray-400 text-xs hover:text-[#ffd700] transition-colors mt-0.5">
                    +91 94480 67890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#ffd700] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <p className="text-white font-medium">Official Inquiries</p>
                  <a
                    href="mailto:nandunusgavai@gmail.com"
                    className="text-gray-400 text-xs hover:text-[#ffd700] transition-colors break-all mt-0.5"
                  >
                    nandunusgavai@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <svg className="w-4 h-4 text-[#ffd700]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-200/90 hover:text-white transition-colors"
                >
                  @nexus_gecm
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500 inline" />
            <span>by CSE &times; AIDS Seniors &bull; NEXUS 2K26 Committee</span>
          </div>

          <div className="flex items-center gap-6">
            <span>&copy; 2026 NEXUS. All Rights Reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#121218] border border-[#d4af37]/30 text-[#d4af37] hover:text-white hover:bg-[#d4af37]/20 transition-all cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
