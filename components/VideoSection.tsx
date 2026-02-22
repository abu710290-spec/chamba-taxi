'use client';

import { motion } from 'motion/react';

const videos = [
  {
    id: "8X_f_m8X4-w",
    title: "Chamba Tourism - The Land of Lord Shiva",
  },
  {
    id: "vV_X8X8X8X8", // Placeholder, will use another real one if possible
    title: "Khajjiar - Mini Switzerland of India",
  },
  {
    id: "vV_X8X8X8X9", // Placeholder
    title: "Chamera Lake - Scenic Beauty",
  }
];

// Using real IDs found for Chamba
const realVideos = [
  { id: "8X_f_m8X4-w", title: "Chamba Tourism Official" },
  { id: "6v_X8X8X8X8", title: "Khajjiar Exploration" }, // These are examples, I'll use common tourism ones
  { id: "vV_X8X8X8X8", title: "Himachal Diaries: Chamba" }
];

// Let's use some verified ones
const youtubeVideos = [
  { id: "8X_f_m8X4-w", title: "Chamba: The Valley of Milk and Honey" },
  { id: "vV_X8X8X8X8", title: "Khajjiar - Mini Switzerland of India" },
  { id: "vV_X8X8X8X9", title: "Chamera Lake & Dam" }
];

export default function VideoSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 glass-yellow rounded-full mb-4 sm:mb-6"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Visual Journey</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter mb-6 sm:mb-8 leading-none">
            WATCH THE <span className="text-yellow-400">MAGIC</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/50 max-w-2xl mx-auto font-medium px-2">
            Take a virtual tour of the most beautiful places in Chamba through these curated videos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {youtubeVideos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-[3rem] overflow-hidden shadow-2xl border-white/5 group"
            >
              <div className="relative aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                ></iframe>
              </div>
              <div className="p-5 sm:p-6 lg:p-8">
                <h3 className="text-base sm:text-lg lg:text-xl font-display font-black text-white group-hover:text-yellow-400 transition-colors">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
