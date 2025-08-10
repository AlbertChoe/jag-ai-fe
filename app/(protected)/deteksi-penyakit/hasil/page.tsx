'use client';

import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  AlertTriangle,
  Activity,
  FlaskConical,
  ThermometerSun,
  CheckCircle2,
  Info,
} from 'lucide-react';

function Item({ n, title, children }: { n?: number; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4">
      <div className="mb-2 flex items-center gap-2">
        {typeof n === 'number' ? (
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
            {n}
          </span>
        ) : (
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            •
          </span>
        )}
        <h4 className="text-sm font-semibold">{title}</h4>
      </div>
      <div className="text-xs leading-relaxed text-zinc-600">{children}</div>
    </div>
  );
}

export default function HasilDeteksiPage() {
  const params = useSearchParams();
  const router = useRouter();

  // We receive a blob: or http(s) preview URL (set in the upload page)
  const img = params.get('preview') ?? '/images/phone.png';

  // (Mock) inference result – wire these to your API later
  const result = {
    disease: 'Hawar Daun',
    severityPct: 85,
    urgent: true,
    notes:
      'Serangan jamur pada daun yang dimulai dari ujung dan tepi daun. Penyebaran cepat saat cuaca lembab. Butuh penanganan dalam 3–5 hari.',
  };

  return (
    <main className="bg-emerald-50/40">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-6">
        {/* Top row: photo + detection summary */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_420px]">
          {/* Photo */}
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            <div className="relative h-[360px] w-full">
              <Image
                src={img}
                alt="Hasil foto daun"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>

          {/* Result panel */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-4">
            <div className="mb-3 flex items-center gap-2">
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-emerald-200 text-emerald-700">
                <Activity className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-semibold">Hasil Deteksi</h3>
            </div>

            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-3 gap-2">
                <div className="text-zinc-500">Jenis Penyakit</div>
                <div className="col-span-2">
                  <span className="inline-flex items-center rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs font-medium">
                    {result.disease}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="text-zinc-500">Tingkat Infeksi</div>
                <div className="col-span-2 font-semibold">{result.severityPct}%</div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="text-zinc-500">Keterangan</div>
                <div className="col-span-2 leading-relaxed text-zinc-700">{result.notes}</div>
              </div>

              {result.urgent && (
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-700 ring-1 ring-emerald-100">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Dibutuhkan Pengobatan Segera!</span>
                </div>
              )}
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => router.back()}
                className="text-xs font-medium text-emerald-700 hover:underline"
              >
                Ganti Foto
              </button>
            </div>
          </div>
        </div>

        {/* Guide header */}
        <div className="mt-5 rounded-xl bg-emerald-600 px-4 py-2 text-center text-sm font-semibold text-white">
          Panduan Pengobatan
        </div>

        {/* Three columns */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Col 1 — Tindakan Darurat */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Tindakan Darurat (Hari Ini)
            </div>

            <Item n={1} title="Isolasi Area Terinfeksi">
              Tandai dan pisahkan tanaman yang sakit. Jangan biarkan menyebar ke tanaman sehat.
            </Item>

            <Item n={2} title="Buang Daun yang Sakit">
              Potong dan bakar daun yang sudah menguning/bercak. Jangan dibuang sembarangan.
            </Item>
          </div>

          {/* Col 2 — Pengobatan */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FlaskConical className="h-4 w-4 text-emerald-600" /> Pengobatan (Hari 1–7)
            </div>

            <Item n={1} title="Semprot Fungisida">
              Pilih salah satu dari daftar di bawah ini, semprot pada pagi/sore hari saat tidak
              hujan.
            </Item>
            {/* Fungisida list in one box */}
            <div className="rounded-xl bg-emerald-100 p-4 text-sm">
              {[
                { name: 'Mankozeb 80% WP', dose: '2 gram per liter air' },
                { name: 'Copper Oxychloride', dose: '2–3 gram per liter air' },
                { name: 'Propineb 70% WP', dose: '2 gram per liter air' },
              ].map((f, i, arr) => (
                <div
                  key={f.name}
                  className={`py-2 ${i !== arr.length - 1 ? 'border-b border-emerald-100' : ''}`}
                >
                  <div className="font-semibold text-emerald-800">{f.name}</div>
                  <div className="text-emerald-700">{f.dose}</div>
                </div>
              ))}
            </div>

            <Item n={2} title="Atur Kelembaban">
              Pastikan drainase baik; hindari overwatering. Beri jarak tanam lebih lebar untuk
              sirkulasi udara.
            </Item>

            <Item n={3} title="Ulangi Penyemprotan">
              Ulangi semprot setiap 3–7 hari sampai gejala hilang (maksimal 3 kali).
            </Item>

            <div className="mt-4 rounded-xl bg-red-100 p-4 text-sm">
              <div className="mb-1 flex items-center gap-2 font-semibold text-red-800">
                <AlertTriangle className="h-4 w-4 text-red-700" aria-hidden="true" />
                Peringatan Penting
              </div>
              <p className="text-red-800">
                Jangan semprot saat akan hujan atau angin kencang. Gunakan masker dan sarung tangan.
                Jangan panen dalam 14 hari setelah penyemprotan terakhir.
              </p>
            </div>
          </div>

          {/* Col 3 — Monitoring + Tips */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <ThermometerSun className="h-4 w-4 text-emerald-600" /> Monitoring (Hari 7–14)
            </div>

            <Item n={1} title="Cek Perkembangan">
              Foto tanaman setiap 3 hari, upload ke JagAI untuk monitoring otomatis.
            </Item>

            <Item title="Lanjutkan Perawatan">
              Jika belum sembuh 100%, ulangi penyemprotan dengan obat yang berbeda.
            </Item>

            <div className="rounded-xl border border-zinc-200 bg-blue-100 p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <Info className="h-4 w-4 text-emerald-600" />
                Tips Pencegahan
              </div>
              <ul className="ml-5 list-disc text-xs leading-relaxed text-zinc-700">
                <li>Gunakan benih tahan penyakit</li>
                <li>Jangan terlalu rapat</li>
                <li>Bersihkan gulma secara rutin</li>
                <li>Rotasi tanaman setiap musim</li>
                <li>Pupuk seimbang (jangan berlebihan nitrogen)</li>
              </ul>
            </div>

            {/* CTA card */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200">
              <Image
                src="/images/topKonsultasi.png"
                alt="Konsultasi"
                width={800}
                height={600}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-emerald-900/10" />
              <div className="relative p-5 text-white">
                <div className="text-lg font-bold">Masih Bingung?</div>
                <p className="text-sm opacity-90">Konsultasikan dengan praktisi kami.</p>
                <button
                  onClick={() => router.push('/konsultasi')}
                  className="mt-3 rounded-full bg-yellow-400 px-4 py-2 text-xs font-semibold text-emerald-900 shadow hover:bg-yellow-300"
                >
                  Konsultasikan Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
