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
  title: "Lo studio",
  description:
    "Conosci lo Studio Tecnico Mirone di Belpasso: competenze, metodo di lavoro e servizi di progettazione, pratiche edilizie, direzione lavori, BIM, APE e consulenza tecnica.",
  alternates: {
    canonical: "/studio",
  },
  openGraph: {
    title: "Lo studio | Studio Tecnico Mirone",
    description:
      "Metodo, competenze e approccio progettuale dello Studio Tecnico Mirone a Belpasso, in provincia di Catania.",
    url: `${seo.siteUrl}/studio`,
    type: "website",
  },
};

export default function StudioPage() {
  const emailHref = `mailto:${company.email}`;

  return (
    <main>
      <PageHero
        eyebrow="Lo studio"
        title="Tecnica, metodo, territorio."
        description="Lo Studio Tecnico Mirone accompagna privati, imprese e professionisti nella progettazione e nella gestione degli interventi edilizi, dalla verifica preliminare fino alla conclusione delle attività."
      />

      <section className="section bg-[var(--color-surface)]">
        <div className="site-container editorial-grid">
          <p className="eyebrow">Chi siamo</p>

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
                Operiamo a Belpasso, nella provincia di Catania, in Sicilia e
                su incarichi distribuiti nel territorio nazionale. Il nostro
                lavoro integra progettazione, rilievo, gestione documentale e
                assistenza tecnica, con l’obiettivo di offrire al cliente un
                percorso ordinato e concretamente realizzabile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-background)]">
        <div className="site-container">
          <div className="grid gap-10 border-t border-black/15 pt-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">La nostra visione</p>
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
                <p className="eyebrow">{value.number}</p>

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

      <section className="section bg-[var(--color-surface)]">
        <div className="site-container">
          <div className="editorial-grid">
            <p className="eyebrow">Professionista</p>

            <div>
              <h2 className="display-title">
                Competenza tecnica e attenzione al progetto.
              </h2>

              <p className="body-large mt-8 max-w-2xl">
                Ogni incarico viene seguito con un confronto diretto e
                continuo, coordinando gli aspetti progettuali, amministrativi
                e operativi.
              </p>
            </div>
          </div>

          <div className="mt-20 border-t border-black/15">
            {company.team.map((person) => (
              <article
                key={person.name}
                className="grid gap-10 border-b border-black/15 py-12 lg:grid-cols-12 lg:gap-16 lg:py-16"
              >
                <div className="lg:col-span-4">
                  <p className="eyebrow">{person.role}</p>

                  <h3 className="mt-8 font-serif text-4xl sm:text-5xl">
                    {person.name}
                  </h3>

                  <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {person.title}
                  </p>
                </div>

                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                    {person.description}
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

      <section className="section bg-[#23211f] text-white">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow text-white/45">Il nostro metodo</p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="display-title text-white">
                Un percorso chiaro, dall’idea alla realizzazione.
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
                <span className="eyebrow text-white/40">
                  {step.number}
                </span>

                <h3 className="font-serif text-3xl">
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

      <section className="section bg-[var(--color-background)]">
        <div className="site-container">
          <div className="grid gap-10 border-t border-black/15 pt-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">Strumenti e competenze</p>
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
                    <span>{technology}</span>

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

      <section className="bg-[#23211f] text-white">
        <div className="site-container grid gap-12 py-24 md:py-32 lg:grid-cols-12 lg:items-end lg:py-40">
          <div className="lg:col-span-7">
            <p className="eyebrow text-white/45">
              Parliamo del tuo progetto
            </p>

            <h2 className="mt-10 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              Iniziamo da una verifica preliminare.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-8 text-white/60">
              Raccontaci le tue esigenze. Valuteremo la documentazione
              disponibile, lo stato dell’immobile e il percorso tecnico più
              adatto.
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