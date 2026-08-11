import type { Metadata } from "next";
import {
  FileCheck2,
  FileSearch,
  Map,
  Ruler,
} from "lucide-react";

import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import type { ServiceDetailConfig } from "@/components/services/service-types";
import { seo } from "@/data/seo";

const PAGE_PATH = "/servizi/pratiche-catastali";
const PAGE_URL = `${seo.siteUrl}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Pratiche catastali a Belpasso e Catania",

  description:
    "Pratiche catastali a Belpasso e Catania: DOCFA, variazioni catastali, volture, planimetrie e aggiornamenti catastali. Studio Tecnico Mirone segue verifiche, rilievi e documentazione tecnica.",

  alternates: {
    canonical: PAGE_PATH,
  },

  keywords: [
    "pratiche catastali Belpasso",
    "pratiche catastali Catania",
    "DOCFA Belpasso",
    "DOCFA Catania",
    "variazione catastale Belpasso",
    "variazione catastale Catania",
    "voltura catastale Belpasso",
    "voltura catastale Catania",
    "planimetria catastale Belpasso",
    "planimetria catastale Catania",
    "aggiornamento catastale Belpasso",
    "aggiornamento catastale Catania",
    "verifica catastale Belpasso",
    "verifica catastale Catania",
    "catasto Belpasso",
    "catasto Catania",
    "studio tecnico Belpasso",
    "studio tecnico Catania",
    "geometra Belpasso",
    "geometra Catania",
    "ingegnere Belpasso",
    "ingegnere Catania",
    "Studio Tecnico Mirone",
  ],

  openGraph: {
    title:
      "Pratiche catastali a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "DOCFA, variazioni catastali, volture, planimetrie e aggiornamenti catastali a Belpasso, Catania e provincia.",

    url: PAGE_URL,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",

    images: [
      {
        url: seo.images.openGraph,
        width: 1200,
        height: 630,
        alt: "Pratiche catastali - Studio Tecnico Mirone",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Pratiche catastali a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "DOCFA, variazioni catastali, volture, planimetrie e aggiornamenti catastali a Belpasso e Catania.",

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
  breadcrumbLabel: "Pratiche catastali",

  locationLabel:
    "Pratiche catastali · Belpasso · Catania",

  titleFirstLine: "Pratiche",
  titleSecondLine: "catastali",

  heroDescription:
    "Lo Studio Tecnico Mirone gestisce pratiche catastali a Belpasso, Catania e provincia, seguendo DOCFA, variazioni, volture, planimetrie e aggiornamenti catastali. Quando necessario, l’attività viene coordinata con sopralluoghi, rilievi e verifiche tecniche dell’immobile.",

  whatsappHref:
    "https://wa.me/393482934197?text=Buongiorno%2C%20vorrei%20ricevere%20informazioni%20sulle%20pratiche%20catastali.",

  emailHref: seo.contact.emailHref,

  heroChecklist: [
    "DOCFA",
    "Variazioni catastali",
    "Volture catastali",
    "Planimetrie catastali",
    "Verifiche catastali",
  ],

  introduction: {
    eyebrow: "Aggiornare correttamente i dati catastali",

    title:
      "Dalla verifica dell’immobile alla pratica catastale.",

    paragraphs: [
      "Le pratiche catastali consentono di aggiornare o verificare i dati tecnici e identificativi di un immobile. Prima di predisporre un aggiornamento è importante analizzare la documentazione disponibile e, quando necessario, confrontarla con lo stato reale dei luoghi.",

      "Lo Studio Tecnico Mirone segue pratiche catastali a Belpasso, Catania e provincia, supportando privati, imprese e professionisti nella predisposizione di DOCFA, variazioni catastali, volture, verifiche delle planimetrie e altri adempimenti relativi agli immobili.",

      "Quando il caso lo richiede, l’attività catastale viene coordinata con sopralluoghi e rilievi tecnici, così da disporre delle informazioni necessarie per predisporre correttamente la pratica.",
    ],
  },

  areas: {
    eyebrow: "Principali attività catastali",

    title:
      "Aggiornamenti e verifiche per immobili e unità catastali.",

    description:
      "La procedura da predisporre dipende dalla situazione dell’immobile, dalle modifiche intervenute e dalla documentazione disponibile. Ogni incarico viene quindi valutato preliminarmente.",

    cards: [
      {
        icon: FileCheck2,

        title: "DOCFA",

        description:
          "Predisposizione delle pratiche DOCFA per dichiarazioni di nuova costruzione, variazioni e aggiornamenti delle unità immobiliari urbane.",
      },

      {
        icon: Ruler,

        title: "Variazioni catastali",

        description:
          "Aggiornamento catastale in seguito a modifiche distributive, frazionamenti, fusioni e altre variazioni che interessano l’unità immobiliare.",
      },

      {
        icon: FileSearch,

        title: "Volture catastali",

        description:
          "Supporto nella gestione delle volture catastali necessarie ad aggiornare l’intestazione degli immobili nei casi previsti.",
      },

      {
        icon: Map,

        title: "Planimetrie e verifiche",

        description:
          "Verifica della documentazione catastale e delle planimetrie disponibili, con confronto tecnico con lo stato dei luoghi quando necessario.",
      },
    ],
  },

  workflow: {
    eyebrow: "Il nostro metodo",

    title:
      "Prima verifichiamo, poi aggiorniamo.",

    description:
      "Una pratica catastale corretta parte dalla verifica dei dati disponibili e dalla comprensione delle modifiche intervenute sull’immobile.",

    steps: [
      {
        number: "01",

        title: "Raccolta documenti",

        description:
          "Raccogliamo visure, planimetrie e la documentazione disponibile relativa all’immobile e alla variazione da registrare.",
      },

      {
        number: "02",

        title: "Verifica catastale",

        description:
          "Analizziamo i dati catastali disponibili, gli identificativi dell’immobile e la documentazione utile alla pratica.",
      },

      {
        number: "03",

        title: "Sopralluogo e rilievo",

        description:
          "Quando necessario, rileviamo lo stato dei luoghi per verificare geometrie, distribuzione interna e informazioni tecniche utili all’aggiornamento.",
      },

      {
        number: "04",

        title: "Individuazione della procedura",

        description:
          "Definiamo l’aggiornamento catastale appropriato in funzione della situazione dell’immobile e delle modifiche intervenute.",
      },

      {
        number: "05",

        title: "Predisposizione della pratica",

        description:
          "Prepariamo elaborati, dati e documentazione tecnica necessari alla predisposizione e presentazione della pratica catastale.",
      },

      {
        number: "06",

        title: "Presentazione e verifica finale",

        description:
          "Trasmettiamo la pratica attraverso le procedure previste e verifichiamo gli esiti e gli aggiornamenti conseguenti.",
      },
    ],
  },

  benefits: {
    eyebrow: "Perché affidarsi allo Studio",

    title:
      "Dati catastali coerenti con la situazione dell’immobile.",

    description:
      "Una corretta verifica preliminare consente di comprendere la situazione catastale dell’immobile e di impostare l’eventuale aggiornamento sulla base della documentazione e dello stato dei luoghi.",

    items: [
      "Verifica preliminare della documentazione catastale",
      "Confronto tra planimetrie e stato dei luoghi",
      "Gestione coordinata di rilievo e pratica",
      "Predisposizione degli elaborati necessari",
      "Supporto nella gestione di DOCFA e variazioni",
      "Controllo degli esiti della pratica",
    ],
  },

  deliverables: {
    eyebrow: "Attività e documentazione",

    title:
      "Cosa può comprendere l’incarico.",

    description:
      "Le prestazioni vengono definite in relazione alla pratica richiesta, alla documentazione disponibile e alle condizioni dell’immobile.",

    items: [
      "Verifica delle visure catastali",
      "Verifica delle planimetrie disponibili",
      "Rilievo dello stato dei luoghi",
      "Restituzione grafica",
      "Predisposizione DOCFA",
      "Variazioni catastali",
      "Aggiornamento delle planimetrie",
      "Supporto per volture catastali",
      "Verifica degli identificativi catastali",
      "Controllo degli esiti della pratica",
    ],
  },

  locations: {
    eyebrow: "Dove operiamo",

    title:
      "Pratiche catastali a Belpasso, Catania e provincia.",

    description:
      "Lo Studio Tecnico Mirone ha sede a Belpasso e segue pratiche catastali a Catania, nei comuni della provincia e nell’area etnea, valutando in funzione dell’incarico anche attività nel resto della Sicilia.",

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
      "Informazioni sulle pratiche catastali.",

    items: [
      {
        question:
          "Quando serve una variazione catastale?",

        answer:
          "Una variazione catastale può essere necessaria quando intervengono modifiche che devono essere aggiornate negli archivi catastali, ad esempio variazioni della distribuzione interna, frazionamenti, fusioni o altri cambiamenti rilevanti dell’unità immobiliare.",
      },

      {
        question:
          "Che cos’è il DOCFA?",

        answer:
          "DOCFA è la procedura utilizzata dai professionisti abilitati per presentare determinate dichiarazioni relative alle unità immobiliari urbane, comprese nuove dichiarazioni e variazioni catastali previste dalla disciplina applicabile.",
      },

      {
        question:
          "Serve un rilievo prima della pratica catastale?",

        answer:
          "Dipende dal caso. Quando è necessario verificare geometrie, distribuzione o corrispondenza tra documentazione e stato dei luoghi, il sopralluogo e il rilievo tecnico possono essere necessari prima della predisposizione della pratica.",
      },

      {
        question:
          "Potete verificare se la planimetria catastale è aggiornata?",

        answer:
          "Sì. Lo Studio può verificare la documentazione catastale disponibile e confrontarla con lo stato dei luoghi per valutare se siano necessari ulteriori approfondimenti o aggiornamenti.",
      },

      {
        question:
          "Gestite anche le volture catastali?",

        answer:
          "Sì. In funzione della tipologia del caso e della documentazione disponibile, lo Studio può supportare il cliente nella predisposizione e gestione delle volture catastali.",
      },

      {
        question:
          "Catasto e regolarità urbanistica sono la stessa cosa?",

        answer:
          "No. La situazione catastale e quella urbanistico-edilizia riguardano verifiche differenti. La conformità della planimetria catastale non dimostra da sola la regolarità urbanistica dell’immobile. Quando necessario, lo Studio può verificare separatamente entrambi gli aspetti.",
      },

      {
        question:
          "In quali zone seguite pratiche catastali?",

        answer:
          "Lo Studio ha sede a Belpasso e opera principalmente a Catania e provincia e nei comuni dell’area etnea, valutando in funzione dell’incarico attività anche nel resto della Sicilia.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Devi aggiornare il catasto?",

    title:
      "Verifichiamo documenti e stato dell’immobile.",

    description:
      "Contattaci indicando la situazione dell’immobile e l’aggiornamento di cui hai bisogno. Valuteremo documentazione, eventuale rilievo e procedura catastale più adatta.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Service",

      "@id": `${PAGE_URL}/#service`,

      name:
        "Pratiche catastali a Belpasso e Catania",

      serviceType:
        "Pratiche catastali",

      url: PAGE_URL,

      description:
        "Servizio di pratiche catastali, DOCFA, variazioni, volture, planimetrie e aggiornamenti catastali a Belpasso, Catania e provincia.",

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
        "Pratiche catastali e aggiornamenti catastali",

      audience: {
        "@type": "Audience",
        audienceType:
          "Privati, imprese e professionisti",
      },
    },

    {
      "@type": "WebPage",

      "@id": `${PAGE_URL}/#webpage`,

      url: PAGE_URL,

      name:
        "Pratiche catastali a Belpasso e Catania",

      description:
        "DOCFA, variazioni catastali, volture, planimetrie e aggiornamenti catastali a Belpasso, Catania e provincia.",

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
          name: "Pratiche catastali",
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

export default function PraticheCatastaliPage() {
  return (
    <ServiceDetailPage
      config={config}
      jsonLd={jsonLd}
    />
  );
}