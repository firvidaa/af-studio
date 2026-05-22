# AF Studio

Sitio web de marca personal / estudio. Construido con Next.js 14 (App Router),
TypeScript y Tailwind CSS.

## Requisitos

- Node.js 18.18+ (recomendado 20 LTS)
- npm 10+ (o pnpm / yarn / bun)

## Arranque

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando         | Descripcion                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Servidor de desarrollo con hot reload |
| `npm run build` | Build de produccion                   |
| `npm start`     | Sirve el build de produccion          |
| `npm run lint`  | Linter (ESLint + reglas de Next)      |

## Estructura

```
af-studio/
├── app/
│   ├── layout.tsx       # Layout raiz + fuente + metadata
│   ├── page.tsx         # Home (compone todas las secciones)
│   └── globals.css      # Estilos base, Tailwind, grain
├── components/          # Una seccion por archivo
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts          # Contenido editable (servicios, proyectos, contacto)
├── public/              # Assets estaticos
├── tailwind.config.ts   # Paleta ink/accent + tipografia
└── next.config.mjs
```

## Personalizar contenido

Edita [`lib/data.ts`](./lib/data.ts) para cambiar servicios, proyectos y
datos de contacto sin tocar componentes.

Para cambiar la paleta o tipografia, edita
[`tailwind.config.ts`](./tailwind.config.ts) y
[`app/globals.css`](./app/globals.css).

## Despliegue

Recomendado: [Vercel](https://vercel.com) (cero configuracion).
Alternativas: Netlify, Cloudflare Pages, contenedor Node detras de Nginx.

## Notas de diseno

- **Paleta:** `ink` (escala de negros) + `accent` ambar `#f5b544`.
- **Tipografia:** Inter (Google Fonts) via `next/font`.
- **Tono:** oscuro, editorial, con grano sutil y un acento calido.
- **Accesibilidad:** contraste AA, navegacion teclado, semantic HTML.
- El formulario de contacto usa `mailto:` por defecto. Para produccion
  considera integrar Resend, Formspree o una API route propia.
