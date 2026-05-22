'use client';

export const metadata = {
  title: 'Black N Bold - Authentication',
  description: 'Sign in or create an account to access Black N Bold analytics',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
