# Bitácora — AF Studio

Documento vivo del proceso de diseño y construcción del sitio. Cada decisión queda registrada con su porqué para no perdernos entre sesiones.

---

## Resumen del proyecto

- **Qué es:** sitio personal / estudio de marca de Alfredo (AF Studio).
- **Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS.
- **Estructura:** una sola landing con secciones (Navbar, Hero, About, Services, Portfolio, Contact, Footer). Contenido editable en `lib/data.ts`.
- **Objetivo de marca:** identidad premium, editorial, con carácter — alejada del look "AI genérico".
- **Dirección visual actual (en exploración):** verde racing tipo Aston Martin F1.

## Decisiones de diseño

| Fecha       | Área   | Decisión                                                                 | Por qué |
| ----------- | ------ | ------------------------------------------------------------------------ | ------- |
| 2026-05-22  | Paleta | **AMR24 Modern** — base verde oscuro `#001A15`, racing green `#00665E`, lime eléctrico `#D4F542`, highlight `#00A88A`. | Dirección Aston Martin F1 elegida por el usuario. La variante "Modern" (vs. Heritage/Editorial) aporta más energía y carácter tecnológico sin perder el aire premium. Se separan dos roles: **racing green** = identidad/decoración (etiquetas, dots de marca, palabras destacadas), **lime** = acción (CTAs, status indicators, focos de formulario). |

### Tokens activos

```
ink-900   #001A15   fondo principal
ink-800   #002A22   superficies / tarjetas
ink-200   #A1B0AB   texto muted
ink-50    #F0F5F1   texto principal
accent    #00665E   racing green (marca)
lime      #D4F542   lime eléctrico (CTA)
highlight #00A88A   verde claro (glow del hero)
```

## Registro de iteraciones

> _Aquí se anotan opciones probadas/rechazadas con la razón, para no repetir caminos ya descartados._

- **2026-05-21 — Paleta:** iniciada exploración hacia verde racing (Aston Martin F1). Se evalúan 3 direcciones (Heritage, AMR Modern, Editorial híbrido).
- **2026-05-22 — Paleta:** elegida **AMR Modern (B)**. Descartadas:
  - *Heritage Racing Green:* demasiado sobria/oscura, perdía la chispa del lime característico.
  - *Editorial híbrido:* cambio demasiado tímido, no aprovechaba el viraje a verde.
- **2026-05-22 — Implementación paleta:** actualizado `tailwind.config.ts` (tokens `ink`, `accent`, nuevo `lime`, `highlight`), `app/globals.css` (vars `--background`, `--accent`, `--lime`, selección, glow del hero) y CTAs en `Hero.tsx`, `Navbar.tsx`, `Contact.tsx` (`bg-accent` → `bg-lime`, focos de inputs → `focus:border-lime`). El dot de marca en Navbar/Footer queda en `accent` (racing green); el "live indicator" del Hero pasa a `lime` (status activo).

## Estado actual (cierre 2026-05-22)

- **Paleta AMR24 Modern aplicada y verificada en el navegador** (`http://localhost:3000`). Compilación sin errores.
- Tokens activos en Tailwind: `ink` (escala verde-oscura), `accent` (racing green `#00665E`), `lime` (`#D4F542`), `highlight` (`#00A88A`).
- Componentes tocados: `tailwind.config.ts`, `app/globals.css`, `components/Hero.tsx`, `components/Navbar.tsx`, `components/Contact.tsx`.
- Componentes NO tocados (siguen usando `text-accent` para etiquetas/decoración, ahora en racing green): `About.tsx`, `Services.tsx`, `Portfolio.tsx`, `Footer.tsx`.
- Cambios sin commitear todavía.

## Próximos pasos (sesión de mañana)

1. **Feedback visual de la paleta** — confirmar si el lime tiene la intensidad correcta, si el fondo `#001A15` resulta demasiado verde o se queda corto, si el glow del hero (`#00A88A` 18%) funciona.
2. **Tipografía** — decidir si seguimos con Inter o introducimos:
   - una mono técnica (JetBrains Mono / IBM Plex Mono / Geist Mono) para números, datos y micro-copy estilo F1,
   - y/o un serif editorial para titulares (opcional).
3. **Hero — composición** — revisar copy, jerarquía y considerar elementos F1: numeración grande tipo "01 / 04", tickers, badge "AMR24-style".
4. **Grano y micro-detalles** — ajustar opacidad del grano, líneas divisorias, badges, hairlines.
5. **Marca "AF Studio"** — decidir si el wordmark con dot es suficiente o se diseña un monograma.
6. **Commit inicial** del rediseño de paleta una vez aprobado el set completo.

## Referencias e inspiraciones

- Aston Martin Aramco F1 — libreas 2023–2025 (verde racing + lime, tipografía técnica).
- Estética editorial de equipos F1: numeración grande, tickers, monoespaciada para datos.
