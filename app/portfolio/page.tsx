import type { Metadata } from 'next';
import PortfolioPageContent from '@/components/pages/PortfolioPage';
import { JsonLd, generateBreadcrumbSchema, generateWebPageSchema, SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Lihat hasil karya terbaik kami: website profesional, aplikasi mobile, bot automasi, dan desain kreatif untuk berbagai klien.',
  openGraph: {
    title: 'Portfolio | KEDJORA',
    description: 'Showcase project website, aplikasi mobile, dan bot automasi terbaik kami.',
    url: `${SITE_CONFIG.url}/portfolio`,
  },
  alternates: { canonical: `${SITE_CONFIG.url}/portfolio` },
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={[
        generateWebPageSchema({ title: 'Portfolio', description: metadata.description as string, path: '/portfolio' }),
        generateBreadcrumbSchema([{ name: 'Beranda', path: '/' }, { name: 'Portfolio', path: '/portfolio' }]),
      ]} />
      <PortfolioPageContent />
    </>
  );
}

