"use client";

import { motion } from "motion/react";
import { company } from "@/data/company";

export default function Method() {
  return (
    <section
      id="metodo"
      className="section overflow-hidden bg-[var(--color-background)]"
    >
      <div className="site-container">
        <div className="editorial-grid">
          <p className="eyebrow">Il nostro metodo</p>

          <div>
            <h2 className="display-title max-w-5xl">
              Prima il metodo.
              <br />
              Poi il progetto.
            </h2>

            <p className="body-large mt-8 max-w-2xl">
              Ogni intervento viene affrontato attraverso un percorso chiaro e
              strutturato, dall&apos;analisi iniziale fino alla conclusione
              delle attività.
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-black/15">
          {company.process.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid gap-8 border-b border-black/15 py-10 sm:grid-cols-[0.22fr_0.78fr_1fr] sm:gap-10 lg:py-14"
            >
              <div>
                <span className="font-serif text-5xl leading-none tracking-[-0.05em] text-black/20 transition-colors duration-300 group-hover:text-black/45 sm:text-6xl">
                  {item.number}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl tracking-[-0.03em] text-[var(--color-foreground)] sm:text-4xl">
                  {item.title}
                </h3>
              </div>

              <div className="flex items-start">
                <p className="max-w-xl text-base leading-8 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 grid gap-8 border-l border-black/20 pl-6 sm:pl-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
        >
          <p className="eyebrow">La nostra filosofia</p>

          <p className="max-w-3xl font-serif text-3xl leading-[1.15] tracking-[-0.03em] text-[var(--color-foreground)] sm:text-4xl lg:text-5xl">
            Dietro ogni progetto ben riuscito c&apos;è un metodo prima ancora
            che un disegno.
          </p>
        </motion.div>
      </div>
    </section>
  );
}