export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  href?: string;
};

export const services: Service[] = [
  {
    title: "Identidad de marca",
    description:
      "Disenamos sistemas visuales solidos: logo, paleta, tipografia, voz y guidelines.",
    bullets: ["Naming y posicionamiento", "Logo y sistema visual", "Brand guidelines"],
  },
  {
    title: "Web y producto digital",
    description:
      "Sitios web rapidos, accesibles y orientados a conversion. Tambien apps a medida.",
    bullets: ["Landing pages", "Web corporativa", "Productos a medida"],
  },
  {
    title: "Estrategia y direccion",
    description:
      "Acompano a equipos en la definicion de producto, roadmap y experiencia.",
    bullets: ["Auditoria de marca", "Roadmap de producto", "Direccion de proyecto"],
  },
];

export const projects: Project[] = [
  {
    title: "Norte Estudio",
    category: "Identidad + Web",
    year: "2025",
    description:
      "Sistema de marca y sitio web para un estudio de arquitectura del norte.",
    tags: ["Branding", "Next.js", "CMS"],
  },
  {
    title: "Helio",
    category: "Producto digital",
    year: "2025",
    description:
      "App SaaS para gestion energetica de pequenas comunidades. Diseno de producto + frontend.",
    tags: ["Producto", "UX", "Dashboard"],
  },
  {
    title: "Casa Mar",
    category: "Web a medida",
    year: "2024",
    description:
      "Sitio editorial para una marca gastronomica costera, con catalogo y reservas.",
    tags: ["Web", "Editorial", "E-commerce"],
  },
  {
    title: "Tipo Foundry",
    category: "Identidad",
    year: "2024",
    description:
      "Identidad y especimen digital para una pequena fundicion tipografica independiente.",
    tags: ["Branding", "Tipografia"],
  },
];

export const contact = {
  email: "hola@afstudio.example",
  location: "Espana",
  social: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
};
