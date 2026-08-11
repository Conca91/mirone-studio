import type { Metadata } from "next";
import {
  BadgeCheck,
  FileText,
  Gauge,
  Home,
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
    "https://wa.me/393482934197?text=Buongiorno%2C%20vorrei%20ricevere%20informazioni%20sull%27APE%20e%20sulla%20certificazione%20energetica.",
};

export const metadata: Metadata = {
  title: "APE e certificazione energetica a Belpasso e Catania",

  description:
    "APE e certificazione energetica a Belpasso e Catania per vendita, locazione, nuove costruzioni e ristrutturazioni. Studio Tecnico Mirone segue sopralluogo, raccolta dati, calcolo e redazione dell’Attestato di Prestazione Energetica.",

  alternates: {
    canonical: "/servizi/ape",
  },

  keywords: [
    "APE Belpasso",
    "APE Catania",
    "certificazione energetica Belpasso",
    "certificazione energetica Catania",
    "Attestato di Prestazione Energetica Belpasso",
    "Attestato di Prestazione Energetica Catania",
    "APE vendita immobile Belpasso",
    "APE locazione Catania",
    "APE ristrutturazione Belpasso",
    "studio tecnico Belpasso",
    "Studio Tecnico Mirone",
  ],

  openGraph: {
    title:
      "APE e certificazione energetica a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Attestati di Prestazione Energetica per vendita, locazione, nuove costruzioni e ristrutturazioni a Belpasso, Catania e provincia.",

    url: `${SITE_URL}/servizi/ape`,
    siteName: CONTACTS.businessName,
    locale: "it_IT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "APE e certificazione energetica a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "APE per compravendita, locazione, nuove costruzioni e ristrutturazioni a Belpasso e Catania.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const config: ServiceDetailConfig = {
  breadcrumbLabel: "APE e certificazioni energetiche",

  locationLabel:
    "APE · Certificazione energetica · Belpasso · Catania",

  titleFirstLine: "APE e",
  titleSecondLine: "certificazione energetica",

  heroDescription:
    "Lo Studio Tecnico Mirone redige Attestati di Prestazione Energetica a Belpasso, Catania e provincia per compravendite, locazioni, nuove costruzioni e ristrutturazioni. Seguiamo il sopralluogo, la raccolta dei dati, il calcolo energetico e la predisposizione della documentazione necessaria.",

  whatsappHref: CONTACTS.whatsappHref,
  emailHref: CONTACTS.emailHref,

  heroChecklist: [
    "Sopralluogo",
    "Raccolta dati",
    "Calcolo energetico",
    "Redazione APE",
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
          "Certificazione energetica per immobili destinati alla locazione, quando prevista dalla normativa.",
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
      "Dal sopralluogo alla redazione dell’attestato.",

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
      "APE a Belpasso, Catania e provincia.",

    description:
      "Lo Studio Tecnico Mirone ha sede a Belpasso e svolge attività di certificazione energetica a Catania, nei comuni della provincia e nell’area etnea, valutando incarichi anche nel resto della Sicilia.",

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
          "È necessario il sopralluogo?",

        answer:
          "Il sopralluogo consente di raccogliere e verificare direttamente le informazioni necessarie sull’immobile, sulle caratteristiche costruttive e sugli impianti presenti.",
      },

      {
        question:
          "Quanto tempo serve per ottenere un APE?",

        answer:
          "I tempi dipendono dalla disponibilità della documentazione, dalle caratteristiche dell’immobile e dalle attività necessarie. Dopo il primo confronto lo Studio può fornire indicazioni più precise sul caso specifico.",
      },

      {
        question:
          "L’APE indica anche come migliorare l’efficienza dell’immobile?",

        answer:
          "L’attestato contiene informazioni sulla prestazione energetica dell’immobile e può riportare indicazioni relative a possibili interventi di miglioramento energetico.",
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
    eyebrow: "Hai bisogno di un APE?",

    title:
      "Verifichiamo il tuo immobile.",

    description:
      "Contattaci indicando la tipologia di immobile e la finalità dell’attestato. Valuteremo documentazione disponibile, sopralluogo e attività necessarie per la certificazione energetica.",
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

      "@id": `${SITE_URL}/servizi/ape/#service`,

      name:
        "APE e certificazione energetica a Belpasso e Catania",

      serviceType:
        "Attestato di Prestazione Energetica",

      url:
        `${SITE_URL}/servizi/ape`,

      description:
        "Servizio di redazione APE e certificazione energetica per vendita, locazione, nuove costruzioni e ristrutturazioni a Belpasso, Catania e provincia.",

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

      "@id": `${SITE_URL}/servizi/ape/#breadcrumb`,

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
          name: "APE e certificazioni energetiche",
          item: `${SITE_URL}/servizi/ape`,
        },
      ],
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