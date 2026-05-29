import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

const TARGET_DATE = new Date('2026-06-15T00:00:00').getTime();

const DigitCard = ({ value, label, color }) => {
  const displayValue = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className="relative group">
        {/* 3D Shadow layers */}
        <div 
          className="absolute inset-0 rounded-2xl translate-y-1.5 sm:translate-y-2 blur-sm opacity-40"
          style={{ backgroundColor: color }}
        />
        <div 
          className="absolute inset-0 rounded-2xl translate-y-0.5 sm:translate-y-1 opacity-20"
          style={{ backgroundColor: color }}
        />
        
        {/* Main card */}
        <div 
          className="relative w-[56px] h-[76px] sm:w-28 sm:h-32 md:w-32 md:h-36 rounded-xl sm:rounded-2xl flex items-center justify-center overflow-hidden"
          style={{ 
            background: `linear-gradient(145deg, ${color}15, ${color}08)`,
            border: `1.5px solid ${color}40`,
            boxShadow: `0 0 20px ${color}15, inset 0 1px 0 ${color}30, 0 4px 0 ${color}10, 0 8px 15px rgba(0,0,0,0.4)`,
          }}
        >
          {/* Horizontal divider line */}
          <div 
            className="absolute left-0 right-0 h-px top-1/2 z-20"
            style={{ backgroundColor: `${color}20` }}
          />
          
          {/* Top reflection */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/[0.03] rounded-t-xl sm:rounded-t-2xl" />
          
          {/* Digit */}
          <span 
            className="text-2xl sm:text-5xl md:text-6xl font-black font-mono tracking-tighter relative z-10"
            style={{ 
              color: color,
              textShadow: `0 0 15px ${color}80, 0 0 30px ${color}40, 0 0 45px ${color}20`,
              filter: 'brightness(1.2)',
            }}
          >
            {displayValue}
          </span>
        </div>
      </div>
      
      <span 
        className="text-[9px] sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]"
        style={{ color: `${color}90` }}
      >
        {label}
      </span>
    </div>
  );
};

const Separator = ({ color }) => (
  <div className="flex flex-col gap-1 sm:gap-2 justify-center h-[76px] sm:h-32 md:h-36">
    <div 
      className="w-1 h-1 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full animate-pulse"
      style={{ 
        backgroundColor: color,
        boxShadow: `0 0 10px ${color}, 0 0 20px ${color}60`
      }}
    />
    <div 
      className="w-1 h-1 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full animate-pulse"
      style={{ 
        backgroundColor: color,
        boxShadow: `0 0 10px ${color}, 0 0 20px ${color}60`,
        animationDelay: '0.5s'
      }}
    />
  </div>
);

const Winners = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(TARGET_DATE - now, 0);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const accentColor = '#FFD700';

  return (
    <div className="container mx-auto px-6 py-20 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-6"
        >
          HALL OF <span className="text-neon-yellow text-glow">FAME</span>
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-4xl"
      >
        <GlassCard className="text-center py-12 md:py-16 px-6 md:px-12 relative overflow-hidden">
          {/* Background glows */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-sky/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <div className="w-20 h-20 rounded-full bg-neon-yellow/10 flex items-center justify-center mx-auto mb-8 border-2 border-neon-yellow/30" style={{ boxShadow: '0 0 30px rgba(255,215,0,0.2)' }}>
              <Trophy className="text-neon-yellow w-10 h-10" />
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold mb-3 text-white">
              Winners Will Be <span className="text-neon-yellow text-glow">Announced</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-2">
              June 15, 2026
            </p>
            <p className="text-gray-500 text-sm mb-12 max-w-md mx-auto">
              Stay tuned! Our judges are carefully evaluating all submissions.
            </p>

            {/* Countdown Timer */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-4 md:gap-6 mb-12">
              <DigitCard value={timeLeft.days} label="Days" color="#00C8FF" />
              <Separator color="#00C8FF" />
              <DigitCard value={timeLeft.hours} label="Hours" color="#A855F7" />
              <Separator color="#A855F7" />
              <DigitCard value={timeLeft.minutes} label="Minutes" color="#EC4899" />
              <Separator color="#EC4899" />
              <DigitCard value={timeLeft.seconds} label="Seconds" color={accentColor} />
            </div>

            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neon-yellow/10 border border-neon-yellow/20">
              <Clock className="text-neon-yellow w-5 h-5 animate-pulse" />
              <span className="text-neon-yellow font-bold text-sm uppercase tracking-wider">Countdown Active</span>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default Winners;