import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { GlowButton } from '../components/ui/GlowButton';
import { liveHackathons, categories, difficulties } from '../data/hackathons';

const LiveHackathons = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = liveHackathons.filter(h => activeCategory === 'All' || h.category === activeCategory);

  return (
    <div className="container mx-auto px-6 py-20 min-h-screen">
      {/* Symmetrical Layout Wrapper to ensure equal left and right gaps */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            ACTIVE <span className="text-neon-sky">MISSIONS</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Select your next challenge. Build, break, and innovate.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-neon-sky text-cyber-darker shadow-[0_0_15px_rgba(0,200,255,0.5)]' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((hack, idx) => (
            <motion.div 
              key={hack.id} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard className="flex flex-col h-full p-0 overflow-hidden">
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold border border-white/20">
                      {hack.difficulty}
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-extrabold border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.25)] tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
                      OPEN
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{hack.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3">{hack.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-300 mb-6 bg-black/20 p-4 rounded-2xl">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Team Size:</span>
                      <span className="font-mono">{hack.teamSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Venue:</span>
                      <span>{hack.venue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Deadline:</span>
                      <span className="text-neon-pink">{hack.deadline}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {hack.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-4 border-t border-white/5 bg-black/40 text-center">
                  <a href="https://agentversemcp.devpost.com/" target="_blank" rel="noopener noreferrer" className="block">
                    <GlowButton className="w-full">Initialize Registration</GlowButton>
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveHackathons;