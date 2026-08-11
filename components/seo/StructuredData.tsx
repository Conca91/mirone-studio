import { legal } from "@/data/legal";
import { seo } from "@/data/seo";

const organizationId = `${seo.siteUrl}/#organization`;
const websiteId = `${seo.siteUrl}/#website`;
const personId = `${seo.siteUrl}/miriana-mirone/#person`;
const personPageId = `${seo.siteUrl}/miriana-mirone/#webpage`;

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "ProfessionalService",

      "@id": organizationId,

      name: legal.brandName,
      legalName: legal.legalName,

      url: seo.siteUrl,

      description: seo.defaultDescription,

      telephone: legal.phone,
      email: legal.contactEmail,

      image: `${seo.siteUrl}${seo.images.openGraph}`,
      logo: `${seo.siteUrl}${seo.images.logo}`,

      address: {
        "@type": "PostalAddress",

        streetAddress: legal.address.street,
        postalCode: legal.address.postalCode,
        addressLocality: legal.address.city,
        addressRegion: legal.address.province,
        addressCountry: "IT",
      },

      areaServed: [
        {
          "@type": "City",
          name: "Belpasso",
        },

        {
          "@type": "City",
          name: "Catania",
        },

        {
          "@type": "AdministrativeArea",
          name: "Provincia di Catania",
        },

        {
          "@type": "AdministrativeArea",
          name: "Sicilia",
        },

        {
          "@type": "Country",
          name: "Italia",
        },
      ],

      founder: {
        "@id": personId,
      },

      employee: [
        {
          "@id": personId,
        },
      ],

      knowsAbout: [
        "Progettazione architettonica",
        "Ristrutturazione edilizia",
        "Pratiche edilizie",
        "Pratiche catastali",
        "Rilievi topografici",
        "Direzione lavori",
        "Attestato di Prestazione Energetica",
        "Modellazione BIM",
        "Rendering architettonico",
        "Consulenza tecnica",
      ],

      contactPoint: {
        "@type": "ContactPoint",

        telephone: legal.phone,
        email: legal.contactEmail,

        contactType: "customer service",

        availableLanguage: ["Italian"],
      },

      sameAs: [],
    },

    {
      "@type": "Person",

      "@id": personId,

      name: "Miriana Mirone",

      alternateName: [
        "Ingegnere Miriana Mirone",
        "Ing. Miriana Mirone",
      ],

      jobTitle: "Ingegnere",

      url: `${seo.siteUrl}/miriana-mirone`,

      mainEntityOfPage: {
        "@id": personPageId,
      },

      description:
        "Miriana Mirone è ingegnere e responsabile dello Studio Tecnico Mirone, con sede a Belpasso, in provincia di Catania.",

      worksFor: {
        "@id": organizationId,
      },

      workLocation: {
        "@type": "Place",

        name: "Studio Tecnico Mirone",

        address: {
          "@type": "PostalAddress",

          streetAddress: legal.address.street,
          postalCode: legal.address.postalCode,
          addressLocality: legal.address.city,
          addressRegion: legal.address.province,
          addressCountry: "IT",
        },
      },

      knowsAbout: [
        "Progettazione architettonica",
        "Pratiche edilizie",
        "Pratiche catastali",
        "Direzione lavori",
        "Rilievi topografici",
        "Attestato di Prestazione Energetica",
        "BIM",
        "Rendering architettonico",
        "Consulenza tecnica",
      ],

      sameAs: [],
    },

    {
      "@type": "WebSite",

      "@id": websiteId,

      url: seo.siteUrl,

      name: seo.siteName,

      publisher: {
        "@id": organizationId,
      },

      inLanguage: "it-IT",
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}