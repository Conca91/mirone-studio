import type { Metadata } from "next";

import PageHero from "@/components/shared/PageHero";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Lo studio",
  description:
    "Metodo, competenze e approccio progettuale dello Studio Tecnico Mirone.",
};

export default function StudioPage() {
  return (
    <>
      <PageHero
        eyebrow="Lo studio"
        title="Tecnica, metodo, territorio."
        description={company.introduction}
      />

      <section className="section bg-[var(--color-surface)]">
        <div className="site-container editorial-grid">
          <p className="eyebrow">Chi siamo</p>

          <div>
            <h2 className="display-title">
              Un unico studio.
              <br />
              Competenze complementari.
            </h2>

            <p className="body-large mt-8 max-w-2xl">
              {company.description}
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-background)]">
        <div className="site-container">
          <p className="eyebrow">Professionista</p>

          <div className="mt-12 max-w-xl border-y border-black/15">
            {company.team.map((person) => (
              <article
                key={person.name}
                className="bg-[var(--color-background)] py-10"
              >
                <p className="eyebrow">{person.role}</p>

                <h2 className="mt-16 font-serif text-4xl">
                  {person.name}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#23211f] text-white">
        <div className="site-container">
          <p className="eyebrow text-white/45">Il nostro metodo</p>

          <div className="mt-12 border-t border-white/20">
            {company.process.map((step) => (
              <div
                key={step.number}
                className="grid gap-5 border-b border-white/20 py-9 sm:grid-cols-[0.2fr_0.8fr_1fr]"
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}