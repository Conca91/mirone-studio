import { legal } from "@/data/legal";
import { seo } from "@/data/seo";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${seo.siteUrl}/#organization`,

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

  founder: {
    "@type": "Person",
    name: legal.ownerName,
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

  knowsAbout: [
    "Progettazione architettonica",
    "Ristrutturazione edilizia",
    "Pratiche edilizie",
    "Pratiche catastali",
    "Rilievi topografici",
    "Direzione lavori",
    "Attestati di Prestazione Energetica",
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

  sameAs: [
    // Aggiungeremo qui in futuro eventuali profili ufficiali:
    // Google Business Profile
    // Instagram
    // Facebook
    // LinkedIn
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