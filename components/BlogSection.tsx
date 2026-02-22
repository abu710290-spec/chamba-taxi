'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogImage } from '@/lib/images';

const blogs = [
  { title: "Top 5 Places to Visit in Chamba This Summer", excerpt: "Discover the hidden gems of Chamba that you must visit during your next trip...", date: "Oct 12, 2023" },
  { title: "How to Plan a Chamba to Manali Road Trip", excerpt: "A complete guide on routes, stops, and what to expect during your journey...", date: "Nov 05, 2023" },
  { title: "Safety Tips for Traveling in Himachal Mountains", excerpt: "Essential tips for a safe and enjoyable journey through the winding roads of Himachal...", date: "Dec 20, 2023" }
];

export default function BlogSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 glass-yellow rounded-full mb-4 sm:mb-6"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Our Journal</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter mb-6 sm:mb-8 leading-none">
            TRAVEL <span className="text-yellow-400">INSIGHTS</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/50 font-medium tracking-tight px-2">
            Read our latest articles about traveling in Chamba and beyond. 
            Get tips, guides, and inspiration for your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {blogs.map((blog, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative h-56 sm:h-64 lg:h-72 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden mb-6 sm:mb-8 shadow-2xl border border-white/5">
                <Image
                  src={getBlogImage(i + 1, true)}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full text-[10px] font-black text-yellow-400 uppercase tracking-widest">
                  {blog.date}
                </div>
              </div>
              <h3 className="text-3xl font-display font-black mb-4 group-hover:text-yellow-400 transition-colors leading-tight">
                {blog.title}
              </h3>
              <p className="text-white/40 mb-6 line-clamp-2 font-medium tracking-tight">
                {blog.excerpt}
              </p>
              <Link href="/blog" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400 border-b border-yellow-400/20 pb-2 hover:border-yellow-400 transition-all">
                Read More
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
