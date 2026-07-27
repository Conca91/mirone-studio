import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Footer from "@/components/layout/Footer";
import { services } from "@/data/services";
export const metadata: Metadata={title:"Servizi",description:"Progettazione, pratiche edilizie, catasto, rilievi, APE, direzione lavori e BIM."};
export default function Servizi(){return <><PageHero eyebrow="Servizi" title="Competenze coordinate." description="Dalla verifica preliminare alla conclusione dell'intervento, seguiamo ogni fase con un approccio integrato."/><section className="section bg-[var(--color-surface)]"><div className="site-container space-y-6">{services.map((s,i)=><article id={s.slug} key={s.slug} className="scroll-mt-28 border-t border-black/15 py-10 sm:grid sm:grid-cols-[.2fr_.8fr_1fr] sm:gap-8 sm:py-14"><p className="eyebrow">{s.number}</p><div><h2 className="font-serif text-4xl sm:text-5xl">{s.title}</h2><p className="mt-5 max-w-lg leading-7 text-[var(--color-muted)]">{s.summary}</p></div><ul className="mt-7 space-y-3 text-sm sm:mt-0">{s.items.map(item=><li key={item} className="border-b border-black/10 pb-3">{item}</li>)}</ul></article>)}</div></section><Footer/></>}
