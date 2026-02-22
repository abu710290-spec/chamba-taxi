'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Menu, X, Car } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Places', href: '/places' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass shadow-lg' : 'sm:py-6 glass shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4 min-w-0 w-full">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
          <div className="bg-yellow-400 p-1.5 sm:p-2 rounded-lg sm:rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-yellow-400/20 shrink-0">
            <Car className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black" />
          </div>
          <span className="text-lg sm:text-2xl lg:text-3xl font-display font-black tracking-tighter truncate">
            CHAMBA<span className="text-yellow-400">TAXI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-10 min-w-0 shrink">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.15em] lg:tracking-[0.25em] hover:text-yellow-400 transition-colors whitespace-nowrap shrink-0"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:8219769045"
            className="flex items-center gap-1.5 lg:gap-2 bg-yellow-400 text-black px-3 py-2 lg:px-5 lg:py-2.5 rounded-lg lg:rounded-xl text-[8px] lg:text-[10px] font-black uppercase tracking-widest hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/10 shrink-0 whitespace-nowrap"
          >
            <Phone className="w-3 h-3 lg:w-4 lg:h-4 shrink-0" />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 glass m-2 rounded-xl text-yellow-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu - fixed overlay so it's not clipped by main overflow */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 right-0 top-[57px] sm:top-[65px] z-50 md:hidden max-h-[calc(100vh-65px)] overflow-y-auto border-t border-white/10 shadow-2xl bg-black"
            >
              <div className="p-5 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white text-lg font-display font-black uppercase tracking-widest py-3 px-2 border-b border-white/10 hover:text-yellow-400 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4 mt-2">
                  <a
                    href="tel:8219769045"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 bg-yellow-400 text-black py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-yellow-300 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/918219769045"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest bg-white/10 border border-white/20 hover:bg-white/15 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-green-400" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
