"use client";
import { motion } from "motion/react";
import { company } from "@/data/company";

export default function Method(){return <section id="metodo" className="section bg-[var(--color-background)]"><div className="site-container"><div className="editorial-grid"><p className="eyebrow">Il nostro approccio</p><div><h2 className="display-title">Prima capire.<br/>Poi progettare.</h2><p className="body-large mt-8 max-w-2xl">{company.description}</p></div></div><div className="mt-20 border-t border-black/15">{company.values.map((item,i)=><motion.article key={item.number} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}} className="grid gap-5 border-b border-black/15 py-9 sm:grid-cols-[.2fr_.8fr_1fr]"><span className="eyebrow">{item.number}</span><h3 className="font-serif text-3xl">{item.title}</h3><p className="leading-7 text-[var(--color-muted)]">{item.description}</p></motion.article>)}</div></div></section>}
