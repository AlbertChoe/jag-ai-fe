'use client';

import Navbar from '@/components/common/navbar';
// import { useAuthCheck } from '@/hooks/useAuthCheck';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  // const { checking } = useAuthCheck({ redirectOnFail: '/login' });
  // if (checking) return <div className="p-6">Checking session…</div>;

  return (
    <>
      <Navbar /> {/* h-16 = 64px */}
      <main className="min-h-[calc(100vh-64px)]">{children}</main>
    </>
  );
}
