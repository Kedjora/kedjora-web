'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { BLUR_AVATAR_URL } from '@/lib/constants';

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function ChatWidget() {
  const t = useTranslations('chatWidget');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Delay render 2 detik untuk prioritas konten utama
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-60 flex flex-col items-end gap-4 pointer-events-none"
        >

      {/* 1. Chat Dialog Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="pointer-events-auto w-[360px] bg-slate-900 rounded-4xl shadow-2xl border border-slate-800 overflow-hidden mb-2 origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-slate-900 p-6 flex justify-between items-start relative overflow-hidden">
              {/* Header Background Effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500 rounded-full blur-[50px] opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-[50px] opacity-30"></div>

              <div className="relative z-10 flex gap-4 items-center">
                <div className="relative">
                  <div className="w-12 h-12 bg-white rounded-full p-1 shadow-lg relative overflow-hidden">
                    <Image src="https://ui-avatars.com/api/?name=Agent&background=0D8ABC&color=fff" alt="Avatar KEDJORA Support Team - Tim dukungan pelanggan siap membantu via WhatsApp" fill className="rounded-full object-cover" loading="lazy" placeholder="blur" blurDataURL={BLUR_AVATAR_URL} />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#25D366] rounded-full border-[3px] border-slate-900"></div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">{t('supportTeam')}</h3>
                  <p className="text-slate-400 text-xs font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse"></span>
                    {t('onlineNow')}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all relative z-10"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 bg-slate-950">
              <div className="bg-slate-900 p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-800 text-sm text-slate-300 mb-6 leading-relaxed relative">
                <span className="absolute -left-2 -top-2 w-4 h-4 bg-slate-900 border-l border-t border-slate-800 transform -rotate-45"></span>
                {t('greeting')}
              </div>

              <a
                href="https://wa.me/6285733820022"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                {t('startChat')}
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-center text-[10px] text-slate-400 mt-4">
                {t('responseTime')}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Tooltip Pointer (Only show when closed) */}
      <AnimatePresence>
        {!isChatOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 1 }}
            className="pointer-events-auto bg-slate-800 text-white px-4 py-2.5 rounded-2xl rounded-br-none shadow-xl border border-slate-700 font-bold text-sm flex items-center gap-2 mb-2 mr-2 relative z-50 animate-bounce"
            style={{ animationDuration: '3s' }}
          >
            {t('tooltip')}
            <div className="absolute -bottom-1.5 right-0 w-4 h-4 bg-slate-800 transform rotate-45 border-b border-r border-slate-700 clip-path-polygon"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Main Toggle Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className={`pointer-events-auto relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 z-50 group ${isChatOpen ? 'bg-slate-900 rotate-90' : 'bg-[#25D366] hover:scale-110 hover:rotate-12'}`}
      >
        {/* Ping animation ring */}
        {!isChatOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping duration-1000"></span>
        )}

        {isChatOpen ? <X size={28} /> : (
          <WhatsAppIcon className="w-8 h-8" />
        )}
      </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
