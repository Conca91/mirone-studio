import type { Metadata } from "next";
import {
  ClipboardCheck,
  Construction,
  ListChecks,
  ShieldCheck,
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
    "https://wa.me/393482934197?text=Buongiorno%2C%20vorrei%20ricevere%20informazioni%20sul%20servizio%20di%20direzione%20lavori.",
};

export const metadata: Metadata = {
  title: "Direzione lavori a Belpasso e Catania",

  description:
    "Direzione lavori a Belpasso e Catania per ristrutturazioni, nuove costruzioni e interventi edilizi. Studio Tecnico Mirone segue il cantiere, coordina le lavorazioni e verifica la corretta esecuzione delle opere.",

  alternates: {
    canonical: "/servizi/direzione-lavori",
  },

  keywords: [
    "direzione lavori Belpasso",
    "direzione lavori Catania",
    "direttore lavori Belpasso",
    "direttore lavori Catania",
    "assistenza cantiere Belpasso",
    "assistenza cantiere Catania",
    "controllo lavori edilizi Belpasso",
    "coordinamento cantiere Catania",
    "studio tecnico Belpasso",
    "Studio Tecnico Mirone",
  ],

  openGraph: {
    title:
      "Direzione lavori a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Assistenza tecnica di cantiere, controllo delle lavorazioni e coordinamento operativo a Belpasso, Catania e provincia.",

    url: `${SITE_URL}/servizi/direzione-lavori`,
    siteName: CONTACTS.businessName,
    locale: "it_IT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Direzione lavori a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Direzione lavori, assistenza tecnica di cantiere e controllo delle lavorazioni a Belpasso e Catania.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const config: ServiceDetailConfig = {
  breadcrumbLabel: "Direzione lavori",

  locationLabel:
    "Direzione lavori · Belpasso · Catania",

  titleFirstLine: "Direzione",
  titleSecondLine: "lavori",

  heroDescription:
    "Lo Studio Tecnico Mirone svolge attività di direzione lavori a Belpasso, Catania e provincia, seguendo il cantiere dalla fase esecutiva fino alla conclusione delle opere. Coordiniamo le lavorazioni, verifichiamo la conformità al progetto e supportiamo il cliente durante l’intero intervento.",

  whatsappHref: CONTACTS.whatsappHref,
  emailHref: CONTACTS.emailHref,

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
      "La direzione lavori è il collegamento tra il progetto approvato e ciò che viene realmente realizzato in cantiere. Durante l’esecuzione è fondamentale verificare che le opere siano coerenti con gli elaborati progettuali, le autorizzazioni e le scelte tecniche definite.",

      "Lo Studio Tecnico Mirone segue cantieri a Belpasso, Catania e provincia, coordinando le attività tecniche e verificando lo sviluppo delle lavorazioni durante le diverse fasi dell’intervento.",

      "Il cliente mantiene un riferimento tecnico costante durante l’esecuzione, utile per affrontare dubbi, variazioni, criticità e decisioni che possono emergere durante il cantiere.",
    ],
  },

  areas: {
    eyebrow: "Attività di cantiere",

    title:
      "Presenza tecnica durante tutte le fasi dei lavori.",

    description:
      "L’attività viene definita in base alla tipologia dell’intervento, alla complessità del cantiere e alle prestazioni previste nell’incarico.",

    cards: [
      {
        icon: Construction,

        title: "Assistenza al cantiere",

        description:
          "Sopralluoghi e verifiche durante l’esecuzione per controllare l’avanzamento delle opere e affrontare le questioni tecniche che emergono.",
      },

      {
        icon: ClipboardCheck,

        title: "Controllo delle lavorazioni",

        description:
          "Verifica della corretta esecuzione delle opere rispetto al progetto, agli elaborati tecnici e alle indicazioni previste.",
      },

      {
        icon: ListChecks,

        title: "Coordinamento tecnico",

        description:
          "Confronto con imprese, artigiani e professionisti coinvolti per mantenere coerenza tra progetto e realizzazione.",
      },

      {
        icon: ShieldCheck,

        title: "Varianti e verifiche",

        description:
          "Valutazione tecnica delle modifiche che possono rendersi necessarie durante i lavori e verifica della loro compatibilità con il progetto e le autorizzazioni.",
      },
    ],
  },

  workflow: {
    eyebrow: "Il nostro metodo",

    title:
      "Un controllo costante, fase dopo fase.",

    description:
      "La direzione lavori viene organizzata attraverso verifiche periodiche e un confronto continuo con i soggetti coinvolti nel cantiere.",

    steps: [
      {
        number: "01",

        title: "Avvio del cantiere",

        description:
          "Verifichiamo documentazione, progetto esecutivo, autorizzazioni e condizioni necessarie per l’avvio delle lavorazioni.",
      },

      {
        number: "02",

        title: "Coordinamento iniziale",

        description:
          "Condividiamo con impresa e soggetti coinvolti le principali indicazioni progettuali e tecniche dell’intervento.",
      },

      {
        number: "03",

        title: "Sopralluoghi",

        description:
          "Effettuiamo verifiche in cantiere in relazione alle fasi di lavorazione e alle esigenze dell’intervento.",
      },

      {
        number: "04",

        title: "Controllo delle opere",

        description:
          "Verifichiamo la coerenza delle lavorazioni con progetto, autorizzazioni ed eventuali indicazioni tecniche concordate.",
      },

      {
        number: "05",

        title: "Gestione delle variazioni",

        description:
          "Valutiamo eventuali modifiche emerse durante l’esecuzione e individuiamo il percorso tecnico più corretto per gestirle.",
      },

      {
        number: "06",

        title: "Conclusione dei lavori",

        description:
          "Seguiamo le verifiche finali e gli eventuali adempimenti tecnici necessari alla conclusione dell’intervento.",
      },
    ],
  },

  benefits: {
    eyebrow: "Perché affidarsi allo Studio",

    title:
      "Più controllo durante la realizzazione.",

    description:
      "Una direzione lavori attenta consente di mantenere un collegamento continuo tra progetto e cantiere, riducendo incomprensioni e decisioni improvvisate.",

    items: [
      "Un riferimento tecnico durante tutto il cantiere",
      "Controllo della corretta esecuzione delle opere",
      "Coordinamento tra progetto e lavorazioni",
      "Supporto nella gestione delle varianti",
      "Confronto con imprese e professionisti coinvolti",
      "Maggiore chiarezza per il cliente",
    ],
  },

  deliverables: {
    eyebrow: "Attività e prestazioni",

    title:
      "Cosa può comprendere l’incarico.",

    description:
      "Le prestazioni vengono definite in funzione della tipologia di intervento e delle esigenze del cantiere.",

    items: [
      "Verifica preliminare della documentazione",
      "Assistenza all’avvio dei lavori",
      "Sopralluoghi periodici",
      "Verifica delle lavorazioni",
      "Coordinamento tecnico con l’impresa",
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
      "Lo Studio Tecnico Mirone ha sede a Belpasso e segue cantieri a Catania, nei comuni della provincia e nell’area etnea, valutando incarichi anche nel resto della Sicilia.",

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
          "Sì. I sopralluoghi rappresentano una parte essenziale dell’attività e vengono organizzati in funzione delle fasi di lavorazione, delle esigenze del cantiere e delle prestazioni previste nell’incarico.",
      },

      {
        question:
          "Chi gestisce eventuali modifiche durante i lavori?",

        answer:
          "Le modifiche vengono valutate dal punto di vista tecnico e, quando necessario, devono essere coordinate con progettazione, autorizzazioni e altri professionisti coinvolti.",
      },

      {
        question:
          "Lo Studio può seguire sia il progetto sia la direzione lavori?",

        answer:
          "Sì. Quando l’incarico comprende entrambe le attività, il progetto e la fase esecutiva possono essere gestiti in modo coordinato, mantenendo continuità tra le scelte progettuali e la realizzazione.",
      },

      {
        question:
          "La direzione lavori può essere richiesta per una ristrutturazione?",

        answer:
          "Sì. La direzione lavori può riguardare ristrutturazioni, nuove costruzioni e altri interventi edilizi, in relazione alle caratteristiche del progetto e agli adempimenti previsti.",
      },

      {
        question:
          "In quali zone seguite i cantieri?",

        answer:
          "Lo Studio ha sede a Belpasso e segue principalmente cantieri a Catania e provincia, nei comuni dell’area etnea e, in funzione dell’incarico, anche nel resto della Sicilia.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Hai un cantiere da avviare?",

    title:
      "Seguiamo insieme la realizzazione.",

    description:
      "Raccontaci il tuo intervento. Valuteremo progetto, stato delle autorizzazioni, caratteristiche del cantiere e attività necessarie per seguire correttamente i lavori.",
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

      "@id": `${SITE_URL}/servizi/direzione-lavori/#service`,

      name:
        "Direzione lavori a Belpasso e Catania",

      serviceType:
        "Direzione lavori",

      url:
        `${SITE_URL}/servizi/direzione-lavori`,

      description:
        "Servizio di direzione lavori, assistenza tecnica di cantiere, coordinamento delle lavorazioni e verifica della corretta esecuzione delle opere a Belpasso, Catania e provincia.",

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

      "@id": `${SITE_URL}/servizi/direzione-lavori/#breadcrumb`,

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
          name: "Direzione lavori",
          item: `${SITE_URL}/servizi/direzione-lavori`,
        },
      ],
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