import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="servizi"
      className="section bg-[var(--color-surface)]"
    >
      <div className="site-container">
        <div className="editorial-grid">
          <p className="eyebrow">Competenze</p>

          <div>
            <h2 className="display-title max-w-5xl">
              Competenze che accompagnano
              <br />
              ogni progetto.
            </h2>

            <p className="body-large mt-8 max-w-2xl">
              Affianchiamo privati, imprese e professionisti attraverso un
              servizio coordinato che integra progettazione, pratiche tecniche,
              rilievi e direzione lavori.
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-black/15">
          {services.slice(0, 5).map((service) => (
            <Link
              key={service.slug}
              href={`/servizi#${service.slug}`}
              className="group grid gap-5 border-b border-black/15 py-8 sm:grid-cols-[0.18fr_1fr_0.9fr_auto] sm:items-center sm:gap-8 lg:py-10"
            >
              <span className="eyebrow text-black/45">
                {service.number}
              </span>

              <h3 className="font-serif text-3xl tracking-[-0.03em] transition-colors duration-300 group-hover:text-black/60 sm:text-4xl">
                {service.title}
              </h3>

              <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                {service.summary}
              </p>

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:border-black/35 group-hover:bg-black group-hover:text-white">
                <ArrowUpRight
                  size={19}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/servizi"
          className="group mt-12 inline-flex items-center gap-3 text-sm font-semibold"
        >
          Scopri tutti i servizi

          <ArrowRight
            size={18}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}