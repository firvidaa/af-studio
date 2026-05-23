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
    title: "Renault 11 Turbo",
    category: "Restauración / Pieza única",
    year: "2025",
    description:
      "Escaneado, ingeniería inversa e impresión 3D de una pieza para el clásico francés. Reconstrucción CAD lista para reimpresión bajo demanda.",
    tags: ["3D Scan", "Ing. inversa", "PA12·CF"],
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
