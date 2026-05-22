# Black N Bold - Premium Ad Analytics Dashboard

A premium AI-powered full-stack ad analytics dashboard for elite ad agencies. Built with Next.js, React, TypeScript, Tailwind CSS, and modern SaaS design principles.

## Features

✨ **Modern SaaS UI**
- Dark mode by default with glassmorphism effects
- Premium typography and animations
- Responsive design for desktop, tablet, and mobile

🤖 **AI-Powered Insights**
- Campaign diagnosis and optimization recommendations
- Mistake detection and improvement suggestions
- AI confidence scoring

📊 **Comprehensive Analytics**
- Google Ads integration
- Meta Ads integration
- Real-time metrics and trends
- Advanced funnel analytics
- Audience demographics

🔐 **Enterprise Security**
- Email/password authentication
- Google OAuth integration
- Session management
- Protected dashboard routes

🛠️ **Developer Friendly**
- TypeScript for type safety
- Modular component architecture
- Zustand for state management
- React Query for data fetching
- ShadCN UI for components

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS with glassmorphism effects
- **Animations**: Framer Motion
- **Charts**: Recharts
- **State Management**: Zustand
- **Authentication**: NextAuth.js
- **Components**: ShadCN UI
- **Data Fetching**: React Query

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/vikranth04/black-n-bold-analytics.git

# Navigate to project directory
cd black-n-bold-analytics

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # Reusable React components
│   ├── auth/           # Authentication components
│   ├── dashboard/      # Dashboard components
│   ├── layouts/        # Layout components
│   └── ui/             # UI component library
├── hooks/              # Custom React hooks
├── services/           # API services and integrations
├── store/              # Zustand stores
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── styles/             # Global styles
```

## Key Features

### 1. Authentication
- Login page with Black N Bold branding
- Email/password authentication
- Google OAuth integration
- Persistent session management

### 2. Dashboard
- Real-time KPI metrics
- Interactive charts and visualizations
- Campaign performance tracking
- AI-powered recommendations

### 3. Company Comparison
- Multi-client analytics
- Google Ads vs Meta Ads comparison
- Performance metrics side-by-side
- Smart comparison visualizations

### 4. AI Insights
- Campaign diagnosis
- Issue detection and severity levels
- Actionable recommendations
- AI confidence scoring

### 5. Campaign Details
- Granular analytics
- Device and geographic performance
- Creative analytics
- Revenue attribution

### 6. Reports & Export
- PDF report generation
- CSV data export
- Shareable dashboard links

## Future Integrations

- Google Ads API
- Meta Ads API
- OpenAI / Gemini API
- Real-time data synchronization
- Advanced predictive analytics

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## Design Inspiration

Inspired by the design and UX patterns of:
- Notion
- Stripe
- Linear
- Vercel
- Premium AI dashboards

## License

Private - Black N Bold Agency

## Contributing

This is a private project for Black N Bold Agency.
