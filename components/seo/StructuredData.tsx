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

  areaServed: {
    "@type": "Country",
    name: "Italia",
  },

  knowsAbout: [
    "Progettazione architettonica",
    "Ristrutturazione edilizia",
    "Pratiche edilizie",
    "Pratiche catastali",
    "Rilievi tecnici",
    "Direzione lavori",
    "Coordinamento tecnico",
    "Building Information Modeling",
    "Rendering architettonico",
  ],

  contactPoint: {
    "@type": "ContactPoint",
    telephone: legal.phone,
    email: legal.contactEmail,
    contactType: "customer service",
    availableLanguage: ["Italian"],
  },
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