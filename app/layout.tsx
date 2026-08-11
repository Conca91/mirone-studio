import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import StructuredData from "@/components/seo/StructuredData";
import { seo } from "@/data/seo";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),

  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },

  description: seo.defaultDescription,

  applicationName: seo.siteName,

  authors: [
    {
      name: seo.siteName,
      url: seo.siteUrl,
    },
  ],

  creator: seo.siteName,
  publisher: seo.siteName,

  openGraph: {
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    url: seo.siteUrl,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
    images: [
      {
        url: seo.images.openGraph,
        width: 1200,
        height: 630,
        alt: `${seo.siteName} - Studio tecnico a Belpasso, Catania`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    images: [seo.images.openGraph],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Studio tecnico",

  other: {
    "geo.region": "IT-CT",
    "geo.placename": "Belpasso",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={seo.language}>
      <body
        className={`${inter.variable} ${cormorant.variable} bg-[#ded6ca] font-sans text-[#25211e] antialiased`}
      >
        <StructuredData />

        <Header />

        {children}

        <Footer />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}