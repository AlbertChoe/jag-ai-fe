'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DeteksiPenyakitSection() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const triggerPick = () => inputRef.current?.click();
  const goToResult = (file: File) => {
    // Create a local preview URL; safe to pass between routes
    const url = URL.createObjectURL(file);
    router.push(`/deteksi-penyakit/hasil?preview=${encodeURIComponent(url)}`);
  };

  const handleFile = (f?: File) => {
    if (!f) return;
    setFileName(f.name);
    goToResult(f);
  };

  return (
    <section className="relative  bg-emerald-50/60">
      <div className="mx-auto grid min-h-[92vh] w-full max-w-[1320px] grid-cols-1 items-center gap-14 px-6 py-16 lg:grid-cols-2 xl:gap-20">
        {/* LEFT: Upload box */}
        <div
          onClick={triggerPick}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleFile(e.dataTransfer.files?.[0]);
          }}
          className="group relative cursor-pointer rounded-3xl border border-dashed border-emerald-300/80 bg-white/80 p-10 shadow-sm transition hover:border-emerald-500/70"
        >
          <div className="mb-6 h-1.5 w-14 rounded-full bg-emerald-600" />
          <h2 className="mb-2 text-3xl font-semibold tracking-tight text-emerald-950 md:text-4xl">
            Upload atau Foto Daun Jagung
          </h2>
          <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-emerald-900/70">
            JagAI langsung kasih tahu penyakitnya apa dan cara mengobatinya.
          </p>

          <div className="rounded-2xl bg-emerald-50/60 p-6 md:p-8">
            <div className="flex h-56 items-center justify-center">
              <div className="flex flex-col items-center gap-3 text-emerald-900/60">
                <Upload className="h-10 w-10" />
                <span className="text-sm md:text-base">
                  {fileName ? (
                    <span className="text-emerald-700">Terpilih: {fileName}</span>
                  ) : (
                    'Klik atau seret gambar ke sini'
                  )}
                </span>
              </div>
            </div>
          </div>

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />

          {/* subtle focus ring on hover */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-emerald-500/0 transition group-hover:ring-8" />
        </div>

        {/* RIGHT: Phone mockup area */}
        <div className="relative flex items-center justify-center">
          {/* big green circle accent, sits behind phone */}
          <div
            aria-hidden
            className="absolute right-[-8%] bottom-[-6%] h-[420px] w-[420px] rounded-full bg-emerald-500/30 blur-[1px]"
          />

          {/* phone image – scale up on larger screens */}
          <div className="relative mx-auto w-[330px] md:w-[400px] lg:w-[460px] xl:w-[520px]">
            <Image
              src="/images/phone.png"
              alt="Deteksi penyakit"
              width={780}
              height={1560}
              priority
              className="w-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
