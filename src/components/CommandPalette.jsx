import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FolderGit2, Trophy, User, GraduationCap, FileDown, Copy, ExternalLink, X, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(); // toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const actions = [
    {
      id: 'projects',
      title: 'Featured Projects',
      sub: 'Explore LifeLedger, Finance Tracker, SkyRoute',
      icon: <FolderGit2 className="w-4 h-4 text-zinc-300" />,
      action: () => {
        window.location.hash = '#projects';
        onClose();
      }
    },
    {
      id: 'achievements',
      title: 'LeetCode Badges & 190+ Solved',
      sub: '100-Day, 50-Day, September 30/30, 30-Day Streak',
      icon: <Trophy className="w-4 h-4 text-amber-400" />,
      action: () => {
        window.location.hash = '#achievements';
        onClose();
      }
    },
    {
      id: 'what-i-do',
      title: 'What I Do & Core Domains',
      sub: 'Full-stack apps, Redis caching, algorithmic systems',
      icon: <FolderGit2 className="w-4 h-4 text-sky-400" />,
      action: () => {
        window.location.hash = '#what-i-do';
        onClose();
      }
    },
    {
      id: 'about',
      title: 'About Amrit',
      sub: 'BCA & MCA background, certifications & philosophy',
      icon: <User className="w-4 h-4 text-emerald-400" />,
      action: () => {
        window.location.hash = '#about';
        onClose();
      }
    },
    {
      id: 'education',
      title: 'Education Timeline',
      sub: 'Chandigarh University (MCA) & Purnea University (BCA)',
      icon: <GraduationCap className="w-4 h-4 text-indigo-400" />,
      action: () => {
        window.location.hash = '#education';
        onClose();
      }
    },
    {
      id: 'resume',
      title: 'Download Resume (PDF)',
      sub: 'Verified updated resume Amrit_Resume.pdf',
      icon: <FileDown className="w-4 h-4 text-violet-400" />,
      action: () => {
        const link = document.createElement('a');
        link.href = personalInfo.resumePdf;
        link.download = 'Amrit_Prakash_Resume.pdf';
        link.click();
        onClose();
      }
    },
    {
      id: 'copy-email',
      title: 'Copy Email Address',
      sub: personalInfo.email,
      icon: <Copy className="w-4 h-4 text-slate-300" />,
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onClose();
        }, 1200);
      }
    },
    {
      id: 'github',
      title: 'Open GitHub Profile',
      sub: personalInfo.github,
      icon: <ExternalLink className="w-4 h-4 text-slate-400" />,
      action: () => {
        window.open(personalInfo.github, '_blank');
        onClose();
      }
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      sub: personalInfo.linkedin,
      icon: <ExternalLink className="w-4 h-4 text-slate-400" />,
      action: () => {
        window.open(personalInfo.linkedin, '_blank');
        onClose();
      }
    },
    {
      id: 'leetcode',
      title: 'Open LeetCode Profile (@iamamritjha)',
      sub: personalInfo.leetcode,
      icon: <ExternalLink className="w-4 h-4 text-amber-400" />,
      action: () => {
        window.open(personalInfo.leetcode, '_blank');
        onClose();
      }
    }
  ];

  const filtered = actions.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.sub.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl rounded-2xl bg-[#0D1018] border border-white/10 shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-white/[0.02]">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or jump to section..."
                autoFocus
                className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
              />
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-slate-400">
                ESC
              </span>
            </div>

            {/* List of actions */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-white/20">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white group-hover:text-zinc-200 transition-colors">
                          {item.title}
                        </div>
                        <div className="text-xs text-zinc-400 truncate max-w-xs">
                          {item.sub}
                        </div>
                      </div>
                    </div>
                    {item.id === 'copy-email' && copied ? (
                      <span className="text-xs text-emerald-400 flex items-center gap-1 font-mono">
                        <Check className="w-3.5 h-3.5" /> Copied!
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-500 group-hover:text-slate-300">
                        Jump →
                      </span>
                    )}
                  </button>
                ))
              ) : (
                <div className="p-6 text-center text-xs text-slate-500">
                  No matching actions found.
                </div>
              )}
            </div>

            {/* Footer note */}
            <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/5 text-[11px] text-slate-500 flex items-center justify-between font-mono">
              <span>Navigation Command Menu</span>
              <span>Use ↑ ↓ to navigate</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
