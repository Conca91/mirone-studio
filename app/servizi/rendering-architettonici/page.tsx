import type { Metadata } from "next";
import {
  Box,
  Image as ImageIcon,
  LampDesk,
  MonitorUp,
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
    "https://wa.me/393482934197?text=Buongiorno%2C%20vorrei%20ricevere%20informazioni%20sui%20rendering%20architettonici.",
};

export const metadata: Metadata = {
  title: "Rendering architettonici a Belpasso e Catania",

  description:
    "Rendering architettonici a Belpasso e Catania per interni, esterni, ville e ristrutturazioni. Studio Tecnico Mirone realizza immagini 3D fotorealistiche per valutare spazi, materiali, illuminazione e progetto prima della realizzazione.",

  alternates: {
    canonical: "/servizi/rendering-architettonici",
  },

  keywords: [
    "rendering architettonici Belpasso",
    "rendering architettonici Catania",
    "rendering 3D Belpasso",
    "rendering 3D Catania",
    "rendering interni Catania",
    "rendering esterni Catania",
    "rendering ville Catania",
    "visualizzazione architettonica Catania",
    "modellazione 3D Belpasso",
    "modellazione 3D Catania",
    "Studio Tecnico Mirone",
  ],

  openGraph: {
    title:
      "Rendering architettonici a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Rendering 3D e immagini fotorealistiche per interni, esterni, ville e ristrutturazioni a Belpasso, Catania e provincia.",

    url: `${SITE_URL}/servizi/rendering-architettonici`,
    siteName: CONTACTS.businessName,
    locale: "it_IT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Rendering architettonici a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Rendering 3D fotorealistici per interni, esterni, ville e ristrutturazioni a Belpasso e Catania.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const config: ServiceDetailConfig = {
  breadcrumbLabel: "Rendering architettonici",

  locationLabel:
    "Rendering architettonici · Belpasso · Catania",

  titleFirstLine: "Rendering",
  titleSecondLine: "architettonici",

  heroDescription:
    "Lo Studio Tecnico Mirone realizza rendering architettonici a Belpasso, Catania e provincia per interni, esterni, ville, nuove costruzioni e ristrutturazioni. Le immagini tridimensionali aiutano a comprendere il progetto, confrontare soluzioni e valutare materiali, luce e proporzioni prima della realizzazione.",

  whatsappHref: CONTACTS.whatsappHref,
  emailHref: CONTACTS.emailHref,

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

      "Lo Studio Tecnico Mirone realizza rendering architettonici a Belpasso, Catania e provincia per abitazioni, ville, interni, esterni, nuove costruzioni e interventi di ristrutturazione.",

      "La visualizzazione 3D diventa uno strumento utile sia nella fase progettuale, per confrontare diverse soluzioni, sia nella comunicazione con il cliente, che può valutare con maggiore consapevolezza le scelte prima dell’avvio dei lavori.",
    ],
  },

  areas: {
    eyebrow: "Ambiti di applicazione",

    title:
      "Immagini tridimensionali per spazi, materiali e progetto.",

    description:
      "Il livello di dettaglio e la tipologia delle immagini vengono definiti in funzione della fase progettuale e delle esigenze dell’incarico.",

    cards: [
      {
        icon: MonitorUp,

        title: "Rendering esterni",

        description:
          "Visualizzazione di facciate, volumi, aperture, materiali e rapporto dell’edificio con gli spazi esterni.",
      },

      {
        icon: ImageIcon,

        title: "Rendering interni",

        description:
          "Rappresentazione degli ambienti interni per valutare distribuzione, materiali, arredi, colori e atmosfera complessiva dello spazio.",
      },

      {
        icon: Box,

        title: "Modellazione 3D",

        description:
          "Costruzione del modello tridimensionale dell’edificio o degli ambienti a partire dagli elaborati progettuali disponibili.",
      },

      {
        icon: LampDesk,

        title: "Materiali e illuminazione",

        description:
          "Studio dell’effetto di finiture, superfici e fonti luminose per confrontare diverse soluzioni progettuali.",
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
          "Raccogliamo planimetrie, prospetti, sezioni, riferimenti, materiali e indicazioni utili alla costruzione della scena.",
      },

      {
        number: "02",

        title: "Modellazione 3D",

        description:
          "Costruiamo il modello tridimensionale degli spazi e degli elementi principali da rappresentare.",
      },

      {
        number: "03",

        title: "Definizione delle viste",

        description:
          "Individuiamo le inquadrature più adatte per comunicare gli aspetti principali del progetto.",
      },

      {
        number: "04",

        title: "Materiali",

        description:
          "Applichiamo materiali, texture e finiture coerenti con le scelte progettuali o con le alternative da confrontare.",
      },

      {
        number: "05",

        title: "Illuminazione",

        description:
          "Impostiamo luce naturale e artificiale per rappresentare correttamente l’atmosfera e le caratteristiche degli spazi.",
      },

      {
        number: "06",

        title: "Rendering finale",

        description:
          "Produciamo le immagini finali e, quando previsto, sviluppiamo revisioni sulla base delle scelte definite con il cliente.",
      },
    ],
  },

  benefits: {
    eyebrow: "Perché utilizzare il rendering",

    title:
      "Decisioni più consapevoli prima del cantiere.",

    description:
      "Vedere il progetto in anticipo permette di confrontare alternative e comprendere meglio l’effetto delle principali scelte architettoniche.",

    items: [
      "Comprensione immediata degli spazi",
      "Confronto tra diverse soluzioni progettuali",
      "Valutazione preventiva di materiali e finiture",
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
      "Applicazione materiali e texture",
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
      "Rendering architettonici a Belpasso, Catania e provincia.",

    description:
      "Lo Studio Tecnico Mirone ha sede a Belpasso e realizza rendering architettonici per progetti a Catania, nei comuni della provincia, in Sicilia e, grazie alla natura digitale del servizio, anche per incarichi sul territorio nazionale.",

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
      "Informazioni sui rendering architettonici.",

    items: [
      {
        question:
          "A cosa serve un rendering architettonico?",

        answer:
          "Il rendering permette di visualizzare il progetto prima della realizzazione e di comprendere più facilmente volumi, spazi, materiali, colori e illuminazione.",
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
          "Sì. È possibile rappresentare facciate, volumi, spazi esterni e rapporto dell’edificio con il contesto.",
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
          "Dipende dal livello di definizione richiesto. Il rendering può essere sviluppato sia durante la progettazione sia su un progetto già definito. Il materiale necessario viene valutato in base all’incarico.",
      },

      {
        question:
          "Potete realizzare rendering anche per clienti fuori dalla Sicilia?",

        answer:
          "Sì. Essendo un servizio prevalentemente digitale, la modellazione e la produzione delle immagini possono essere sviluppate anche per progetti situati fuori dalla Sicilia, sulla base della documentazione disponibile.",
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

      "@id":
        `${SITE_URL}/servizi/rendering-architettonici/#service`,

      name:
        "Rendering architettonici a Belpasso e Catania",

      serviceType:
        "Rendering architettonico e modellazione 3D",

      url:
        `${SITE_URL}/servizi/rendering-architettonici`,

      description:
        "Servizio di rendering architettonici e modellazione 3D per interni, esterni, ville, nuove costruzioni e ristrutturazioni a Belpasso, Catania e provincia.",

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
        {
          "@type": "Country",
          name: "Italia",
        },
      ],
    },

    {
      "@type": "BreadcrumbList",

      "@id":
        `${SITE_URL}/servizi/rendering-architettonici/#breadcrumb`,

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
          name: "Rendering architettonici",
          item: `${SITE_URL}/servizi/rendering-architettonici`,
        },
      ],
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