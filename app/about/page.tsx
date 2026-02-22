import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, Award, Users, Shield } from 'lucide-react';
import { getImage } from '@/lib/images';

export default function AboutPage() {
  return (
    <main className="min-w-0 overflow-x-hidden bg-[#0a0a0a]">
      <Navbar />
      <div className="pt-28 sm:pt-36 pb-20 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <span className="inline-block px-4 py-1.5 glass-yellow rounded-full mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400">Our Story</span>
              </span>
              <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 leading-none">
                SERVING <br />
                <span className="text-yellow-400">CHAMBA</span>
              </h1>
              <p className="text-xl text-white/50 mb-10 font-medium leading-relaxed tracking-tight">
                Chamba Taxi was founded with a simple mission: to provide safe, reliable, and affordable transportation to the people of Chamba and tourists visiting our beautiful district. 
                Over the years, we have grown from a single car to a fleet of well-maintained vehicles, serving thousands of happy travelers.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-4 glass p-6 rounded-[2rem]">
                  <Users className="w-8 h-8 text-yellow-400" />
                  <div className="text-left">
                    <p className="text-2xl font-display font-black leading-none">5000+</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/30">Happy Clients</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 glass p-6 rounded-[2rem]">
                  <Award className="w-8 h-8 text-yellow-400" />
                  <div className="text-left">
                    <p className="text-2xl font-display font-black leading-none">Top Rated</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/30">Service</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={getImage('aboutHero')}
                alt="Chamba Taxi Team"
                fill
                className="object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-3 gap-10 mb-32">
            {[
              {
                icon: Shield,
                title: "Safety First",
                desc: "Your safety is our top priority. All our drivers are verified and our vehicles undergo regular safety checks."
              },
              {
                icon: MapPin,
                title: "Local Expertise",
                desc: "Our drivers are locals who know the mountain roads like the back of their hands, ensuring a smooth journey."
              },
              {
                icon: Phone,
                title: "Always Available",
                desc: "We are available 24/7 for your travel needs. Just give us a call or send a WhatsApp message."
              }
            ].map((item, i) => (
              <div key={i} className="p-12 glass rounded-[3rem] hover:glass-yellow transition-all duration-500 group">
                <item.icon className="w-16 h-16 text-yellow-400 mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-display font-black mb-6 leading-none">{item.title}</h3>
                <p className="text-white/40 font-medium leading-relaxed tracking-tight">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="glass rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden border-yellow-400/20">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-display font-black mb-10 leading-none">
                READY TO START <br />
                <span className="text-yellow-400">YOUR JOURNEY?</span>
              </h2>
              <p className="text-2xl text-white/40 mb-16 max-w-2xl mx-auto font-medium tracking-tight">
                Whether you&apos;re planning a local sightseeing tour or an outstation trip, we&apos;re here to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <a 
                  href="tel:8219769045"
                  className="w-full sm:w-auto bg-yellow-400 text-black px-12 py-6 rounded-2xl font-black text-xl hover:bg-yellow-300 transition-all shadow-2xl shadow-yellow-400/20"
                >
                  Call: 8219769045
                </a>
                <a 
                  href="https://wa.me/918219769045"
                  className="w-full sm:w-auto glass text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-white/10 transition-all"
                >
                  WhatsApp Booking
                </a>
              </div>
            </div>
            {/* Decorative background circle */}
            <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[120px]" />
            <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[120px]" />
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
