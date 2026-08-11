import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Mail,
  MessageCircle,
} from "lucide-react";

import PageHero from "@/components/shared/PageHero";
import { company } from "@/data/company";
import { seo } from "@/data/seo";

const PERSON_URL = `${seo.siteUrl}/miriana-mirone`;
const PERSON_ID = `${PERSON_URL}/#person`;
const PAGE_ID = `${PERSON_URL}/#webpage`;
const BREADCRUMB_ID = `${PERSON_URL}/#breadcrumb`;

export const metadata: Metadata = {
  title: "Miriana Mirone | Ingegnere - Studio Tecnico Mirone",

  description:
    "Miriana Mirone, ingegnere e responsabile dello Studio Tecnico Mirone a Belpasso, in provincia di Catania. Progettazione architettonica, pratiche edilizie e catastali, direzione lavori, rilievi topografici, APE, BIM e consulenza tecnica.",

  alternates: {
    canonical: "/miriana-mirone",
  },

  keywords: [
    "Miriana Mirone",
    "Ingegnere Miriana Mirone",
    "Ing. Miriana Mirone",
    "Miriana Mirone Belpasso",
    "Miriana Mirone Catania",
    "Ingegnere Belpasso",
    "Ingegnere Catania",
    "ingegnere a Belpasso",
    "ingegnere a Catania",
    "Studio Tecnico Mirone",
    "studio tecnico Belpasso",
    "studio tecnico Catania",
    "progettazione Belpasso",
    "progettazione Catania",
    "pratiche edilizie Belpasso",
    "pratiche catastali Belpasso",
    "direzione lavori Belpasso",
    "rilievi topografici Belpasso",
    "APE Belpasso",
  ],

  openGraph: {
    title:
      "Miriana Mirone | Ingegnere - Studio Tecnico Mirone",

    description:
      "Miriana Mirone, ingegnere e responsabile dello Studio Tecnico Mirone a Belpasso, Catania.",

    url: PERSON_URL,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "profile",

    images: [
      {
        url: seo.images.openGraph,
        width: 1200,
        height: 630,
        alt: "Miriana Mirone - Ingegnere e responsabile dello Studio Tecnico Mirone",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Miriana Mirone | Studio Tecnico Mirone",

    description:
      "Ingegnere Miriana Mirone a Belpasso, Catania. Progettazione e servizi tecnici.",

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
    label: "Progettazione architettonica",
    href: "/servizi/progettazione-architettonica",
  },
  {
    label: "Pratiche edilizie",
    href: "/servizi/pratiche-edilizie",
  },
  {
    label: "Pratiche catastali",
    href: "/servizi/pratiche-catastali",
  },
  {
    label: "Direzione lavori",
    href: "/servizi/direzione-lavori",
  },
  {
    label: "Rilievi topografici",
    href: "/servizi/rilievi-topografici",
  },
  {
    label: "APE e certificazioni energetiche",
    href: "/servizi/ape",
  },
  {
    label: "Rendering architettonici",
    href: "/servizi/rendering-architettonici",
  },
];

const locations = [
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
];

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "ProfilePage",

      "@id": PAGE_ID,

      url: PERSON_URL,

      name:
        "Miriana Mirone | Ingegnere - Studio Tecnico Mirone",

      headline:
        "Ingegnere Miriana Mirone",

      description:
        "Pagina professionale di Miriana Mirone, ingegnere e responsabile dello Studio Tecnico Mirone a Belpasso, in provincia di Catania.",

      isPartOf: {
        "@id": `${seo.siteUrl}/#website`,
      },

      mainEntity: {
        "@id": PERSON_ID,
      },

      about: {
        "@id": PERSON_ID,
      },

      breadcrumb: {
        "@id": BREADCRUMB_ID,
      },

      inLanguage: "it-IT",
    },

    {
      "@type": "BreadcrumbList",

      "@id": BREADCRUMB_ID,

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
          name: "Studio",
          item: `${seo.siteUrl}/studio`,
        },

        {
          "@type": "ListItem",
          position: 3,
          name: "Miriana Mirone",
          item: PERSON_URL,
        },
      ],
    },
  ],
};

export default function MirianaMironePage() {
  const person = company.team[0];

  const emailHref = `mailto:${company.email}`;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Studio Tecnico Mirone · Belpasso · Catania"
        title="Miriana Mirone."
        description="Ingegnere e responsabile dello Studio Tecnico Mirone a Belpasso, in provincia di Catania. Segue attività di progettazione, pratiche tecniche, direzione lavori, rilievi e consulenza per interventi edilizi."
      />

      {/* PROFILO */}
      <section className="section bg-[var(--color-surface)]">
        <div className="site-container editorial-grid">
          <p className="eyebrow">
            Profilo professionale
          </p>

          <div>
            <h1 className="display-title">
              Ingegnere
              <br />
              Miriana Mirone.
            </h1>

            <div className="mt-8 max-w-3xl space-y-6">
              <p className="body-large">
                Miriana Mirone è ingegnere e responsabile dello Studio Tecnico
                Mirone, realtà professionale con sede a Belpasso, in provincia
                di Catania.
              </p>

              <p className="leading-8 text-[var(--color-muted)]">
                L&apos;attività professionale comprende progettazione
                architettonica, pratiche edilizie e catastali, direzione
                lavori, rilievi topografici, certificazioni energetiche,
                modellazione BIM, rendering e consulenza tecnica.
              </p>

              <p className="leading-8 text-[var(--color-muted)]">
                L&apos;Ingegnere Miriana Mirone segue privati, imprese e
                professionisti nelle diverse fasi dell&apos;intervento, dalla
                verifica preliminare alla progettazione e dalla gestione delle
                pratiche fino alla fase esecutiva.
              </p>

              <p className="leading-8 text-[var(--color-muted)]">
                Lo Studio opera principalmente a Belpasso, Catania e nei comuni
                della provincia, seguendo incarichi anche nel resto della
                Sicilia e, in funzione del progetto, sul territorio nazionale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONISTA */}
      {person && (
        <section className="section bg-[var(--color-background)]">
          <div className="site-container">
            <div className="grid gap-10 border-t border-black/15 pt-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="eyebrow">
                  Ingegnere · Belpasso · Catania
                </p>

                <h2 className="mt-8 font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl">
                  Miriana Mirone
                </h2>

                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Responsabile dello Studio Tecnico Mirone
                </p>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                  {person.description}
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
                  L&apos;Ingegnere Miriana Mirone coordina le attività dello
                  Studio Tecnico Mirone con l&apos;obiettivo di offrire un
                  servizio tecnico organizzato, chiaro e coordinato tra
                  progettazione, documentazione e realizzazione
                  dell&apos;intervento.
                </p>

                <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                  {person.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-3 border-b border-black/10 pb-4 text-sm"
                    >
                      <Check
                        size={16}
                        strokeWidth={1.5}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0"
                      />

                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* COMPETENZE */}
      <section className="section bg-[var(--color-surface)]">
        <div className="site-container">
          <div className="editorial-grid">
            <p className="eyebrow">
              Competenze
            </p>

            <div>
              <h2 className="display-title">
                Progettazione e servizi tecnici coordinati.
              </h2>

              <p className="body-large mt-8 max-w-2xl">
                Ogni incarico viene affrontato valutando insieme aspetti
                progettuali, tecnici e amministrativi.
              </p>
            </div>
          </div>

          <div className="mt-20 grid border-t border-black/15 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex min-h-44 flex-col justify-between border-b border-black/15 py-8 sm:px-7 sm:first:pl-0 lg:border-r lg:[&:nth-child(3n)]:border-r-0"
              >
                <span className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="mt-12 flex items-end justify-between gap-5">
                  <h3 className="font-serif text-2xl leading-tight sm:text-3xl">
                    {service.label}
                  </h3>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                    aria-hidden="true"
                    className="mb-1 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TERRITORIO */}
      <section className="section bg-[var(--color-background)]">
        <div className="site-container">
          <div className="grid gap-10 border-t border-black/15 pt-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">
                Dove opera
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="display-title">
                Belpasso, Catania
                <br />
                e provincia.
              </h2>

              <p className="body-large mt-8 max-w-2xl">
                Miriana Mirone opera presso lo Studio Tecnico Mirone di
                Belpasso e segue attività professionali a Catania, nei comuni
                dell&apos;area etnea e nella provincia.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
                In funzione della tipologia di incarico, lo Studio valuta
                attività anche nel resto della Sicilia e sul territorio
                nazionale.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {locations.map((location) => (
                  <span
                    key={location}
                    className="border border-[var(--color-border)] px-4 py-2 text-xs text-[var(--color-muted)]"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO */}
      <section className="section bg-[var(--color-surface)]">
        <div className="site-container">
          <div className="editorial-grid">
            <p className="eyebrow">
              Studio Tecnico Mirone
            </p>

            <div>
              <h2 className="display-title">
                Un unico riferimento
                <br />
                per il progetto.
              </h2>

              <p className="body-large mt-8 max-w-2xl">
                Lo Studio Tecnico Mirone coordina progettazione, pratiche,
                rilievi e attività di cantiere attraverso un percorso tecnico
                organizzato.
              </p>

              <Link
                href="/studio"
                className="group mt-10 inline-flex items-center gap-4 border-b border-[var(--color-text)] pb-3 text-[10px] uppercase tracking-[0.24em]"
              >
                Scopri lo studio

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.4}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#23211f] text-white">
        <div className="site-container grid gap-12 py-24 md:py-32 lg:grid-cols-12 lg:items-end lg:py-40">
          <div className="lg:col-span-7">
            <p className="eyebrow !text-white/45">
              Ingegnere Miriana Mirone · Studio Tecnico Mirone
            </p>

            <h2 className="mt-10 font-serif text-5xl leading-[0.98] tracking-[-0.04em] !text-white sm:text-6xl md:text-7xl">
              Parliamo del tuo progetto.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-8 text-white/60">
              Raccontaci le tue esigenze. Valuteremo insieme documentazione,
              fattibilità e percorso tecnico più adatto.
            </p>

            <div className="mt-10 flex flex-col items-start gap-5">
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-semibold !text-[#23211f] transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle
                  size={18}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />

                Scrivi su WhatsApp

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={emailHref}
                className="group inline-flex items-center gap-4 border-b border-white pb-3 text-[10px] uppercase tracking-[0.24em]"
              >
                <Mail
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                Scrivi allo studio

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.4}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/contatti"
                className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.24em] text-white/60 transition-colors hover:text-white"
              >
                Tutti i contatti

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.4}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}