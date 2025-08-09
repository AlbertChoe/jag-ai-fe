'use client';

import { useAuthCheck } from '@/hooks/useAuthCheck';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { checking } = useAuthCheck({ redirectOnFail: '/login' });

  if (checking) return <div className="p-6">Checking session...</div>;

  return (
    <div className="flex min-h-screen">
      {/* navbar*/}
      <main className="flex-1">{children}</main>
    </div>
  );
}
