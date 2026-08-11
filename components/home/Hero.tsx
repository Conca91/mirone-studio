"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const highlights = [
  "Progettazione Architettonica",
  "Pratiche Edilizie e Catastali",
  "Rilievi Topografici e Direzione Lavori",
];

export default function Hero() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative min-h-[92svh] overflow-hidden bg-[#191816] text-white"
    >
      <Image
        src="/images/hero/render1.jpeg"
        alt="Studio Tecnico Mirone a Belpasso, Catania: progettazione architettonica, pratiche edilizie, rilievi topografici e direzione lavori"
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-[0.68]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/40" />

      <div className="site-container relative flex min-h-[92svh] flex-col justify-end pb-14 pt-32 sm:pb-20 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex flex-col gap-2"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.38em] text-white/90 sm:text-[11px]">
            Studio Tecnico Mirone · Belpasso · Catania
          </span>

          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/55 sm:text-[11px]">
            Geometri · Progettazione · Pratiche Tecniche · Direzione Lavori
          </span>
        </motion.div>

        <motion.h1
          id="home-hero-title"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mt-6 max-w-5xl font-serif text-[clamp(3.7rem,8vw,8rem)] font-medium leading-[0.92] tracking-[-0.055em] !text-white"
        >
          Progettazione,
          <br />
          Ingegneria
          <br />
          e Architettura.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-10 grid gap-8 border-t border-white/30 pt-8 lg:grid-cols-[1fr_0.75fr] lg:items-end"
        >
          <div>
            <p className="max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
              Lo Studio Tecnico Mirone è uno studio tecnico con sede a
              Belpasso, in provincia di Catania. Affianchiamo privati, imprese
              e professionisti nella progettazione architettonica, nelle
              pratiche edilizie e catastali, nei rilievi topografici, nella
              direzione lavori, nella modellazione BIM e nella consulenza
              tecnica.
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
              Operiamo principalmente a Belpasso, Catania e nei comuni della
              provincia, seguendo incarichi anche nel resto della Sicilia e,
              in funzione del progetto, su tutto il territorio nazionale.
            </p>

            <ul
              aria-label="Principali servizi dello Studio Tecnico Mirone"
              className="mt-7 flex flex-col gap-3 text-sm font-medium text-white/85 sm:flex-row sm:flex-wrap sm:gap-x-6"
            >
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-2"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/45 text-[10px] text-white"
                  >
                    ✓
                  </span>

                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <nav
              aria-label="Servizi principali"
              className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.18em] text-white/65"
            >
              <Link
                href="/servizi/progettazione-architettonica"
                className="border-b border-white/25 pb-1 transition-colors hover:text-white"
              >
                Progettazione
              </Link>

              <Link
                href="/servizi/pratiche-edilizie"
                className="border-b border-white/25 pb-1 transition-colors hover:text-white"
              >
                Pratiche edilizie
              </Link>

              <Link
                href="/servizi/pratiche-catastali"
                className="border-b border-white/25 pb-1 transition-colors hover:text-white"
              >
                Catasto
              </Link>

              <Link
                href="/servizi/rilievi-topografici"
                className="border-b border-white/25 pb-1 transition-colors hover:text-white"
              >
                Rilievi
              </Link>

              <Link
                href="/servizi/direzione-lavori"
                className="border-b border-white/25 pb-1 transition-colors hover:text-white"
              >
                Direzione lavori
              </Link>

              <Link
                href="/servizi/ape"
                className="border-b border-white/25 pb-1 transition-colors hover:text-white"
              >
                APE
              </Link>
            </nav>
          </div>

          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link
              href="/contatti"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold !text-[#262320] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3eee6]"
            >
              Richiedi una consulenza
            </Link>

            <Link
              href="/servizi"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/70 bg-white/10 px-8 text-sm font-semibold !text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:!text-[#262320]"
            >
              Scopri i servizi
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}