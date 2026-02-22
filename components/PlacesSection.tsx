'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getPlaceImageByIndex } from '@/lib/images';

const places = [
  { name: "Khajjiar", description: "The Mini Switzerland of India, a beautiful glade with a lake." },
  { name: "Chamera Lake", description: "A stunning man-made reservoir offering boating and scenic views." },
  { name: "Laxmi Narayan Temple", description: "Ancient 10th-century temple complex with intricate carvings." },
  { name: "Kalatop Wildlife Sanctuary", description: "Dense deodar forests and diverse wildlife with panoramic views." }
];

export default function PlacesSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 glass-yellow rounded-full mb-4 sm:mb-6"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Destinations</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter mb-6 sm:mb-8 leading-none">
              EXPLORE THE <br />
              <span className="text-yellow-400">BEAUTY OF CHAMBA</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/50 font-medium tracking-tight">
              Chamba is home to some of the most breathtaking landscapes in Himachal Pradesh. 
              Our local drivers know every hidden gem.
            </p>
          </div>
          <Link 
            href="/places" 
            className="group flex items-center gap-3 font-black text-[10px] uppercase tracking-[0.3em] text-yellow-400 border-b border-yellow-400/20 pb-2 hover:border-yellow-400 transition-all"
          >
            View All Places
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {places.map((place, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative min-h-[280px] h-[320px] sm:h-[360px] lg:h-[420px] xl:h-[500px] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 min-w-0"
            >
              <Image
                src={getPlaceImageByIndex(i)}
                alt={place.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-white mb-1 sm:mb-2 leading-tight">{place.name}</h3>
                <p className="text-xs sm:text-sm text-white/40 line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4 group-hover:line-clamp-none transition-all font-medium tracking-tight leading-snug">
                  {place.description}
                </p>
                <Link 
                  href={`https://wa.me/918219769045?text=I want to book a taxi for ${place.name}`}
                  className="inline-flex items-center gap-2 text-yellow-400 font-black text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0"
                >
                  Book Trip <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
