'use client';

import React from 'react';
import { cn } from '@/utils/cn';

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'bg-gradient-to-r from-bnb-border via-bnb-hover to-bnb-border',
        'animate-shimmer rounded',
        className
      )}
    />
  );
};

export default Skeleton;
