'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Chrome, Loader } from 'lucide-react';
import { cn } from '@/utils/cn';

interface GoogleSigninButtonProps {
  onClick: () => Promise<void>;
  loading: boolean;
}

const GoogleSigninButton: React.FC<GoogleSigninButtonProps> = ({ onClick, loading }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      disabled={loading}
      type="button"
      className={cn(
        'w-full py-2.5 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2',
        'border border-bnb-border bg-bnb-hover hover:bg-bnb-border',
        'text-gray-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'
      )}
    >
      {loading ? (
        <>
          <Loader size={18} className="animate-spin" />
          Connecting...
        </>
      ) : (
        <>
          <Chrome size={18} />
          Continue with Google
        </>
      )}
    </motion.button>
  );
};

export default GoogleSigninButton;
