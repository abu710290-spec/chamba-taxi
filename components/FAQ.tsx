'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How do I book a taxi in Chamba?",
    answer: "You can book a taxi by calling us directly at 8219769045 or by sending a message on WhatsApp. We are available 24/7 for bookings."
  },
  {
    question: "Do you provide one-way taxi services?",
    answer: "Yes, we provide one-way drop services from Chamba to all major cities like Delhi, Chandigarh, Pathankot, and Amritsar."
  },
  {
    question: "Are your drivers experienced in mountain driving?",
    answer: "Absolutely. All our drivers are locals with years of experience driving on the winding roads of Himachal Pradesh and other hilly regions."
  },
  {
    question: "What types of vehicles do you have?",
    answer: "Our fleet includes Sedans (Swift Dzire), SUVs (Innova Crysta, Ertiga), and Tempo Travellers for larger groups."
  },
  {
    question: "Is there any hidden charge?",
    answer: "No, we believe in transparent pricing. All charges like toll taxes and parking are discussed upfront during the booking."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 glass-yellow rounded-full mb-4 sm:mb-6"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Support</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter mb-6 sm:mb-8 leading-none">
            FREQUENTLY ASKED <span className="text-yellow-400">QUESTIONS</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-[2rem] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-5 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-8 flex items-center justify-between gap-3 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-base sm:text-lg lg:text-xl font-display font-black tracking-tight">{faq.question}</span>
                {openIndex === i ? <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 shrink-0" /> : <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-white/20 shrink-0" />}
              </button>
              {openIndex === i && (
                <div className="px-5 sm:px-8 lg:px-10 pb-5 sm:pb-8 text-white/50 font-medium leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
