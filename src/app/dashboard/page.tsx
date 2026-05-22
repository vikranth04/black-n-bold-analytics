'use client';

import React from 'react';
import { DashboardLayout, PageContainer, PageHeader } from '@/components/layout';
import { KPIOverview } from '@/components/dashboard';
import { ChartsShowcase } from '@/components/charts';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <PageContainer>
        <PageHeader
          title="Dashboard"
          description="Complete overview of your ad campaigns and analytics"
        />

        {/* KPI Section */}
        <div className="mb-8">
          <KPIOverview />
        </div>

        {/* Charts Section */}
        <div className="space-y-6">
          <ChartsShowcase />
        </div>
      </PageContainer>
    </DashboardLayout>
  );
}
