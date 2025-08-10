import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JagAI',
  description: 'Solusi digital cerdas untuk petani jagung Indonesia. Tingkatkan produktivitas hingga 15% dengan analisis satelit real-time, prediksi cuaca berbasis AI, dan akses langsung ke pakar pertanian.',
  icons: {
    icon: [
      { url: '/icons/logo.svg', sizes: '32x32', type: 'image/svg' },
      { url: '/icons/logo.svg', sizes: '16x16', type: 'image/svg' },
    ],
    shortcut: '/icons/logo.svg',
    apple: [
      { url: '/icons/logo.svg', sizes: '180x180', type: 'image/svg' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/icons/logo.svg" type="image/svg" />
        <link rel="shortcut icon" href="/icons/logo.svg" type="image/svg" />
        <link rel="apple-touch-icon" href="/icons/logo.svg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}