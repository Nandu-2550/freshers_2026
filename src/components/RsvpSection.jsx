import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  User,
  GraduationCap,
  Phone,
  Music,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { audioEngine } from '../utils/audio';
import VipPassModal from './VipPassModal';

export default function RsvpSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    department: 'Computer Science & Engineering (CSE)',
    songRequest: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [activePass, setActivePass] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [savedPassFound, setSavedPassFound] = useState(null);

  // Check if user already registered previously
  useEffect(() => {
    try {
      const stored = localStorage.getItem('nexus_2k26_pass');
      if (stored) {
        setSavedPassFound(JSON.parse(stored));
      }
    } catch {
      // safe fallback
    }
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const triggerConfettiCelebration = () => {
    const count = 180;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#ffd700', '#d4af37', '#f59e0b', '#ffffff'],
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    audioEngine.playClick();

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const deptCode = formData.department.includes('AIDS') ? 'AIDS' : 'CSE';
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const generatedPass = {
        ...formData,
        passId: `NEXUS-2K26-${deptCode}-${randomId}`,
        registeredAt: new Date().toISOString(),
      };

      try {
        localStorage.setItem('nexus_2k26_pass', JSON.stringify(generatedPass));
      } catch {
        // safe fallback
      }

      setIsSubmitting(false);
      setActivePass(generatedPass);
      setSavedPassFound(generatedPass);
      setShowModal(true);

      audioEngine.playFanfare();
      triggerConfettiCelebration();
    }, 750);
  };

  return (
    <section id="rsvp" className="relative py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-xl mx-auto">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[450px] h-72 sm:h-[450px] bg-[#d4af37]/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="text-center max-w-md mx-auto mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-['Syne'] text-white tracking-tight">
          Claim Your <span className="gold-gradient-text">Pass</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-gray-400">
          Reserve your free entry pass and official fresher welcome. Free entry for all CSE &times; AIDS students.
        </p>

        {savedPassFound && (
          <div className="mt-3.5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-[#d4af37]/40 text-xs text-amber-200">
            <span>Pass reserved for <strong>{savedPassFound.fullName}</strong></span>
            <button
              onClick={() => {
                audioEngine.playFanfare();
                setActivePass(savedPassFound);
                setShowModal(true);
              }}
              className="text-[#ffd700] underline font-bold hover:text-white cursor-pointer ml-1"
            >
              View Pass
            </button>
          </div>
        )}
      </div>

      {/* Form Container - Mobile First Card */}
      <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 glass-card border border-[#d4af37]/30 shadow-[0_0_40px_rgba(212,175,55,0.15)] overflow-hidden">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          
          {/* 1. Full Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
              Full Name <span className="text-[#ffd700]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <User className="w-4 h-4 text-[#d4af37]" />
              </div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`w-full pl-10 pr-4 py-3.5 rounded-xl glass-input text-sm text-white placeholder-gray-500 transition-all ${
                  errors.fullName ? 'border-red-500' : ''
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.fullName}
              </p>
            )}
          </div>

          {/* 2. Phone Number */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
              Phone Number <span className="text-[#ffd700]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Phone className="w-4 h-4 text-[#d4af37]" />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 9880012345"
                className={`w-full pl-10 pr-4 py-3.5 rounded-xl glass-input text-sm text-white placeholder-gray-500 transition-all ${
                  errors.phone ? 'border-red-500' : ''
                }`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* 3. Department */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
              Department / Branch <span className="text-[#ffd700]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <GraduationCap className="w-4 h-4 text-[#d4af37]" />
              </div>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3.5 rounded-xl glass-input text-xs sm:text-sm text-white bg-[#0e0e14] transition-all cursor-pointer"
              >
                <option value="Computer Science & Engineering (CSE)">Computer Science &amp; Engineering (CSE)</option>
                <option value="Artificial Intelligence and Data Science (AIDS)">Artificial Intelligence and Data Science (AIDS)</option>
                <option value="Other Department (Invited Guest)">Other Department (Invited Guest)</option>
              </select>
            </div>
          </div>

          {/* 4. DJ Song Request */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
              DJ Song Request <span className="text-gray-500 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Music className="w-4 h-4 text-[#d4af37]" />
              </div>
              <input
                type="text"
                name="songRequest"
                value={formData.songRequest}
                onChange={handleChange}
                placeholder="Drop a track you want played by the DJ!"
                className="w-full pl-10 pr-4 py-3 rounded-xl glass-input text-xs sm:text-sm text-white placeholder-gray-500 transition-all"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 sm:py-4 px-6 rounded-xl sm:rounded-2xl font-black text-sm sm:text-base text-black bg-gradient-to-r from-[#ffe066] via-[#ffd700] to-[#f59e0b] shadow-[0_0_30px_rgba(212,175,55,0.45)] active:scale-98 transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin text-black" />
                  <span>Generating Your Pass...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:rotate-12 transition-transform" />
                  <span>Confirm RSVP &bull; Issue VIP Pass</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Modal Popup for Pass */}
      {showModal && (
        <VipPassModal
          passData={activePass}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}
