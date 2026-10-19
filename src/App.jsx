import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import WhatIDoSection from './components/WhatIDoSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-[#08080A] text-[#F1F5F9] selection:bg-white/20 selection:text-white">
      {/* Subtle top scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-zinc-600 via-white to-zinc-600 origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Floating Glass Navbar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Command Palette Modal (⌘K / Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Main Sections Flow */}
      <main className="space-y-6">
        <Hero onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
        <MarqueeTicker />
        <WhatIDoSection />
        <ProjectsSection />
        <AchievementsSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Clean Minimalist Footer */}
      <Footer />
    </div>
  );
}
