import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getPlaceImageByIndex } from '@/lib/images';

const allPlaces = [
  { name: "Khajjiar", description: "Known as the 'Mini Switzerland of India', Khajjiar is a small plateau with a small lake in the center. It's surrounded by dense pine and deodar forests." },
  { name: "Chamera Lake", description: "A beautiful man-made lake on the Ravi River. It's a popular spot for boating and water sports, offering stunning views of the surrounding hills." },
  { name: "Laxmi Narayan Temple", description: "The largest and oldest temple complex in Chamba, built in the 10th century. It features six temples dedicated to Lord Shiva and Lord Vishnu." },
  { name: "Kalatop Wildlife Sanctuary", description: "A high-altitude wildlife sanctuary home to various species like the Himalayan black bear, barking deer, and numerous birds." },
  { name: "Manimahesh Lake", description: "A sacred lake situated at an altitude of 4,080 meters. It's a major pilgrimage site dedicated to Lord Shiva." },
  { name: "Bharmour", description: "The ancient capital of Chamba, famous for its 84 temples (Chaurasi Temples) and as a base for the Manimahesh Yatra." }
];

export default function PlacesPage() {
  return (
    <main className="min-w-0 overflow-x-hidden">
      <Navbar />
      <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
          <div className="text-center mb-12 sm:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tight mb-4 sm:mb-6">
              DESTINATIONS <span className="text-yellow-400">IN CHAMBA</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-3xl mx-auto font-medium">
              Explore the most beautiful and sacred places in and around Chamba. 
              We provide comfortable taxi services to all these locations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {allPlaces.map((place, i) => (
              <div key={i} className="glass rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 hover:glass-yellow transition-all group min-w-0">
                <div className="relative h-56 sm:h-64">
                  <Image
                    src={getPlaceImageByIndex(i)}
                    alt={place.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 sm:p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-display font-bold mb-3 sm:mb-4">{place.name}</h3>
                  <p className="text-white/50 text-sm sm:text-base mb-4 sm:mb-6 font-medium line-clamp-3">
                    {place.description}
                  </p>
                  <a 
                    href={`https://wa.me/918219769045?text=I want to book a taxi for ${place.name}`}
                    className="inline-flex items-center gap-2 bg-yellow-400 text-black px-5 py-2.5 rounded-xl font-bold hover:bg-yellow-300 transition-all text-sm"
                  >
                    Book Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
