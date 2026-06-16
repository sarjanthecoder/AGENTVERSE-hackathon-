import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Crown, Lightbulb, Users, Cpu, Award, Rocket, Zap, Sparkles } from 'lucide-react';

const RankBadge = ({ rank, color }) => {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      {/* Laurels circular frame */}
      <svg className="absolute w-full h-full animate-[spin_30s_linear_infinite]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="42" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
        <circle cx="50" cy="50" r="38" fill="none" stroke={color} strokeWidth="1" opacity="0.3" />
      </svg>
      {/* Laurel branches */}
      <svg className="absolute w-20 h-20" viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
        {/* Left Branch */}
        <path d="M 36,72 C 24,62 24,42 36,32 M 34,65 C 27,60 27,50 34,45 M 35,55 C 30,53 30,47 35,45" opacity="0.8" />
        {/* Right Branch */}
        <path d="M 64,72 C 76,62 76,42 64,32 M 66,65 C 73,60 73,50 66,45 M 65,55 C 70,53 70,47 65,45" opacity="0.8" />
      </svg>
      {/* Crown + Rank Number inside */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <Crown className="w-5 h-5 -mb-0.5" style={{ color }} />
        <span className="text-2xl font-black tracking-tight" style={{ color }}>{rank}</span>
      </div>
    </div>
  );
};

const PodiumCard = ({ rank, title, sub, placeText, color, shadowColor, badgeColor, heightClass, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, type: 'spring', stiffness: 45 }}
      className={`relative w-full max-w-[320px] ${heightClass} flex flex-col items-center justify-between p-7 rounded-3xl overflow-hidden`}
      style={{
        background: `linear-gradient(135deg, ${color}1a, ${color}03)`,
        border: `1.5px solid ${color}40`,
        boxShadow: `0 0 35px ${shadowColor}15, inset 0 1.5px 0 rgba(255,255,255,0.1), 0 20px 45px rgba(0,0,0,0.6)`,
      }}
    >
      {/* Crystal reflection sheen overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />
      
      {/* Glowing light from below / aura behind badge */}
      <div 
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full blur-[40px] opacity-20 pointer-events-none"
        style={{ backgroundColor: shadowColor }}
      />

      {/* Top Badge Section */}
      <div className="mt-4 flex flex-col items-center z-10">
        <RankBadge rank={rank} color={badgeColor} />
        <span className="text-xs font-bold tracking-[0.2em] uppercase mt-5" style={{ color: badgeColor }}>
          {placeText}
        </span>
        
        {/* Diamond divider */}
        <div className="flex items-center gap-1.5 mt-2">
          <div className="w-8 h-[1px]" style={{ background: `linear-gradient(to right, transparent, ${color}80)` }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: badgeColor }} />
          <div className="w-8 h-[1px]" style={{ background: `linear-gradient(to left, transparent, ${color}80)` }} />
        </div>
      </div>

      {/* Title / Project Section */}
      <div className="my-6 text-center w-full flex flex-col items-center justify-center flex-grow z-10">
        <h3 className="text-3xl font-black tracking-tight text-white mb-2 leading-none uppercase" style={{ textShadow: `0 0 15px ${color}30` }}>
          {title}
        </h3>
        {sub && (
          <p className="text-[11px] font-bold text-gray-400 tracking-wider uppercase max-w-[200px] mt-1" style={{ color: `${badgeColor}bf` }}>
            {sub}
          </p>
        )}
      </div>

      {/* Dots representation at bottom */}
      <div className="flex gap-1.5 mb-2 z-10 opacity-40">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="w-1 h-1 rounded-full" style={{ backgroundColor: badgeColor }} />
        ))}
      </div>

      {/* Base stand (Matches premium crystal look) */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-4 border-t"
        style={{
          background: `linear-gradient(90deg, ${color}20, ${color}50, ${color}20)`,
          borderColor: `${color}60`
        }}
      />
    </motion.div>
  );
};

const Winners = () => {
  const pillars = [
    { title: 'INNOVATION', desc: 'Spark Ideas', icon: Lightbulb },
    { title: 'TEAMWORK', desc: 'Stronger Together', icon: Users },
    { title: 'AI TECHNOLOGY', desc: 'Future Ready', icon: Cpu },
    { title: 'JUDGING PANEL', desc: 'Expert Guidance', icon: Users },
    { title: 'ACHIEVEMENT', desc: 'Excellence Unlocked', icon: Award },
  ];

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col items-center justify-start overflow-x-hidden relative">
      
      {/* Background radial soft glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-900/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-indigo-900/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* 1. Header Trophy Section */}
      <div className="relative flex flex-col items-center text-center mt-6 mb-16 px-4">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative w-44 h-44 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full" />
          
          {/* Sparkles around Trophy */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-4 left-6 text-yellow-400 opacity-60">✨</motion.div>
            <motion.div animate={{ opacity: [1, 0.3, 1], scale: [1.2, 0.8, 1.2] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 right-4 text-yellow-300 opacity-80">✨</motion.div>
            <motion.div animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.7, 1.1, 0.7] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute bottom-6 left-10 text-yellow-500 opacity-50">✦</motion.div>
            <motion.div animate={{ opacity: [0.8, 0.2, 0.8], scale: [1.1, 0.7, 1.1] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute bottom-10 right-10 text-yellow-400 opacity-70">✦</motion.div>
          </div>

          {/* Golden laurel wreath */}
          <svg className="absolute w-[160px] h-[160px] text-yellow-500/80 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M 30,75 C 12,65 12,35 30,22 M 28,68 C 15,62 15,45 28,37 M 28,54 C 20,50 20,40 28,37" />
            <path d="M 27,24 L 30,22 M 25,39 L 28,37 M 25,56 L 28,54 M 25,70 L 28,68" />
            <path d="M 70,75 C 88,65 88,35 70,22 M 72,68 C 85,62 85,45 72,37 M 72,54 C 80,50 80,40 72,37" />
            <path d="M 73,24 L 70,22 M 75,39 L 72,37 M 75,56 L 72,54 M 75,70 L 72,68" />
          </svg>

          {/* Trophy Cup */}
          <svg className="w-24 h-24 text-yellow-400 drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" fill="rgba(234,179,8,0.08)" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" fill="rgba(234,179,8,0.08)" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
            <path d="M12 2a6 6 0 0 1 6 6v1c0 2.2-1.8 4-4 4h-4c-2.2 0-4-1.8-4-4V8a6 6 0 0 1 6-6Z" fill="url(#trophyGradient)" />
            <defs>
              <linearGradient id="trophyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE066" />
                <stop offset="50%" stopColor="#EAB308" />
                <stop offset="100%" stopColor="#A16207" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Text Headers */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <span className="text-xl md:text-2xl font-black tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-amber-500 uppercase font-sans mb-1 drop-shadow-[0_0_15px_rgba(234,179,8,0.2)]">
            AgentVerse
          </span>
          <div className="flex items-center gap-3 my-2 text-yellow-500/80 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
            <span>✦</span>
            <span>HACKATHON 2026</span>
            <span>✦</span>
          </div>
        </motion.div>

        {/* Results Announced */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-2 flex flex-col items-center"
        >
          <h1 
            className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-yellow-400 to-amber-600 mb-4"
            style={{ filter: 'drop-shadow(0 0 25px rgba(234,179,8,0.25))' }}
          >
            RESULTS
          </h1>
          
          <div 
            className="px-8 py-2 rounded-full border bg-black/40 backdrop-blur-md"
            style={{
              borderColor: '#a855f750',
              boxShadow: '0 0 20px rgba(168,85,247,0.2), inset 0 1px 0 rgba(255,255,255,0.05)'
            }}
          >
            <span className="text-xs md:text-sm font-black tracking-[0.35em] text-purple-300 uppercase pl-[0.35em] animate-pulse">
              ANNOUNCED
            </span>
          </div>
        </motion.div>
      </div>

      {/* 2. Crystal Podium Pedestals Section */}
      <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-6 md:gap-8 max-w-5xl mx-auto mb-24 w-full px-4">
        
        {/* Second Place (left on desktop, middle on mobile) */}
        <div className="order-2 md:order-1 w-full flex justify-center">
          <PodiumCard
            rank={2}
            title="Oculus IQ"
            placeText="SECOND PLACE"
            color="#C0C0C0"
            shadowColor="#E2E8F0"
            badgeColor="#E2E8F0"
            heightClass="h-[370px] md:h-[420px]"
            delay={0.4}
          />
        </div>

        {/* First Place (middle on desktop, top on mobile) */}
        <div className="order-1 md:order-2 w-full flex justify-center">
          <PodiumCard
            rank={1}
            title="Lendr"
            placeText="• FIRST PLACE •"
            color="#FFDF00"
            shadowColor="#FFE066"
            badgeColor="#FFDF00"
            heightClass="h-[400px] md:h-[460px] scale-100 md:scale-105"
            delay={0.2}
          />
        </div>

        {/* Third Place (right on desktop, bottom on mobile) */}
        <div className="order-3 md:order-3 w-full flex justify-center">
          <PodiumCard
            rank={3}
            title="Synk-F"
            sub="AI Powered ECE Smart Lab"
            placeText="• THIRD PLACE •"
            color="#A855F7"
            shadowColor="#C084FC"
            badgeColor="#C084FC"
            heightClass="h-[370px] md:h-[420px]"
            delay={0.6}
          />
        </div>

      </div>

      {/* 3. Congratulations Text & Pillars Section */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-24 text-center z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-yellow-400 mb-4 tracking-wide">
            Congratulations to Our Winners! 🎉
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed">
            A heartfelt thank you to all participants for their innovation and dedication, and to our judges for their valuable time, expertise, and support.
          </p>
        </div>

        {/* Five pillars layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row items-stretch justify-center gap-6 md:gap-0 bg-cyber-dark/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 md:p-8">
          {pillars.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <React.Fragment key={p.title}>
                {idx > 0 && (
                  <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent mx-4 self-stretch" />
                )}
                <div className="flex flex-col items-center text-center flex-1 py-2 px-1">
                  <div className="w-12 h-12 rounded-full border border-yellow-500/20 flex items-center justify-center mb-3 bg-yellow-500/5 shadow-[0_0_15px_rgba(234,179,8,0.08)]">
                    <IconComponent className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h4 className="text-[11px] font-black tracking-wider text-white mb-1 uppercase">
                    {p.title}
                  </h4>
                  <p className="text-[10px] text-gray-400 font-semibold tracking-wide">
                    {p.desc}
                  </p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* 5. Footer Branding Tagline */}
      <div className="flex flex-col items-center justify-center gap-6 mt-6 mb-12 px-4 text-center z-10 w-full">
        {/* BUILD • INNOVATE • IMPACT */}
        <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
          <span className="text-2xl md:text-4xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-500 uppercase pl-[0.2em] drop-shadow-[0_0_10px_rgba(234,179,8,0.15)]">
            Build • Innovate • Impact
          </span>
          <Rocket className="w-7 h-7 text-yellow-400 animate-bounce" />
        </div>

        {/* Divider */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-500/25 to-transparent" />

        {/* Innovation Hacks Logo */}
        <div className="flex items-center justify-center gap-2.5 text-yellow-500/60">
          <span className="text-xs tracking-[0.25em] font-bold uppercase">✦</span>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center shadow-[0_0_10px_rgba(234,179,8,0.15)]">
              <Zap className="w-3 h-3 text-yellow-400" fill="currentColor" />
            </div>
            <span className="text-xs font-black tracking-widest text-white uppercase font-sans">
              Innovation Hacks
            </span>
          </div>
          <span className="text-xs tracking-[0.25em] font-bold uppercase">✦</span>
        </div>
      </div>

    </div>
  );
};

export default Winners;