import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 max-w-4xl mx-auto relative scroll-mt-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-wider mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Background</span>
        </div>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Education & Milestones
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          My academic foundation and continuous computing education.
        </p>
      </div>

      <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#08080A] border-2 border-zinc-400 group-hover:scale-125 group-hover:bg-white group-hover:border-white transition-all shadow-md" />

            <div className="p-6 rounded-2xl glass-panel glass-panel-hover">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  {item.score}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {item.degree}
              </h3>
              <p className="text-sm font-medium text-slate-300 mb-2">
                {item.institution}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
