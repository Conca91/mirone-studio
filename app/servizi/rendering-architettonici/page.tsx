import type { Metadata } from "next";
import {
  Box,
  Image as ImageIcon,
  LampDesk,
  MonitorUp,
} from "lucide-react";

import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import type { ServiceDetailConfig } from "@/components/services/service-types";
import { seo } from "@/data/seo";

const PAGE_PATH = "/servizi/rendering-architettonici";
const PAGE_URL = `${seo.siteUrl}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Rendering architettonici e 3D a Belpasso e Catania",

  description:
    "Rendering architettonici e modellazione 3D a Belpasso e Catania per interni, esterni, ville e ristrutturazioni. Studio Tecnico Mirone realizza visualizzazioni fotorealistiche per valutare il progetto prima della realizzazione.",

  alternates: {
    canonical: PAGE_PATH,
  },

  keywords: [
    "rendering architettonici Belpasso",
    "rendering architettonici Catania",
    "rendering 3D Belpasso",
    "rendering 3D Catania",
    "rendering interni Belpasso",
    "rendering interni Catania",
    "rendering esterni Belpasso",
    "rendering esterni Catania",
    "rendering ville Catania",
    "visualizzazione architettonica Belpasso",
    "visualizzazione architettonica Catania",
    "visualizzazione 3D Catania",
    "modellazione 3D Belpasso",
    "modellazione 3D Catania",
    "progettazione 3D Belpasso",
    "progettazione 3D Catania",
    "render fotorealistici Catania",
    "render architettura Catania",
    "progettazione architettonica Belpasso",
    "progettazione architettonica Catania",
    "ingegnere Belpasso",
    "ingegnere Catania",
    "Ingegnere Miriana Mirone",
    "Miriana Mirone",
    "Studio Tecnico Mirone",
  ],

  openGraph: {
    title:
      "Rendering architettonici e 3D a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Rendering 3D e immagini fotorealistiche per interni, esterni, ville, nuove costruzioni e ristrutturazioni a Belpasso, Catania e provincia.",

    url: PAGE_URL,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",

    images: [
      {
        url: seo.images.openGraph,
        width: 1200,
        height: 630,
        alt: "Rendering architettonici e modellazione 3D - Studio Tecnico Mirone",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Rendering architettonici e 3D a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Rendering 3D fotorealistici per interni, esterni, ville e ristrutturazioni a Belpasso e Catania.",

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
  breadcrumbLabel: "Rendering architettonici",

  locationLabel:
    "Rendering architettonici · Modellazione 3D · Belpasso · Catania",

  titleFirstLine: "Rendering",
  titleSecondLine: "architettonici",

  heroDescription:
    "Lo Studio Tecnico Mirone realizza rendering architettonici e modellazione 3D a Belpasso, Catania e provincia per interni, esterni, ville, nuove costruzioni e ristrutturazioni. Le visualizzazioni tridimensionali permettono di comprendere il progetto, confrontare soluzioni e valutare materiali, luce e proporzioni prima della realizzazione.",

  whatsappHref:
    "https://wa.me/393482934197?text=Buongiorno%2C%20vorrei%20ricevere%20informazioni%20sui%20rendering%20architettonici.",

  emailHref: seo.contact.emailHref,

  heroChecklist: [
    "Modellazione 3D",
    "Rendering interni",
    "Rendering esterni",
    "Studio di materiali",
    "Illuminazione",
  ],

  introduction: {
    eyebrow: "Visualizzare prima di costruire",

    title:
      "Comprendere il progetto prima della realizzazione.",

    paragraphs: [
      "Il rendering architettonico permette di rappresentare in modo chiaro e realistico un progetto prima che venga costruito. Attraverso immagini tridimensionali è possibile comprendere meglio volumi, spazi, materiali, colori e rapporti tra gli elementi architettonici.",

      "Lo Studio Tecnico Mirone realizza rendering architettonici e visualizzazioni 3D a Belpasso, Catania e provincia per abitazioni, ville, interni, esterni, nuove costruzioni e interventi di ristrutturazione.",

      "La visualizzazione 3D diventa uno strumento utile sia durante la progettazione, per confrontare diverse soluzioni, sia nella comunicazione con il cliente, che può valutare con maggiore consapevolezza le principali scelte architettoniche prima dell’avvio dei lavori.",
    ],
  },

  areas: {
    eyebrow: "Ambiti di applicazione",

    title:
      "Immagini tridimensionali per spazi, materiali e progetto.",

    description:
      "Il livello di dettaglio e la tipologia delle immagini vengono definiti in funzione della fase progettuale, delle caratteristiche dell’intervento e delle esigenze dell’incarico.",

    cards: [
      {
        icon: MonitorUp,

        title: "Rendering esterni",

        description:
          "Visualizzazione di facciate, volumi, aperture, materiali e rapporto dell’edificio con gli spazi esterni e il contesto.",
      },

      {
        icon: ImageIcon,

        title: "Rendering interni",

        description:
          "Rappresentazione degli ambienti interni per valutare distribuzione, materiali, arredi, colori, illuminazione e atmosfera complessiva dello spazio.",
      },

      {
        icon: Box,

        title: "Modellazione 3D",

        description:
          "Costruzione del modello tridimensionale dell’edificio o degli ambienti a partire dagli elaborati progettuali e dalle informazioni disponibili.",
      },

      {
        icon: LampDesk,

        title: "Materiali e illuminazione",

        description:
          "Studio dell’effetto di finiture, superfici, colori e fonti luminose per confrontare diverse soluzioni progettuali prima della realizzazione.",
      },
    ],
  },

  workflow: {
    eyebrow: "Il nostro metodo",

    title:
      "Dal progetto al modello tridimensionale.",

    description:
      "Il rendering viene sviluppato attraverso un processo coordinato con il progetto architettonico e con le informazioni disponibili sull’intervento.",

    steps: [
      {
        number: "01",

        title: "Raccolta del materiale",

        description:
          "Raccogliamo planimetrie, prospetti, sezioni, riferimenti, materiali e indicazioni utili alla costruzione del modello e della scena.",
      },

      {
        number: "02",

        title: "Modellazione 3D",

        description:
          "Costruiamo il modello tridimensionale degli spazi, dell’edificio e degli elementi principali da rappresentare.",
      },

      {
        number: "03",

        title: "Definizione delle viste",

        description:
          "Individuiamo le inquadrature più adatte per comunicare gli aspetti principali del progetto e valorizzare gli spazi.",
      },

      {
        number: "04",

        title: "Materiali",

        description:
          "Applichiamo materiali, texture, colori e finiture coerenti con le scelte progettuali o con le alternative da confrontare.",
      },

      {
        number: "05",

        title: "Illuminazione",

        description:
          "Impostiamo luce naturale e artificiale per rappresentare l’atmosfera e le caratteristiche architettoniche degli spazi.",
      },

      {
        number: "06",

        title: "Rendering finale",

        description:
          "Produciamo le immagini finali e, quando previsto dall’incarico, sviluppiamo revisioni sulla base delle scelte definite con il cliente.",
      },
    ],
  },

  benefits: {
    eyebrow: "Perché utilizzare il rendering",

    title:
      "Decisioni più consapevoli prima del cantiere.",

    description:
      "Vedere il progetto in anticipo permette di confrontare alternative, comprendere gli spazi e valutare l’effetto delle principali scelte architettoniche prima della loro realizzazione.",

    items: [
      "Comprensione immediata degli spazi",
      "Confronto tra diverse soluzioni progettuali",
      "Valutazione preventiva di materiali e finiture",
      "Studio di colori e superfici",
      "Studio dell’illuminazione",
      "Supporto alle decisioni del cliente",
      "Comunicazione più chiara del progetto",
    ],
  },

  deliverables: {
    eyebrow: "Elaborati e prestazioni",

    title:
      "Cosa può comprendere l’incarico.",

    description:
      "Le attività vengono definite in funzione del progetto, del numero di immagini richieste e del livello di dettaglio necessario.",

    items: [
      "Modellazione tridimensionale",
      "Rendering di interni",
      "Rendering di esterni",
      "Studio delle inquadrature",
      "Applicazione di materiali e texture",
      "Studio di colori e finiture",
      "Studio dell’illuminazione",
      "Immagini fotorealistiche",
      "Varianti di materiali e finiture",
      "Revisioni concordate",
      "Supporto alla presentazione del progetto",
    ],
  },

  locations: {
    eyebrow: "Dove operiamo",

    title:
      "Rendering architettonici a Belpasso, Catania e in tutta Italia.",

    description:
      "Lo Studio Tecnico Mirone ha sede a Belpasso e realizza rendering architettonici per progetti a Catania, nei comuni della provincia e in Sicilia. Grazie alla natura digitale del servizio, la modellazione 3D e la produzione delle immagini possono essere sviluppate anche per progetti situati nel resto d’Italia.",

    items: [
      "Belpasso",
      "Catania",
      "Nicolosi",
      "Mascalucia",
      "Pedara",
      "Paternò",
      "Misterbianco",
      "Provincia di Catania",
      "Sicilia",
      "Italia",
    ],
  },

  faqs: {
    eyebrow: "Domande frequenti",

    title:
      "Informazioni sui rendering architettonici.",

    items: [
      {
        question:
          "A cosa serve un rendering architettonico?",

        answer:
          "Il rendering permette di visualizzare un progetto prima della realizzazione e di comprendere più facilmente volumi, spazi, materiali, colori, finiture e illuminazione.",
      },

      {
        question:
          "È possibile realizzare rendering di interni?",

        answer:
          "Sì. I rendering di interni possono rappresentare distribuzione degli ambienti, finiture, materiali, arredi e illuminazione per valutare l’aspetto complessivo dello spazio.",
      },

      {
        question:
          "Realizzate anche rendering esterni?",

        answer:
          "Sì. I rendering esterni permettono di rappresentare facciate, volumi, materiali, spazi esterni e rapporto dell’edificio con il contesto.",
      },

      {
        question:
          "Posso confrontare diversi materiali o colori?",

        answer:
          "Sì. Uno dei vantaggi della visualizzazione tridimensionale è la possibilità di confrontare diverse combinazioni di materiali, finiture e colori prima della scelta definitiva.",
      },

      {
        question:
          "Serve già un progetto completo per richiedere un rendering?",

        answer:
          "Dipende dal livello di definizione richiesto. Il rendering può essere sviluppato durante la progettazione oppure a partire da un progetto già definito. Il materiale necessario viene valutato in funzione dell’incarico.",
      },

      {
        question:
          "Il rendering può essere integrato con la progettazione architettonica?",

        answer:
          "Sì. Lo Studio Tecnico Mirone utilizza la modellazione e la visualizzazione tridimensionale anche come supporto alla progettazione architettonica, per verificare e confrontare le soluzioni prima della realizzazione.",
      },

      {
        question:
          "Posso richiedere rendering 3D a Catania o Belpasso?",

        answer:
          "Sì. Lo Studio Tecnico Mirone ha sede a Belpasso e realizza rendering architettonici e modellazioni 3D per progetti a Belpasso, Catania, in provincia e nel resto della Sicilia.",
      },

      {
        question:
          "Potete realizzare rendering anche per clienti fuori dalla Sicilia?",

        answer:
          "Sì. Essendo un servizio prevalentemente digitale, la modellazione 3D e la produzione delle immagini possono essere sviluppate anche per progetti situati fuori dalla Sicilia e nel resto d’Italia, sulla base della documentazione disponibile.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Vuoi vedere il progetto prima di realizzarlo?",

    title:
      "Trasformiamo il progetto in immagini.",

    description:
      "Inviaci planimetrie, elaborati o informazioni sul progetto. Valuteremo il livello di modellazione, le viste e le immagini più adatte alle tue esigenze.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Service",

      "@id": `${PAGE_URL}/#service`,

      name:
        "Rendering architettonici e modellazione 3D a Belpasso e Catania",

      alternateName: [
        "Rendering architettonico",
        "Rendering 3D",
        "Visualizzazione architettonica",
        "Modellazione 3D",
      ],

      serviceType:
        "Rendering architettonico e modellazione 3D",

      url: PAGE_URL,

      description:
        "Servizio di rendering architettonici, modellazione 3D e visualizzazione fotorealistica per interni, esterni, ville, nuove costruzioni e ristrutturazioni.",

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

        {
          "@type": "Country",
          name: "Italia",
        },
      ],

      category:
        "Rendering architettonico, visualizzazione 3D e modellazione tridimensionale",

      audience: {
        "@type": "Audience",
        audienceType:
          "Privati, imprese, progettisti e professionisti",
      },
    },

    {
      "@type": "WebPage",

      "@id": `${PAGE_URL}/#webpage`,

      url: PAGE_URL,

      name:
        "Rendering architettonici e 3D a Belpasso e Catania",

      description:
        "Rendering architettonici, modellazione 3D e immagini fotorealistiche per interni, esterni, ville e ristrutturazioni.",

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
          name: "Rendering architettonici",
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

export default function RenderingArchitettoniciPage() {
  return (
    <ServiceDetailPage
      config={config}
      jsonLd={jsonLd}
    />
  );
}