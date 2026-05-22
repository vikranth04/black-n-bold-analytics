'use client';

import React from 'react';
import { DashboardLayout, PageContainer, PageHeader } from '@/components/layout';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <PageContainer>
        <PageHeader
          title="Dashboard"
          description="Overview of your ad campaigns and performance metrics"
        />
      </PageContainer>
    </DashboardLayout>
  );
}
