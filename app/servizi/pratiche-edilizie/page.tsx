import type { Metadata } from "next";
import {
  FileCheck2,
  FileSearch,
  Landmark,
  ShieldCheck,
} from "lucide-react";

import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import type { ServiceDetailConfig } from "@/components/services/service-types";
import { seo } from "@/data/seo";

const PAGE_PATH = "/servizi/pratiche-edilizie";
const PAGE_URL = `${seo.siteUrl}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Pratiche edilizie a Belpasso e Catania",

  description:
    "Pratiche edilizie a Belpasso e Catania: CILA, SCIA, Permesso di Costruire, sanatorie, accesso agli atti e verifiche urbanistiche. Studio Tecnico Mirone segue l’intero iter tecnico e amministrativo.",

  alternates: {
    canonical: PAGE_PATH,
  },

  keywords: [
    "pratiche edilizie Belpasso",
    "pratiche edilizie Catania",
    "CILA Belpasso",
    "CILA Catania",
    "SCIA Belpasso",
    "SCIA Catania",
    "Permesso di Costruire Belpasso",
    "Permesso di Costruire Catania",
    "sanatoria edilizia Belpasso",
    "sanatoria edilizia Catania",
    "accesso agli atti Belpasso",
    "accesso agli atti Catania",
    "verifica urbanistica Belpasso",
    "verifica urbanistica Catania",
    "regolarizzazione edilizia Belpasso",
    "regolarizzazione edilizia Catania",
    "studio tecnico Belpasso",
    "studio tecnico Catania",
    "ingegnere Belpasso",
    "ingegnere Catania",
    "Studio Tecnico Mirone",
  ],

  openGraph: {
    title:
      "Pratiche edilizie a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "CILA, SCIA, Permesso di Costruire, sanatorie, accesso agli atti e verifiche urbanistiche a Belpasso, Catania e provincia.",

    url: PAGE_URL,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",

    images: [
      {
        url: seo.images.openGraph,
        width: 1200,
        height: 630,
        alt: "Pratiche edilizie - Studio Tecnico Mirone",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Pratiche edilizie a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Gestione di CILA, SCIA, Permesso di Costruire, sanatorie e verifiche urbanistiche a Belpasso e Catania.",

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
  breadcrumbLabel: "Pratiche edilizie",

  locationLabel:
    "Pratiche edilizie · Belpasso · Catania",

  titleFirstLine: "Pratiche",
  titleSecondLine: "edilizie",

  heroDescription:
    "Lo Studio Tecnico Mirone gestisce pratiche edilizie a Belpasso, Catania e provincia per ristrutturazioni, manutenzioni, nuove opere e regolarizzazioni. Seguiamo il cliente dalla verifica preliminare alla predisposizione e presentazione della documentazione tecnica.",

  whatsappHref:
    "https://wa.me/393482934197?text=Buongiorno%2C%20vorrei%20ricevere%20informazioni%20sulle%20pratiche%20edilizie.",

  emailHref: seo.contact.emailHref,

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
      "Ogni intervento edilizio richiede una valutazione preliminare della situazione urbanistica e amministrativa dell’immobile. Prima di presentare una pratica è fondamentale comprendere quale procedimento sia necessario e quali documenti debbano essere predisposti.",

      "Lo Studio Tecnico Mirone segue pratiche edilizie a Belpasso, Catania e provincia, supportando privati, imprese e professionisti nella verifica preliminare, nell’individuazione del corretto titolo abilitativo e nella preparazione della documentazione richiesta.",

      "L’obiettivo è costruire un percorso chiaro fin dall’inizio, verificando lo stato dell’immobile e riducendo il rischio di errori, integrazioni e rallentamenti durante l’iter amministrativo.",
    ],
  },

  areas: {
    eyebrow: "Principali pratiche",

    title:
      "Procedure tecniche e amministrative per ogni tipo di intervento.",

    description:
      "La procedura corretta dipende dalla natura dei lavori, dallo stato dell’immobile e dalla normativa applicabile. Ogni caso viene analizzato prima di procedere.",

    cards: [
      {
        icon: FileCheck2,

        title: "CILA",

        description:
          "Predisposizione della Comunicazione di Inizio Lavori Asseverata per gli interventi per i quali la normativa prevede questo procedimento.",
      },

      {
        icon: ShieldCheck,

        title: "SCIA",

        description:
          "Predisposizione della Segnalazione Certificata di Inizio Attività per gli interventi edilizi soggetti alla relativa procedura.",
      },

      {
        icon: Landmark,

        title: "Permesso di Costruire",

        description:
          "Predisposizione degli elaborati e della documentazione tecnica necessaria per gli interventi subordinati al rilascio del titolo edilizio.",
      },

      {
        icon: FileSearch,

        title: "Sanatorie e verifiche",

        description:
          "Analisi dello stato urbanistico ed edilizio dell’immobile, accesso agli atti e valutazione delle eventuali procedure di regolarizzazione applicabili.",
      },
    ],
  },

  workflow: {
    eyebrow: "Il nostro metodo",

    title:
      "Una pratica edilizia parte sempre da una verifica.",

    description:
      "Prima di individuare il procedimento analizziamo documentazione, stato dei luoghi e caratteristiche dell’intervento.",

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
          "Quando necessario, verifichiamo la documentazione presente presso gli enti competenti per ricostruire la situazione autorizzativa dell’immobile.",
      },

      {
        number: "03",

        title: "Verifica urbanistica",

        description:
          "Confrontiamo lo stato autorizzato, la documentazione disponibile e lo stato dei luoghi per individuare eventuali criticità.",
      },

      {
        number: "04",

        title: "Individuazione della pratica",

        description:
          "Definiamo il procedimento tecnico-amministrativo appropriato in funzione dell’intervento e delle condizioni riscontrate.",
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
          "Presentiamo la pratica agli enti competenti e seguiamo eventuali richieste di integrazione e gli ulteriori adempimenti previsti dal procedimento.",
      },
    ],
  },

  benefits: {
    eyebrow: "Perché affidarsi allo Studio",

    title:
      "Meno incertezze, più controllo sull’iter.",

    description:
      "Una corretta analisi preliminare permette di individuare il procedimento adeguato e di affrontare con maggiore chiarezza i passaggi successivi.",

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
      "Le attività dipendono dal tipo di intervento e dalla situazione dell’immobile. Il preventivo specifica le prestazioni comprese nell’incarico.",

    items: [
      "Verifica della documentazione disponibile",
      "Accesso agli atti",
      "Rilievo dello stato dei luoghi",
      "Verifica urbanistica ed edilizia",
      "Elaborati grafici",
      "Relazione tecnica",
      "Predisposizione CILA o SCIA",
      "Pratiche per Permesso di Costruire",
      "Valutazione di eventuali procedure di sanatoria",
      "Gestione di eventuali integrazioni",
    ],
  },

  locations: {
    eyebrow: "Dove operiamo",

    title:
      "Pratiche edilizie a Belpasso, Catania e provincia.",

    description:
      "Lo Studio Tecnico Mirone ha sede a Belpasso e segue pratiche edilizie a Catania, nei comuni della provincia e nell’area etnea, valutando in funzione dell’incarico anche attività nel resto della Sicilia.",

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
          "Il Permesso di Costruire è richiesto per gli interventi che la normativa assoggetta a questo titolo edilizio. La necessità viene verificata in base alle caratteristiche dell’opera prevista e alla disciplina applicabile.",
      },

      {
        question:
          "È necessario fare un accesso agli atti?",

        answer:
          "Non sempre, ma può essere necessario quando occorre ricostruire la storia autorizzativa dell’immobile o verificare la documentazione depositata presso gli enti competenti.",
      },

      {
        question:
          "È possibile regolarizzare una difformità edilizia?",

        answer:
          "Dipende dalla natura della difformità, dalla normativa applicabile e dalle condizioni dell’immobile. È necessaria una verifica tecnica prima di stabilire se esista una procedura di regolarizzazione applicabile al caso specifico.",
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
      "Raccontaci l’intervento che vuoi realizzare o la situazione dell’immobile. Valuteremo documentazione, stato dei luoghi e percorso tecnico-amministrativo più adatto.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Service",

      "@id": `${PAGE_URL}/#service`,

      name:
        "Pratiche edilizie a Belpasso e Catania",

      serviceType:
        "Pratiche edilizie",

      url: PAGE_URL,

      description:
        "Gestione di pratiche edilizie, CILA, SCIA, Permesso di Costruire, sanatorie, accesso agli atti e verifiche urbanistiche a Belpasso, Catania e provincia.",

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
        "Pratiche edilizie e urbanistiche",

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
        "Pratiche edilizie a Belpasso e Catania",

      description:
        "CILA, SCIA, Permesso di Costruire, sanatorie, accesso agli atti e verifiche urbanistiche a Belpasso, Catania e provincia.",

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
          name: "Pratiche edilizie",
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

export default function PraticheEdiliziePage() {
  return (
    <ServiceDetailPage
      config={config}
      jsonLd={jsonLd}
    />
  );
}