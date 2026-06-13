import React from "react";

/**
 * High-Fidelity circular emblem vector style for Acharya Ganesh
 * Inspired by professional spiritual/astrology seals; includes zodiac constellation indicators,
 * concentric astronomical guides, and a stylized golden meditative master vector.
 */
export function AcharyaGaneshSvg() {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className="w-full h-full text-amber-600 dark:text-amber-500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="spiritual-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer ambient glow */}
      <circle cx="50" cy="50" r="48" fill="url(#spiritual-glow)" />

      {/* Astrological ring boundaries */}
      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" className="opacity-80" />
      <circle cx="50" cy="50" r="39" stroke="currentColor" strokeWidth="1" className="opacity-40" />
      <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1" className="opacity-60" />

      {/* Zenith & Horizon alignment lines */}
      <line x1="50" y1="11" x2="50" y2="89" stroke="currentColor" strokeWidth="0.5" className="opacity-30" />
      <line x1="11" y1="50" x2="89" y2="50" stroke="currentColor" strokeWidth="0.5" className="opacity-30" />
      
      {/* Subtle constellation star markers */}
      <circle cx="50" cy="20" r="1.5" fill="currentColor" />
      <circle cx="71" cy="29" r="1.5" fill="currentColor" />
      <circle cx="80" cy="50" r="1.5" fill="currentColor" />
      <circle cx="71" cy="71" r="1.5" fill="currentColor" />
      <circle cx="50" cy="80" r="1.5" fill="currentColor" />
      <circle cx="29" cy="71" r="1.5" fill="currentColor" />
      <circle cx="20" cy="50" r="1.5" fill="currentColor" />
      <circle cx="29" cy="29" r="1.5" fill="currentColor" />

      {/* Detailed Meditative master outline */}
      {/* Crown/Halo radiation */}
      <path d="M50 17 L52.5 24 L47.5 24 Z" fill="currentColor" className="opacity-25" />
      {/* Spiritual Guru Head and Halo */}
      <circle cx="50" cy="28" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M47 30 Q50 33 53 30" stroke="currentColor" strokeWidth="1" fill="none" /> {/* Beard element */}
      <circle cx="50" cy="28" r="7" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" className="opacity-60" />

      {/* Sitting meditating body (Lotus Position pose) */}
      <path 
        d="M36 58 C36 47 42 41 50 41 C58 41 64 47 64 58" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        fill="none" 
      />
      {/* Folded Hands in cosmic mudra layout */}
      <path 
        d="M44 50 Q50 54 56 50" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
        fill="none" 
      />
      <path 
        d="M46 54 Q50 56.5 54 54" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinecap="round" 
        fill="none" 
      />

      {/* Double blooming Lotus Base petal lines */}
      <path 
        d="M30 60 C35 63 43 64.5 50 64.5 C57 64.5 65 63 70 60 C65 59.5 57 58.5 50 58.5 C43 58.5 35 59.5 30 60 Z" 
        fill="currentColor" 
        fillOpacity="0.12" 
        stroke="currentColor" 
        strokeWidth="1.5" 
      />
      <path d="M41 64 C44 68 47 69 50 69 C53 69 56 68 59 64" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

/**
 * Modern corporate geometric HB monogram logo representing Hanish Bagga
 * Uses custom gradient configurations with beautiful orange-gold colors
 */
export function HanishBaggaSvg() {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className="w-full h-full text-amber-500 dark:text-amber-400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hb-primary-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="60%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>

      {/* Styled geometric 'HB' Monogram structure */}
      {/* High impact left column for letter H */}
      <path 
        d="M20 18 V82" 
        stroke="url(#hb-primary-grad)" 
        strokeWidth="11" 
        strokeLinecap="round" 
      />
      
      {/* Mid connecting line & upper loop of the letter B */}
      <path 
        d="M20 50 H56 C74 50 76 18 56 18 H38" 
        stroke="url(#hb-primary-grad)" 
        strokeWidth="10.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Lower bigger loop of letter B wrapping backward to grid baseline */}
      <path 
        d="M40 50 H60 C78 50 80 82 58 82 H20" 
        stroke="url(#hb-primary-grad)" 
        strokeWidth="10.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Distinct accent anchor circle */}
      <circle cx="86" cy="18" r="7.5" fill="url(#hb-primary-grad)" />
    </svg>
  );
}

/**
 * Tech and modern enterprise brand representation for ThinkBizz Hightech
 * Centered on minimalist branding with custom orange microdots
 */
export function ThinkBizzSvg() {
  return (
    <svg 
      viewBox="0 0 200 80" 
      className="w-full h-full text-zinc-900 dark:text-zinc-100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tb-dot-color" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#ff7849" />
        </linearGradient>
      </defs>

      {/* Styled text-based primary logo */}
      {/* ThinkB text content */}
      <text 
        x="12" 
        y="37" 
        fill="currentColor" 
        className="font-sans font-black text-[27px] tracking-tight"
      >
        ThinkB
      </text>
      
      {/* 'iz' text content with tailored positioning */}
      <text 
        x="91" 
        y="37" 
        fill="currentColor" 
        className="font-sans font-black text-[27px] tracking-tight"
      >
        iz
      </text>

      {/* Iconic Dual Orange Dots (aboves the 'i' elements) */}
      <circle cx="61" cy="12" r="5" fill="url(#tb-dot-color)" />
      <circle cx="101" cy="12" r="5" fill="url(#tb-dot-color)" />

      {/* Grid horizontal thin line separator */}
      <line x1="12" y1="50" x2="188" y2="50" stroke="currentColor" strokeWidth="1.5" className="opacity-25" />

      {/* HIGH TECH modern gold serif sub-caption */}
      <text 
        x="42" 
        y="67" 
        fill="#b45309" 
        className="dark:fill-[#f59e0b] font-serif font-black text-[12.5px] tracking-[0.22em]"
      >
        HIGH TECH
      </text>
    </svg>
  );
}
