import Link from "next/link";
import { company } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-[#1f1d1b] text-white">
      <div className="site-container py-16 sm:py-20">
        <div className="grid gap-14 border-b border-white/15 pb-14 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <p className="font-serif text-4xl">Studio Tecnico Mirone</p>
            <p className="mt-6 max-w-md leading-7 text-white/60">Progettazione, pratiche tecniche, rilievi e direzione lavori a Belpasso e in provincia di Catania.</p>
          </div>
          <div className="space-y-3 text-sm text-white/65">
            <p className="mb-5 text-[10px] uppercase tracking-[.28em] text-white/40">Navigazione</p>
            <p><Link href="/studio">Lo studio</Link></p><p><Link href="/servizi">Servizi</Link></p><p><Link href="/progetti">Progetti</Link></p><p><Link href="/contatti">Contatti</Link></p>
          </div>
          <div className="space-y-3 text-sm text-white/65">
            <p className="mb-5 text-[10px] uppercase tracking-[.28em] text-white/40">Contatti</p>
            <p>{company.address}</p><p><a href={company.phoneHref}>{company.phoneLabel}</a></p><p><a href={`mailto:${company.email}`}>{company.email}</a></p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-white/40 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Studio Tecnico Mirone</p><p>Belpasso · Catania</p></div>
      </div>
    </footer>
  );
}
