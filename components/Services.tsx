import { services } from "@/lib/data";
import { SectionLabel } from "./SectionLabel";

export function Services() {
  return (
    <section id="services" className="border-t border-white/10 pt-10 lg:pt-14 pb-24 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel>Servicios · 02</SectionLabel>
            <h2 className="mt-10 lg:mt-12 font-serif text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] max-w-2xl">
              Diseño que <em className="italic">funciona</em>,
              <br />
              de principio a fin.
            </h2>
          </div>
          <p className="text-ink-200 max-w-md">
            Cada pieza se diseña al gusto del cliente. Trabajo a medida,
            sin catálogos cerrados — del primer brief al entregable final.
          </p>
        </div>

        <ul className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <li
              key={service.title}
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-colors"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6">
                0{idx + 1} / Servicio
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight leading-tight mb-4">
                {service.title}
              </h3>
              <p className="text-ink-200 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 text-sm text-ink-100">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-accent mt-1 font-mono">+</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
