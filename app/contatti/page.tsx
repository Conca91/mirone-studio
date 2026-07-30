import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { company } from "@/data/company";

const studioAddress = company.address;

const googleMapsEmbedUrl =
  "https://www.google.com/maps?q=Via+XVI+Traversa+n.+53,+95032+Belpasso+CT,+Italia&output=embed";

export default function ContattiPage() {
  const emailHref = `mailto:${company.email}`;

  return (
    <main className="bg-[#ebe7dc] text-[#24221f]">
      <Container
        as="section"
        size="wide"
        className="pb-24 pt-40 md:pb-32 md:pt-48 lg:pb-40"
      >
        <SectionHeader
          eyebrow="Contatti"
          title="Parliamo del tuo progetto."
          description="Raccontaci le tue esigenze. Valuteremo insieme il percorso tecnico più adatto per trasformare la tua idea in un progetto concreto."
          align="split"
        />
      </Container>

      <Container
        as="section"
        size="wide"
        className="pb-28 md:pb-40 lg:pb-52"
      >
        <div className="grid border-t border-[#24221f]/20 pt-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#625c53]">
              {company.name}
            </p>

            <div className="mt-12 space-y-10">
              <div className="border-b border-[#24221f]/15 pb-8">
                <div className="flex items-start gap-4">
                  <MapPin
                    size={19}
                    strokeWidth={1.4}
                    aria-hidden="true"
                    className="mt-1 shrink-0"
                  />

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.28em] text-[#625c53]">
                      Studio
                    </p>

                    <address className="mt-4 text-base not-italic leading-8 text-[#45413b]">
                      Via XVI Traversa n. 53
                      <br />
                      95032 Belpasso (CT)
                      <br />
                      Italia
                    </address>
                  </div>
                </div>
              </div>

              <div className="border-b border-[#24221f]/15 pb-8">
                <div className="flex items-start gap-4">
                  <Phone
                    size={19}
                    strokeWidth={1.4}
                    aria-hidden="true"
                    className="mt-1 shrink-0"
                  />

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.28em] text-[#625c53]">
                      Telefono
                    </p>

                    <a
                      href={company.phoneHref}
                      className="mt-4 inline-block text-base text-[#45413b] transition-colors hover:text-[#24221f]"
                    >
                      +39 {company.phoneLabel}
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-b border-[#24221f]/15 pb-8">
                <div className="flex items-start gap-4">
                  <Mail
                    size={19}
                    strokeWidth={1.4}
                    aria-hidden="true"
                    className="mt-1 shrink-0"
                  />

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.28em] text-[#625c53]">
                      E-mail
                    </p>

                    <a
                      href={emailHref}
                      className="mt-4 inline-block break-all text-base text-[#45413b] transition-colors hover:text-[#24221f]"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-b border-[#24221f]/15 pb-8">
                <div className="flex items-start gap-4">
                  <MessageCircle
                    size={19}
                    strokeWidth={1.4}
                    aria-hidden="true"
                    className="mt-1 shrink-0"
                  />

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.28em] text-[#625c53]">
                      WhatsApp
                    </p>

                    <a
                      href={company.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-3 text-base text-[#45413b] transition-colors hover:text-[#24221f]"
                    >
                      Scrivici direttamente
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.4}
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-start gap-5">
              <Link
                href={company.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 border-b border-[#24221f] pb-3 text-[10px] uppercase tracking-[0.24em]"
                aria-label={`Apri su Google Maps: ${studioAddress}`}
              >
                Apri su Google Maps

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.4}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#24221f] px-7 text-sm font-semibold !text-[#ebe7dc] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#37332e]"
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
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#24221f] px-7 text-sm font-semibold !text-[#24221f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#24221f] hover:!text-[#ebe7dc]"
              >
                <Mail size={18} strokeWidth={1.6} aria-hidden="true" />
                Invia un’e-mail
              </a>
            </div>
          </div>

          <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <div className="relative aspect-[4/5] min-h-[500px] overflow-hidden bg-[#d8d1c4] md:aspect-[16/10] md:min-h-0">
              <iframe
                src={googleMapsEmbedUrl}
                title="Posizione dello Studio Tecnico Mirone"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-[#24221f]/15 pt-6 text-sm leading-7 text-[#625c53] md:flex-row md:items-start md:justify-between md:gap-10">
              <p>
                Via XVI Traversa n. 53
                <br />
                95032 Belpasso (CT)
              </p>

              <p className="max-w-md md:text-right">
                Lo Studio Tecnico Mirone opera su tutto il territorio nazionale,
                con particolare presenza in Sicilia, nella provincia di Catania
                e a Belpasso, seguendo progettazione, pratiche edilizie e
                catastali, rilievi, consulenza tecnica e direzione lavori.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <section className="bg-[#24221f] text-[#ebe7dc]">
        <Container
          size="wide"
          className="grid gap-12 py-24 md:py-32 lg:grid-cols-12 lg:items-end lg:py-40"
        >
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#b9b1a4]">
              Primo contatto
            </p>

            <h2 className="mt-10 font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
              Iniziamo da una conversazione.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-8 text-[#c7c0b5]">
              Contattaci per raccontarci il tuo progetto, richiedere una
              consulenza o fissare un incontro presso lo studio.
            </p>

            <div className="mt-10 flex flex-col items-start gap-5">
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#ebe7dc] px-7 text-sm font-semibold !text-[#24221f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
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
                className="group inline-flex items-center gap-4 border-b border-[#ebe7dc] pb-3 text-[10px] uppercase tracking-[0.24em]"
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
        </Container>
      </section>
    </main>
  );
}