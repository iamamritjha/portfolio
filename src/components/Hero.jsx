import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileDown, Search, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero({ onOpenCommandPalette }) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 pt-32 pb-16 overflow-hidden max-w-6xl mx-auto">
      {/* Subtle neutral atmospheric depth (Zero blue tint) */}
      <div className="ambient-glow w-[500px] h-[500px] -top-32 left-1/2 -translate-x-1/2 bg-white/[0.02]" />

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Greeting, Headline, Description & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Full-Stack Developer</span>
          </div>

          {/* User Requested Hero Headline */}
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Hi, I’m <span className="text-gradient-accent">Amrit Prakash</span>
          </h1>

          {/* User Requested Subtitle */}
          <p className="text-lg sm:text-2xl text-zinc-300 max-w-xl mb-8 leading-relaxed font-normal">
            I build clean, reliable full-stack apps, from secure backends with Redis caching to responsive React interfaces.
          </p>

          {/* Social Icons Ribbon (Dennis Snellenberg / Musing style) */}
          <div className="flex items-center gap-3 mb-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-amber-400 hover:bg-white/10 hover:border-amber-500/40 transition-all hover:scale-105"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="px-3.5 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-1.5"
            >
              <span>{personalInfo.email}</span>
            </a>
          </div>

          {/* Primary Action Buttons (Dennis Snellenberg High-Contrast) */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-white/5"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>

            <a
              href={personalInfo.resumePdf}
              download="Amrit_Prakash_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] border border-white/15 text-white font-medium text-sm hover:bg-white/[0.12] hover:border-white/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileDown className="w-4 h-4 text-zinc-300" />
              <span>Resume (PDF)</span>
            </a>

            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:flex items-center gap-2 px-4 py-3.5 rounded-full bg-white/[0.05] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 text-xs font-mono transition-all"
              title="Quick command palette"
            >
              <Search className="w-3.5 h-3.5" />
              <span>⌘K</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Studio Portrait Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-sm rounded-3xl p-3 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-2xl backdrop-blur-xl group">
            {/* Portrait Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
              <img
                src={personalInfo.avatarImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent opacity-60" />
            </div>

            {/* Bottom Floating Info Pill */}
            <div className="mt-3 p-3.5 rounded-2xl bg-[#121316]/95 border border-white/[0.08] flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white">{personalInfo.name}</h4>
                <p className="text-xs text-zinc-400 font-mono">Full-Stack Developer</p>
              </div>
              <span className="flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-300" />
                Kharar, Punjab
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Minimal Stats Strip */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-16"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="p-4 sm:p-5 rounded-2xl glass-panel text-center transition-all hover:border-white/20"
          >
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200">
              {stat.label}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {stat.sub}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
