import type { Metadata } from "next";

import Contact from "@/components/home/Contact";
import FeaturedProject from "@/components/home/FeaturedProject";
import Hero from "@/components/home/Hero";
import Method from "@/components/home/Method";
import Services from "@/components/home/Services";
import Studio from "@/components/home/Studio";

import { seo } from "@/data/seo";

export const metadata: Metadata = {
  title: "Studio Tecnico a Belpasso | Ingegneria e Progettazione",

  description:
    "Studio Tecnico Mirone a Belpasso, Catania. Ingegneria, progettazione architettonica, pratiche edilizie e catastali, rilievi topografici, direzione lavori, BIM, APE e consulenza tecnica.",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Studio Tecnico Mirone",
    "Studio Mirone",
    "studio tecnico Belpasso",
    "studio tecnico Catania",
    "ingegnere Belpasso",
    "ingegnere Catania",
    "ingegnere a Belpasso",
    "ingegnere a Catania",
    "geometra Belpasso",
    "geometra Catania",
    "geometra a Belpasso",
    "geometra a Catania",
    "progettazione Belpasso",
    "progettazione Catania",
    "progettazione architettonica Belpasso",
    "progettazione architettonica Catania",
    "pratiche edilizie Belpasso",
    "pratiche edilizie Catania",
    "pratiche catastali Belpasso",
    "pratiche catastali Catania",
    "direzione lavori Belpasso",
    "direzione lavori Catania",
    "rilievi topografici Belpasso",
    "rilievi topografici Catania",
    "APE Belpasso",
    "APE Catania",
    "consulenza tecnica Belpasso",
    "consulenza tecnica Catania",
  ],

  openGraph: {
    title:
      "Studio Tecnico a Belpasso | Ingegneria e Progettazione",

    description:
      "Studio Tecnico Mirone a Belpasso, Catania. Progettazione, pratiche edilizie e catastali, rilievi topografici, direzione lavori e consulenza tecnica.",

    url: seo.siteUrl,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",

    images: [
      {
        url: seo.images.openGraph,
        width: 1200,
        height: 630,
        alt: "Studio Tecnico Mirone a Belpasso, Catania",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Studio Tecnico Mirone | Belpasso, Catania",

    description:
      "Ingegneria, progettazione, pratiche edilizie e catastali, rilievi e direzione lavori a Belpasso e Catania.",

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
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Method />
      <Services />
      <FeaturedProject />
      <Studio />
      <Contact />
    </main>
  );
}