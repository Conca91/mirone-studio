import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
} from "next/font/google";

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

  keywords: [...seo.keywords],

  applicationName: seo.siteName,

  authors: [
    {
      name: seo.siteName,
      url: seo.siteUrl,
    },
  ],

  creator: seo.siteName,
  publisher: seo.siteName,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    url: seo.siteUrl,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.defaultDescription,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={seo.language}>
      <body
        className={`${inter.variable} ${cormorant.variable} bg-[#ebe7dc] font-sans text-[#24221f] antialiased`}
      >
        <StructuredData />

        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}