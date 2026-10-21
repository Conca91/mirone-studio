import type { Metadata } from "next";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import PageHero from "@/components/shared/PageHero";
import { company } from "@/data/company";
import { seo } from "@/data/seo";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta lo Studio Tecnico Mirone a Belpasso per progettazione, pratiche edilizie, direzione lavori, rilievi, catasto, APE e consulenza tecnica.",
  alternates: {
    canonical: "/contatti",
  },
  openGraph: {
    title: "Contatti | Studio Tecnico Mirone",
    description:
      "Contatta lo Studio Tecnico Mirone a Belpasso per richiedere informazioni o fissare un incontro.",
    url: `${seo.siteUrl}/contatti`,
    type: "website",
  },
};

export default function ContattiPage() {
  const emailHref = `mailto:${company.email}`;

  return (
    <main className="overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]">
      <PageHero
        eyebrow="Contatti"
        title="Parliamo del tuo progetto."
        description="Raccontaci le tue esigenze. Valuteremo insieme il percorso tecnico più adatto per trasformare la tua idea in un progetto concreto."
      />

      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container">
          <div className="editorial-grid">
            <p className="eyebrow">Lo studio</p>

            <div>
              <h2 className="display-title">
                Un confronto diretto, fin dal primo contatto.
              </h2>

              <p className="body-large mt-8">
                Contattaci per raccontarci il tuo progetto, richiedere una
                consulenza o fissare un incontro presso lo studio di Belpasso.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-14 border-t border-[var(--color-border)] pt-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">{company.name}</p>

              <div className="mt-10">
                <div className="border-b border-[var(--color-border)] py-8">
                  <div className="flex items-start gap-4">
                    <MapPin
                      size={19}
                      strokeWidth={1.4}
                      aria-hidden="true"
                      className="mt-1 shrink-0"
                    />

                    <div>
                      <p className="eyebrow">Studio</p>

                      <address className="mt-4 text-base not-italic leading-8 text-[var(--color-muted)]">
                        Belpasso (CT)
                      </address>
                    </div>
                  </div>
                </div>

                <div className="border-b border-[var(--color-border)] py-8">
                  <div className="flex items-start gap-4">
                    <Phone
                      size={19}
                      strokeWidth={1.4}
                      aria-hidden="true"
                      className="mt-1 shrink-0"
                    />

                    <div>
                      <p className="eyebrow">Telefono</p>

                      <a
                        href={company.phoneHref}
                        className="mt-4 inline-block text-base text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
                      >
                        +39 {company.phoneLabel}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-b border-[var(--color-border)] py-8">
                  <div className="flex items-start gap-4">
                    <Mail
                      size={19}
                      strokeWidth={1.4}
                      aria-hidden="true"
                      className="mt-1 shrink-0"
                    />

                    <div>
                      <p className="eyebrow">E-mail</p>

                      <a
                        href={emailHref}
                        className="mt-4 inline-block break-all text-base text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
                      >
                        {company.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-b border-[var(--color-border)] py-8">
                  <div className="flex items-start gap-4">
                    <MessageCircle
                      size={19}
                      strokeWidth={1.4}
                      aria-hidden="true"
                      className="mt-1 shrink-0"
                    />

                    <div>
                      <p className="eyebrow">WhatsApp</p>

                      <a
                        href={company.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-4 inline-flex items-center gap-3 text-base text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
                      >
                        Scrivici direttamente

                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.4}
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3">
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-dark group inline-flex min-h-14 items-center justify-center gap-3 px-7 text-sm font-semibold"
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
                  className="button-outline inline-flex min-h-14 items-center justify-center gap-3 px-7 text-sm font-semibold"
                >
                  <Mail size={18} strokeWidth={1.6} aria-hidden="true" />
                  Invia un’e-mail
                </a>


              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="flex min-h-[360px] flex-col justify-center border border-[var(--color-border)] bg-black/5 px-8 py-12 md:min-h-[440px] md:px-14">
                <p className="eyebrow">La nostra sede</p>
                <h3 className="mt-6 font-serif text-[clamp(2.8rem,5vw,5rem)] leading-[1.05] tracking-[-0.04em]">
                  Belpasso (CT)
                </h3>
                <p className="mt-8 max-w-lg text-base leading-8 text-[var(--color-muted)]">
                  Lo Studio Tecnico Mirone opera su tutto il territorio
                  nazionale, con particolare presenza in Sicilia e nella
                  provincia di Catania.
                </p>
                <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--color-muted)]">
                  Per informazioni o per concordare un incontro, contattaci
                  telefonicamente, via e-mail oppure su WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-dark)] text-white">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow text-white/45">
              Primo contatto
            </p>

            <h2 className="mt-8 font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[1] tracking-[-0.04em] text-white">
              Iniziamo da una conversazione.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-8 text-white/65">
              Contattaci per raccontarci il tuo progetto, richiedere una
              consulenza o fissare un incontro presso lo studio.
            </p>

            <div className="mt-10 flex flex-col items-start gap-5">
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-14 items-center justify-center gap-3 bg-white px-7 text-sm font-semibold !text-[var(--color-dark)] transition-transform duration-300 hover:-translate-y-0.5"
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
                Scrivi allo studio

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.4}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}