'use client';
import Image from 'next/image';

const items = [
  {
    title: 'Analisis Satelit Canggih',
    desc: 'Pantau kondisi tanaman dan kesuburan tanah secara real-time menggunakan citra satelit Sentinel-2. Dapatkan laporan kesuburan tanah dan rekomendasi pemupukan yang tepat sasaran berdasarkan data NDVI dan NDRE.',
    icon: '/icons/phone.svg',
  },
  {
    title: 'Deteksi Penyakit Tanaman',
    desc: 'Identifikasi penyakit tanaman jagung seperti hawar daun dan karat daun secara otomatis menggunakan AI. Dapatkan rekomendasi penanganan yang tepat untuk mencegah kehilangan hasil hingga 50%.',
    icon: '/icons/globe.svg',
  },
  {
    title: 'Konsultasi Ahli',
    desc: 'Konsultasikan kondisi tanaman Anda ke praktisi pertanian berpengalaman dari berbagai daerah di Indonesia. Akses langsung ke jaringan penyuluh dan petani sukses melalui WhatsApp.',
    icon: '/icons/ahli.svg',
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
            <p className="mt-2 text-sm text-[#9D9D9D]">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
