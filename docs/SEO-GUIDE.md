# 📚 Panduan Implementasi SEO - KEDJORA

Dokumentasi lengkap untuk menerapkan SEO di project KEDJORA menggunakan Next.js 16 App Router.

---

## 📁 Struktur File

```
app/
├── lib/
│   └── seo.tsx          # ⭐ Central SEO configuration
├── layout.tsx           # Root layout dengan JSON-LD global
├── page.tsx             # Homepage dengan FAQ & Service schema
├── blog/
│   └── page.tsx         # Blog listing dengan Blog schema
├── sitemap.ts           # Auto-generated sitemap
└── robots.ts            # Robots.txt configuration
```

---

## 🚀 Quick Start

### 1. Import yang Diperlukan

```tsx
import {
  // Metadata & Config
  SITE_CONFIG,
  baseMetadata,

  // JSON-LD Generators
  JsonLd,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
  generateBlogSchema,
  generateBlogPostingSchema,

  // Centralized Data
  HOMEPAGE_FAQS,
  CONTACT_FAQS,
} from '@/lib/seo';
```

### 2. Setup Metadata di Page

```tsx
// app/example/page.tsx
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Nama Halaman',  // Akan menjadi "Nama Halaman | KEDJORA"
  description: 'Deskripsi halaman untuk SEO (150-160 karakter ideal)',
  openGraph: {
    title: 'Nama Halaman | KEDJORA',
    description: 'Deskripsi untuk social sharing',
    url: `${SITE_CONFIG.url}/example`,
  },
  alternates: { canonical: `${SITE_CONFIG.url}/example` },
};
```

### 3. Tambahkan JSON-LD Schema

```tsx
export default function ExamplePage() {
  return (
    <>
      <JsonLd data={[
        generateWebPageSchema({
          title: 'Nama Halaman',
          description: 'Deskripsi halaman',
          path: '/example'
        }),
        generateBreadcrumbSchema([
          { name: 'Beranda', path: '/' },
          { name: 'Nama Halaman', path: '/example' }
        ]),
      ]} />
      <YourPageContent />
    </>
  );
}
```

---

## 📖 Schema Types & Penggunaan

### 1. WebPage Schema
Untuk setiap halaman standar.

```tsx
generateWebPageSchema({
  title: 'Judul Halaman',
  description: 'Deskripsi halaman',
  path: '/path-halaman'
})
```

### 2. Breadcrumb Schema
Untuk navigasi hierarki halaman.

```tsx
generateBreadcrumbSchema([
  { name: 'Beranda', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Web Development', path: '/services/web' }
])
```

### 3. FAQ Schema
Untuk halaman dengan pertanyaan umum.

```tsx
// Gunakan data terpusat
import { HOMEPAGE_FAQS, CONTACT_FAQS } from '@/lib/seo';

generateFAQSchema(HOMEPAGE_FAQS)
// atau
generateFAQSchema(CONTACT_FAQS)

// atau custom FAQ
generateFAQSchema([
  { question: 'Pertanyaan?', answer: 'Jawaban.' }
])
```

### 4. Service Schema
Untuk halaman layanan.

```tsx
generateServiceSchema([
  { name: 'Web Development', description: 'Deskripsi layanan...' },
  { name: 'Mobile App', description: 'Deskripsi layanan...' }
])
```

### 5. Blog Schema
Untuk halaman listing blog.

```tsx
generateBlogSchema()
```


### Verification Codes
Untuk verifikasi Search Console, uncomment dan isi di `seo.tsx`:

```tsx
export const VERIFICATION = {
  google: 'kode-dari-google-search-console',
  bing: 'kode-dari-bing-webmaster',
  yandex: 'kode-yandex-jika-perlu',
};
```

Lalu uncomment di `baseMetadata`:
```tsx
verification: {
  google: VERIFICATION.google,
  yandex: VERIFICATION.yandex,
  other: { 'msvalidate.01': VERIFICATION.bing },
},
```

---

## 📄 Contoh Implementasi Lengkap

### Halaman Service Detail

```tsx
// app/services/[slug]/page.tsx
import type { Metadata } from 'next';
import { JsonLd, generateWebPageSchema, generateBreadcrumbSchema,
         generateServiceSchema, SITE_CONFIG } from '@/lib/seo';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await getService(params.slug); // fetch data

  return {
    title: service.name,
    description: service.description,
    openGraph: {
      title: `${service.name} | KEDJORA`,
      description: service.description,
      url: `${SITE_CONFIG.url}/services/${params.slug}`,
      images: [{ url: service.image || SITE_CONFIG.ogImage }],
    },
    alternates: { canonical: `${SITE_CONFIG.url}/services/${params.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const service = await getService(params.slug);

  return (
    <>
      <JsonLd data={[
        generateWebPageSchema({
          title: service.name,
          description: service.description,
          path: `/services/${params.slug}`
        }),
        generateBreadcrumbSchema([
          { name: 'Beranda', path: '/' },
          { name: 'Layanan', path: '/services' },
          { name: service.name, path: `/services/${params.slug}` }
        ]),
        generateServiceSchema([
          { name: service.name, description: service.description }
        ]),
      ]} />
      <ServiceContent service={service} />
    </>
  );
}
```

### Halaman Blog Artikel

```tsx
// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import { JsonLd, generateWebPageSchema, generateBreadcrumbSchema,
         generateBlogPostingSchema, SITE_CONFIG } from '@/lib/seo';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_CONFIG.url}/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [{ url: post.coverImage || SITE_CONFIG.ogImage }],
    },
    alternates: { canonical: `${SITE_CONFIG.url}/blog/${params.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <>
      <JsonLd data={[
        generateBlogPostingSchema({
          title: post.title,
          description: post.excerpt,
          slug: params.slug,
          image: post.coverImage,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          author: { name: post.author.name, url: post.author.url }
        }),
        generateBreadcrumbSchema([
          { name: 'Beranda', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${params.slug}` }
        ]),
      ]} />
      <ArticleContent post={post} />
    </>
  );
}
```

---

## ✅ Checklist SEO untuk Setiap Halaman

- [ ] **Metadata** - title, description, openGraph, canonical
- [ ] **JSON-LD** - WebPage + Breadcrumb (minimum)
- [ ] **Images** - Alt text deskriptif
- [ ] **Headings** - H1 unik, hierarchy benar (H1 > H2 > H3)
- [ ] **Links** - Deskriptif anchor text, bukan "klik di sini"
- [ ] **Performance** - Image optimization, lazy loading

---

## 🔍 Testing & Validasi

### Tools untuk Validasi:

1. **Google Rich Results Test**
   https://search.google.com/test/rich-results

2. **Schema Markup Validator**
   https://validator.schema.org/

3. **Facebook Sharing Debugger**
   https://developers.facebook.com/tools/debug/

4. **Twitter Card Validator**
   https://cards-dev.twitter.com/validator

5. **Google PageSpeed Insights**
   https://pagespeed.web.dev/

### Cara Test JSON-LD:

1. Buka halaman di browser
2. View Page Source (Ctrl+U)
3. Cari `<script type="application/ld+json">`
4. Copy isi JSON ke validator

---

## 📊 Monitoring

### Google Search Console
1. Daftar di https://search.google.com/search-console
2. Verifikasi domain dengan meta tag
3. Submit sitemap: `https://kedjora.id/sitemap.xml`

### Bing Webmaster Tools
1. Daftar di https://www.bing.com/webmasters
2. Verifikasi dengan meta tag
3. Import dari Google Search Console (opsional)

---

## 💡 Tips & Best Practices

1. **Title** - 50-60 karakter, keyword di awal
2. **Description** - 150-160 karakter, call-to-action
3. **URL** - Pendek, lowercase, gunakan dash (-)
4. **Images** - Compress, alt text, lazy load
5. **Content** - Minimal 300 kata per halaman
6. **Internal Links** - Link ke halaman terkait
7. **Mobile** - Responsive design wajib
8. **Speed** - Core Web Vitals optimal

---

## 🆘 Troubleshooting

### JSON-LD tidak muncul?
- Pastikan `JsonLd` component di render (bukan di metadata)
- Check console untuk error

### OG Image tidak muncul di Facebook?
- Gunakan absolute URL
- Ukuran minimal 1200x630px
- Clear cache di Facebook Debugger

### Sitemap tidak ter-index?
- Submit manual di Search Console
- Pastikan tidak di-block di robots.txt

---

*Dokumentasi ini dibuat untuk KEDJORA - Digital Agency*
*Last updated: December 2025*
