'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import heroImg from '@/public/images/hero-phone.png'; 

const container: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

const stepsData = [
  {
    title: 'Optimalisasi Perawatan Tanah',
    desc: 'Cukup masukkan lokasi lahan, JagAI akan menganalisis kesuburan tanah dan memberikan rekomendasi pupuk yang tepat. Hemat biaya, hasil maksimal.',
  },
  {
    title: 'Prediksi dan Strategi Penanaman',
    desc: 'Foto daun jagung yang sakit, JagAI langsung kasih tau penyakitnya apa dan cara mengobatinya. Plus dapat info cuaca untuk planning tanam yang tepat.',
  },
  {
    title: 'Konsultasi dengan Ahli',
    desc: 'Masih bingung? Langsung chat dengan petani sukses dan penyuluh berpengalaman. Dapat solusi real dari orang yang sudah terbukti berhasil.',
  },
];

export default function HowItWorks() {
  const [steps, setSteps] = useState(
    stepsData.map((s, idx) => ({ ...s, active: idx === 0 }))
  );

  const handleClick = (index: number) => {
    setSteps(steps.map((s, i) => ({ ...s, active: i === index })));
  };

  return (
    <section className="px-6 py-12 md:px-10">
      <h2 className="mb-10 text-center text-2xl font-bold">Bagaimana JagAI bekerja?</h2>

      <div
        className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden"
        style={{ backgroundColor: '#ECF5E7' }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="p-6 md:p-8 space-y-4"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={item}
              onClick={() => handleClick(i)}
              className={`flex items-start gap-4 rounded-lg p-5 border-l-4 cursor-pointer transition-all duration-300 ${
                s.active
                  ? 'bg-[#307710] text-white border-[#307710]'
                  : 'bg-white text-black border-[#84B372]'
              }`}
            >
              <div
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold`}
                style={{
                  backgroundColor: s.active ? '#FFFFFF' : '#84B372',
                  color: s.active ? '#000000' : '#FFFFFF',
                }}
              >
                {i + 1}
              </div>

              <div>
                <h4 className="font-semibold">{s.title}</h4>
                <p
                  className={`mt-1 text-sm leading-relaxed ${
                    s.active ? 'text-white' : 'text-black'
                  }`}
                >
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="relative flex flex-col justify-end items-start p-6 md:p-10">
          <Image
            src={heroImg}
            alt="JagAI Sharing"
            fill
            className="object-cover rounded-t-2xl"
          />
          <div className="relative z-10 mt-auto mb-6">
            <h3 className="text-2xl font-bold mb-4 text-white">Konsultasi Ahli</h3>
            <button
              className="font-semibold px-5 py-2 rounded-full shadow"
              style={{
                backgroundColor: '#FFCC00',
                color: '#007E2F',
                minWidth: '200px',
              }}
            >
              Lihat Daftar Praktisi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}