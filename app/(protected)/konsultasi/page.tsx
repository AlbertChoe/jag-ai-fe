'use client';

import { useState } from 'react';
import { Search, Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

interface Practitioner {
  id: number;
  name: string;
  location: string;
  rating: number;
  price: string;
  image: string;
  description: string;
  whatsapp: string;
}

const BasePractitioners: Practitioner[] = [
  {
    id: 1,
    name: 'Pak Sugiyono',
    location: 'Tuban',
    rating: 4.8,
    price: 'Rp100,000',
    image: '/images/praktisi1.png',
    description:
      'Petani jagung ahli Tuban dengan pengalaman 30+ tahun. Ahli memilih bibit, mengatur jadwal tanam, dan teknik pemupukan organik. Juga berbagi tips praktis untuk konsultasi WhatsApp.',
    whatsapp: '+6281234567890',
  },
  {
    id: 2,
    name: 'Mas Arifin',
    location: 'Banyuwangi',
    rating: 4.9,
    price: 'Rp100,000',
    image: '/images/praktisi2.png',
    description:
      '12 tahun menggeluti jagung di lahan kecil hingga luas. Pakar teknik irigasi dan pengendalian hama. Jember, pakar jagung untuk mengatur tanaman tumpang sari menggunakan bibit dan...',
    whatsapp: '+6281234567891',
  },
  {
    id: 3,
    name: 'Pak Ruslan',
    location: 'Jember',
    rating: 5,
    price: 'Rp100,000',
    image: '/images/praktisi3.png',
    description:
      '18 tahun membudidayakan jagung hibrida. Mengurus untuk pemerintah juga, pakar untuk varietas bibit dan Flowres, serta pengembanganbibit bibit dan cara growth.',
    whatsapp: '+6281234567892',
  },
  {
    id: 4,
    name: 'Mas Wahyu',
    location: 'Lamongan',
    rating: 3,
    price: 'Rp50,000',
    image: '/images/praktisi4.png',
    description:
      'Petani muda dari Lamongan yang menguasai bibit lokal maupun hibrida. Ahli dalam lingkungan organik dan berkelanjutan. Juga pakar menggunakan hasil panen jagung dengan metode efisien.',
    whatsapp: '+6281234567893',
  },
];

const practitioners: Practitioner[] = [
  ...BasePractitioners,
  { ...BasePractitioners[0], name: 'Pak Sugiyono', image: '/images/praktisi1.png' },
  { ...BasePractitioners[1], name: 'Mas Arifin', image: '/images/praktisi2.png' },
  { ...BasePractitioners[2], name: 'Pak Ruslan', image: '/images/praktisi3.png' },
  { ...BasePractitioners[3], name: 'Mas Wahyu', image: '/images/praktisi4.png' },
].map((p, i) => ({
  ...p,
  id: i + 1,
}));

const formatRupiah = (n: number) => (n <= 0 ? '' : new Intl.NumberFormat('id-ID').format(n));

const parseRupiah = (s: string) => {
  // keep digits only (so "Rp100.000,00" or "100,000.00" both work)
  const digits = s.replace(/\D/g, '');
  return digits ? Number(digits) : 0;
};
type PractitionerWithPrice = Practitioner & { priceValue: number };
const practitionersWithPrice: PractitionerWithPrice[] = practitioners.map((p) => ({
  ...p,
  // your price strings are like "Rp100,000.00" – we only care about the number
  priceValue: parseRupiah(p.price),
}));

export default function ConsultationPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Daerah');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const minVal = parseRupiah(minPrice); // 0 if empty
  const maxVal = parseRupiah(maxPrice) || Infinity;

  const filteredPractitioners = practitionersWithPrice.filter((practitioner) => {
    const matchesSearch =
      practitioner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practitioner.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRegion = selectedRegion === 'Daerah' || practitioner.location === selectedRegion;

    const matchesRating = selectedRating === null || practitioner.rating >= selectedRating;

    const matchesPrice =
      practitioner.priceValue >= (minVal || 0) && practitioner.priceValue <= maxVal;

    return matchesSearch && matchesRegion && matchesRating && matchesPrice;
  });

  const handleWhatsAppContact = (whatsapp: string, name: string) => {
    const message = `Halo ${name}, saya tertarik untuk konsultasi pertanian jagung dengan Anda.`;
    const url = `https://wa.me/${whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const handlePriceChange =
    (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      const num = parseRupiah(raw);
      setter(num ? `Rp${formatRupiah(num)}` : ''); // nice live format
    };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div
        className="relative h-48 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/topKonsultasi.png')`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg">
            Konsultasi Praktisi Pertanian
          </h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-4">
            <div className="relative">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option>Daerah</option>
                <option>Tuban</option>
                <option>Banyuwangi</option>
                <option>Jember</option>
                <option>Lamongan</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Cari Pakar Terbaikmu"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Filter Sidebar */}
          <div className="w-64">
            <div className="sticky top-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
              <h3 className="mb-4 font-semibold text-gray-800">Filter</h3>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="mb-3 font-medium text-gray-700">Harga</h4>
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Harga Minimum"
                    value={minPrice}
                    onChange={handlePriceChange(setMinPrice)}
                    className="text-sm"
                  />
                  <Input
                    type="text"
                    placeholder="Harga Maksimum"
                    value={maxPrice}
                    onChange={handlePriceChange(setMaxPrice)}
                    className="text-sm"
                  />
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h4 className="mb-3 font-medium text-gray-700">Rating</h4>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex cursor-pointer items-center space-x-2">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        checked={selectedRating === rating}
                        onChange={() => setSelectedRating(rating)}
                        className="text-emerald-500"
                      />
                      <div className="flex items-center space-x-1">
                        <div className="flex">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">keatas</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {filteredPractitioners.length} Praktisi ditemukan
              </h2>
            </div>

            {/* Practitioners Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPractitioners.map((practitioner) => (
                <Card
                  key={practitioner.id}
                  className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm hover:shadow-md transition-all"
                >
                  {/* Inset image with its own ring so it doesn't touch the card border */}
                  <div className="relative h-56 w-full overflow-hidden rounded-xl ring-1 ring-zinc-100">
                    <Image
                      src={practitioner.image}
                      alt={practitioner.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 50vw, 25vw"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-semibold text-white shadow">
                      {practitioner.rating.toFixed(1)}
                    </span>
                  </div>

                  <CardContent className="p-3">
                    {/* Name / city / WhatsApp */}
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-[15px] font-semibold leading-tight text-zinc-900">
                          {practitioner.name}
                        </h3>
                        <p className="text-xs text-zinc-600">{practitioner.location}</p>
                      </div>

                      <Button
                        size="icon"
                        variant={'ghost'}
                        className="h-9 w-9 rounded-full border-emerald-200 bg-white text-emerald-600 hover:bg-emerald-50"
                        onClick={() =>
                          handleWhatsAppContact(practitioner.whatsapp, practitioner.name)
                        }
                        title="Hubungi via WhatsApp"
                      >
                        <Image
                          src="/icons/whatsapp.svg"
                          alt="WhatsApp"
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </Button>
                    </div>

                    <div className="mb-2 text-sm font-semibold text-emerald-700">
                      {practitioner.price}
                    </div>

                    <p className="text-xs leading-relaxed text-zinc-600 line-clamp-3">
                      {practitioner.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
