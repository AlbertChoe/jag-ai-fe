'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  SunMedium,
  Droplets,
  CloudRain,
  Wind,
  ChevronRight,
  Calendar,
  Sprout,
  Pencil,
  ArrowRight,
} from 'lucide-react';

export default function DashboardPage() {
  const weather = {
    tempC: 24,
    summary: 'Hari ini sebagian cerah!',
    humidity: 77,
    precip: '< 0.01 in',
    wind: '6 mph/s',
  };

  const field = {
    photo: '/images/randomMap.webp',
    locationName: 'Lokasi Lahan',
    condition: 'Baik',
    tanamDate: '12/01/2024',
    panenETA: '~4 bulan',
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-6 min-h-[calc(100vh-64px)]">
      <div className="grid min-h-[calc(100vh-64px)] grid-cols-1 items-center gap-10 py-8 lg:grid-cols-2">
        {/* LEFT: Weather + CTA */}
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <div className="mb-3 rounded-full bg-yellow-400/10 p-3">
                <SunMedium className="h-10 w-10 text-yellow-500" />
              </div>

              <div className="text-4xl font-semibold leading-none">{weather.tempC}°</div>
              <p className="mt-2 text-sm text-zinc-600">{weather.summary}</p>

              {/* metrics */}
              <div className="mt-10 grid w-full grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-semibold">{weather.humidity}%</div>
                  <div className="mt-1 inline-flex items-center gap-1 text-xs text-zinc-500">
                    <Droplets className="h-4 w-4" />
                    Humidity
                  </div>
                </div>
                <div>
                  <div className="text-lg font-semibold">{weather.precip}</div>
                  <div className="mt-1 inline-flex items-center gap-1 text-xs text-zinc-500">
                    <CloudRain className="h-4 w-4" />
                    Precipitation
                  </div>
                </div>
                <div>
                  <div className="text-lg font-semibold">{weather.wind}</div>
                  <div className="mt-1 inline-flex items-center gap-1 text-xs text-zinc-500">
                    <Wind className="h-4 w-4" />
                    Wind Speed
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="relative mt-8 md:mt-10 lg:mt-12 w-full">
                {/* soft glow */}
                <div className="pointer-events-none absolute -top-6 -left-8 h-20 w-20 rounded-full bg-white/50 blur-xl" />
                <div className="pointer-events-none absolute -bottom-6 -left-10 h-24 w-24 rounded-full bg-white/20 blur-2xl" />

                <button
                  type="button"
                  className="group flex w-full items-center gap-4 rounded-3xl
                             bg-gradient-to-r from-emerald-400 via-emerald-500 to-green-500
                             px-5 py-4 text-white shadow-lg ring-1 ring-emerald-600/20"
                >
                  <span
                    className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white
                               shadow-[inset_0_1px_1px_rgba(0,0,0,0.06),0_10px_24px_-10px_rgba(0,0,0,0.35)]"
                  >
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-emerald-500/12 blur-sm" />
                    <Sprout className="h-5 w-5 text-emerald-600" />
                  </span>

                  <span className="flex-1 text-left leading-tight">
                    <span className="block text-[18px] font-semibold drop-shadow-sm">
                      Periksa rekomendasi pemupukan
                    </span>
                    <span className="block text-[18px] opacity-95">untuk lahan Anda!</span>
                  </span>

                  <ArrowRight className="h-6 w-6 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* RIGHT: Field image + details */}
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={field.photo}
              alt="Field"
              width={1200}
              height={800}
              className="h-[360px] w-full object-cover"
              priority
            />
            <div className="pointer-events-none absolute left-1/4 top-8 h-40 w-48 border-4 border-white/90" />
          </div>

          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700">
              {field.locationName}
              <Pencil className="h-4 w-4 text-zinc-500" />
            </div>
            <Button variant="outline" size="sm" className="rounded-full">
              Selengkapnya
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <Card className="border-zinc-200">
              <CardContent className="p-4">
                <div className="mb-2 text-xs text-zinc-500">Kondisi Tanaman</div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">{field.condition}</span>
                  <Button variant="ghost" className="h-8 px-2 text-zinc-500" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-zinc-200">
              <CardContent className="p-4">
                <div className="mb-2 text-xs text-zinc-500">Tanggal Tanam</div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">{field.tanamDate}</span>
                  <Calendar className="h-4 w-4 text-zinc-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-zinc-200">
              <CardContent className="p-4">
                <div className="mb-2 text-xs text-zinc-500">Waktu Panen</div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">{field.panenETA}</span>
                  <Sprout className="h-4 w-4 text-zinc-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
