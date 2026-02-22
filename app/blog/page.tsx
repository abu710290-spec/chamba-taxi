import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogImage } from '@/lib/images';

const allBlogs = [
  { title: "Top 5 Places to Visit in Chamba This Summer", excerpt: "Discover the hidden gems of Chamba that you must visit during your next trip. From the lush meadows of Khajjiar to the serene Chamera Lake.", date: "Oct 12, 2023", category: "Travel Guide" },
  { title: "How to Plan a Chamba to Manali Road Trip", excerpt: "A complete guide on routes, stops, and what to expect during your journey from Chamba to Manali. Tips on best time to travel and road conditions.", date: "Nov 05, 2023", category: "Road Trip" },
  { title: "Safety Tips for Traveling in Himachal Mountains", excerpt: "Essential tips for a safe and enjoyable journey through the winding roads of Himachal. Learn about mountain driving and altitude sickness.", date: "Dec 20, 2023", category: "Safety" },
  { title: "The Spiritual Journey: Manimahesh Yatra Guide", excerpt: "Everything you need to know about the sacred Manimahesh Yatra. Best time to visit, how to prepare, and travel arrangements.", date: "Jan 15, 2024", category: "Pilgrimage" },
  { title: "Exploring the Local Cuisine of Chamba", excerpt: "A food lover's guide to Chamba. Discover the traditional dishes like Chamba Madra and where to find the best local food.", date: "Feb 10, 2024", category: "Food" }
];

export default function BlogPage() {
  return (
    <main className="min-w-0 overflow-x-hidden bg-[#0a0a0a]">
      <Navbar />
      <div className="pt-48 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="inline-block px-4 py-1.5 glass-yellow rounded-full mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400">Our Journal</span>
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 leading-none">
              TRAVEL <span className="text-yellow-400">BLOG</span>
            </h1>
            <p className="text-xl text-white/50 max-w-3xl mx-auto font-medium tracking-tight">
              Stay updated with the latest travel stories, guides, and tips from the heart of Chamba.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {allBlogs.map((blog, i) => (
              <article key={i} className="glass rounded-[4rem] overflow-hidden shadow-2xl group border-white/5">
                <div className="relative h-[450px]">
                  <Image
                    src={getBlogImage(i + 1, false)}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-8 left-8 glass-yellow px-6 py-2 rounded-full text-[10px] font-black text-yellow-400 uppercase tracking-widest shadow-xl">
                    {blog.category}
                  </div>
                </div>
                <div className="p-16">
                  <p className="text-white/20 text-[10px] font-black uppercase tracking-widest mb-6">{blog.date}</p>
                  <h2 className="text-4xl font-display font-black mb-8 group-hover:text-yellow-400 transition-colors leading-none">
                    {blog.title}
                  </h2>
                  <p className="text-white/40 text-xl mb-12 font-medium leading-relaxed tracking-tight">
                    {blog.excerpt}
                  </p>
                  <Link 
                    href="#" 
                    className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400 border-b-2 border-yellow-400/20 pb-2 hover:border-yellow-400 transition-all"
                  >
                    Read Full Story
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
