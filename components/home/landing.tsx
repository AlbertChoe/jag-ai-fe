'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function LandingHero() {
  return (
    <section className="min-h-[90vh] bg-white flex items-center px-6 py-12">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={item}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
                <span className="block text-emerald-500">JAGAI</span>
                <span className="block text-gray-800">PETANI</span>
              </h1>
            </motion.div>

            <motion.p variants={item} className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Optimalkan hasil hingga 15% dengan analisis satelit real-time, prediksi panen berbasis
              AI, dan akses langsung ke pembeli tanpa tengkulak. Solusi digital cerdas untuk petani
              jagung Indonesia.
            </motion.p>

            <motion.div variants={item}>
              <Link href="/register" className="inline-block">
                <motion.span
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center rounded-lg bg-emerald-500 px-8 py-4 font-semibold text-white shadow-sm transition-colors hover:bg-emerald-600"
                >
                  Mulai Bertani Cerdas
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Right Images Grid */}
          <motion.div variants={item} className="relative">
            <div className="grid h-[500px] grid-cols-2 gap-4">
              {/* Top left image */}
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 170, damping: 20 }}
              >
                <Image
                  src="/images/hero1.jpg"
                  alt="Corn field with farming equipment"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-emerald-700/15" />
              </motion.div>

              {/* Top right image */}
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 170, damping: 20 }}
              >
                <Image
                  src="/images/hero2.jpg"
                  alt="Farmer hands with corn seeds"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-emerald-700/15" />
              </motion.div>

              {/* Bottom spanning image */}
              <motion.div
                className="relative col-span-2 overflow-hidden rounded-2xl"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
                whileHover={{ scale: 1.01 }}
              >
                <Image
                  src="/images/hero3.jpg"
                  alt="Wide corn plantation field"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-emerald-700/15" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
