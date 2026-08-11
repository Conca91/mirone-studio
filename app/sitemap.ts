import type { MetadataRoute } from "next";

import { seo } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: seo.siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${seo.siteUrl}/studio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${seo.siteUrl}/servizi`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },

    {
      url: `${seo.siteUrl}/servizi/progettazione-architettonica`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${seo.siteUrl}/servizi/rendering-architettonici`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${seo.siteUrl}/servizi/direzione-lavori`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${seo.siteUrl}/servizi/pratiche-edilizie`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },

    {
      url: `${seo.siteUrl}/servizi/ape`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${seo.siteUrl}/servizi/rilievi-topografici`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${seo.siteUrl}/servizi/pratiche-catastali`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },

    {
      url: `${seo.siteUrl}/progetti`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${seo.siteUrl}/metodo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${seo.siteUrl}/contatti`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${seo.siteUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },

    {
      url: `${seo.siteUrl}/cookie-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },

    {
      url: `${seo.siteUrl}/note-legali`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}