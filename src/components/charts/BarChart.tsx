'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { cn } from '@/utils/cn';

interface BarChartComponentProps {
  data: any[];
  bars: Array<{
    dataKey: string;
    name: string;
    color: string;
  }>;
  title?: string;
  description?: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  layout?: 'vertical' | 'horizontal';
  animate?: boolean;
  className?: string;
}

const CustomBarTooltip = ({ active, payload, label }: any) => {
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

const BarChartComponent: React.FC<BarChartComponentProps> = ({
  data,
  bars,
  title,
  description,
  height = 400,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  layout = 'horizontal',
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
        <BarChart
          data={data}
          layout={layout === 'vertical' ? 'vertical' : 'horizontal'}
          margin={layout === 'vertical' ? { top: 5, right: 30, left: 100, bottom: 5 } : { top: 5, right: 30, left: 0, bottom: 5 }}
        >
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1a1a1a"
              vertical={layout === 'vertical'}
              horizontal={layout !== 'vertical'}
            />
          )}
          {layout === 'vertical' ? (
            <>
              <XAxis type="number" stroke="#6b7280" style={{ fontSize: '12px' }} />
              <YAxis dataKey="name" type="category" stroke="#6b7280" style={{ fontSize: '12px' }} />
            </>
          ) : (
            <>
              <XAxis dataKey="name" stroke="#6b7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
            </>
          )}
          {showTooltip && <Tooltip content={<CustomBarTooltip />} />}
          {showLegend && <Legend wrapperStyle={{ paddingTop: '20px' }} />}
          {bars.map((bar, idx) => (
            <Bar
              key={idx}
              dataKey={bar.dataKey}
              name={bar.name}
              fill={bar.color}
              isAnimationActive={animate}
              animationDuration={1000}
              animationBegin={idx * 100}
              radius={[8, 8, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default BarChartComponent;
