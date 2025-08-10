import CsProducts from '@/components/home/csProducts';
import HowItWorks from '@/components/home/howItWorks';
import LandingHero from '@/components/home/landing';
import Testimonial from '@/components/home/testimonial';
import WhyChoose from '@/components/home/whyChoose';
import Footer from '@/components/home/footer';

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <div className="px-4 sm:px-6">
        <LandingHero />
        <WhyChoose />
        <HowItWorks />
        <CsProducts />
        <Testimonial />
      </div>
      <Footer />
    </main>
  );
}