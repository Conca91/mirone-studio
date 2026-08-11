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

export const metadata: Metadata = {
  title: "Studio Tecnico a Belpasso e Catania",

  description:
    "Studio Tecnico Mirone a Belpasso, in provincia di Catania. Progettazione architettonica, pratiche edilizie e catastali, rilievi topografici, direzione lavori, APE, BIM, rendering e consulenza tecnica.",

  alternates: {
    canonical: "/studio",
  },

  keywords: [
    "Studio Tecnico Mirone",
    "studio tecnico Belpasso",
    "studio tecnico Catania",
    "studio tecnico provincia di Catania",
    "geometra Belpasso",
    "ingegnere Belpasso",
    "progettazione Belpasso",
    "pratiche edilizie Belpasso",
    "pratiche catastali Belpasso",
    "rilievi topografici Belpasso",
    "direzione lavori Belpasso",
    "APE Belpasso",
    "BIM Catania",
    "consulenza tecnica Belpasso",
  ],

  openGraph: {
    title:
      "Studio Tecnico a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Studio tecnico a Belpasso per progettazione, pratiche edilizie e catastali, rilievi topografici, direzione lavori, APE e consulenza tecnica.",

    url: `${seo.siteUrl}/studio`,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Studio Tecnico Mirone | Belpasso e Catania",

    description:
      "Progettazione, pratiche edilizie e catastali, rilievi, direzione lavori e servizi tecnici a Belpasso e Catania.",
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

const serviceLinks = [
  {
    title: "Progettazione architettonica",
    href: "/servizi/progettazione-architettonica",
  },
  {
    title: "Pratiche edilizie",
    href: "/servizi/pratiche-edilizie",
  },
  {
    title: "Pratiche catastali",
    href: "/servizi/pratiche-catastali",
  },
  {
    title: "Direzione lavori",
    href: "/servizi/direzione-lavori",
  },
  {
    title: "Rilievi topografici",
    href: "/servizi/rilievi-topografici",
  },
  {
    title: "APE e certificazioni",
    href: "/servizi/ape",
  },
  {
    title: "Rendering architettonici",
    href: "/servizi/rendering-architettonici",
  },
];

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "ProfessionalService",

      "@id": `${seo.siteUrl}/#organization`,

      name: seo.siteName,
      url: seo.siteUrl,

      description:
        "Studio tecnico con sede a Belpasso, in provincia di Catania, attivo nella progettazione architettonica, nelle pratiche edilizie e catastali, nei rilievi topografici, nella direzione lavori, nelle certificazioni energetiche, nel BIM, nel rendering e nella consulenza tecnica.",

      telephone: seo.contact.phone,
      email: seo.contact.email,

      address: {
        "@type": "PostalAddress",

        streetAddress: seo.address.street,
        postalCode: seo.address.postalCode,
        addressLocality: seo.address.city,
        addressRegion: seo.address.province,
        addressCountry: seo.address.countryCode,
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

      founder: {
        "@id": `${seo.siteUrl}/miriana-mirone/#person`,
      },

      employee: [
        {
          "@id": `${seo.siteUrl}/miriana-mirone/#person`,
        },
      ],

      knowsAbout: [
        "Progettazione architettonica",
        "Pratiche edilizie",
        "Pratiche catastali",
        "Direzione lavori",
        "Rilievi topografici",
        "Attestato di Prestazione Energetica",
        "Building Information Modeling",
        "Rendering architettonico",
        "Consulenza tecnica",
      ],
    },

    {
      "@type": "WebPage",

      "@id": `${seo.siteUrl}/studio/#webpage`,

      url: `${seo.siteUrl}/studio`,

      name:
        "Studio Tecnico a Belpasso e Catania | Studio Tecnico Mirone",

      description:
        "Presentazione dello Studio Tecnico Mirone di Belpasso, delle competenze professionali, del metodo di lavoro e dei principali servizi tecnici.",

      about: {
        "@id": `${seo.siteUrl}/#organization`,
      },

      mainEntity: {
        "@id": `${seo.siteUrl}/#organization`,
      },
    },

    {
      "@type": "BreadcrumbList",

      "@id": `${seo.siteUrl}/studio/#breadcrumb`,

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
      ],
    },
  ],
};

export default function StudioPage() {
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
        title="Tecnica, metodo, territorio."
        description="Lo Studio Tecnico Mirone ha sede a Belpasso, in provincia di Catania, e accompagna privati, imprese e professionisti nella progettazione e nella gestione tecnica degli interventi edilizi."
      />

      {/* CHI SIAMO */}
      <section className="section bg-[var(--color-surface)]">
        <div className="site-container editorial-grid">
          <p className="eyebrow">
            Chi siamo
          </p>

          <div>
            <h2 className="display-title">
              Un unico studio.
              <br />
              Competenze coordinate.
            </h2>

            <div className="mt-8 max-w-3xl space-y-6">
              <p className="body-large">
                {company.description}
              </p>

              <p className="leading-8 text-[var(--color-muted)]">
                Lo Studio Tecnico Mirone opera a Belpasso, Catania e nei
                comuni della provincia, seguendo privati, imprese e
                professionisti nella progettazione e nella gestione tecnica
                degli interventi edilizi.
              </p>

              <p className="leading-8 text-[var(--color-muted)]">
                Il lavoro dello Studio integra progettazione architettonica,
                pratiche edilizie e catastali, rilievi topografici, direzione
                lavori, certificazione energetica, modellazione BIM, rendering
                e consulenza tecnica.
              </p>

              <p className="leading-8 text-[var(--color-muted)]">
                Ogni incarico viene affrontato con un metodo coordinato, dalla
                verifica preliminare alla definizione del progetto e degli
                adempimenti necessari, fino alla fase esecutiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISIONE */}
      <section className="section bg-[var(--color-background)]">
        <div className="site-container">
          <div className="grid gap-10 border-t border-black/15 pt-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">
                La nostra visione
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <blockquote className="font-serif text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                “{company.philosophy}”
              </blockquote>
            </div>
          </div>

          <div className="mt-24 grid border-t border-black/15 sm:grid-cols-2 lg:mt-32 lg:grid-cols-4">
            {company.values.map((value) => (
              <article
                key={value.number}
                className="border-b border-black/15 py-9 sm:px-6 sm:first:pl-0 lg:border-r lg:last:border-r-0 lg:last:pr-0"
              >
                <p className="eyebrow">
                  {value.number}
                </p>

                <h3 className="mt-12 font-serif text-3xl">
                  {value.title}
                </h3>

                <p className="mt-5 leading-7 text-[var(--color-muted)]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSABILE */}
      <section className="section bg-[var(--color-surface)]">
        <div className="site-container">
          <div className="editorial-grid">
            <p className="eyebrow">
              Responsabile dello studio
            </p>

            <div>
              <h2 className="display-title">
                Miriana Mirone.
              </h2>

              <p className="body-large mt-8 max-w-2xl">
                Ingegnere e responsabile dello Studio Tecnico Mirone di
                Belpasso, in provincia di Catania.
              </p>

              <Link
                href="/miriana-mirone"
                className="group mt-8 inline-flex items-center gap-4 border-b border-[var(--color-text)] pb-3 text-[10px] uppercase tracking-[0.24em]"
              >
                Profilo di Miriana Mirone

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.4}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="mt-20 border-t border-black/15">
            {company.team.map((person) => (
              <article
                key={person.name}
                className="grid gap-10 border-b border-black/15 py-12 lg:grid-cols-12 lg:gap-16 lg:py-16"
              >
                <div className="lg:col-span-4">
                  <p className="eyebrow">
                    {person.role}
                  </p>

                  <h3 className="mt-8 font-serif text-4xl sm:text-5xl">
                    <Link
                      href="/miriana-mirone"
                      className="group inline-flex items-center gap-4"
                    >
                      {person.name}

                      <ArrowUpRight
                        size={20}
                        strokeWidth={1.4}
                        aria-hidden="true"
                        className="opacity-40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </Link>
                  </h3>

                  <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {person.title}
                  </p>
                </div>

                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                    {person.description}
                  </p>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
                    Miriana Mirone coordina le attività dello Studio Tecnico
                    Mirone a Belpasso, seguendo progettazione, pratiche
                    tecniche, rilievi, direzione lavori e consulenza in
                    collaborazione con i professionisti coinvolti nei diversi
                    incarichi.
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="section bg-[var(--color-background)]">
        <div className="site-container">
          <div className="editorial-grid">
            <p className="eyebrow">
              Competenze
            </p>

            <div>
              <h2 className="display-title">
                Servizi tecnici per ogni fase dell&apos;intervento.
              </h2>

              <p className="body-large mt-8 max-w-2xl">
                Dalla verifica iniziale alla progettazione, dagli adempimenti
                amministrativi alla fase esecutiva, lo Studio coordina le
                principali attività necessarie allo sviluppo
                dell&apos;intervento.
              </p>
            </div>
          </div>

          <div className="mt-20 grid border-t border-black/15 sm:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.map((service, index) => (
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
                    {service.title}
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

          <div className="mt-10">
            <Link
              href="/servizi"
              className="group inline-flex items-center gap-4 border-b border-black pb-3 text-[10px] uppercase tracking-[0.24em]"
            >
              Tutti i servizi

              <ArrowUpRight
                size={18}
                strokeWidth={1.4}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* METODO */}
      <section className="section bg-[#23211f] text-white">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow !text-white/45">
                Il nostro metodo
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="display-title !text-white">
                Un percorso chiaro, dall&apos;idea alla realizzazione.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
                Organizziamo ogni attività in fasi definite, così da verificare
                preventivamente condizioni, criticità e adempimenti necessari.
              </p>
            </div>
          </div>

          <div className="mt-16 border-t border-white/20 lg:mt-24">
            {company.process.map((step) => (
              <article
                key={step.number}
                className="grid gap-5 border-b border-white/20 py-9 sm:grid-cols-[0.2fr_0.8fr_1fr] sm:gap-8"
              >
                <span className="eyebrow !text-white/40">
                  {step.number}
                </span>

                <h3 className="font-serif text-3xl !text-white">
                  {step.title}
                </h3>

                <p className="leading-7 text-white/60">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECNOLOGIE */}
      <section className="section bg-[var(--color-background)]">
        <div className="site-container">
          <div className="grid gap-10 border-t border-black/15 pt-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">
                Strumenti e competenze
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="display-title">
                Tecnologia al servizio della precisione.
              </h2>

              <p className="body-large mt-8 max-w-2xl">
                Utilizziamo strumenti digitali e metodologie coordinate per
                controllare il progetto, rappresentare con chiarezza le
                soluzioni e gestire correttamente le informazioni tecniche.
              </p>

              <ul className="mt-12 grid gap-x-10 sm:grid-cols-2">
                {company.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="flex items-center justify-between gap-4 border-b border-black/15 py-5 text-sm"
                  >
                    <span>
                      {technology}
                    </span>

                    <span
                      aria-hidden="true"
                      className="font-serif text-xl text-[var(--color-muted)]"
                    >
                      +
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TERRITORIO */}
      <section className="section bg-[var(--color-surface)]">
        <div className="site-container">
          <div className="grid gap-10 border-t border-black/15 pt-10 lg:grid-cols-12 lg:gap-16">
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
                La sede dello Studio Tecnico Mirone è a Belpasso. Seguiamo
                progetti e incarichi tecnici a Catania, nei comuni
                dell&apos;area etnea e nella provincia.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
                In funzione della tipologia di incarico, lo Studio valuta
                attività anche nel resto della Sicilia e sul territorio
                nazionale.
              </p>

              <Link
                href="/contatti"
                className="group mt-9 inline-flex items-center gap-4 border-b border-[var(--color-text)] pb-3 text-[10px] uppercase tracking-[0.24em]"
              >
                Sede e contatti

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
              Studio Tecnico Mirone · Belpasso · Catania
            </p>

            <h2 className="mt-10 font-serif text-5xl leading-[0.98] tracking-[-0.04em] !text-white sm:text-6xl md:text-7xl">
              Iniziamo da una verifica preliminare.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-8 text-white/60">
              Raccontaci le tue esigenze. Valuteremo la documentazione
              disponibile, lo stato dell&apos;immobile e il percorso tecnico
              più adatto.
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

                Scrivici su WhatsApp

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