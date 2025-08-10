'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/hooks/useAuthStore';

type NavItem = { href: string; label: string };

const NAV: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/analisis-satelit', label: 'Analisis Satelit' },
  { href: '/rekomendasi', label: 'Rekomendasi' },
  { href: '/deteksi-penyakit', label: 'Deteksi Penyakit' },
  { href: '/konsultasi', label: 'Konsultasi' },
];

function NavLink({ href, label }: NavItem) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`text-base transition ${
        isActive ? 'font-bold text-[#43A718]' : 'text-black hover:text-[#43A718]'
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isLoggedIn = false;
  if (!mounted) return null;

  return (
    <header className="bg-white border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Image src="icons/logo.svg" alt="Logo" width={28} height={28} />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <NavLink key={n.href} {...n} />
          ))}
        </nav>

        <div className="hidden md:flex">
          {isLoggedIn ? (
            <span>User Menu</span>
          ) : (
            <Button
              onClick={() => router.push('/login')}
              className="bg-[#43A718] hover:bg-green-600 text-white font-bold rounded px-5"
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
