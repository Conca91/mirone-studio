import type { Metadata } from "next";
import {
  Building2,
  Home,
  Layers3,
  PencilRuler,
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
    "https://wa.me/393482934197?text=Buongiorno%2C%20vorrei%20ricevere%20informazioni%20sul%20servizio%20di%20progettazione%20architettonica.",
};

export const metadata: Metadata = {
  title: "Progettazione architettonica a Belpasso e Catania",

  description:
    "Progettazione architettonica a Belpasso e Catania per ville, abitazioni, nuove costruzioni e ristrutturazioni. Studio Tecnico Mirone segue il progetto dalla fattibilità alla realizzazione.",

  alternates: {
    canonical: "/servizi/progettazione-architettonica",
  },

  keywords: [
    "progettazione architettonica Belpasso",
    "progettazione architettonica Catania",
    "progettazione case Belpasso",
    "progettazione ville Catania",
    "progettazione ville Belpasso",
    "studio progettazione Catania",
    "studio tecnico progettazione Belpasso",
    "progettazione nuova costruzione Catania",
    "progettazione ristrutturazione Belpasso",
    "progetto architettonico Sicilia",
    "Studio Tecnico Mirone",
  ],

  openGraph: {
    title:
      "Progettazione architettonica a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Progettazione di ville, abitazioni, nuove costruzioni e ristrutturazioni a Belpasso, Catania e provincia.",

    url: `${SITE_URL}/servizi/progettazione-architettonica`,
    siteName: CONTACTS.businessName,
    locale: "it_IT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Progettazione architettonica a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Progettazione di abitazioni, ville, ristrutturazioni e nuove costruzioni a Belpasso, Catania e provincia.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const config: ServiceDetailConfig = {
  breadcrumbLabel: "Progettazione architettonica",

  locationLabel:
    "Progettazione architettonica · Belpasso · Catania",

  titleFirstLine: "Progettazione",
  titleSecondLine: "architettonica",

  heroDescription:
    "Lo Studio Tecnico Mirone sviluppa progetti architettonici a Belpasso, Catania e provincia per nuove costruzioni, ville, abitazioni e ristrutturazioni. Trasformiamo esigenze, vincoli e possibilità concrete in spazi funzionali, riconoscibili e realizzabili.",

  whatsappHref: CONTACTS.whatsappHref,
  emailHref: CONTACTS.emailHref,

  heroChecklist: [
    "Studio di fattibilità",
    "Progetto architettonico",
    "Pratiche edilizie",
    "Rendering tridimensionali",
    "Direzione dei lavori",
  ],

  introduction: {
    eyebrow: "Progettare con metodo",

    title:
      "Dall’idea iniziale a un progetto concreto.",

    paragraphs: [
      "Un buon progetto architettonico non nasce soltanto da una bella immagine. Deve interpretare le esigenze di chi vivrà gli spazi, rispettare le caratteristiche del luogo, rispondere alle norme e rimanere coerente con il budget disponibile.",

      "Lo Studio Tecnico Mirone sviluppa a Belpasso, Catania e provincia soluzioni personalizzate per abitazioni, ville, nuove costruzioni e ristrutturazioni. Ogni incarico parte dall’analisi dello stato di fatto e prosegue con lo studio della distribuzione interna, dei volumi, delle aperture, dei collegamenti e del rapporto tra edificio e spazio esterno.",

      "Il cliente viene accompagnato nelle diverse fasi con elaborati comprensibili, confronti diretti e rappresentazioni tridimensionali che permettono di valutare le scelte prima dell’avvio dei lavori.",
    ],
  },

  areas: {
    eyebrow: "Ambiti di intervento",

    title:
      "Progetti pensati per essere vissuti e realizzati.",

    description:
      "Ogni intervento viene sviluppato considerando contemporaneamente qualità architettonica, funzionalità, normativa, vincoli tecnici e sostenibilità economica.",

    cards: [
      {
        icon: Home,

        title: "Abitazioni e ville",

        description:
          "Progettazione di case unifamiliari, ville contemporanee e residenze studiate sulle esigenze della famiglia e sulle caratteristiche del luogo.",
      },

      {
        icon: Building2,

        title: "Nuove costruzioni",

        description:
          "Sviluppo completo del progetto, dalla verifica di fattibilità iniziale fino agli elaborati necessari per autorizzazione e realizzazione.",
      },

      {
        icon: PencilRuler,

        title: "Ristrutturazioni",

        description:
          "Riorganizzazione degli spazi, ampliamenti, recupero degli immobili e valorizzazione del patrimonio edilizio esistente.",
      },

      {
        icon: Layers3,

        title: "Spazi interni",

        description:
          "Distribuzione funzionale degli ambienti, studio dei percorsi, illuminazione, materiali e rapporto tra spazi interni ed esterni.",
      },
    ],
  },

  workflow: {
    eyebrow: "Il nostro metodo",

    title:
      "Sei fasi, un unico percorso.",

    description:
      "Un processo ordinato riduce le incertezze, rende più chiare le decisioni e permette di controllare meglio tempi, costi e qualità del risultato.",

    steps: [
      {
        number: "01",

        title: "Ascolto e analisi",

        description:
          "Partiamo dalle esigenze del cliente, dal budget, dalle caratteristiche dell’immobile o del terreno e dagli obiettivi dell’intervento.",
      },

      {
        number: "02",

        title: "Verifica preliminare",

        description:
          "Analizziamo la situazione urbanistica, edilizia e catastale per verificare la fattibilità dell’intervento prima di sviluppare il progetto.",
      },

      {
        number: "03",

        title: "Progetto preliminare",

        description:
          "Definiamo volumi, distribuzione degli ambienti, collegamenti, aperture, orientamento e principali scelte architettoniche.",
      },

      {
        number: "04",

        title: "Sviluppo del progetto",

        description:
          "Produciamo elaborati grafici, prospetti, sezioni, dettagli e rappresentazioni tridimensionali utili a comprendere e verificare ogni scelta.",
      },

      {
        number: "05",

        title: "Pratiche e autorizzazioni",

        description:
          "Predisponiamo le pratiche edilizie necessarie e coordiniamo gli eventuali professionisti coinvolti nell’intervento.",
      },

      {
        number: "06",

        title: "Realizzazione",

        description:
          "Il progetto può proseguire con direzione dei lavori, assistenza al cantiere e verifica della corretta esecuzione delle opere.",
      },
    ],
  },

  benefits: {
    eyebrow: "Perché scegliere lo Studio",

    title:
      "Un progetto chiaro prima di iniziare il cantiere.",

    description:
      "Definire con attenzione gli spazi e le scelte principali prima della realizzazione consente di ridurre modifiche in corso d’opera, incomprensioni e costi non previsti.",

    items: [
      "Un unico referente per progetto, pratiche e cantiere",
      "Soluzioni sviluppate sulle esigenze reali del cliente",
      "Verifica preliminare della fattibilità dell’intervento",
      "Attenzione a funzionalità, estetica e sostenibilità economica",
      "Elaborati chiari e rappresentazioni tridimensionali",
      "Coordinamento tra aspetti architettonici e tecnici",
    ],
  },

  deliverables: {
    eyebrow: "Elaborati e prestazioni",

    title:
      "Cosa può comprendere l’incarico.",

    description:
      "Le attività vengono definite in base alla tipologia e alla complessità dell’intervento. Il preventivo indica con chiarezza le prestazioni comprese nell’incarico.",

    items: [
      "Analisi preliminare e studio di fattibilità",
      "Planimetrie dello stato attuale e di progetto",
      "Prospetti e sezioni architettoniche",
      "Studio della distribuzione interna",
      "Modelli tridimensionali e rendering",
      "Elaborati per le pratiche edilizie",
      "Dettagli costruttivi essenziali",
      "Supporto nella scelta di materiali e finiture",
    ],
  },

  locations: {
    eyebrow: "Dove operiamo",

    title:
      "Progettazione architettonica a Belpasso, Catania e provincia.",

    description:
      "La sede dello Studio Tecnico Mirone è a Belpasso. Seguiamo incarichi di progettazione architettonica a Catania, nei comuni della provincia e nell’area etnea, valutando anche interventi nel resto della Sicilia e sul territorio nazionale.",

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
      "Informazioni sulla progettazione architettonica.",

    items: [
      {
        question:
          "Quanto costa un progetto architettonico?",

        answer:
          "Il costo dipende dalla dimensione dell’immobile, dalla complessità dell’intervento e dalle prestazioni richieste. Dopo un primo confronto e l’analisi del caso, lo Studio predispone un preventivo chiaro con attività, compensi e fasi dell’incarico.",
      },

      {
        question:
          "È possibile richiedere solo uno studio preliminare?",

        answer:
          "Sì. È possibile iniziare con uno studio di fattibilità o con una proposta preliminare, utile per verificare le potenzialità dell’immobile, confrontare diverse soluzioni e valutare l’investimento prima di procedere.",
      },

      {
        question:
          "Lo Studio segue anche le pratiche edilizie?",

        answer:
          "Sì. Quando necessarie, predisponiamo e gestiamo CILA, SCIA, Permesso di Costruire e gli altri procedimenti edilizi collegati al progetto, in base alla tipologia di intervento.",
      },

      {
        question:
          "Posso vedere il risultato prima dell’inizio dei lavori?",

        answer:
          "Sì. Attraverso modelli tridimensionali e rendering architettonici è possibile comprendere volumi, spazi, materiali e aspetto complessivo del progetto prima della realizzazione.",
      },

      {
        question:
          "Seguite anche la direzione dei lavori?",

        answer:
          "Sì. Lo Studio può seguire l’intervento anche durante la fase esecutiva, coordinando il cantiere e verificando che le opere vengano realizzate nel rispetto del progetto e delle autorizzazioni.",
      },

      {
        question:
          "In quali zone operate?",

        answer:
          "La sede è a Belpasso e lo Studio opera principalmente a Catania e provincia, nei comuni dell’area etnea e, in funzione dell’incarico, anche nel resto della Sicilia e sul territorio nazionale.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Hai un progetto da realizzare?",

    title:
      "Raccontaci la tua idea.",

    description:
      "Valuteremo esigenze, immobile o terreno, fattibilità e percorso tecnico più adatto per trasformare l’idea in un progetto concreto.",
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
        `${SITE_URL}/servizi/progettazione-architettonica/#service`,

      name:
        "Progettazione architettonica a Belpasso e Catania",

      serviceType:
        "Progettazione architettonica",

      url:
        `${SITE_URL}/servizi/progettazione-architettonica`,

      description:
        "Servizio di progettazione architettonica per nuove costruzioni, abitazioni, ville e ristrutturazioni a Belpasso, Catania e provincia.",

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
        `${SITE_URL}/servizi/progettazione-architettonica/#breadcrumb`,

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

          name:
            "Progettazione architettonica",

          item:
            `${SITE_URL}/servizi/progettazione-architettonica`,
        },
      ],
    },
  ],
};

export default function ProgettazioneArchitettonicaPage() {
  return (
    <ServiceDetailPage
      config={config}
      jsonLd={jsonLd}
    />
  );
}