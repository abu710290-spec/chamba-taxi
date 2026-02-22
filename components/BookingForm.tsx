'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Phone, Send } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    date: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Taxi Booking Request*%0A%0A*Pickup:* ${formData.pickup}%0A*Drop:* ${formData.drop}%0A*Date:* ${formData.date}%0A*Contact:* ${formData.phone}`;
    window.open(`https://wa.me/918219769045?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-4xl lg:max-w-5xl mx-auto -mt-4 md:-mt-6 relative z-20 px-4 py-4 md:py-0"
    >
      <form 
        onSubmit={handleSubmit}
        className="glass p-4 md:p-5 lg:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(140px,1fr)_minmax(140px,1fr)_minmax(130px,1fr)_minmax(120px,1fr)_auto] gap-3 lg:gap-4 items-end"
      >
        <div className="space-y-1.5 min-w-0">
          <label className="text-[10px] uppercase tracking-[0.15em] font-bold text-yellow-400 ml-1.5">Pickup Location</label>
          <div className="relative min-w-[120px]">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yellow-400 shrink-0" />
            <input
              required
              type="text"
              placeholder="e.g. Chamba Market"
              className="w-full min-w-0 bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-3 text-sm placeholder:text-white/55 focus:outline-none focus:border-yellow-400 transition-colors"
              onChange={(e) => setFormData({...formData, pickup: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-1.5 min-w-0">
          <label className="text-[10px] uppercase tracking-[0.15em] font-bold text-yellow-400 ml-1.5">Drop Location</label>
          <div className="relative min-w-[120px]">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yellow-400 shrink-0" />
            <input
              required
              type="text"
              placeholder="e.g. Delhi Airport"
              className="w-full min-w-0 bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-3 text-sm placeholder:text-white/55 focus:outline-none focus:border-yellow-400 transition-colors"
              onChange={(e) => setFormData({...formData, drop: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-1.5 min-w-0">
          <label className="text-[10px] uppercase tracking-[0.15em] font-bold text-yellow-400 ml-1.5">Pickup Date</label>
          <div className="relative min-w-[120px]">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yellow-400 shrink-0" />
            <input
              required
              type="date"
              className="w-full min-w-0 bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors [color-scheme:dark]"
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-1.5 min-w-0">
          <label className="text-[10px] uppercase tracking-[0.15em] font-bold text-yellow-400 ml-1.5">Phone Number</label>
          <div className="relative min-w-[120px]">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yellow-400 shrink-0" />
            <input
              required
              type="tel"
              placeholder="Your Number"
              className="w-full min-w-0 bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-3 text-sm placeholder:text-white/55 focus:outline-none focus:border-yellow-400 transition-colors"
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-black py-3 rounded-xl text-sm hover:bg-yellow-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/20 shrink-0"
        >
          <Send className="w-4 h-4 shrink-0" />
          BOOK NOW
        </button>
      </form>
    </motion.div>
  );
}
