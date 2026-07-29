import Image from "next/image";
import Link from "next/link";

export default function PropertyValue() {
  return (
    <section className="section bg-[var(--color-background)]">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/property/property.jpg"
              alt="Valorizzazione di un immobile"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="lg:pl-12">
            <p className="eyebrow text-[#5f574f]">
              Valorizzazione immobiliare
            </p>

            <h2 className="mt-7 font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.92] tracking-[-0.055em] text-[#262320]">
              Ogni immobile ha un potenziale da leggere.
            </h2>

            <p className="body-large mt-8 text-[#665d55]">
              Analizziamo spazi, conformità e possibilità di trasformazione per
              costruire interventi coerenti, realizzabili e capaci di generare
              valore.
            </p>

            <Link
              href="/progetti"
              className="mt-9 inline-flex min-h-14 items-center justify-center rounded-full bg-[#262320] px-8 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#413c37] hover:shadow-lg"
              style={{ color: "#ffffff" }}
            >
              <span style={{ color: "#ffffff" }}>
                Scopri i progetti
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}