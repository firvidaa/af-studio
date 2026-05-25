export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export type Project = {
  code: string;
  category: string;
  title: string;
  slug?: string;
  image?: string;
  images?: string[];
  href?: string;
  year?: string;
  description?: string;
  tags?: string[];
};

export const services: Service[] = [
  {
    title: "Escaneado",
    description:
      "Capturamos la geometría real de tu pieza o conjunto con escaneo 3D de alta precisión. Salida lista para CAD o ingeniería inversa.",
    bullets: [
      "Escaneo 3D de piezas y conjuntos",
      "Captura de superficies complejas",
      "Mallas listas para CAD",
    ],
  },
  {
    title: "Ingeniería inversa",
    description:
      "Reconstruimos en CAD paramétrico cualquier pieza física o malla escaneada — lista para modificar, validar o fabricar.",
    bullets: [
      "Reconstrucción CAD paramétrica",
      "Análisis dimensional",
      "Documentación técnica",
    ],
  },
  {
    title: "Prototipaje / Diseño final",
    description:
      "Del primer prototipo funcional a la pieza final lista para instalar. Validación física en cada iteración.",
    bullets: [
      "Prototipos funcionales",
      "Impresión 3D técnica (PA12·CF, PETG-CF…)",
      "Pieza final validada",
    ],
  },
];

export const projects: Project[] = [
  {
    code: "P-01 · 3DS-001",
    category: "Restauración",
    title: "Renault 11 Turbo",
    slug: "renault-11-turbo",
    year: "2026",
    image: "/projects/renault-11-turbo/IMG_20260414_154518.jpg",
    images: [
      "/projects/renault-11-turbo/IMG_20260414_154518.jpg",
      "/projects/renault-11-turbo/IMG_20260414_154407.jpg",
      "/projects/renault-11-turbo/IMG_20260414_154425.jpg",
      "/projects/renault-11-turbo/IMG_20260414_154440.jpg",
      "/projects/renault-11-turbo/IMG_20260414_154454.jpg",
      "/projects/renault-11-turbo/IMG_20260414_154505.jpg",
      "/projects/renault-11-turbo/IMG_20260414_154523.jpg",
      "/projects/renault-11-turbo/IMG_20260414_154539.jpg",
      "/projects/renault-11-turbo/IMG_20260417_113402_265.webp",
    ],
  },
  {
    code: "P-02 · 3DS-002",
    category: "Restauración",
    title: "Porsche 924 Turbo",
    slug: "porsche-924-turbo",
    year: "2026",
  },
  {
    code: "P-03 · AERO-001",
    category: "Aero",
    title: "Próximo proyecto",
  },
  {
    code: "P-04 · INT-001",
    category: "Interior",
    title: "Próximo proyecto",
  },
  {
    code: "P-05 · CHA-001",
    category: "Chasis",
    title: "Próximo proyecto",
  },
  {
    code: "P-06 · MEC-001",
    category: "Mecánico",
    title: "Próximo proyecto",
  },
];

export const contact = {
  email: "afirvidastudio@gmail.com",
  phone: "+34 694 295 842",
  phoneHref: "https://wa.me/34694295842",
  location: "Ourense · Galicia",
  social: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/afirvida.studio?igsh=MjNycmtwdWhwdm12",
    },
    {
      label: "Wallapop",
      href: "https://es.wallapop.com/user/alfredof-303495134",
    },
    { label: "WhatsApp", href: "https://wa.me/34694295842" },
  ],
};
