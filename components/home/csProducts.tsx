'use client';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';

const praktisi = [
  {
    nama: 'Pak Sugiyono',
    lokasi: 'Tuban',
    harga: 'Rp100.000,00',
    rating: '5.0',
    foto: '/images/praktisi1.png',
    deskripsi:
      'Petani jagung asal Tuban dengan pengalaman 15+ tahun. Ahli memilih benih, pemupukan tepat, dan mengatasi penyakit tanaman. Siap berbagi tips praktis lewat konsultasi WhatsApp.',
  },
  {
    nama: 'Mas Arifin',
    lokasi: 'Banyuwangi',
    harga: 'Rp100.000,00',
    rating: '5.0',
    foto: '/images/praktisi2.png',
    deskripsi:
      '12 tahun menggarap jagung di lahan tadah hujan dan lahan irigasi. Terbiasa mengatur rotasi tanam padi–jagung untuk menjaga kesuburan tanah. Ahli mengatasi bulai dan',
  },
  {
    nama: 'Pak Ruslan',
    lokasi: 'Jember',
    harga: 'Rp100.000,00',
    rating: '5.0',
    foto: '/images/praktisi3.png',
    deskripsi:
      '18 tahun membudidayakan jagung hibrida. Menguasai teknik penanaman jarak rapat untuk varietas BISI dan Pioneer, serta pengendalian lalat bibit dan ulat grayak',
  },
  {
    nama: 'Mas Wahyu',
    lokasi: 'Lamongan',
    harga: 'Rp50.000,00',
    rating: '5.0',
    foto: '/images/praktisi4.png',
    deskripsi:
      'Petani muda dari Lamongan yang menguasai teknik tanam modern dan ramah lingkungan. Berpengalaman membantu petani meningkatkan hasil panen jagung dengan metode efisien. ',
  },
];

export default function KonsultasiPraktisi() {
  const [activeButton, setActiveButton] = useState<'left' | 'right' | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    setActiveButton('left');
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
    setTimeout(() => setActiveButton(null), 200);
  };

  const scrollRight = () => {
    setActiveButton('right');
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
    setTimeout(() => setActiveButton(null), 200);
  };

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-xl sm:text-2xl font-bold">Konsultasi Praktisi Terpercaya</h2>
          <div className="flex items-center gap-2">
            <button 
              onClick={scrollLeft}
              className={`rounded-full border p-2 transition-all duration-200 ${
                activeButton === 'left' 
                  ? 'bg-[#6ABA48] text-white border-[#6ABA48]' 
                  : 'border-[#6ABA48] text-[#6ABA48] hover:bg-[#6ABA48] hover:text-white'
              }`}
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={scrollRight}
              className={`rounded-full border p-2 transition-all duration-200 ${
                activeButton === 'right' 
                  ? 'bg-[#6ABA48] text-white border-[#6ABA48]' 
                  : 'border-[#6ABA48] text-[#6ABA48] hover:bg-[#6ABA48] hover:text-white'
              }`}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-4 gap-6 xl:gap-8">
          {praktisi.map((p) => (
            <div
              key={p.nama}
              className="rounded-xl border overflow-hidden shadow-sm flex flex-col"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={p.foto}
                  alt={p.nama}
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute top-3 left-3 flex items-center gap-1 px-2 py-0.5 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #6ABA48 0%, #FFFFFF 100%)',
                  }}
                >
                  <Image
                    src="/icons/star.svg"
                    alt="Star"
                    width={12}
                    height={12}
                  />
                  <span className="text-xs font-semibold text-white">
                    {p.rating}
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-2 flex-grow">
                <p className="font-semibold text-base">{p.nama}</p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{p.lokasi}</span>
                  <Image
                    src="/icons/whatsapp.svg"
                    alt="WhatsApp"
                    width={22}
                    height={22}
                    className="cursor-pointer"
                  />
                </div>

                <p className="text-sm font-semibold text-[#6ABA48]">
                  {p.harga}
                </p>

                <p className="text-xs text-gray-600 leading-snug line-clamp-3">
                  {p.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div 
          ref={scrollContainerRef}
          className="lg:hidden flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {praktisi.map((p) => (
            <div
              key={p.nama}
              className="flex-none w-64 sm:w-72 rounded-xl border overflow-hidden shadow-sm flex flex-col"
            >
              <div className="relative h-64 sm:h-72 w-full">
                <Image
                  src={p.foto}
                  alt={p.nama}
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute top-3 left-3 flex items-center gap-1 px-2 py-0.5 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #6ABA48 0%, #FFFFFF 100%)',
                  }}
                >
                  <Image
                    src="/icons/star.svg"
                    alt="Star"
                    width={12}
                    height={12}
                  />
                  <span className="text-xs font-semibold text-white">
                    {p.rating}
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-2 flex-grow">
                <p className="font-semibold text-base">{p.nama}</p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{p.lokasi}</span>
                  <Image
                    src="/icons/whatsapp.svg"
                    alt="WhatsApp"
                    width={22}
                    height={22}
                    className="cursor-pointer"
                  />
                </div>

                <p className="text-sm font-semibold text-[#6ABA48]">
                  {p.harga}
                </p>

                <p className="text-xs text-gray-600 leading-snug line-clamp-3">
                  {p.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}