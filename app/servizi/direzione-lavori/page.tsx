import type { Metadata } from "next";
import {
  ClipboardCheck,
  Construction,
  ListChecks,
  ShieldCheck,
} from "lucide-react";

import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import type { ServiceDetailConfig } from "@/components/services/service-types";
import { seo } from "@/data/seo";

const PAGE_PATH = "/servizi/direzione-lavori";
const PAGE_URL = `${seo.siteUrl}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Direzione lavori a Belpasso e Catania",

  description:
    "Direzione lavori a Belpasso e Catania per ristrutturazioni, nuove costruzioni e interventi edilizi. Studio Tecnico Mirone segue il cantiere, le lavorazioni e la corretta esecuzione delle opere.",

  alternates: {
    canonical: PAGE_PATH,
  },

  keywords: [
    "direzione lavori Belpasso",
    "direzione lavori Catania",
    "direttore lavori Belpasso",
    "direttore lavori Catania",
    "direttore dei lavori Belpasso",
    "direttore dei lavori Catania",
    "assistenza cantiere Belpasso",
    "assistenza cantiere Catania",
    "controllo lavori edilizi Belpasso",
    "controllo lavori edilizi Catania",
    "coordinamento cantiere Belpasso",
    "coordinamento cantiere Catania",
    "direzione lavori ristrutturazione Belpasso",
    "direzione lavori ristrutturazione Catania",
    "direzione lavori nuova costruzione Catania",
    "ingegnere Belpasso",
    "ingegnere Catania",
    "Ingegnere Miriana Mirone",
    "Miriana Mirone",
    "studio tecnico Belpasso",
    "studio tecnico Catania",
    "Studio Tecnico Mirone",
  ],

  openGraph: {
    title:
      "Direzione lavori a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Direzione lavori, assistenza tecnica di cantiere, controllo delle lavorazioni e coordinamento operativo a Belpasso, Catania e provincia.",

    url: PAGE_URL,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",

    images: [
      {
        url: seo.images.openGraph,
        width: 1200,
        height: 630,
        alt: "Direzione lavori - Studio Tecnico Mirone",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Direzione lavori a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Direzione lavori, assistenza tecnica di cantiere e controllo delle lavorazioni a Belpasso e Catania.",

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
  breadcrumbLabel: "Direzione lavori",

  locationLabel:
    "Direzione lavori · Belpasso · Catania",

  titleFirstLine: "Direzione",
  titleSecondLine: "lavori",

  heroDescription:
    "Lo Studio Tecnico Mirone svolge attività di direzione lavori a Belpasso, Catania e provincia per ristrutturazioni, nuove costruzioni e altri interventi edilizi. L'Ingegnere Miriana Mirone segue il coordinamento tecnico dell'incarico, verificando la coerenza tra progetto, autorizzazioni e opere realizzate.",

  whatsappHref:
    "https://wa.me/393482934197?text=Buongiorno%2C%20vorrei%20ricevere%20informazioni%20sul%20servizio%20di%20direzione%20lavori.",

  emailHref: seo.contact.emailHref,

  heroChecklist: [
    "Assistenza in cantiere",
    "Controllo delle lavorazioni",
    "Coordinamento tecnico",
    "Verifica delle varianti",
    "Supporto al cliente",
  ],

  introduction: {
    eyebrow: "Controllo e coordinamento",

    title:
      "Dal progetto alla corretta esecuzione delle opere.",

    paragraphs: [
      "La direzione lavori rappresenta il collegamento tra il progetto approvato e ciò che viene effettivamente realizzato in cantiere. Durante l’esecuzione è fondamentale verificare che le opere siano coerenti con gli elaborati progettuali, le autorizzazioni e le scelte tecniche definite.",

      "Lo Studio Tecnico Mirone segue attività di direzione lavori a Belpasso, Catania e provincia, affiancando il cliente durante le diverse fasi del cantiere e coordinando gli aspetti tecnici con imprese, artigiani e professionisti coinvolti.",

      "La presenza di un riferimento tecnico durante l’esecuzione permette di affrontare con maggiore chiarezza dubbi, variazioni e criticità che possono emergere durante i lavori, mantenendo continuità tra progettazione e realizzazione.",
    ],
  },

  areas: {
    eyebrow: "Attività di cantiere",

    title:
      "Presenza tecnica durante le diverse fasi dei lavori.",

    description:
      "L’attività di direzione lavori viene definita in funzione della tipologia dell’intervento, della complessità del cantiere e delle prestazioni previste nell’incarico professionale.",

    cards: [
      {
        icon: Construction,

        title: "Assistenza al cantiere",

        description:
          "Sopralluoghi e verifiche durante l’esecuzione per controllare l’avanzamento delle opere e affrontare le questioni tecniche che emergono durante i lavori.",
      },

      {
        icon: ClipboardCheck,

        title: "Controllo delle lavorazioni",

        description:
          "Verifica dell’esecuzione delle opere rispetto al progetto, agli elaborati tecnici, alle autorizzazioni e alle indicazioni definite durante l’incarico.",
      },

      {
        icon: ListChecks,

        title: "Coordinamento tecnico",

        description:
          "Confronto con imprese, artigiani e professionisti coinvolti per mantenere continuità e coerenza tra le scelte progettuali e la realizzazione in cantiere.",
      },

      {
        icon: ShieldCheck,

        title: "Varianti e verifiche",

        description:
          "Valutazione tecnica delle modifiche che possono rendersi necessarie durante i lavori e verifica degli eventuali adempimenti progettuali e autorizzativi.",
      },
    ],
  },

  workflow: {
    eyebrow: "Il nostro metodo",

    title:
      "Un controllo tecnico, fase dopo fase.",

    description:
      "La direzione lavori viene organizzata attraverso verifiche in cantiere e un confronto con i soggetti coinvolti nelle diverse fasi dell’intervento.",

    steps: [
      {
        number: "01",

        title: "Avvio del cantiere",

        description:
          "Verifichiamo progetto, documentazione, autorizzazioni e condizioni necessarie per procedere con l’avvio delle lavorazioni.",
      },

      {
        number: "02",

        title: "Coordinamento iniziale",

        description:
          "Condividiamo con l’impresa e con i soggetti coinvolti le principali indicazioni progettuali e tecniche dell’intervento.",
      },

      {
        number: "03",

        title: "Sopralluoghi",

        description:
          "Effettuiamo verifiche in cantiere in relazione alle fasi di lavorazione, alle caratteristiche dell’intervento e alle esigenze che emergono durante l’esecuzione.",
      },

      {
        number: "04",

        title: "Controllo delle opere",

        description:
          "Verifichiamo la coerenza delle lavorazioni con il progetto, le autorizzazioni e le indicazioni tecniche definite durante l’incarico.",
      },

      {
        number: "05",

        title: "Gestione delle variazioni",

        description:
          "Valutiamo eventuali modifiche emerse durante l’esecuzione e individuiamo il percorso tecnico e amministrativo necessario per gestirle.",
      },

      {
        number: "06",

        title: "Conclusione dei lavori",

        description:
          "Seguiamo le verifiche finali e gli eventuali adempimenti tecnici previsti per la conclusione dell’intervento.",
      },
    ],
  },

  benefits: {
    eyebrow: "Perché affidarsi allo Studio",

    title:
      "Continuità tra progetto e realizzazione.",

    description:
      "Una direzione lavori attenta permette di mantenere un collegamento costante tra ciò che è stato progettato e ciò che viene realizzato, offrendo al cliente un riferimento tecnico durante l’intero cantiere.",

    items: [
      "Un riferimento tecnico durante il cantiere",
      "Controllo dell’esecuzione delle opere",
      "Continuità tra progetto e realizzazione",
      "Supporto nella gestione delle varianti",
      "Confronto con imprese e professionisti",
      "Verifica degli aspetti tecnici dell’intervento",
      "Supporto al cliente nelle decisioni di cantiere",
    ],
  },

  deliverables: {
    eyebrow: "Attività e prestazioni",

    title:
      "Cosa può comprendere l’incarico.",

    description:
      "Le prestazioni vengono definite in funzione della tipologia di intervento, dell’incarico professionale e delle esigenze del cantiere.",

    items: [
      "Verifica preliminare della documentazione",
      "Assistenza all’avvio dei lavori",
      "Sopralluoghi in cantiere",
      "Verifica delle lavorazioni",
      "Coordinamento tecnico con l’impresa",
      "Confronto con i professionisti coinvolti",
      "Valutazione delle varianti",
      "Aggiornamento degli elaborati quando necessario",
      "Supporto tecnico al cliente",
      "Verifiche finali delle opere",
      "Assistenza agli adempimenti di chiusura",
    ],
  },

  locations: {
    eyebrow: "Dove operiamo",

    title:
      "Direzione lavori a Belpasso, Catania e provincia.",

    description:
      "Lo Studio Tecnico Mirone ha sede a Belpasso e segue incarichi di direzione lavori a Catania, nei comuni della provincia e nell’area etnea. In funzione della tipologia dell’intervento vengono valutati incarichi anche nel resto della Sicilia.",

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
      "Informazioni sulla direzione lavori.",

    items: [
      {
        question:
          "Che cosa fa il direttore dei lavori?",

        answer:
          "Il direttore dei lavori segue l’esecuzione dell’intervento dal punto di vista tecnico, verificando la coerenza delle opere con il progetto e svolgendo le attività previste dall’incarico professionale.",
      },

      {
        question:
          "La direzione lavori comprende i sopralluoghi in cantiere?",

        answer:
          "Sì. I sopralluoghi costituiscono una parte dell’attività di direzione lavori e vengono organizzati in funzione delle fasi di lavorazione, delle esigenze del cantiere e delle prestazioni previste nell’incarico.",
      },

      {
        question:
          "Chi gestisce eventuali modifiche durante i lavori?",

        answer:
          "Le modifiche emerse durante il cantiere vengono valutate dal punto di vista tecnico. Quando necessario devono essere coordinate con il progetto, le autorizzazioni e gli altri professionisti coinvolti.",
      },

      {
        question:
          "Lo Studio Tecnico Mirone può seguire sia il progetto sia la direzione lavori?",

        answer:
          "Sì. Quando l’incarico comprende entrambe le attività, progettazione e direzione lavori possono essere coordinate dallo Studio, mantenendo continuità tra le scelte progettuali e la successiva realizzazione.",
      },

      {
        question:
          "La direzione lavori può essere richiesta per una ristrutturazione?",

        answer:
          "Sì. La direzione lavori può riguardare ristrutturazioni, nuove costruzioni e altri interventi edilizi, in relazione alle caratteristiche del progetto e agli adempimenti previsti.",
      },

      {
        question:
          "Posso rivolgermi all'Ingegnere Miriana Mirone per la direzione lavori a Belpasso o Catania?",

        answer:
          "Sì. Lo Studio Tecnico Mirone ha sede a Belpasso e segue incarichi di progettazione e direzione lavori a Belpasso, Catania, nei comuni della provincia e nell’area etnea, valutando ogni incarico in funzione delle caratteristiche dell’intervento.",
      },

      {
        question:
          "In quali zone seguite i cantieri?",

        answer:
          "Lo Studio ha sede a Belpasso e segue principalmente cantieri a Catania e provincia e nei comuni dell’area etnea, valutando in funzione dell’incarico attività anche nel resto della Sicilia.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Hai un cantiere da avviare?",

    title:
      "Seguiamo insieme la realizzazione.",

    description:
      "Raccontaci il tuo intervento. Valuteremo il progetto, lo stato delle autorizzazioni, le caratteristiche del cantiere e le attività necessarie per seguire correttamente i lavori.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Service",

      "@id": `${PAGE_URL}/#service`,

      name:
        "Direzione lavori a Belpasso e Catania",

      serviceType:
        "Direzione lavori",

      url: PAGE_URL,

      description:
        "Servizio di direzione lavori, assistenza tecnica di cantiere, coordinamento delle lavorazioni e verifica dell'esecuzione delle opere a Belpasso, Catania e provincia.",

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
        "Direzione lavori e assistenza tecnica di cantiere",

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
        "Direzione lavori a Belpasso e Catania",

      description:
        "Direzione lavori, assistenza tecnica di cantiere e controllo delle lavorazioni a Belpasso, Catania e provincia.",

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
          name: "Direzione lavori",
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

export default function DirezioneLavoriPage() {
  return (
    <ServiceDetailPage
      config={config}
      jsonLd={jsonLd}
    />
  );
}