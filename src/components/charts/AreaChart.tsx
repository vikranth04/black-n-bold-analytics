'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { cn } from '@/utils/cn';

interface AreaChartComponentProps {
  data: any[];
  areas: Array<{
    dataKey: string;
    name: string;
    color: string;
    strokeColor?: string;
  }>;
  title?: string;
  description?: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  animate?: boolean;
  className?: string;
}

const CustomAreaTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-bnb-card border border-bnb-border rounded-lg p-3 shadow-premium"
      >
        <p className="text-sm font-semibold text-gray-300 mb-2">{label}</p>
        {payload.map((entry: any, idx: number) => (
          <p key={idx} style={{ color: entry.color }} className="text-sm font-medium">
            {entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
          </p>
        ))}
      </motion.div>
    );
  }
  return null;
};

const AreaChartComponent: React.FC<AreaChartComponentProps> = ({
  data,
  areas,
  title,
  description,
  height = 400,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  animate = true,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'rounded-xl p-6 bg-gradient-to-br from-bnb-card to-bnb-dark border border-bnb-border shadow-card',
        className
      )}
    >
      {/* Header */}
      {(title || description) && (
        <div className="mb-6">
          {title && <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>}
          {description && <p className="text-sm text-gray-400">{description}</p>}
        </div>
      )}

      {/* Chart */}
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1a1a1a"
              vertical={false}
            />
          )}
          <XAxis
            dataKey="name"
            stroke="#6b7280"
            style={{
              fontSize: '12px',
            }}
          />
          <YAxis
            stroke="#6b7280"
            style={{
              fontSize: '12px',
            }}
          />
          {showTooltip && <Tooltip content={<CustomAreaTooltip />} />}
          {showLegend && <Legend wrapperStyle={{ paddingTop: '20px' }} />}
          {areas.map((area, idx) => (
            <Area
              key={idx}
              type="monotone"
              dataKey={area.dataKey}
              name={area.name}
              fill={area.color}
              stroke={area.strokeColor || area.color}
              fillOpacity={0.2}
              isAnimationActive={animate}
              animationDuration={1000}
              animationBegin={idx * 100}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default AreaChartComponent;
