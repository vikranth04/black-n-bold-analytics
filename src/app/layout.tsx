import type { Metadata } from 'next';
import { AuthProvider } from '@/contexts/AuthContext';
import { Providers } from '@/app/providers';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Black N Bold - Premium Ad Analytics',
  description: 'AI-powered analytics dashboard for elite ad agencies',
  icons: {
    icon: '✨',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Providers>
          <AuthProvider>{children}</AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
