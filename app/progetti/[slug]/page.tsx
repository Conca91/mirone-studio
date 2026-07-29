import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import BeforeAfterSlider from "@/components/projects/BeforeAfterSlider";
import {
  getProjectBySlug,
  projects,
} from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Progetto non trovato",
    };
  }

  return {
    title: `${project.title} | Studio Tecnico Mirone`,
    description: project.excerpt,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentProjectIndex = projects.findIndex(
    (item) => item.slug === project.slug,
  );

  const nextProject =
    projects[
      (currentProjectIndex + 1) % projects.length
    ];

  const projectMeta = [
    project.category,
    project.location,
    project.year,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <main className="bg-[#ebe7dc] text-[#24221f]">
      <section className="mx-auto max-w-[1500px] px-6 pb-16 pt-10 md:px-12 lg:px-20 lg:pb-24">
        <Link
          href="/progetti"
          className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#625c53]"
        >
          <ArrowLeft
            size={16}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />

          Tutti i progetti
        </Link>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 pb-16 md:px-12 lg:px-20 lg:pb-24">
        <div className="max-w-5xl">
          <p className="mb-7 text-[11px] uppercase tracking-[0.34em] text-[#625c53]">
            {projectMeta}
          </p>

          <h1 className="font-serif text-6xl leading-[0.95] md:text-8xl lg:text-[9rem]">
            {project.title}
          </h1>

          <p className="mt-9 max-w-2xl text-lg leading-8 text-[#686158] md:text-xl md:leading-9">
            {project.excerpt}
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1700px]">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#d8d1c4] md:aspect-[16/9] lg:aspect-[16/8]">
          <Image
            src={project.cover}
            alt={`${project.title} — render di progetto`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent px-6 pb-7 pt-24 text-white md:px-12 md:pb-10 lg:px-20">
            <p className="text-[10px] uppercase tracking-[0.3em]">
              Render di progetto
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-14 px-6 py-24 md:px-12 lg:grid-cols-12 lg:gap-20 lg:px-20 lg:py-36">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.34em] text-[#625c53]">
            Il progetto
          </p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <p className="font-serif text-3xl leading-[1.35] md:text-4xl">
            {project.description}
          </p>
        </div>
      </section>

      {project.beforeImage && (
        <>
          <section className="mx-auto max-w-[1500px] px-6 pb-24 md:px-12 lg:px-20 lg:pb-36">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.34em] text-[#625c53]">
                  Stato di fatto
                </p>

                <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
                  L’edificio prima dell’intervento.
                </h2>
              </div>

              <p className="max-w-md text-base leading-7 text-[#686158]">
                La lettura dello stato originario ha guidato
                tutte le scelte progettuali, permettendo di
                conservare l’identità dell’immobile e
                ridefinirne spazi, volumi e prospetti.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden bg-[#d8d1c4] md:aspect-[16/9]">
              <Image
                src={project.beforeImage}
                alt={`${project.title} — stato di fatto`}
                fill
                sizes="100vw"
                className="object-cover"
              />

              <div className="absolute bottom-5 left-5 bg-[#24221f]/80 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white backdrop-blur-sm md:bottom-7 md:left-7">
                Prima dell’intervento
              </div>
            </div>
          </section>

          <section className="bg-[#24221f] py-24 text-[#ebe7dc] lg:py-36">
            <div className="mx-auto max-w-[1500px] px-6 md:px-12 lg:px-20">
              <div className="mb-12 grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="text-xs uppercase tracking-[0.34em] text-[#b9b1a5]">
                    Prima / Dopo
                  </p>
                </div>

                <div className="lg:col-span-7 lg:col-start-6">
                  <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                    La trasformazione del progetto.
                  </h2>

                  <p className="mt-7 max-w-2xl text-base leading-8 text-[#c5beb3]">
                    Sposta il cursore per confrontare lo
                    stato di fatto con la proposta
                    architettonica.
                  </p>
                </div>
              </div>

              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.cover}
                beforeAlt={`${project.title} prima dell’intervento`}
                afterAlt={`${project.title} dopo l’intervento`}
              />
            </div>
          </section>
        </>
      )}

      {project.gallery.length > 0 && (
        <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-12 lg:px-20 lg:py-36">
          <div className="mb-12">
            <p className="mb-5 text-xs uppercase tracking-[0.34em] text-[#625c53]">
              Galleria
            </p>

            <h2 className="font-serif text-4xl md:text-6xl">
              Viste del progetto.
            </h2>
          </div>

          <div className="space-y-8">
            {project.gallery.map((image, index) => (
              <div
                key={image}
                className="relative aspect-[4/3] overflow-hidden bg-[#d8d1c4] md:aspect-[16/9]"
              >
                <Image
                  src={image}
                  alt={`${project.title} — vista ${index + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto grid max-w-[1500px] gap-16 border-t border-[#c9c2b6] px-6 py-24 md:px-12 lg:grid-cols-12 lg:px-20 lg:py-36">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.34em] text-[#625c53]">
            Scheda tecnica
          </p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <dl className="divide-y divide-[#c9c2b6] border-t border-[#c9c2b6]">
            <div className="grid gap-3 py-6 md:grid-cols-3">
              <dt className="text-xs uppercase tracking-[0.25em] text-[#625c53]">
                Tipologia
              </dt>

              <dd className="text-lg md:col-span-2">
                {project.category}
              </dd>
            </div>

            <div className="grid gap-3 py-6 md:grid-cols-3">
              <dt className="text-xs uppercase tracking-[0.25em] text-[#625c53]">
                Luogo
              </dt>

              <dd className="text-lg md:col-span-2">
                {project.location || "Italia"}
              </dd>
            </div>

            <div className="grid gap-3 py-6 md:grid-cols-3">
              <dt className="text-xs uppercase tracking-[0.25em] text-[#625c53]">
                Anno
              </dt>

              <dd className="text-lg md:col-span-2">
                {project.year}
              </dd>
            </div>

            <div className="grid gap-3 py-6 md:grid-cols-3">
              <dt className="text-xs uppercase tracking-[0.25em] text-[#625c53]">
                Superficie
              </dt>

              <dd className="text-lg leading-8 md:col-span-2">
                {project.area}
              </dd>
            </div>

            <div className="grid gap-3 py-6 md:grid-cols-3">
              <dt className="text-xs uppercase tracking-[0.25em] text-[#625c53]">
                Stato
              </dt>

              <dd className="text-lg md:col-span-2">
                {project.status}
              </dd>
            </div>

            <div className="grid gap-5 py-6 md:grid-cols-3">
              <dt className="text-xs uppercase tracking-[0.25em] text-[#625c53]">
                Servizi
              </dt>

              <dd className="md:col-span-2">
                <ul className="flex flex-wrap gap-3">
                  {project.services.map((service) => (
                    <li
                      key={service}
                      className="border border-[#aaa296] px-4 py-2 text-sm"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bg-[#dcd6ca]">
        <Link
          href={`/progetti/${nextProject.slug}`}
          className="group mx-auto grid max-w-[1500px] gap-10 px-6 py-20 md:px-12 lg:grid-cols-2 lg:items-end lg:px-20 lg:py-28"
        >
          <div>
            <p className="mb-7 text-xs uppercase tracking-[0.34em] text-[#625c53]">
              Progetto successivo
            </p>

            <h2 className="font-serif text-5xl md:text-7xl">
              {nextProject.title}
            </h2>
          </div>

          <div className="flex items-center justify-between gap-8 lg:justify-end">
            <span className="text-sm uppercase tracking-[0.22em]">
              Scopri il progetto
            </span>

            <ArrowUpRight
              size={30}
              strokeWidth={1.25}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2"
            />
          </div>
        </Link>
      </section>
    </main>
  );
}