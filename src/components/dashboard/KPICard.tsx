'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { cn } from '@/utils/cn';
import TrendIndicator from './TrendIndicator';

interface KPICardProps {
  label: string;
  value: number | string;
  change?: number;
  changeType?: 'up' | 'down' | 'neutral';
  unit?: string;
  icon: string;
  trend?: number[];
  decimal?: number;
  onClick?: () => void;
  className?: string;
}

const KPICard: React.FC<KPICardProps> = ({
  label,
  value,
  change,
  changeType = 'neutral',
  unit = '',
  icon,
  trend = [],
  decimal = 0,
  onClick,
  className,
}) => {
  const IconComponent = (Icons as any)[icon];

  const formattedValue =
    typeof value === 'number'
      ? decimal > 0
        ? value.toFixed(decimal)
        : value.toLocaleString()
      : value;

  const changeColor = {
    up: 'text-bnb-success',
    down: 'text-bnb-error',
    neutral: 'text-gray-400',
  }[changeType];

  const bgGradient = {
    up: 'from-bnb-success/10 to-transparent',
    down: 'from-bnb-error/10 to-transparent',
    neutral: 'from-bnb-primary/10 to-transparent',
  }[changeType];

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        'group relative overflow-hidden rounded-xl p-6 cursor-pointer transition-all duration-300',
        'bg-gradient-to-br from-bnb-card to-bnb-dark border border-bnb-border hover:border-bnb-accent/50',
        'shadow-card hover:shadow-glow-accent',
        className
      )}
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className={cn('absolute inset-0 bg-gradient-to-br', bgGradient)}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: 'none' }}
      />

      {/* Floating glow effect */}
      <motion.div
        animate={{
          x: [0, 10, -10, 0],
          y: [0, -10, 10, 0],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-bnb-gold/20 to-bnb-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ pointerEvents: 'none' }}
      />

      <div className="relative z-10 space-y-4">
        {/* Top Section - Icon and Label */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-400">{label}</span>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            className={cn(
              'p-2.5 rounded-lg bg-gradient-to-br transition-all duration-300',
              changeType === 'up'
                ? 'from-bnb-success/20 to-bnb-success/5 text-bnb-success'
                : changeType === 'down'
                  ? 'from-bnb-error/20 to-bnb-error/5 text-bnb-error'
                  : 'from-bnb-primary/20 to-bnb-primary/5 text-bnb-primary'
            )}
          >
            {IconComponent && <IconComponent size={18} />}
          </motion.div>
        </div>

        {/* Value Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-baseline gap-2"
          >
            <span className="text-3xl lg:text-4xl font-bold text-white">
              {unit === '$' && '$'}
              {formattedValue}
              {unit && unit !== '$' && unit}
            </span>
          </motion.div>
        </div>

        {/* Change Indicator */}
        {change !== undefined && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <TrendIndicator
              change={change}
              type={changeType}
              showPercent={true}
            />
            <span className="text-xs text-gray-500">vs last period</span>
          </motion.div>
        )}

        {/* Trend Chart */}
        {trend && trend.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-3 border-t border-bnb-border/30"
          >
            <MiniChart data={trend} type={changeType} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

interface MiniChartProps {
  data: number[];
  type: 'up' | 'down' | 'neutral';
}

const MiniChart: React.FC<MiniChartProps> = ({ data, type }) => {
  if (data.length === 0) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const colors = {
    up: '#10b981',
    down: '#ef4444',
    neutral: '#6366f1',
  };

  return (
    <div className="flex items-end gap-1 h-12">
      {data.map((point, idx) => {
        const height = ((point - min) / range) * 100;
        return (
          <motion.div
            key={idx}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: `${height}%`, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.05,
              ease: 'easeOut',
            }}
            className="flex-1 rounded-t bg-gradient-to-t from-transparent"
            style={{
              backgroundColor: colors[type],
              minHeight: '4px',
              opacity: 0.6 + (idx / data.length) * 0.4,
            }}
            title={`${point.toFixed(1)}`}
          />
        );
      })}
    </div>
  );
};

export default KPICard;
