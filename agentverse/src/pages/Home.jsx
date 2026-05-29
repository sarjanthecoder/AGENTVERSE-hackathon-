import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, Users, Trophy, Award, Rocket, Code2, Plus, Minus } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { GlowButton } from '../components/ui/GlowButton';
import { InfiniteMarquee } from '../components/ui/InfiniteMarquee';
import { stats, sponsors, testimonials, faqData, timelineEvents } from '../data/siteData';
import { liveHackathons } from '../data/hackathons';
import { leaderboard } from '../data/winners';

const Home = () => {
  const [openFaq, setOpenFaq] = React.useState(0);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-neon-sky/30 bg-neon-sky/10 text-neon-sky text-sm font-bold tracking-wider"
          >
            SYSTEM ONLINE // V2.0
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
          >
            AGENT <br className="md:hidden"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-sky via-neon-purple to-neon-pink text-glow">
              VERSE
            </span>
          </motion.h1>

          <div className="h-12 md:h-16 mb-8 text-xl md:text-2xl text-gray-300 font-mono">
            <TypeAnimation
              sequence={[
                '> Building the future, one line of code at a time', 2000,
                '> Innovate. Disrupt. Create.', 2000,
                '> Join 8,500+ hackers worldwide', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/hackathons" className="w-full sm:w-auto">
              <GlowButton className="w-full sm:w-auto text-lg px-8 py-4">Explore Hackathons</GlowButton>
            </Link>
            <Link to="/community" className="w-full sm:w-auto">
              <GlowButton variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4">Join Community</GlowButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative z-10 border-y border-white/5 bg-cyber-dark/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Total Hackathons', value: stats.totalHackathons, suffix: '+' },
              { label: 'Active Participants', value: stats.activeParticipants, suffix: '+' },
              { label: 'Total Winners', value: stats.totalWinners, suffix: '' },
              { label: 'Community Members', value: stats.communityMembers, suffix: '+' },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-neon-sky mb-2 text-glow">
                  <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Join <span className="text-neon-cyan">Us?</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Elevate your skills, build your network, and launch your career.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Code2, title: 'Learn & Grow', desc: 'Push your boundaries and learn new tech stacks under pressure.' },
              { icon: Target, title: 'Build Portfolio', desc: 'Create real-world projects that stand out to top tech recruiters.' },
              { icon: Users, title: 'Network', desc: 'Connect with like-minded developers, mentors, and industry experts.' },
              { icon: Trophy, title: 'Win Prizes', desc: 'Compete for massive cash pools, swags, and exclusive software licenses.' },
              { icon: Award, title: 'Certificates', desc: 'Earn verifiable digital certificates to showcase your achievements.' },
              { icon: Rocket, title: 'Launch Ideas', desc: 'Turn your weekend prototype into the next big startup.' },
            ].map((feature, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <GlassCard className="h-full">
                  <div className="w-12 h-12 rounded-full bg-neon-sky/10 flex items-center justify-center mb-6 border border-neon-sky/20">
                    <feature.icon className="text-neon-sky w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hackathons */}
      <section className="py-24 relative z-10 bg-cyber-dark/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-neon-purple">Events</span></h2>
              <p className="text-gray-400">Join our upcoming premier hackathons.</p>
            </div>
            <Link to="/hackathons">
              <GlowButton variant="secondary" className="gap-2">View All <ChevronRight className="w-4 h-4"/></GlowButton>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveHackathons.slice(0, 3).map((hack, idx) => (
              <motion.div key={hack.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <GlassCard className="flex flex-col h-full p-6 overflow-hidden">
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-xs font-bold border border-neon-purple/30">
                      {hack.category}
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-extrabold border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.25)] tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
                      OPEN
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{hack.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">{hack.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {hack.tags.slice(0,3).map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10">{tag}</span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Marquee */}
      <section className="py-20 relative z-10 overflow-hidden">
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Backed By Industry Leaders</h3>
        </div>
        <InfiniteMarquee items={sponsors.slice(0,4).map(s => s.name)} className="mb-8" />
        <InfiniteMarquee items={sponsors.slice(4).map(s => s.name)} reverse />
      </section>

      {/* FAQ */}
      <section className="py-24 relative z-10 bg-cyber-dark/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">System <span className="text-neon-cyan">FAQ</span></h2>
          </div>
          
          <div className="space-y-4">
            {faqData.slice(0, 5).map((faq, idx) => (
              <GlassCard 
                key={idx} 
                className="p-4 cursor-pointer"
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                hover={false}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-lg">{faq.question}</h4>
                  {openFaq === idx ? <Minus className="text-neon-sky" /> : <Plus className="text-gray-500" />}
                </div>
                {openFaq === idx && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }} 
                    className="mt-4 text-gray-400 pt-4 border-t border-white/10"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;