import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GlowButton } from '../components/ui/GlowButton';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-8"
      >
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-neon-sky to-cyber-darker text-glow">
          404
        </h1>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Sector Not Found</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            The coordinates you provided point to empty space. The page you are looking for has been moved or deleted.
          </p>
        </div>
        <Link to="/">
          <GlowButton>Return to Base</GlowButton>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;