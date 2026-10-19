import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, certifications } from '../data/portfolioData';
import { User, MapPin, Award, CheckCircle2, GraduationCap, FileDown } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto relative scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Interactive Developer Dossier Card (Dennis Snellenberg / RezaGHZ Editorial Style) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex justify-center sticky top-28"
        >
          <div className="relative w-full max-w-md rounded-3xl p-6 bg-[#101115] border border-white/10 shadow-2xl backdrop-blur-xl group">
            {/* Ambient Neutral Back Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-white/[0.02] blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Dossier Header */}
            <div className="relative flex items-center justify-between pb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-900 border border-white/15 flex items-center justify-center font-bold text-white text-lg shadow-lg">
                  AP
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">{personalInfo.name}</h3>
                  <p className="text-xs text-zinc-400 font-mono">Full-Stack Engineer</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active
              </span>
            </div>

            {/* Core Architectural Pillars */}
            <div className="relative my-6 space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                Core Engineering DNA
              </div>
              
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-zinc-300 shrink-0 mt-0.5">
                  ⚡
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Distributed Redis Caching</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Sub-second query latencies and optimized database throughput</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-zinc-300 shrink-0 mt-0.5">
                  🛡️
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Secure Full-Stack Systems</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Clean REST APIs, robust MERN workflows & structured schema design</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                  🧠
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">190+ LeetCode Discipline</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Unbroken 30-day streaks & solid foundations in Graphs, DP & Trees</div>
                </div>
              </div>
            </div>

            {/* Quick Location & Academic Anchor */}
            <div className="relative pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                Kharar, Punjab, India
              </span>
              <span className="text-zinc-300 font-semibold">MCA CGPA 7.93</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Editorial Narrative & Credentials */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col space-y-8"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-wider mb-4">
              <User className="w-3.5 h-3.5" />
              <span>Background & Craft</span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.15]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Engineering with purpose, performance & logic.
            </h2>
          </div>

          {/* User's Exact Approved Story */}
          <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
            {personalInfo.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Academic Highlight Card */}
          <div className="p-5 rounded-2xl glass-panel border-white/10 flex items-start sm:items-center gap-4">
            <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-zinc-300 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white">
                Master of Computer Applications (MCA) — Chandigarh University
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 mt-1 font-mono">
                Expected 2027 · <span className="text-emerald-400 font-semibold">CGPA 7.93</span> · BCA from Purnea University (76%)
              </div>
            </div>
          </div>

          {/* Certifications (No Truncation, Clean Flowing Pills) */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3.5 flex items-center gap-2">
              <Award className="w-4 h-4 text-zinc-400" />
              Verified Certifications
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-zinc-200 flex items-center gap-2 hover:border-white/25 hover:bg-white/[0.07] transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="pt-2">
            <a
              href={personalInfo.resumePdf}
              download="Amrit_Prakash_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileDown className="w-4 h-4 text-zinc-300" />
              <span>Download Verified Resume (PDF)</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
