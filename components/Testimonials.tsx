'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    text: "Best taxi service in Chamba. The driver was very professional and knew the mountain roads perfectly. Highly recommended for family trips.",
    rating: 5
  },
  {
    name: "Priya Verma",
    location: "Chandigarh",
    text: "Booked a trip to Khajjiar and Dalhousie. The car was clean and the service was on time. Very reasonable prices compared to others.",
    rating: 5
  },
  {
    name: "Amit Gupta",
    location: "Amritsar",
    text: "Excellent experience from Chamba to Amritsar. Safe driving and very polite staff. Will definitely book again.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 glass-yellow rounded-full mb-4 sm:mb-6"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Testimonials</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter mb-6 sm:mb-8 leading-none">
            WHAT OUR <span className="text-yellow-400">CLIENTS SAY</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[3rem] relative group hover:glass-yellow transition-all duration-500"
            >
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400/20 absolute top-6 right-6 sm:top-10 sm:right-10 group-hover:text-yellow-400 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-white/60 font-medium leading-relaxed mb-6 sm:mb-10 italic">
                &quot;{item.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-black text-xl">
                  {item.name[0]}
                </div>
                <div>
                  <p className="font-display font-black text-xl leading-none mb-1">{item.name}</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-white/30">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
