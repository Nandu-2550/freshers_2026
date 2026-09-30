import React from 'react';
import { Clock, Disc, Sparkles, Utensils, Award, Users, Camera, Flame } from 'lucide-react';

export default function ScheduleSection() {
  const timeline = [
    {
      time: '08:30 AM',
      title: 'Red Carpet Arrivals & Morning Coolers',
      desc: 'Check-in, collect your official fresher badge and wristband, and strike a pose at the red carpet photographer station.',
      icon: Users,
    },
    {
      time: '09:00 AM',
      title: 'Grand Inauguration & Lamp Lighting',
      desc: 'Official ribbon cutting and inspirational welcome by department HODs, faculty mentors, and senior hosts.',
      icon: Sparkles,
    },
    {
      time: '09:45 AM',
      title: 'Stage Extravaganza & Talent Rounds',
      desc: 'Electrifying senior dance teams, live acoustic rock, rap duels, standup comedy, and open mic showcases.',
      icon: Flame,
    },
    {
      time: '11:30 AM',
      title: 'The Runway: Mr. & Ms. Fresher 2026',
      desc: 'Fresher contestants walk the spotlight ramp, answer mystery Q&A questions, and compete for the crowns.',
      icon: Award,
    },
    {
      time: '01:00 PM',
      title: 'The Royal Lunch Banquet & Feast',
      desc: 'Grand multi-course banquet lunch spread with delicious vegetarian and non-vegetarian delicacies and desserts.',
      icon: Utensils,
    },
    {
      time: '02:00 PM - 05:00 PM',
      title: 'High-Voltage DJ Bash & Open Dance Floor',
      desc: 'Laser lights, smoke cannons, and thunderous drops as everyone hits the dance floor for the ultimate party.',
      icon: Disc,
    },
  ];

  return (
    <section id="timeline" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[11px] sm:text-xs font-semibold text-[#ffd700] uppercase tracking-widest mb-2.5">
          <Clock className="w-3.5 h-3.5" />
          The Itinerary
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-['Syne'] text-white">
          Day of <span className="gold-gradient-text">Celebration</span>
        </h2>
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-400">
          From morning red-carpet arrival to the afternoon bass drop, here is how the unforgettable gala unfolds.
        </p>
      </div>

      <div className="relative border-l-2 border-[#d4af37]/30 ml-3 sm:ml-32 pl-5 sm:pl-10 space-y-7 sm:space-y-10">
        {timeline.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="relative group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[27px] sm:-left-[47px] top-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0a0a0e] border-2 border-[#ffd700] flex items-center justify-center shadow-[0_0_12px_rgba(212,175,55,0.6)] group-hover:scale-125 transition-transform">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ffd700]" />
              </div>

              {/* Time Label for larger screens on left */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
                <span className="font-['Outfit'] font-bold text-sm text-[#ffd700]">
                  {item.time}
                </span>
              </div>

              {/* Card Container - Mobile optimized */}
              <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#d4af37]/20 group-hover:border-[#d4af37]/60 group-hover:shadow-[0_10px_25px_rgba(212,175,55,0.15)] transition-all">
                <div className="sm:hidden text-xs font-bold text-[#ffd700] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {item.time}
                </div>
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffd700]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-['Outfit'] text-white group-hover:text-[#ffd700] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
