'use client';

import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';

const routes = [
  { from: "Chamba", to: "Delhi", time: "12-14 Hours", price: "Discuss on Call" },
  { from: "Chamba", to: "Chandigarh", time: "8-9 Hours", price: "Discuss on Call" },
  { from: "Chamba", to: "Pathankot", time: "3-4 Hours", price: "Discuss on Call" },
  { from: "Chamba", to: "Amritsar", time: "5-6 Hours", price: "Discuss on Call" },
  { from: "Chamba", to: "Dharamshala", time: "4-5 Hours", price: "Discuss on Call" },
  { from: "Chamba", to: "Manali", time: "10-12 Hours", price: "Discuss on Call" }
];

export default function PopularRoutes() {
  return (
    <section id="popular-routes" className="py-10 sm:py-14 lg:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 glass-yellow rounded-full mb-4 sm:mb-6"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Popular Routes</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter leading-none mb-4 sm:mb-6">
              MOST BOOKED <br />
              <span className="text-yellow-400">JOURNEYS</span>
            </h2>
            <p className="text-xl text-white/50 font-medium">
              We provide regular taxi services on these popular routes with experienced mountain drivers.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass p-5 sm:p-6 lg:p-8 rounded-[2rem] sm:rounded-[2.5rem] group hover:glass-yellow transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 glass rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-white/30">From</p>
                      <p className="text-base sm:text-xl font-display font-black truncate">{route.from}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-white/20 group-hover:text-yellow-400 transition-colors" />
                  <div className="flex flex-col items-end shrink-0">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/30">To</p>
                    <p className="text-base sm:text-xl font-display font-black text-yellow-400">{route.to}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-white/5">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/30">Est. Time</p>
                    <p className="font-bold text-sm">{route.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/30">Price</p>
                    <p className="font-bold text-sm text-yellow-400">{route.price}</p>
                  </div>
                </div>
              </div>
              <a 
                href={`https://wa.me/918219769045?text=I want to book a taxi from ${route.from} to ${route.to}`}
                className="mt-8 w-full bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all text-center"
              >
                Book This Route
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
