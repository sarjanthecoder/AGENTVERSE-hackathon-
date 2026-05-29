import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Github, Globe, Linkedin, Instagram, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const socialLinks = [
  { Icon: Github, url: 'https://github.com/sarjanthecoder', label: 'GitHub' },
  { Icon: Globe, url: 'https://www.sarjanp.in', label: 'Portfolio' },
  { Icon: Linkedin, url: 'https://www.linkedin.com/in/sarjanp/', label: 'LinkedIn' },
  { Icon: Instagram, url: 'https://www.instagram.com/sarjanp/', label: 'Instagram' },
];

const legalContent = {
  terms: {
    title: 'Terms of Service',
    sections: [
      {
        title: '1. Hackathon Participation',
        text: 'By participating in AgentVerse hackathons, you agree to form teams of 2 to 4 members. Individual registrations are not allowed unless explicitly merged into a team before the registration deadline of June 8, 2026.'
      },
      {
        title: '2. Submissions & IP',
        text: 'All projects submitted must be original works created during the hackathon period. You retain ownership of your intellectual property, but grant AgentVerse and its sponsors a non-exclusive license to showcase your project for promotional purposes.'
      },
      {
        title: '3. Platform Rules',
        text: 'Any attempts to sabotage the platform, submit pre-existing projects, or use unauthorized AI assets that violate copyright laws will result in immediate disqualification.'
      }
    ]
  },
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        title: '1. Information We Collect',
        text: 'We collect your profile details including your name, GitHub profile, LinkedIn, portfolio link, and project submissions to administer the hackathons and facilitate team formation.'
      },
      {
        title: '2. Data Usage',
        text: 'Your details are shared securely with evaluating judges and hackathon sponsors to review submissions, select winners, and facilitate hiring/career opportunities.'
      },
      {
        title: '3. Security',
        text: 'We employ advanced cryptographic and database security standards to safeguard your hacker profile and prevent unauthorized data leaks.'
      }
    ]
  },
  conduct: {
    title: 'Code of Conduct',
    sections: [
      {
        title: '1. Inclusivity & Respect',
        text: 'AgentVerse is dedicated to providing a harassment-free experience for everyone, regardless of gender, sexual orientation, disability, race, or religion. We do not tolerate harassment of participants in any form.'
      },
      {
        title: '2. Academic Integrity',
        text: 'Plagiarism, copying code from other participants, or submitting pre-made repositories is strictly forbidden. All submissions will be vetted by automated code-plagiarism tools.'
      },
      {
        title: '3. Violation Reporting',
        text: 'If you witness or experience any code violations or harassment, report it immediately to the organizers via our official WhatsApp community group.'
      }
    ]
  }
};

export const Footer = () => {
  const [activeModal, setActiveModal] = useState(null); // 'terms', 'privacy', 'conduct' or null

  const handleLegalClick = (e, key) => {
    e.preventDefault();
    setActiveModal(key);
  };

  return (
    <footer className="border-t border-white/10 bg-cyber-dark pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Zap className="text-neon-sky w-6 h-6" />
              <span className="text-2xl font-bold text-gradient">AgentVerse</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Empowering the next generation of builders through cutting-edge hackathons and a global community of innovators.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, url, label }, i) => (
                <a 
                  key={i} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title={label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neon-sky/20 hover:text-neon-sky transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2">
              {['Hackathons', 'Winners', 'Community', 'Founders', 'Prizes'].map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-neon-sky text-sm transition-colors">
                    {item === 'Winners' ? 'Leaderboard' : item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => handleLegalClick(e, 'terms')}
                  className="text-gray-400 hover:text-neon-sky text-sm transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => handleLegalClick(e, 'privacy')}
                  className="text-gray-400 hover:text-neon-sky text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => handleLegalClick(e, 'conduct')}
                  className="text-gray-400 hover:text-neon-sky text-sm transition-colors"
                >
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Enquiries</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-neon-sky mb-1">
                  Urgent Enquiries
                </span>
                <p className="leading-relaxed">
                  Call or WhatsApp:<br />
                  <a 
                    href="https://wa.me/916385562064" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-neon-sky font-mono font-bold transition-colors"
                  >
                    +91 6385562064
                  </a>
                </p>
              </div>
              
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-neon-sky mb-1">
                  Official Email
                </span>
                <a 
                  href="mailto:sarjan6325@gmail.com" 
                  className="text-white hover:text-neon-sky font-mono transition-colors"
                >
                  sarjan6325@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AgentVerse. All rights reserved.</p>
        </div>
      </div>

      {/* Dynamic Legal Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl p-8 bg-cyber-darker border border-white/10 shadow-2xl text-left overflow-y-auto max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glowing decorative lights */}
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-neon-sky/10 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-neon-purple/10 blur-3xl rounded-full pointer-events-none" />

              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4 relative z-10">
                <h3 className="text-2xl md:text-3xl font-black text-gradient uppercase tracking-wide">
                  {legalContent[activeModal].title}
                </h3>
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6 relative z-10 text-gray-300 pr-2">
                {legalContent[activeModal].sections.map((sec, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-bold text-white text-lg">{sec.title}</h4>
                    <p className="text-gray-400 leading-relaxed text-sm">{sec.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex justify-end relative z-10">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-2.5 rounded-full font-bold uppercase text-xs tracking-wider border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  Close Document
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};