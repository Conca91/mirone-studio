"use client";

import Image from "next/image";
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

const logoPath = "/images/brand/logo-studio-mirone.jpeg";

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
            ? "border-b border-[#24221f]/10 bg-[#f7f4ef]/95 shadow-[0_8px_30px_rgba(36,34,31,0.04)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1500px] items-center justify-between px-5 transition-all duration-500 sm:px-6 md:px-12 lg:px-20 ${
            isScrolled ? "h-[76px]" : "h-[108px]"
          }`}
        >
          <Link
            href="/"
            aria-label="Studio Tecnico Mirone — Home"
            className="relative z-50 flex shrink-0 items-center"
          >
            <span
              className={`flex items-center justify-center overflow-hidden bg-[#f7f4ef]/95 transition-all duration-500 ${
                isScrolled
                  ? "h-[58px] w-[116px] px-2 py-1"
                  : "h-[78px] w-[150px] px-2 py-1 sm:w-[160px]"
              }`}
            >
              <Image
                src={logoPath}
                alt="Studio Tecnico Mirone"
                width={594}
                height={475}
                priority
                sizes="(max-width: 640px) 150px, 160px"
                className="h-full w-full object-contain"
              />
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
                      : isScrolled
                        ? "text-[#6c655b] hover:text-[#24221f]"
                        : "text-white/75 hover:text-white"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute inset-x-0 bottom-1 h-px origin-left transition-transform duration-300 ${
                      isScrolled ? "bg-[#b59a72]" : "bg-white"
                    } ${
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
              className={`group inline-flex items-center gap-3 border-b pb-2 text-[9px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                isScrolled
                  ? "border-[#b59a72] text-[#24221f]"
                  : "border-white/65 text-white"
              }`}
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
            className={`relative z-50 flex h-12 items-center gap-3 transition-colors xl:hidden ${
              isScrolled || isMenuOpen ? "text-[#24221f]" : "text-white"
            }`}
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
        className={`fixed inset-0 z-40 overflow-y-auto bg-[#f7f4ef] transition-all duration-500 xl:hidden ${
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="mx-auto flex min-h-screen max-w-[1500px] flex-col px-6 pb-10 pt-28 md:px-12 md:pt-36">
          <div
            className={`mb-8 flex justify-center transition-all duration-500 ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-3 opacity-0"
            }`}
          >
            <Link
              href="/"
              aria-label="Studio Tecnico Mirone — Home"
              className="inline-flex bg-[#f7f4ef]"
            >
              <Image
                src={logoPath}
                alt="Studio Tecnico Mirone"
                width={594}
                height={475}
                sizes="190px"
                className="h-auto max-h-[126px] w-auto max-w-[190px] object-contain"
              />
            </Link>
          </div>

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

                      <span
                        className={`text-[9px] tracking-[0.3em] ${
                          active ? "text-[#b59a72]" : "text-[#817a70]"
                        }`}
                      >
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
              <p className="mb-4 text-[9px] uppercase tracking-[0.3em] text-[#9a815f]">
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
              <p className="mb-4 text-[9px] uppercase tracking-[0.3em] text-[#9a815f]">
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
              <p className="mb-4 text-[9px] uppercase tracking-[0.3em] text-[#9a815f]">
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