import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, leetcodeBadges, competitiveMilestones } from '../data/portfolioData';
import { Badge100Days, Badge50Days, BadgeSeptemberChallenge, BadgeStreak30 } from './LeetCodeBadgeIcons';
import { Trophy, Award, Flame, CheckCircle, ExternalLink, Code2 } from 'lucide-react';
import { LeetCodeIcon } from './Icons';

export default function AchievementsSection() {
  const renderBadgeIcon = (id) => {
    switch (id) {
      case '100-days':
        return <Badge100Days className="w-20 h-20 drop-shadow-[0_0_20px_rgba(250,204,21,0.45)]" />;
      case '50-days':
        return <Badge50Days className="w-20 h-20 drop-shadow-[0_0_20px_rgba(56,189,248,0.45)]" />;
      case 'september-30':
        return <BadgeSeptemberChallenge className="w-20 h-20 drop-shadow-[0_0_20px_rgba(52,211,153,0.45)]" />;
      case 'streak-30':
        return <BadgeStreak30 className="w-20 h-20 drop-shadow-[0_0_20px_rgba(251,146,60,0.45)]" />;
      default:
        return <Award className="w-16 h-16 text-amber-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 px-4 max-w-6xl mx-auto relative scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-wider mb-3">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>Algorithmic Discipline</span>
        </div>
        <h2
          className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight leading-[1.1]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          LeetCode Badges & Milestones
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
          Daily problem solving is proof of stamina, focus, and algorithmic depth. Verified via official LeetCode submissions.
        </p>

        <a
          href={personalInfo.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono hover:bg-amber-500/20 hover:border-amber-500/50 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/10"
        >
          <LeetCodeIcon className="w-4 h-4 text-amber-400" />
          <span>Verify on LeetCode (@iamamritjha)</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Badges Grid as Prestige Medals */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {leetcodeBadges.map((badge, i) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative rounded-3xl p-7 bg-gradient-to-b ${badge.glowColor} bg-[#0A0A0C] border ${badge.borderColor} transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 flex flex-col items-center text-center shadow-xl group`}
          >
            {/* Top pill with year/status */}
            <div className="flex items-center justify-between w-full mb-6">
              <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${badge.pillBg}`}>
                {badge.category}
              </span>
              <span className="text-xs font-mono font-bold text-zinc-400">
                {badge.year}
              </span>
            </div>

            {/* Glowing Badge SVG Icon with hover bounce */}
            <div className="my-3 transform group-hover:scale-110 transition-transform duration-300">
              {renderBadgeIcon(badge.id)}
            </div>

            {/* Badge Title */}
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
              {badge.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-zinc-300 leading-relaxed mb-6 font-normal">
              {badge.description}
            </p>

            {/* Verified Footer Pill */}
            <div className="mt-auto pt-3.5 border-t border-white/10 w-full flex items-center justify-center gap-1.5 text-xs text-zinc-300 font-mono">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Award</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Competitive Highlights Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-7 rounded-3xl bg-[#0E0F13] border border-white/10 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full font-semibold">
                Hackathon / Contest
              </span>
              <span className="text-xs text-zinc-400 font-mono">Top 14 Rank</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              CipherHunt — 14th Rank Nationally
            </h4>
            <p className="text-zinc-300 text-sm leading-relaxed mb-4 font-normal">
              Competed among 100+ engineering teams in CipherHunt, executing fast algorithmic problem solving, logic debugging, and collaborative system challenges under strict time pressure.
            </p>
          </div>
          <div className="flex items-center gap-2 pt-3 border-t border-white/5 text-xs text-zinc-400 font-mono">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>14 / 100+ Teams Verified</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-7 rounded-3xl bg-[#0E0F13] border border-white/10 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full font-semibold">
                Problem Solving Volume
              </span>
              <span className="text-xs text-zinc-400 font-mono">190+ Solved</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              Continuous DSA Problem Practice
            </h4>
            <p className="text-zinc-300 text-sm leading-relaxed mb-4 font-normal">
              Deep algorithmic grounding in Arrays, Binary Trees, Depth/Breadth-First Search, Graph Corridors, Dynamic Programming, and Two Pointers—translating theory into robust software code.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
            {['Arrays', 'Trees', 'Graphs', 'DP', 'Two Pointers', 'Hashing'].map((topic) => (
              <span key={topic} className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-zinc-300 font-mono">
                {topic}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
