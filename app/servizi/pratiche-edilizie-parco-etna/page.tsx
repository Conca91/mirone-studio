import type { Metadata } from "next";
import { ClipboardCheck, FileText, Landmark, MapPinned } from "lucide-react";

import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import type { ServiceDetailConfig } from "@/components/services/service-types";
import { seo } from "@/data/seo";

const PAGE_PATH = "/servizi/pratiche-edilizie-parco-etna";
const PAGE_URL = `${seo.siteUrl.replace(/\/$/, "")}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Pratiche edilizie Parco dell'Etna | Catania e provincia",
  description:
    "Assistenza tecnica per pratiche edilizie e verifiche dei vincoli nell'area del Parco dell'Etna: nulla osta, autorizzazioni e rapporti con gli enti competenti. Studio Tecnico Mirone, Catania e provincia.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Pratiche edilizie nel Parco dell'Etna | Studio Tecnico Mirone",
    description:
      "Verifiche urbanistiche, vincoli e supporto alle procedure autorizzative per interventi edilizi nell'area del Parco dell'Etna.",
    url: PAGE_URL,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
    images: [{ url: seo.images.openGraph, width: 1200, height: 630, alt: "Studio Tecnico Mirone - pratiche edilizie nell'area del Parco dell'Etna" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratiche edilizie Parco dell'Etna | Studio Tecnico Mirone",
    description: "Assistenza per pratiche edilizie e autorizzazioni nell'area del Parco dell'Etna, Catania e provincia.",
    images: [seo.images.openGraph],
  },
  robots: { index: true, follow: true },
};

const config: ServiceDetailConfig = {
  breadcrumbLabel: "Pratiche edilizie Parco dell'Etna",
  locationLabel: "Pratiche edilizie · Parco dell'Etna · Catania e provincia",
  titleFirstLine: "Pratiche edilizie",
  titleSecondLine: "nel Parco dell'Etna",
  heroDescription:
    "Vuoi ristrutturare, recuperare o realizzare un intervento edilizio nell'area del Parco dell'Etna? Studio Tecnico Mirone offre assistenza per verificare la disciplina applicabile all'immobile, individuare gli eventuali vincoli e predisporre le pratiche da presentare agli enti competenti. Le autorizzazioni necessarie dipendono dalla localizzazione e dalla tipologia di intervento.",
  whatsappHref:
    "https://wa.me/393482934197?text=Buongiorno%2C%20vorrei%20informazioni%20su%20una%20pratica%20edilizia%20nell%27area%20del%20Parco%20dell%27Etna.",
  emailHref: seo.contact.emailHref,
  heroChecklist: [
    "Verifica ubicazione e vincoli",
    "Analisi urbanistica",
    "Valutazione dei titoli necessari",
    "Predisposizione documenti",
    "Assistenza nelle procedure",
  ],
  introduction: {
    eyebrow: "Edilizia e territorio",
    title: "Ogni intervento parte dalla verifica dei vincoli e delle regole applicabili.",
    paragraphs: [
      "L'area etnea comprende territori con caratteristiche paesaggistiche e ambientali particolari. Per un intervento edilizio è importante verificare se l'immobile ricade all'interno del perimetro del Parco dell'Etna e quale disciplina si applica alla specifica zona.",
      "Oltre alle disposizioni urbanistiche comunali, possono essere rilevanti ulteriori vincoli e procedimenti presso enti diversi. Il nulla osta dell'Ente Parco, quando richiesto, non sostituisce automaticamente il titolo edilizio comunale o altre autorizzazioni eventualmente necessarie.",
      "Studio Tecnico Mirone supporta proprietari e committenti nell'inquadramento preliminare dell'intervento e nella preparazione degli elaborati tecnici pertinenti, in relazione al caso concreto.",
    ],
  },
  areas: {
    eyebrow: "Ambiti di assistenza",
    title: "Dalla verifica preliminare alla pratica edilizia.",
    description:
      "Prima di procedere, analizziamo l'immobile, l'intervento previsto e gli eventuali procedimenti autorizzativi richiesti.",
    cards: [
      { icon: MapPinned, title: "Verifica dei vincoli", description: "Esame dell'ubicazione dell'immobile e delle eventuali tutele territoriali, ambientali e paesaggistiche applicabili." },
      { icon: FileText, title: "Pratiche edilizie", description: "Supporto per la predisposizione di elaborati e documentazione tecnica per CILA, SCIA, permessi e altre procedure, quando pertinenti." },
      { icon: Landmark, title: "Nulla osta e autorizzazioni", description: "Individuazione delle eventuali istanze da presentare all'Ente Parco e agli altri enti competenti, secondo la normativa applicabile." },
      { icon: ClipboardCheck, title: "Recupero e ristrutturazione", description: "Valutazione tecnica preliminare di interventi su edifici esistenti, coperture, prospetti e pertinenze, in funzione dei vincoli presenti." },
    ],
  },
  workflow: {
    eyebrow: "Come lavoriamo",
    title: "Un percorso tecnico chiaro, fase per fase.",
    description: "L'iter varia in base all'immobile e all'intervento: ogni fase viene definita dopo le verifiche preliminari.",
    steps: [
      { number: "01", title: "Primo confronto", description: "Raccogliamo ubicazione, dati catastali, fotografie e descrizione dell'intervento desiderato." },
      { number: "02", title: "Inquadramento territoriale", description: "Verifichiamo il contesto urbanistico e l'eventuale ricaduta nel Parco dell'Etna o in altre aree vincolate." },
      { number: "03", title: "Valutazione delle procedure", description: "Individuiamo titoli edilizi, nulla osta, pareri e autorizzazioni eventualmente necessari." },
      { number: "04", title: "Elaborati tecnici", description: "Predisponiamo, nell'ambito dell'incarico, relazioni, planimetrie e documentazione richiesta." },
      { number: "05", title: "Presentazione e interlocuzioni", description: "Supportiamo il deposito delle istanze e le eventuali richieste di integrazione degli enti competenti." },
      { number: "06", title: "Esito e passi successivi", description: "Affianchiamo il committente nella lettura degli esiti e nella pianificazione delle attività successive, senza anticipare l'approvazione degli enti." },
    ],
  },
  benefits: {
    eyebrow: "Approccio dello studio",
    title: "Prima la fattibilità, poi la pratica.",
    description: "Un inquadramento preliminare accurato aiuta a riconoscere criticità e ad affrontare l'iter corretto.",
    items: [
      "Analisi preliminare dell'ubicazione",
      "Verifica dei vincoli pertinenti",
      "Coordinamento tra disciplina comunale e altri procedimenti",
      "Documentazione tecnica proporzionata all'intervento",
      "Assistenza nelle richieste di integrazione",
      "Comunicazione chiara sui passaggi autorizzativi",
    ],
  },
  deliverables: {
    eyebrow: "Documentazione",
    title: "Cosa può comprendere l'incarico.",
    description: "L'elenco effettivo degli elaborati viene definito dopo la valutazione del caso e delle richieste degli enti.",
    items: [
      "Esame dei dati catastali e urbanistici",
      "Verifica preliminare dei vincoli",
      "Sopralluogo e rilievo, se necessari",
      "Relazione tecnica descrittiva",
      "Elaborati grafici di progetto",
      "Documentazione fotografica",
      "Predisposizione di istanze e allegati",
      "Supporto ai procedimenti autorizzativi",
      "Gestione delle eventuali integrazioni",
      "Assistenza tecnica al committente",
    ],
  },
  locations: {
    eyebrow: "Territorio",
    title: "Assistenza a Catania e nei comuni dell'area etnea.",
    description:
      "Lo studio opera a Catania e provincia. L'eventuale ricaduta nel Parco dell'Etna va verificata per il singolo immobile: la presenza di un comune nell'elenco non significa che tutto il suo territorio sia interno al Parco.",
    items: [
      "Nicolosi",
      "Zafferana Etnea",
      "Linguaglossa",
      "Randazzo",
      "Castiglione di Sicilia",
      "Sant'Alfio",
      "Pedara",
      "Trecastagni",
      "Belpasso",
      "Catania e provincia",
    ],
  },
  faqs: {
    eyebrow: "Domande frequenti",
    title: "Pratiche edilizie e vincoli nell'area del Parco dell'Etna.",
    items: [
      { question: "Come faccio a sapere se un immobile ricade nel Parco dell'Etna?", answer: "È necessaria una verifica della localizzazione dell'immobile rispetto alla cartografia e agli strumenti territoriali applicabili. Il solo nome del comune non è sufficiente per stabilirlo." },
      { question: "Per ristrutturare nel Parco dell'Etna serve sempre un nulla osta?", answer: "Non è corretto presumere che ogni intervento segua lo stesso iter. La necessità del nulla osta e di altri atti dipende dalla zona, dalla natura delle opere e dalla disciplina vigente; va verificata caso per caso." },
      { question: "Il nulla osta del Parco sostituisce la SCIA o il permesso di costruire?", answer: "No. Quando richiesto, il nulla osta dell'Ente Parco è distinto dal titolo edilizio comunale e da eventuali altre autorizzazioni necessarie." },
      { question: "Posso modificare facciata, copertura o aperture di un edificio esistente?", answer: "La possibilità di intervenire va valutata rispetto allo stato legittimo dell'immobile, alla disciplina urbanistica e agli eventuali vincoli ambientali e paesaggistici. Non è possibile dare una risposta valida per tutti gli edifici." },
      { question: "Quali documenti servono per una prima valutazione?", answer: "Sono utili l'indirizzo o la posizione dell'immobile, i riferimenti catastali, fotografie, eventuali elaborati edilizi precedenti e una descrizione delle opere previste. Ulteriori documenti possono essere richiesti dopo la prima analisi." },
      { question: "Operate soltanto nei comuni del Parco dell'Etna?", answer: "No. Studio Tecnico Mirone offre assistenza per pratiche edilizie a Catania e provincia; per le aree interessate dal Parco dell'Etna effettua inoltre l'inquadramento degli eventuali procedimenti specifici." },
    ],
  },
  finalCta: {
    eyebrow: "Hai un immobile nell'area etnea?",
    title: "Verifichiamo il tuo intervento.",
    description:
      "Scrivici indicando il comune, la posizione dell'immobile e i lavori che vorresti realizzare. Valuteremo le verifiche preliminari e le pratiche tecniche necessarie.",
  },
};

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Assistenza per pratiche edilizie nell'area del Parco dell'Etna",
      serviceType: "Pratiche edilizie e supporto ai procedimenti autorizzativi",
      url: PAGE_URL,
      description: "Verifiche preliminari dei vincoli e assistenza tecnica per pratiche edilizie nell'area del Parco dell'Etna, Catania e provincia.",
      provider: { "@id": `${seo.siteUrl.replace(/\/$/, "")}/#organization` },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Provincia di Catania" },
        { "@type": "Place", name: "Area del Parco dell'Etna" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Pratiche edilizie nel Parco dell'Etna | Studio Tecnico Mirone",
      description: "Assistenza tecnica per pratiche edilizie e verifiche dei vincoli nell'area del Parco dell'Etna.",
      about: { "@id": `${PAGE_URL}#service` },
      mainEntity: { "@id": `${PAGE_URL}#service` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "it-IT",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: seo.siteUrl },
        { "@type": "ListItem", position: 2, name: "Servizi", item: `${seo.siteUrl.replace(/\/$/, "")}/servizi` },
        { "@type": "ListItem", position: 3, name: "Pratiche edilizie Parco dell'Etna", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: config.faqs.items.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function PraticheEdilizieParcoEtnaPage() {
  return <ServiceDetailPage config={config} jsonLd={jsonLd} />;
}
