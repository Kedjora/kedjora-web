import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { BusinessProfileHeader } from "@/components/business-profile-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kedjora - Transform Your Dreams into Reality",
  description: "Revolutionary technology solutions that drive growth and innovation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <BusinessProfileHeader />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
