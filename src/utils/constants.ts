export const BRAND = {
  name: 'Black N Bold',
  tagline: 'Premium Ad Analytics Intelligence',
  description: 'AI-powered analytics for elite ad agencies',
};

export const NAVIGATION_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: 'BarChart3' },
  { id: 'companies', label: 'Companies', href: '/companies', icon: 'Building2' },
  { id: 'comparison', label: 'Comparison', href: '/comparison', icon: 'GitCompare' },
  { id: 'ai-insights', label: 'AI Insights', href: '/ai-insights', icon: 'Sparkles' },
  { id: 'campaigns', label: 'Campaigns', href: '/campaigns', icon: 'Target' },
  { id: 'reports', label: 'Reports', href: '/reports', icon: 'FileText' },
  { id: 'settings', label: 'Settings', href: '/settings', icon: 'Settings' },
];

export const COLORS = {
  primary: '#6366f1',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  gold: '#d4af37',
  accent: '#00d4ff',
  dark: '#0a0a0a',
  card: '#111111',
  border: '#1a1a1a',
};

export const KPI_METRICS = [
  { key: 'spend', label: 'Total Spend', icon: 'DollarSign', unit: '$' },
  { key: 'roas', label: 'ROAS', icon: 'TrendingUp', unit: 'x', decimals: 2 },
  { key: 'ctr', label: 'CTR', icon: 'Zap', unit: '%', decimals: 2 },
  { key: 'cpc', label: 'CPC', icon: 'DollarSign', unit: '$', decimals: 2 },
  { key: 'leads', label: 'Leads', icon: 'Users' },
  { key: 'conversions', label: 'Conversions', icon: 'CheckCircle' },
  { key: 'impressions', label: 'Impressions', icon: 'Eye' },
  { key: 'cpm', label: 'CPM', icon: 'DollarSign', unit: '$', decimals: 2 },
  { key: 'revenue', label: 'Revenue', icon: 'TrendingUp', unit: '$' },
];

export const PLATFORMS = [
  { id: 'google', label: 'Google Ads', color: '#4285F4' },
  { id: 'meta', label: 'Meta Ads', color: '#1877F2' },
];

export const SEVERITY_COLORS = {
  critical: '#ef4444',
  high: '#f59e0b',
  medium: '#eab308',
  low: '#8b5cf6',
};

export const DATE_RANGE_OPTIONS = [
  { label: 'Last 7 days', days: 7 },
  { label: 'Last 30 days', days: 30 },
  { label: 'Last 90 days', days: 90 },
  { label: 'Last 6 months', days: 180 },
  { label: 'Last year', days: 365 },
];
