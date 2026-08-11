import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Check,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  Gauge,
  Layers3,
  Mail,
  MapPinned,
  MessageCircle,
  MonitorUp,
  PencilRuler,
  Ruler,
  ShieldCheck,
} from "lucide-react";

import PageHero from "@/components/shared/PageHero";
import { seo } from "@/data/seo";

export const metadata: Metadata = {
  title: "Servizi Tecnici a Belpasso e Catania",

  description:
    "Servizi tecnici dello Studio Tecnico Mirone a Belpasso e Catania: progettazione architettonica, pratiche edilizie e catastali, direzione lavori, rilievi topografici, APE e rendering.",

  alternates: {
    canonical: "/servizi",
  },

  keywords: [
    "servizi tecnici Belpasso",
    "servizi tecnici Catania",
    "studio tecnico Belpasso",
    "studio tecnico Catania",
    "ingegnere Belpasso",
    "ingegnere Catania",
    "geometra Belpasso",
    "geometra Catania",
    "progettazione architettonica Belpasso",
    "progettazione architettonica Catania",
    "pratiche edilizie Belpasso",
    "pratiche edilizie Catania",
    "pratiche catastali Belpasso",
    "pratiche catastali Catania",
    "direzione lavori Belpasso",
    "direzione lavori Catania",
    "rilievi topografici Belpasso",
    "rilievi topografici Catania",
    "APE Belpasso",
    "APE Catania",
  ],

  openGraph: {
    title:
      "Servizi Tecnici a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Progettazione, pratiche edilizie e catastali, direzione lavori, rilievi topografici, APE e rendering dello Studio Tecnico Mirone.",

    url: `${seo.siteUrl}/servizi`,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",

    images: [
      {
        url: seo.images.openGraph,
        width: 1200,
        height: 630,
        alt: "Servizi tecnici dello Studio Tecnico Mirone a Belpasso e Catania",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Servizi Tecnici a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Progettazione, pratiche edilizie e catastali, direzione lavori, rilievi topografici, APE e rendering a Belpasso e Catania.",

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

const services = [
  {
    number: "01",
    icon: PencilRuler,
    title: "Progettazione architettonica",

    description:
      "Progettazione architettonica per nuove costruzioni, ville, ristrutturazioni e riorganizzazione degli spazi a Belpasso, Catania e provincia.",

    features: [
      "Studi di fattibilità",
      "Nuove costruzioni e ville",
      "Ristrutturazioni",
      "Distribuzione degli ambienti",
    ],

    href: "/servizi/progettazione-architettonica",
  },

  {
    number: "02",
    icon: MonitorUp,
    title: "Rendering architettonici",

    description:
      "Modellazione tridimensionale e rendering fotorealistici per valutare spazi, materiali, illuminazione e soluzioni progettuali prima della realizzazione.",

    features: [
      "Modellazione tridimensionale",
      "Interni ed esterni",
      "Materiali e finiture",
      "Illuminazione",
    ],

    href: "/servizi/rendering-architettonici",
  },

  {
    number: "03",
    icon: ClipboardCheck,
    title: "Direzione lavori",

    description:
      "Direzione lavori e assistenza tecnica in cantiere per verificare la corretta esecuzione delle opere e coordinare le diverse fasi dell'intervento.",

    features: [
      "Assistenza in cantiere",
      "Verifica delle lavorazioni",
      "Coordinamento tecnico",
      "Controllo delle varianti",
    ],

    href: "/servizi/direzione-lavori",
  },

  {
    number: "04",
    icon: FileCheck2,
    title: "Pratiche edilizie",

    description:
      "Gestione delle pratiche edilizie e delle procedure amministrative necessarie per costruire, ristrutturare o regolarizzare un immobile.",

    features: [
      "CILA e SCIA",
      "Permesso di Costruire",
      "Verifiche urbanistiche",
      "Accesso agli atti",
    ],

    href: "/servizi/pratiche-edilizie",
  },

  {
    number: "05",
    icon: Gauge,
    title: "APE e certificazioni energetiche",

    description:
      "Redazione dell'Attestato di Prestazione Energetica per compravendite, locazioni, nuove costruzioni e interventi di ristrutturazione.",

    features: [
      "Sopralluogo",
      "Raccolta dei dati",
      "Calcolo energetico",
      "Redazione dell'APE",
    ],

    href: "/servizi/ape",
  },

  {
    number: "06",
    icon: MapPinned,
    title: "Rilievi topografici",

    description:
      "Rilievi topografici di terreni, fabbricati e aree esterne per progettazione, verifiche tecniche, pratiche e restituzioni grafiche.",

    features: [
      "Rilievi di terreni",
      "Rilievi di fabbricati",
      "Misurazioni topografiche",
      "Rilievi GPS e restituzioni grafiche",
    ],

    href: "/servizi/rilievi-topografici",
  },

  {
    number: "07",
    icon: FileSearch,
    title: "Pratiche catastali",

    description:
      "Gestione di DOCFA, variazioni catastali, volture, planimetrie e aggiornamenti catastali per immobili e unità urbane.",

    features: [
      "DOCFA",
      "Variazioni catastali",
      "Volture",
      "Planimetrie e verifiche",
    ],

    href: "/servizi/pratiche-catastali",
  },
];

const reasons = [
  {
    icon: Ruler,
    title: "Analisi preliminare",

    description:
      "Verifichiamo fattibilità, documentazione, vincoli e condizioni dell'immobile prima di sviluppare l'intervento.",
  },

  {
    icon: Layers3,
    title: "Servizio coordinato",

    description:
      "Colleghiamo progettazione, pratiche tecniche e fase esecutiva attraverso un percorso coerente.",
  },

  {
    icon: ShieldCheck,
    title: "Chiarezza professionale",

    description:
      "Definiamo attività, fasi e documentazione necessaria in maniera chiara e comprensibile.",
  },

  {
    icon: Award,
    title: "Attenzione al risultato",

    description:
      "Valutiamo ogni soluzione considerando qualità progettuale, funzionalità, fattibilità e sostenibilità economica.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebPage",

      "@id": `${seo.siteUrl}/servizi/#webpage`,

      url: `${seo.siteUrl}/servizi`,

      name:
        "Servizi Tecnici a Belpasso e Catania | Studio Tecnico Mirone",

      description:
        "Servizi di progettazione architettonica, pratiche edilizie e catastali, direzione lavori, rilievi topografici, APE e rendering dello Studio Tecnico Mirone.",

      isPartOf: {
        "@id": `${seo.siteUrl}/#website`,
      },

      about: {
        "@id": `${seo.siteUrl}/#organization`,
      },

      inLanguage: "it-IT",

      breadcrumb: {
        "@id": `${seo.siteUrl}/servizi/#breadcrumb`,
      },

      mainEntity: {
        "@id": `${seo.siteUrl}/servizi/#services`,
      },
    },

    {
      "@type": "ItemList",

      "@id": `${seo.siteUrl}/servizi/#services`,

      name: "Servizi dello Studio Tecnico Mirone",

      numberOfItems: services.length,

      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",

        position: index + 1,

        name: service.title,

        url: `${seo.siteUrl}${service.href}`,
      })),
    },

    {
      "@type": "BreadcrumbList",

      "@id": `${seo.siteUrl}/servizi/#breadcrumb`,

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
      ],
    },
  ],
};

export default function ServiziPage() {
  const whatsappHref =
    "https://wa.me/393482934197?text=Buongiorno%2C%20vorrei%20ricevere%20informazioni%20sui%20servizi%20dello%20Studio%20Tecnico%20Mirone.";

  return (
    <main className="overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Studio Tecnico Mirone · Belpasso · Catania"
        title="Progettazione, tecnica e gestione degli interventi."
        description="Servizi di ingegneria e progettazione per privati, imprese e professionisti a Belpasso, Catania e provincia: dalla verifica preliminare alla progettazione, dalle pratiche tecniche alla fase esecutiva."
      />

      {/* INTRODUZIONE */}
      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container editorial-grid">
          <div>
            <p className="eyebrow">
              Competenze coordinate
            </p>
          </div>

          <div>
            <h2 className="display-title">
              Un unico riferimento
              <br />
              per ogni fase.
            </h2>

            <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-[var(--color-muted)]">
              <p>
                Lo Studio Tecnico Mirone ha sede a Belpasso, in provincia di
                Catania, e offre servizi tecnici per la progettazione, la
                gestione amministrativa e la realizzazione degli interventi
                edilizi.
              </p>

              <p>
                Ogni incarico può coinvolgere aspetti architettonici,
                urbanistici, catastali, energetici e di cantiere. Per questo
                organizziamo le attività attraverso un metodo coordinato,
                individuando fin dall&apos;inizio verifiche, documentazione e
                procedure necessarie.
              </p>

              <p>
                Dalla valutazione preliminare alla progettazione, dalla
                presentazione delle pratiche alla direzione lavori, il cliente
                viene accompagnato attraverso un percorso tecnico chiaro e
                organizzato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container">
          <div className="editorial-grid">
            <p className="eyebrow">
              Cosa facciamo
            </p>

            <div>
              <h2 className="display-title">
                I principali servizi
                <br />
                dello Studio.
              </h2>

              <p className="body-large mt-8 max-w-3xl">
                Progettazione architettonica, pratiche edilizie e catastali,
                direzione lavori, rilievi topografici, certificazione
                energetica e visualizzazione architettonica.
              </p>
            </div>
          </div>

          <div className="mt-20 border-t border-[var(--color-border)]">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="border-b border-[var(--color-border)] py-12 lg:py-16"
                >
                  <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-1">
                      <span className="eyebrow">
                        {service.number}
                      </span>

                      <div className="mt-8 flex h-12 w-12 items-center justify-center border border-[var(--color-border)]">
                        <Icon
                          aria-hidden="true"
                          className="h-6 w-6"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <div className="lg:col-span-5">
                      <h3 className="font-serif text-[clamp(2.2rem,3vw,3.5rem)] leading-[1.08] tracking-[-0.035em]">
                        {service.title}
                      </h3>

                      <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-muted)]">
                        {service.description}
                      </p>

                      <Link
                        href={service.href}
                        className="editorial-link mt-8"
                      >
                        Scopri il servizio

                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4"
                        />
                      </Link>
                    </div>

                    <div className="grid content-start gap-3 sm:grid-cols-2 lg:col-span-6">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex min-h-20 items-start gap-3 border border-[var(--color-border)] p-5"
                        >
                          <Check
                            aria-hidden="true"
                            className="mt-1 h-4 w-4 shrink-0 text-[var(--color-accent)]"
                          />

                          <span className="text-sm leading-6 text-[var(--color-muted)]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MIRiana */}
      <section className="section border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">
                Responsabile dello Studio
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[1.02] tracking-[-0.04em]">
                Ing. Miriana Mirone
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                Miriana Mirone è ingegnere e responsabile dello Studio Tecnico
                Mirone di Belpasso. Coordina le attività dello Studio e i
                professionisti coinvolti nei diversi incarichi, dalla
                progettazione alle pratiche tecniche fino alla fase esecutiva.
              </p>

              <Link
                href="/miriana-mirone"
                className="editorial-link mt-8"
              >
                Profilo professionale

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PERCHÉ SCEGLIERCI */}
      <section className="section bg-[var(--color-dark)] text-white">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow !text-white/45">
                Perché scegliere lo Studio
              </p>

              <h2 className="mt-8 font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[1.08] tracking-[-0.04em] !text-white">
                Metodo, competenza
                <br />
                e presenza costante.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
                Un percorso tecnico ordinato consente di individuare prima le
                criticità, coordinare le diverse attività e affrontare le
                decisioni con maggiore consapevolezza.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2 lg:col-span-7">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <article
                    key={reason.title}
                    className="min-h-64 bg-[var(--color-dark)] p-8"
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6 text-[#c0a780]"
                      strokeWidth={1.5}
                    />

                    <h3 className="mt-10 font-serif text-3xl leading-[1.12] !text-white">
                      {reason.title}
                    </h3>

                    <p className="mt-5 leading-7 text-white/65">
                      {reason.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TERRITORIO */}
      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">
                Dove operiamo
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="display-title">
                Belpasso, Catania
                <br />
                e provincia.
              </h2>

              <p className="body-large mt-8 max-w-2xl">
                Lo Studio Tecnico Mirone ha sede in{" "}
                {seo.address.street}, {seo.address.postalCode}{" "}
                {seo.address.city} ({seo.address.provinceCode}).
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
                Seguiamo incarichi a Belpasso, Catania e nei comuni della
                provincia, valutando in funzione del progetto anche attività
                nel resto della Sicilia e sul territorio nazionale.
              </p>

              <Link
                href="/contatti"
                className="editorial-link mt-8"
              >
                Sede e contatti

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container">
          <div className="grid items-end gap-12 border border-[var(--color-border)] p-8 sm:p-12 lg:grid-cols-12 lg:p-16">
            <div className="lg:col-span-8">
              <p className="eyebrow">
                Parliamo del tuo intervento
              </p>

              <h2 className="mt-8 font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[1.08] tracking-[-0.04em]">
                Hai bisogno di un
                <br />
                servizio tecnico?
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                Descrivi il progetto, l&apos;immobile o la pratica di cui hai
                bisogno. Valuteremo la documentazione disponibile e il percorso
                tecnico più adatto.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="button-dark inline-flex min-h-14 items-center justify-center gap-3 px-7 text-sm font-semibold"
              >
                <MessageCircle
                  aria-hidden="true"
                  className="h-5 w-5"
                />

                Scrivi su WhatsApp
              </a>

              <a
                href={seo.contact.emailHref}
                className="button-outline inline-flex min-h-14 items-center justify-center gap-3 px-7 text-sm font-semibold"
              >
                <Mail
                  aria-hidden="true"
                  className="h-5 w-5"
                />

                Invia un&apos;e-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}