import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Compass,
  FileCheck2,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import PageHero from "@/components/shared/PageHero";

import type { ServiceDetailConfig } from "./service-types";

type ServiceDetailPageProps = {
  config: ServiceDetailConfig;
  jsonLd: Record<string, unknown>;
};

export default function ServiceDetailPage({
  config,
  jsonLd,
}: ServiceDetailPageProps) {
  const pageTitle = [
    config.titleFirstLine,
    config.titleSecondLine,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <main className="overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow={config.locationLabel}
        title={pageTitle}
        description={config.heroDescription}
      />

      <section className="border-t border-[var(--color-border)]">
        <div className="site-container py-10 sm:py-12">
          <div className="grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-5">
            {config.heroChecklist.map((item) => (
              <div
                key={item}
                className="flex min-h-24 items-start gap-3 bg-[var(--color-background)] p-5"
              >
                <Check
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 shrink-0 text-[var(--color-accent)]"
                />

                <span className="text-sm leading-6 text-[var(--color-muted)]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={config.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="button-dark inline-flex min-h-14 items-center justify-center gap-3 px-7 text-sm font-semibold"
            >
              <MessageCircle
                aria-hidden="true"
                className="h-5 w-5"
              />

              Parla del tuo progetto
            </a>

            <Link
              href="/progetti"
              className="button-outline inline-flex min-h-14 items-center justify-center gap-3 px-7 text-sm font-semibold"
            >
              Guarda i progetti

              <ArrowRight
                aria-hidden="true"
                className="h-5 w-5"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container editorial-grid">
          <div>
            <p className="eyebrow">
              {config.introduction.eyebrow}
            </p>
          </div>

          <div>
            <h2 className="display-title">
              {config.introduction.title}
            </h2>

            <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-[var(--color-muted)]">
              {config.introduction.paragraphs.map(
                (paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container">
          <div className="editorial-grid">
            <p className="eyebrow">
              {config.areas.eyebrow}
            </p>

            <div>
              <h2 className="display-title">
                {config.areas.title}
              </h2>

              <p className="body-large mt-8">
                {config.areas.description}
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2">
            {config.areas.cards.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group min-h-72 bg-[var(--color-background)] p-8 transition-colors duration-300 hover:bg-[var(--color-dark)] hover:text-white sm:p-10"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-7 w-7 text-[var(--color-accent)]"
                    strokeWidth={1.5}
                  />

                  <h3 className="mt-10 font-serif text-[clamp(2.2rem,3vw,3.5rem)] leading-[1.05] tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-6 max-w-xl leading-7 text-[var(--color-muted)] transition-colors duration-300 group-hover:text-white/65">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow">
                  {config.workflow.eyebrow}
                </p>

                <h2 className="mt-8 font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[1] tracking-[-0.04em]">
                  {config.workflow.title}
                </h2>

                <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
                  {config.workflow.description}
                </p>
              </div>
            </div>

            <div className="border-t border-[var(--color-border)] lg:col-span-7">
              {config.workflow.steps.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-6 border-b border-[var(--color-border)] py-10 sm:grid-cols-[5rem_1fr]"
                >
                  <span className="eyebrow">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-[clamp(2rem,3vw,3.25rem)] leading-[1.05] tracking-[-0.035em]">
                      {step.title}
                    </h3>

                    <p className="mt-5 max-w-2xl leading-8 text-[var(--color-muted)]">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-dark)] text-white">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Compass
                aria-hidden="true"
                className="h-8 w-8 text-[#c0a780]"
                strokeWidth={1.5}
              />

              <p className="eyebrow mt-9 text-white/45">
                {config.benefits.eyebrow}
              </p>

              <h2 className="mt-8 font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[1] tracking-[-0.04em] text-white">
                {config.benefits.title}
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
                {config.benefits.description}
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2 lg:col-span-7">
              {config.benefits.items.map((benefit) => (
                <article
                  key={benefit}
                  className="min-h-48 bg-[var(--color-dark)] p-8"
                >
                  <Check
                    aria-hidden="true"
                    className="h-5 w-5 text-[#c0a780]"
                  />

                  <p className="mt-8 leading-7 text-white/80">
                    {benefit}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow">
                {config.deliverables.eyebrow}
              </p>

              <h2 className="mt-8 font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[1] tracking-[-0.04em]">
                {config.deliverables.title}
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
                {config.deliverables.description}
              </p>

              <Link
                href="/contatti"
                className="editorial-link mt-9"
              >
                Richiedi una valutazione

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </Link>
            </div>

            <div className="grid content-start gap-3 sm:grid-cols-2 lg:col-span-7">
              {config.deliverables.items.map((item) => (
                <div
                  key={item}
                  className="flex min-h-24 items-start gap-4 border border-[var(--color-border)] p-5"
                >
                  <FileCheck2
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-[var(--color-accent)]"
                    strokeWidth={1.5}
                  />

                  <span className="leading-7 text-[var(--color-muted)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <MapPin
                aria-hidden="true"
                className="h-8 w-8 text-[var(--color-accent)]"
                strokeWidth={1.5}
              />

              <p className="eyebrow mt-9">
                {config.locations.eyebrow}
              </p>

              <h2 className="mt-8 font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[1] tracking-[-0.04em]">
                {config.locations.title}
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
                {config.locations.description}
              </p>
            </div>

            <div className="grid content-start gap-3 sm:grid-cols-2 lg:col-span-7">
              {config.locations.items.map((area) => (
                <div
                  key={area}
                  className="flex min-h-16 items-center justify-between border border-[var(--color-border)] px-5 py-4"
                >
                  <span className="font-medium">
                    {area}
                  </span>

                  <ChevronRight
                    aria-hidden="true"
                    className="h-4 w-4 text-[var(--color-accent)]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container">
          <div className="editorial-grid">
            <p className="eyebrow">
              {config.faqs.eyebrow}
            </p>

            <div>
              <h2 className="display-title">
                {config.faqs.title}
              </h2>

              <div className="mt-14 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
                {config.faqs.items.map((faq) => (
                  <details
                    key={faq.question}
                    className="group py-7"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-8 font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">
                      <span>{faq.question}</span>

                      <span
                        aria-hidden="true"
                        className="relative h-5 w-5 shrink-0"
                      >
                        <span className="absolute left-0 top-1/2 h-px w-5 bg-[var(--color-text)]" />
                        <span className="absolute left-1/2 top-0 h-5 w-px bg-[var(--color-text)] transition-opacity group-open:opacity-0" />
                      </span>
                    </summary>

                    <p className="max-w-3xl pt-6 leading-8 text-[var(--color-muted)]">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--color-border)]">
        <div className="site-container">
          <div className="grid items-end gap-12 border border-[var(--color-border)] p-8 sm:p-12 lg:grid-cols-12 lg:p-16">
            <div className="lg:col-span-8">
              <p className="eyebrow">
                {config.finalCta.eyebrow}
              </p>

              <h2 className="mt-8 font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[1] tracking-[-0.04em]">
                {config.finalCta.title}
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                {config.finalCta.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-4">
              <a
                href={config.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="button-dark inline-flex min-h-14 items-center justify-center gap-3 px-7 text-sm font-semibold"
              >
                <MessageCircle
                  aria-hidden="true"
                  className="h-5 w-5"
                />

                Scrivi su WhatsApp
              </a>

              <a
                href={config.emailHref}
                className="button-outline inline-flex min-h-14 items-center justify-center gap-3 px-7 text-sm font-semibold"
              >
                <Mail
                  aria-hidden="true"
                  className="h-5 w-5"
                />

                Invia un’e-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}