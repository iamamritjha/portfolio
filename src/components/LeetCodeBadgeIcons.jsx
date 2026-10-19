import React from 'react';

export function Badge100Days({ className = "w-16 h-16" }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDE047" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#EAB308" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#CA8A04" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="50%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
      </defs>
      {/* Outer ambient circle */}
      <circle cx="40" cy="40" r="36" fill="url(#goldGlow)" opacity="0.4" />
      {/* Hexagonal Shield */}
      <polygon points="40,8 68,22 68,58 40,72 12,58 12,22" fill="#17140B" stroke="url(#goldBorder)" strokeWidth="2.5" />
      {/* Inner star-ring */}
      <circle cx="40" cy="40" r="22" stroke="#EAB308" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* 100 Text */}
      <text x="40" y="38" textAnchor="middle" fill="#FEF08A" fontSize="13" fontWeight="800" fontFamily="sans-serif" letterSpacing="-0.5">
        100
      </text>
      <text x="40" y="50" textAnchor="middle" fill="#FACC15" fontSize="7.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.8">
        DAYS
      </text>
      {/* Top Star */}
      <polygon points="40,14 42,19 47,19 43,22 45,27 40,24 35,27 37,22 33,19 38,19" fill="#FDE047" />
    </svg>
  );
}

export function Badge50Days({ className = "w-16 h-16" }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="skyGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#0284C7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0369A1" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="skyBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BAE6FD" />
          <stop offset="50%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="36" fill="url(#skyGlow)" opacity="0.35" />
      {/* Octagonal Shield */}
      <polygon points="26,10 54,10 70,26 70,54 54,70 26,70 10,54 10,26" fill="#081422" stroke="url(#skyBorder)" strokeWidth="2.5" />
      {/* Inner faceted lines */}
      <circle cx="40" cy="40" r="21" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.8" />
      <text x="40" y="38" textAnchor="middle" fill="#E0F2FE" fontSize="14" fontWeight="800" fontFamily="sans-serif" letterSpacing="-0.5">
        50
      </text>
      <text x="40" y="50" textAnchor="middle" fill="#38BDF8" fontSize="7.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.8">
        DAYS
      </text>
      {/* Top Diamond */}
      <polygon points="40,15 44,20 40,25 36,20" fill="#38BDF8" />
    </svg>
  );
}

export function BadgeSeptemberChallenge({ className = "w-16 h-16" }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="emeraldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#059669" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#047857" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="emeraldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="50%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="36" fill="url(#emeraldGlow)" opacity="0.35" />
      {/* Shield with arched top */}
      <path d="M40 8 L66 18 C66 48 54 64 40 72 C26 64 14 48 14 18 Z" fill="#081A14" stroke="url(#emeraldBorder)" strokeWidth="2.5" />
      {/* Inner check & calendar marks */}
      <text x="40" y="34" textAnchor="middle" fill="#D1FAE5" fontSize="10" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.5">
        SEPT
      </text>
      <text x="40" y="46" textAnchor="middle" fill="#34D399" fontSize="9" fontWeight="700" fontFamily="sans-serif">
        30 / 30
      </text>
      {/* Small Checkmark ribbon */}
      <path d="M34 54 L38 58 L46 50" stroke="#6EE7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BadgeStreak30({ className = "w-16 h-16" }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="fireGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FB923C" stopOpacity="0.85" />
          <stop offset="70%" stopColor="#EA580C" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#9A3412" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fireBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFEDD5" />
          <stop offset="40%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#C2410C" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="36" fill="url(#fireGlow)" opacity="0.4" />
      {/* Circular Flame Frame */}
      <circle cx="40" cy="40" r="30" fill="#1C0E07" stroke="url(#fireBorder)" strokeWidth="2.5" />
      {/* Stylized Flame */}
      <path
        d="M40 18 C40 18 45 25 43 30 C47 28 50 33 48 39 C46 45 42 48 40 48 C37 48 33 44 33 39 C33 33 37 28 37 28 C37 28 35 32 36 35 C33 32 35 25 40 18 Z"
        fill="#FB923C"
        opacity="0.9"
      />
      <text x="40" y="58" textAnchor="middle" fill="#FED7AA" fontSize="10" fontWeight="800" fontFamily="sans-serif">
        30 STREAK
      </text>
    </svg>
  );
}
