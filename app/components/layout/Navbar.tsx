'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { type Locale } from '@/i18n/config';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;

  const navLinks = [
    { name: t('home'), path: `/${locale}` },
    { name: t('services'), path: `/${locale}/services` },
    { name: 'Portfolio', path: `/${locale}/portfolio` },
    { name: 'Blog', path: `/${locale}/blog` },
    { name: t('about'), path: `/${locale}/about` },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    // Remove locale prefix for comparison
    const pathWithoutLocale = pathname.replace(/^\/(id|en)/, '');
    const targetWithoutLocale = path.replace(/^\/(id|en)/, '');

    if (targetWithoutLocale === '' || targetWithoutLocale === '/') {
      return pathWithoutLocale === '' || pathWithoutLocale === '/';
    }
    return pathWithoutLocale.startsWith(targetWithoutLocale);
  };

  // Get path without locale for language switching
  const getPathWithNewLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(id|en)/, '');
    return `/${newLocale}${pathWithoutLocale || ''}`;
  };

  // Toggle to the other locale
  const otherLocale = locale === 'id' ? 'en' : 'id';
  const toggleLocalePath = getPathWithNewLocale(otherLocale);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`pointer-events-auto w-full backdrop-blur-md border transition-all duration-500 relative overflow-hidden ${
            // Mobile Menu Open State
            isOpen
                ? 'rounded-4xl max-w-lg bg-slate-900 border-slate-800 shadow-2xl'
                :
            // Scrolled State (Compact Pill)
            scrolled
                ? 'rounded-full max-w-3xl bg-slate-900/90 border-slate-700/50 shadow-2xl shadow-black/50'
                :
            // Default State (Wide)
            'rounded-full max-w-5xl bg-slate-900/80 border-slate-700/50 shadow-xl shadow-black/20'
        }`}
      >
        {/* Main Bar Content */}
        <motion.div
            layout="position"
            className={`px-4 sm:px-6 flex justify-between items-center relative z-20 transition-all duration-300 ${scrolled && !isOpen ? 'py-2' : 'py-3'}`}
        >

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0" onClick={() => setIsOpen(false)}>
            <motion.div layout>
              <Image
                src="/logo.png"
                alt="KEDJORA Logo"
                width={40}
                height={40}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
            <motion.span
                layout
                className={`text-lg font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white to-slate-300 ${scrolled && !isOpen ? 'hidden sm:block' : 'block'}`}
            >
              KEDJORA
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className={`flex items-center gap-1 rounded-full p-1 transition-all duration-300 ${scrolled ? 'bg-transparent border-transparent' : 'bg-slate-800/50 border border-slate-700/50'}`}>
                {navLinks.map((link) => (
                <Link
                    key={link.path}
                    href={link.path}
                    className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 z-10 ${
                        isActive(link.path)
                        ? 'text-white'
                        : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                    }`}
                >
                    {isActive(link.path) && (
                    <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-linear-to-r from-primary-500 to-blue-600 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                    )}
                    {link.name}
                </Link>
                ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 shrink-0">
             {/* Language Switcher (Desktop) - Direct Toggle */}
             <Link
               href={toggleLocalePath}
               className={`hidden md:flex items-center gap-1.5 rounded-full bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all ${scrolled ? 'px-2.5 py-1.5 text-xs' : 'px-3 py-2 text-sm'}`}
               title={locale === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
             >
               <Globe size={scrolled ? 14 : 16} />
               <span className="uppercase font-medium">{otherLocale}</span>
             </Link>

             {/* CTA Button (Desktop) */}
             <Link
                href={`/${locale}/contact`}
                className={`hidden md:flex items-center gap-2 rounded-full bg-white text-slate-900 font-bold hover:scale-105 transition-all ${scrolled ? 'px-4 py-2 text-xs' : 'px-5 py-2.5 text-sm'}`}
             >
                {t('contact')}
             </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden rounded-full bg-slate-800 text-white hover:bg-slate-700 flex items-center justify-center transition-colors ${scrolled ? 'w-8 h-8' : 'w-10 h-10'}`}
            >
              {isOpen ? <X size={20} /> : <Menu size={scrolled ? 16 : 20} />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu Content (Expandable) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden border-t border-slate-800/50 overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-2">
                {[...navLinks, { name: t('contact'), path: `/${locale}/contact` }].map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                        isActive(link.path)
                          ? 'bg-primary-500/10 text-primary-500 font-semibold'
                          : 'text-slate-300 hover:bg-slate-800'
                      }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      {link.name}
                      {isActive(link.path) && (
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                      )}
                    </div>
                  </Link>
                ))}

                {/* Mobile Language Switcher - Direct Toggle */}
                <div className="mt-2 pt-2 border-t border-slate-800/50">
                  <Link
                    href={toggleLocalePath}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Globe size={16} />
                      <span>{locale === 'id' ? 'Switch to English' : 'Ganti ke Indonesia'}</span>
                    </div>
                    <span className="uppercase font-bold text-primary-400">{otherLocale}</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

