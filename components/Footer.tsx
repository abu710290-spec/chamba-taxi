'use client';

import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Facebook, Instagram, Twitter, Car } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-10 sm:pt-14 lg:pt-20 pb-6 sm:pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-14">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-yellow-400 p-1.5 rounded-lg">
                <Car className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl sm:text-2xl font-display font-black tracking-tighter">
                CHAMBA<span className="text-yellow-400">TAXI</span>
              </span>
            </Link>
            <p className="text-white/40 font-medium text-sm leading-relaxed tracking-tight">
              Your trusted travel partner in Chamba. Premium taxi services across Himachal and India.
            </p>
            <div className="flex gap-2">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 glass rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-black text-yellow-400 mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-white/50 font-bold text-sm">
              <li><Link href="/" className="hover:text-yellow-400 transition-colors tracking-tight">Home</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400 transition-colors tracking-tight">About Us</Link></li>
              <li><Link href="/places" className="hover:text-yellow-400 transition-colors tracking-tight">Places to Visit</Link></li>
              <li><Link href="/blog" className="hover:text-yellow-400 transition-colors tracking-tight">Our Blogs</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors tracking-tight">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-black text-yellow-400 mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-white/50 font-bold text-sm">
              <li><Link href="/places" className="hover:text-yellow-400 transition-colors tracking-tight">Local Sightseeing</Link></li>
              <li><Link href="/#popular-routes" className="hover:text-yellow-400 transition-colors tracking-tight">Outstation Trips</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors tracking-tight">Airport Transfers</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors tracking-tight">Wedding Bookings</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors tracking-tight">Corporate Tours</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-black text-yellow-400 mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 glass rounded-lg shrink-0">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                </div>
                <span className="text-white/50 font-medium text-sm leading-snug">Main Market, Chamba, HP 176310</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 glass rounded-lg shrink-0">
                  <Phone className="w-4 h-4 text-yellow-400" />
                </div>
                <a href="tel:8219769045" className="font-display font-black text-lg hover:text-yellow-400 transition-colors">+91 8219769045</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 glass rounded-lg bg-green-500/10 border-green-500/20 shrink-0">
                  <MessageCircle className="w-4 h-4 text-green-500" />
                </div>
                <a href="https://wa.me/918219769045" className="text-white/50 font-medium text-sm hover:text-green-500 transition-colors">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-white/20 text-[9px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} Chamba Taxi. Crafted for the Mountains.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[9px] font-black uppercase tracking-widest text-white/20">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
