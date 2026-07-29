import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/layout/Container";
import { legal } from "@/data/legal";

export const metadata: Metadata = {
  title: "Note Legali",
  description:
    "Informazioni legali relative al sito web dello Studio Tecnico Mirone.",
  alternates: {
    canonical: "/note-legali",
  },
};

const sections = [
  {
    title: "1. Proprietà del sito",
    text: (
      <>
        <p>
          Il presente sito web è gestito da <strong>{legal.legalName}</strong>.
        </p>

        <p className="mt-4">
          Tutti i contenuti pubblicati hanno esclusivamente finalità
          informative e di presentazione dell'attività professionale dello
          studio.
        </p>
      </>
    ),
  },
  {
    title: "2. Proprietà intellettuale",
    text: (
      <>
        <p>
          Tutti i testi, le fotografie, i render, i disegni, gli elaborati
          grafici, i loghi, il design del sito e ogni altro contenuto sono
          protetti dalle normative italiane ed europee in materia di diritto
          d'autore e proprietà intellettuale.
        </p>

        <p className="mt-4">
          È vietata la riproduzione, modifica, distribuzione o pubblicazione,
          anche parziale, senza preventiva autorizzazione scritta.
        </p>
      </>
    ),
  },
  {
    title: "3. Utilizzo delle informazioni",
    text: (
      <>
        <p>
          Le informazioni presenti sul sito sono redatte con la massima cura,
          ma potrebbero contenere inesattezze, errori materiali o risultare non
          aggiornate.
        </p>

        <p className="mt-4">
          I contenuti non costituiscono consulenza tecnica, urbanistica,
          catastale, strutturale o fiscale e non sostituiscono un incarico
          professionale.
        </p>
      </>
    ),
  },
  {
    title: "4. Limitazione di responsabilità",
    text: (
      <>
        <p>
          Lo Studio Tecnico Mirone non potrà essere ritenuto responsabile per
          eventuali danni derivanti dall'utilizzo delle informazioni contenute
          nel sito o dall'impossibilità temporanea di accedere ai servizi.
        </p>
      </>
    ),
  },
  {
    title: "5. Link esterni",
    text: (
      <>
        <p>
          Il sito può contenere collegamenti a siti web di terzi. Tali siti
          sono indipendenti e vengono forniti esclusivamente per comodità
          dell'utente.
        </p>

        <p className="mt-4">
          Lo Studio Tecnico Mirone non controlla i contenuti di tali siti e non
          assume alcuna responsabilità riguardo alle informazioni in essi
          pubblicate.
        </p>
      </>
    ),
  },
  {
    title: "6. Disponibilità del sito",
    text: (
      <>
        <p>
          Il gestore si impegna a mantenere il sito accessibile e funzionante,
          ma non garantisce la continuità assoluta del servizio né l'assenza di
          interruzioni dovute a manutenzioni, aggiornamenti o cause di forza
          maggiore.
        </p>
      </>
    ),
  },
  {
    title: "7. Legge applicabile",
    text: (
      <>
        <p>
          Le presenti Note Legali sono disciplinate dalla legge italiana.
        </p>

        <p className="mt-4">
          Per qualsiasi controversia sarà competente il Foro previsto dalla
          normativa applicabile.
        </p>
      </>
    ),
  },
  {
    title: "8. Contatti",
    text: (
      <>
        <p>
          Per qualsiasi informazione relativa al sito è possibile contattare lo
          studio ai seguenti recapiti:
        </p>

        <div className="mt-6 rounded-xl border border-[#24221f]/10 p-6">
          <p className="font-medium">{legal.legalName}</p>

          <p className="mt-3 leading-8">
            {legal.address.formatted}
            <br />
            <a
              href={`mailto:${legal.contactEmail}`}
              className="underline underline-offset-4"
            >
              {legal.contactEmail}
            </a>

            <br />

            <a
              href={legal.phoneHref}
              className="underline underline-offset-4"
            >
              {legal.phone}
            </a>
          </p>
        </div>
      </>
    ),
  },
];

export default function LegalNoticePage() {
  return (
    <main className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      <Container>
        <header className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.24em] text-[#24221f]/55">
            Informazioni legali
          </p>

          <h1 className="mt-5 font-serif text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Note Legali
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#24221f]/70 sm:text-lg">
            Informazioni relative all'utilizzo del sito web e ai contenuti
            pubblicati da Studio Tecnico Mirone.
          </p>

          <p className="mt-5 text-sm text-[#24221f]/50">
            Ultimo aggiornamento: {legal.lastLegalUpdate}
          </p>
        </header>

        <article className="mt-16 max-w-4xl border-t border-[#24221f]/15 pt-12">
          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif text-3xl font-medium tracking-[-0.03em]">
                  {section.title}
                </h2>

                <div className="mt-5 text-base leading-8 text-[#24221f]/72">
                  {section.text}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 border-t border-[#24221f]/15 pt-8 text-sm text-[#24221f]/60">
            Consulta anche la{" "}
            <Link
              href="/privacy-policy"
              className="underline underline-offset-4"
            >
              Privacy Policy
            </Link>{" "}
            e la{" "}
            <Link
              href="/cookie-policy"
              className="underline underline-offset-4"
            >
              Cookie Policy
            </Link>
            .
          </div>
        </article>
      </Container>
    </main>
  );
}