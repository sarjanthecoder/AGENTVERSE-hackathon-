import React from 'react';
import { motion } from 'framer-motion';
import { Users, ExternalLink } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { GlowButton } from '../components/ui/GlowButton';
import { communityLinks } from '../data/siteData';

// Custom original brand SVG components for pixel-perfect social media logo renders
const WhatsAppIcon = ({ className, style }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.592 1.989 14.12 1.012 11.5 1.01c-5.442 0-9.87 4.372-9.872 9.799-.001 1.73.457 3.42 1.32 4.927l-.995 3.63 3.73-.966zm10.749-7.25c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  </svg>
);

const TelegramIcon = ({ className, style }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221c-.161 1.7-.852 5.795-1.202 7.674-.148.796-.442 1.063-.725 1.089-.615.057-1.08-.41-1.675-.8-.931-.61-1.458-.988-2.359-1.581-1.042-.686-.367-1.062.228-1.681.155-.162 2.853-2.614 2.906-2.841.007-.03.013-.142-.054-.202-.066-.059-.163-.039-.233-.023-.1.023-1.69 1.077-4.769 3.155-.451.31-.859.462-1.224.453-.402-.01-1.173-.229-1.748-.415-.705-.23-1.265-.351-1.216-.74.025-.203.306-.411.84-.627 5.257-2.293 8.764-3.805 10.521-4.536 5.006-2.079 6.046-2.441 6.724-2.453.149-.003.482.034.703.214.186.152.238.361.251.507.016.142.02.435.008.532z"/>
  </svg>
);

const DiscordIcon = ({ className, style }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
  </svg>
);

const InstagramIcon = ({ className, style }) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = ({ className, style }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const iconMap = {
  whatsapp: WhatsAppIcon,
  telegram: TelegramIcon,
  discord: DiscordIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
};

const Community = () => {
  return (
    <div className="container mx-auto px-6 py-20 min-h-screen">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-6"
        >
          GLOBAL <span className="text-neon-purple">NETWORK</span>
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
          Join 15,000+ builders, designers, and innovators. Share ideas, find teammates, and build the future together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {communityLinks.map((link, idx) => {
          const IconComponent = iconMap[link.icon];
          
          return (
            <motion.div 
              key={link.name}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard 
                className="flex flex-col items-center text-center p-8 h-full"
                style={{ '--hover-glow': link.color }}
              >
                {/* Circle Wrapper containing the Original Brand Logo */}
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2 transition-transform duration-300 group-hover:scale-110"
                  style={{ borderColor: `${link.color}50`, backgroundColor: `${link.color}10`, boxShadow: `0 0 20px ${link.color}30` }}
                >
                  {IconComponent ? (
                    <IconComponent className="w-10 h-10" style={{ color: link.color }} />
                  ) : (
                    <span className="text-3xl font-black" style={{ color: link.color }}>{link.name.charAt(0)}</span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{link.name}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{link.description}</p>

                {link.comingSoon ? (
                  <button 
                    disabled
                    className="w-full py-3 rounded-full font-bold uppercase text-sm tracking-wider border border-white/10 bg-white/5 text-gray-500 cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    Coming Soon to Join
                  </button>
                ) : (
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="w-full">
                    <button 
                      className="w-full py-3 rounded-full font-bold uppercase text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                      style={{ 
                        backgroundColor: `${link.color}20`, 
                        color: link.color,
                        border: `1px solid ${link.color}50`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = link.color;
                        e.currentTarget.style.color = '#000';
                        e.currentTarget.style.boxShadow = `0 0 20px ${link.color}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = `${link.color}20`;
                        e.currentTarget.style.color = link.color;
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      Join Now <ExternalLink className="w-4 h-4" />
                    </button>
                  </a>
                )}
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Community;