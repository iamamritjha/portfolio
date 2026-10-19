import React from 'react';
import { motion } from 'framer-motion';

export default function MarqueeTicker() {
  const items = [
    'FULL-STACK DEVELOPER',
    '190+ LEETCODE SOLVED',
    'DISTRIBUTED REDIS CACHING',
    'REACT & NODE.JS',
    'AI MEDICAL SUMMARIZATION',
    'TOP 14 CIPHERHUNT',
    'MCA CHANDIGARH UNIVERSITY',
    'DIJKSTRA GRAPH CORRIDORS',
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-white/5 bg-[#08080A]/80 backdrop-blur-md">
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#08080A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#08080A] to-transparent z-10 pointer-events-none" />

      <div className="flex select-none">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 24,
            ease: 'linear',
          }}
          className="flex items-center gap-8 whitespace-nowrap will-change-transform"
        >
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-xs sm:text-sm font-mono tracking-widest text-slate-400 font-semibold hover:text-white transition-colors">
                {item}
              </span>
              <span className="text-violet-500/60 text-xs">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
