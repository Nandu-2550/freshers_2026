import React, { useState, useEffect } from 'react';
import { audioEngine } from '../utils/audio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Details', href: '#details' },
    { name: 'Experience', href: '#about' },
    { name: 'Venue', href: '#venue' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    audioEngine.playClick();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 pointer-events-none transition-all duration-300">
      <nav
        className={`pointer-events-auto flex items-center gap-1 sm:gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full border transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-[#d4af37]/45 shadow-[0_4px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.2)]'
            : 'bg-[#121218]/75 backdrop-blur-lg border-[#d4af37]/30 shadow-[0_0_25px_rgba(0,0,0,0.5)]'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="px-2.5 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-gray-300 hover:text-[#ffd700] hover:bg-[#d4af37]/15 rounded-full transition-all"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
