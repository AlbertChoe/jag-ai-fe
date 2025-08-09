'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useAuthStore } from '@/hooks/useAuthStore';

type NavItem = { href: string; label: string };

const NAV: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/analisis-satelit', label: 'Analisis Satelit' },
  { href: '/rekomendasi', label: 'Rekomendasi' },
  { href: '/nft-certs', label: 'NFT Certs' },
];

function NavLink({ href, label }: NavItem) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium transition ${
        isActive ? 'text-green-600' : 'text-foreground/80 hover:text-foreground'
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

  const [open, setOpen] = useState(false);

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
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-lg font-semibold">
            <span className="text-green-600">Jag</span>AI
          </Link>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
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
              <DropdownMenuContent align="end" className="w-48">
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
              className="bg-green-600 hover:bg-green-700 text-white"
              size="sm"
            >
              Login
            </Button>
          )}
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border"
              >
                <span className="sr-only">Menu</span>
                <div className="space-y-1.5">
                  <span className="block h-0.5 w-5 bg-current" />
                  <span className="block h-0.5 w-5 bg-current" />
                  <span className="block h-0.5 w-5 bg-current" />
                </div>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <div className="mt-6 flex flex-col gap-4">
                <Link href="/" onClick={() => setOpen(false)} className="text-lg font-semibold">
                  <span className="text-green-600">Jag</span>AI
                </Link>

                <nav className="flex flex-col">
                  {NAV.map((n) => (
                    <Link
                      key={n.href}
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="rounded px-2 py-2 text-base hover:bg-muted"
                    >
                      {n.label}
                    </Link>
                  ))}
                </nav>

                <div className="pt-2">
                  {isLoggedIn && user ? (
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-green-100 text-green-800">
                            {initials}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{user.name}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setOpen(false);
                          clearAuth();
                          router.push('/login');
                        }}
                      >
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => {
                        setOpen(false);
                        router.push('/login');
                      }}
                    >
                      Login
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
