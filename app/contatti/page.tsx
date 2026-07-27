import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Footer from "@/components/layout/Footer";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Contatta lo Studio Tecnico Mirone a Belpasso.",
};

export default function Contatti() {
  return (
    <>
      <PageHero
        eyebrow="Contatti"
        title="Iniziamo da un confronto."
        description="Descrivici l’immobile, il progetto o la pratica di cui hai bisogno. Ti aiuteremo a individuare il percorso corretto."
      />

      <section className="section bg-[var(--color-accent)]">
        <div className="site-container grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-[#5f574f]">Recapiti</p>

            <div className="mt-10 space-y-8 text-xl text-[#262320]">
              <div>
                <p className="eyebrow text-[#5f574f]">
                  Telefono e WhatsApp
                </p>

                <a
                  href={company.phoneHref}
                  className="mt-2 block font-serif text-4xl text-[#262320] transition-colors duration-300 hover:text-[#5f574f]"
                >
                  {company.phoneLabel}
                </a>
              </div>

              <div>
                <p className="eyebrow text-[#5f574f]">Sede</p>

                <a
                  href={company.mapHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block max-w-md font-serif text-4xl text-[#262320] transition-colors duration-300 hover:text-[#5f574f]"
                >
                  {company.address}
                </a>
              </div>

              <div>
                <p className="eyebrow text-[#5f574f]">Email</p>

                <a
                  href={`mailto:${company.email}`}
                  className="mt-2 block break-all font-serif text-3xl text-[#262320] transition-colors duration-300 hover:text-[#5f574f]"
                >
                  {company.email}
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#262320]/20 pt-8 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
            <p className="eyebrow text-[#5f574f]">Professionisti</p>

            <div className="mt-10 space-y-8">
              {company.team.map((person) => (
                <div
                  key={person.name}
                  className="border-b border-[#262320]/15 pb-7"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[#5f574f]">
                    {person.role}
                  </p>

                  <p className="mt-2 font-serif text-3xl text-[#262320]">
                    {person.name}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-[#262320] px-8 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#413c37] hover:shadow-lg"
              style={{ color: "#ffffff" }}
            >
              <span style={{ color: "#ffffff" }}>
                Scrivici su WhatsApp
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}