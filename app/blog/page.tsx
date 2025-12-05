import type { Metadata } from 'next';
import BlogPageContent from '@/components/pages/BlogPage';
import { JsonLd, generateBreadcrumbSchema, generateWebPageSchema, generateBlogSchema, SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Baca artikel terbaru seputar pembuatan website, aplikasi mobile, automasi, tips bisnis digital, dan tren teknologi.',
  openGraph: {
    title: 'Blog | KEDJORA',
    description: 'Artikel dan insight seputar web development, aplikasi mobile, dan teknologi.',
    url: `${SITE_CONFIG.url}/blog`,
  },
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={[
        generateWebPageSchema({ title: 'Blog', description: metadata.description as string, path: '/blog' }),
        generateBreadcrumbSchema([{ name: 'Beranda', path: '/' }, { name: 'Blog', path: '/blog' }]),
        generateBlogSchema(),
      ]} />
      <BlogPageContent />
    </>
  );
}

