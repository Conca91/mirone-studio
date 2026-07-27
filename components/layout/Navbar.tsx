"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "@/data/company";

const navigation = [
  { label: "Lo studio", href: "/studio" },
  { label: "Servizi", href: "/servizi" },
  { label: "Progetti", href: "/progetti" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-[#262320]/12 bg-[#f3eee6]/96 shadow-[0_8px_30px_rgba(38,35,32,0.05)] backdrop-blur-xl"
            : "border-b border-[#262320]/12 bg-[#f3eee6]/96 backdrop-blur-xl"
        }`}
      >
        <div className="site-container flex h-20 items-center justify-between sm:h-24">
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Vai alla pagina iniziale"
            className="group flex items-center gap-3 text-[#1f1d1a]"
          >
            <span className="grid h-11 w-11 place-items-center border border-[#262320]/55 font-serif text-lg text-[#1f1d1a] transition-colors duration-300 group-hover:border-[#262320] group-hover:bg-[#262320] group-hover:text-white">
              SM
            </span>

            <span className="leading-none">
              <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#4f4740]">
                Studio Tecnico
              </span>

              <span className="mt-1 block font-serif text-xl text-[#1f1d1a]">
                Mirone
              </span>
            </span>
          </Link>

          <nav
            aria-label="Navigazione principale"
            className="hidden items-center gap-8 lg:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-2 text-[15px] font-semibold text-[#3d3935] transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#262320] after:transition-all after:duration-300 hover:text-[#111111] hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-12 items-center justify-center rounded-full bg-[#262320] px-7 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#171513] hover:shadow-lg lg:inline-flex"
            style={{ color: "#ffffff" }}
          >
            <span style={{ color: "#ffffff" }}>
              Parliamo del progetto
            </span>
          </a>

          <button
            type="button"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="grid h-11 w-11 place-items-center border border-[#262320]/55 text-[#1f1d1a] transition-colors duration-300 hover:border-[#262320] hover:bg-[#262320] hover:text-white lg:hidden"
          >
            {open ? (
              <X aria-hidden="true" size={20} />
            ) : (
              <Menu aria-hidden="true" size={20} />
            )}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#f3eee6] pt-28 transition-all duration-500 lg:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <div className="site-container flex h-full flex-col pb-10">
          <nav
            aria-label="Navigazione mobile"
            className="border-t border-[#262320]/15"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-[#262320]/15 py-6 font-serif text-4xl text-[#1f1d1a] transition-colors duration-300 hover:text-[#4f4740]"
              >
                <span>{item.label}</span>

                <span
                  aria-hidden="true"
                  className="text-2xl text-[#4f4740]"
                >
                  ↗
                </span>
              </Link>
            ))}
          </nav>

          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-[#262320] px-7 text-sm font-semibold"
            style={{ color: "#ffffff" }}
          >
            <span style={{ color: "#ffffff" }}>
              Parliamo del progetto
            </span>
          </a>

          <div className="mt-auto border-t border-[#262320]/15 pt-8 text-sm leading-7 text-[#4f4740]">
            <p>{company.address}</p>

            <a
              href={company.phoneHref}
              className="mt-2 inline-block font-semibold text-[#1f1d1a]"
            >
              {company.phoneLabel}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}