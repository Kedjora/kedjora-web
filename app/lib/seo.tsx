import type { Metadata } from 'next';

// ==================== SEO CONSTANTS ====================

export const SITE_CONFIG = {
  name: 'KEDJORA',
  tagline: 'Jasa Pembuatan Website & Aplikasi',
  url: 'https://kedjora.id',
  locale: 'id_ID',
  twitterHandle: '@kedjora',
  email: 'hello@kedjora.id',
  phone: '+62 857-3382-0022',
  address: {
    street: 'Jl. Imam Bonjol No. 218',
    city: 'Kediri',
    region: 'Jawa Timur',
    postalCode: '64122',
    country: 'ID',
  },
  foundingDate: '2025',
  // Absolute URLs for proper social sharing & JSON-LD
  logo: 'https://kedjora.id/logo.png',
  ogImage: 'https://kedjora.id/og-image.png',
};

// ==================== VERIFICATION & EXTERNAL RESOURCES ====================

export const VERIFICATION = {
  google: '', // Google Search Console verification code
  bing: '',   // Bing Webmaster verification code
  yandex: '', // Yandex verification code (optional)
};

export const PRECONNECT_DOMAINS = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://cdn.jsdelivr.net',
];

// ==================== BASE METADATA ====================

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: 'Jasa pembuatan website profesional, aplikasi mobile, dan bot automasi. Wujudkan ide digitalmu bersama KEDJORA - Digital Agency terpercaya di Indonesia.',
  keywords: [
    'jasa pembuatan website', 'jasa pembuatan aplikasi', 'jasa website murah',
    'jasa pembuatan website profesional', 'jasa bikin website', 'jasa web developer',
    'jasa pembuatan aplikasi android', 'jasa pembuatan aplikasi mobile',
    'bot WhatsApp', 'bot Telegram', 'automasi bisnis',
    'UI/UX design', 'Next.js', 'React', 'Flutter',
    'digital agency Indonesia', 'software house Kediri', 'web developer Kediri'
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: { email: false, address: false, telephone: false },
  // Verification meta tags - uncomment and add your codes when ready
  // verification: {
  //   google: VERIFICATION.google,
  //   yandex: VERIFICATION.yandex,
  //   other: { 'msvalidate.01': VERIFICATION.bing },
  // },
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: 'Jasa pembuatan website profesional, aplikasi mobile, dan bot automasi terpercaya di Indonesia.',
    images: [{
      url: SITE_CONFIG.ogImage,
      width: 1200,
      height: 630,
      alt: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: 'Jasa pembuatan website profesional, aplikasi mobile, dan bot automasi terpercaya di Indonesia.',
    creator: SITE_CONFIG.twitterHandle,
    site: SITE_CONFIG.twitterHandle,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: SITE_CONFIG.url },
  category: 'technology',
};

// ==================== JSON-LD SCHEMAS ====================

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: { '@type': 'ImageObject', url: SITE_CONFIG.logo, width: 512, height: 512 },
    description: 'Jasa pembuatan website profesional, aplikasi mobile, dan bot automasi terpercaya di Indonesia.',
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    foundingDate: SITE_CONFIG.foundingDate,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.region,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    sameAs: [
      'https://github.com/kedjora',
      'https://linkedin.com/company/kedjora',
      'https://twitter.com/kedjora',
      'https://instagram.com/kedjora',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phone,
      contactType: 'layanan pelanggan',
      availableLanguage: ['Indonesian', 'English'],
    },
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: baseMetadata.description,
    publisher: { '@id': `${SITE_CONFIG.url}/#organization` },
    inLanguage: 'id-ID',
  };
}

export function generateWebPageSchema(page: { title: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_CONFIG.url}${page.path}/#webpage`,
    url: `${SITE_CONFIG.url}${page.path}`,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': `${SITE_CONFIG.url}/#website` },
    about: { '@id': `${SITE_CONFIG.url}/#organization` },
    inLanguage: 'id-ID',
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path}`,
    })),
  };
}

export function generateServiceSchema(services: Array<{ name: string; description: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: { '@id': `${SITE_CONFIG.url}/#organization` },
      },
    })),
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    image: SITE_CONFIG.logo,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.region,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: -7.8132455, longitude: 112.024579 },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '17:00',
    },
    priceRange: '$$',
    areaServed: { '@type': 'Place', name: 'Worldwide' },
  };
}

// BlogPosting Schema for individual blog articles
export interface BlogPostSchema {
  title: string;
  description: string;
  slug: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: { name: string; url?: string };
}

export function generateBlogPostingSchema(post: BlogPostSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SITE_CONFIG.url}/blog/${post.slug}/#article`,
    headline: post.title,
    description: post.description,
    image: post.image || SITE_CONFIG.ogImage,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      '@type': 'Person',
      name: post.author?.name || SITE_CONFIG.name,
      url: post.author?.url || SITE_CONFIG.url,
    },
    publisher: { '@id': `${SITE_CONFIG.url}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_CONFIG.url}/blog/${post.slug}` },
    inLanguage: 'id-ID',
  };
}

// Blog listing schema
export function generateBlogSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_CONFIG.url}/blog/#blog`,
    name: `Blog ${SITE_CONFIG.name}`,
    description: 'Artikel dan insight seputar web development, aplikasi mobile, automasi, dan teknologi terkini.',
    url: `${SITE_CONFIG.url}/blog`,
    publisher: { '@id': `${SITE_CONFIG.url}/#organization` },
    inLanguage: 'id-ID',
  };
}

// Helper component to render JSON-LD scripts
export function JsonLd({ data }: { data: object | object[] }) {
  const jsonLdArray = Array.isArray(data) ? data : [data];
  return (
    <>
      {jsonLdArray.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

// ==================== CENTRALIZED FAQ DATA ====================

export const HOMEPAGE_FAQS = [
  {
    question: "Layanan apa saja yang ditawarkan KEDJORA?",
    answer: "Kami menyediakan jasa pembuatan website profesional, aplikasi mobile (Android & iOS), bot automasi (WhatsApp/Telegram), dan desain UI/UX."
  },
  {
    question: "Berapa lama waktu pengerjaan project?",
    answer: "Tergantung kompleksitas. Website sederhana 2-4 minggu, aplikasi kompleks bisa 2-3 bulan. Kami akan memberikan timeline detail saat konsultasi."
  },
  {
    question: "Apakah bisa konsultasi gratis dulu?",
    answer: "Tentu! Kami menyediakan konsultasi gratis untuk membahas kebutuhan project Anda sebelum memulai."
  },
  {
    question: "Teknologi apa yang digunakan?",
    answer: "Kami menggunakan teknologi modern seperti React, Next.js, Flutter, Node.js, Python, dan berbagai layanan cloud."
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer: "Pembayaran dilakukan bertahap: 50% di awal dan 50% setelah project selesai. Untuk project besar, bisa dengan milestone payment."
  },
];

export const CONTACT_FAQS = [
  {
    question: "Apakah ada biaya konsultasi?",
    answer: "Tidak, konsultasi awal gratis! Kami akan membahas kebutuhan project Anda tanpa biaya apapun."
  },
  {
    question: "Berapa kisaran harga project?",
    answer: "Harga mulai dari Rp 2 juta untuk website sederhana hingga Rp 50 juta+ untuk aplikasi kompleks. Kami menyesuaikan dengan budget Anda."
  },
  {
    question: "Apakah bisa revisi?",
    answer: "Tentu! Setiap project mendapat jatah revisi. Kami pastikan hasil akhir sesuai dengan keinginan Anda."
  },
  {
    question: "Bagaimana proses pengerjaannya?",
    answer: "Diskusi kebutuhan → Proposal & Quotation → Deal & DP → Pengerjaan → Review → Selesai & Pelunasan."
  },
];
