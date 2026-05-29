import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { GlowButton } from '../components/ui/GlowButton';

const Register = () => {
  return (
    <div className="container mx-auto px-6 py-20 min-h-[80vh] flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl"
      >
        <GlassCard className="p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black mb-2 tracking-wider text-glow">INITIALIZE <span className="text-neon-sky">HACKER</span></h1>
            <p className="text-gray-400">Create your profile to join the network.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">First Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-neon-sky focus:ring-1 focus:ring-neon-sky transition-all placeholder:text-gray-600"
                  placeholder="Neo"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Last Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-neon-sky focus:ring-1 focus:ring-neon-sky transition-all placeholder:text-gray-600"
                  placeholder="Anderson"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-neon-sky focus:ring-1 focus:ring-neon-sky transition-all placeholder:text-gray-600"
                placeholder="neo@matrix.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Primary Skill</label>
              <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-neon-sky focus:ring-1 focus:ring-neon-sky transition-all appearance-none cursor-pointer">
                <option value="">Select your domain...</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Full Stack Developer</option>
                <option value="ai">AI/ML Engineer</option>
                <option value="crypto">Blockchain Dev</option>
                <option value="design">UI/UX Designer</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">GitHub URL</label>
              <input 
                type="url" 
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-neon-sky focus:ring-1 focus:ring-neon-sky transition-all placeholder:text-gray-600"
                placeholder="https://github.com/username"
              />
            </div>

            <GlowButton className="w-full py-4 mt-8 text-lg">Connect to Mainframe</GlowButton>
            
            <p className="text-center text-xs text-gray-500 mt-4">
              By initializing, you agree to our Code of Conduct and Terms of Service.
            </p>
          </form>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default Register;