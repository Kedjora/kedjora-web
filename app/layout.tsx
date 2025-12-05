import type { Metadata } from "next";

// Root layout is minimal - actual layout is in [locale]/layout.tsx
// This file is required by Next.js but won't be used due to middleware redirect

export const metadata: Metadata = {
  title: "KEDJORA - Digital Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
