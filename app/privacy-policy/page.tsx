import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Chamba Taxi',
  description: 'Privacy Policy for Chamba Taxi. How we collect and use your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-w-0 overflow-x-hidden bg-[#0a0a0a]">
      <Navbar />
      <div className="pt-28 sm:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Link href="/" className="text-yellow-400 font-bold text-sm hover:underline mb-6 inline-block">Back to Home</Link>
            <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tighter mb-4">
              PRIVACY <span className="text-yellow-400">POLICY</span>
            </h1>
            <p className="text-white/50 font-medium">Last updated: {new Date().toLocaleDateString('en-IN')}</p>
          </div>

          <div className="glass rounded-[2rem] p-8 sm:p-10 space-y-8 text-white/70 font-medium leading-relaxed">
            <section>
              <h2 className="text-xl font-display font-black text-white mb-3">1. Information We Collect</h2>
              <p>When you book a taxi or contact us, we may collect your name, phone number, pickup and drop locations, and travel date. We use this only to provide our taxi services.</p>
            </section>
            <section>
              <h2 className="text-xl font-display font-black text-white mb-3">2. How We Use Your Information</h2>
              <p>Your information is used to process bookings and communicate about your trip. We do not sell or share your personal data with third parties for marketing.</p>
            </section>
            <section>
              <h2 className="text-xl font-display font-black text-white mb-3">3. Data Security</h2>
              <p>We take reasonable steps to protect your personal information. Phone and booking details are kept confidential.</p>
            </section>
            <section>
              <h2 className="text-xl font-display font-black text-white mb-3">4. Contact</h2>
              <p>For privacy queries, contact us at <a href="tel:8219769045" className="text-yellow-400 hover:underline">8219769045</a> or <a href="https://wa.me/918219769045" className="text-yellow-400 hover:underline">WhatsApp</a>.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
