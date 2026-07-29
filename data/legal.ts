export const legal = {
  brandName: "Studio Tecnico Mirone",

  legalName: "Studio Tecnico Mirone",

  ownerName: "Miriana Mirone",

  vatNumber: "",

  taxCode: "",

  pec: "",

  recipientCode: "",

  rea: "",

  professionalRegister: "",

  privacyEmail: "info@mironestudio.it",

  contactEmail: "info@mironestudio.it",

  phone: "+39 348 293 4197",

  phoneHref: "tel:+393482934197",

  address: {
    street: "Via XVI Traversa n. 53",
    postalCode: "95032",
    city: "Belpasso",
    province: "CT",
    country: "Italia",
    formatted:
      "Via XVI Traversa n. 53, 95032 Belpasso (CT), Italia",
  },

  website: "https://mironestudio.it",

  copyrightYear: new Date().getFullYear(),

  lastLegalUpdate: "29 luglio 2026",
} as const;

export type LegalConfig = typeof legal;