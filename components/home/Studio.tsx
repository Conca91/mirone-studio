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
      "Strumenti digitali, modellazione e metodologie moderne si affiancano all’esperienza maturata nel tempo.",
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
      className="section overflow-hidden bg-[#23211f] text-white"
    >
      <div className="site-container">
        <div className="editorial-grid">
          <p className="eyebrow !text-white/45">Lo studio</p>

          <div>
            <h2 className="display-title max-w-5xl !text-white">
              Competenza tecnica.
              <br />
              Visione progettuale.
            </h2>

            <p className="body-large mt-8 max-w-2xl !text-white/60">
              Dalla progettazione architettonica alle autorizzazioni,
              coordiniamo ogni fase dell&apos;intervento con metodo, precisione
              e continuità.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-white/15 pt-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:pt-20">
          <div>
            <p className="eyebrow !text-white/40">La nostra storia</p>

            <h3 className="mt-7 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.035em] !text-white sm:text-5xl">
              Oltre trent&apos;anni di esperienza.
              <br />
              Una nuova visione.
            </h3>
          </div>

          <div className="space-y-7 text-base leading-8 text-white/65 sm:text-lg">
            <p>
              Lo Studio Tecnico Mirone nasce dall&apos;esperienza di una
              famiglia di tecnici che da oltre trent&apos;anni opera sul
              territorio con professionalità, competenza e passione.
            </p>

            <p>
              Su queste solide basi, Miriana Mirone ha scelto di dare vita a
              una realtà professionale con una propria identità, capace di
              coniugare l&apos;esperienza maturata negli anni con un approccio
              moderno, innovativo e orientato alle esigenze del cliente.
            </p>

            <p>
              Attraverso la collaborazione con una rete di professionisti
              qualificati, lo studio offre un servizio completo e coordinato,
              seguendo ogni fase dell&apos;intervento: dalla progettazione alle
              pratiche autorizzative, dalla direzione lavori ai rilievi, fino
              alla conclusione dell&apos;opera.
            </p>

            <p className="font-serif text-2xl leading-snug tracking-[-0.02em] !text-white sm:text-3xl">
              Un unico punto di riferimento, con l&apos;obiettivo di garantire
              qualità, precisione e affidabilità in ogni progetto.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-px bg-white/15 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.number}
              className="bg-[#23211f] p-8 sm:p-10"
            >
              <p className="eyebrow !text-white/35">{value.number}</p>

              <h3 className="mt-14 font-serif text-3xl tracking-[-0.025em] !text-white sm:text-4xl">
                {value.title}
              </h3>

              <p className="mt-6 text-sm leading-7 text-white/55 sm:text-base">
                {value.description}
              </p>
            </article>
          ))}
        </div>

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

                <h3 className="mt-7 font-serif text-4xl tracking-[-0.035em] !text-white sm:text-5xl">
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
      </div>
    </section>
  );
}