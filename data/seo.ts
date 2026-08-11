export const seo = {
  siteName: "Studio Tecnico Mirone",
  shortName: "Studio Mirone",

  siteUrl: "https://mironestudio.it",

  locale: "it_IT",
  language: "it",

  /*
   * SEO PRINCIPALE
   * Obiettivo:
   * - Studio tecnico Belpasso
   * - Geometra Belpasso
   * - Progettazione Belpasso / Catania
   * - Pratiche edilizie e catastali
   */
  defaultTitle:
    "Studio Tecnico a Belpasso | Studio Tecnico Mirone",

  titleTemplate: "%s | Studio Tecnico Mirone",

  defaultDescription:
    "Studio Tecnico Mirone a Belpasso, Catania. Progettazione architettonica, pratiche edilizie e catastali, rilievi topografici, direzione lavori, BIM, rendering e consulenza tecnica.",

  /*
   * Le keywords non sono un fattore importante per Google,
   * ma possiamo mantenerle come riferimento interno.
   */
  keywords: [
    "Studio Tecnico Mirone",
    "Studio Mirone",

    "studio tecnico Belpasso",
    "studio tecnico Catania",

    "geometra Belpasso",
    "geometra Catania",

    "progettazione architettonica Belpasso",
    "progettazione architettonica Catania",

    "progettazione edilizia Belpasso",
    "progettazione edilizia Catania",

    "pratiche edilizie Belpasso",
    "pratiche edilizie Catania",

    "pratiche catastali Belpasso",
    "pratiche catastali Catania",

    "direzione lavori Belpasso",
    "direzione lavori Catania",

    "rilievi topografici Belpasso",
    "rilievi topografici Catania",

    "catasto Belpasso",
    "catasto Catania",

    "SCIA Belpasso",
    "CILA Belpasso",

    "sanatoria edilizia Belpasso",

    "DOCFA",
    "volture catastali",
    "successioni",

    "modellazione BIM",
    "progettazione BIM",

    "rendering architettonico",
    "visualizzazione 3D",

    "efficientamento energetico",

    "Attestato di Prestazione Energetica",
    "APE Belpasso",
    "APE Catania",

    "consulenza tecnica Belpasso",
    "consulenza tecnica Catania",

    "contabilità lavori",
    "sicurezza nei cantieri",
  ],

  contact: {
    phone: "+39 348 293 4197",
    phoneHref: "tel:+393482934197",

    email: "info@mironestudio.it",
    emailHref: "mailto:info@mironestudio.it",
  },

  address: {
    street: "Via XVI Traversa n. 53",
    postalCode: "95032",
    city: "Belpasso",
    province: "Catania",
    provinceCode: "CT",
    region: "Sicilia",
    country: "Italia",
    countryCode: "IT",
  },

  areasServed: [
    "Belpasso",
    "Catania",
    "Provincia di Catania",
    "Sicilia",
    "Italia",
  ],

  images: {
    openGraph: "/images/og.jpg",
    logo: "/images/logo.png",
  },
} as const;