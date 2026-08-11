import type { Metadata } from "next";
import {
  FileCheck2,
  FileSearch,
  Landmark,
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
    "https://wa.me/393482934197?text=Buongiorno%2C%20vorrei%20ricevere%20informazioni%20sulle%20pratiche%20edilizie.",
};

export const metadata: Metadata = {
  title: "Pratiche edilizie a Belpasso e Catania",

  description:
    "Pratiche edilizie a Belpasso e Catania: CILA, SCIA, Permesso di Costruire, sanatorie, accesso agli atti e verifiche urbanistiche. Studio Tecnico Mirone segue l’intero iter tecnico e amministrativo.",

  alternates: {
    canonical: "/servizi/pratiche-edilizie",
  },

  keywords: [
    "pratiche edilizie Belpasso",
    "pratiche edilizie Catania",
    "CILA Belpasso",
    "CILA Catania",
    "SCIA Belpasso",
    "SCIA Catania",
    "Permesso di Costruire Belpasso",
    "sanatoria edilizia Belpasso",
    "sanatoria edilizia Catania",
    "accesso agli atti Belpasso",
    "verifica urbanistica Belpasso",
    "studio tecnico Belpasso",
    "Studio Tecnico Mirone",
  ],

  openGraph: {
    title:
      "Pratiche edilizie a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "CILA, SCIA, Permesso di Costruire, sanatorie e verifiche urbanistiche a Belpasso, Catania e provincia.",

    url: `${SITE_URL}/servizi/pratiche-edilizie`,
    siteName: CONTACTS.businessName,
    locale: "it_IT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Pratiche edilizie a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Gestione di CILA, SCIA, Permesso di Costruire, sanatorie e pratiche urbanistiche a Belpasso e Catania.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const config: ServiceDetailConfig = {
  breadcrumbLabel: "Pratiche edilizie",

  locationLabel:
    "Pratiche edilizie · Belpasso · Catania",

  titleFirstLine: "Pratiche",
  titleSecondLine: "edilizie",

  heroDescription:
    "Lo Studio Tecnico Mirone gestisce pratiche edilizie a Belpasso, Catania e provincia per ristrutturazioni, manutenzioni, nuove opere e regolarizzazioni. Seguiamo il cliente dalla verifica preliminare alla predisposizione e presentazione della documentazione tecnica.",

  whatsappHref: CONTACTS.whatsappHref,
  emailHref: CONTACTS.emailHref,

  heroChecklist: [
    "CILA",
    "SCIA",
    "Permesso di Costruire",
    "Sanatorie edilizie",
    "Accesso agli atti",
  ],

  introduction: {
    eyebrow: "Gestire correttamente ogni intervento",

    title:
      "Dalla verifica iniziale alla pratica corretta.",

    paragraphs: [
      "Ogni intervento edilizio richiede una valutazione preliminare della situazione urbanistica e amministrativa dell’immobile. Prima di presentare una pratica è fondamentale capire quale procedimento sia necessario e quali documenti debbano essere predisposti.",

      "Lo Studio Tecnico Mirone segue pratiche edilizie a Belpasso, Catania e provincia, supportando privati, imprese e professionisti nella scelta del corretto titolo abilitativo e nella preparazione della documentazione richiesta.",

      "L’obiettivo è costruire un percorso chiaro fin dall’inizio, riducendo il rischio di errori, integrazioni e rallentamenti durante l’iter amministrativo.",
    ],
  },

  areas: {
    eyebrow: "Principali pratiche",

    title:
      "Procedure tecniche e amministrative per ogni tipo di intervento.",

    description:
      "La pratica corretta dipende dalla natura dei lavori, dallo stato dell’immobile e dalla normativa applicabile. Ogni caso viene valutato prima di procedere.",

    cards: [
      {
        icon: FileCheck2,

        title: "CILA",

        description:
          "Comunicazione di Inizio Lavori Asseverata per gli interventi per i quali la normativa prevede questo procedimento.",
      },

      {
        icon: ShieldCheck,

        title: "SCIA",

        description:
          "Segnalazione Certificata di Inizio Attività per interventi edilizi soggetti alla relativa procedura amministrativa.",
      },

      {
        icon: Landmark,

        title: "Permesso di Costruire",

        description:
          "Predisposizione della documentazione necessaria per interventi subordinati al rilascio del titolo edilizio.",
      },

      {
        icon: FileSearch,

        title: "Sanatorie e verifiche",

        description:
          "Analisi dello stato urbanistico ed edilizio dell’immobile, accesso agli atti e valutazione delle eventuali procedure di regolarizzazione.",
      },
    ],
  },

  workflow: {
    eyebrow: "Il nostro metodo",

    title:
      "Una pratica edilizia parte sempre da una verifica.",

    description:
      "Prima di scegliere il procedimento analizziamo documentazione, stato dei luoghi e caratteristiche dell’intervento.",

    steps: [
      {
        number: "01",

        title: "Raccolta documenti",

        description:
          "Raccogliamo la documentazione disponibile relativa all’immobile e all’intervento previsto.",
      },

      {
        number: "02",

        title: "Accesso agli atti",

        description:
          "Quando necessario, verifichiamo la documentazione presente presso gli enti competenti per ricostruire la situazione autorizzativa.",
      },

      {
        number: "03",

        title: "Verifica urbanistica",

        description:
          "Confrontiamo stato autorizzato, documentazione e condizioni reali dell’immobile per individuare eventuali criticità.",
      },

      {
        number: "04",

        title: "Individuazione della pratica",

        description:
          "Definiamo il procedimento tecnico-amministrativo più adatto in funzione dell’intervento da realizzare.",
      },

      {
        number: "05",

        title: "Predisposizione elaborati",

        description:
          "Prepariamo relazioni, elaborati grafici, asseverazioni e documenti necessari alla presentazione della pratica.",
      },

      {
        number: "06",

        title: "Presentazione e gestione",

        description:
          "Presentiamo la pratica e seguiamo eventuali richieste di integrazione o ulteriori adempimenti previsti dal procedimento.",
      },
    ],
  },

  benefits: {
    eyebrow: "Perché affidarsi allo Studio",

    title:
      "Meno incertezze, più controllo sull’iter.",

    description:
      "Una corretta analisi preliminare permette di individuare il procedimento adeguato e di affrontare con maggiore chiarezza tutti i passaggi successivi.",

    items: [
      "Verifica preliminare della situazione urbanistica",
      "Individuazione del corretto procedimento edilizio",
      "Gestione coordinata di documenti ed elaborati",
      "Supporto durante l’iter amministrativo",
      "Collegamento con progettazione e direzione lavori",
      "Comunicazione chiara con il cliente",
    ],
  },

  deliverables: {
    eyebrow: "Attività e documentazione",

    title:
      "Cosa può comprendere l’incarico.",

    description:
      "Le attività dipendono dal tipo di intervento e dalla situazione dell’immobile. Il preventivo specifica le prestazioni comprese.",

    items: [
      "Verifica documentazione disponibile",
      "Accesso agli atti",
      "Rilievo dello stato dei luoghi",
      "Verifica urbanistica ed edilizia",
      "Elaborati grafici",
      "Relazione tecnica",
      "Predisposizione CILA o SCIA",
      "Pratiche per Permesso di Costruire",
      "Supporto per sanatorie edilizie",
      "Gestione di eventuali integrazioni",
    ],
  },

  locations: {
    eyebrow: "Dove operiamo",

    title:
      "Pratiche edilizie a Belpasso, Catania e provincia.",

    description:
      "Lo Studio Tecnico Mirone ha sede a Belpasso e segue pratiche edilizie a Catania, nei comuni della provincia e nell’area etnea, valutando incarichi anche nel resto della Sicilia.",

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
      "Informazioni sulle pratiche edilizie.",

    items: [
      {
        question:
          "Qual è la differenza tra CILA e SCIA?",

        answer:
          "CILA e SCIA sono procedimenti differenti e la loro applicabilità dipende dalla tipologia di intervento e dalla normativa vigente. Prima di procedere è necessario verificare il caso specifico.",
      },

      {
        question:
          "Quando serve il Permesso di Costruire?",

        answer:
          "Il Permesso di Costruire è richiesto per gli interventi che la normativa assoggetta a questo titolo edilizio. La necessità viene verificata in base alle caratteristiche dell’opera prevista.",
      },

      {
        question:
          "È necessario fare un accesso agli atti?",

        answer:
          "Non sempre, ma può essere molto utile quando è necessario ricostruire la storia autorizzativa dell’immobile o verificare la documentazione depositata presso gli enti competenti.",
      },

      {
        question:
          "È possibile regolarizzare una difformità edilizia?",

        answer:
          "Dipende dalla natura della difformità, dalla normativa applicabile e dalle condizioni dell’immobile. È necessario eseguire una verifica tecnica prima di stabilire se e quale procedura possa essere utilizzata.",
      },

      {
        question:
          "Lo Studio segue anche il progetto oltre alla pratica?",

        answer:
          "Sì. Quando necessario, la gestione della pratica edilizia può essere coordinata con progettazione architettonica, rilievi, direzione lavori e altri servizi tecnici collegati all’intervento.",
      },

      {
        question:
          "In quali zone gestite pratiche edilizie?",

        answer:
          "Lo Studio ha sede a Belpasso e opera principalmente a Catania e provincia, nei comuni dell’area etnea e, in funzione dell’incarico, anche nel resto della Sicilia.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Devi presentare una pratica edilizia?",

    title:
      "Verifichiamo il tuo caso.",

    description:
      "Raccontaci l’intervento che vuoi realizzare o la situazione dell’immobile. Valuteremo documentazione, stato dei luoghi e percorso amministrativo più adatto.",
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

      "@id": `${SITE_URL}/servizi/pratiche-edilizie/#service`,

      name:
        "Pratiche edilizie a Belpasso e Catania",

      serviceType:
        "Pratiche edilizie",

      url:
        `${SITE_URL}/servizi/pratiche-edilizie`,

      description:
        "Servizio di gestione pratiche edilizie, CILA, SCIA, Permesso di Costruire, sanatorie, accesso agli atti e verifiche urbanistiche a Belpasso, Catania e provincia.",

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

      "@id": `${SITE_URL}/servizi/pratiche-edilizie/#breadcrumb`,

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
          name: "Pratiche edilizie",
          item: `${SITE_URL}/servizi/pratiche-edilizie`,
        },
      ],
    },
  ],
};

export default function PraticheEdiliziePage() {
  return (
    <ServiceDetailPage
      config={config}
      jsonLd={jsonLd}
    />
  );
}