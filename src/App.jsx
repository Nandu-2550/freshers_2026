import React, { useState, useEffect } from 'react';
import EntryGate from './components/EntryGate';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import HypeSection from './components/HypeSection';
import VenueSection from './components/VenueSection';
import RsvpSection from './components/RsvpSection';
import Footer from './components/Footer';

export default function App() {
  const [isGateOpen, setIsGateOpen] = useState(false);

  useEffect(() => {
    // Check if user already entered in current session
    const entered = sessionStorage.getItem('nexus_portal_unlocked');
    if (entered === 'true') {
      setIsGateOpen(true);
    }
  }, []);

  const handleUnlock = () => {
    sessionStorage.setItem('nexus_portal_unlocked', 'true');
    setIsGateOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#070709] text-gray-100 selection:bg-[#d4af37] selection:text-black font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">
      {/* 1. The Entry Gate Startup Screen */}
      {!isGateOpen && <EntryGate onUnlock={handleUnlock} />}

      {/* Dynamic Stardust & Ambient Gold Particles Canvas */}
      <ParticleBackground />

      {/* Floating Centered Glass Navigation Dock */}
      {isGateOpen && <Navbar />}

      {/* Main Content Layout - Mobile First */}
      <main className={`relative z-10 flex flex-col w-full transition-opacity duration-700 ${
        isGateOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Hero Section with Live Countdown Timer */}
        <Hero />

        {/* 3 Distinct Glassmorphism Cards: Date, Time, Venue */}
        <EventDetails />

        {/* Event Highlights from Official Poster */}
        <HypeSection />

        {/* Venue Location & Route */}
        <VenueSection />

        {/* Interactive RSVP Form with 4 Simplified Fields */}
        <RsvpSection />
      </main>

      {/* Clean Minimalist Footer */}
      {isGateOpen && <Footer />}
    </div>
  );
}
