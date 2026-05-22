import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Providers } from '@/app/providers';

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
