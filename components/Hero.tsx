'use client';

import { motion } from 'motion/react';
import { Phone, MessageCircle, Star, ShieldCheck, Clock } from 'lucide-react';
import Image from 'next/image';
import { getImage } from '@/lib/images';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24 md:pt-20 pb-8 sm:pb-12 w-full max-w-[100vw]">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getImage('hero')}
          alt="Chamba Landscape"
          fill
          className="object-cover opacity-30 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center min-w-0 box-border">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass-yellow rounded-full mb-4 sm:mb-6 lg:mb-8 z-10 relative"
          >
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400 shrink-0" />
            <a
  href="https://www.instagram.com/thakurramnish/?hl=en"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-yellow-400 whitespace-nowrap hover:text-yellow-300 transition-colors"
>
  Service provided by Ramnish Thakur
</a>
          </motion.div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-display font-black tracking-tighter leading-[0.9] mb-6 sm:mb-8 break-words">
            YOUR <span className="text-gradient">JOURNEY</span> <br />
            OUR <span className="text-white">PASSION</span>
          </h1>
          
          <p className="text-base md:text-xl lg:text-2xl text-white/60 max-w-xl mb-8 font-medium leading-relaxed">
            Premium outstation and local taxi services from Chamba to all over India. 
            Safe, reliable, and professional.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-6 w-full max-w-full">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:8219769045"
              className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-4 bg-yellow-400 text-black px-5 py-3 sm:px-6 sm:py-4 lg:px-10 lg:py-5 rounded-xl sm:rounded-2xl font-black text-sm sm:text-lg lg:text-xl shadow-[0_20px_50px_rgba(250,204,21,0.3)] hover:bg-yellow-300 transition-all shrink-0"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 shrink-0" />
              CALL NOW
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/918219769045"
              className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-4 glass text-white px-5 py-3 sm:px-6 sm:py-4 lg:px-10 lg:py-5 rounded-xl sm:rounded-2xl font-black text-sm sm:text-lg lg:text-xl hover:bg-white/10 transition-all shrink-0"
            >
              <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400" />
              WHATSAPP
            </motion.a>
          </div>

          <div className="mt-8 sm:mt-10 lg:mt-16 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 border-t border-white/10 pt-6 sm:pt-8 lg:pt-12">
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-display font-black">10+</span>
              <span className="text-[8px] lg:text-[10px] uppercase tracking-widest text-white/30 font-bold">Years Exp</span>
            </div>
            <div className="w-px h-8 lg:h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-display font-black">5K+</span>
              <span className="text-[8px] lg:text-[10px] uppercase tracking-widest text-white/30 font-bold">Happy Trips</span>
            </div>
            <div className="w-px h-8 lg:h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-display font-black">24/7</span>
              <span className="text-[8px] lg:text-[10px] uppercase tracking-widest text-white/30 font-bold">Support</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative hidden md:block w-full max-w-[min(100%,420px)] lg:max-w-[min(100%,480px)] xl:max-w-[520px] ml-auto"
        >
          <div className="relative rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl shadow-yellow-400/10 border border-white/10 aspect-[4/3] max-h-[320px] lg:max-h-[380px]">
            <Image
              src={getImage('heroCar')}
              alt="Off-road taxi travel in Chamba"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 420px, 520px"
              priority
            />
            {/* Badges overlay */}
            <motion.div 
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-2 right-2 md:top-3 md:right-3 glass p-2.5 md:p-3 rounded-xl flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 shrink-0" />
              <div className="min-w-0">
                <p className="font-black text-[9px] md:text-[10px]">SAFE TRAVEL</p>
                <p className="text-[7px] md:text-[8px] text-white/50">Verified Drivers</p>
              </div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute bottom-2 left-2 md:bottom-3 md:left-3 glass p-2.5 md:p-3 rounded-xl flex items-center gap-2"
            >
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 shrink-0" />
              <div className="min-w-0">
                <p className="font-black text-[9px] md:text-[10px]">ON TIME</p>
                <p className="text-[7px] md:text-[8px] text-white/50">Guaranteed</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
