import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Database } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl rounded-3xl bg-[#111216] border border-white/10 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/[0.02]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10">
                {project.badge}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Visual Graphic if available */}
            {project.image && (
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover max-h-72"
                />
              </div>
            )}

            {/* Overview */}
            <div>
              <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-zinc-400" />
                Project Overview
              </h4>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div>
              <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-zinc-400" />
                Key Engineering Deliverables
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Database className="w-4 h-4 text-zinc-400" />
                Technologies & Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-200 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-5 border-t border-white/10 bg-white/[0.02] flex items-center justify-end gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 text-sm font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold text-sm transition-colors shadow-lg shadow-white/5"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}
