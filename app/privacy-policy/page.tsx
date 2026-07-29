import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/layout/Container";
import { legal } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sul trattamento dei dati personali degli utenti del sito mironestudio.it.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    title: "1. Titolare del trattamento",
    content: (
      <>
        <p>
          Il titolare del trattamento dei dati personali raccolti attraverso
          questo sito è:
        </p>

        <div className="mt-5 border-l border-[#24221f]/25 pl-5">
          <p className="font-medium text-[#24221f]">{legal.legalName}</p>

          <p className="mt-2">
            Titolare: {legal.ownerName}
            <br />
            Sede: {legal.address.formatted}
            <br />
            Email:{" "}
            <a
              href={`mailto:${legal.privacyEmail}`}
              className="underline decoration-[#24221f]/30 underline-offset-4 transition-colors hover:decoration-[#24221f]"
            >
              {legal.privacyEmail}
            </a>
            <br />
            Telefono:{" "}
            <a
              href={legal.phoneHref}
              className="underline decoration-[#24221f]/30 underline-offset-4 transition-colors hover:decoration-[#24221f]"
            >
              {legal.phone}
            </a>
          </p>
        </div>

        {!legal.vatNumber && (
          <p className="mt-5 text-sm italic text-[#24221f]/60">
            La Partita IVA e gli ulteriori dati fiscali saranno pubblicati
            all’avvio dell’attività professionale.
          </p>
        )}
      </>
    ),
  },
  {
    title: "2. Tipologie di dati trattati",
    content: (
      <>
        <p>Il sito può trattare le seguenti categorie di dati personali:</p>

        <ul className="mt-4 space-y-2 pl-5">
          <li className="list-disc">
            dati identificativi e di contatto, come nome, cognome, indirizzo
            email e numero di telefono;
          </li>
          <li className="list-disc">
            informazioni contenute nelle richieste inviate volontariamente
            tramite email, telefono o eventuali moduli di contatto;
          </li>
          <li className="list-disc">
            dati tecnici di navigazione, come indirizzo IP, tipo di browser,
            dispositivo utilizzato, data e ora della richiesta e informazioni
            necessarie al funzionamento e alla sicurezza del sito;
          </li>
          <li className="list-disc">
            eventuali documenti e informazioni tecniche trasmessi
            volontariamente dall’utente per richiedere una valutazione o un
            servizio.
          </li>
        </ul>

        <p className="mt-5">
          Si invita l’utente a non trasmettere dati particolari o giudiziari
          non strettamente necessari alla richiesta.
        </p>
      </>
    ),
  },
  {
    title: "3. Finalità e basi giuridiche del trattamento",
    content: (
      <>
        <p>I dati personali possono essere trattati per:</p>

        <ul className="mt-4 space-y-4 pl-5">
          <li className="list-disc">
            <strong>rispondere alle richieste di informazioni e contatto</strong>
            : il trattamento è necessario per dare seguito a una richiesta
            dell’interessato e per adottare eventuali misure precontrattuali;
          </li>
          <li className="list-disc">
            <strong>predisporre preventivi o valutazioni preliminari</strong>:
            il trattamento è necessario per l’esecuzione di misure
            precontrattuali richieste dall’interessato;
          </li>
          <li className="list-disc">
            <strong>adempiere a obblighi normativi, fiscali o amministrativi</strong>
            : il trattamento è necessario per rispettare un obbligo legale;
          </li>
          <li className="list-disc">
            <strong>garantire sicurezza e corretto funzionamento del sito</strong>
            : il trattamento si basa sul legittimo interesse del titolare a
            proteggere il sito, prevenire abusi e diagnosticare problemi
            tecnici;
          </li>
          <li className="list-disc">
            <strong>tutelare i diritti del titolare</strong>: i dati possono
            essere utilizzati quando necessario per accertare, esercitare o
            difendere un diritto in sede giudiziaria o stragiudiziale.
          </li>
        </ul>

        <p className="mt-5">
          Il sito non utilizza attualmente i dati per newsletter, pubblicità
          personalizzata o comunicazioni promozionali.
        </p>
      </>
    ),
  },
  {
    title: "4. Natura del conferimento dei dati",
    content: (
      <p>
        Il conferimento dei dati è facoltativo. Tuttavia, il mancato
        conferimento delle informazioni necessarie può rendere impossibile
        rispondere alla richiesta, predisporre un preventivo o avviare un
        rapporto professionale.
      </p>
    ),
  },
  {
    title: "5. Modalità del trattamento",
    content: (
      <p>
        I dati sono trattati con strumenti informatici e, quando necessario,
        con strumenti cartacei, adottando misure tecniche e organizzative
        adeguate a proteggerli da accessi non autorizzati, perdita,
        divulgazione, modifica o uso illecito.
      </p>
    ),
  },
  {
    title: "6. Destinatari dei dati",
    content: (
      <>
        <p>
          I dati possono essere comunicati, nei limiti strettamente necessari,
          a:
        </p>

        <ul className="mt-4 space-y-2 pl-5">
          <li className="list-disc">
            fornitori di servizi informatici, hosting, manutenzione e posta
            elettronica;
          </li>
          <li className="list-disc">
            consulenti e professionisti incaricati di attività amministrative,
            fiscali, legali o tecniche;
          </li>
          <li className="list-disc">
            autorità pubbliche o altri soggetti quando la comunicazione è
            prevista dalla legge o da un provvedimento dell’autorità;
          </li>
          <li className="list-disc">
            collaboratori autorizzati al trattamento e vincolati alla
            riservatezza.
          </li>
        </ul>

        <p className="mt-5">
          I dati personali non vengono venduti né diffusi pubblicamente.
        </p>
      </>
    ),
  },
  {
    title: "7. Servizi tecnici e hosting",
    content: (
      <>
        <p>
          Il sito è pubblicato tramite infrastrutture tecniche fornite da
          soggetti terzi. Tali fornitori possono trattare dati tecnici
          strettamente necessari all’erogazione, alla sicurezza e alla
          manutenzione del servizio.
        </p>

        <p className="mt-5">
          Prima dell’inserimento di ulteriori servizi, come strumenti di
          analisi statistica, mappe incorporate, video esterni o sistemi
          pubblicitari, la presente informativa e la gestione dei consensi
          saranno aggiornate.
        </p>
      </>
    ),
  },
  {
    title: "8. Trasferimento dei dati fuori dallo Spazio Economico Europeo",
    content: (
      <p>
        Alcuni fornitori tecnologici potrebbero trattare dati anche al di fuori
        dello Spazio Economico Europeo. In tali casi il trasferimento sarà
        effettuato nel rispetto della normativa applicabile, sulla base di una
        decisione di adeguatezza, di clausole contrattuali standard o di altro
        strumento giuridico riconosciuto dal Regolamento europeo.
      </p>
    ),
  },
  {
    title: "9. Periodo di conservazione",
    content: (
      <>
        <p>I dati sono conservati per il tempo necessario alle finalità:</p>

        <ul className="mt-4 space-y-2 pl-5">
          <li className="list-disc">
            richieste di contatto prive di seguito professionale: normalmente
            fino a 12 mesi dalla conclusione della richiesta;
          </li>
          <li className="list-disc">
            documentazione precontrattuale: per il tempo necessario alla
            valutazione e all’eventuale instaurazione del rapporto;
          </li>
          <li className="list-disc">
            dati relativi a rapporti professionali, amministrativi e fiscali:
            per i periodi previsti dalla legge;
          </li>
          <li className="list-disc">
            registri tecnici e di sicurezza: per il periodo strettamente
            necessario alla protezione e al funzionamento del sito.
          </li>
        </ul>

        <p className="mt-5">
          I dati possono essere conservati più a lungo quando necessario per
          la tutela di un diritto o per adempiere a un obbligo normativo.
        </p>
      </>
    ),
  },
  {
    title: "10. Diritti dell’interessato",
    content: (
      <>
        <p>
          Nei casi previsti dalla normativa, l’interessato può chiedere:
        </p>

        <ul className="mt-4 space-y-2 pl-5">
          <li className="list-disc">l’accesso ai propri dati personali;</li>
          <li className="list-disc">
            la rettifica dei dati inesatti o l’integrazione di quelli
            incompleti;
          </li>
          <li className="list-disc">la cancellazione dei dati;</li>
          <li className="list-disc">la limitazione del trattamento;</li>
          <li className="list-disc">
            la portabilità dei dati, quando applicabile;
          </li>
          <li className="list-disc">
            l’opposizione al trattamento basato sul legittimo interesse;
          </li>
          <li className="list-disc">
            la revoca del consenso, qualora un trattamento sia fondato sul
            consenso, senza pregiudicare la liceità del trattamento precedente
            alla revoca.
          </li>
        </ul>

        <p className="mt-5">
          Le richieste possono essere inviate a{" "}
          <a
            href={`mailto:${legal.privacyEmail}`}
            className="underline decoration-[#24221f]/30 underline-offset-4 transition-colors hover:decoration-[#24221f]"
          >
            {legal.privacyEmail}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "11. Diritto di reclamo",
    content: (
      <p>
        L’interessato che ritenga che il trattamento dei propri dati personali
        avvenga in violazione della normativa può proporre reclamo al Garante
        per la protezione dei dati personali oppure rivolgersi all’autorità
        giudiziaria competente.
      </p>
    ),
  },
  {
    title: "12. Processi decisionali automatizzati",
    content: (
      <p>
        Il sito non effettua processi decisionali automatizzati né attività di
        profilazione che producano effetti giuridici o incidano in modo
        significativo sull’utente.
      </p>
    ),
  },
  {
    title: "13. Minori",
    content: (
      <p>
        Il sito e i servizi professionali presentati non sono specificamente
        rivolti a minori. Qualora vengano ricevuti dati di un minore senza una
        valida base giuridica, tali dati saranno cancellati appena possibile.
      </p>
    ),
  },
  {
    title: "14. Collegamenti a siti esterni",
    content: (
      <p>
        Il sito può contenere collegamenti a siti o servizi di terzi. Il
        titolare non controlla le modalità con cui tali soggetti trattano i
        dati personali. Si invita pertanto l’utente a consultare le rispettive
        informative privacy.
      </p>
    ),
  },
  {
    title: "15. Aggiornamenti della presente informativa",
    content: (
      <p>
        La presente informativa può essere aggiornata per adeguarla a modifiche
        normative, tecniche o organizzative. La versione pubblicata su questa
        pagina è quella attualmente applicabile.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      <Container>
        <header className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.24em] text-[#24221f]/55">
            Informazioni legali
          </p>

          <h1 className="mt-5 font-serif text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Privacy Policy
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#24221f]/70 sm:text-lg">
            Informativa sul trattamento dei dati personali ai sensi del
            Regolamento europeo sulla protezione dei dati.
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
                Per richieste relative alla privacy:
              </p>

              <a
                href={`mailto:${legal.privacyEmail}`}
                className="mt-2 block break-all text-sm underline decoration-[#24221f]/25 underline-offset-4 transition-colors hover:decoration-[#24221f]"
              >
                {legal.privacyEmail}
              </a>
            </div>
          </aside>

          <article className="max-w-3xl">
            <div className="space-y-12">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-serif text-3xl font-medium tracking-[-0.025em]">
                    {section.title}
                  </h2>

                  <div className="mt-5 text-[15px] leading-7 text-[#24221f]/72 sm:text-base sm:leading-8">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-16 border-t border-[#24221f]/15 pt-8">
              <p className="text-sm leading-7 text-[#24221f]/60">
                Per informazioni sull’utilizzo dei cookie e degli strumenti
                tecnici consulta anche la{" "}
                <Link
                  href="/cookie-policy"
                  className="underline decoration-[#24221f]/30 underline-offset-4 transition-colors hover:decoration-[#24221f]"
                >
                  Cookie Policy
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