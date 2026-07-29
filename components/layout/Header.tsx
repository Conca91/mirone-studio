"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Studio", href: "/studio" },
  { label: "Servizi", href: "/servizi" },
  { label: "Progetti", href: "/progetti" },
  { label: "Metodo", href: "/metodo" },
  { label: "Contatti", href: "/contatti" },
];

export default function Header() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? "border-b border-[#24221f]/10 bg-[#ebe7dc]/92 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1500px] items-center justify-between px-6 transition-all duration-500 md:px-12 lg:px-20 ${
            isScrolled ? "h-[74px]" : "h-[104px]"
          }`}
        >
          <Link
            href="/"
            aria-label="Studio Tecnico Mirone — Home"
            className="relative z-50 flex items-end gap-3 text-[#24221f]"
          >
            <span
              className={`font-serif leading-none tracking-[-0.04em] transition-all duration-500 ${
                isScrolled
                  ? "text-[28px]"
                  : "text-[32px] md:text-[35px]"
              }`}
            >
              Mirone
            </span>

            <span
              className={`mb-[3px] hidden uppercase text-[#625c53] transition-all duration-500 sm:block ${
                isScrolled
                  ? "text-[7px] tracking-[0.27em]"
                  : "text-[8px] tracking-[0.32em]"
              }`}
            >
              Studio tecnico
            </span>
          </Link>

          <nav
            aria-label="Navigazione principale"
            className="hidden items-center gap-7 xl:flex"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative py-3 text-[10px] uppercase tracking-[0.23em] transition-colors duration-300 ${
                    active
                      ? "text-[#24221f]"
                      : "text-[#6c655b] hover:text-[#24221f]"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute inset-x-0 bottom-1 h-px origin-left bg-[#24221f] transition-transform duration-300 ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:block">
            <Link
              href="/contatti"
              className="group inline-flex items-center gap-3 border-b border-[#24221f] pb-2 text-[9px] uppercase tracking-[0.22em] text-[#24221f]"
            >
              Richiedi una consulenza

              <ArrowUpRight
                size={15}
                strokeWidth={1.4}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Chiudi il menu" : "Apri il menu"}
            className="relative z-50 flex h-12 items-center gap-3 text-[#24221f] xl:hidden"
          >
            <span className="hidden text-[9px] uppercase tracking-[0.24em] sm:block">
              {isMenuOpen ? "Chiudi" : "Menu"}
            </span>

            {isMenuOpen ? (
              <X size={25} strokeWidth={1.25} aria-hidden="true" />
            ) : (
              <Menu size={27} strokeWidth={1.25} aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 overflow-y-auto bg-[#ebe7dc] transition-all duration-500 xl:hidden ${
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="mx-auto flex min-h-screen max-w-[1500px] flex-col px-6 pb-10 pt-32 md:px-12 md:pt-40">
          <nav
            aria-label="Navigazione mobile"
            className="flex flex-1 flex-col justify-center"
          >
            <ul className="border-t border-[#24221f]/15">
              {navigation.map((item, index) => {
                const active = isActive(item.href);

                return (
                  <li
                    key={item.href}
                    className={`border-b border-[#24221f]/15 transition-all duration-500 ${
                      isMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isMenuOpen
                        ? `${100 + index * 65}ms`
                        : "0ms",
                    }}
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className="group flex items-center justify-between py-5 md:py-6"
                    >
                      <span
                        className={`font-serif text-4xl leading-none tracking-[-0.035em] transition-colors md:text-6xl ${
                          active
                            ? "text-[#24221f]"
                            : "text-[#6c655b] group-hover:text-[#24221f]"
                        }`}
                      >
                        {item.label}
                      </span>

                      <span className="text-[9px] tracking-[0.3em] text-[#817a70]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div
            className={`mt-12 grid gap-10 border-t border-[#24221f]/15 pt-7 text-[#625c53] transition-all delay-300 duration-500 md:grid-cols-3 ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <div>
              <p className="mb-4 text-[9px] uppercase tracking-[0.3em]">
                Telefono
              </p>

              <a
                href="tel:+393482934197"
                className="text-sm transition-colors hover:text-[#24221f]"
              >
                +39 348 293 4197
              </a>
            </div>

            <div>
              <p className="mb-4 text-[9px] uppercase tracking-[0.3em]">
                E-mail
              </p>

              <a
                href="mailto:info@mironestudio.it"
                className="text-sm transition-colors hover:text-[#24221f]"
              >
                info@mironestudio.it
              </a>
            </div>

            <div>
              <p className="mb-4 text-[9px] uppercase tracking-[0.3em]">
                Studio
              </p>

              <address className="text-sm not-italic leading-6">
                Via XVI Traversa n. 53
                <br />
                95032 Belpasso (CT)
              </address>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}