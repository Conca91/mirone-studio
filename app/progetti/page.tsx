import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import Footer from "@/components/layout/Footer";
import { projects } from "@/data/projects";
export const metadata: Metadata={title:"Progetti",description:"Una selezione di progetti e interventi dello Studio Tecnico Mirone."};
export default function Progetti(){return <><PageHero eyebrow="Progetti" title="Spazi pensati. Interventi concreti." description="Una selezione di lavori che raccontano il nostro modo di leggere gli immobili e trasformare le esigenze in soluzioni."/><section className="section bg-[var(--color-background)]"><div className="site-container space-y-24">{projects.map((p,i)=><article key={p.title} className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i%2?"lg:[&>div:first-child]:order-2":""}`}><div className="relative aspect-[4/3] overflow-hidden"><Image src={p.image} alt={p.title} fill className="object-cover"/></div><div className="lg:px-10"><p className="eyebrow">{p.category} · {p.location}</p><h2 className="mt-6 font-serif text-5xl sm:text-6xl">{p.title}</h2><p className="body-large mt-7">{p.description}</p></div></article>)}</div></section><Footer/></>}
