'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  ComposedChart,
  ChartSkeleton,
} from '@/components/charts';
import { mockDailyMetrics, mockAudienceDemographics, mockDevicePerformance, mockGeographicPerformance } from '@/utils/mockData';
import { COLORS } from '@/utils/constants';

const ChartsShowcase: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      // Process daily metrics for line chart
      const lineChartData = mockDailyMetrics.map((metric) => ({
        name: metric.date,
        'Spend': metric.spend,
        'Revenue': metric.revenue,
        'Conversions': metric.conversions,
      }));

      // Process data for bar chart (campaign performance)
      const barChartData = [
        { name: 'Summer Sale', spend: 8500, revenue: 32000, roas: 3.76 },
        { name: 'Brand Awareness', spend: 7200, revenue: 22680, roas: 3.15 },
        { name: 'Product Launch', spend: 12400, revenue: 41580, roas: 3.35 },
        { name: 'Retargeting', spend: 3800, revenue: 9350, roas: 2.46 },
      ];

      // Process data for area chart (daily performance)
      const areaChartData = mockDailyMetrics.map((metric) => ({
        name: metric.date,
        'Google Ads': Math.round(metric.spend * 0.65),
        'Meta Ads': Math.round(metric.spend * 0.35),
      }));

      // Process data for composed chart
      const composedChartData = mockDailyMetrics.map((metric, idx) => ({
        name: `Day ${idx + 1}`,
        'Conversions': metric.conversions,
        'ROAS': Number((metric.revenue / metric.spend).toFixed(2)),
        'Revenue': metric.revenue,
      }));

      setChartData({
        lineChartData,
        barChartData,
        areaChartData,
        composedChartData,
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ChartSkeleton count={3} columns={2} />;
  }

  if (!chartData) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Line Chart - Spend & Revenue Trends */}
      <LineChart
        data={chartData.lineChartData}
        lines={[
          { dataKey: 'Spend', name: 'Spend', color: COLORS.gold },
          { dataKey: 'Revenue', name: 'Revenue', color: COLORS.success },
          { dataKey: 'Conversions', name: 'Conversions', color: COLORS.accent },
        ]}
        title="Spend & Revenue Trends"
        description="7-day performance metrics comparison"
        height={350}
      />

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart - Campaign Performance */}
        <BarChart
          data={chartData.barChartData}
          bars={[
            { dataKey: 'spend', name: 'Spend', color: COLORS.gold },
            { dataKey: 'revenue', name: 'Revenue', color: COLORS.success },
          ]}
          title="Campaign Performance"
          description="Spend vs Revenue by campaign"
          height={320}
        />

        {/* Pie Chart - Audience Demographics */}
        <PieChart
          data={mockAudienceDemographics}
          title="Audience Demographics"
          description="Age distribution across campaigns"
          height={320}
          outerRadius={80}
        />
      </div>

      {/* Area Chart - Platform Comparison */}
      <AreaChart
        data={chartData.areaChartData}
        areas={[
          {
            dataKey: 'Google Ads',
            name: 'Google Ads',
            color: '#4285F4',
            strokeColor: '#4285F4',
          },
          {
            dataKey: 'Meta Ads',
            name: 'Meta Ads',
            color: '#1877F2',
            strokeColor: '#1877F2',
          },
        ]}
        title="Spend by Platform"
        description="Google Ads vs Meta Ads daily breakdown"
        height={320}
      />

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Device Performance Pie */}
        <PieChart
          data={mockDevicePerformance.map((d) => ({
            name: d.name,
            value: d.conversions,
          }))}
          title="Conversions by Device"
          description="Performance across different devices"
          height={320}
          outerRadius={80}
        />

        {/* Geographic Performance Pie */}
        <PieChart
          data={mockGeographicPerformance.map((d) => ({
            name: d.name,
            value: d.revenue,
          }))}
          title="Revenue by Geography"
          description="Performance across regions"
          height={320}
          outerRadius={80}
        />
      </div>

      {/* Composed Chart - Conversions & ROAS */}
      <ComposedChart
        data={chartData.composedChartData}
        bars={[
          { dataKey: 'Conversions', name: 'Conversions', color: COLORS.primary },
        ]}
        lines={[
          { dataKey: 'ROAS', name: 'ROAS', color: COLORS.success, strokeWidth: 3 },
        ]}
        title="Conversions & ROAS Trend"
        description="Daily conversions with ROAS performance line"
        height={350}
      />
    </div>
  );
};

export default ChartsShowcase;
