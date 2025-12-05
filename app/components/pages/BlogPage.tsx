'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, Calendar, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import ContactCTA from '@/components/sections/ContactCTA';
import { useTranslations } from 'next-intl';
import { BLUR_DATA_URL } from '@/lib/constants';

interface BlogPost {
  id: string;
  titleKey: string;
  excerptKey: string;
  categoryKey: string;
  author: {
    name: string;
    avatar: string;
  };
  dateKey: string;
  readTime: number;
  image: string;
  featured?: boolean;
}

const blogPostsData: BlogPost[] = [
  {
    id: '1',
    titleKey: 'posts.nextjs.title',
    excerptKey: 'posts.nextjs.excerpt',
    categoryKey: 'engineering',
    author: { name: 'Alex Doe', avatar: 'https://ui-avatars.com/api/?name=Alex+Doe&background=0D8ABC&color=fff' },
    dateKey: 'posts.nextjs.date',
    readTime: 6,
    image: 'https://picsum.photos/1200/800?random=201',
    featured: true
  },
  {
    id: '2',
    titleKey: 'posts.glassmorphism.title',
    excerptKey: 'posts.glassmorphism.excerpt',
    categoryKey: 'design',
    author: { name: 'Sarah J.', avatar: 'https://ui-avatars.com/api/?name=Sarah+J&background=E91E63&color=fff' },
    dateKey: 'posts.glassmorphism.date',
    readTime: 4,
    image: 'https://picsum.photos/800/600?random=202'
  },
  {
    id: '3',
    titleKey: 'posts.automation.title',
    excerptKey: 'posts.automation.excerpt',
    categoryKey: 'automation',
    author: { name: 'Mike R.', avatar: 'https://ui-avatars.com/api/?name=Mike+R&background=22c55e&color=fff' },
    dateKey: 'posts.automation.date',
    readTime: 8,
    image: 'https://picsum.photos/800/600?random=203'
  },
  {
    id: '4',
    titleKey: 'posts.flutter.title',
    excerptKey: 'posts.flutter.excerpt',
    categoryKey: 'mobile',
    author: { name: 'Alex Doe', avatar: 'https://ui-avatars.com/api/?name=Alex+Doe&background=0D8ABC&color=fff' },
    dateKey: 'posts.flutter.date',
    readTime: 10,
    image: 'https://picsum.photos/800/600?random=204'
  },
  {
    id: '5',
    titleKey: 'posts.seo.title',
    excerptKey: 'posts.seo.excerpt',
    categoryKey: 'marketing',
    author: { name: 'Emily W.', avatar: 'https://ui-avatars.com/api/?name=Emily+W&background=F59E0B&color=fff' },
    dateKey: 'posts.seo.date',
    readTime: 5,
    image: 'https://picsum.photos/800/600?random=205'
  },
  {
    id: '6',
    titleKey: 'posts.nocode.title',
    excerptKey: 'posts.nocode.excerpt',
    categoryKey: 'business',
    author: { name: 'Sarah J.', avatar: 'https://ui-avatars.com/api/?name=Sarah+J&background=E91E63&color=fff' },
    dateKey: 'posts.nocode.date',
    readTime: 3,
    image: 'https://picsum.photos/800/600?random=206'
  }
];

const categoryKeys = ['all', 'engineering', 'design', 'automation', 'mobile', 'business'] as const;

const BlogPage: React.FC = () => {
  const t = useTranslations('blog');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = blogPostsData.find(p => p.featured);

  const getFilteredPosts = () => {
    return blogPostsData.filter(post => {
      const matchesCategory = activeCategory === 'all' || post.categoryKey === activeCategory;
      const title = t(post.titleKey).toLowerCase();
      const excerpt = t(post.excerptKey).toLowerCase();
      const matchesSearch = title.includes(searchQuery.toLowerCase()) || excerpt.includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch && !post.featured;
    });
  };

  const filteredPosts = getFilteredPosts();

  return (
    <div className="bg-slate-950 min-h-screen">

      {/* 1. Header & Featured Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[60px]" />
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[60px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 mb-8"
                >
                    <Sparkles size={14} className="text-primary-500" />
                    <span className="text-xs font-bold tracking-wide uppercase text-slate-300">
                        {t('badge')}
                    </span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                >
                    {t('title1')} <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-blue-600">{t('title2')}</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                >
                    {t('description')}
                </motion.p>
            </div>

            {featuredPost && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="relative w-full aspect-video md:aspect-21/9 rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl"
                >
                    <Image src={featuredPost.image} alt={t(featuredPost.titleKey)} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/50 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-primary-500 text-white text-xs font-bold uppercase tracking-wider">
                                {t('featured')}
                            </span>
                            <span className="text-slate-300 text-sm font-medium flex items-center gap-2">
                                <Calendar size={14} /> {t(featuredPost.dateKey)}
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-primary-400 transition-colors">
                            {t(featuredPost.titleKey)}
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 line-clamp-2 md:line-clamp-none max-w-2xl">
                            {t(featuredPost.excerptKey)}
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <Image src={featuredPost.author.avatar} alt={featuredPost.author.name} width={40} height={40} className="rounded-full border-2 border-white/20" unoptimized />
                                <div className="text-sm">
                                    <p className="text-white font-bold">{featuredPost.author.name}</p>
                                    <p className="text-slate-400">{featuredPost.readTime} {t('readTime')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
      </section>

      {/* 2. Filter & Grid */}
      <section className="py-12 bg-slate-900 border-t border-slate-800 min-h-[800px]">
        <div className="container mx-auto px-6">

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
                <div className="flex flex-wrap justify-center gap-2">
                    {categoryKeys.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                                activeCategory === cat
                                ? 'bg-white text-slate-900 border-white'
                                : 'bg-transparent text-slate-500 hover:text-white border-slate-700'
                            }`}
                        >
                            {t(`categories.${cat}`)}
                        </button>
                    ))}
                </div>

                <div className="relative w-full md:w-80">
                    <input
                        type="text"
                        placeholder={t('searchPlaceholder')}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-full bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all text-sm text-white placeholder:text-slate-400"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredPosts.map((post) => (
                        <motion.div
                            layout
                            key={post.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="group flex flex-col h-full bg-slate-950 rounded-4xl border border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
                        >
                            <div className="relative aspect-4/3 overflow-hidden">
                                <Image src={post.image} alt={t(post.titleKey)} fill className="object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-slate-900/95 rounded-lg text-xs font-bold uppercase tracking-wider text-primary-400">
                                    {t(`categories.${post.categoryKey}`)}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col grow">
                                <div className="flex items-center gap-3 text-xs font-medium text-slate-400 mb-4">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {t(post.dateKey)}</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime} {t('readTime')}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                                    {t(post.titleKey)}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 grow line-clamp-3">
                                    {t(post.excerptKey)}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                                    <div className="flex items-center gap-2">
                                        <Image src={post.author.avatar} alt={post.author.name} width={32} height={32} className="rounded-full" unoptimized />
                                        <span className="text-sm font-bold text-slate-300">{post.author.name}</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-4">
                        <Search size={24} className="text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{t('noArticles')}</h3>
                    <p className="text-slate-500">{t('adjustSearch')}</p>
                </div>
            )}

            {filteredPosts.length > 0 && (
                <div className="mt-16 text-center">
                    <button className="px-8 py-3 rounded-full border border-slate-800 text-slate-400 font-semibold hover:bg-slate-800 transition-colors inline-flex items-center gap-2">
                        {t('loadMore')} <ChevronRight size={16} />
                    </button>
                </div>
            )}

        </div>
      </section>

      {/* 3. Newsletter CTA - Optimized */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[60px]" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[60px]" />

         <div className="container mx-auto px-6 relative z-10 text-center">
             <div className="max-w-2xl mx-auto">
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('newsletter.title')}</h2>
                 <p className="text-slate-300 mb-10 text-lg">
                     {t('newsletter.description')}
                 </p>

                 <form className="flex flex-col sm:flex-row gap-4">
                     <input
                        type="email"
                        placeholder={t('newsletter.placeholder')}
                        className="grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                     />
                     <button className="px-8 py-4 rounded-xl bg-primary-500 text-white font-bold hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/20">
                         {t('newsletter.subscribe')}
                     </button>
                 </form>
                 <p className="text-xs text-slate-500 mt-4">{t('newsletter.disclaimer')}</p>
             </div>
         </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default BlogPage;

