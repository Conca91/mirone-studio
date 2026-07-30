import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Check,
  ClipboardCheck,
  FileCheck2,
  Gauge,
  Layers3,
  Mail,
  MessageCircle,
  MonitorUp,
  PencilRuler,
  Ruler,
  ShieldCheck,
} from "lucide-react";

import PageHero from "@/components/shared/PageHero";

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
    "https://wa.me/393482934197?text=Buongiorno%2C%20vorrei%20ricevere%20informazioni%20sui%20servizi%20dello%20Studio%20Tecnico%20Mirone.",
};

export const metadata: Metadata = {
  title: "Servizi tecnici a Belpasso e Catania",
  description:
    "Progettazione architettonica, rendering, direzione lavori, pratiche edilizie e APE a Belpasso, Catania e provincia.",
  alternates: {
    canonical: "/servizi",
  },
  keywords: [
    "studio tecnico Belpasso",
    "geometra Belpasso",
    "servizi tecnici Catania",
    "progettazione architettonica Belpasso",
    "rendering architettonici Catania",
    "direzione lavori Belpasso",
    "pratiche edilizie Belpasso",
    "APE Belpasso",
  ],
  openGraph: {
    title: "Servizi tecnici | Studio Tecnico Mirone",
    description:
      "Progettazione, rendering, direzione lavori, pratiche edilizie e certificazioni energetiche.",
    url: `${SITE_URL}/servizi`,
    siteName: CONTACTS.businessName,
    locale: "it_IT",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    icon: PencilRuler,
    title: "Progettazione architettonica",
    description:
      "Progetti personalizzati per nuove costruzioni, ville, ristrutturazioni e riorganizzazione degli spazi.",
    features: [
      "Studi di fattibilità",
      "Nuove costruzioni e ville",
      "Ristrutturazioni",
      "Distribuzione degli ambienti",
    ],
    href: "/servizi/progettazione-architettonica",
    active: true,
  },
  {
    number: "02",
    icon: MonitorUp,
    title: "Rendering architettonici",
    description:
      "Visualizzazioni tridimensionali e immagini fotorealistiche per valutare il progetto prima della realizzazione.",
    features: [
      "Modellazione tridimensionale",
      "Interni ed esterni",
      "Materiali e finiture",
      "Illuminazione",
    ],
    href: "/servizi/rendering-architettonici",
    active: false,
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Direzione dei lavori",
    description:
      "Controllo tecnico del cantiere e verifica della corretta esecuzione delle opere previste dal progetto.",
    features: [
      "Assistenza in cantiere",
      "Verifica delle lavorazioni",
      "Coordinamento tecnico",
      "Controllo delle varianti",
    ],
    href: "/servizi/direzione-lavori",
    active: false,
  },
  {
    number: "04",
    icon: FileCheck2,
    title: "Pratiche edilizie",
    description:
      "Gestione delle procedure amministrative necessarie per costruire, ristrutturare o regolarizzare un immobile.",
    features: [
      "CILA e SCIA",
      "Permesso di Costruire",
      "Verifiche urbanistiche",
      "Accesso agli atti",
    ],
    href: "/servizi/pratiche-edilizie",
    active: false,
  },
  {
    number: "05",
    icon: Gauge,
    title: "APE e certificazioni energetiche",
    description:
      "Attestati di Prestazione Energetica per compravendite, locazioni, nuove costruzioni e ristrutturazioni.",
    features: [
      "Sopralluogo",
      "Raccolta dei dati",
      "Calcolo energetico",
      "Redazione dell’APE",
    ],
    href: "/servizi/ape",
    active: false,
  },
];

const reasons = [
  {
    icon: Ruler,
    title: "Analisi preliminare",
    description:
      "Verifichiamo fattibilità, vincoli e condizioni dell’immobile prima di sviluppare l’intervento.",
  },
  {
    icon: Layers3,
    title: "Servizio coordinato",
    description:
      "Colleghiamo progettazione, pratiche e fase esecutiva attraverso un percorso coerente.",
  },
  {
    icon: ShieldCheck,
    title: "Chiarezza professionale",
    description:
      "Definiamo attività, fasi e documentazione necessaria in maniera comprensibile.",
  },
  {
    icon: Award,
    title: "Attenzione al risultato",
    description:
      "Valutiamo ogni soluzione considerando qualità, funzionalità e sostenibilità economica.",
  },
];

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
    },
    {
      "@type": "BreadcrumbList",
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
      ],
    },
  ],
};

export default function ServiziPage() {
  return (
    <main className="overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="I nostri servizi"
        title="Progettazione, tecnica e gestione degli interventi."
        description="Lo Studio Tecnico Mirone accompagna privati, imprese e professionisti nella progettazione e nella gestione degli interventi edilizi, dalla verifica preliminare fino alla conclusione delle attività."
      />

      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container editorial-grid">
          <div>
            <p className="eyebrow">Competenze coordinate</p>
          </div>

          <div>
            <h2 className="display-title">
              Un unico riferimento per ogni fase.
            </h2>

            <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-[var(--color-muted)]">
              <p>
                Ogni intervento edilizio coinvolge aspetti architettonici,
                tecnici, amministrativi ed economici. Per questo affrontiamo
                ogni incarico attraverso un metodo coordinato.
              </p>

              <p>
                Dalla valutazione preliminare alla progettazione, dalla
                presentazione delle pratiche alla fase di cantiere, il cliente
                viene accompagnato con indicazioni chiare e documentazione
                comprensibile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container">
          <div className="editorial-grid">
            <p className="eyebrow">Cosa facciamo</p>

            <div>
              <h2 className="display-title">
                I principali servizi dello Studio.
              </h2>

              <p className="body-large mt-8">
                Un insieme di competenze coordinate per seguire il progetto,
                gli adempimenti e la realizzazione dell’intervento.
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
                      <span className="eyebrow">{service.number}</span>

                      <div className="mt-8 flex h-12 w-12 items-center justify-center border border-[var(--color-border)]">
                        <Icon
                          aria-hidden="true"
                          className="h-6 w-6"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <div className="lg:col-span-5">
                      <h3 className="font-serif text-[clamp(2.2rem,3vw,3.5rem)] leading-[1.05] tracking-[-0.035em]">
                        {service.title}
                      </h3>

                      <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-muted)]">
                        {service.description}
                      </p>

                      {service.active ? (
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
                      ) : (
                        <a
                          href={CONTACTS.whatsappHref}
                          target="_blank"
                          rel="noreferrer"
                          className="editorial-link mt-8"
                        >
                          Richiedi informazioni

                          <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4"
                          />
                        </a>
                      )}
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

      <section className="section bg-[var(--color-dark)] text-white">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-white/45">
                Perché scegliere lo Studio
              </p>

              <h2 className="mt-8 font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[1] tracking-[-0.04em] text-white">
                Metodo, competenza e presenza costante.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
                Un percorso tecnico ordinato riduce le incertezze e rende più
                semplici le decisioni.
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

                    <h3 className="mt-10 font-serif text-3xl leading-[1.08] text-white">
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

      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container">
          <div className="grid items-end gap-12 border border-[var(--color-border)] p-8 sm:p-12 lg:grid-cols-12 lg:p-16">
            <div className="lg:col-span-8">
              <p className="eyebrow">Parliamo del tuo intervento</p>

              <h2 className="mt-8 font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[1] tracking-[-0.04em]">
                Hai bisogno di un servizio tecnico?
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                Descrivi il progetto o la pratica di cui hai bisogno.
                Valuteremo insieme il percorso tecnico più adatto.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-4">
              <a
                href={CONTACTS.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="button-dark inline-flex min-h-14 items-center justify-center gap-3 px-7 text-sm font-semibold"
              >
                <MessageCircle aria-hidden="true" className="h-5 w-5" />
                Scrivi su WhatsApp
              </a>

              <a
                href={CONTACTS.emailHref}
                className="button-outline inline-flex min-h-14 items-center justify-center gap-3 px-7 text-sm font-semibold"
              >
                <Mail aria-hidden="true" className="h-5 w-5" />
                Invia un’e-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}