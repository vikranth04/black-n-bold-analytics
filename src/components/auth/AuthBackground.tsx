'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const AuthBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-bnb-gold/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 100, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-bnb-accent/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-bnb-primary/5 to-transparent"
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-10 left-10 text-bnb-gold/30"
      >
        <Sparkles size={32} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-10 text-bnb-accent/30"
      >
        <Sparkles size={40} />
      </motion.div>
    </div>
  );
};

export default AuthBackground;
