'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { getImage } from '@/lib/images';

const features = [
  "Experienced & Professional Drivers",
  "Well Maintained Clean Vehicles",
  "Transparent Pricing (Discuss on Call)",
  "24/7 Customer Support",
  "Safe Travel for Families & Solo Travelers",
  "Customized Tour Packages"
];

export default function AboutSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={getImage('aboutTeam')}
                alt="Chamba Taxi Service"
                fill
                className="object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 lg:-bottom-10 -right-6 lg:-right-10 bg-yellow-400 p-6 lg:p-10 rounded-[2rem] lg:rounded-[3rem] shadow-2xl max-w-[200px] lg:max-w-[280px]">
              <p className="text-4xl lg:text-6xl font-display font-black mb-2 text-black">10+</p>
              <p className="text-[8px] lg:text-xs font-black uppercase tracking-widest text-black/60 leading-tight">Years of Excellence in Mountain Travel</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 glass-yellow rounded-full mb-6"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">About Our Service</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter mb-6 sm:mb-10 leading-none">
              WHY CHOOSE <br />
              <span className="text-yellow-400">CHAMBA TAXI?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/50 mb-6 sm:mb-8 font-medium leading-relaxed tracking-tight">
              We are more than just a taxi service. We are your travel companions in the mountains. 
              Based in Chamba, we provide reliable transportation to any corner of India. 
              Whether it&apos;s a local trip to Khajjiar or a long journey to Delhi, we ensure your comfort and safety.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-5 glass rounded-2xl group hover:glass-yellow transition-all duration-500">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-white/70 text-sm tracking-tight">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 p-10 glass rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 border-yellow-400/20">
              <div>
                <p className="text-yellow-400 font-black uppercase tracking-widest text-[10px] mb-2">Ready to travel?</p>
                <p className="text-3xl font-display font-black leading-none">Get a custom quote today</p>
              </div>
              <a 
                href="tel:8219769045"
                className="w-full md:w-auto bg-yellow-400 text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/10 text-center"
              >
                CALL: 8219769045
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
