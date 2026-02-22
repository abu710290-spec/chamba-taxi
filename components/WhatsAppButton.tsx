'use client';

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href="https://wa.me/918219769045"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 sm:bottom-8 sm:right-8 z-50 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl shadow-green-400/50 flex items-center justify-center group"
    >
      <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap font-bold">
        Book on WhatsApp
      </span>
    </motion.a>
  );
}
