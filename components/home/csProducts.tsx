'use client';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Lock } from 'lucide-react';

const products = [
  { name: 'NPK Gaza Plus Ga3', size: '200 ml', price: 'Rp50.000,00', img: '/images/hero1.jpg' },
  { name: 'NIKKO Wetter', size: '600 ml', price: 'Rp50.000,00', img: '/images/hero1.jpg' },
  { name: 'JAPRA Herbicide', size: '200 ml', price: 'Rp50.000,00', img: '/images/hero1.jpg' },
  { name: 'NIKKO Wetter botol', size: '200 ml', price: 'Rp50.000,00', img: '/images/hero1.jpg' },
];

export default function CsProducts() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-lg font-semibold mb-4">Konsultasi CS</h2>
        <div className="flex items-center gap-4 overflow-x-auto pb-2">
          {products.map((p) => (
            <div
              key={p.name}
              className="w-56 flex-shrink-0 rounded-2xl border p-4 shadow-sm hover:shadow transition"
            >
              <div className="relative mx-auto h-32 w-32">
                <Image src={p.img} alt={p.name} fill className="object-contain" />
              </div>
              <div className="mt-3 space-y-0.5">
                <p className="text-sm font-medium">{p.name}</p>
                <p className="text-xs text-zinc-500">{p.size}</p>
                <p className="text-emerald-600 font-semibold">{p.price}</p>
                <div className="mt-2 inline-flex h-6 w-6 items-center justify-center rounded-full border text-emerald-600">
                  <Lock className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
          <div className="ml-auto hidden md:flex items-center gap-2">
            <button className="rounded-full border p-2 text-emerald-600">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="rounded-full border p-2 text-emerald-600">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
