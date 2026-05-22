import React from 'react';
import { cn } from '@/utils/cn';

interface StatBoxProps {
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  className?: string;
}

const StatBox: React.FC<StatBoxProps> = ({
  label,
  value,
  change,
  changeLabel,
  icon,
  className,
}) => {
  return (
    <div
      className={cn(
        'p-4 rounded-lg bg-bnb-card border border-bnb-border',
        'hover:border-bnb-accent transition-colors duration-200',
        className
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-400">{label}</span>
        {icon && <div className="text-bnb-primary">{icon}</div>}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-white">{value}</span>
        {change !== undefined && (
          <span
            className={cn(
              'text-sm font-semibold',
              change > 0 ? 'text-bnb-success' : 'text-bnb-error'
            )}
          >
            {change > 0 ? '+' : ''}{change}%
          </span>
        )}
      </div>
      {changeLabel && <p className="text-xs text-gray-500 mt-1">{changeLabel}</p>}
    </div>
  );
};

export default StatBox;
