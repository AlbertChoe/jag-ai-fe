'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="relative isolate min-h-screen bg-emerald-50/60">
      {/* soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_10%_0%,rgba(16,185,129,0.12),transparent_60%),radial-gradient(50%_40%_at_100%_100%,rgba(16,185,129,0.12),transparent_60%)]" />

      <div className="mx-auto grid min-h-[80vh] w-full max-w-5xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2">
        {/* Left: message */}
        <section>
          <p className="mb-2 text-sm font-medium tracking-wide text-emerald-700">
            404 • Halaman tidak ditemukan
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-emerald-950 sm:text-4xl">
            Ups, alamat yang kamu tuju tidak ada
          </h1>
          <p className="mt-3 max-w-md text-zinc-600">
            Mungkin tautannya salah atau halaman sudah dipindahkan. Ayo kembali dan lanjutkan
            analisis satelit, rekomendasi, atau konsultasi.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Link href="/">Kembali ke Beranda</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
            >
              <Link href="/dashboard">Buka Dashboard</Link>
            </Button>
          </div>

          <div className="mt-8 text-sm text-zinc-500">
            Butuh bantuan?{' '}
            <Link href="/konsultasi" className="text-emerald-700 underline underline-offset-4">
              Konsultasi
            </Link>
          </div>
        </section>

        {/* Right: illustration */}
        <section className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-[2.25rem] bg-white/50 backdrop-blur-sm ring-1 ring-zinc-200/60" />
          <div className="relative rounded-[2rem] bg-white p-8 shadow-md ring-1 ring-zinc-200">
            {/* Leafy phone-ish illustration to match JagAI vibe */}
            <svg viewBox="0 0 280 220" className="mx-auto h-48 w-auto" aria-hidden="true">
              <defs>
                <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#22C55E" />
                </linearGradient>
              </defs>
              <rect
                x="85"
                y="10"
                width="110"
                height="200"
                rx="18"
                fill="#F8FAF9"
                stroke="#E5E7EB"
              />
              <circle cx="140" cy="26" r="3" fill="#E5E7EB" />
              <rect x="100" y="40" width="80" height="40" rx="8" fill="url(#g)" opacity=".15" />
              <g transform="translate(30,68)">
                <path d="M58 90c28-6 44-32 46-54-20 2-44 18-46 54Z" fill="url(#g)" opacity=".22" />
                <path d="M78 94c24-9 36-35 36-55-17 4-36 20-36 55Z" fill="url(#g)" />
                <path
                  d="M58 90c0-28 18-56 52-64"
                  stroke="#10B981"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle cx="110" cy="20" r="3" fill="#10B981" />
              </g>
              <text
                x="140"
                y="185"
                textAnchor="middle"
                fontSize="44"
                fontWeight="700"
                fill="#10B981"
              >
                404
              </text>
            </svg>

            <div className="mt-4 text-center text-sm text-zinc-500">
              Kami tidak menemukan halaman yang dimaksud.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
