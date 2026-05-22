// Auth Types
export interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  createdAt: Date;
}

export interface Session {
  user: User;
  expires: string;
}

// Campaign Types
export interface Campaign {
  id: string;
  name: string;
  platform: 'google' | 'meta' | 'both';
  status: 'active' | 'paused' | 'stopped';
  startDate: string;
  endDate?: string;
  budget: number;
  spend: number;
  impressions: number;
  clicks: number;
  conversions: number;
  leads: number;
  revenue: number;
  createdAt: Date;
  updatedAt: Date;
}

// Analytics Types
export interface DailyMetrics {
  date: string;
  spend: number;
  impressions: number;
  clicks: number;
  conversions: number;
  revenue: number;
}

export interface CampaignMetrics {
  campaignId: string;
  campaignName: string;
  spend: number;
  impressions: number;
  clicks: number;
  conversions: number;
  leads: number;
  revenue: number;
  ctr: number;
  cpc: number;
  cpm: number;
  roas: number;
  conversionRate: number;
}

export interface PlatformComparison {
  platform: 'google' | 'meta';
  spend: number;
  impressions: number;
  clicks: number;
  conversions: number;
  leads: number;
  revenue: number;
  ctr: number;
  cpc: number;
  cpm: number;
  roas: number;
}

export interface CompanyAnalytics {
  companyId: string;
  companyName: string;
  totalSpend: number;
  totalRevenue: number;
  totalLeads: number;
  totalConversions: number;
  roas: number;
  averageCtr: number;
  averageCpc: number;
  campaigns: Campaign[];
  platformComparison: PlatformComparison[];
}

// AI Insights Types
export interface AIInsight {
  id: string;
  type: 'issue' | 'recommendation' | 'opportunity';
  severity: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  affectedCampaigns: string[];
  confidenceScore: number;
  action?: string;
  estimatedImpact?: string;
  createdAt: Date;
}

export interface AIAnalysis {
  id: string;
  campaignId: string;
  insights: AIInsight[];
  summary: string;
  recommendations: string[];
  generatedAt: Date;
}

// Chart Data Types
export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: any;
}

export interface LineChartData {
  data: ChartDataPoint[];
  lines: Array<{
    key: string;
    name: string;
    color: string;
  }>;
}

// KPI Card Types
export interface KPIMetric {
  label: string;
  value: number | string;
  change?: number;
  changeType?: 'up' | 'down' | 'neutral';
  unit?: string;
  trend?: number[];
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Filter Types
export interface DateRange {
  from: Date;
  to: Date;
}

export interface AnalyticsFilter {
  dateRange: DateRange;
  platforms: Array<'google' | 'meta'>;
  campaigns?: string[];
  companies?: string[];
}

// Report Types
export interface Report {
  id: string;
  name: string;
  type: 'pdf' | 'csv' | 'html';
  createdAt: Date;
  data: any;
}
