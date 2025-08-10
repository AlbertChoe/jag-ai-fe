'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Testimonial() {
  return (
    <section className="px-6 py-12">
      <div
        className="mx-auto max-w-5xl flex items-center justify-between rounded-2xl p-8"
        style={{ backgroundColor: '#ECF5E7' }}
      >
        <div className="max-w-xl">
          <h3 className="font-semibold text-lg text-black">
            Pak Suryanto – Petani Jagung Banyuwangi
          </h3>
          <p className="mt-4 italic text-base text-black">
            &quot;Sejak menggunakan JagAI, hasil panen saya meningkat 25%. Sistem prediksi cuacanya
            sangat akurat, dan saya bisa jual langsung ke peternak dengan harga yang adil.&quot;
          </p>
          <div className="mt-6">
            <Link
              href="/register"
              className="inline-block rounded-md px-5 py-2 text-sm font-medium text-white"
              style={{ backgroundColor: '#4CAF50' }}
            >
              Mulai JagAI Tanamanmu Sekarang
            </Link>
          </div>
        </div>

        <div className="flex-shrink-0">
          <Image
            src="/images/hero-cta.png"
            alt="Petani"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
