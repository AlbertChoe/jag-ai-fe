'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

type NavItem = { href: string; label: string };

const NAV: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/analisis-satelit', label: 'Analisis Satelit' },
  { href: '/rekomendasi', label: 'Rekomendasi' },
  { href: '/deteksi-penyakit', label: 'Deteksi Penyakit' },
  { href: '/konsultasi', label: 'Konsultasi' },
];

function NavLink({ href, label, onClick }: NavItem & { onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-base transition ${
        isActive
          ? 'font-bold text-[#43A718]'
          : 'text-black hover:text-[#43A718]'
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => setMounted(true), []);

  const isLoggedIn = false; 
  if (!mounted) return null;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white border-b relative">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Image src="icons/logo.svg" alt="Logo" width={28} height={28} />
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#43A718]"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg z-50">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            {NAV.map((n) => (
              <NavLink key={n.href} {...n} onClick={closeMobileMenu} />
            ))}
            <div className="pt-4 border-t">
              {isLoggedIn ? (
                <span>User Menu</span>
              ) : (
                <Button
                  onClick={() => {
                    router.push('/login');
                    closeMobileMenu();
                  }}
                  className="w-full bg-[#43A718] hover:bg-green-600 text-white font-bold rounded px-5"
                >
                  Login
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}