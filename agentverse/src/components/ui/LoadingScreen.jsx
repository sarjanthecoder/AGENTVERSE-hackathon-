import React from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-cyber-darker"
    >
      <div className="relative w-64 h-2 bg-cyber-dark rounded-full overflow-hidden mb-8">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-sky to-neon-purple"
        />
      </div>
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-sky to-neon-purple text-glow"
      >
        INNOVATION HACKS
      </motion.h1>
    </motion.div>
  );
};