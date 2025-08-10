'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, when: 'beforeChildren', staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

export default function LandingHero() {
  return (
    <section className="min-h-[80vh] sm:min-h-[90vh] flex items-center px-4 sm:px-6 py-8 sm:py-12 bg-white">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <div className="space-y-6 sm:space-y-8 relative order-2 lg:order-1">
            <motion.div variants={item} className="relative">
              <div className="relative">
                <span className="absolute top-0 left-0 text-[48px] sm:text-[64px] md:text-[80px] font-bold text-[#4CAF50] leading-none">
                  JAGAI
                </span>
                <span className="absolute top-[2.5rem] sm:top-[3.5rem] md:top-[4.5rem] left-[10rem] sm:left-[13rem] md:left-[15rem] text-[48px] sm:text-[64px] md:text-[80px] font-bold text-[#4A4A4A] leading-none">
                  PETANI
                </span>
              </div>
              <div className="h-[5rem] sm:h-[7rem] md:h-[9rem]" />
            </motion.div>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg"
            >
              Tingkatkan produktivitas jagung hingga <strong>15%</strong> dengan
              analisis satelit real-time, prediksi cuaca berbasis AI, dan akses
              langsung ke pakar pertanian. Solusi digital cerdas untuk petani
              jagung Indonesia.
            </motion.p>

            <motion.div variants={item}>
              <Link href="/register" className="inline-block">
                <motion.span
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center rounded-md bg-[#4CAF50] px-5 sm:px-6 py-2.5 sm:py-3 font-bold text-white shadow-sm transition-colors hover:bg-green-600 text-sm sm:text-base"
                >
                  Mulai Bertani Cerdas
                </motion.span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="flex items-end justify-center gap-0 relative order-1 lg:order-2"
          >
            <div className="relative w-[80px] sm:w-[120px] md:w-[200px] h-[150px] sm:h-[220px] md:h-[320px] overflow-hidden rounded-t-[20px] sm:rounded-t-[24px] z-10">
              <Image
                src="/images/hero1.png"
                alt="Corn leaf disease"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-[80px] sm:w-[120px] md:w-[200px] h-[240px] sm:h-[360px] md:h-[460px] overflow-hidden rounded-t-[20px] sm:rounded-t-[24px] -ml-4 sm:-ml-6 z-20 -mt-8 sm:-mt-12">
              <Image
                src="/images/hero2.png"
                alt="Tractor in field"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-[80px] sm:w-[120px] md:w-[200px] h-[320px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-t-[20px] sm:rounded-t-[24px] -ml-4 sm:-ml-6 z-30 -mt-8 sm:-mt-12">
              <Image
                src="/images/hero3.png"
                alt="Corn close-up"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
