import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import PageHero from "@/components/shared/PageHero";
import { seo } from "@/data/seo";

export const metadata: Metadata = {
  title: "Metodo",
  description:
    "Scopri il metodo di lavoro dello Studio Tecnico Mirone: ascolto, rilievo, progettazione, pratiche, direzione lavori e consegna.",
  alternates: {
    canonical: "/metodo",
  },
  openGraph: {
    title: "Metodo | Studio Tecnico Mirone",
    description:
      "Un percorso tecnico chiaro e coordinato, dall’analisi iniziale fino alla conclusione dell’intervento.",
    url: `${seo.siteUrl}/metodo`,
    type: "website",
  },
};

const steps = [
  {
    number: "01",
    title: "Ascolto",
    description:
      "Ogni incarico parte dal confronto con il cliente, dall’analisi delle esigenze e dalla definizione chiara degli obiettivi.",
  },
  {
    number: "02",
    title: "Rilievo",
    description:
      "Raccogliamo misure, informazioni e documentazione per conoscere con precisione lo stato dei luoghi.",
  },
  {
    number: "03",
    title: "Progetto",
    description:
      "Trasformiamo esigenze e vincoli in una soluzione progettuale funzionale, coerente e concretamente realizzabile.",
  },
  {
    number: "04",
    title: "Pratiche",
    description:
      "Gestiamo gli adempimenti urbanistici, catastali e amministrativi necessari alla realizzazione dell’intervento.",
  },
  {
    number: "05",
    title: "Direzione lavori",
    description:
      "Seguiamo il cantiere, coordinando le lavorazioni e verificando che il progetto venga realizzato correttamente.",
  },
  {
    number: "06",
    title: "Consegna",
    description:
      "Concludiamo il percorso con le verifiche finali, la documentazione necessaria e la consegna dell’opera.",
  },
];

const principles = [
  {
    number: "01",
    title: "Chiarezza",
    description:
      "Ogni fase viene spiegata in modo comprensibile, definendo attività, documenti e passaggi necessari.",
  },
  {
    number: "02",
    title: "Controllo",
    description:
      "Verifichiamo preventivamente condizioni, vincoli e criticità per ridurre imprevisti durante il percorso.",
  },
  {
    number: "03",
    title: "Coordinamento",
    description:
      "Manteniamo collegate progettazione, pratiche amministrative e fase esecutiva.",
  },
  {
    number: "04",
    title: "Presenza",
    description:
      "Il cliente mantiene un confronto diretto con lo studio durante tutte le fasi dell’incarico.",
  },
];

export default function MetodoPage() {
  return (
    <main className="overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]">
      <PageHero
        eyebrow="Metodo"
        title="Un percorso chiaro, dall’idea alla realizzazione."
        description="Seguiamo ogni progetto con un approccio ordinato e condiviso, accompagnando il cliente in tutte le fasi tecniche, amministrative e operative."
      />

      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container editorial-grid">
          <p className="eyebrow">Il nostro approccio</p>

          <div>
            <h2 className="display-title">
              Ogni progetto parte dalla conoscenza.
            </h2>

            <div className="mt-8 max-w-3xl space-y-6">
              <p className="body-large">
                Prima di sviluppare una soluzione analizziamo le esigenze del
                cliente, la documentazione disponibile, lo stato dell’immobile
                e le condizioni urbanistiche e tecniche dell’intervento.
              </p>

              <p className="leading-8 text-[var(--color-muted)]">
                Questo consente di costruire un percorso coerente, verificando
                sin dall’inizio fattibilità, adempimenti e principali criticità.
                Ogni scelta progettuale viene così collegata alle condizioni
                reali del luogo e agli obiettivi dell’incarico.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container">
          <div className="editorial-grid">
            <p className="eyebrow">Le fasi</p>

            <div>
              <h2 className="display-title">
                Dall’analisi preliminare alla consegna.
              </h2>

              <p className="body-large mt-8">
                Un processo organizzato in passaggi definiti, per mantenere
                controllo, continuità e chiarezza durante tutto l’intervento.
              </p>
            </div>
          </div>

          <div className="mt-20 border-t border-[var(--color-border)]">
            {steps.map((step) => (
              <article
                key={step.number}
                className="grid gap-7 border-b border-[var(--color-border)] py-10 md:py-12 lg:grid-cols-12 lg:gap-16 lg:py-14"
              >
                <div className="lg:col-span-2">
                  <span className="eyebrow">{step.number}</span>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="font-serif text-[clamp(2.5rem,3.8vw,4.5rem)] leading-[1] tracking-[-0.04em]">
                    {step.title}
                  </h3>
                </div>

                <div className="lg:col-span-5 lg:col-start-8">
                  <p className="max-w-xl text-base leading-8 text-[var(--color-muted)]">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-dark)] text-white">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-white/45">
                Principi di lavoro
              </p>

              <h2 className="mt-8 font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[1] tracking-[-0.04em] text-white">
                Metodo, precisione e confronto continuo.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
                Ogni incarico viene gestito con attenzione agli aspetti tecnici,
                amministrativi e operativi, mantenendo il cliente informato
                durante tutto il percorso.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2 lg:col-span-7">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="min-h-64 bg-[var(--color-dark)] p-8"
                >
                  <span className="eyebrow text-white/40">
                    {principle.number}
                  </span>

                  <h3 className="mt-10 font-serif text-3xl leading-[1.08] text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-5 leading-7 text-white/65">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container">
          <div className="grid items-end gap-12 border border-[var(--color-border)] p-8 sm:p-12 lg:grid-cols-12 lg:p-16">
            <div className="lg:col-span-8">
              <p className="eyebrow">Iniziamo</p>

              <h2 className="mt-8 font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[1] tracking-[-0.04em]">
                Parliamo del tuo progetto.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                Raccontaci le tue esigenze. Valuteremo insieme il percorso
                tecnico più adatto per trasformare la tua idea in un progetto
                concreto.
              </p>
            </div>

            <div className="lg:col-span-4">
              <Link
                href="/contatti"
                className="button-dark group inline-flex min-h-14 w-full items-center justify-center gap-4 px-7 text-sm font-semibold"
              >
                Richiedi una consulenza

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