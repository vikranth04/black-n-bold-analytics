'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '@/utils/cn';

interface PieChartComponentProps {
  data: Array<{
    name: string;
    value: number;
    color?: string;
  }>;
  title?: string;
  description?: string;
  height?: number;
  showLegend?: boolean;
  showTooltip?: boolean;
  showLabel?: boolean;
  animate?: boolean;
  className?: string;
  innerRadius?: number;
  outerRadius?: number;
}

const CustomPieTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-bnb-card border border-bnb-border rounded-lg p-3 shadow-premium"
      >
        <p style={{ color: payload[0].fill }} className="text-sm font-semibold mb-1">
          {payload[0].name}
        </p>
        <p className="text-sm text-gray-300">{payload[0].value.toLocaleString()}</p>
        <p className="text-xs text-gray-500 mt-1">
          {((payload[0].value / payload[0].payload.sum) * 100).toFixed(1)}%
        </p>
      </motion.div>
    );
  }
  return null;
};

const PieChartComponent: React.FC<PieChartComponentProps> = ({
  data,
  title,
  description,
  height = 400,
  showLegend = true,
  showTooltip = true,
  showLabel = true,
  animate = true,
  className,
  innerRadius,
  outerRadius = 100,
}) => {
  // Add sum to each item for tooltip calculation
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  const enhancedData = data.map((item) => ({
    ...item,
    sum: totalValue,
  }));

  // Default colors if not provided
  const colors = [
    '#d4af37', // gold
    '#00d4ff', // cyan
    '#6366f1', // primary
    '#10b981', // success
    '#f59e0b', // warning
    '#ef4444', // error
    '#8b5cf6', // purple
    '#ec4899', // pink
  ];

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
        <PieChart>
          <Pie
            data={enhancedData}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
            isAnimationActive={animate}
            animationDuration={800}
            label={showLabel}
          >
            {enhancedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color || colors[index % colors.length]}
              />
            ))}
          </Pie>
          {showTooltip && <Tooltip content={<CustomPieTooltip />} />}
          {showLegend && <Legend wrapperStyle={{ paddingTop: '20px' }} />}
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default PieChartComponent;
