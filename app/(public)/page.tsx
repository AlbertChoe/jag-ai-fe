import CsProducts from '@/components/home/csProducts';
import HowItWorks from '@/components/home/howItWorks';
import LandingHero from '@/components/home/landing';
import Testimonial from '@/components/home/testimonial';
import WhyChoose from '@/components/home/whyChoose';

export default function HomePage() {
  return (
    <main className="p-6 space-y-4">
      <LandingHero />
      <WhyChoose />
      <HowItWorks />
      <CsProducts />
      <Testimonial />
    </main>
  );
}
