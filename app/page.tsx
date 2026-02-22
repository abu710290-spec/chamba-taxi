import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BookingForm from '@/components/BookingForm';
import PlacesSection from '@/components/PlacesSection';
import FleetSection from '@/components/FleetSection';
import PopularRoutes from '@/components/PopularRoutes';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import VideoSection from '@/components/VideoSection';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageLoader from '@/components/PageLoader';

export default function Home() {
  return (
    <main className="relative min-w-0 overflow-x-hidden">
      <PageLoader />
      <Navbar />
      <Hero />
      <BookingForm />
      <PopularRoutes />
      <FleetSection />
      <AboutSection />
      <PlacesSection />
      <VideoSection />
      <Testimonials />
      <FAQ />
      <BlogSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
