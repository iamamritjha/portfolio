import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileDown, Menu, X, Search } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenCommandPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Badges', href: '#achievements' },
    { name: 'Focus', href: '#what-i-do' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-5xl rounded-full px-5 py-3 transition-all duration-300 flex items-center justify-between ${
          scrolled
            ? 'bg-[#101114]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60'
            : 'bg-[#101114]/60 backdrop-blur-md border border-white/[0.08]'
        }`}
      >
        {/* Brand with terminal prefix (Musing style) */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-mono text-zinc-400 font-semibold text-xs sm:text-sm">~/</span>
          <span className="font-semibold tracking-tight text-white group-hover:text-zinc-200 transition-colors text-sm sm:text-base">
            amrit-prakash
          </span>
          <span className="inline-block w-1.5 h-3.5 bg-white animate-pulse ml-0.5" />
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium px-3 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 text-xs font-mono transition-colors"
            title="Press ⌘K to search"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">⌘K</span>
          </button>

          <a
            href={personalInfo.resumePdf}
            download="Amrit_Prakash_Resume.pdf"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileDown className="w-3.5 h-3.5 text-zinc-700" />
            <span>Resume</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden absolute top-20 left-4 right-4 rounded-2xl bg-[#0E121B]/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl flex flex-col gap-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={personalInfo.resumePdf}
              download="Amrit_Prakash_Resume.pdf"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-xl bg-white text-black"
            >
              <FileDown className="w-4 h-4" />
              Download Resume (PDF)
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
