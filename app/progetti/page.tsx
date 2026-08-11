import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import PageHero from "@/components/shared/PageHero";
import { projects } from "@/data/projects";
import { seo } from "@/data/seo";

export const metadata: Metadata = {
  title: "Progetti a Belpasso e Catania",

  description:
    "Progetti dello Studio Tecnico Mirone a Belpasso, Catania e provincia: nuove costruzioni, ville, ristrutturazioni, riqualificazioni e progettazione architettonica.",

  alternates: {
    canonical: "/progetti",
  },

  keywords: [
    "progetti architettonici Belpasso",
    "progetti architettonici Catania",
    "progettazione ville Belpasso",
    "progettazione ville Catania",
    "ristrutturazioni Belpasso",
    "ristrutturazioni Catania",
    "nuove costruzioni Belpasso",
    "studio tecnico Belpasso",
    "Studio Tecnico Mirone",
  ],

  openGraph: {
    title:
      "Progetti a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Nuove costruzioni, ville, ristrutturazioni e interventi di riqualificazione progettati dallo Studio Tecnico Mirone.",

    url: `${seo.siteUrl}/progetti`,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Progetti a Belpasso e Catania | Studio Tecnico Mirone",

    description:
      "Una selezione di progetti, nuove costruzioni e ristrutturazioni dello Studio Tecnico Mirone.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const serviceLinks = [
  {
    label: "Progettazione architettonica",
    href: "/servizi/progettazione-architettonica",
  },
  {
    label: "Rendering architettonici",
    href: "/servizi/rendering-architettonici",
  },
  {
    label: "Direzione lavori",
    href: "/servizi/direzione-lavori",
  },
  {
    label: "Pratiche edilizie",
    href: "/servizi/pratiche-edilizie",
  },
];

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "CollectionPage",

      "@id": `${seo.siteUrl}/progetti/#webpage`,

      url: `${seo.siteUrl}/progetti`,

      name:
        "Progetti a Belpasso e Catania | Studio Tecnico Mirone",

      description:
        "Selezione di progetti dello Studio Tecnico Mirone: nuove costruzioni, ville, ristrutturazioni e interventi di riqualificazione.",

      about: {
        "@id": `${seo.siteUrl}/#organization`,
      },
    },

    {
      "@type": "ItemList",

      "@id": `${seo.siteUrl}/progetti/#projects`,

      name:
        "Progetti dello Studio Tecnico Mirone",

      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",

        position: index + 1,

        name: project.title,

        url: `${seo.siteUrl}/progetti/${project.slug}`,
      })),
    },

    {
      "@type": "BreadcrumbList",

      "@id": `${seo.siteUrl}/progetti/#breadcrumb`,

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
          name: "Progetti",
          item: `${seo.siteUrl}/progetti`,
        },
      ],
    },
  ],
};

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Progetti · Belpasso · Catania"
        title="Spazi pensati per essere vissuti."
        description="Una selezione di progetti dello Studio Tecnico Mirone tra Belpasso, Catania e provincia: nuove costruzioni, ville, ristrutturazioni e interventi di riqualificazione raccontati attraverso progetto, immagini, materia e luce."
      />

      {/* INTRO SEO / EDITORIALE */}
      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container editorial-grid">
          <p className="eyebrow">
            Esperienza progettuale
          </p>

          <div>
            <h2 className="display-title">
              Dal progetto
              <br />
              alla realizzazione.
            </h2>

            <div className="mt-8 max-w-3xl space-y-6 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              <p>
                Ogni progetto nasce dall&apos;analisi delle esigenze del
                cliente, delle caratteristiche dell&apos;immobile o del terreno
                e delle possibilità tecniche e amministrative
                dell&apos;intervento.
              </p>

              <p>
                Lo Studio Tecnico Mirone sviluppa progetti architettonici a
                Belpasso, Catania e provincia, seguendo nuove costruzioni,
                ristrutturazioni e riqualificazioni attraverso un percorso
                coordinato tra progettazione, pratiche tecniche e fase
                esecutiva.
              </p>
            </div>

            <nav
              aria-label="Servizi collegati ai progetti"
              className="mt-10 flex flex-wrap gap-x-7 gap-y-4"
            >
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group inline-flex items-center gap-3 border-b border-[var(--color-border)] pb-2 text-[10px] uppercase tracking-[0.2em] transition-colors hover:border-[var(--color-text)]"
                >
                  {service.label}

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.4}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* PROGETTI */}
      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container">
          <div className="space-y-28 lg:space-y-40">
            {projects.map((project, index) => {
              const isVillaMirone =
                project.slug === "villa-mirone";

              const secondImage = isVillaMirone
                ? project.beforeImage
                : project.gallery?.[0];

              const secondImageLabel = isVillaMirone
                ? "Stato di fatto"
                : "Seconda vista";

              const projectMeta = [
                project.category,
                project.location,
              ]
                .filter(Boolean)
                .join(" · ");

              const imageOrder =
                index % 2 === 0
                  ? "lg:order-1"
                  : "lg:order-2";

              const contentOrder =
                index % 2 === 0
                  ? "lg:order-2"
                  : "lg:order-1";

              const contentPosition =
                index % 2 === 0
                  ? "lg:col-start-9"
                  : "lg:col-start-1";

              return (
                <article
                  key={project.slug}
                  className="grid items-start gap-12 border-t border-[var(--color-border)] pt-8 lg:grid-cols-12 lg:gap-16"
                >
                  {/* IMMAGINI */}
                  <div
                    className={`lg:col-span-7 ${imageOrder}`}
                  >
                    <Link
                      href={`/progetti/${project.slug}`}
                      className="group block"
                      aria-label={`Scopri il progetto ${project.title}`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-black/5 md:aspect-[16/11]">
                        <Image
                          src={project.cover}
                          alt={`${project.title}${
                            project.location
                              ? ` a ${project.location}`
                              : ""
                          } — progetto dello Studio Tecnico Mirone`}
                          fill
                          priority={index === 0}
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                        />

                        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/50 via-black/10 to-transparent px-5 pb-5 pt-24 text-white md:px-8 md:pb-8">
                          <span className="text-[9px] uppercase tracking-[0.32em]">
                            {isVillaMirone
                              ? "Render di progetto"
                              : "Progetto"}
                          </span>

                          <span className="text-[9px] uppercase tracking-[0.28em] text-white/75">
                            {String(index + 1).padStart(
                              2,
                              "0",
                            )}
                          </span>
                        </div>
                      </div>
                    </Link>

                    {secondImage && (
                      <div className="mt-6 grid grid-cols-12">
                        <Link
                          href={`/progetti/${project.slug}`}
                          className="group relative col-span-10 col-start-3 block aspect-[16/10] overflow-hidden bg-black/5 md:col-span-8 md:col-start-5"
                          aria-label={`${project.title} — ${secondImageLabel}`}
                        >
                          <Image
                            src={secondImage}
                            alt={`${project.title}${
                              project.location
                                ? ` a ${project.location}`
                                : ""
                            } — ${secondImageLabel}`}
                            fill
                            sizes="(max-width: 768px) 82vw, 42vw"
                            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                          />

                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-5 pb-5 pt-16 text-white">
                            <span className="text-[9px] uppercase tracking-[0.32em]">
                              {secondImageLabel}
                            </span>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* TESTO */}
                  <div
                    className={`lg:col-span-4 lg:pt-12 ${contentOrder} ${contentPosition}`}
                  >
                    <p className="eyebrow">
                      {projectMeta}
                    </p>

                    <h2 className="mt-8 font-serif text-[clamp(2.8rem,4.2vw,4.8rem)] leading-[1.02] tracking-[-0.04em]">
                      <Link
                        href={`/progetti/${project.slug}`}
                        className="transition-opacity hover:opacity-65"
                      >
                        {project.title}
                      </Link>
                    </h2>

                    <p className="mt-8 text-base leading-8 text-[var(--color-muted)]">
                      {project.excerpt}
                    </p>

                    <dl className="mt-9 space-y-3 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-muted)]">
                      {project.location && (
                        <div className="flex justify-between gap-6">
                          <dt>Località</dt>

                          <dd className="text-right text-[var(--color-text)]">
                            {project.location}
                          </dd>
                        </div>
                      )}

                      {project.category && (
                        <div className="flex justify-between gap-6">
                          <dt>Intervento</dt>

                          <dd className="text-right text-[var(--color-text)]">
                            {project.category}
                          </dd>
                        </div>
                      )}

                      <div className="flex justify-between gap-6">
                        <dt>Anno</dt>

                        <dd className="text-right text-[var(--color-text)]">
                          {project.year}
                        </dd>
                      </div>

                      <div className="flex justify-between gap-6">
                        <dt>Stato</dt>

                        <dd className="text-right text-[var(--color-text)]">
                          {project.status}
                        </dd>
                      </div>
                    </dl>

                    <Link
                      href={`/progetti/${project.slug}`}
                      className="group mt-10 inline-flex items-center gap-4 border-b border-[var(--color-text)] pb-3 text-[10px] uppercase tracking-[0.24em]"
                    >
                      Scopri il progetto

                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.4}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container">
          <div className="grid gap-10 border border-[var(--color-border)] p-8 sm:p-12 lg:grid-cols-12 lg:items-end lg:p-16">
            <div className="lg:col-span-8">
              <p className="eyebrow">
                Hai un progetto?
              </p>

              <h2 className="mt-8 max-w-4xl font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[1.05] tracking-[-0.04em]">
                Trasformiamo esigenze e idee in un progetto concreto.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                Raccontaci l&apos;intervento che vuoi realizzare a Belpasso,
                Catania o provincia. Valuteremo insieme fattibilità,
                progettazione e percorso tecnico più adatto.
              </p>
            </div>

            <div className="lg:col-span-4">
              <Link
                href="/contatti"
                className="group inline-flex items-center gap-4 border-b border-[var(--color-text)] pb-3 text-[10px] uppercase tracking-[0.24em]"
              >
                Parliamo del progetto

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
    </main>
  );
}