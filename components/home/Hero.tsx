"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "@/components/layout/Navbar";

export default function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-[#191816] text-white">
      <Navbar />

      <Image
        src="/images/hero/render1.jpeg"
        alt="Progetto architettonico dello Studio Tecnico Mirone"
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-[0.68]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/35" />

      <div className="site-container relative flex min-h-[92svh] flex-col justify-end pb-14 pt-32 sm:pb-20 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex flex-col gap-2"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.38em] text-white/90 sm:text-[11px]">
            Studio Tecnico Mirone
          </span>

          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/55 sm:text-[11px]">
            Architettura · Ingegneria · Interior Design
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mt-6 max-w-5xl font-serif text-[clamp(3.7rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.06em] text-white"
        >
          Progettiamo il valore
          <br />
          dei tuoi spazi.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-10 grid gap-8 border-t border-white/30 pt-8 lg:grid-cols-[1fr_0.75fr] lg:items-end"
        >
          <p className="max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
            Dalla progettazione architettonica alle autorizzazioni, dal
            rendering alla direzione lavori: seguiamo ogni fase con precisione,
            metodo e attenzione ai dettagli.
          </p>

          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link
              href="/progetti"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold !text-[#262320] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3eee6]"
            >
              Scopri i progetti
            </Link>

            <Link
              href="/servizi"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/70 bg-white/10 px-8 text-sm font-semibold !text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:!text-[#262320]"
            >
              Esplora i servizi
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}