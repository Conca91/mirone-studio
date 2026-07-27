"use client";

import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Box,
  DraftingCompass,
  Layers3,
  Map,
} from "lucide-react";

import { company } from "@/data/company";

const ease = [0.22, 1, 0.36, 1] as const;

const technologyIcons = [DraftingCompass, Layers3, Box, Map];

export default function StudioPageContent() {
  return (
    <main id="top" className="overflow-hidden">
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-[var(--color-background)] pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-[620px] w-[620px] rounded-full bg-[var(--color-accent)] opacity-[0.1] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-220px] left-[-180px] h-[560px] w-[560px] rounded-full bg-[var(--color-taupe)] opacity-30 blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-[var(--container-width)] px-6 sm:px-8 lg:px-12 xl:px-20">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[var(--color-muted)] sm:text-[11px]"
          >
            Lo Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.95,
              delay: 0.08,
              ease,
            }}
            className="mt-8 max-w-6xl font-serif text-[clamp(4rem,9vw,9.5rem)] font-medium leading-[0.86] tracking-[-0.065em] text-[var(--color-text)]"
          >
            Competenza tecnica.
            <br />
            Visione concreta.
          </motion.h1>

          <div className="mt-14 grid gap-10 border-t border-[var(--color-taupe)] pt-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
            >
              <p className="text-sm font-medium text-[var(--color-muted)]">
                {company.location}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.25,
                ease,
              }}
            >
              <p className="max-w-3xl text-xl leading-9 tracking-[-0.02em] text-[var(--color-text)] sm:text-2xl sm:leading-10">
                {company.introduction}
              </p>
            </motion.div>
          </div>

          <motion.a
            href="#presentazione"
            aria-label="Vai alla presentazione dello Studio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            className="mt-14 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-taupe-dark)] text-[var(--color-text)] transition-all duration-300 hover:border-[var(--color-button)] hover:bg-[var(--color-button)] hover:text-white"
          >
            <ArrowDown
              aria-hidden="true"
              size={18}
              strokeWidth={1.5}
            />
          </motion.a>
        </div>
      </section>

      {/* Presentazione */}
      <section
        id="presentazione"
        className="bg-[var(--color-surface)] py-24 sm:py-32 lg:py-40"
      >
        <div className="mx-auto w-full max-w-[var(--container-width)] px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.75,
                ease,
              }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[var(--color-muted)] sm:text-[11px]">
                Studio Tecnico Mirone
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease,
              }}
            >
              <h2 className="max-w-5xl font-serif text-[clamp(2.9rem,5.6vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.055em] text-[var(--color-text)]">
                Un progetto nasce dalla comprensione del luogo e delle persone.
              </h2>

              <p className="mt-10 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                {company.description}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.95,
              ease,
            }}
            className="mt-20 overflow-hidden rounded-[32px] bg-[var(--color-button)] px-7 py-16 text-white sm:px-12 sm:py-20 lg:mt-28 lg:px-20 lg:py-24"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/50">
              La nostra filosofia
            </p>

            <p className="mt-8 max-w-6xl font-serif text-[clamp(2.5rem,5.5vw,5.6rem)] font-medium leading-[0.98] tracking-[-0.05em] text-white">
              {company.philosophy}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Valori */}
      <section className="bg-[var(--color-background)] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto w-full max-w-[var(--container-width)] px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid gap-10 border-b border-[var(--color-taupe)] pb-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:pb-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[var(--color-muted)] sm:text-[11px]">
              I nostri principi
            </p>

            <h2 className="max-w-5xl font-serif text-[clamp(2.9rem,5.5vw,5.7rem)] font-medium leading-[0.96] tracking-[-0.055em] text-[var(--color-text)]">
              Il metodo è parte del risultato.
            </h2>
          </div>

          <div className="grid md:grid-cols-2">
            {company.values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.07,
                  ease,
                }}
                className={`min-h-[330px] border-[var(--color-taupe)] py-12 md:px-10 lg:min-h-[390px] lg:px-14 lg:py-16 ${
                  index % 2 === 0 ? "md:border-r" : ""
                } ${index < 2 ? "border-b" : ""}`}
              >
                <div className="flex h-full flex-col">
                  <span className="text-[10px] font-semibold tracking-[0.3em] text-[var(--color-muted)]">
                    {value.number}
                  </span>

                  <div className="mt-auto pt-16">
                    <h3 className="font-serif text-4xl font-medium tracking-[-0.04em] text-[var(--color-text)]">
                      {value.title}
                    </h3>

                    <p className="mt-6 max-w-lg text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Punti distintivi */}
      <section className="bg-[var(--color-surface)] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-[var(--container-width)] gap-px overflow-hidden rounded-[28px] bg-[var(--color-taupe)] px-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12 xl:px-20">
          {company.highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.75,
                delay: index * 0.08,
              }}
              className="bg-[var(--color-background)] px-7 py-10 sm:px-9 sm:py-12"
            >
              <p className="font-serif text-4xl font-medium tracking-[-0.045em] text-[var(--color-text)]">
                {item.value}
              </p>

              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Processo */}
      <section className="bg-[var(--color-background)] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto w-full max-w-[var(--container-width)] px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid gap-10 border-b border-[var(--color-taupe)] pb-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:pb-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[var(--color-muted)] sm:text-[11px]">
              Come lavoriamo
            </p>

            <h2 className="max-w-5xl font-serif text-[clamp(2.9rem,5.5vw,5.7rem)] font-medium leading-[0.96] tracking-[-0.055em] text-[var(--color-text)]">
              Dal primo confronto alla conclusione dell’intervento.
            </h2>
          </div>

          <div>
            {company.process.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.05,
                  ease,
                }}
                className="grid gap-6 border-b border-[var(--color-taupe)] py-9 sm:grid-cols-[0.25fr_0.75fr_1fr] sm:items-start sm:gap-10 lg:py-12"
              >
                <span className="text-[10px] font-semibold tracking-[0.3em] text-[var(--color-muted)]">
                  {step.number}
                </span>

                <h3 className="font-serif text-3xl font-medium tracking-[-0.035em] text-[var(--color-text)] sm:text-4xl">
                  {step.title}
                </h3>

                <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologie */}
      <section className="bg-[var(--color-surface)] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto w-full max-w-[var(--container-width)] px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[var(--color-muted)] sm:text-[11px]">
                Strumenti e competenze
              </p>

              <h2 className="mt-8 max-w-xl font-serif text-[clamp(2.9rem,5vw,5.2rem)] font-medium leading-[0.98] tracking-[-0.05em] text-[var(--color-text)]">
                Tecnologia al servizio della precisione.
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-[var(--color-muted)]">
                Il processo digitale consente di controllare meglio le
                informazioni, coordinare le attività e comunicare il progetto
                in modo più chiaro.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[28px] bg-[var(--color-taupe)] sm:grid-cols-2">
              {company.technologies.map((technology, index) => {
                const Icon =
                  technologyIcons[index % technologyIcons.length];

                return (
                  <motion.div
                    key={technology}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.04,
                    }}
                    className="group flex min-h-36 items-end justify-between gap-5 bg-[var(--color-background)] p-7 sm:p-8"
                  >
                    <p className="max-w-[220px] text-sm font-medium leading-6 text-[var(--color-text)] sm:text-base">
                      {technology}
                    </p>

                    <Icon
                      aria-hidden="true"
                      size={20}
                      strokeWidth={1.4}
                      className="shrink-0 text-[var(--color-muted)] transition-colors duration-300 group-hover:text-[var(--color-text)]"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-button)] py-24 text-white sm:py-32 lg:py-40">
        <div className="mx-auto w-full max-w-[var(--container-width)] px-6 sm:px-8 lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.85,
              ease,
            }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-white/50 sm:text-[11px]">
              Iniziamo
            </p>

            <h2 className="mt-8 max-w-6xl font-serif text-[clamp(3.2rem,7vw,7.2rem)] font-medium leading-[0.91] tracking-[-0.06em] text-white">
              Hai un progetto da realizzare?
            </h2>

            <div className="mt-12 flex flex-col gap-8 border-t border-white/20 pt-10 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                Raccontaci le tue esigenze e la documentazione disponibile.
                Valuteremo insieme il percorso tecnico più adatto.
              </p>

              <a
                href="/#contatti"
                className="group inline-flex min-h-14 w-fit shrink-0 items-center justify-center gap-4 rounded-full bg-white px-8 text-sm font-semibold !text-[#262320] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span>Parliamone insieme</span>

                <ArrowUpRight
                  aria-hidden="true"
                  size={17}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}