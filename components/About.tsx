import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section id="about" className="pt-10 lg:pt-14 pb-24 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionLabel>Sobre · 01</SectionLabel>
            <h2 className="mt-10 lg:mt-12 font-serif text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
              Taller pequeño,
              <br />
              piezas que <em className="italic">aguantan</em>.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg text-ink-100 leading-relaxed">
            <p>
              AF Studio es un pequeño taller de diseño e impresión 3D con
              base en Ourense, Galicia. Trabajamos con pilotos, equipos
              amateur y entusiastas del motorsport que necesitan piezas a
              medida — desde recambios descatalogados a prototipos
              funcionales.
            </p>
            <p>
              Cada proyecto se valida físicamente antes de salir del
              estudio. No hay catálogos cerrados: pasamos del brief o el
              escaneo al CAD, del CAD al prototipo, y del prototipo a la
              pieza final.
            </p>
            <p className="text-ink-200">
              Si tienes un coche, una idea, o una pieza imposible de
              encontrar — probablemente podamos ayudarte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
