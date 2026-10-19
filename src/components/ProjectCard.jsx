import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onSelect, isFeatured }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`group relative rounded-3xl p-6 sm:p-8 glass-panel glass-panel-hover flex flex-col justify-between ${
        isFeatured ? 'md:col-span-2 bg-[#101116]' : ''
      }`}
    >
      <div>
        {/* Top Meta Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono tracking-wider text-violet-400 uppercase font-semibold px-2.5 py-1 rounded-full bg-violet-950/50 border border-violet-800/30">
              {project.badge}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {project.period}
            </span>
          </div>

          {project.featured && (
            <span className="flex items-center gap-1 text-[11px] text-amber-400/90 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full font-medium">
              <Sparkles className="w-3 h-3" />
              Featured
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors mb-3">
          {project.title}
        </h3>

        {/* Project Tagline */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
          {project.tagline}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.slice(0, isFeatured ? 8 : 5).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-300 font-mono"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > (isFeatured ? 8 : 5) && (
            <span className="text-xs px-2 py-1 text-slate-400 font-mono">
              +{project.stack.length - (isFeatured ? 8 : 5)} more
            </span>
          )}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
        <button
          onClick={() => onSelect(project)}
          className="text-xs font-semibold text-violet-400 hover:text-violet-300 flex items-center gap-1.5 transition-colors group/btn"
        >
          <span>Deep Dive Details</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors flex items-center gap-1"
            >
              <span>Live</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
