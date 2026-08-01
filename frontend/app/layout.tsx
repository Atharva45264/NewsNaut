import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newsnaut.app"),

  title: {
    default: "NewsNaut",
    template: "%s | NewsNaut",
  },

  description:
    "NewsNaut is an AI-powered news platform that aggregates trusted news sources, generates intelligent AI summaries, organizes stories into meaningful categories, and delivers a distraction-free reading experience.",

  applicationName: "NewsNaut",

  keywords: [
    "NewsNaut",
    "AI News",
    "AI News Aggregator",
    "News Summaries",
    "Breaking News",
    "Technology News",
    "Business News",
    "Politics",
    "Sports",
    "Bookmarks",
    "AI Assistant",
    "News Feed",
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
    title: "NewsNaut — AI Powered News Platform",
    description:
      "Stay informed with AI-powered news summaries, trusted journalism, intelligent search, bookmarks, and a clean reading experience.",

    url: "https://newsnaut.app",

    siteName: "NewsNaut",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/newsnaut-logo.png",
        width: 1200,
        height: 630,
        alt: "NewsNaut",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "NewsNaut",

    description:
      "AI-powered news summaries from trusted sources.",

    images: ["/newsnaut-logo.png"],
  },

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],

    shortcut: "/icon.png",

    apple: "/icon.png",
  },

  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
  colorPrimary: "#22c55e",
  colorBackground: "#ffffff",
  borderRadius: "1rem",
},

        elements: {
          card: "shadow-xl border border-border rounded-3xl",
          rootBox: "w-full",
          headerTitle: "text-3xl font-bold",
          headerSubtitle: "text-muted-foreground",
          socialButtonsBlockButton:
            "rounded-xl border border-border hover:bg-muted transition-all",
          formButtonPrimary:
            "bg-primary hover:bg-primary/90 rounded-xl shadow-sm transition-all",
          footerActionLink: "text-primary hover:text-primary/80",
          formFieldInput:
            "rounded-xl border-border focus:ring-primary",
        },
      }}
    >
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
    </ClerkProvider>
  );
}