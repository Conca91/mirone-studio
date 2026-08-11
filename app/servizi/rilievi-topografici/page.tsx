import type { Metadata } from "next";
import {
  Crosshair,
  Map,
  MapPinned,
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
    "https://wa.me/393482934197?text=Buongiorno%2C%20vorrei%20ricevere%20informazioni%20sui%20rilievi%20topografici.",
};

export const metadata: Metadata = {
  title: "Rilievi topografici a Belpasso e Catania",

  description:
    "Rilievi topografici a Belpasso, Catania e provincia per terreni, fabbricati e interventi edilizi. Studio Tecnico Mirone esegue rilievi, misurazioni e restituzioni grafiche per progettazione e pratiche tecniche.",

  alternates: {
    canonical: "/servizi/rilievi-topografici",
  },

  keywords: [
    "rilievi topografici Belpasso",
    "rilievi topografici Catania",
    "rilievo topografico Belpasso",
    "rilievo topografico Catania",
    "topografo Belpasso",
    "topografo Catania",
    "rilievo GPS Belpasso",
    "rilievo GPS Catania",
    "rilievo terreno Belpasso",
    "rilievo terreno Catania",
    "rilievo fabbricato Belpasso",
    "misurazioni topografiche Catania",
    "studio tecnico Belpasso",
    "Studio Tecnico Mirone",
  ],

  openGraph: {
    title:
      "Rilievi topografici a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Rilievi topografici di terreni e fabbricati, misurazioni e restituzioni grafiche a Belpasso, Catania e provincia.",

    url: `${SITE_URL}/servizi/rilievi-topografici`,
    siteName: CONTACTS.businessName,
    locale: "it_IT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Rilievi topografici a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Rilievi di terreni e fabbricati, misurazioni topografiche e restituzioni grafiche a Belpasso e Catania.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const config: ServiceDetailConfig = {
  breadcrumbLabel: "Rilievi topografici",

  locationLabel:
    "Rilievi topografici · Belpasso · Catania",

  titleFirstLine: "Rilievi",
  titleSecondLine: "topografici",

  heroDescription:
    "Lo Studio Tecnico Mirone esegue rilievi topografici a Belpasso, Catania e provincia per terreni, fabbricati e interventi edilizi. Le misurazioni vengono organizzate e restituite attraverso elaborati tecnici utili alla progettazione, alle verifiche e alle successive attività professionali.",

  whatsappHref: CONTACTS.whatsappHref,
  emailHref: CONTACTS.emailHref,

  heroChecklist: [
    "Rilievi di terreni",
    "Rilievi di fabbricati",
    "Misurazioni topografiche",
    "Rilievi GPS",
    "Restituzione grafica",
  ],

  introduction: {
    eyebrow: "Misurare prima di progettare",

    title:
      "Conoscere con precisione lo stato dei luoghi.",

    paragraphs: [
      "Un rilievo accurato costituisce la base di molte attività tecniche. La corretta conoscenza delle dimensioni, delle quote, della geometria e delle caratteristiche dello stato dei luoghi permette di sviluppare progettazioni e verifiche su informazioni affidabili.",

      "Lo Studio Tecnico Mirone esegue rilievi topografici a Belpasso, Catania e provincia per terreni, fabbricati e aree interessate da interventi edilizi, scegliendo strumenti e modalità operative in funzione delle caratteristiche dell’incarico.",

      "I dati raccolti sul posto vengono successivamente elaborati e trasformati in una restituzione tecnica utilizzabile per progettazione, pratiche, verifiche e altre attività professionali.",
    ],
  },

  areas: {
    eyebrow: "Ambiti di intervento",

    title:
      "Rilievi per terreni, fabbricati e progettazione.",

    description:
      "Ogni rilievo viene impostato in funzione dello scopo dell’incarico e del livello di dettaglio necessario per le successive attività tecniche.",

    cards: [
      {
        icon: Map,

        title: "Rilievi di terreni",

        description:
          "Misurazione di terreni e aree esterne per acquisire geometrie, punti significativi, quote e informazioni utili alle successive attività tecniche.",
      },

      {
        icon: Ruler,

        title: "Rilievi di fabbricati",

        description:
          "Acquisizione delle dimensioni e delle caratteristiche geometriche degli immobili per rappresentare correttamente lo stato dei luoghi.",
      },

      {
        icon: Crosshair,

        title: "Rilievi topografici",

        description:
          "Misurazioni strumentali e acquisizione di punti utili alla definizione geometrica e altimetrica dell’area oggetto dell’incarico.",
      },

      {
        icon: MapPinned,

        title: "Restituzione tecnica",

        description:
          "Elaborazione dei dati rilevati e produzione di planimetrie ed elaborati grafici utilizzabili per progettazione e verifiche tecniche.",
      },
    ],
  },

  workflow: {
    eyebrow: "Il nostro metodo",

    title:
      "Dal sopralluogo alla restituzione del rilievo.",

    description:
      "Il lavoro viene organizzato partendo dalle finalità dell’incarico, così da acquisire sul posto le informazioni realmente necessarie.",

    steps: [
      {
        number: "01",

        title: "Analisi dell’incarico",

        description:
          "Definiamo lo scopo del rilievo, l’area interessata, il livello di dettaglio richiesto e gli elaborati necessari.",
      },

      {
        number: "02",

        title: "Sopralluogo",

        description:
          "Valutiamo direttamente le caratteristiche dei luoghi e organizziamo le operazioni di misurazione.",
      },

      {
        number: "03",

        title: "Acquisizione dei dati",

        description:
          "Raccogliamo misure, punti, quote e informazioni geometriche attraverso gli strumenti più adatti al tipo di rilievo.",
      },

      {
        number: "04",

        title: "Controllo delle misure",

        description:
          "Verifichiamo la coerenza dei dati acquisiti e la presenza delle informazioni necessarie alla successiva elaborazione.",
      },

      {
        number: "05",

        title: "Elaborazione",

        description:
          "Organizziamo ed elaboriamo i dati raccolti per ricostruire graficamente lo stato rilevato.",
      },

      {
        number: "06",

        title: "Restituzione",

        description:
          "Predisponiamo gli elaborati tecnici concordati e li rendiamo disponibili per progettazione, verifiche o altre attività previste dall’incarico.",
      },
    ],
  },

  benefits: {
    eyebrow: "Perché affidarsi allo Studio",

    title:
      "Dati affidabili per le decisioni successive.",

    description:
      "Un rilievo correttamente impostato permette di lavorare su una rappresentazione attendibile dello stato dei luoghi e riduce il rischio di errori nelle fasi successive.",

    items: [
      "Analisi preliminare delle finalità del rilievo",
      "Misurazioni organizzate in funzione dell’incarico",
      "Rilievo di terreni e fabbricati",
      "Elaborazione tecnica dei dati acquisiti",
      "Restituzioni grafiche chiare",
      "Collegamento diretto con progettazione e pratiche tecniche",
    ],
  },

  deliverables: {
    eyebrow: "Attività ed elaborati",

    title:
      "Cosa può comprendere l’incarico.",

    description:
      "Le attività e gli elaborati vengono definiti in funzione della tipologia di rilievo e delle finalità per cui vengono richiesti.",

    items: [
      "Sopralluogo preliminare",
      "Rilievo topografico",
      "Rilievo di terreni",
      "Rilievo di fabbricati",
      "Acquisizione di punti e quote",
      "Misurazioni geometriche",
      "Elaborazione dei dati",
      "Restituzione planimetrica",
      "Elaborati grafici dello stato rilevato",
      "Supporto alle successive attività progettuali",
    ],
  },

  locations: {
    eyebrow: "Dove operiamo",

    title:
      "Rilievi topografici a Belpasso, Catania e provincia.",

    description:
      "Lo Studio Tecnico Mirone ha sede a Belpasso ed esegue rilievi topografici a Catania, nei comuni della provincia e nell’area etnea. In funzione della tipologia e delle caratteristiche dell’incarico vengono valutate attività anche nel resto della Sicilia.",

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
      "Informazioni sui rilievi topografici.",

    items: [
      {
        question:
          "A cosa serve un rilievo topografico?",

        answer:
          "Il rilievo topografico permette di acquisire informazioni geometriche e altimetriche sullo stato dei luoghi. I dati possono essere utilizzati per progettazione, verifiche tecniche e altre attività professionali.",
      },

      {
        question:
          "Eseguite rilievi di terreni?",

        answer:
          "Sì. Lo Studio può eseguire rilievi di terreni e aree esterne acquisendo punti, geometrie, quote e altre informazioni necessarie in relazione alla finalità dell’incarico.",
      },

      {
        question:
          "Eseguite anche rilievi di fabbricati?",

        answer:
          "Sì. Il rilievo di un fabbricato consente di rappresentare lo stato dei luoghi attraverso misurazioni ed elaborati grafici utili per progettazione, verifiche e pratiche tecniche.",
      },

      {
        question:
          "Utilizzate strumenti GPS per i rilievi?",

        answer:
          "Gli strumenti vengono scelti in funzione della tipologia di rilievo, delle caratteristiche dell’area e del livello di precisione necessario per l’incarico.",
      },

      {
        question:
          "Il rilievo può essere utilizzato per un progetto architettonico?",

        answer:
          "Sì. Una corretta rappresentazione dello stato dei luoghi costituisce spesso il punto di partenza per sviluppare un progetto architettonico o un intervento di ristrutturazione.",
      },

      {
        question:
          "In quali zone effettuate rilievi topografici?",

        answer:
          "Lo Studio ha sede a Belpasso ed esegue rilievi principalmente a Catania e provincia e nei comuni dell’area etnea, valutando in funzione dell’incarico attività anche nel resto della Sicilia.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Hai bisogno di un rilievo?",

    title:
      "Raccontaci cosa devi misurare.",

    description:
      "Indicaci la tipologia di immobile, terreno o area interessata e la finalità del rilievo. Valuteremo le attività necessarie e la modalità operativa più adatta.",
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

      "@id": `${SITE_URL}/servizi/rilievi-topografici/#service`,

      name:
        "Rilievi topografici a Belpasso e Catania",

      serviceType:
        "Rilievi topografici",

      url:
        `${SITE_URL}/servizi/rilievi-topografici`,

      description:
        "Servizio di rilievi topografici di terreni e fabbricati, misurazioni e restituzioni grafiche a Belpasso, Catania e provincia.",

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
        `${SITE_URL}/servizi/rilievi-topografici/#breadcrumb`,

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
          name: "Rilievi topografici",
          item: `${SITE_URL}/servizi/rilievi-topografici`,
        },
      ],
    },
  ],
};

export default function RilieviTopograficiPage() {
  return (
    <ServiceDetailPage
      config={config}
      jsonLd={jsonLd}
    />
  );
}