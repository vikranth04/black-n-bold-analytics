'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface AuthLayoutProps {
  children: React.ReactNode;
  showBranding?: boolean;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, showBranding = true }) => {
  return (
    <div className="flex h-screen bg-bnb-dark overflow-hidden">
      {/* Left Panel - Branding (Hidden on mobile) */}
      {showBranding && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12 bg-gradient-to-br from-bnb-dark via-bnb-dark to-bnb-card border-r border-bnb-border"
        >
          <div className="relative z-10 max-w-md text-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-8"
            >
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-bnb-gold via-white to-bnb-accent bg-clip-text text-transparent">
                Black N Bold
              </h1>
            </motion.div>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Premium AI-powered ad analytics for elite agencies
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {[
                '✨ Real-time analytics from Google & Meta Ads',
                '🤖 AI-powered insights and recommendations',
                '📊 Advanced campaign performance tracking',
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-bnb-gold to-bnb-accent" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 pt-8 border-t border-bnb-border text-gray-400 text-sm"
            >
              "The future of ad analytics is intelligent, intuitive, and impressive."
            </motion.div>
          </div>

          {/* Animated background */}
          <motion.div
            animate={{
              x: [0, 100, -100, 0],
              y: [0, 50, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-br from-bnb-gold/10 to-transparent rounded-full blur-3xl"
          />
        </motion.div>
      )}

      {/* Right Panel - Auth Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          'flex items-center justify-center p-6 lg:p-12',
          showBranding ? 'w-full lg:w-1/2' : 'w-full'
        )}
      >
        <div className="w-full max-w-md">{children}</div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
