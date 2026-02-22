'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Users, Briefcase, Info } from 'lucide-react';
import { getImage } from '@/lib/images';

const fleet = [
  {
    name: "Sedan (Swift Dzire)",
    capacity: "4+1 Seater",
    description: "Perfect for small families and business trips. Comfortable and economical.",
    imageKey: 'fleetSedan' as const,
  },
  {
    name: "SUV (Innova Crysta)",
    capacity: "6+1 / 7+1 Seater",
    description: "Premium comfort for long journeys. Plenty of space for luggage and family.",
    imageKey: 'fleetSuv' as const,
  },
  {
    name: "Tempo Traveller",
    capacity: "12+1 / 17+1 Seater",
    description: "Ideal for large groups and wedding parties. Spacious and air-conditioned.",
    imageKey: 'fleetTempo' as const,
  }
];

export default function FleetSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 glass-yellow rounded-full mb-6"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Our Fleet</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter mb-6 sm:mb-8 leading-none">
            CHOOSE YOUR <span className="text-yellow-400">RIDE</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-medium">
            We maintain a diverse fleet of well-serviced vehicles to suit your every travel need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {fleet.map((car, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-[3rem] overflow-hidden group border-white/5"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={getImage(car.imageKey)}
                  alt={car.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                />
                <div className="absolute top-6 right-6 glass px-4 py-2 rounded-full text-[10px] font-black text-yellow-400 uppercase tracking-widest">
                  {car.capacity}
                </div>
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl font-display font-black mb-3 sm:mb-4 leading-none">{car.name}</h3>
                <p className="text-white/40 mb-8 font-medium tracking-tight leading-relaxed">
                  {car.description}
                </p>
                <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs font-bold text-white/60">AC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs font-bold text-white/60">Luggage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs font-bold text-white/60">Verified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
