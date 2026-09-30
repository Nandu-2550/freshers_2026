import React from 'react';
import {
  Music,
  Users,
  Gamepad2,
  Gift,
  Camera,
  UtensilsCrossed,
  Trophy,
  HeartHandshake,
  Star,
  Sparkles,
  Flame,
} from 'lucide-react';

export default function HypeSection() {
  // Exact 10 Event Highlights from the Official Fest Poster
  const posterHighlights = [
    {
      title: 'DJ MUSIC',
      desc: 'High-energy beats, chartbusters & dance drops by premier student DJs.',
      icon: Music,
      color: 'border-pink-500/40 text-pink-400 bg-pink-500/10 shadow-[0_0_15px_rgba(236,72,153,0.2)]',
    },
    {
      title: 'DANCE PERFORMANCES',
      desc: 'Electrifying group choreography and solo dance showcases on stage.',
      icon: Flame,
      color: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.2)]',
    },
    {
      title: 'FUN GAMES',
      desc: 'Hilarious on-stage icebreakers, challenges, and crowd showdowns.',
      icon: Gamepad2,
      color: 'border-yellow-500/40 text-yellow-400 bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.2)]',
    },
    {
      title: 'SURPRISES',
      desc: 'Curated welcome gift hampers, secret awards, and surprise reveals.',
      icon: Gift,
      color: 'border-purple-500/40 text-purple-400 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.2)]',
    },
    {
      title: 'INTERACTION WITH SENIORS',
      desc: 'Connect with your branch seniors for guidance, laughs, and bond building.',
      icon: Users,
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.2)]',
    },
    {
      title: 'PHOTO BOOTH',
      desc: 'Aesthetic photo station with quirky props to snap memories with friends.',
      icon: Camera,
      color: 'border-amber-500/40 text-amber-400 bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.2)]',
    },
    {
      title: 'FOOD & REFRESHMENTS',
      desc: 'Delicious morning coolers, lavish feast buffet, and mouthwatering snacks.',
      icon: UtensilsCrossed,
      color: 'border-rose-500/40 text-rose-400 bg-rose-500/10 shadow-[0_0_15px_rgba(244,63,94,0.2)]',
    },
    {
      title: 'EXCITING EVENTS',
      desc: 'Fast-paced stage competitions, talent rounds, and recognition moments.',
      icon: Trophy,
      color: 'border-sky-500/40 text-sky-400 bg-sky-500/10 shadow-[0_0_15px_rgba(14,165,233,0.2)]',
    },
    {
      title: 'NEW FRIENDSHIPS',
      desc: 'Meet your college batchmates and create lifelong memories.',
      icon: HeartHandshake,
      color: 'border-fuchsia-500/40 text-fuchsia-400 bg-fuchsia-500/10 shadow-[0_0_15px_rgba(217,70,239,0.2)]',
    },
    {
      title: 'AND MANY MORE...!',
      desc: 'Unannounced surprises and celebrations throughout the entire day.',
      icon: Star,
      color: 'border-[#ffd700]/50 text-[#ffd700] bg-[#ffd700]/10 shadow-[0_0_15px_rgba(255,215,0,0.3)]',
    },
  ];

  return (
    <section id="about" className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#d4af37]/8 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-60 sm:w-[450px] h-60 sm:h-[450px] bg-[#f59e0b]/8 blur-[100px] pointer-events-none rounded-full" />

      {/* Official Poster Tagline Card */}
      <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-10 glass-card border border-[#d4af37]/35 shadow-[0_0_40px_rgba(212,175,55,0.12)] mb-10 sm:mb-16 overflow-hidden text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/35 text-[10px] sm:text-xs font-semibold text-amber-300 uppercase tracking-widest mb-2 sm:mb-3">
          <Sparkles className="w-3 h-3 text-[#ffd700]" />
          Freshers Party 2026
        </div>

        <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold font-['Outfit'] text-white tracking-wide">
          <span className="italic font-['Cinzel'] gold-gradient-text">
            &ldquo;New Friends... New Experiences... A Bigger Tomorrow...&rdquo;
          </span>
        </h2>

        <p className="mt-3 text-xs sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
          Hosted by <strong className="text-white font-semibold">CSE Students (Batch 2024-25 / Seniors)</strong> &amp; <strong className="text-white font-semibold">Artificial Intelligence and Data Science (AIDS)</strong> at Government Engineering College, Mosalehosahalli.
        </p>
      </div>

      {/* Official Highlights Grid Title */}
      <div className="mb-6 sm:mb-10 text-center max-w-xl mx-auto">
        <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#ffd700] mb-1">
          <Sparkles className="w-3 h-3" />
          Official Lineup
        </div>
        <h3 className="text-2xl sm:text-4xl font-black font-['Syne'] text-white">
          Event Highlights
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-gray-400">
          Everything lined up for you at HMT Convention Hall on October 2, 2026.
        </p>
      </div>

      {/* Mobile-First 2-Column on Mobile, 3-Column on Tablet, 5-Column on Large Desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
        {posterHighlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group relative p-4 sm:p-5 rounded-xl sm:rounded-2xl glass-card border border-[#d4af37]/20 hover:border-[#ffd700]/60 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center justify-between"
            >
              <div className="flex flex-col items-center">
                <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-2xl border flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${item.color}`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <h4 className="text-xs sm:text-sm font-black font-['Outfit'] uppercase tracking-wider text-white group-hover:text-[#ffd700] transition-colors leading-tight">
                  {item.title}
                </h4>

                <p className="mt-1 text-[10px] sm:text-xs text-gray-400 font-light leading-relaxed hidden sm:block">
                  {item.desc}
                </p>
              </div>

              <div className="mt-2 pt-2 border-t border-[#d4af37]/10 w-full text-[9px] sm:text-[10px] text-amber-300/80 font-mono">
                Highlight #{index + 1}
              </div>
            </div>
          );
        })}
      </div>

      {/* All Are Welcome Faculty Note */}
      <div className="mt-10 sm:mt-14 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#ffd700]/10 via-[#d4af37]/15 to-[#f59e0b]/10 border border-[#d4af37]/35 text-center max-w-2xl mx-auto">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ffd700] block mb-1">
          ALL ARE WELCOME!
        </span>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
          We are delighted to welcome all <strong>Faculty Members</strong> to this program and seek their gracious presence and support to make this event a grand success.
        </p>
      </div>
    </section>
  );
}
