import type { Metadata } from "next";
import {
  BadgeCheck,
  FileText,
  Gauge,
  Home,
} from "lucide-react";

import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import type { ServiceDetailConfig } from "@/components/services/service-types";
import { seo } from "@/data/seo";

const PAGE_PATH = "/servizi/ape";
const PAGE_URL = `${seo.siteUrl}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "APE in 48/72 ore a Catania e provincia",

  description:
    "APE in 48/72 ore a Catania e provincia dalla ricezione della documentazione completa. Certificazione energetica per vendita e affitto. Contatta Studio Tecnico Mirone.",

  alternates: {
    canonical: PAGE_PATH,
  },

  keywords: [
    "APE Belpasso",
    "APE Catania",
    "APE in 48 ore Catania",
    "APE in 72 ore Catania",
    "APE urgente Catania",
    "certificazione energetica Catania e provincia",
    "certificazione energetica Belpasso",
    "certificazione energetica Catania",
    "Attestato di Prestazione Energetica Belpasso",
    "Attestato di Prestazione Energetica Catania",
    "certificatore energetico Belpasso",
    "certificatore energetico Catania",
    "APE vendita immobile Belpasso",
    "APE vendita immobile Catania",
    "APE locazione Belpasso",
    "APE locazione Catania",
    "APE ristrutturazione Belpasso",
    "APE ristrutturazione Catania",
    "classe energetica immobile Belpasso",
    "classe energetica immobile Catania",
    "ingegnere Belpasso",
    "ingegnere Catania",
    "Ingegnere Miriana Mirone",
    "Miriana Mirone",
    "Studio Tecnico Mirone",
  ],

  openGraph: {
    title:
      "APE in 48/72 ore a Catania e provincia | Studio Tecnico Mirone",

    description:
      "APE in 48/72 ore a Catania e provincia dalla ricezione della documentazione completa, con sopralluogo e adempimenti necessari. Certificazioni per vendita e locazione.",

    url: PAGE_URL,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",

    images: [
      {
        url: seo.images.openGraph,
        width: 1200,
        height: 630,
        alt: "APE in 48/72 ore - Studio Tecnico Mirone",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "APE in 48/72 ore a Catania e provincia | Studio Tecnico Mirone",

    description:
      "APE in 48/72 ore a Catania e provincia, dalla documentazione completa, con sopralluogo e adempimenti necessari.",

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

const config: ServiceDetailConfig = {
  breadcrumbLabel: "APE e certificazioni energetiche",

  locationLabel:
    "APE in 48/72 ore · Catania e provincia",

  titleFirstLine: "APE in 48/72 ore",
  titleSecondLine: "a Catania e provincia",

  heroDescription:
    "Hai bisogno di un Attestato di Prestazione Energetica per vendere o affittare un immobile? Lo Studio Tecnico Mirone offre un servizio rapido di redazione APE a Catania e in tutta la provincia, con tempi indicativi di 48/72 ore dalla ricezione della documentazione completa, previo svolgimento del sopralluogo e degli adempimenti necessari.",

  whatsappHref:
    "https://wa.me/393482934197?text=Buongiorno%2C%20vorrei%20richiedere%20un%20APE%20in%2048%2F72%20ore%20a%20Catania%20e%20provincia.",

  emailHref: seo.contact.emailHref,

  heroChecklist: [
    "Sopralluogo",
    "Raccolta dati",
    "Calcolo energetico",
    "Redazione APE",
    "48/72 ore dalla documentazione completa",
    "Supporto documentale",
  ],

  introduction: {
    eyebrow: "Prestazione energetica",

    title:
      "Un documento tecnico per conoscere le caratteristiche energetiche dell’immobile.",

    paragraphs: [
      "L’Attestato di Prestazione Energetica, comunemente indicato come APE, descrive le prestazioni energetiche di un edificio o di una singola unità immobiliare attraverso specifici indicatori e una classe energetica.",

      "Lo Studio Tecnico Mirone svolge attività di certificazione energetica a Belpasso, Catania e provincia, effettuando il sopralluogo dell’immobile, raccogliendo i dati necessari e sviluppando il calcolo previsto per la redazione dell’attestato.",

      "L’APE può essere richiesto in diverse situazioni, tra cui compravendite, locazioni, nuove costruzioni e interventi di ristrutturazione, secondo quanto previsto dalla normativa applicabile al caso specifico.",
    ],
  },

  areas: {
    eyebrow: "Quando può servire",

    title:
      "APE per vendita, locazione e interventi edilizi.",

    description:
      "La necessità dell’attestato dipende dalla situazione dell’immobile e dall’operazione che deve essere effettuata. Ogni incarico viene valutato prima della redazione.",

    cards: [
      {
        icon: Home,

        title: "Compravendita",

        description:
          "Redazione dell’APE per immobili destinati alla vendita, sulla base dei dati e delle caratteristiche tecniche rilevate.",
      },

      {
        icon: FileText,

        title: "Locazione",

        description:
          "Certificazione energetica per immobili destinati alla locazione, quando prevista dalla normativa applicabile.",
      },

      {
        icon: Gauge,

        title: "Nuove costruzioni",

        description:
          "Valutazione e certificazione delle prestazioni energetiche per nuovi edifici e unità immobiliari.",
      },

      {
        icon: BadgeCheck,

        title: "Ristrutturazioni",

        description:
          "APE e verifiche energetiche in relazione a interventi di riqualificazione o ristrutturazione dell’immobile.",
      },
    ],
  },

  workflow: {
    eyebrow: "Il nostro metodo",

    title:
      "Dal sopralluogo all’APE: un servizio rapido e accurato.",

    description:
      "La certificazione energetica richiede dati affidabili sull’immobile e una corretta elaborazione delle informazioni raccolte.",

    steps: [
      {
        number: "01",

        title: "Raccolta documentazione",

        description:
          "Raccogliamo i documenti disponibili e le informazioni necessarie per impostare correttamente l’incarico.",
      },

      {
        number: "02",

        title: "Sopralluogo",

        description:
          "Effettuiamo il sopralluogo dell’immobile per rilevare caratteristiche costruttive, impianti e informazioni utili al calcolo.",
      },

      {
        number: "03",

        title: "Analisi dei dati",

        description:
          "Organizziamo e verifichiamo i dati raccolti relativi all’involucro edilizio e agli impianti presenti.",
      },

      {
        number: "04",

        title: "Calcolo energetico",

        description:
          "Elaboriamo le informazioni attraverso gli strumenti e le procedure previste per la valutazione della prestazione energetica.",
      },

      {
        number: "05",

        title: "Redazione APE",

        description:
          "Predisponiamo l’Attestato di Prestazione Energetica con i dati dell’immobile, gli indicatori energetici e la relativa classe.",
      },

      {
        number: "06",

        title: "Consegna",

        description:
          "Consegniamo la documentazione al cliente e forniamo le indicazioni utili relative all’attestato e al suo utilizzo.",
      },
    ],
  },

  benefits: {
    eyebrow: "Perché affidarsi allo Studio",

    title:
      "Una valutazione tecnica chiara e documentata.",

    description:
      "La corretta raccolta dei dati e un sopralluogo accurato sono essenziali per rappresentare in modo affidabile le caratteristiche energetiche dell’immobile.",

    items: [
      "Sopralluogo tecnico dell’immobile",
      "Raccolta e verifica dei dati disponibili",
      "Analisi dell’involucro e degli impianti",
      "Calcolo della prestazione energetica",
      "Individuazione della classe energetica",
      "Redazione dell’Attestato di Prestazione Energetica",
      "Supporto al cliente nella comprensione del documento",
    ],
  },

  deliverables: {
    eyebrow: "Attività e documentazione",

    title:
      "Cosa può comprendere l’incarico.",

    description:
      "Le attività vengono definite in relazione all’immobile e alla finalità per cui viene richiesto l’attestato.",

    items: [
      "Raccolta documenti disponibili",
      "Sopralluogo dell’immobile",
      "Rilievo delle caratteristiche costruttive",
      "Raccolta dati degli impianti",
      "Elaborazione del modello energetico",
      "Calcolo della prestazione energetica",
      "Individuazione della classe energetica",
      "Redazione dell’APE",
      "Consegna della documentazione",
      "Supporto tecnico al cliente",
    ],
  },

  locations: {
    eyebrow: "Dove operiamo",

    title:
      "Certificazioni energetiche a Catania e in tutta la provincia.",

    description:
      "Lo Studio Tecnico Mirone ha sede a Belpasso e svolge attività di certificazione energetica a Catania e in tutta la provincia, inclusi i comuni dell’area etnea. Per incarichi fuori provincia è possibile richiedere una valutazione.",

    items: [
      "Belpasso",
      "Catania",
      "Nicolosi",
      "Mascalucia",
      "Pedara",
      "Paternò",
      "Misterbianco",
      "Camporotondo Etneo",
      "San Pietro Clarenza",
      "Tremestieri Etneo",
    ],
  },

  faqs: {
    eyebrow: "Domande frequenti",

    title:
      "Informazioni sull’APE.",

    items: [
      {
        question:
          "Che cos’è l’APE?",

        answer:
          "L’APE è l’Attestato di Prestazione Energetica, un documento tecnico che descrive le caratteristiche energetiche di un edificio o di una unità immobiliare e ne indica la relativa classe energetica.",
      },

      {
        question:
          "Quando serve l’APE?",

        answer:
          "L’APE può essere richiesto in situazioni come compravendita, locazione, nuove costruzioni e alcuni interventi edilizi, secondo quanto previsto dalla normativa applicabile.",
      },

      {
        question:
          "È necessario il sopralluogo per redigere l’APE?",

        answer:
          "Il sopralluogo permette di raccogliere e verificare direttamente le informazioni necessarie sull’immobile, sulle caratteristiche costruttive e sugli impianti presenti, così da disporre dei dati necessari alla valutazione energetica.",
      },

      {
        question:
          "Quanto tempo serve per ottenere un APE a Catania?",

        answer:
          "Lo Studio Tecnico Mirone offre un servizio di redazione APE con tempi indicativi di 48/72 ore dalla ricezione della documentazione completa. I tempi vengono confermati in relazione alla disponibilità per il sopralluogo, alle caratteristiche dell’immobile e agli adempimenti necessari.",
      },

      {
        question:
          "Quali documenti servono per richiedere l’APE?",

        answer:
          "Per iniziare possono essere utili la visura catastale, la planimetria dell’immobile e la documentazione disponibile sugli impianti. Lo Studio verifica caso per caso i documenti necessari e concorda il sopralluogo prima di confermare i tempi di consegna.",
      },

      {
        question:
          "L’APE indica anche come migliorare l’efficienza dell’immobile?",

        answer:
          "L’attestato contiene informazioni sulla prestazione energetica dell’immobile e può riportare indicazioni relative a possibili interventi di miglioramento energetico.",
      },

      {
        question:
          "Posso rivolgermi allo Studio Tecnico Mirone per un APE a Belpasso o Catania?",

        answer:
          "Sì. Lo Studio Tecnico Mirone ha sede a Belpasso e svolge attività di certificazione energetica a Belpasso, Catania, nei comuni della provincia e nell’area etnea.",
      },

      {
        question:
          "In quali zone effettuate certificazioni energetiche?",

        answer:
          "Lo Studio ha sede a Belpasso e opera principalmente a Catania e provincia, nei comuni dell’area etnea e, in funzione dell’incarico, anche nel resto della Sicilia.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Certificazione energetica rapida",

    title:
      "Hai bisogno di un APE in 48/72 ore?",

    description:
      "Contatta Studio Tecnico Mirone per richiedere un Attestato di Prestazione Energetica a Catania e provincia. Verificheremo i documenti necessari, la disponibilità per il sopralluogo e i tempi di consegna.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Service",

      "@id": `${PAGE_URL}/#service`,

      name:
        "APE in 48/72 ore a Catania e provincia",

      alternateName: [
        "Attestato di Prestazione Energetica",
        "Certificazione energetica",
        "APE",
      ],

      serviceType:
        "Attestato di Prestazione Energetica",

      url: PAGE_URL,

      description:
        "Servizio di certificazione energetica a Catania e provincia con tempi indicativi di 48/72 ore dalla documentazione completa, subordinati al sopralluogo e agli adempimenti necessari.",

      provider: {
        "@id": `${seo.siteUrl}/#organization`,
      },

      areaServed: [
        {
          "@type": "City",
          name: "Belpasso",
        },

        {
          "@type": "City",
          name: "Catania",
        },

        {
          "@type": "AdministrativeArea",
          name: "Provincia di Catania",
        },

        {
          "@type": "AdministrativeArea",
          name: "Sicilia",
        },
      ],

      category:
        "Certificazione energetica e Attestato di Prestazione Energetica",

      audience: {
        "@type": "Audience",
        audienceType:
          "Proprietari di immobili, privati, imprese e professionisti",
      },
    },

    {
      "@type": "WebPage",

      "@id": `${PAGE_URL}/#webpage`,

      url: PAGE_URL,

      name:
        "APE in 48/72 ore a Catania e provincia",

      description:
        "APE in 48/72 ore a Catania e provincia dalla ricezione della documentazione completa, con sopralluogo e adempimenti necessari. Certificazioni per vendita e locazione.",

      isPartOf: {
        "@id": `${seo.siteUrl}/#website`,
      },

      about: {
        "@id": `${PAGE_URL}/#service`,
      },

      mainEntity: {
        "@id": `${PAGE_URL}/#service`,
      },

      breadcrumb: {
        "@id": `${PAGE_URL}/#breadcrumb`,
      },

      inLanguage: "it-IT",
    },

    {
      "@type": "BreadcrumbList",

      "@id": `${PAGE_URL}/#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: seo.siteUrl,
        },

        {
          "@type": "ListItem",
          position: 2,
          name: "Servizi",
          item: `${seo.siteUrl}/servizi`,
        },

        {
          "@type": "ListItem",
          position: 3,
          name: "APE e certificazioni energetiche",
          item: PAGE_URL,
        },
      ],
    },

    {
      "@type": "FAQPage",

      "@id": `${PAGE_URL}/#faq`,

      mainEntity: config.faqs.items.map((faq) => ({
        "@type": "Question",

        name: faq.question,

        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function ApePage() {
  return (
    <ServiceDetailPage
      config={config}
      jsonLd={jsonLd}
    />
  );
}