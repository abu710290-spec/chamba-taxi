import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Chamba Taxi',
  description: 'Terms of Service for Chamba Taxi. Rules and conditions for using our taxi services.',
};

export default function TermsPage() {
  return (
    <main className="min-w-0 overflow-x-hidden bg-[#0a0a0a]">
      <Navbar />
      <div className="pt-28 sm:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Link href="/" className="text-yellow-400 font-bold text-sm hover:underline mb-6 inline-block">← Back to Home</Link>
            <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tighter mb-4">
              TERMS OF <span className="text-yellow-400">SERVICE</span>
            </h1>
            <p className="text-white/50 font-medium">Last updated: {new Date().toLocaleDateString('en-IN')}</p>
          </div>

          <div className="glass rounded-[2rem] p-8 sm:p-10 space-y-8 text-white/70 font-medium leading-relaxed">
            <section>
              <h2 className="text-xl font-display font-black text-white mb-3">1. Service</h2>
              <p>Chamba Taxi provides taxi and cab services for local sightseeing, outstation trips, and airport transfers. By booking with us, you agree to these terms.</p>
            </section>
            <section>
              <h2 className="text-xl font-display font-black text-white mb-3">2. Booking & Payment</h2>
              <p>Bookings can be made via phone or WhatsApp. Fare and payment terms will be communicated at the time of booking. Prices may vary for outstation and long-distance trips.</p>
            </section>
            <section>
              <h2 className="text-xl font-display font-black text-white mb-3">3. Cancellation</h2>
              <p>Please inform us as early as possible if you need to cancel. Cancellation policy may apply for advance bookings; details will be shared at booking.</p>
            </section>
            <section>
              <h2 className="text-xl font-display font-black text-white mb-3">4. Conduct & Safety</h2>
              <p>We expect passengers to behave respectfully. Our drivers reserve the right to refuse service in case of misconduct. We are committed to safe driving and well-maintained vehicles.</p>
            </section>
            <section>
              <h2 className="text-xl font-display font-black text-white mb-3">5. Contact</h2>
              <p>For questions about these terms, call <a href="tel:8219769045" className="text-yellow-400 hover:underline">8219769045</a> or message us on <a href="https://wa.me/918219769045" className="text-yellow-400 hover:underline">WhatsApp</a>.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
