import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="pt-28 pb-24 px-4 max-w-5xl mx-auto relative scroll-mt-24">
      <div className="relative rounded-3xl p-8 sm:p-16 bg-gradient-to-b from-[#121318] via-[#0E0F13] to-[#08080A] border border-white/10 overflow-hidden text-center shadow-2xl">
        {/* Soft Ambient Radial Glow */}
        <div className="ambient-glow w-96 h-96 -top-24 left-1/2 -translate-x-1/2 bg-white/[0.02]" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-wider mb-6">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>

          {/* Dennis Snellenberg bold typography */}
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Let's build something <span className="text-gradient-accent">remarkable.</span>
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-10 max-w-lg font-normal">
            Have a full-stack role, an engineering collaboration, or an algorithmic challenge? My inbox is always open.
          </p>

          {/* Interactive Copy Email Pill & Send Mail */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mb-12">
            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto flex-1 flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all text-sm font-mono text-zinc-200 group"
            >
              <div className="flex items-center gap-2 truncate">
                <Mail className="w-4 h-4 text-zinc-300 shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </div>
              <span className="text-xs text-zinc-400 shrink-0 flex items-center gap-1">
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 group-hover:scale-110 transition-transform text-zinc-400 group-hover:text-white" />
                    <span className="group-hover:text-white">Copy</span>
                  </>
                )}
              </span>
            </button>

            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-zinc-200 text-black font-semibold text-sm transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-2 shrink-0 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Send Mail</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Social Links & Meta Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors border border-white/5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors border border-white/5"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-amber-400 transition-colors border border-white/5"
            >
              <LeetCodeIcon className="w-4 h-4" />
              <span>LeetCode</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors border border-white/5"
            >
              <Phone className="w-4 h-4" />
              <span>{personalInfo.phone}</span>
            </a>
            <span className="flex items-center gap-1.5 px-3 py-2 text-zinc-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              {personalInfo.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
