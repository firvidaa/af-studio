import { projects } from "@/lib/data";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent">
              Proyectos
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-2xl">
              Una seleccion reciente.
            </h2>
          </div>
          <p className="text-ink-200 max-w-md">
            Marcas y productos en los que hemos trabajado durante el ultimo
            ano. Los nombres son ilustrativos hasta poblar casos reales.
          </p>
        </div>

        <ul className="divide-y divide-white/5 border-y border-white/5">
          {projects.map((p) => (
            <li
              key={p.title}
              className="group grid grid-cols-12 gap-4 py-8 items-baseline hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-lg"
            >
              <div className="col-span-12 md:col-span-5">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  {p.title}
                </h3>
              </div>
              <div className="col-span-6 md:col-span-3 text-ink-200 text-sm">
                {p.category}
              </div>
              <div className="col-span-6 md:col-span-3 text-ink-100 text-sm">
                {p.description}
              </div>
              <div className="col-span-12 md:col-span-1 text-right text-ink-200 text-sm font-mono">
                {p.year}
              </div>
              <div className="col-span-12 flex flex-wrap gap-2 mt-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full border border-white/10 text-ink-200"
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
