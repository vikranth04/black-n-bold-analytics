'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ChartSkeletonProps {
  count?: number;
  columns?: 1 | 2;
  height?: number;
}

const ChartSkeleton: React.FC<ChartSkeletonProps> = ({ count = 2, columns = 2, height = 400 }) => {
  return (
    <div className={`grid ${columns === 2 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} gap-6`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="rounded-xl p-6 bg-gradient-to-br from-bnb-card to-bnb-dark border border-bnb-border space-y-4"
        >
          {/* Header */}
          <div className="space-y-2">
            <div className="h-5 w-40 bg-gradient-to-r from-bnb-border via-bnb-hover to-bnb-border animate-shimmer rounded" />
            <div className="h-3 w-60 bg-gradient-to-r from-bnb-border via-bnb-hover to-bnb-border animate-shimmer rounded" />
          </div>

          {/* Chart bars */}
          <div className="space-y-3 mt-6">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx} className="flex items-end gap-2">
                <div
                  className="bg-gradient-to-r from-bnb-border via-bnb-hover to-bnb-border animate-shimmer rounded"
                  style={{
                    width: `${Math.random() * 60 + 20}%`,
                    height: `${Math.random() * 100 + 40}px`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex gap-4 pt-4 border-t border-bnb-border">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="h-3 w-3 bg-gradient-to-r from-bnb-border via-bnb-hover to-bnb-border animate-shimmer rounded" />
                <div className="h-3 w-16 bg-gradient-to-r from-bnb-border via-bnb-hover to-bnb-border animate-shimmer rounded" />
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ChartSkeleton;
