import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

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
      "Trasformiamo esigenze e vincoli in una soluzione progettuale funzionale, coerente e costruibile.",
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
      "Concludiamo il percorso con le verifiche finali, la documentazione e la consegna dell’opera.",
  },
];

export default function MetodoPage() {
  return (
    <main className="bg-[#ebe7dc] text-[#24221f]">
      <Container
        as="section"
        size="wide"
        className="pb-24 pt-40 md:pb-32 md:pt-48 lg:pb-40"
      >
        <SectionHeader
          eyebrow="Metodo"
          title="Un percorso chiaro, dall’idea alla realizzazione."
          description="Seguiamo ogni progetto con un approccio ordinato e condiviso, accompagnando il cliente in tutte le fasi tecniche, amministrative e operative."
          align="split"
        />
      </Container>

      <Container
        as="section"
        size="wide"
        className="pb-28 md:pb-40 lg:pb-52"
      >
        <div className="border-t border-[#24221f]/20">
          {steps.map((step) => (
            <article
              key={step.number}
              className="grid gap-8 border-b border-[#24221f]/20 py-10 md:py-14 lg:grid-cols-12 lg:gap-16"
            >
              <div className="lg:col-span-2">
                <span className="text-[10px] uppercase tracking-[0.32em] text-[#625c53]">
                  {step.number}
                </span>
              </div>

              <div className="lg:col-span-4">
                <h2 className="font-serif text-4xl leading-none tracking-[-0.035em] md:text-5xl">
                  {step.title}
                </h2>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <p className="max-w-xl text-base leading-8 text-[#686158]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>

      <section className="bg-[#24221f] text-[#ebe7dc]">
        <Container
          size="wide"
          className="grid gap-12 py-24 md:py-32 lg:grid-cols-12 lg:items-end lg:py-40"
        >
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#b9b1a4]">
              Iniziamo
            </p>

            <h2 className="mt-10 font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
              Parliamo del tuo progetto.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-8 text-[#c7c0b5]">
              Raccontaci le tue esigenze. Valuteremo insieme il percorso tecnico
              più adatto per trasformare la tua idea in un progetto concreto.
            </p>

            <Link
              href="/contatti"
              className="group mt-10 inline-flex items-center gap-4 border-b border-[#ebe7dc] pb-3 text-[10px] uppercase tracking-[0.24em]"
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
        </Container>
      </section>
    </main>
  );
}