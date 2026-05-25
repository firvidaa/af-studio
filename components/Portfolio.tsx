import { projects } from "@/lib/data";
import { SectionLabel } from "./SectionLabel";

export function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-white/10 pt-10 lg:pt-14 pb-24 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel>Proyectos · 03</SectionLabel>
            <h2 className="mt-10 lg:mt-12 font-serif text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] max-w-2xl">
              Trabajos
              <br />
              <em className="italic">seleccionados</em>.
            </h2>
          </div>
          <p className="text-ink-200 max-w-md">
            El estudio acaba de arrancar. Aquí irán los proyectos conforme
            entren nuevos coches al taller.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p) => (
            <li key={p.code}>
              <div className="group relative aspect-[4/3] rounded-lg border border-white/10 bg-white/[0.02] overflow-hidden hover:bg-white/[0.04] hover:border-white/20 transition-colors">
                {p.placeholder && (
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, transparent 0 12px, rgba(240,245,241,0.06) 12px 13px)",
                    }}
                  />
                )}

                <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-200">
                  {p.code}
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <p className="font-mono text-sm md:text-base uppercase tracking-[0.25em] text-ink-100">
                    {p.category}
                  </p>
                  {p.placeholder && (
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-300">
                      Foto pendiente
                    </p>
                  )}
                </div>

                <div
                  aria-hidden
                  className="absolute bottom-4 right-4 text-ink-200 group-hover:text-lime transition-colors text-lg"
                >
                  ↗
                </div>
              </div>

              <h3 className="mt-4 font-serif text-xl md:text-2xl font-medium tracking-tight leading-tight">
                {p.title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
