"use client";

import { motion } from "motion/react";

import { company } from "@/data/company";

export default function Method() {
  return (
    <section
      id="metodo"
      className="overflow-hidden bg-[var(--color-background)] py-16 sm:py-20 lg:py-24"
    >
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <div className="pt-2">
            <p className="eyebrow">Il nostro metodo</p>
          </div>

          <div>
            <h2 className="max-w-4xl font-serif text-[clamp(3.25rem,5.4vw,5.8rem)] font-normal leading-[0.94] tracking-[-0.05em] text-[var(--color-foreground)]">
              Prima il metodo.
              <br />
              Poi il progetto.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
              Ogni intervento viene affrontato attraverso un percorso chiaro e
              strutturato, dall&apos;analisi iniziale fino alla conclusione
              delle attività.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-black/15 lg:mt-16">
          {company.process.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid gap-6 border-b border-black/15 py-9 sm:grid-cols-[5rem_0.75fr_1fr] sm:items-start sm:gap-10 lg:py-12"
            >
              <div>
                <span className="font-serif text-4xl leading-none tracking-[-0.05em] text-black/20 transition-colors duration-300 group-hover:text-black/45 sm:text-5xl">
                  {item.number}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl leading-tight tracking-[-0.03em] text-[var(--color-foreground)] sm:text-4xl">
                  {item.title}
                </h3>
              </div>

              <div>
                <p className="max-w-xl text-base leading-8 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 grid gap-8 border-l border-black/20 pl-6 sm:pl-8 lg:mt-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14"
        >
          <p className="eyebrow pt-2">La nostra filosofia</p>

          <p className="max-w-3xl font-serif text-3xl leading-[1.12] tracking-[-0.03em] text-[var(--color-foreground)] sm:text-4xl lg:text-5xl">
            Dietro ogni progetto ben riuscito c&apos;è un metodo prima ancora
            che un disegno.
          </p>
        </motion.div>
      </div>
    </section>
  );
}