
import type { MetadataRoute } from "next";

import { seo } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seo.siteUrl.replace(/\/$/, "");

  const pages = [
    { path: "", frequency: "weekly", priority: 1 },
    { path: "/studio", frequency: "monthly", priority: 0.95 },
    { path: "/miriana-mirone", frequency: "monthly", priority: 0.95 },
    { path: "/servizi", frequency: "weekly", priority: 0.95 },

    // Servizi
    {
      path: "/servizi/progettazione-architettonica",
      frequency: "monthly",
      priority: 0.9,
    },
    {
      path: "/servizi/rendering-architettonici",
      frequency: "monthly",
      priority: 0.85,
    },
    {
      path: "/servizi/direzione-lavori",
      frequency: "monthly",
      priority: 0.9,
    },
    {
      path: "/servizi/pratiche-edilizie",
      frequency: "monthly",
      priority: 0.95,
    },
    {
      path: "/servizi/pratiche-edilizie-parco-etna",
      frequency: "monthly",
      priority: 0.95,
    },
    {
      path: "/servizi/pratiche-catastali",
      frequency: "monthly",
      priority: 0.95,
    },
    {
      path: "/servizi/ape",
      frequency: "monthly",
      priority: 0.95,
    },
    {
      path: "/servizi/successioni-ereditarie",
      frequency: "monthly",
      priority: 0.95,
    },
    {
      path: "/servizi/rilievi-topografici",
      frequency: "monthly",
      priority: 0.9,
    },

    // Altre pagine
    {
      path: "/progetti",
      frequency: "weekly",
      priority: 0.9,
    },
    {
      path: "/metodo",
      frequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/contatti",
      frequency: "monthly",
      priority: 0.85,
    },

    // Pagine legali
    {
      path: "/privacy-policy",
      frequency: "yearly",
      priority: 0.2,
    },
    {
      path: "/cookie-policy",
      frequency: "yearly",
      priority: 0.2,
    },
    {
      path: "/note-legali",
      frequency: "yearly",
      priority: 0.2,
    },
  ] as const;

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    changeFrequency: page.frequency,
    priority: page.priority,
  }));
}
