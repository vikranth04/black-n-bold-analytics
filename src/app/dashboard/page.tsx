'use client';

import React from 'react';
import { DashboardLayout, PageContainer, PageHeader } from '@/components/layout';
import { KPIOverview } from '@/components/dashboard';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <PageContainer>
        <PageHeader
          title="Dashboard"
          description="Overview of your ad campaigns and real-time performance metrics"
        />
        <KPIOverview />
      </PageContainer>
    </DashboardLayout>
  );
}
