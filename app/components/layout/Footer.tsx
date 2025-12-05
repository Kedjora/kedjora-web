'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone, ArrowUp, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Mail, href: 'mailto:hello@kedjora.id' },
  ];

  return (
    <footer className="bg-slate-950 pt-32 pb-10 border-t border-slate-800 relative overflow-hidden">
      {/* Background Decorations - Optimized */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[60px]" />
         <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[60px]" />
      </div>

      {/* Giant Text Watermark */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 pointer-events-none select-none w-full flex justify-center opacity-[0.05] z-0">
          <span className="text-[18vw] md:text-[14rem] font-black leading-none tracking-tighter text-white whitespace-nowrap">
              KEDJORA
          </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-20 mb-20">

          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Image
                src="/logo.png"
                alt="KEDJORA Logo"
                width={40}
                height={40}
                className="object-contain transition-all duration-300"
              />
              <span className="text-2xl font-bold tracking-tight text-white">
                KEDJORA
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Kami membangun pengalaman digital yang mendorong pertumbuhan. Dari kode kustom hingga alur kerja otomatis, kami membangun masa depan bisnis Anda.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-1"
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-8">Layanan</h4>
            <ul className="space-y-4">
              {['Pengembangan Web', 'Aplikasi Mobile', 'Bot Automasi', 'Desain UI/UX', 'Branding Digital'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary-500 transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white text-lg mb-8">Kontak</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-900/30 flex items-center justify-center shrink-0 text-primary-400">
                    <MapPin size={16} />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  Jl. Imam Bonjol No. 218, Kediri, <br /> Jawa Timur, Indonesia 64122
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-900/30 flex items-center justify-center shrink-0 text-primary-400">
                    <Phone size={16} />
                </div>
                <a href="tel:+6285733820022" className="text-slate-400 text-sm hover:text-primary-500 transition-colors">
                  +62 857-3382-0022
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-900/30 flex items-center justify-center shrink-0 text-primary-400">
                    <Mail size={16} />
                </div>
                <a href="mailto:hello@kedjora.id" className="text-slate-400 text-sm hover:text-primary-500 transition-colors">
                  hello@kedjora.id
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white text-lg mb-8">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Berlangganan untuk mendapatkan tren teknologi terbaru dan update KEDJORA. Tanpa spam, selamanya.
            </p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Alamat email"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all placeholder:text-slate-400 pr-12"
              />
              <button className="absolute right-2 top-2 bottom-2 w-10 bg-primary-500 hover:bg-primary-600 text-white rounded-lg flex items-center justify-center transition-colors shadow-lg shadow-primary-500/20">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 relative">

          <p className="text-slate-500 text-sm text-center md:text-left relative z-10">
            © {new Date().getFullYear()} KEDJORA Digital Agency. Hak cipta dilindungi.
          </p>

          <div className="flex items-center gap-8 relative z-10">
            <a href="#" className="text-sm text-slate-500 hover:text-primary-500 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="text-sm text-slate-500 hover:text-primary-500 transition-colors">Syarat Layanan</a>

            <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
                aria-label="Kembali ke Atas"
            >
                <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

