import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const studioAddress =
  "Via XVI Traversa n. 53, 95032 Belpasso CT, Italia";

const googleMapsEmbedUrl =
  "https://www.google.com/maps?q=Via+XVI+Traversa+n.+53,+95032+Belpasso+CT,+Italia&output=embed";

const googleMapsDirectionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Via+XVI+Traversa+n.+53,+95032+Belpasso+CT,+Italia";

export default function ContattiPage() {
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
              Studio Tecnico Mirone
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
                      href="tel:+393482934197"
                      className="mt-4 inline-block text-base text-[#45413b] transition-colors hover:text-[#24221f]"
                    >
                      +39 348 293 4197
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
                      href="mailto:info@mironestudio.it"
                      className="mt-4 inline-block text-base text-[#45413b] transition-colors hover:text-[#24221f]"
                    >
                      info@mironestudio.it
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-4 border-b border-[#24221f] pb-3 text-[10px] uppercase tracking-[0.24em]"
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
                Lo studio opera principalmente a Belpasso, Catania e nei comuni
                della provincia, seguendo incarichi tecnici, progettazione,
                pratiche edilizie, rilievi e direzione lavori.
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

            <a
              href="mailto:info@mironestudio.it"
              className="group mt-10 inline-flex items-center gap-4 border-b border-[#ebe7dc] pb-3 text-[10px] uppercase tracking-[0.24em]"
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
        </Container>
      </section>
    </main>
  );
}