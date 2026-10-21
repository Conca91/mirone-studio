import type { Metadata } from "next";
import { ClipboardList, FileText, House, Landmark } from "lucide-react";

import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import type { ServiceDetailConfig } from "@/components/services/service-types";
import { seo } from "@/data/seo";

const PAGE_PATH = "/servizi/successioni-ereditarie";
const BASE_URL = seo.siteUrl.replace(/\/$/, "");
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Successioni ereditarie a Catania e provincia | Studio Mirone",
  description:
    "Assistenza per dichiarazioni di successione ereditaria, volture catastali e pratiche immobiliari a Catania e provincia. Richiedi informazioni allo Studio Tecnico Mirone.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Successioni ereditarie a Catania e provincia | Studio Tecnico Mirone",
    description:
      "Dichiarazioni di successione, verifiche catastali e volture per immobili ereditati a Catania e provincia.",
    url: PAGE_URL,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
    images: [{ url: seo.images.openGraph, width: 1200, height: 630, alt: "Successioni ereditarie - Studio Tecnico Mirone" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Successioni ereditarie a Catania e provincia | Studio Mirone",
    description: "Assistenza per dichiarazioni di successione e volture catastali.",
    images: [seo.images.openGraph],
  },
  robots: { index: true, follow: true },
};

const config: ServiceDetailConfig = {
  breadcrumbLabel: "Successioni ereditarie",
  locationLabel: "Successioni ereditarie · Catania e provincia",
  titleFirstLine: "Successioni ereditarie",
  titleSecondLine: "a Catania e provincia",
  heroDescription:
    "Lo Studio Tecnico Mirone offre assistenza per dichiarazioni di successione ereditaria, verifiche immobiliari e volture catastali a Catania e provincia. Affianchiamo gli eredi nella raccolta dei documenti e nella gestione degli adempimenti connessi agli immobili ereditati.",
  whatsappHref:
    "https://wa.me/393482934197?text=Buongiorno%2C%20vorrei%20informazioni%20per%20una%20dichiarazione%20di%20successione%20ereditaria.",
  emailHref: seo.contact.emailHref,
  heroChecklist: [
    "Analisi della situazione ereditaria",
    "Raccolta documenti",
    "Verifiche catastali",
    "Dichiarazione di successione",
    "Volture catastali",
  ],
  introduction: {
    eyebrow: "Assistenza agli eredi",
    title: "Un supporto tecnico per gestire gli immobili ricevuti in eredità.",
    paragraphs: [
      "La successione ereditaria comporta adempimenti fiscali e, in presenza di immobili, verifiche sulla titolarità e sui dati catastali. La documentazione deve essere esaminata con attenzione prima della presentazione della dichiarazione.",
      "Lo Studio Tecnico Mirone assiste gli eredi a Catania e provincia nella raccolta delle informazioni, nelle verifiche catastali e nella predisposizione della dichiarazione di successione, in relazione alle caratteristiche del singolo caso.",
      "L'assistenza può comprendere anche le volture catastali e la verifica delle intestazioni degli immobili. Per questioni giuridiche controverse, come contestazioni testamentarie o conflitti tra eredi, può essere necessario il coinvolgimento di un professionista legale.",
    ],
  },
  areas: {
    eyebrow: "Di cosa ci occupiamo",
    title: "Dalla dichiarazione alle verifiche catastali.",
    description:
      "Ogni successione presenta caratteristiche diverse: numero degli eredi, beni coinvolti, documentazione disponibile e adempimenti da effettuare.",
    cards: [
      { icon: FileText, title: "Dichiarazione di successione", description: "Raccolta e organizzazione dei dati necessari alla predisposizione e alla presentazione della dichiarazione di successione." },
      { icon: House, title: "Immobili ereditati", description: "Verifica dei dati catastali di fabbricati e terreni, delle intestazioni e delle quote di proprietà dichiarate." },
      { icon: ClipboardList, title: "Volture catastali", description: "Assistenza nelle volture catastali e nel controllo degli aggiornamenti delle intestazioni, quando necessari." },
      { icon: Landmark, title: "Adempimenti e documenti", description: "Supporto nella ricostruzione della documentazione e nell'individuazione degli adempimenti fiscali e catastali pertinenti." },
    ],
  },
  workflow: {
    eyebrow: "Come lavoriamo",
    title: "Un percorso chiaro, passo dopo passo.",
    description:
      "Esaminiamo la situazione e definiamo le attività da svolgere prima di procedere con la pratica.",
    steps: [
      { number: "01", title: "Primo confronto", description: "Raccogliamo le informazioni sul decesso, sugli eredi e sui beni che potrebbero rientrare nella successione." },
      { number: "02", title: "Documentazione", description: "Verifichiamo i documenti anagrafici, gli atti e i dati relativi agli immobili, segnalando eventuali integrazioni necessarie." },
      { number: "03", title: "Verifiche catastali", description: "Esaminiamo visure, identificativi catastali, intestazioni e quote per individuare eventuali incongruenze." },
      { number: "04", title: "Predisposizione della dichiarazione", description: "Organizziamo le informazioni e predisponiamo la dichiarazione secondo la situazione successoria e le regole applicabili." },
      { number: "05", title: "Presentazione e ricevute", description: "Seguiamo la presentazione telematica, quando prevista nell'incarico, e verifichiamo le relative ricevute." },
      { number: "06", title: "Controllo delle volture", description: "Verifichiamo l'aggiornamento delle intestazioni catastali e gestiamo gli eventuali adempimenti successivi concordati." },
    ],
  },
  benefits: {
    eyebrow: "Perché rivolgersi allo Studio",
    title: "Attenzione ai dati, ai documenti e agli immobili.",
    description:
      "Una corretta ricostruzione della situazione catastale è importante per ridurre il rischio di incongruenze nella pratica.",
    items: [
      "Esame preliminare della situazione successoria",
      "Verifica dei dati catastali degli immobili",
      "Assistenza nella raccolta dei documenti",
      "Predisposizione della dichiarazione",
      "Supporto per le volture catastali",
      "Indicazioni sugli adempimenti successivi",
    ],
  },
  deliverables: {
    eyebrow: "Documentazione e attività",
    title: "Cosa può comprendere l'incarico.",
    description:
      "La documentazione richiesta dipende dalla situazione degli eredi e dai beni. L'elenco definitivo viene concordato dopo una prima verifica.",
    items: [
      "Dati anagrafici e codici fiscali del defunto e degli eredi",
      "Informazioni e documenti relativi al decesso",
      "Eventuale testamento e altri atti rilevanti",
      "Visure catastali di fabbricati e terreni",
      "Atti di provenienza degli immobili, se necessari",
      "Informazioni su conti, rapporti bancari e altri beni, se pertinenti",
      "Predisposizione della dichiarazione di successione",
      "Ricevute di presentazione e documentazione disponibile",
      "Verifica o richiesta delle volture catastali, ove necessarie",
      "Controllo delle intestazioni catastali aggiornate",
    ],
  },
  locations: {
    eyebrow: "Dove operiamo",
    title: "Successioni ereditarie a Catania e provincia.",
    description:
      "Lo Studio Tecnico Mirone ha sede a Belpasso e offre assistenza per pratiche di successione e adempimenti catastali a Catania e nei comuni della provincia, anche mediante gestione documentale a distanza quando possibile.",
    items: ["Catania", "Belpasso", "Paternò", "Misterbianco", "Mascalucia", "Nicolosi", "Pedara", "Acireale", "Gravina di Catania", "San Giovanni la Punta"],
  },
  faqs: {
    eyebrow: "Domande frequenti",
    title: "Cosa sapere sulla successione ereditaria.",
    items: [
      { question: "Quando va presentata la dichiarazione di successione?", answer: "In generale, la dichiarazione di successione deve essere presentata entro 12 mesi dalla data di apertura della successione, normalmente coincidente con il decesso. Esistono eccezioni e casi particolari da verificare." },
      { question: "La dichiarazione di successione è sempre obbligatoria?", answer: "Non sempre. La normativa prevede specifici casi di esonero, legati anche al rapporto di parentela, al valore dell'attivo ereditario e all'assenza di immobili o diritti reali immobiliari. È opportuno verificare il caso concreto." },
      { question: "Quali documenti servono per una successione?", answer: "Generalmente occorrono i dati del defunto e degli eredi, le informazioni sul decesso, i dati dei beni ereditari e la documentazione relativa agli immobili. Possono essere necessari ulteriori documenti in base alla situazione." },
      { question: "Dopo la successione, il Catasto si aggiorna automaticamente?", answer: "La dichiarazione telematica può comportare la richiesta di voltura automatica nei casi previsti. Non è però corretto presumere che ogni intestazione venga aggiornata senza verifiche: occorre controllare le ricevute e le visure successive." },
      { question: "Quanto costa una dichiarazione di successione?", answer: "Il costo dipende dal numero degli eredi, dai beni coinvolti, dalla complessità delle verifiche e dagli adempimenti richiesti. Dopo l'esame preliminare possiamo predisporre un preventivo." },
      { question: "È possibile gestire una successione con immobili in comuni diversi?", answer: "Sì. È possibile esaminare immobili situati in più comuni, verificando per ciascuno i dati catastali e la documentazione necessaria." },
      { question: "Vi occupate di successioni a Catania e provincia?", answer: "Sì. Lo Studio Tecnico Mirone offre assistenza per dichiarazioni di successione, verifiche e volture catastali a Catania e nei comuni della provincia." },
    ],
  },
  finalCta: {
    eyebrow: "Devi presentare una successione?",
    title: "Parliamo della tua pratica ereditaria.",
    description:
      "Contattaci indicando il comune in cui si trovano gli immobili e, se possibile, il numero degli eredi. Verificheremo la documentazione necessaria e le attività da svolgere per formulare un preventivo.",
  },
};

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "Assistenza per successioni ereditarie a Catania e provincia",
      serviceType: "Dichiarazioni di successione e volture catastali",
      url: PAGE_URL,
      description: "Assistenza per dichiarazioni di successione, verifiche immobiliari e volture catastali a Catania e provincia.",
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: [
        { "@type": "City", name: "Catania" },
        { "@type": "AdministrativeArea", name: "Provincia di Catania" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: "Successioni ereditarie a Catania e provincia",
      description: "Dichiarazioni di successione, volture catastali e assistenza per immobili ereditati.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#service` },
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      inLanguage: "it-IT",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Servizi", item: `${BASE_URL}/servizi` },
        { "@type": "ListItem", position: 3, name: "Successioni ereditarie", item: PAGE_URL },
      ],
    },
  ],
};

export default function SuccessioniEreditariePage() {
  return <ServiceDetailPage config={config} jsonLd={jsonLd} />;
}
