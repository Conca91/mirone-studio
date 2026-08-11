import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const navigation = [
  { label: "Studio", href: "/studio" },
  { label: "Miriana Mirone", href: "/miriana-mirone" },
  { label: "Servizi", href: "/servizi" },
  { label: "Progetti", href: "/progetti" },
  { label: "Metodo", href: "/metodo" },
  { label: "Contatti", href: "/contatti" },
];

const services = [
  {
    label: "Progettazione architettonica",
    href: "/servizi/progettazione-architettonica",
  },
  {
    label: "Pratiche edilizie",
    href: "/servizi/pratiche-edilizie",
  },
  {
    label: "Pratiche catastali",
    href: "/servizi/pratiche-catastali",
  },
  {
    label: "Direzione lavori",
    href: "/servizi/direzione-lavori",
  },
  {
    label: "Rilievi topografici",
    href: "/servizi/rilievi-topografici",
  },
  {
    label: "APE e certificazioni",
    href: "/servizi/ape",
  },
  {
    label: "Rendering architettonici",
    href: "/servizi/rendering-architettonici",
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Note legali", href: "/note-legali" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#24221f] text-[#ebe7dc]">
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-12 md:py-24 lg:px-20 lg:py-32">
        {/* PARTE PRINCIPALE */}
        <div className="grid gap-20 border-b border-white/15 pb-20 lg:grid-cols-12 lg:gap-12 lg:pb-28">
          <div className="lg:col-span-6">
            <p className="mb-8 text-[10px] uppercase tracking-[0.35em] text-[#b8b0a5]">
              Studio Tecnico Mirone · Belpasso · Catania
            </p>

            <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-[6.5rem]">
              Ogni progetto
              <br />
              inizia
              <br />
              da un&apos;idea.
            </h2>

            <p className="mt-9 max-w-xl text-sm leading-7 text-[#aaa297] sm:text-base">
              Studio tecnico a Belpasso, in provincia di Catania, per
              progettazione architettonica, pratiche edilizie e catastali,
              rilievi topografici, direzione lavori e consulenza tecnica.
            </p>

            <div className="mt-9 max-w-xl border-l border-white/20 pl-5">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#938c82]">
                Responsabile dello Studio
              </p>

              <Link
                href="/miriana-mirone"
                className="group mt-3 inline-flex items-center gap-3 font-serif text-2xl text-[#d8d1c6] transition-colors duration-300 hover:text-white"
                aria-label="Ingegnere Miriana Mirone, responsabile dello Studio Tecnico Mirone"
              >
                Ingegnere Miriana Mirone

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.4}
                  aria-hidden="true"
                  className="opacity-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </Link>

              <p className="mt-2 text-sm leading-6 text-[#8f887e]">
                Studio Tecnico Mirone · Belpasso, Catania
              </p>
            </div>

            <Link
              href="/contatti"
              className="group mt-10 inline-flex items-center gap-4 border-b border-[#ebe7dc] pb-3 text-xs uppercase tracking-[0.24em]"
            >
              Richiedi una consulenza

              <ArrowUpRight
                size={19}
                strokeWidth={1.4}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-14 sm:grid-cols-2 lg:col-span-5 lg:col-start-8">
            {/* NAVIGAZIONE */}
            <div>
              <p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-[#938c82]">
                Navigazione
              </p>

              <nav aria-label="Navigazione nel footer">
                <ul className="space-y-4">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="font-serif text-2xl text-[#d8d1c6] transition-colors duration-300 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* CONTATTI */}
            <div>
              <p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-[#938c82]">
                Contatti
              </p>

              <div className="space-y-6 text-sm leading-7 text-[#c5beb3]">
                <a
                  href="tel:+393482934197"
                  className="flex items-start gap-3 transition-colors duration-300 hover:text-white"
                >
                  <Phone
                    size={16}
                    strokeWidth={1.4}
                    aria-hidden="true"
                    className="mt-1 shrink-0"
                  />

                  <span>+39 348 293 4197</span>
                </a>

                <a
                  href="mailto:info@mironestudio.it"
                  className="flex items-start gap-3 break-all transition-colors duration-300 hover:text-white"
                >
                  <Mail
                    size={16}
                    strokeWidth={1.4}
                    aria-hidden="true"
                    className="mt-1 shrink-0"
                  />

                  <span>info@mironestudio.it</span>
                </a>

                <address className="flex items-start gap-3 not-italic">
                  <MapPin
                    size={16}
                    strokeWidth={1.4}
                    aria-hidden="true"
                    className="mt-1 shrink-0"
                  />

                  <span>
                    Via XVI Traversa n. 53
                    <br />
                    95032 Belpasso (CT)
                    <br />
                    Sicilia, Italia
                  </span>
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* SERVIZI */}
        <div className="border-b border-white/15 py-12 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#938c82]">
                Servizi tecnici
              </p>
            </div>

            <nav
              aria-label="Servizi dello Studio Tecnico Mirone"
              className="lg:col-span-9"
            >
              <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="group inline-flex items-center gap-2 text-sm leading-6 text-[#b8b0a5] transition-colors duration-300 hover:text-white"
                    >
                      <span>{service.label}</span>

                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.4}
                        aria-hidden="true"
                        className="opacity-40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* FOOTER INFERIORE */}
        <div className="grid gap-10 pt-8 text-[10px] uppercase tracking-[0.22em] text-[#8f887e] md:grid-cols-2 md:items-center">
          <p>
            © {currentYear} Studio Tecnico Mirone · Belpasso (CT)
          </p>

          <div className="flex flex-wrap gap-x-7 gap-y-3 md:justify-end">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors duration-300 hover:text-[#ebe7dc]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}