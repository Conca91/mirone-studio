
import type { Metadata } from "next";

import Contact from "@/components/home/Contact";
import FeaturedProject from "@/components/home/FeaturedProject";
import Hero from "@/components/home/Hero";
import Method from "@/components/home/Method";
import Services from "@/components/home/Services";
import Studio from "@/components/home/Studio";

import { seo } from "@/data/seo";

export const metadata: Metadata = {
  title: "Studio Tecnico Mirone Belpasso | Geometra, Ingegneria e APE",

  description:
    "Studio Tecnico Mirone a Belpasso (Catania): APE in 48/72 ore dalla documentazione completa, successioni ereditarie, tabelle millesimali, pratiche edilizie nel Parco dell'Etna, progettazione, catasto e rilievi topografici.",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Studio Tecnico Mirone",
    "Studio Mirone",
    "studio tecnico Belpasso",
    "studio tecnico Catania",
    "geometra Belpasso",
    "geometra Catania",
    "ingegnere Belpasso",
    "ingegnere Catania",

    // Attestati di prestazione energetica
    "APE Belpasso",
    "APE Catania",
    "APE in 48 ore",
    "APE in 72 ore",
    "certificazione energetica Catania",
    "certificazione energetica Belpasso",
    "attestato prestazione energetica Catania",
    "APE urgente Catania",
    "APE vendita immobile",
    "APE affitto immobile",

    // Successioni
    "successioni ereditarie Catania",
    "successioni ereditarie Belpasso",
    "dichiarazione di successione Catania",
    "geometra successione ereditaria",
    "voltura catastale successione",

    // Condomini
    "tabelle millesimali Catania",
    "tabelle millesimali Belpasso",
    "calcolo millesimi condominiali",
    "revisione tabelle millesimali",

    // Parco dell'Etna
    "pratiche edilizie Parco dell'Etna",
    "autorizzazione Parco dell'Etna",
    "nulla osta Parco dell'Etna",
    "progettazione edilizia Parco dell'Etna",
    "pratiche edilizie Nicolosi",
    "pratiche edilizie Zafferana Etnea",

    // Edilizia e catasto
    "pratiche edilizie Belpasso",
    "pratiche edilizie Catania",
    "SCIA Catania",
    "CILA Belpasso",
    "sanatoria edilizia Catania",
    "pratiche catastali Catania",
    "DOCFA Catania",
    "variazione catastale Catania",

    // Servizi tecnici
    "progettazione architettonica Catania",
    "direzione lavori Catania",
    "rilievi topografici Catania",
    "rilievi topografici Belpasso",
    "riconfinamenti Catania",
    "consulenza tecnica Catania",
    "modellazione BIM",
  ],

  openGraph: {
    title:
      "Studio Tecnico Mirone | Geometra, Ingegneria e Servizi Tecnici",

    description:
      "APE in 48/72 ore dalla documentazione completa, successioni ereditarie, tabelle millesimali, pratiche edilizie nel Parco dell'Etna, progettazione e servizi catastali a Belpasso e Catania.",

    url: seo.siteUrl,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",

    images: [
      {
        url: seo.images.openGraph,
        width: 1200,
        height: 630,
        alt: "Studio Tecnico Mirone - Belpasso, Catania",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Studio Tecnico Mirone | Belpasso e Catania",

    description:
      "APE, successioni ereditarie, tabelle millesimali, pratiche edilizie, catasto, progettazione e rilievi topografici.",

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
