import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Newsreader } from "next/font/google"

import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://newsnaut.app"),

  title: {
    default: "NewsNaut",
    template: "%s | NewsNaut",
  },

  description:
    "NewsNaut is an AI-powered news platform that brings together trusted journalism, AI-generated summaries, intelligent search, bookmarks, and a distraction-free reading experience.",

  applicationName: "NewsNaut",

  keywords: [
    "AI News",
    "News Aggregator",
    "AI Summaries",
    "Latest News",
    "News Feed",
    "Technology News",
    "Business News",
    "Bookmarks",
    "News Assistant",
  ],

  authors: [
    {
      name: "Atharva Phanse",
    },
  ],

  creator: "Atharva Phanse",

  publisher: "NewsNaut",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NewsNaut",
    description:
      "Read the world's news in minutes with AI-powered summaries and trusted sources.",
    type: "website",
    siteName: "NewsNaut",
  },

  twitter: {
    card: "summary_large_image",
    title: "NewsNaut",
    description:
      "AI-powered news summaries from trusted sources.",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],

    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
  lang="en"
  suppressHydrationWarning
  className={`light ${geistSans.variable} ${geistMono.variable} ${newsreader.variable}`}
>
      <body
        className="
          min-h-screen
          bg-background
          font-sans
          text-foreground
          antialiased
          selection:bg-primary/20
          selection:text-foreground
        "
      >
        {children}
      </body>
    </html>
  )
}