'use client';
import Image from 'next/image';

const items = [
  {
    title: 'Analisis Satelit Canggih',
    desc: 'Pantau kondisi tanaman lewat citra satelit (NDVI). Rekomendasi pemupukan presisi & hemat biaya.',
    icon: '/icons/phone.svg',
  },
  {
    title: 'Prediksi AI Akurat',
    desc: 'Prediksi waktu panen, harga puncak, dan potensi penyakit. Kurangi gagal panen hingga 30%.',
    icon: '/icons/globe.svg',
  },
  {
    title: 'Marketplace Terintegrasi',
    desc: 'Jual langsung ke peternak/pengepul tanpa tengkulak. Harga adil, transparan, menguntungkan.',
    icon: '/icons/store.svg',
  },
];

export default function WhyChoose() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-center text-2xl font-bold mb-10">Mengapa Memilih JagAI ?</h2>
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border p-6 text-center">
            <div className="mx-auto mb-4 h-10 w-10">
              <Image src={it.icon} alt="" width={40} height={40} />
            </div>
            <h3 className="font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
