'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ChevronDown,
  ChevronRight,
} from 'lucide-react';

export default function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState('air');
  const [growthChart, setGrowthChart] = useState('tinggi');
  const [isRecommendationOpen, setIsRecommendationOpen] = useState(false);

  const weather = {
    tempC: 24,
    summary: 'Hari ini sebagian cerah',
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

  const recommendationItems = [
    { nama: 'Pupuk NPK 16-16-16', takaran: '150 kg/ha', harga: 'Rp 15.000/kg' },
    { nama: 'Pupuk Urea', takaran: '100 kg/ha', harga: 'Rp 8.500/kg' },
    { nama: 'Pestisida Organofosfat', takaran: '2 L/ha', harga: 'Rp 125.000/L' },
    { nama: 'Fungisida Mankozeb', takaran: '2 kg/ha', harga: 'Rp 85.000/kg' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-3 sm:p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-white rounded-lg p-4 sm:p-6">
            <div className="text-center mb-4 sm:mb-6">
              <div className="mb-3 sm:mb-4">
                <Image 
                  src="/icons/sun.svg" 
                  alt="Sun" 
                  width={48} 
                  height={48} 
                  className="mx-auto sm:w-16 sm:h-16" 
                />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">{weather.tempC}°</div>
              <div className="text-sm text-zinc-600">{weather.summary}</div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center mb-4 sm:mb-6">
              <div>
                <div className="font-bold text-base sm:text-lg">{weather.humidity}%</div>
                <div className="text-xs text-zinc-600">Kelembaban</div>
              </div>
              <div>
                <div className="font-bold text-base sm:text-lg">{weather.precip}</div>
                <div className="text-xs text-zinc-600">Endapan</div>
              </div>
              <div>
                <div className="font-bold text-base sm:text-lg">{weather.wind}</div>
                <div className="text-xs text-zinc-600">Kecepatan Angin</div>
              </div>
            </div>

            <div 
              className="text-white p-3 sm:p-4 rounded-2xl mb-4"
              style={{
                background: 'linear-gradient(135deg, #C0D1CB 0%, #6ABA48 100%)'
              }}
            >
              <div className="flex items-center">
                <div className="mr-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
                    <Image 
                      src="/icons/cemerlang.svg" 
                      alt="Cemerlang" 
                      width={20} 
                      height={20} 
                      className="sm:w-6 sm:h-6" 
                    />
                  </div>
                </div>
                <div className="text-white font-medium text-sm sm:text-base">
                  Periksa rekomendasi perawatan tanaman pada lahan Anda!
                </div>
              </div>
            </div>

            <Card className="mb-4">
              <CardContent className="p-0">
                <div 
                  className="flex items-center justify-between p-3 sm:p-4 cursor-pointer"
                  onClick={() => setIsRecommendationOpen(!isRecommendationOpen)}
                >
                  <div className="flex items-center gap-2">
                    <Image src="/icons/nutrition.svg" alt="Nutrition" width={20} height={20} />
                    <span className="text-sm font-medium">Rekomendasi Perawatan</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-zinc-500 transform transition-transform ${isRecommendationOpen ? 'rotate-180' : ''}`} />
                </div>
                
                {isRecommendationOpen && (
                  <div className="border-t p-3 sm:p-4">
                    <div className="text-sm text-zinc-600 mb-4">
                      Berikut rekomendasi kebutuhan untuk menunjang pertumbuhan tanaman Anda
                    </div>
                    
                    <div className="block sm:hidden space-y-3">
                      {[
                        { kebutuhan: 'NPK -15-15-15', jumlah: '200kg/ha', waktu: '7 hari setelah tanam(HST)' },
                        { kebutuhan: 'Urea', jumlah: '150kg/ha', waktu: '21 HST' },
                        { kebutuhan: 'Urea+KCL', jumlah: '100kg/ha', waktu: '40 HST' },
                        { kebutuhan: 'Insektisida', jumlah: 'Sesuai dosis', waktu: 'Saat ada tanda serangan hama' },
                        { kebutuhan: 'Air', jumlah: '10-15 mm/hari', waktu: 'Setiap Pagi Sore' },
                        { kebutuhan: 'Penyiangan', jumlah: '-', waktu: '20-25 HST / 40-45 HST' }
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <div className="font-medium text-sm mb-1">{item.kebutuhan}</div>
                          <div className="text-xs text-gray-600 mb-1">Jumlah: {item.jumlah}</div>
                          <div className="text-xs text-gray-600">Waktu: {item.waktu}</div>
                        </div>
                      ))}
                    </div>

                    <div className="hidden sm:block border border-gray-200 rounded-lg overflow-hidden">
                      <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
                        <div className="p-3 text-sm font-medium text-gray-700">Kebutuhan</div>
                        <div className="p-3 text-sm font-medium text-gray-700 border-l border-gray-200">Jumlah</div>
                        <div className="p-3 text-sm font-medium text-gray-700 border-l border-gray-200">Waktu Aplikasi</div>
                      </div>
                      
                      <div className="grid grid-cols-3 border-b border-gray-200">
                        <div className="p-3 text-sm">NPK -15-15-15</div>
                        <div className="p-3 text-sm border-l border-gray-200">200kg/ha</div>
                        <div className="p-3 text-sm border-l border-gray-200">7 hari setelah tanam(HST)</div>
                      </div>
                      
                      <div className="grid grid-cols-3 border-b border-gray-200">
                        <div className="p-3 text-sm">Urea</div>
                        <div className="p-3 text-sm border-l border-gray-200">150kg/ha</div>
                        <div className="p-3 text-sm border-l border-gray-200">21 HST</div>
                      </div>
                      
                      <div className="grid grid-cols-3 border-b border-gray-200">
                        <div className="p-3 text-sm">Urea+KCL</div>
                        <div className="p-3 text-sm border-l border-gray-200">100kg/ha</div>
                        <div className="p-3 text-sm border-l border-gray-200">40 HST</div>
                      </div>
                      
                      <div className="grid grid-cols-3 border-b border-gray-200">
                        <div className="p-3 text-sm">Insektisida</div>
                        <div className="p-3 text-sm border-l border-gray-200">Sesuai dosis</div>
                        <div className="p-3 text-sm border-l border-gray-200">Saat ada tanda serangan hama</div>
                      </div>
                      
                      <div className="grid grid-cols-3 border-b border-gray-200">
                        <div className="p-3 text-sm">Air</div>
                        <div className="p-3 text-sm border-l border-gray-200">10-15 mm/hari</div>
                        <div className="p-3 text-sm border-l border-gray-200">Setiap Pagi Sore</div>
                      </div>
                      
                      <div className="grid grid-cols-3">
                        <div className="p-3 text-sm">Penyiangan</div>
                        <div className="p-3 text-sm border-l border-gray-200">-</div>
                        <div className="p-3 text-sm border-l border-gray-200">20-25 HST<br/>40-45 HST</div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="relative w-full h-64 sm:h-80 lg:aspect-square overflow-hidden rounded-lg">
            <Image
              src={field.photo}
              alt="Field satellite view"
              fill
              className="object-cover"
            />
            <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-12 sm:w-32 sm:h-16 border-2 border-white rounded opacity-90"></div>
            </div>
            <Button variant="ghost" size="sm" className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 h-8 w-8 rounded-md bg-white p-0 hover:bg-white/90">
              <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </Button>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg font-semibold text-black">Lokasi Lahan</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <Card className="border border-gray-200">
                <CardContent className="p-3">
                  <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Kondisi Tanaman</div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-lg font-medium text-black">{field.condition}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardContent className="p-3">
                  <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Tanggal Tanam</div>
                  <span className="text-sm sm:text-lg font-medium text-black">{field.tanamDate}</span>
                </CardContent>
              </Card>
            </div>

            <Card className="border border-gray-200">
              <CardContent className="p-3">
                <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Waktu Panen</div>
                <span className="text-sm sm:text-lg font-medium text-black">{field.panenETA}</span>
              </CardContent>
            </Card>
          </div>

          <div className="w-full max-w-md mx-auto lg:max-w-none">
            <Image 
              src="/images/contents.png" 
              alt="Karakteristik dan Pemantauan Pertumbuhan" 
              width={500} 
              height={600} 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
}