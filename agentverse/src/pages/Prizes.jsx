import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Sparkles, Globe, Palette } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

const prizes = [
  {
    rank: 1,
    icon: Sparkles,
    label: 'First Prize',
    title: 'Ultimate Premium Creator & AI Bundle',
    description: 'Gain access to a curated collection of 100+ Premium AI, Design, Learning, SEO, Productivity, and Creative Tools, empowering you to build, create, design, learn, and innovate without limits.',
    color: '#FFD700',
    gradient: 'from-yellow-500 to-amber-600',
    bgGlow: 'rgba(255, 215, 0, 0.15)',
    tag: 'AI TOOLS',
    winners: '1 winner',
  },
  {
    rank: 2,
    icon: Globe,
    label: 'Second Prize',
    title: 'Premium Domain (.site) — 1 Year',
    description: 'Launch your next big idea with a free .site domain, perfect for showcasing portfolios, startups, products, personal brands, or hackathon projects.',
    color: '#C0C0C0',
    gradient: 'from-gray-300 to-gray-500',
    bgGlow: 'rgba(192, 192, 192, 0.15)',
    tag: 'WEB DOMAIN',
    winners: '1 winner',
  },
  {
    rank: 3,
    icon: Palette,
    label: 'Third Prize',
    title: 'Canva Premium (1 Year)',
    description: 'Unlock 1 Year of Canva Premium access with premium templates, advanced design tools, brand kits, AI features, and creative resources for professional-quality content creation.',
    color: '#CD7F32',
    gradient: 'from-amber-600 to-orange-700',
    bgGlow: 'rgba(205, 127, 50, 0.15)',
    tag: 'CANVA PREMIUM',
    winners: '1 winner',
  },
];

const Prizes = () => {
  return (
    <div className="container mx-auto px-6 py-20 min-h-screen">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-neon-pink/30 bg-neon-pink/10 text-neon-pink text-sm font-bold tracking-wider"
        >
          3 NON-CASH PRIZES
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-6"
        >
          PRIZE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-glow">POOL</span>
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Win incredible tools and resources to supercharge your journey as a builder, creator, and innovator.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {prizes.map((prize, idx) => (
          <motion.div 
            key={prize.rank}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            className={idx === 0 ? 'lg:scale-105 lg:z-10' : ''}
          >
            <GlassCard 
              className={`relative overflow-hidden h-full flex flex-col text-center p-8 ${
                idx === 0 ? 'border-yellow-500/30' : idx === 1 ? 'border-gray-400/20' : 'border-amber-700/20'
              }`}
            >
              {/* Background glow */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 blur-[80px] rounded-full pointer-events-none opacity-40"
                style={{ backgroundColor: prize.bgGlow }}
              />

              {/* Tag */}
              <div className="relative z-10 mb-6">
                <span 
                  className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase"
                  style={{ 
                    backgroundColor: `${prize.color}15`, 
                    color: prize.color,
                    border: `1px solid ${prize.color}40`
                  }}
                >
                  {prize.tag}
                </span>
              </div>

              {/* Icon */}
              <div 
                className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2"
                style={{ 
                  borderColor: `${prize.color}50`, 
                  backgroundColor: `${prize.color}10`,
                  boxShadow: `0 0 30px ${prize.color}30`
                }}
              >
                <prize.icon className="w-10 h-10" style={{ color: prize.color }} />
              </div>

              {/* Rank Badge */}
              <div 
                className="relative z-10 inline-flex items-center justify-center gap-2 mx-auto mb-4 px-4 py-1 rounded-full text-sm font-bold"
                style={{ 
                  backgroundColor: `${prize.color}20`, 
                  color: prize.color,
                  border: `1px solid ${prize.color}50`
                }}
              >
                {prize.label}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                {prize.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-400 text-sm leading-relaxed flex-grow mb-6">
                {prize.description}
              </p>

              {/* Winner count */}
              <div className="relative z-10 mt-auto">
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{ 
                    backgroundColor: `${prize.color}10`, 
                    color: prize.color,
                    border: `1px solid ${prize.color}20`
                  }}
                >
                  <Gift className="w-4 h-4" />
                  {prize.winners}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <a href="https://agentversemcp.devpost.com/" target="_blank" rel="noopener noreferrer">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-neon-sky via-neon-purple to-neon-pink text-white font-bold text-lg uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,200,255,0.5)] transition-all duration-300 transform hover:scale-105">
            Register Now on Devpost
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default Prizes;
