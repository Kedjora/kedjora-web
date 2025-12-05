import type { Metadata } from 'next';
import AboutPageContent from '@/components/pages/AboutPage';
import { JsonLd, generateBreadcrumbSchema, generateWebPageSchema, SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Kenali KEDJORA lebih dekat: visi, misi, nilai-nilai, dan tim profesional di balik solusi digital kami.',
  openGraph: {
    title: 'Tentang Kami | KEDJORA',
    description: 'Cerita, visi misi, dan tim profesional KEDJORA digital agency.',
    url: `${SITE_CONFIG.url}/about`,
  },
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[
        generateWebPageSchema({ title: 'Tentang Kami', description: metadata.description as string, path: '/about' }),
        generateBreadcrumbSchema([{ name: 'Beranda', path: '/' }, { name: 'Tentang Kami', path: '/about' }]),
      ]} />
      <AboutPageContent />
    </>
  );
}

