"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { company } from "@/data/company";

const ease = [0.22, 1, 0.36, 1] as const;

const contactData = {
  phoneLabel: `+39 ${company.phoneLabel}`,
  phoneHref: company.phoneHref,

  emailLabel: company.email,
  emailHref: `mailto:${company.email}`,

  whatsappHref: company.whatsappHref,

  addressLabel: company.address,
  mapHref: company.mapHref,

  openingHours: "Lunedì – Venerdì · 09:00–13:00 / 15:00–18:00",
};

const contacts = [
  {
    label: "Telefono",
    value: contactData.phoneLabel,
    href: contactData.phoneHref,
    icon: Phone,
  },
  {
    label: "Email",
    value: contactData.emailLabel,
    href: contactData.emailHref,
    icon: Mail,
  },
  {
    label: "Sede",
    value: contactData.addressLabel,
    href: contactData.mapHref,
    icon: MapPin,
  },
  {
    label: "Orari",
    value: contactData.openingHours,
    href: null,
    icon: Clock3,
  },
];

export default function Contact() {
  return (
    <section
      id="contatti"
      className="relative overflow-hidden bg-[#262320] py-24 text-white sm:py-32 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-10 h-[520px] w-[520px] rounded-full bg-[#bca28b] opacity-10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 bottom-0 h-[560px] w-[560px] rounded-full bg-[#c7b8a6] opacity-10 blur-3xl"
      />

      <div className="site-container relative">
        <div className="grid gap-10 border-b border-white/20 pb-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.75,
              ease,
            }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-white/70 sm:text-[11px]">
              Contatti
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.85,
              delay: 0.08,
              ease,
            }}
          >
            <h2 className="max-w-5xl font-serif text-[clamp(3rem,6vw,6.3rem)] font-medium leading-[0.94] tracking-[-0.055em] text-white">
              Parliamo del tuo progetto.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Raccontaci le tue esigenze. Analizzeremo il progetto, la
              documentazione disponibile e il percorso tecnico più adatto per
              trasformare la tua idea in un intervento concreto.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-16 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:py-24">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.85,
              ease,
            }}
          >
            <p className="max-w-lg font-serif text-3xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-4xl">
              Un unico riferimento per progettazione, pratiche e realizzazione.
            </p>

            <div className="mt-12 divide-y divide-white/20 border-y border-white/20">
              {contacts.map((contact) => {
                const Icon = contact.icon;

                const content = (
                  <>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#262320]">
                      <Icon
                        aria-hidden="true"
                        size={18}
                        strokeWidth={1.5}
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/65 sm:text-[10px]">
                        {contact.label}
                      </p>

                      <p className="mt-2 break-words text-sm font-semibold text-white sm:text-base">
                        {contact.value}
                      </p>
                    </div>

                    {contact.href && (
                      <ArrowUpRight
                        aria-hidden="true"
                        size={18}
                        strokeWidth={1.5}
                        className="ml-auto shrink-0 text-white/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                      />
                    )}
                  </>
                );

                if (contact.href) {
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={
                        contact.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        contact.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-5 py-6"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={contact.label}
                    className="group flex items-center gap-5 py-6"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 34,
              scale: 0.985,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.95,
              delay: 0.08,
              ease,
            }}
            className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/[0.08] p-7 backdrop-blur-sm sm:p-10 lg:p-12"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#bca28b] opacity-10 blur-3xl"
            />

            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/70">
                Primo contatto
              </p>

              <h3 className="mt-6 max-w-xl font-serif text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl">
                Iniziamo da una prima valutazione.
              </h3>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/80">
                Puoi contattarci telefonicamente, tramite email oppure
                direttamente su WhatsApp. Ti risponderemo per comprendere il
                tipo di intervento e organizzare il primo confronto.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={contactData.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-white px-8 text-sm font-semibold !text-[#262320] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3eee6]"
                >
                  <MessageCircle
                    aria-hidden="true"
                    size={18}
                    strokeWidth={1.7}
                  />

                  <span className="whitespace-nowrap">
                    Scrivici su WhatsApp
                  </span>

                  <ArrowUpRight
                    aria-hidden="true"
                    size={17}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href={contactData.emailHref}
                  className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full border border-white/60 bg-transparent px-8 text-sm font-semibold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:!text-[#262320]"
                >
                  <Mail
                    aria-hidden="true"
                    size={17}
                    strokeWidth={1.7}
                  />

                  <span className="whitespace-nowrap">Invia un’email</span>
                </a>
              </div>

              <div className="mt-12 border-t border-white/20 pt-7">
                <p className="text-sm leading-7 text-white/70">
                  Per una prima valutazione puoi anticipare eventuali
                  planimetrie, fotografie, visure o documentazione tecnica
                  disponibile.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="flex flex-col gap-6 border-t border-white/20 pt-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-3xl font-serif text-2xl leading-snug tracking-[-0.025em] text-white sm:text-3xl">
            Dalla prima verifica alla conclusione dei lavori, seguiamo ogni
            fase con continuità.
          </p>

          <a
            href="#top"
            className="group inline-flex w-fit items-center gap-3 text-sm font-semibold text-white/80 transition-colors duration-300 hover:text-white"
          >
            <span>Torna all’inizio</span>

            <ArrowUpRight
              aria-hidden="true"
              size={16}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}