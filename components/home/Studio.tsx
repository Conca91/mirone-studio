import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { company } from "@/data/company";

const values = [
  {
    number: "01",
    title: "Esperienza",
    description:
      "Oltre trent’anni di attività sul territorio rappresentano una base solida per affrontare ogni incarico con consapevolezza e competenza.",
  },
  {
    number: "02",
    title: "Innovazione",
    description:
      "Strumenti digitali, modellazione BIM e metodologie moderne si affiancano all’esperienza maturata nel tempo.",
  },
  {
    number: "03",
    title: "Collaborazione",
    description:
      "Lo studio si avvale di una rete di tecnici e professionisti qualificati, coinvolti secondo le esigenze specifiche di ogni progetto.",
  },
];

export default function Studio() {
  return (
    <section
      id="studio"
      aria-labelledby="studio-title"
      className="section overflow-hidden bg-[#23211f] text-white"
    >
      <div className="site-container">
        {/* INTRODUZIONE */}
        <div className="editorial-grid">
          <p className="eyebrow !text-white/45">
            Studio Tecnico · Belpasso · Catania
          </p>

          <div>
            <h2
              id="studio-title"
              className="display-title max-w-5xl !text-white"
            >
              Competenza tecnica.
              <br />
              Visione progettuale.
            </h2>

            <p className="body-large mt-8 max-w-3xl !text-white/65">
              Lo Studio Tecnico Mirone ha sede a Belpasso, in provincia di
              Catania, e affianca privati, imprese ed enti nella progettazione
              architettonica, nelle pratiche edilizie e catastali, nei rilievi
              topografici, nella direzione lavori e nella consulenza tecnica.
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
              Operiamo principalmente a Belpasso, Catania e nei comuni della
              provincia, seguendo incarichi anche nel resto della Sicilia e sul
              territorio nazionale. Ogni intervento viene coordinato con
              attenzione agli aspetti progettuali, tecnici e amministrativi.
            </p>

            <div className="mt-9 flex flex-wrap gap-6">
              <Link
                href="/servizi"
                className="group inline-flex items-center gap-3 border-b border-white/70 pb-2 text-[10px] uppercase tracking-[0.24em] text-white"
              >
                Scopri i servizi

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.4}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/contatti"
                className="group inline-flex items-center gap-3 border-b border-white/35 pb-2 text-[10px] uppercase tracking-[0.24em] text-white/70 transition-colors hover:text-white"
              >
                Contatta lo studio

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.4}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* STORIA */}
        <div className="mt-20 grid gap-12 border-t border-white/15 pt-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:pt-20">
          <div>
            <p className="eyebrow !text-white/40">
              La nostra storia
            </p>

            <h3 className="mt-7 max-w-xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] !text-white sm:text-5xl">
              Oltre trent&apos;anni di esperienza.
              <br />
              Una nuova visione.
            </h3>
          </div>

          <div className="space-y-7 text-base leading-8 text-white/65 sm:text-lg">
            <p>
              Lo Studio Tecnico Mirone nasce dall&apos;esperienza di una
              famiglia di tecnici che da oltre trent&apos;anni opera sul
              territorio con professionalità, competenza e attenzione alle
              esigenze del cliente.
            </p>

            <p>
              Su queste solide basi, Miriana Mirone ha scelto di sviluppare una
              realtà professionale con una propria identità, capace di coniugare
              l&apos;esperienza maturata negli anni con progettazione,
              innovazione tecnologica e strumenti digitali.
            </p>

            <p>
              Attraverso la collaborazione con una rete di professionisti
              qualificati, lo studio offre un servizio completo e coordinato:
              dalla progettazione alle pratiche autorizzative, dalla direzione
              lavori ai rilievi, fino alla conclusione dell&apos;intervento.
            </p>

            <p className="font-serif text-2xl leading-[1.18] tracking-[-0.02em] !text-white sm:text-3xl">
              Un unico punto di riferimento per progettare, verificare e
              realizzare ogni intervento con precisione e affidabilità.
            </p>
          </div>
        </div>

        {/* VALORI */}
        <div className="mt-20 grid gap-px bg-white/15 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.number}
              className="bg-[#23211f] p-8 sm:p-10"
            >
              <p className="eyebrow !text-white/35">
                {value.number}
              </p>

              <h3 className="mt-14 font-serif text-3xl leading-[1.1] tracking-[-0.025em] !text-white sm:text-4xl">
                {value.title}
              </h3>

              <p className="mt-6 text-sm leading-7 text-white/55 sm:text-base">
                {value.description}
              </p>
            </article>
          ))}
        </div>

        {/* RESPONSABILE */}
        <div className="mt-20 border-t border-white/15 pt-14 lg:pt-20">
          {company.team.map((person) => (
            <article
              key={person.name}
              className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24"
            >
              <div>
                <p className="eyebrow !text-white/40">
                  Responsabile dello studio
                </p>

                <h3 className="mt-7 font-serif text-4xl leading-[1.1] tracking-[-0.035em] !text-white sm:text-5xl">
                  {person.name}
                </h3>

                <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-white/45">
                  {person.role}
                </p>
              </div>

              <div>
                <p className="max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                  {person.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  {person.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/65"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* PRESENZA TERRITORIALE */}
        <div className="mt-20 grid gap-10 border-t border-white/15 pt-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:pt-20">
          <div>
            <p className="eyebrow !text-white/40">
              Dove operiamo
            </p>

            <h3 className="mt-7 max-w-xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] !text-white sm:text-5xl">
              Belpasso, Catania
              <br />
              e tutto il territorio.
            </h3>
          </div>

          <div>
            <p className="max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              La sede dello Studio Tecnico Mirone è a Belpasso. Seguiamo
              progetti e incarichi tecnici a Catania, nella provincia e nei
              comuni dell&apos;area etnea, oltre a interventi nel resto della
              Sicilia e, in funzione dell&apos;incarico, su tutto il territorio
              nazionale.
            </p>

            <Link
              href="/contatti"
              className="group mt-9 inline-flex items-center gap-3 border-b border-white/70 pb-2 text-[10px] uppercase tracking-[0.24em] text-white"
            >
              Sede e contatti

              <ArrowUpRight
                size={17}
                strokeWidth={1.4}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}