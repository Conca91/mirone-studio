export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: number;
  featured: boolean;
  cover: string;
  beforeImage?: string;
  gallery: string[];
  excerpt: string;
  description: string;
  services: string[];
  area: string;
  status: string;
};

export const projects: Project[] = [
  {
    slug: "villa-mirone",

    title: "Villa Mirone",

    category: "Ristrutturazione",

    location: "Belpasso (CT)",

    year: 2026,

    featured: true,

    cover: "/images/projects/villa-mirone/cover.jpeg",

    beforeImage:
      "/images/projects/villa-mirone/statodifatto1.jpeg",

    gallery: [],

    excerpt:
      "Riqualificazione completa di un edificio esistente attraverso un intervento che coniuga conservazione, innovazione e qualità architettonica.",

    description:
      "Villa Mirone è un progetto di riqualificazione architettonica di un edificio esistente. L’intervento nasce dalla volontà di preservare l’identità dell’immobile, reinterpretandolo attraverso un linguaggio contemporaneo. La nuova distribuzione degli spazi, il rifacimento della copertura, il ridisegno dei prospetti e l’attenzione ai dettagli costruttivi trasformano una struttura ormai datata in una residenza moderna, luminosa ed efficiente, mantenendo un dialogo armonioso con il contesto urbano.",

    services: [
      "Rilievo",
      "Progettazione architettonica",
      "Progettazione esecutiva",
      "Pratiche edilizie",
      "Direzione lavori",
      "Interior design",
      "Render fotorealistici",
    ],

    area: "250 m² lotto e spazi esterni",

    status: "In corso",
  },

  {
    slug: "villa",

    title: "Villa",

    category: "Nuova Costruzione",

    location: "Belpasso (CT)",

    year: 2026,

    featured: true,

    cover:
      "/images/projects/villa-prezzavento/cover.jpeg",

    gallery: [
      "/images/projects/villa-prezzavento/01.jpeg",
    ],

    excerpt:
      "Villa unifamiliare di nuova costruzione immersa in un ampio lotto, progettata per valorizzare la luce naturale, il paesaggio e la continuità tra gli spazi interni ed esterni.",

    description:
      "Il progetto prevede la realizzazione di una villa unifamiliare di nuova costruzione inserita in un lotto di circa 10.000 m². L’abitazione si sviluppa su due livelli: un piano terra di circa 100 m² e un piano seminterrato di circa 120 m². L’architettura è caratterizzata da volumi essenziali, coperture a falde e ampie aperture vetrate, studiate per creare un rapporto diretto con il paesaggio circostante e garantire luminosità agli ambienti interni. La distribuzione degli spazi è stata concepita per coniugare funzionalità, comfort abitativo e qualità architettonica.",

    services: [
      "Progettazione architettonica",
      "Progettazione esecutiva",
      "Pratiche edilizie",
      "Direzione lavori",
      "Render fotorealistici",
    ],

    area:
      "100 m² piano terra · 120 m² piano seminterrato · lotto di circa 10.000 m²",

    status: "In corso",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}