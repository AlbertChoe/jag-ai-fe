'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Testimonial() {
  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 relative">
      <div className="mx-auto max-w-7xl relative">
        <div className="hidden lg:block">
          <div
            className="relative rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 lg:pr-80 xl:pr-96"
            style={{ backgroundColor: '#ECF5E7' }}
          >
            <div className="max-w-xl lg:max-w-2xl text-center lg:text-left">
              <h3 className="font-semibold text-base sm:text-lg text-black">
                Pak Suryanto – Petani Jagung Banyuwangi
              </h3>
              <p className="mt-3 sm:mt-4 italic text-sm sm:text-base text-black leading-relaxed">
                &quot;Sejak menggunakan JagAI, hasil panen saya meningkat 25%. Sistem prediksi
                cuacanya sangat akurat, dan saya bisa jual langsung ke peternak dengan harga yang
                adil.&quot;
              </p>
              <div className="mt-4 sm:mt-6">
                <Link
                  href="/register"
                  className="inline-block rounded-md px-4 sm:px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-green-600"
                  style={{ backgroundColor: '#4CAF50' }}
                >
                  Mulai JagAI Tanamanmu Sekarang
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute top-0 bottom-0 right-4 sm:right-8 lg:right-0 z-50 flex items-end">
            <div className="relative w-72 xl:w-80 h-full">
              <Image
                src="/images/hero-cta.png"
                alt="Petani"
                fill
                className="object-contain object-bottom drop-shadow-lg"
                priority
              />
            </div>
          </div>
        </div>

        <div className="lg:hidden rounded-xl p-6 sm:p-8" style={{ backgroundColor: '#ECF5E7' }}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-semibold text-base text-black">
                Pak Suryanto – Petani Jagung Banyuwangi
              </h3>
              <p className="mt-3 italic text-sm text-black leading-relaxed">
                &quot;Sejak menggunakan JagAI, hasil panen saya meningkat 25%. Sistem prediksi
                cuacanya sangat akurat, dan saya bisa jual langsung ke peternak dengan harga yang
                adil.&quot;
              </p>
              <div className="mt-4">
                <Link
                  href="/register"
                  className="inline-block rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-600"
                  style={{ backgroundColor: '#4CAF50' }}
                >
                  Mulai JagAI Sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
