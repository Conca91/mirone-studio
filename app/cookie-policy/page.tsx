import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/layout/Container";
import { legal } from "@/data/legal";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Informazioni sull’utilizzo di cookie e altri strumenti tecnici sul sito mironestudio.it.",
  alternates: {
    canonical: "/cookie-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const browserLinks = [
  {
    name: "Google Chrome",
    href: "https://support.google.com/chrome/answer/95647",
  },
  {
    name: "Mozilla Firefox",
    href: "https://support.mozilla.org/it/kb/Gestione%20dei%20cookie",
  },
  {
    name: "Microsoft Edge",
    href: "https://support.microsoft.com/it-it/microsoft-edge",
  },
  {
    name: "Apple Safari",
    href: "https://support.apple.com/it-it/guide/safari/sfri11471/mac",
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      <Container>
        <header className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.24em] text-[#24221f]/55">
            Informazioni legali
          </p>

          <h1 className="mt-5 font-serif text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Cookie Policy
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#24221f]/70 sm:text-lg">
            Informazioni sull’utilizzo di cookie e altri strumenti tecnici
            durante la navigazione sul sito.
          </p>

          <p className="mt-5 text-sm text-[#24221f]/50">
            Ultimo aggiornamento: {legal.lastLegalUpdate}
          </p>
        </header>

        <div className="mt-16 grid gap-12 border-t border-[#24221f]/15 pt-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <p className="text-xs uppercase tracking-[0.2em] text-[#24221f]/45">
                Studio Tecnico Mirone
              </p>

              <p className="mt-4 text-sm leading-6 text-[#24221f]/60">
                Per informazioni:
              </p>

              <a
                href={`mailto:${legal.privacyEmail}`}
                className="mt-2 block break-all text-sm underline decoration-[#24221f]/25 underline-offset-4 transition-colors hover:decoration-[#24221f]"
              >
                {legal.privacyEmail}
              </a>
            </div>
          </aside>

          <article className="max-w-3xl space-y-12">
            <section>
              <h2 className="font-serif text-3xl font-medium tracking-[-0.025em]">
                1. Cosa sono i cookie
              </h2>

              <div className="mt-5 space-y-5 text-[15px] leading-7 text-[#24221f]/72 sm:text-base sm:leading-8">
                <p>
                  I cookie sono piccoli file di testo che i siti internet
                  possono memorizzare sul dispositivo dell’utente durante la
                  navigazione.
                </p>

                <p>
                  Possono essere utilizzati per consentire il corretto
                  funzionamento del sito, ricordare alcune preferenze, eseguire
                  statistiche o proporre contenuti personalizzati.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-medium tracking-[-0.025em]">
                2. Configurazione attuale del sito
              </h2>

              <div className="mt-5 space-y-5 text-[15px] leading-7 text-[#24221f]/72 sm:text-base sm:leading-8">
                <p>
                  Nella configurazione attuale, il sito non utilizza cookie di
                  profilazione, strumenti pubblicitari, pixel di marketing o
                  sistemi destinati a ricostruire le preferenze e le abitudini
                  di navigazione degli utenti.
                </p>

                <p>
                  Il sito può utilizzare esclusivamente strumenti tecnici
                  strettamente necessari al funzionamento, alla sicurezza,
                  all’erogazione delle pagine e alla gestione
                  dell’infrastruttura informatica.
                </p>

                <div className="border-l border-[#24221f]/25 pl-5">
                  <p className="font-medium text-[#24221f]">
                    Banner cookie non attivo
                  </p>

                  <p className="mt-2">
                    Finché il sito utilizza soltanto strumenti tecnici
                    necessari, non viene mostrato un banner per la richiesta
                    del consenso.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-medium tracking-[-0.025em]">
                3. Cookie tecnici
              </h2>

              <div className="mt-5 space-y-5 text-[15px] leading-7 text-[#24221f]/72 sm:text-base sm:leading-8">
                <p>
                  I cookie tecnici e gli strumenti equivalenti sono utilizzati
                  esclusivamente per finalità necessarie alla trasmissione
                  delle comunicazioni, alla visualizzazione delle pagine, alla
                  sicurezza e al corretto funzionamento del sito.
                </p>

                <p>
                  Per tali strumenti non è richiesto il consenso preventivo,
                  fermo restando l’obbligo di fornire informazioni chiare sul
                  loro utilizzo.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-medium tracking-[-0.025em]">
                4. Servizi di terze parti
              </h2>

              <div className="mt-5 space-y-5 text-[15px] leading-7 text-[#24221f]/72 sm:text-base sm:leading-8">
                <p>
                  Il sito è ospitato tramite servizi tecnologici di terze parti
                  che possono trattare dati tecnici di connessione e sicurezza
                  necessari per rendere disponibili le pagine e proteggere
                  l’infrastruttura.
                </p>

                <p>
                  La presenza di semplici collegamenti verso siti esterni non
                  comporta automaticamente l’installazione di cookie da parte
                  di tali siti. Eventuali cookie potranno essere installati
                  quando l’utente visita direttamente il servizio esterno,
                  secondo le relative informative.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-medium tracking-[-0.025em]">
                5. Servizi non ancora utilizzati
              </h2>

              <div className="mt-5 space-y-5 text-[15px] leading-7 text-[#24221f]/72 sm:text-base sm:leading-8">
                <p>
                  Al momento il sito non utilizza, salvo successive modifiche:
                </p>

                <ul className="space-y-2 pl-5">
                  <li className="list-disc">Google Analytics;</li>
                  <li className="list-disc">Meta Pixel;</li>
                  <li className="list-disc">
                    strumenti di profilazione o remarketing;
                  </li>
                  <li className="list-disc">
                    mappe interattive incorporate direttamente nelle pagine;
                  </li>
                  <li className="list-disc">
                    video YouTube o Vimeo incorporati;
                  </li>
                  <li className="list-disc">
                    widget social che installano strumenti di tracciamento;
                  </li>
                  <li className="list-disc">
                    sistemi di chat o assistenza di terze parti;
                  </li>
                  <li className="list-disc">
                    strumenti di analisi del comportamento degli utenti.
                  </li>
                </ul>

                <p>
                  Prima dell’attivazione di uno di questi servizi, sarà
                  verificata la necessità di aggiornare la presente pagina,
                  bloccare preventivamente gli strumenti non tecnici e
                  introdurre un sistema per la gestione del consenso.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-medium tracking-[-0.025em]">
                6. Come gestire i cookie dal browser
              </h2>

              <div className="mt-5 space-y-5 text-[15px] leading-7 text-[#24221f]/72 sm:text-base sm:leading-8">
                <p>
                  L’utente può controllare, limitare o cancellare i cookie
                  attraverso le impostazioni del proprio browser.
                </p>

                <p>
                  La disabilitazione dei cookie tecnici potrebbe compromettere
                  il corretto funzionamento di alcune pagine o funzionalità.
                </p>

                <ul className="space-y-3">
                  {browserLinks.map((browser) => (
                    <li key={browser.name}>
                      <a
                        href={browser.href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-[#24221f]/30 underline-offset-4 transition-colors hover:decoration-[#24221f]"
                      >
                        Gestione cookie su {browser.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-medium tracking-[-0.025em]">
                7. Aggiornamenti della Cookie Policy
              </h2>

              <div className="mt-5 space-y-5 text-[15px] leading-7 text-[#24221f]/72 sm:text-base sm:leading-8">
                <p>
                  La presente Cookie Policy sarà aggiornata in caso di
                  modifiche ai servizi utilizzati dal sito, alla normativa
                  applicabile o alle modalità di trattamento.
                </p>

                <p>
                  Prima di attivare cookie o altri strumenti di tracciamento
                  non strettamente necessari, il sito sarà adeguato con le
                  misure informative e tecniche richieste.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-medium tracking-[-0.025em]">
                8. Contatti
              </h2>

              <div className="mt-5 text-[15px] leading-7 text-[#24221f]/72 sm:text-base sm:leading-8">
                <p>
                  Per informazioni relative a cookie e privacy è possibile
                  scrivere a{" "}
                  <a
                    href={`mailto:${legal.privacyEmail}`}
                    className="underline decoration-[#24221f]/30 underline-offset-4 transition-colors hover:decoration-[#24221f]"
                  >
                    {legal.privacyEmail}
                  </a>
                  .
                </p>
              </div>
            </section>

            <div className="border-t border-[#24221f]/15 pt-8">
              <p className="text-sm leading-7 text-[#24221f]/60">
                Per maggiori informazioni sul trattamento dei dati personali,
                consulta la{" "}
                <Link
                  href="/privacy-policy"
                  className="underline decoration-[#24221f]/30 underline-offset-4 transition-colors hover:decoration-[#24221f]"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </article>
        </div>
      </Container>
    </main>
  );
}