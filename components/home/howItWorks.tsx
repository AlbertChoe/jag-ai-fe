'use client';

import { motion, type Variants } from 'framer-motion';

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

const steps = [
  {
    title: 'Optimalisasi Perawatan Tanah',
    desc: 'Analisis satelit & rekomendasi pemupukan cerdas berbasis data.',
    active: true,
  },
  {
    title: 'Prediksi dan Strategi Penanaman',
    desc: 'Penjadwalan tanam & perawatan dengan rekomendasi berbasis data.',
  },
  {
    title: 'Distribusi Langsung Tanpa Tengkulak',
    desc: 'Marketplace menghubungkan petani dengan peternak & pengepul.',
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-12">
      <h2 className="mb-10 text-center text-2xl font-bold">Bagaimana JagAI bekerja?</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="relative mx-auto max-w-5xl rounded-2xl bg-emerald-50 p-6 md:p-8"
      >
        {/* vertical progress spine */}
        <div className="pointer-events-none absolute left-6 top-8 bottom-8 w-[3px] rounded-full bg-emerald-100">
          <div className="absolute inset-x-0 top-0 h-1/3 rounded-full bg-emerald-300" />
        </div>

        <div className="space-y-3 pl-10 sm:pl-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{ scale: s.active ? 1 : 1.01 }}
              className={`group relative flex items-start gap-3 rounded-lg p-4 transition
                ${
                  s.active
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white text-black hover:shadow-sm'
                }
              `}
            >
              {/* step badge */}
              <div
                className={`absolute -left-[2.15rem] sm:-left-12 mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold
                  ${
                    s.active
                      ? 'border-white/50 bg-white text-emerald-600'
                      : 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  }
                `}
              >
                {i + 1}
              </div>

              {/* content */}
              <div>
                <h4 className="font-semibold tracking-tight">{s.title}</h4>
                <p
                  className={`mt-0.5 text-sm leading-relaxed ${
                    s.active ? 'text-emerald-50' : 'text-zinc-700'
                  }`}
                >
                  {s.desc}
                </p>
              </div>

              {s.active && (
                <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/10 after:absolute after:-inset-0.5 after:rounded-lg after:bg-emerald-400/10 after:blur-md" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
