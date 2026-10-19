import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, ExternalLink, Code2, Sparkles, Layers, ChevronDown } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full-Stack + AI', 'Python + Analytics', 'Algorithms'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase().split(' ')[0]));

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto relative scroll-mt-24">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Selected Projects</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Engineering Case Studies
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-medium px-4 py-2 rounded-full transition-all ${
                activeCategory === cat
                  ? 'bg-white text-black font-semibold shadow-lg shadow-white/5'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Dennis Snellenberg Editorial Rows List */}
      <div className="space-y-4">
        {filteredProjects.map((project, index) => {
          const projectNum = `0${index + 1}`;
          const isFlagship = project.id === 'lifeledger';

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative rounded-3xl p-6 sm:p-8 transition-all duration-300 border ${
                isFlagship
                  ? 'bg-[#111217] border-white/20 hover:border-white/35 shadow-2xl'
                  : 'bg-[#0E0F13] hover:bg-[#131419] border-white/[0.07] hover:border-white/20'
              }`}
            >
              {/* Row Top Strip: Number, Category & Badges */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-start gap-5">
                  {/* Large Index Number */}
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-zinc-500 group-hover:text-white transition-colors shrink-0">
                    {projectNum}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10">
                        {project.badge}
                      </span>
                      <span className="text-xs text-zinc-400 font-mono">
                        {project.period}
                      </span>
                      {isFlagship && (
                        <span className="flex items-center gap-1 text-[11px] text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full font-medium">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          Live Production App
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                      {project.tagline}
                    </p>

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 shrink-0 lg:flex-col lg:items-end">
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-semibold shadow-lg shadow-white/5 transition-all hover:scale-105 active:scale-95"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-semibold transition-all hover:scale-105 active:scale-95"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View GitHub</span>
                      <ExternalLink className="w-3 h-3 text-zinc-400" />
                    </a>
                  )}

                  <div className="flex items-center gap-2">
                    {project.liveDemo && project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white text-xs font-medium transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white text-xs font-medium transition-colors"
                    >
                      <span>Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
