import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';
import { Layers, Terminal, Database, Cpu, Wrench } from 'lucide-react';

export default function SkillsSection() {
  const getCategoryMeta = (index) => {
    switch (index) {
      case 0:
        return {
          icon: <Layers className="w-5 h-5 text-blue-400" />,
          accent: 'from-blue-500/20 to-blue-500/5',
          border: 'border-blue-500/30 hover:border-blue-400/60',
          dot: 'bg-blue-400',
        };
      case 1:
        return {
          icon: <Terminal className="w-5 h-5 text-indigo-400" />,
          accent: 'from-indigo-500/20 to-indigo-500/5',
          border: 'border-indigo-500/30 hover:border-indigo-400/60',
          dot: 'bg-indigo-400',
        };
      case 2:
        return {
          icon: <Database className="w-5 h-5 text-sky-400" />,
          accent: 'from-sky-500/20 to-sky-500/5',
          border: 'border-sky-500/30 hover:border-sky-400/60',
          dot: 'bg-sky-400',
        };
      case 3:
        return {
          icon: <Cpu className="w-5 h-5 text-amber-400" />,
          accent: 'from-amber-500/20 to-amber-500/5',
          border: 'border-amber-500/30 hover:border-amber-400/60',
          dot: 'bg-amber-400',
        };
      default:
        return {
          icon: <Wrench className="w-5 h-5 text-emerald-400" />,
          accent: 'from-emerald-500/20 to-emerald-500/5',
          border: 'border-emerald-500/30 hover:border-emerald-400/60',
          dot: 'bg-emerald-400',
        };
    }
  };

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto relative scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technologies & Stack</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Technical Core Competencies
          </h2>
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
          Languages, libraries, and computational systems I use to design and deploy real-world software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => {
          const meta = getCategoryMeta(i);

          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-7 rounded-3xl bg-gradient-to-br ${meta.accent} bg-[#0A0A0D] border ${meta.border} transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {meta.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-violet-200 transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200 font-mono transition-all hover:bg-white/[0.08] hover:border-white/20"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
