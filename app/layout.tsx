import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SynthLauncher - Next Generation Minecraft Launcher",
  description:
    "A secure, modern Minecraft launcher with a sleek interface. Open-source, free, and built for the next generation of players. Features modpack support, custom themes, and blazing fast performance.",
  keywords: [
    "minecraft",
    "launcher",
    "modpack",
    "open source",
    "rust",
    "modrinth",
    "curseforge",
    "fabric",
    "forge",
    "gaming",
  ],
  authors: [{ name: "SynthLauncher Team" }],
  creator: "SynthLauncher Team",
  publisher: "SynthLauncher ORG",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://synthlauncher.org",
    siteName: "SynthLauncher",
    title: "SynthLauncher - Next Generation Minecraft Launcher",
    description:
      "A secure, modern Minecraft launcher with a sleek interface. Open-source, free, and built for the next generation of players.",
    images: [
      {
        url: "/images/launcher-interface-new.jpeg",
        width: 1200,
        height: 630,
        alt: "SynthLauncher Interface showing Modrinth modpack browser with popular modpacks",
        type: "image/jpeg",
      },
      {
        url: "/images/logo.webp",
        width: 512,
        height: 512,
        alt: "SynthLauncher Logo",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@synthlauncher",
    creator: "@synthlauncher",
    title: "SynthLauncher - Next Generation Minecraft Launcher",
    description:
      "A secure, modern Minecraft launcher with a sleek interface. Open-source, free, and built for the next generation of players.",
    images: [
      {
        url: "/images/launcher-interface-new.jpeg",
        alt: "SynthLauncher Interface showing Modrinth modpack browser",
      },
    ],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://synthlauncher.org",
  },
  category: "technology",
  classification: "Gaming Software",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://synthlauncher.org"),
  applicationName: "SynthLauncher",
  generator: "Next.js",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/images/logo.webp", sizes: "32x32", type: "image/webp" },
      { url: "/images/logo.webp", sizes: "16x16", type: "image/webp" },
    ],
    apple: [{ url: "/images/logo.webp", sizes: "180x180", type: "image/webp" }],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/images/logo.webp",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Preload critical resources */}
        <link rel="preload" href="/images/launcher-interface-new.jpeg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/logo.webp" as="image" type="image/webp" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//discord.gg" />

        {/* Structured data for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "SynthLauncher",
              description:
                "A secure, modern Minecraft launcher with a sleek interface. Open-source, free, and built for the next generation of players.",
              applicationCategory: "GameApplication",
              operatingSystem: ["Windows", "macOS", "Linux"],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "SynthLauncher ORG",
              },
              downloadUrl: "https://github.com/SynthLauncher/SynthLauncher/releases",
              screenshot: "/images/launcher-interface-new.jpeg",
              softwareVersion: "0.0.2",
              datePublished: "2024-12-01",
              dateModified: "2025-01-01",
              programmingLanguage: "Rust",
              license: "https://opensource.org/licenses/MIT",
              codeRepository: "https://github.com/SynthLauncher/SynthLauncher",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
