import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="bg-[#ebe7dc] text-[#24221f]">
      <Container
        as="section"
        size="wide"
        className="pb-28 pt-40 md:pb-36 md:pt-48 lg:pb-44"
      >
        <SectionHeader
          eyebrow="Progetti"
          title="Spazi pensati per essere vissuti."
          description="Una selezione di interventi di nuova costruzione, ristrutturazione e riqualificazione, raccontati attraverso immagini, materia e luce."
        />
      </Container>

      <Container
        as="section"
        size="wide"
        className="pb-28 md:pb-40 lg:pb-52"
      >
        <div className="space-y-32 lg:space-y-48">
          {projects.map((project, index) => {
            const isVillaMirone =
              project.slug === "villa-mirone";

            const secondImage = isVillaMirone
              ? project.beforeImage
              : project.gallery?.[0];

            const secondImageLabel = isVillaMirone
              ? "Stato di fatto"
              : "Seconda vista";

            const projectMeta = [
              project.category,
              project.location,
            ]
              .filter(Boolean)
              .join(" · ");

            const imageOrder =
              index % 2 === 0
                ? "lg:order-1"
                : "lg:order-2";

            const contentOrder =
              index % 2 === 0
                ? "lg:order-2"
                : "lg:order-1";

            return (
              <article
                key={project.slug}
                className="grid items-start gap-14 border-t border-[#24221f]/20 pt-7 lg:grid-cols-12 lg:gap-16"
              >
                <div
                  className={`lg:col-span-7 ${imageOrder}`}
                >
                  <Link
                    href={`/progetti/${project.slug}`}
                    className="group block"
                    aria-label={`Scopri il progetto ${project.title}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#d8d1c4] md:aspect-[16/11]">
                      <Image
                        src={project.cover}
                        alt={`${project.title} — immagine principale`}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                      />

                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/45 via-black/10 to-transparent px-5 pb-5 pt-24 text-white md:px-8 md:pb-8">
                        <span className="text-[9px] uppercase tracking-[0.32em]">
                          {isVillaMirone
                            ? "Render di progetto"
                            : "Progetto"}
                        </span>

                        <span className="text-[9px] uppercase tracking-[0.28em] text-white/75">
                          {String(index + 1).padStart(
                            2,
                            "0",
                          )}
                        </span>
                      </div>
                    </div>
                  </Link>

                  {secondImage && (
                    <div className="mt-6 grid grid-cols-12">
                      <Link
                        href={`/progetti/${project.slug}`}
                        className="group relative col-span-10 col-start-3 block aspect-[16/10] overflow-hidden bg-[#d8d1c4] md:col-span-8 md:col-start-5"
                        aria-label={`${project.title} — ${secondImageLabel}`}
                      >
                        <Image
                          src={secondImage}
                          alt={`${project.title} — ${secondImageLabel}`}
                          fill
                          sizes="(max-width: 768px) 82vw, 42vw"
                          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                        />

                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-5 pb-5 pt-16 text-white">
                          <span className="text-[9px] uppercase tracking-[0.32em]">
                            {secondImageLabel}
                          </span>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                <div
                  className={`lg:col-span-4 lg:pt-16 ${contentOrder} ${
                    index % 2 === 0
                      ? "lg:col-start-9"
                      : "lg:col-start-1"
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[#625c53]">
                    {projectMeta}
                  </p>

                  <h2 className="mt-8 font-serif text-5xl leading-[0.95] tracking-[-0.035em] md:text-6xl">
                    {project.title}
                  </h2>

                  <p className="mt-8 text-base leading-8 text-[#686158]">
                    {project.excerpt}
                  </p>

                  <dl className="mt-9 space-y-3 border-t border-[#24221f]/15 pt-6 text-sm text-[#625c53]">
                    <div className="flex justify-between gap-6">
                      <dt>Anno</dt>
                      <dd>{project.year}</dd>
                    </div>

                    <div className="flex justify-between gap-6">
                      <dt>Stato</dt>
                      <dd>{project.status}</dd>
                    </div>
                  </dl>

                  <Link
                    href={`/progetti/${project.slug}`}
                    className="group mt-10 inline-flex items-center gap-4 border-b border-[#24221f] pb-3 text-[10px] uppercase tracking-[0.24em]"
                  >
                    Scopri il progetto

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.4}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </main>
  );
}