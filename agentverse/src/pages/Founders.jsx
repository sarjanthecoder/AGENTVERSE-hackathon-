import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Globe, Instagram } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { founders } from '../data/founders';

const socialIcons = [
  { key: 'github', Icon: Github },
  { key: 'linkedin', Icon: Linkedin },
  { key: 'portfolio', Icon: Globe },
  { key: 'instagram', Icon: Instagram },
];

const getGithubAvatar = (githubUrl) => {
  if (!githubUrl) return '';
  const username = githubUrl.replace(/\/$/, '').split('/').pop();
  return `https://github.com/${username}.png`;
};

const Founders = () => {
  const colorMap = {
    sky: 'var(--color-neon-sky)',
    purple: 'var(--color-neon-purple)',
    pink: 'var(--color-neon-pink)',
    blue: 'var(--color-neon-blue)',
  };

  return (
    <div className="container mx-auto px-6 py-20 min-h-screen">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-6"
        >
          THE <span className="text-neon-cyan text-glow">ARCHITECTS</span>
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Meet the visionary team behind AgentVerse.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {founders.map((founder, idx) => {
          const themeColor = colorMap[founder.color];
          const avatarImg = getGithubAvatar(founder.social.github);
          
          return (
            <motion.div 
              key={founder.name}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard 
                className="relative overflow-hidden group p-6 h-full"
                style={{ '--hover-border': themeColor }}
              >
                {/* Background Glow Effect */}
                <div 
                  className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: themeColor }}
                />

                <div className="flex flex-col items-center text-center relative z-10">
                  {/* Spinning Bold Neon Glow Circular Avatar */}
                  <div className="relative w-36 h-36 mb-6 shrink-0 group">
                    {/* Pulsing Outer Glow */}
                    <div 
                      className="absolute inset-0 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ 
                        background: `radial-gradient(circle, ${themeColor} 0%, transparent 70%)`,
                        boxShadow: `0 0 35px 10px ${themeColor}60`
                      }}
                    />
                    
                    {/* Spinning Neon Border 1 */}
                    <motion.div 
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{
                        padding: '3px',
                        background: `conic-gradient(from 0deg, ${themeColor}, transparent 50%, ${themeColor})`,
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Spinning Neon Border 2 (Counter-rotation for high-tech interference pattern) */}
                    <motion.div 
                      className="absolute inset-[3px] rounded-full pointer-events-none opacity-80"
                      style={{
                        padding: '2px',
                        background: `conic-gradient(from 180deg, ${themeColor}, transparent 60%, ${themeColor})`,
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Image Container */}
                    <div 
                      className="absolute inset-[5px] rounded-full overflow-hidden border border-white/10 bg-cyber-dark flex items-center justify-center shadow-2xl"
                      style={{
                        boxShadow: `inset 0 0 20px rgba(0,0,0,0.8), 0 0 20px ${themeColor}40`
                      }}
                    >
                      <img 
                        src={avatarImg} 
                        alt={founder.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 border"
                       style={{ borderColor: `${themeColor}50`, backgroundColor: `${themeColor}10`, color: themeColor }}>
                     {founder.role}
                  </div>
                  <h2 className="text-xl font-bold mb-2">{founder.name}</h2>
                  <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                    {founder.bio}
                  </p>
                  
                  <div className="bg-black/30 p-3 rounded-xl mb-4 border border-white/5 w-full">
                    <p className="text-gray-300 italic text-xs">{founder.quote}</p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                    {founder.skills.map(skill => (
                      <span key={skill} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center gap-2">
                    {socialIcons.map(({ key, Icon }) => {
                      const url = founder.social[key];
                      if (!url) return (
                        <span 
                          key={key} 
                          className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-600 cursor-default opacity-40"
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                      );
                      return (
                        <a 
                          key={key} 
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full flex items-center justify-center transition-all bg-white/5 border border-white/10 text-gray-300 hover:text-white"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = `${themeColor}20`;
                            e.currentTarget.style.borderColor = themeColor;
                            e.currentTarget.style.color = themeColor;
                            e.currentTarget.style.boxShadow = `0 0 15px ${themeColor}50`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '';
                            e.currentTarget.style.borderColor = '';
                            e.currentTarget.style.color = '';
                            e.currentTarget.style.boxShadow = '';
                          }}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Founders;