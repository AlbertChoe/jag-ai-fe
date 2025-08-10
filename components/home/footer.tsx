'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="rounded-t-[20px] sm:rounded-t-[40px] pt-6 sm:pt-10 pb-4"
      style={{ backgroundColor: '#ECF5E7' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="lg:hidden">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/logo.png" 
                alt="JagAI Logo"
                width={80}
                height={80}
              />
            </div>
            <div className="flex justify-center gap-4">
              <Link href="#" className="hover:opacity-80 transition">
                <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
              </Link>
            </div>
          </div>

          <div className="text-center mb-6">
            <h4 className="font-semibold text-[#14491E] text-base mb-4">KONTAK KAMI</h4>
            <div className="space-y-3 text-sm text-[#14491E]">
              <div className="flex justify-center items-start gap-2">
                <Image src="/icons/location.svg" alt="Location" width={16} height={16} className="flex-shrink-0 mt-0.5" />
                <span className="text-center">Jl. Ganesa No. 10, Coblong,<br />Kota Bandung, Jawa Barat</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Image src="/icons/mail.svg" alt="Email" width={16} height={16} />
                <span>admin@jagai.com</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Image src="/icons/phone.svg" alt="Phone" width={16} height={16} />
                <span>+62 8123 0671 251</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6 text-center">
            <div>
              <h4 className="font-semibold text-[#14491E] text-sm mb-3">PERUSAHAAN</h4>
              <ul className="space-y-2 text-xs text-[#14491E]">
                <li><Link href="#" className="hover:text-[#43A718] transition">Tentang JagAI</Link></li>
                <li><Link href="#" className="hover:text-[#43A718] transition">Cerita Sukses</Link></li>
                <li><Link href="#" className="hover:text-[#43A718] transition">Bisnis Insight</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#14491E] text-sm mb-3">PRODUK</h4>
              <ul className="space-y-2 text-xs text-[#14491E]">
                <li><Link href="#" className="hover:text-[#43A718] transition">Demo & Tutorial</Link></li>
                <li><Link href="#" className="hover:text-[#43A718] transition">TaniPanen</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-5 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png" 
                alt="JagAI Logo"
                width={100}
                height={100}
              />
            </div>

            <div className="flex gap-4 mt-6">
              <Link href="#" className="hover:opacity-80 transition">
                <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#14491E]">LOKASI</h4>
            <div className="mt-3 space-y-2 text-sm text-[#14491E]">
              <div className="flex gap-2">
                <Image src="/icons/location.svg" alt="Location" width={16} height={16} className="flex-shrink-0 mt-0.5" />
                <span>Jl. Ganesa No. 10, Coblong,<br />Kota Bandung, Jawa Barat</span>
              </div>
              <div className="flex gap-2">
                <Image src="/icons/mail.svg" alt="Email" width={16} height={16} className="flex-shrink-0 mt-0.5" />
                <span>admin@jagai.com</span>
              </div>
              <div className="flex gap-2">
                <Image src="/icons/phone.svg" alt="Phone" width={16} height={16} className="flex-shrink-0 mt-0.5" />
                <span>+62 8123 0671 251</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#14491E]">PERUSAHAAN</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#14491E]">
              <li><Link href="#" className="hover:text-[#43A718] transition">Tentang JagAI</Link></li>
              <li><Link href="#" className="hover:text-[#43A718] transition">Cerita Sukses Petani</Link></li>
              <li><Link href="#" className="hover:text-[#43A718] transition">Bisnis Insight</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#14491E]">PRODUK</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#14491E]">
              <li><Link href="#" className="hover:text-[#43A718] transition">Demo & Tutorial</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#14491E]">AFILIASI</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#14491E]">
              <li><Link href="#" className="hover:text-[#43A718] transition">TaniPanen</Link></li>
            </ul>
          </div>
        </div>

        <div className="my-4 sm:my-6 border-t border-gray-300"></div>

        <div className="text-center text-xs text-[#14491E]">
          2025 © JagAI. Indonesia.{' '}
          <Link href="#" className="font-semibold hover:text-[#43A718] transition">
            Syarat & Ketentuan
          </Link>{' '}
          |{' '}
          <Link href="#" className="font-semibold hover:text-[#43A718] transition">
            Kebijakan Privasi
          </Link>
        </div>
      </div>
    </footer>
  );
}