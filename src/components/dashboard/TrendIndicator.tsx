'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/utils/cn';

interface TrendIndicatorProps {
  change: number;
  type?: 'up' | 'down' | 'neutral';
  showPercent?: boolean;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const TrendIndicator: React.FC<TrendIndicatorProps> = ({
  change,
  type = 'neutral',
  showPercent = true,
  showIcon = true,
  size = 'md',
}) => {
  const isPositive = change > 0;
  const isNegative = change < 0;
  const isNeutral = change === 0;

  const finalType = isPositive ? 'up' : isNegative ? 'down' : 'neutral';

  const colors = {
    up: 'text-bnb-success',
    down: 'text-bnb-error',
    neutral: 'text-gray-400',
  };

  const bgColors = {
    up: 'bg-bnb-success/10',
    down: 'bg-bnb-error/10',
    neutral: 'bg-gray-500/10',
  };

  const sizes = {
    sm: 'text-xs gap-1 px-2 py-1',
    md: 'text-sm gap-1.5 px-2 py-1',
    lg: 'text-base gap-2 px-3 py-1.5',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        'inline-flex items-center rounded-lg font-semibold',
        bgColors[finalType],
        colors[finalType],
        sizes[size]
      )}
    >
      {showIcon && (
        <motion.span
          animate={isPositive ? { y: [0, -2, 0] } : isNegative ? { y: [0, 2, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {isPositive && <TrendingUp size={14} />}
          {isNegative && <TrendingDown size={14} />}
          {isNeutral && <Minus size={14} />}
        </motion.span>
      )}
      {showPercent && <span>{Math.abs(change).toFixed(1)}%</span>}
    </motion.div>
  );
};

export default TrendIndicator;
