import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, Cpu } from 'lucide-react';

export default function WhatIDoSection() {
  const pillars = [
    {
      id: 'web',
      icon: <Layers className="w-6 h-6 text-white" />,
      title: 'Full-Stack Web Development',
      badge: 'React & Node.js',
      description: 'Building end-to-end web applications with modern React, JavaScript, Express, and Flask. I prioritize clean component architecture, responsive layouts, and smooth micro-interactions that elevate user experience.',
      tags: ['React.js', 'Node.js', 'Express', 'Python', 'TailwindCSS']
    },
    {
      id: 'backend',
      icon: <Database className="w-6 h-6 text-white" />,
      title: 'Distributed Caching & Backend',
      badge: 'Redis & REST APIs',
      description: 'Designing clean, high-throughput REST APIs and database layers. Utilizing Redis caching to reduce database hits and optimize query latency across relational and document databases.',
      tags: ['Redis Caching', 'REST APIs', 'MongoDB', 'MySQL']
    },
    {
      id: 'algorithms',
      icon: <Cpu className="w-6 h-6 text-white" />,
      title: 'Algorithmic Logic & AI Systems',
      badge: 'DSA & LLM APIs',
      description: 'Applying solid data structure foundations (190+ LeetCode solved) to real systems—from graph shortest-path routing algorithms to LLM prompt pipelines that extract and summarize complex unstructured data.',
      tags: ['190+ LeetCode', 'Graph Theory', 'Dijkstra Algorithm', 'AI Pipelines']
    }
  ];

  return (
    <section id="what-i-do" className="py-24 px-4 max-w-6xl mx-auto relative scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span>Capabilities & Focus</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What I Do & Build
          </h2>
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
          I bridge front-of-the-screen craftsmanship with back-of-the-system reliability and rigorous algorithmic logic.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 group-hover:border-white/25 transition-colors">
                  {pillar.icon}
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/5 text-zinc-300">
                  {pillar.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zinc-100 transition-colors">
                {pillar.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                {pillar.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {pillar.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-white/5 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
