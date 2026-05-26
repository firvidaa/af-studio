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
- **2026-05-23 — Wallapop social link, iteración 1 (descartado):** primera versión en el Footer, icono custom (speech bubble + W con `var(--background)` como hueco), color reposo `text-ink-200`, hover `text-accent` racing green + giro 360° (700ms). El usuario pidió cambiarlo: moverlo al Header, hacerlo redondo, usar el verde propio de Wallapop (no nuestro accent), reemplazar el giro por una leve ampliación, y acercarlo al logo original.
- **2026-05-23 — Wallapop social link, iteración 2 (descartado):** botón `rounded-full` con speech bubble blanco genérico. Usuario aportó imagen del logo real (nube/blob con rizo arriba-derecha) y pidió: rounded-square (no círculo) y logo real.
- **2026-05-23 — Wallapop social link, iteración 3 (aplicada):** contenedor `rounded-2xl` (cuadrado redondeado tipo app icon, no círculo). Icono: outline de "nube" multi-bombe trazado en stroke blanco con el rizo característico arriba-derecha. Aproximación dibujada en SVG; **no es el path oficial**.
- **2026-05-23 — Wallapop social link, iteración 4 (aplicada):** usuario guardó la imagen oficial en `public/wallapop.png`. Sustituido el SVG dibujado por `<img src="/wallapop.png">` dentro del mismo contenedor `rounded-2xl overflow-hidden`. Tamaño bajado un 15%: `w-10 h-10` → `w-[2.125rem] h-[2.125rem]` (34px).
- **2026-05-23 — Instagram social link:** añadido al Navbar a la izquierda del Wallapop con el mismo patrón (`<img src="/instagram.png">`, `rounded-2xl`, `w-[2.125rem] h-[2.125rem]`, `hover:scale-110` 300ms). Los dos iconos sociales agrupados en un wrapper con `gap-2`, separados del CTA con `gap-4`. URL del perfil: `https://www.instagram.com/afirvida.studio?igsh=MjNycmtwdWhwdm12`. Pendiente: usuario debe guardar la imagen del logo de Instagram en `public/instagram.png` igual que hizo con Wallapop.
- **2026-05-23 — Iconos sociales ajuste tamaño:** Instagram + Wallapop bajados un 50% (de 34px a 17px = `w-[1.0625rem] h-[1.0625rem]`). Corner radius bajado de `rounded-2xl` a `rounded-lg` para mantener proporción visual a tamaño pequeño.
- **2026-05-23 — Iconos sociales rediseño (lucide-react):** instalado `lucide-react`. Cambio de patrón: en lugar de `<img>` con PNGs de app icons completos, ahora SVG glifos limpios sobre círculo (32px `w-8 h-8 rounded-full`). Orden: WhatsApp → Instagram → Wallapop.
  - **WhatsApp**: nuevo. Lucide `MessageCircle`, fondo `#25D366` (verde corporativo), icono blanco. URL pendiente del número del usuario (placeholder `wa.me/PLACEHOLDER` por ahora).
  - **Instagram**: Lucide `Instagram`, fondo `bg-white/[0.06]` + `border border-white/10` (círculo oscuro estilo captura), icono `text-ink-50`.
  - **Wallapop**: Lucide `Cloud` (no hay icono brand-específico de Wallapop en Lucide, Cloud es el match estilístico más cercano al logo nube). Mismo estilo dark circle que Instagram.
  - Hover: `scale-110` 300ms en los tres.
  - PNGs `public/instagram.png` y `public/wallapop.png` quedan en disco pero ya no referenciados; se pueden borrar cuando se confirme que el nuevo estilo gusta.
  - Razón del cambio: las PNGs eran app icons completos (cuadrado de marca + glifo), y al meterlos en círculo no daban el look "dark circle + glyph" del moodboard del usuario. SVG via lucide permite control total con CSS (color, tamaño, hover) y consistencia.
- **2026-05-23 — Bug lucide-react + Next 14:** primer `npm install lucide-react` trajo la versión `1.16.0` que el registry tiene tageada como `latest`, pero esa rama (v1.x, reescritura reciente) **no es compatible** con el barrel-optimizer automático de Next.js 14: provoca `Attempted import error: 'Instagram' is not exported from '__barrel_optimize__?names=…!=!lucide-react'` y rompe el render con `Unsupported Server Component type: undefined`. Solución: anclar a la última `0.x` (`lucide-react@0.577.0`) — exports estables y compatibles con el optimizer. URL de WhatsApp también cableada: `https://wa.me/34694295842`.
- **2026-05-23 — Iconos sociales hover unificado (referencia: catalogo-posio):** los tres iconos arrancan en estado oscuro neutral (`bg-white/[0.06]` + `border border-white/10` + `text-ink-50`) y solo cambian a su color de marca al hover. Patrón consistente con el sitio de referencia del usuario.
- **2026-05-23 — Iconos sociales calcados al brand:** instalado `react-icons` para usar simple-icons.
  - WhatsApp: `SiWhatsapp` (silueta del teléfono dentro del bocadillo).
  - Instagram: `SiInstagram` (cámara con punto, idéntica al brand).
  - Wallapop: simple-icons **no** incluye Wallapop. El usuario aportó su SVG oficial (`id1UK5xb9g_logos.svg`); extraídos los dos primeros subpaths (outer cloud + inner curl, ignorando los subpaths posteriores del wordmark "wallapop") en componente inline `WallapopIcon` dentro de `Navbar.tsx`. `viewBox="100 70 180 180"` para recortar solo la nube. `fill="currentColor"` para que el hover (`#13C1AC` confirmado por el usuario) lo controle CSS.
  - WhatsApp hover → `bg-[#25D366]` (verde brand) + icono blanco.
  - Instagram hover → gradient `from-[#F58529] via-[#DD2A7B] to-[#8134AF]` (naranja → rosa → púrpura, gradiente característico de IG) + icono blanco.
  - Wallapop hover → `bg-[#13C1AC]` (teal brand) + icono blanco.
  - Transición `transition-all duration-300 ease-out`, scale-110 al hover.
  - Razón: el verde permanente del WhatsApp competía visualmente con el lime del CTA. Con todos los iconos en estado calmo y solo activos al hover, la jerarquía del Navbar es: logo → links → iconos sociales (silenciosos) → CTA lime.
- **2026-05-23 — Inspiración nueva (PDF AF STUDIO · 3D Motorsport):** usuario aporta PDF con dirección editorial-técnica que le gusta (especialmente la tipografía). Decisión de alcance: **B — tipografía + reescritura del copy con misma voz editorial**, manteniendo el posicionamiento actual de estudio de marca / producto digital (NO pivote a 3D Motorsport).
- **2026-05-23 — Tipografía elegida:** **Fraunces + JetBrains Mono + Inter**. Fraunces (serif variable) para titulares y palabras acento en italic ("Diseñamos marcas con *carácter*"). JetBrains Mono para labels de sección, códigos técnicos y stats. Inter para cuerpo (ya integrada). Descartadas: Newsreader (más sobria, menos enfática), Instrument Serif (solo display, limita el sistema). Razón: Fraunces es variable y aguanta toda la jerarquía sin pelearse con tamaños.
- **2026-05-23 — Sistema editorial + voz, implementación:** aplicado a todas las secciones. Cambios:
  - `app/layout.tsx`: cargadas Fraunces (con italic) y JetBrains Mono vía `next/font/google`, expuestas como `--font-fraunces` y `--font-mono`.
  - `tailwind.config.ts`: añadidos `serif` → Fraunces, `mono` → JetBrains Mono, `display` → Fraunces. `sans` se queda en Inter.
  - **Nuevo componente** `components/SectionLabel.tsx`: hairline corta (`w-8 h-px`) + mono uppercase tracking 0.25em + color `accent` o `muted`. Reemplaza los `text-accent uppercase tracking-widest` antiguos.
  - **Hero**: pill "Disponible" fusionado con SectionLabel (`AF / Estudio · Disponible T26`), dot lime pulsante como status. Headline en Fraunces con italic en "carácter". Lead acortado. Stats con borde superior y label mono en lugar del borde lateral.
  - **About**: headline serif con italic en "cuidados".
  - **Services**: headline serif con italic en "funciona". Cards: número de servicio en mono ("01 / Servicio"), título en serif, "+" del bullet en mono.
  - **Portfolio**: headline serif con italic en "seleccionados". Filas con código de orden mono ("01", "02"…), categoría y año en mono uppercase, tags en mono.
  - **Contact**: headline serif con italic en "Hablemos.". Email en serif, ubicación y labels de form en mono.
  - **Footer**: todo el texto en mono uppercase.
  - **Encoding**: restaurados acentos castellanos correctos (estaban en ASCII).
- **Voz editorial — frases acento por sección (la palabra italic):** Hero · *carácter* · About · *cuidados* · Services · *funciona* · Portfolio · *seleccionados* · Contact · *Hablemos*. Una sola palabra italic por titular (regla del sistema, mantenerla).
- **2026-05-24 — Datos reales del estudio (Instagram + usuario):** confirmado nombre/positioning desde IG `afirvida.studio` → **AF STUDIO · Diseño y impresión 3D**. Ubicación real: **Ourense · Galicia**. Teléfono/WhatsApp: `+34 694 295 842`. Aplicado:
  - **Hero SectionLabel** → `AF Studio / Diseño y impresión 3D` (sustituye `AF / Motorsport · Disponible T26`).
  - **Hero stat #4** → valor `OU/GZ`, label `Base del estudio`.
  - **About** completamente reescrito: titular `Taller pequeño, piezas que aguantan` (italic en `aguantan`). Paragrafs sobre motorsport amateur/semi-pro, base en Ourense, proceso brief→CAD→prototipo→pieza final.
  - **Contact (`lib/data.ts`)**: `location: "Ourense · Galicia"`, añadidos `phone: "+34 694 295 842"` + `phoneHref: "https://wa.me/34694295842"`. `social` actualizado a Instagram (URL real) + Wallapop + WhatsApp (reemplaza LinkedIn/GitHub placeholder).
  - **Contact.tsx**: añadido segundo link grande (font-serif) con el número de teléfono debajo del email, también hover lime.
  - **Portfolio**: `projects` reducido a 1 entrada — `Renault 11 Turbo` (Restauración / Pieza única, 2025, tags `3D Scan · Ing. inversa · PA12·CF`). Side-copy reescrito a "El estudio acaba de arrancar. Aquí irán los proyectos conforme entren nuevos coches al taller."
  - **Email real cableado**: `afirvidastudio@gmail.com` en `lib/data.ts`. El link `mailto:` del Contact y el botón "Enviar mensaje" del form ya apuntan ahí.
  - **Pendiente del usuario**: confirmar descripción concreta de la pieza del Renault 11 Turbo si quiere afinar el texto.
- **2026-05-24 — Hero con logo AF grande a la derecha:** layout pasa a grid `lg:grid-cols-[minmax(0,1fr)_auto]`. Logo `text-ink-50` a `h-[23.2rem]` (lg) / `h-[29rem]` (xl) — el usuario pidió +45% sobre el inicial `h-64/h-80`. Headline reducido un punto en lg (`text-6xl xl:text-7xl`) para que respire al perder ancho. Mobile sigue siendo una sola columna sin logo grande en hero. Commit `deea4c4` pushed a `origin/main`. Repo público: `github.com/firvidaa/af-studio`. Vercel conectado para auto-deploy.
- **2026-05-24 — Rediseño de la transición Hero → About (huecos vacíos):** usuario marcó captura con ~256px de aire vacío entre stats del Hero y titular de About. Solución estructural:
  - **Stats extraídos del Hero** a su propio componente `components/Stats.tsx`. Renderizado como banda independiente en `app/page.tsx` entre `<Hero />` y `<About />`.
  - Banda Stats: `py-8 lg:py-12 border-b border-white/10`. Sin `border-t` — la sección fluye desde el Hero sin línea dura arriba; los hairlines pequeños de cada stat (`pt-4 border-t border-white/10`) ya marcan la entrada visual.
  - **Hero**: `pb` reducido de `pb-24 lg:pb-32` → `pb-12 lg:pb-16`.
  - **About**: ya no tiene `border-t border-white/5` (la banda Stats lo cumple). Padding cambiado de `py-24 lg:py-32` → `pt-16 lg:pt-24 pb-24 lg:pb-32`.
  - Resultado: la banda hace de bisagra editorial entre Hero y About en vez de stats orphan con ~256px de vacío detrás. Móvil queda igual de bien (no se tocó).
- **2026-05-25 (noche) — Detalle de fibra de carbono con tinte verde:**
  - Nueva utility `.bg-carbon` en `app/globals.css`: pattern CSS-only de dos linear-gradients a 27°/207° con stripes en `rgba(0,102,94,0.22)` (accent racing green a 22%), tile 14×14px, segundo gradient offset 7px = trenzado tipo carbon-fiber 2×2 twill. Peso 0KB extra.
  - **Aplicado como capa estática** en:
    - **Stats band** del home (`<section bg-carbon border-t border-b border-white/10>`) — refuerza el aire ficha técnica de las cifras.
    - **Spec strip** del detail page — mismo patrón, coherencia entre home y detalle.
    - **Portfolio placeholders** (cards sin imagen) — reemplaza las antiguas diagonal-stripes blancas por la textura de fibra. Más motorsport, menos "placeholder genérico".
  - **Aplicado como reveal-on-hover** en:
    - **Service cards** — `<div className="absolute inset-0 bg-carbon opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">` detrás del contenido. Card original tiene `overflow-hidden` + wrapper `<div className="relative">` para el contenido para que stacka encima del carbono. Al pasar el ratón, la fibra fade-in en 500ms.
  - **Decisiones de intensidad/dirección** que se descartaron en la brainstorming:
    - "Atmósfera global" (5-6% en toda la web) — demasiado sutil, no comunica nada.
    - "Acento dramático en una sola zona" (Proceso · 40%) — demasiado loud, rompe ritmo.
    - "Solo en borders" — pierde personalidad.
  - Recolorear/cambiar intensidad en el futuro: editar `rgba(0,102,94,0.22)` en `.bg-carbon` (subir alpha a 0.3-0.4 para más presencia, o cambiar el color RGB).
- **2026-05-25 (noche, redesign) — Página de detalle "Spec Sheet Editorial":**
  - Reescritura completa de `app/proyectos/[slug]/page.tsx` y galería en `components/Gallery.tsx` a bento.
  - **Hero full-bleed** (`h-[78vh] min-h-[520px]`): foto principal de borde a borde del viewport, `object-cover`, gradient scrim del bg al transparente. Overlays absolute para el label de sección + "← Volver" arriba, y el título serif XXL abajo. La navbar (semi-transparente con backdrop-blur) queda flotando sobre el hero — efecto cinematográfico.
  - **Spec strip** (`border-y border-white/10 py-8 lg:py-10`): banda full-width con 4 columnas `<dl>` mono uppercase — Categoría · Año · Código · Imágenes. Estilo ficha técnica F1. Cada `<Spec>` tiene `dt` (label en `text-ink-300` muy pequeño) y `dd` (valor en `text-ink-50`).
  - **Resumen**: grid 12-cols asimétrico. Col-3 con SectionLabel "Resumen", col-8 offset con la descripción en serif grande (text-2xl/3xl). Placeholder italic "Descripción pendiente." mientras no se rellene en data.
  - **Galería bento**: grid `lg:grid-cols-12 auto-rows-[260px] md:auto-rows-[280px] lg:auto-rows-[320px]` con spans variables. Patrón para 9 imágenes: 8/4 - 4/8 - 4/4/4 - 8/4 (4 rows). Cíclico para >9. `auto-rows` fija la altura — las imágenes usan `object-cover` y se recortan si hace falta. Cada tile es `<button>` que dispara el visor lightbox (mismo componente, no cambia).
  - **Proceso · 04 fases**: sección con SectionLabel "Proceso · 04 fases" + headline serif "Del brief a la pieza, *en cuatro pasos*" (italic en "en cuatro pasos") + `<ol>` grid 4 cols con steps `01 BRIEF · 02 ESCANEO · 03 CAD/PRINT · 04 VALIDACIÓN`, cada uno con número en `text-accent`, label en `text-ink-100` y body en `text-ink-200`. Replicable en cualquier proyecto futuro sin cambios.
  - **Siguiente proyecto**: bloque full-width con SectionLabel + título serif XL (text-5xl md:text-7xl) que va a lime al hover + flecha `→` que se desliza `translate-x-2` con el hover. Debajo, meta mono (categoría · año · código).
  - **Estructura técnica**: cada bloque es su propio `<section>` con border-t/b independientes; el hero rompe el `max-w-6xl` (full-bleed), el resto mantiene contenedor.
- **2026-05-25 (noche) — Visor de galería (lightbox custom):**
  - Nuevo componente cliente `components/Gallery.tsx` (`"use client"`). Sustituye los `<a target="_blank">` de los thumbnails por un visor in-page.
  - **Trigger**: click en cualquier thumbnail abre overlay full-screen (`fixed inset-0 z-[60] bg-ink-900/95 backdrop-blur-md`).
  - **Navegación**: botones laterales `ChevronLeft`/`ChevronRight` (lucide) con loop circular, también teclado `←` `→`.
  - **Cierre**: X arriba-derecha, ESC, o click fuera de la foto. Click sobre la foto NO cierra (stopPropagation).
  - **Contador**: `03 / 09` arriba-izquierda en mono uppercase.
  - **Foto**: `object-contain` para que se vea entera, `max-w-6xl max-h-[85vh]`.
  - **Scroll lock**: `document.body.style.overflow = "hidden"` mientras está abierto. Restaurado al cerrar.
  - **A11y**: `role="dialog" aria-modal="true" aria-label`, todos los botones con `aria-label`.
  - **Hover thumbnails**: `cursor-zoom-in` + sutil `scale-[1.03]` con `transition-transform duration-500`.
  - Decisión consciente de NO incluir focus trap (el modal funciona con ESC + teclado básico, focus trap añade complejidad — añadir solo si surge en uso real).
  - La imagen principal del top de la página de detalle NO es clickable (de momento) — el usuario puede scrollear a la galería para abrir el visor. Si se quiere clickable, requiere lift state o context — escalado a iteración futura.
- **2026-05-25 (tarde) — Página de detalle por proyecto (`/proyectos/[slug]`):**
  - Nueva ruta dinámica `app/proyectos/[slug]/page.tsx` con `generateStaticParams` (build estático, Vercel cachea).
  - `Project` type añade `slug?: string`. Renault y Porsche reciben slug + `year: "2026"`.
  - **Portfolio refactor**: `ProjectCard` extraído como sub-componente. Tarjetas con `slug` van envueltas en `<Link>` (cursor pointer, título cambia a lime al hover). Sin slug = placeholder sin link, flecha ↗ oculta para no engañar.
  - **Detalle page**: SectionLabel `Proyectos / [code]` + "← Volver" arriba, título serif grande, meta mono (categoría · año), foto principal aspect 16:10, bloque Descripción (placeholder italic "Descripción pendiente" mientras no se rellene en data), banda Galería con grid de todas las imágenes (click abre el original en nueva pestaña), footer con "Siguiente proyecto →".
  - Para el Renault 11 Turbo: 9 fotos en `public/projects/renault-11-turbo/`, principal `IMG_20260414_154518.jpg`, las 9 listadas en `images[]` para la galería.
  - Para el Porsche 924 Turbo: slug y year, sin imagen ni galería todavía. La página de detalle existirá pero estará casi vacía.
- **2026-05-25 (sesión tarde) — Iconos sociales del Contact equiparados al Navbar:**
  - `WallapopIcon` extraído de `Navbar.tsx` a su propio archivo `components/WallapopIcon.tsx` (reutilizable). Navbar lo importa, ya no contiene la función local.
  - **Contact**: los pills de texto (Instagram · Wallapop · WhatsApp) sustituidos por **3 botones-icono circulares** con el mismo patrón que el navbar: `w-10 h-10 rounded-full bg-white/[0.06] border border-white/10`, hover a color de marca + `text-white` + `scale-110` con `transition-all duration-300`.
  - Tamaño en Contact: 40px (vs 32px del navbar) — la sección tiene más espacio y los iconos ganan presencia. Icono interior `w-5 h-5`.
  - Orden en Contact: WhatsApp → Instagram → Wallapop (mismo que en el navbar para consistencia, aunque `contact.social` en data sigue en orden Instagram-Wallapop-WhatsApp).
  - Hover por icono: WhatsApp `#25D366` · Instagram gradiente `#F58529 → #DD2A7B → #8134AF` · Wallapop `#13C1AC`.
- **2026-05-25 (sesión tarde) — Polish C: hairlines uniformes en todas las transiciones de sección:**
  - **Border weight unificado:** `border-white/5` → `border-white/10` en Services, Portfolio, Contact y Footer. Mismo peso visible que la banda Stats — las rayitas se perciben como decisión editorial, no accidente.
  - **Padding superior comprimido:** `py-24 lg:py-32` → `pt-10 lg:pt-14 pb-24 lg:pb-32` en About, Services, Portfolio y Contact. La SectionLabel se acerca al divider (~40-56px abajo de la línea, antes ~96-128px). Sensación de "label adherida a la frontera".
  - **Más aire entre label y h2:** `mt-6` → `mt-10 lg:mt-12` en los h2 de About, Services, Portfolio y Contact. Compensa el padding perdido arriba y da respiración al titular.
  - About también ajusta su `pt-16 lg:pt-24` → `pt-10 lg:pt-14` por consistencia (aunque no tiene `border-t` — la `border-b` de Stats arriba la sirve).
  - Resultado: ritmo editorial idéntico en las 5 transiciones (Hero→Stats→About→Services→Portfolio→Contact→Footer). Sin añadir contenido nuevo, solo afinando el sistema existente.
- **2026-05-25 — Banda Stats: líneas full-width y padding simétrico:**
  - Iteración 1 (descartada): hairlines individuales arriba de cada stat (4 cortas) → usuario pidió línea continua.
  - Iteración 2 (descartada): `border-t` movido al grid container → línea continua pero confinada al `max-w-6xl` (no llega a los bordes del viewport como la `border-b` de la sección).
  - **Iteración 3 (aplicada):** `border-t` y `border-b` ambos en el `<section>` (full-width edge-to-edge). Eliminado `pt-4` del grid. Padding sección `py-12 lg:py-14` para separación simétrica arriba/abajo de las cifras. Resultado: dos rayitas paralelas de punta a punta con las cifras centradas verticalmente entre ellas.
- **2026-05-24 — Portfolio: grid de tarjetas con placeholders estilo PDF:**
  - Layout pasa de lista (1 fila por proyecto) a **grid `sm:grid-cols-2 lg:grid-cols-3`** con tarjetas aspect `4/3`.
  - Cada tarjeta: borde sutil, `bg-white/[0.02]`, overlay de **diagonal stripes** vía CSS `repeating-linear-gradient` (135deg, opacity 0.06) cuando es placeholder.
  - Anatomía: código mono top-left (`P-01 · 3DS-001`) · categoría grande centrada en mono uppercase · "Foto pendiente" debajo si placeholder · flecha `↗` bottom-right que pasa a lime al hover.
  - Título serif **debajo** de la tarjeta (Renault 11 Turbo / Porsche 924 Turbo / Próximo proyecto).
  - **Eliminada la meta line** que iba debajo (materiales, horas) por petición del usuario. Solo título.
  - **6 proyectos** en `lib/data.ts`: 2 reales (Renault 11 Turbo · Porsche 924 Turbo, ambos `Restauración`) + 4 placeholders por categoría (Aero · Interior · Chasis · Mecánico).
  - `Project` type simplificado: `code`, `category`, `title`, `placeholder` (campos opcionales `year`, `description`, `tags` se mantienen para detalle futuro).
- **2026-05-24 — Navbar mobile-first (`Navbar.tsx` → "use client"):**
  - Iconos sociales (WhatsApp · Instagram · Wallapop) ahora **siempre visibles** en cualquier viewport (antes `hidden md:flex`).
  - CTA "Empezar proyecto" sigue oculto en mobile (vive dentro del drawer del hamburger).
  - Añadido botón hamburger (`Menu`/`X` de lucide-react) solo visible `md:hidden`. Toggle con `useState`.
  - Drawer mobile: panel debajo del navbar con `bg-ink-900/95 backdrop-blur-md`, lista de nav links en font-mono uppercase tracking, separador y CTA al final.
  - Click en cualquier link del drawer cierra el menú (`setOpen(false)`).
  - Click en el logo AF también cierra el drawer si está abierto.
  - **Decisión sobre AF grande del Hero en mobile**: se mantiene `hidden lg:flex`. Razón: el navbar ya muestra el wordmark AF en mobile, duplicar la marca grande competiría con el titular y robaría altura. Si el usuario lo quiere distinto, fácil de añadir como variante pequeña.
- **2026-05-24 — Pivot de posicionamiento a motorsport (decisión del usuario):** el estudio pasa de "marca + producto digital" a **diseño 3D + prototipaje para motorsport**. Cambios aplicados:
  - **Hero**: SectionLabel `AF / Motorsport · Disponible T26`. Headline reescrito a `Diseño 3D a medida para motorsport` (italic en `motorsport`). Lead reescrito hacia 3D + prototipaje + validación en pista.
  - **Hero stats**: `10 / Proyectos entregados` · `5 / Coches en pista` · `100% / Trabajo a medida` · `BCN / Base del estudio` (los valores son provisionales, fáciles de ajustar en `Hero.tsx`).
  - **Servicios (`lib/data.ts`)** reescritos por completo: `Escaneado` · `Ingeniería inversa` · `Prototipaje / Diseño final`. Cada uno con descripción técnica + 3 bullets. Materiales mencionados: PA12·CF, PETG-CF.
  - **Services side copy**: cambio a "Cada pieza se diseña al gusto del cliente. Trabajo a medida, sin catálogos cerrados — del primer brief al entregable final."
  - **Pendiente revisar** para coherencia con el nuevo posicionamiento: About (sigue hablando de "marcas honestas/modernas") y Contact (puede mantenerse). Portfolio sigue con casos genéricos en `lib/data.ts` (Norte Estudio, Helio…), habrá que poblar con proyectos reales de motorsport.

## Decisiones de diseño — entrada 2026-05-23

| Fecha       | Área   | Decisión | Por qué |
| ----------- | ------ | -------- | ------- |
| 2026-05-23  | Marca  | Logo "AF Studio" provisto por el usuario (SVG). Se usa solo el wordmark **AF** (sin "studio") como mark del Navbar (h-[3.6rem], +20% sobre h-12) y del Footer (h-10). Inline SVG con `fill="currentColor"` para que herede color desde CSS. | El SVG original es una placa vertical 720×1280 con las letras carveadas. Sobre fondo verde oscuro la placa negra sería invisible; extrayendo solo los sub-paths de A y F (en `components/Logo.tsx`) obtenemos un wordmark coloreable. La parte "studio" se descarta a petición del usuario. |
| 2026-05-23  | Social | Enlace al perfil de Wallapop (`alfredof-303495134`) en el Footer, como icono custom (speech bubble + W). Estado normal `text-ink-200`. Hover: pasa a `text-accent` (racing green) y rota 360° en 700ms. | El usuario sólo pidió "verde" — se usa el **accent** racing green de marca (no el lime de CTAs) porque Wallapop tiene paleta verdosa y `accent` lee como su color natural. El giro 360 es el rasgo lúdico pedido. |

## Estado actual (cierre 2026-05-25)

### Lo que está en producción (Vercel, auto-deploy desde `origin/main`)

- **Paleta AMR24 Modern**, **logo AF custom** en Navbar + Footer, **tipografía editorial completa** (Fraunces + JetBrains Mono + Inter), **sistema editorial** (`SectionLabel`, voz "una palabra italic por sección"), **pivot motorsport** (servicios = Escaneado / Ing. inversa / Prototipaje, base Ourense · Galicia, contacto real con `afirvidastudio@gmail.com` + `+34 694 295 842`).
- **Navbar mobile-first** (`"use client"`): iconos sociales siempre visibles + hamburger drawer con nav links y CTA. Tres iconos sociales (WhatsApp · Instagram · Wallapop) neutrales por defecto, color de marca al hover.
- **Hero**: SectionLabel "AF Studio / Diseño y impresión 3D", headline serif con italic en *motorsport*, AF logo grande a la derecha (`h-[23.2rem]` lg / `h-[29rem]` xl). Mobile: una columna sin AF grande (navbar ya tiene el wordmark).
- **Stats** extraídos del Hero a banda independiente entre Hero y About — `border-t border-b` full-width, padding simétrico `py-12 lg:py-14`. 4 cifras: 10 / 5 / 100% / OU/GZ.
- **Portfolio**: grid `sm:grid-cols-2 lg:grid-cols-3` de 6 tarjetas con diagonal stripes + categoría centrada + "Foto pendiente" + flecha ↗ que va a lime al hover. Reales: Renault 11 Turbo · Porsche 924 Turbo. Placeholders por categoría: Aero · Interior · Chasis · Mecánico.
- **Repo**: `github.com/firvidaa/af-studio` (público). **Vercel**: auto-deploy desde `main`.

### Sin commitear al cerrar

- `components/Stats.tsx` (nuevo)
- `components/Hero.tsx` (pb reducido, stats extraídos, helper `Stat` eliminado)
- `components/About.tsx` (`border-t` quitado, padding asimétrico pt/pb)
- `app/page.tsx` (import + render de `<Stats />`)
- `docs/bitacora.md` (esta misma)

## Próximos pasos (sesión de mañana)

1. **Empujar el bloque de hoy** (banda Stats + transición Hero→About) — un solo commit, mensaje sugerido: `feat(layout): extract stats into bridge band between Hero and About`.
2. **Pendiente de la lista anterior**:
   - C. Polish de hairlines en el resto de transiciones de sección (About→Services, Services→Portfolio, Portfolio→Contact) — ahora la transición Hero→About queda muy resuelta, las otras todavía son `border-t border-white/5` genéricas y rompen el ritmo.
   - D. Repaso fino de copy (About, Contact) tras pivot motorsport — buscar últimas incoherencias.
   - E. Largo plazo: tratamiento del grano del fondo, monograma de marca AF.
3. **Variantes mobile del Hero**: el AF grande sigue `hidden lg:flex`. Si tras revisar mobile el hero se siente vacío, decidir si meter una variante pequeña.
4. **Renault 11 Turbo / Porsche 924 Turbo**: pendiente descripción concreta de las piezas. Cuando haya fotos, sustituir el placeholder de la tarjeta por una imagen real (flag `placeholder: false` en `lib/data.ts`).

## Estado anterior (cierre 2026-05-23) — referencia histórica

### Lo que está funcionando en local

- **Paleta AMR24 Modern** aplicada y verificada (commits `5d77c01` + `6d4c068`).
- **Logo AF** custom (extraído del SVG del usuario) en Navbar (`h-[3.6rem]`) y Footer (`h-10`), usando `currentColor` para tomar color del CSS.
- **Tipografía editorial completa:** Fraunces (serif variable con italic) + JetBrains Mono + Inter, todas vía `next/font/google`. Tokens Tailwind: `font-sans` (Inter), `font-serif`/`font-display` (Fraunces), `font-mono` (JetBrains Mono).
- **Componente `SectionLabel`** reutilizable (hairline `w-8 h-px` + mono uppercase tracking 0.25em + color accent/muted) — usado en Hero, About, Services, Portfolio, Contact.
- **Voz editorial:** titulares en Fraunces con UNA palabra italic por sección — Hero · *carácter* · About · *cuidados* · Services · *funciona* · Portfolio · *seleccionados* · Contact · *Hablemos*.
- **Hero rediseñado:** pill "Disponible" fusionado con SectionLabel (dot lime pulsante + `── AF / Estudio · Disponible T26`). Stats con borde superior + label mono uppercase.
- **Portfolio rediseñado:** filas con código `01`/`02` en mono, categoría y año en mono uppercase, tags en mono.
- **Iconos sociales en el Navbar (WhatsApp · Instagram · Wallapop)** — círculos `w-8 h-8 rounded-full` en estado oscuro neutral (`bg-white/[0.06]` + `border-white/10`), pintan color de marca solo al hover con `scale-110`:
  - WhatsApp → `#25D366`, glifo `SiWhatsapp` (react-icons/si), `wa.me/34694295842`.
  - Instagram → gradiente `#F58529 → #DD2A7B → #8134AF`, glifo `SiInstagram`, perfil `afirvida.studio`.
  - Wallapop → `#13C1AC`, glifo custom `WallapopIcon` (nube extraída del SVG oficial aportado por el usuario, solo los dos subpaths del logo, viewBox `100 70 180 180`), perfil `alfredof-303495134`.
- Dependencias añadidas (sin commitear): `lucide-react@0.577.0`, `react-icons` (última).

### Nota técnica importante

- **No instalar `lucide-react@latest` en bruto** — el tag `latest` apunta a `1.16.0` que rompe el barrel-optimizer de Next 14. Mantener anclado a la rama `0.x` (`^0.577.0`).

### Sin commitear (acumulado desde el último commit `6d4c068`)

- `app/layout.tsx` — fuentes Fraunces + JetBrains Mono añadidas
- `tailwind.config.ts` — tokens `serif`, `mono`, `display`
- `components/Hero.tsx`, `About.tsx`, `Services.tsx`, `Portfolio.tsx`, `Contact.tsx`, `Footer.tsx`, `Navbar.tsx` — sistema editorial + voz
- `components/SectionLabel.tsx` (nuevo)
- `components/Logo.tsx` (versión final del logo AF)
- `package.json` + `package-lock.json` — `lucide-react`, `react-icons`
- `public/instagram.png`, `public/wallapop.png` (ya no referenciados desde código pero quedan en disco — decidir si borrar mañana)
- `docs/bitacora.md` (esta misma)

## Próximos pasos (sesión de mañana)

1. **Revisar visualmente todas las secciones con la voz nueva** — ¿el peso de Fraunces se ve bien en cada h2? ¿el italic se distingue del regular en cada caso? ¿los tamaños de titular en About/Services/Portfolio están bien?
2. **Considerar afinar el viewBox del WallapopIcon** si la nube queda descentrada o pequeña en el círculo de 32px.
3. **Decidir si borrar `public/instagram.png` y `public/wallapop.png`** (ya no referenciados, ocupan espacio).
4. **Hairlines en separadores entre secciones** — actualmente cada sección usa `border-t border-white/5`; mirar si se puede afinar al estilo PDF (hairlines más sutiles o con tratamiento mono al inicio).
5. **Hero — tratamiento de números** — los stats están en sans (Inter); considerar si pasarlos a mono o mantener Inter para variedad tipográfica.
6. **Commit del bloque completo** — el rediseño tipográfico + sistema editorial + iconos sociales en un commit limpio. Mensaje sugerido: `feat(design): adopt editorial typography (Fraunces + JetBrains Mono) and social icon system`. Idealmente partido en dos commits: uno para tipografía+voz, otro para iconos sociales.
7. **Mobile/responsive** — verificar que los iconos sociales del Navbar aparezcan también en móvil (ahora están detrás de `hidden md:flex`).
8. **Plan a más largo plazo** — tratamiento del grano, monograma de marca, ya quedaron pendientes del cierre anterior.

## Referencias e inspiraciones

- Aston Martin Aramco F1 — libreas 2023–2025 (verde racing + lime, tipografía técnica).
- Estética editorial de equipos F1: numeración grande, tickers, monoespaciada para datos.
