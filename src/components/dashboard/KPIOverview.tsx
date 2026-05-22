'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { KPICard, KPIGrid, KPICardSkeleton } from '@/components/dashboard';
import { mockDailyMetrics, mockCampaignMetrics } from '@/utils/mockData';

const KPIOverview: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      const dailyData = mockDailyMetrics;
      const campaigns = mockCampaignMetrics;

      // Calculate totals
      const totalSpend = dailyData.reduce((sum, d) => sum + d.spend, 0);
      const totalImpressions = dailyData.reduce((sum, d) => sum + d.impressions, 0);
      const totalClicks = dailyData.reduce((sum, d) => sum + d.clicks, 0);
      const totalConversions = dailyData.reduce((sum, d) => sum + d.conversions, 0);
      const totalRevenue = dailyData.reduce((sum, d) => sum + d.revenue, 0);

      // Calculate averages
      const avgCTR = (totalClicks / totalImpressions) * 100;
      const avgCPC = totalSpend / totalClicks;
      const avgCPM = (totalSpend / totalImpressions) * 1000;
      const roas = totalRevenue / totalSpend;

      // Calculate trends (comparing first half vs second half)
      const mid = Math.floor(dailyData.length / 2);
      const firstHalf = dailyData.slice(0, mid);
      const secondHalf = dailyData.slice(mid);

      const getAverage = (data: any[], field: string) =>
        data.reduce((sum, d) => sum + d[field], 0) / data.length;

      const spendTrend =
        ((getAverage(secondHalf, 'spend') - getAverage(firstHalf, 'spend')) /
          getAverage(firstHalf, 'spend')) *
        100;
      const ctrTrend =
        (((getAverage(secondHalf, 'clicks') / getAverage(secondHalf, 'impressions')) -
          (getAverage(firstHalf, 'clicks') / getAverage(firstHalf, 'impressions'))) /
          (getAverage(firstHalf, 'clicks') / getAverage(firstHalf, 'impressions'))) *
        100;
      const roasTrend =
        ((getAverage(secondHalf, 'revenue') / getAverage(secondHalf, 'spend') -
          getAverage(firstHalf, 'revenue') / getAverage(firstHalf, 'spend')) /
          (getAverage(firstHalf, 'revenue') / getAverage(firstHalf, 'spend'))) *
        100;

      setMetrics({
        totalSpend,
        totalImpressions,
        totalClicks,
        totalConversions,
        totalRevenue,
        avgCTR,
        avgCPC,
        avgCPM,
        roas,
        spendTrend,
        ctrTrend,
        roasTrend,
        spendTrendData: dailyData.map((d) => d.spend),
        ctrTrendData: dailyData.map((d) => (d.clicks / d.impressions) * 100),
        conversionTrendData: dailyData.map((d) => d.conversions),
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <KPICardSkeleton count={9} columns={3} />;
  }

  if (!metrics) {
    return null;
  }

  return (
    <KPIGrid columns={3}>
      <KPICard
        label="Total Spend"
        value={metrics.totalSpend}
        change={metrics.spendTrend}
        changeType={metrics.spendTrend > 0 ? 'down' : 'up'}
        unit="$"
        icon="DollarSign"
        trend={metrics.spendTrendData}
        decimal={0}
      />

      <KPICard
        label="CTR"
        value={metrics.avgCTR}
        change={metrics.ctrTrend}
        changeType={metrics.ctrTrend > 0 ? 'up' : 'down'}
        unit="%"
        icon="Zap"
        trend={metrics.ctrTrendData}
        decimal={2}
      />

      <KPICard
        label="CPC"
        value={metrics.avgCPC}
        change={-metrics.spendTrend}
        changeType={metrics.spendTrend > 0 ? 'up' : 'down'}
        unit="$"
        icon="DollarSign"
        decimal={2}
      />

      <KPICard
        label="ROAS"
        value={metrics.roas}
        change={metrics.roasTrend}
        changeType={metrics.roasTrend > 0 ? 'up' : 'down'}
        unit="x"
        icon="TrendingUp"
        decimal={2}
      />

      <KPICard
        label="Leads"
        value={Math.round(metrics.totalConversions * 0.25)}
        change={12.5}
        changeType="up"
        icon="Users"
        trend={[85, 92, 78, 95, 88, 102, 115]}
      />

      <KPICard
        label="Conversions"
        value={metrics.totalConversions}
        change={8.3}
        changeType="up"
        icon="CheckCircle"
        trend={metrics.conversionTrendData}
      />

      <KPICard
        label="Impressions"
        value={metrics.totalImpressions}
        change={5.2}
        changeType="up"
        icon="Eye"
        trend={[45000, 52000, 41000, 58000, 48000, 55000, 62000]}
      />

      <KPICard
        label="CPM"
        value={metrics.avgCPM}
        change={-3.1}
        changeType="down"
        unit="$"
        icon="DollarSign"
        decimal={2}
      />

      <KPICard
        label="Revenue"
        value={metrics.totalRevenue}
        change={15.7}
        changeType="up"
        unit="$"
        icon="TrendingUp"
        trend={[4250, 4720, 3840, 5400, 4450, 5100, 5750]}
      />
    </KPIGrid>
  );
};

export default KPIOverview;
