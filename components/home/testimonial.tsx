'use client';
import Link from 'next/link';

export default function Testimonial() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-5xl rounded-2xl bg-emerald-50 p-6">
        <h3 className="font-semibold">Pak Suryanto – Petani Jagung Banyuwangi</h3>
        <p className="mt-2 text-sm text-zinc-700">
          &quot;Sejak menggunakan JagAI, hasil panen saya meningkat 25%. Sistem prediksi cuaca
          sangat akurat, dan saya bisa jual langsung ke peternak dengan harga yang adil.&quot;
        </p>
        <div className="mt-4">
          <Link
            href="/register"
            className="inline-flex items-center rounded-md bg-emerald-600 px-5 py-2 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Mulai Gratis
          </Link>
        </div>
      </div>
    </section>
  );
}
