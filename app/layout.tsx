import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
} from "next/font/google";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

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
  metadataBase: new URL("https://studiotecnicomirone.it"),

  title: {
    default: "Studio Tecnico Mirone | Belpasso",
    template: "%s | Studio Tecnico Mirone",
  },

  description:
    "Studio tecnico a Belpasso: progettazione, pratiche edilizie e catastali, rilievi, APE, direzione lavori, BIM e rendering.",

  openGraph: {
    title: "Studio Tecnico Mirone",
    description:
      "Progettazione, pratiche tecniche e direzione lavori a Belpasso.",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${inter.variable} ${cormorant.variable} bg-[#ebe7dc] font-sans text-[#24221f] antialiased`}
      >
        <Header />

        <div className="min-h-screen">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}