'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from './Skeleton';

interface KPICardSkeletonProps {
  count?: number;
  columns?: 1 | 2 | 3 | 4;
}

const KPICardSkeleton: React.FC<KPICardSkeletonProps> = ({ count = 4, columns = 4 }) => {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${columnClasses[columns]} gap-4 lg:gap-6`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="rounded-xl p-6 bg-gradient-to-br from-bnb-card to-bnb-dark border border-bnb-border space-y-4"
        >
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-10 rounded-lg" />
          </div>
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-4 w-40" />
          <div className="flex items-end gap-1 h-12 pt-3 border-t border-bnb-border/30">
            {Array.from({ length: 7 }).map((_, idx) => (
              <Skeleton key={idx} className="flex-1 rounded-t h-8" />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default KPICardSkeleton;
