'use client';

import { useEffect, useState } from 'react';
import { Search, ChevronDown, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import dynamic from 'next/dynamic';
import FertilityChart from '@/components/satelit/chart';
import Image from 'next/image';
// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import('@/components/satelit/map'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse" />,
});

interface AnalysisData {
  location: string;
  ndvi: number;
  ndviStatus: string;
  satellite: string;
  month: string;
  lat: number;
  lng: number;
}

export default function SatelitPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedArea, setSelectedArea] = useState<AnalysisData | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [searchQuery, setSearchQuery] = useState('Desa Karanganyar, Kec Ambulu');

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleMapClick = (lat: number, lng: number) => {
    // Simulate analysis data based on clicked coordinates
    const mockData: AnalysisData = {
      location: `Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`,
      ndvi: Math.random() * 0.8 + 0.2, // Random NDVI between 0.2-1.0
      ndviStatus: Math.random() > 0.5 ? 'Tinggi' : 'Sedang',
      satellite: 'Sentinel-2',
      month: 'Agustus',
      lat,
      lng,
    };

    setSelectedArea(mockData);
    setShowPanel(true);
  };

  const closePanel = () => {
    setShowPanel(false);
    setSelectedArea(null);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Search Bar */}
      <div className="absolute top-4 left-12 right-4 z-[1000]">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari lokasi..."
            className="w-full pl-10 pr-4 py-3 bg-white rounded-full shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Map Container */}
      <div className="w-full h-full">
        <MapComponent onMapClick={handleMapClick} />
      </div>

      {/* Instruction Tooltip */}
      {!showPanel && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg border pointer-events-none z-[1000]">
          <p className="text-sm text-gray-700">Klik pada peta untuk menganalisis lahan</p>
        </div>
      )}

      {/* Bottom Analysis Panel */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 ease-in-out z-[1000] ${
          showPanel ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="p-6">
          {/* Panel Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-sm text-gray-600">{selectedArea?.location}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={closePanel}>
              ×
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Section - Controls */}
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">Index</label>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-200 rounded-lg appearance-none bg-white">
                    <option>NDVI</option>
                    <option>NDRE</option>
                    {/* <option>SAVI</option> */}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">Satelit</label>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-200 rounded-lg appearance-none bg-white">
                    <option>Sentinel-2</option>
                    {/* <option>Landsat-8</option> */}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* NDVI Score */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-600">
                      Index Vegetasi {selectedArea?.month}
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-green-700 mb-1">
                    {selectedArea?.ndvi.toFixed(2)}
                  </div>
                  <div className="text-lg font-semibold text-green-700">
                    {selectedArea?.ndviStatus}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Center Section - Chart */}
            <div>
              <FertilityChart />
            </div>

            {/* Right Section - Recommendations */}
            <div className="space-y-4">
              {/* Logo Circle */}
              <div className="relative mx-auto h-52 w-52 rounded-full bg-white shadow-md ring-8 ring-white">
                <Image
                  src="/images/logorekom.png"
                  alt="Rekomendasi Pemupukan"
                  fill
                  className="p-3 object-contain"
                  priority
                />
              </div>

              {/* Recommendation Card */}
              <div className="relative">
                {/* soft glow like the mock */}
                <div className="pointer-events-none absolute -top-6 -left-8 h-20 w-20 rounded-full bg-white/50 blur-xl" />
                <div className="pointer-events-none absolute -bottom-6 -left-10 h-24 w-24 rounded-full bg-white/20 blur-2xl" />

                <button
                  type="button"
                  className="group flex w-full items-center gap-4 rounded-3xl
               bg-gradient-to-r from-emerald-400 via-emerald-500 to-green-500
               px-5 py-4 text-white shadow-lg ring-1 ring-emerald-600/20"
                  // onClick={() => router.push('/rekomendasi')}
                >
                  {/* left badge */}
                  <span
                    className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white
                     shadow-[inset_0_1px_1px_rgba(0,0,0,0.06),0_10px_24px_-10px_rgba(0,0,0,0.35)]"
                  >
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-emerald-500/12 blur-sm" />
                    <Image
                      src="/icons/starAI.svg"
                      alt="AI"
                      width={22}
                      height={22}
                      className="opacity-90"
                      priority
                    />
                  </span>

                  {/* text */}
                  <span className="flex-1 text-left leading-tight">
                    <span className="block text-[18px] font-semibold drop-shadow-sm">
                      Periksa rekomendasi pemupukan
                    </span>
                    <span className="block text-[18px] opacity-95">untuk lahan Anda!</span>
                  </span>

                  {/* arrow */}
                  <ArrowRight className="h-6 w-6 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
