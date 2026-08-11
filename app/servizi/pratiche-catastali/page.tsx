import type { Metadata } from "next";
import {
  FileCheck2,
  FileSearch,
  Map,
  Ruler,
} from "lucide-react";

import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import type { ServiceDetailConfig } from "@/components/services/service-types";

const SITE_URL = "https://mironestudio.it";

const CONTACTS = {
  businessName: "Studio Tecnico Mirone",
  address: "Via XVI Traversa n. 53",
  postalCode: "95032",
  city: "Belpasso",
  province: "CT",
  region: "Sicilia",
  country: "IT",
  phone: "+39 348 293 4197",
  email: "info@mironestudio.it",
  emailHref: "mailto:info@mironestudio.it",
  whatsappHref:
    "https://wa.me/393482934197?text=Buongiorno%2C%20vorrei%20ricevere%20informazioni%20sulle%20pratiche%20catastali.",
};

export const metadata: Metadata = {
  title: "Pratiche catastali a Belpasso e Catania",

  description:
    "Pratiche catastali a Belpasso e Catania: DOCFA, variazioni catastali, volture, planimetrie e aggiornamenti catastali. Studio Tecnico Mirone segue verifiche, rilievi e predisposizione della documentazione tecnica.",

  alternates: {
    canonical: "/servizi/pratiche-catastali",
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
    "studio tecnico Belpasso",
    "Studio Tecnico Mirone",
  ],

  openGraph: {
    title:
      "Pratiche catastali a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "DOCFA, variazioni catastali, volture, planimetrie e aggiornamenti catastali a Belpasso, Catania e provincia.",

    url: `${SITE_URL}/servizi/pratiche-catastali`,
    siteName: CONTACTS.businessName,
    locale: "it_IT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Pratiche catastali a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Pratiche catastali, DOCFA, variazioni, volture e planimetrie a Belpasso e Catania.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const config: ServiceDetailConfig = {
  breadcrumbLabel: "Pratiche catastali",

  locationLabel:
    "Pratiche catastali · Belpasso · Catania",

  titleFirstLine: "Pratiche",
  titleSecondLine: "catastali",

  heroDescription:
    "Lo Studio Tecnico Mirone gestisce pratiche catastali a Belpasso, Catania e provincia, seguendo aggiornamenti, variazioni, DOCFA, volture e verifiche della documentazione catastale. L’attività viene coordinata con rilievi e controlli tecnici quando necessari.",

  whatsappHref: CONTACTS.whatsappHref,
  emailHref: CONTACTS.emailHref,

  heroChecklist: [
    "DOCFA",
    "Variazioni catastali",
    "Volture",
    "Planimetrie catastali",
    "Aggiornamenti catastali",
  ],

  introduction: {
    eyebrow: "Aggiornare correttamente i dati catastali",

    title:
      "Dalla verifica dell’immobile alla pratica catastale.",

    paragraphs: [
      "Le pratiche catastali servono ad aggiornare o verificare i dati tecnici e identificativi di un immobile. Ogni intervento deve essere impostato partendo dalla documentazione disponibile e dallo stato reale dei luoghi.",

      "Lo Studio Tecnico Mirone segue pratiche catastali a Belpasso, Catania e provincia, supportando privati e professionisti nella predisposizione di DOCFA, variazioni, volture e altri adempimenti collegati alla rappresentazione catastale dell’immobile.",

      "Quando necessario, l’attività catastale viene preceduta da sopralluoghi e rilievi utili a verificare la corrispondenza tra documentazione e stato dei luoghi.",
    ],
  },

  areas: {
    eyebrow: "Principali attività catastali",

    title:
      "Aggiornamenti e verifiche per immobili e unità catastali.",

    description:
      "La pratica da predisporre dipende dalla situazione dell’immobile, dalla modifica intervenuta e dalla documentazione disponibile.",

    cards: [
      {
        icon: FileCheck2,

        title: "DOCFA",

        description:
          "Predisposizione delle pratiche DOCFA per dichiarazioni di nuova costruzione, variazioni e aggiornamenti delle unità immobiliari.",
      },

      {
        icon: Ruler,

        title: "Variazioni catastali",

        description:
          "Aggiornamento della rappresentazione catastale in seguito a modifiche distributive, frazionamenti, fusioni o altre variazioni dell’immobile.",
      },

      {
        icon: FileSearch,

        title: "Volture catastali",

        description:
          "Supporto nella gestione delle volture necessarie per aggiornare l’intestazione catastale degli immobili nei casi previsti.",
      },

      {
        icon: Map,

        title: "Planimetrie e verifiche",

        description:
          "Controllo della documentazione catastale, delle planimetrie disponibili e della corrispondenza con lo stato dei luoghi.",
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
          "Raccogliamo visure, planimetrie e documentazione disponibile relativa all’immobile e alla modifica da registrare.",
      },

      {
        number: "02",

        title: "Verifica catastale",

        description:
          "Analizziamo i dati presenti negli archivi catastali e la documentazione disponibile.",
      },

      {
        number: "03",

        title: "Sopralluogo e rilievo",

        description:
          "Quando necessario, rileviamo lo stato dei luoghi per verificare geometrie, distribuzione interna e informazioni utili alla pratica.",
      },

      {
        number: "04",

        title: "Individuazione dell’aggiornamento",

        description:
          "Definiamo la procedura catastale corretta in funzione della situazione dell’immobile e dell’intervento eseguito.",
      },

      {
        number: "05",

        title: "Predisposizione della pratica",

        description:
          "Prepariamo elaborati, dati e documentazione tecnica necessaria alla presentazione dell’aggiornamento catastale.",
      },

      {
        number: "06",

        title: "Presentazione e verifica finale",

        description:
          "Trasmettiamo la pratica e controlliamo gli esiti e gli aggiornamenti conseguenti alla procedura.",
      },
    ],
  },

  benefits: {
    eyebrow: "Perché affidarsi allo Studio",

    title:
      "Dati catastali coerenti con la situazione dell’immobile.",

    description:
      "Una corretta verifica preliminare riduce il rischio di errori nella documentazione catastale e consente di impostare l’aggiornamento più adatto al caso specifico.",

    items: [
      "Verifica preliminare della documentazione catastale",
      "Confronto tra planimetrie e stato dei luoghi",
      "Gestione coordinata di rilievo e pratica",
      "Predisposizione degli elaborati necessari",
      "Supporto nella gestione di DOCFA e variazioni",
      "Chiarezza durante tutte le fasi dell’incarico",
    ],
  },

  deliverables: {
    eyebrow: "Attività e documentazione",

    title:
      "Cosa può comprendere l’incarico.",

    description:
      "Le prestazioni vengono definite in relazione alla pratica richiesta e alle condizioni dell’immobile.",

    items: [
      "Verifica visure catastali",
      "Verifica planimetrie disponibili",
      "Rilievo dello stato dei luoghi",
      "Restituzione grafica",
      "Predisposizione DOCFA",
      "Variazioni catastali",
      "Aggiornamento planimetrie",
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
      "Lo Studio Tecnico Mirone ha sede a Belpasso e segue pratiche catastali a Catania, nei comuni della provincia e nell’area etnea, valutando incarichi anche nel resto della Sicilia.",

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
          "Una variazione catastale può essere necessaria quando cambiano la distribuzione, la consistenza o altre caratteristiche dell’unità immobiliare che devono essere aggiornate negli archivi catastali.",
      },

      {
        question:
          "Che cos’è il DOCFA?",

        answer:
          "DOCFA è la procedura utilizzata per presentare determinate dichiarazioni e variazioni relative alle unità immobiliari urbane, secondo quanto previsto dalla normativa catastale.",
      },

      {
        question:
          "Serve un rilievo prima della pratica catastale?",

        answer:
          "Dipende dal caso. Quando è necessario verificare la corrispondenza tra lo stato dei luoghi e la documentazione disponibile, il sopralluogo e il rilievo sono attività molto importanti.",
      },

      {
        question:
          "Potete verificare se la planimetria catastale è aggiornata?",

        answer:
          "Sì. Lo Studio può confrontare la documentazione catastale disponibile con lo stato dei luoghi e valutare se siano necessari ulteriori approfondimenti o aggiornamenti.",
      },

      {
        question:
          "Gestite anche le volture catastali?",

        answer:
          "Sì, in relazione alla tipologia del caso e alla documentazione disponibile, lo Studio può supportare il cliente nella gestione delle volture catastali.",
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
      "Contattaci indicando la situazione dell’immobile e l’aggiornamento di cui hai bisogno. Valuteremo documentazione, eventuale rilievo e pratica catastale più adatta.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "ProfessionalService",

      "@id": `${SITE_URL}/#organization`,

      name: CONTACTS.businessName,
      url: SITE_URL,
      telephone: CONTACTS.phone,
      email: CONTACTS.email,

      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACTS.address,
        postalCode: CONTACTS.postalCode,
        addressLocality: CONTACTS.city,
        addressRegion: CONTACTS.region,
        addressCountry: CONTACTS.country,
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
        {
          "@type": "Country",
          name: "Italia",
        },
      ],
    },

    {
      "@type": "Service",

      "@id": `${SITE_URL}/servizi/pratiche-catastali/#service`,

      name:
        "Pratiche catastali a Belpasso e Catania",

      serviceType:
        "Pratiche catastali",

      url:
        `${SITE_URL}/servizi/pratiche-catastali`,

      description:
        "Servizio di pratiche catastali, DOCFA, variazioni, volture, planimetrie e aggiornamenti catastali a Belpasso, Catania e provincia.",

      provider: {
        "@id": `${SITE_URL}/#organization`,
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
    },

    {
      "@type": "BreadcrumbList",

      "@id":
        `${SITE_URL}/servizi/pratiche-catastali/#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Servizi",
          item: `${SITE_URL}/servizi`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Pratiche catastali",
          item: `${SITE_URL}/servizi/pratiche-catastali`,
        },
      ],
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