'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/hooks/useAuthStore';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
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

  const user = useAuthStore((s) => s.user);
  const clearAuth = useAuthStore((s) => s.clearAuth);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rawIsLoggedIn = useAuthStore((s) => (s as any).isLoggedIn);
  const isLoggedIn =
    typeof rawIsLoggedIn === 'function' ? (rawIsLoggedIn as () => boolean)() : !!rawIsLoggedIn;

  // const [open, setOpen] = useState(false);

  const initials = useMemo(() => {
    const n = mounted && user?.name ? user.name : 'U';
    return n
      .split(' ')
      .map((p) => p[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }, [mounted, user?.name]);

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

        <div className="hidden items-center gap-3 md:flex">
          {isLoggedIn && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-green-100 text-green-800">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{user.name}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 z-[100000]">
                <DropdownMenuLabel>Signed in as</DropdownMenuLabel>
                <div className="px-2 pb-1 text-sm text-muted-foreground">{user.name}</div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push('/dashboard')}>
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/profile')}>Profile</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    clearAuth();
                    router.push('/login');
                  }}
                  className="text-red-600 focus:text-red-600"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
