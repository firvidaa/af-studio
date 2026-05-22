import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent">
              Servicios
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-2xl">
              Lo que hacemos, de principio a fin.
            </h2>
          </div>
          <p className="text-ink-200 max-w-md">
            Nos integramos en cada fase del proyecto. Puedes contratarnos
            por entregables concretos o como direccion creativa continua.
          </p>
        </div>

        <ul className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <li
              key={service.title}
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-colors"
            >
              <div className="text-accent text-sm font-mono mb-6">
                0{idx + 1}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-3">
                {service.title}
              </h3>
              <p className="text-ink-200 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 text-sm text-ink-100">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-accent mt-1">+</span>
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
