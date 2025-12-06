# KEDJORA - Digital Development Agency

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)

Website resmi **KEDJORA**, sebuah digital development agency yang berbasis di Kediri, Jawa Timur. Website ini dibangun menggunakan teknologi modern untuk memberikan pengalaman pengguna yang optimal.

## ✨ Fitur

- 🌓 **Dark/Light Mode** - Tema yang dapat diubah sesuai preferensi pengguna
- 🎨 **Modern UI/UX** - Desain yang clean dan profesional dengan animasi smooth
- 📱 **Fully Responsive** - Tampilan optimal di semua ukuran layar
- ⚡ **High Performance** - Dioptimasi untuk kecepatan dan SEO
- 🖼️ **Framer Motion** - Animasi interaktif yang halus
- 💬 **Chat Widget** - Widget untuk menghubungi via WhatsApp

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI Library | [React 19](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Font | Plus Jakarta Sans (Google Fonts) |

## 📁 Struktur Project

```
kedjora-web/
├── app/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, ChatWidget
│   │   ├── pages/           # Page-specific components
│   │   └── sections/        # Reusable sections (Hero, Services, dll)
│   ├── context/             # React Context (ThemeContext)
│   ├── lib/                 # Utilities & constants
│   ├── types/               # TypeScript type definitions
│   ├── (routes)/            # Pages (about, blog, contact, dll)
│   ├── globals.css          # Global styles & Tailwind config
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── public/                  # Static assets
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 atau lebih baru
- npm, yarn, atau pnpm

### Installation

1. Clone repository
   ```bash
   git clone https://github.com/kedjora/kedjora-web.git
   cd kedjora-web
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Jalankan development server
   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Menjalankan development server |
| `npm run build` | Build untuk production |
| `npm run start` | Menjalankan production server |
| `npm run lint` | Menjalankan ESLint |

## 📄 Halaman

| Route | Deskripsi |
|-------|-----------|
| `/` | Homepage dengan Hero, Services, Portfolio, Testimonials, Pricing, FAQ |
| `/services` | Detail layanan yang ditawarkan |
| `/portfolio` | Showcase project yang telah dikerjakan |
| `/blog` | Artikel dan insights |
| `/about` | Tentang KEDJORA dan tim |
| `/contact` | Form kontak dan informasi |

## 🎨 Layanan

1. **Website Development** - React, Next.js, SEO Optimized
2. **Mobile Applications** - Flutter, iOS & Android
3. **Automation & Bots** - WhatsApp, Telegram, Workflow Automation
4. **Creative Design** - Brand Identity, UI/UX, Motion Graphics

## 🎯 Komponen Utama

### Sections (Homepage)
- `Hero` - Landing section dengan animasi parallax
- `TechStack` - Infinite scroll logo teknologi
- `Services` - Kartu layanan dengan hover effects
- `Process` - Timeline proses kerja
- `Portfolio` - Gallery project dengan filter kategori
- `Testimonials` - Slider testimonial klien
- `Pricing` - Tabel harga dengan toggle monthly/yearly
- `FAQ` - Accordion FAQ
- `ContactCTA` - Call-to-action section

### Layout
- `Navbar` - Responsive navbar dengan theme toggle
- `Footer` - Footer dengan links dan social media
- `ChatWidget` - Floating WhatsApp button

## 🌐 Konfigurasi Tailwind CSS v4

Project ini menggunakan Tailwind CSS v4 dengan konfigurasi inline di `globals.css`:

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme inline {
  --color-primary-500: #3f6bff;
  /* ... custom colors */
}
```

## 🚀 Deployment

Project ini dapat di-deploy ke [Vercel](https://vercel.com):

```bash
npm run build
```

Atau deploy langsung via Vercel CLI atau GitHub integration.

## 📞 Kontak

- **Website**: [kedjora.com](https://kedjora.com)
- **Email**: hello@kedjora.com
- **WhatsApp**: +6289696673806
- **Location**: Kediri, East Java, Indonesia

## 📝 License

Copyright © 2025 KEDJORA. All rights reserved.
