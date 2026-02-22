import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Chamba Taxi',
  description: 'Get in touch with Chamba Taxi. Call 8219769045 or WhatsApp. Available 24/7.',
};

export default function ContactPage() {
  return (
    <main className="min-w-0 overflow-x-hidden bg-[#0a0a0a]">
      <Navbar />
      <div className="pt-28 sm:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 glass-yellow rounded-full mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400">Get in Touch</span>
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black tracking-tighter mb-6 leading-none">
              CONTACT <span className="text-yellow-400">US</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-medium">
              We are available 24/7. Call, WhatsApp, or visit us in Chamba.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
            <a href="tel:8219769045" className="glass p-8 rounded-[2rem] hover:glass-yellow transition-all duration-300 group">
              <Phone className="w-12 h-12 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-display font-black mb-2">Phone</h3>
              <p className="text-white/50 font-medium">8219769045</p>
              <p className="text-white/30 text-sm mt-2">Call anytime, 24/7</p>
            </a>
            <a href="https://wa.me/918219769045" target="_blank" rel="noopener noreferrer" className="glass p-8 rounded-[2rem] hover:glass-yellow transition-all duration-300 group">
              <MessageCircle className="w-12 h-12 text-green-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-display font-black mb-2">WhatsApp</h3>
              <p className="text-white/50 font-medium">918219769045</p>
              <p className="text-white/30 text-sm mt-2">Quick booking</p>
            </a>
            <div className="glass p-8 rounded-[2rem] border border-white/10">
              <MapPin className="w-12 h-12 text-yellow-400 mb-6" />
              <h3 className="text-xl font-display font-black mb-2">Address</h3>
              <p className="text-white/50 font-medium leading-relaxed">Main Market, Chamba, HP, 176310</p>
            </div>
          </div>

          <div className="glass rounded-[3rem] p-8 sm:p-12 lg:p-16 text-center border border-white/10">
            <Clock className="w-14 h-14 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-display font-black mb-4">24/7 Available</h2>
            <p className="text-white/60 font-medium mb-10 max-w-xl mx-auto">
              Book for local sightseeing, outstation trips, or airport transfers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:8219769045" className="w-full sm:w-auto bg-yellow-400 text-black px-10 py-4 rounded-2xl font-black text-lg hover:bg-yellow-300 transition-all">
                Call Now
              </a>
              <a href="https://wa.me/918219769045" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto glass text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
