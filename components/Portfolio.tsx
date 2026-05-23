import { projects } from "@/lib/data";
import { SectionLabel } from "./SectionLabel";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel>Proyectos · 03</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] max-w-2xl">
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

        <ul className="divide-y divide-white/5 border-y border-white/5">
          {projects.map((p, idx) => (
            <li
              key={p.title}
              className="group grid grid-cols-12 gap-4 py-8 items-baseline hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-lg"
            >
              <div className="col-span-12 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-200">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight leading-tight">
                  {p.title}
                </h3>
              </div>
              <div className="col-span-6 md:col-span-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-200">
                {p.category}
              </div>
              <div className="col-span-6 md:col-span-3 text-ink-100 text-sm leading-relaxed">
                {p.description}
              </div>
              <div className="col-span-12 md:col-span-1 text-right font-mono text-[11px] uppercase tracking-[0.15em] text-ink-200">
                {p.year}
              </div>
              <div className="col-span-12 flex flex-wrap gap-2 mt-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-[0.15em] px-2 py-1 rounded-full border border-white/10 text-ink-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
