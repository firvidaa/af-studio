const items = [
  { value: "10", label: "Proyectos entregados" },
  { value: "5", label: "Coches en pista" },
  { value: "100%", label: "Trabajo a medida" },
  { value: "OU/GZ", label: "Base del estudio" },
];

export function Stats() {
  return (
    <section className="bg-carbon border-t border-b border-white/10 py-12 lg:py-14">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((it) => (
            <div key={it.label}>
              <div className="text-3xl md:text-4xl font-medium text-ink-50 tracking-tight">
                {it.value}
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-200 leading-relaxed">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
