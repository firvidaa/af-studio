export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-sm uppercase tracking-widest text-accent">
              Sobre AF Studio
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Un estudio pequeno.
              <br />
              Trabajos cuidados.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg text-ink-100 leading-relaxed">
            <p>
              AF Studio nace de una idea simple: las marcas mas honestas
              tambien pueden ser las mas modernas. Trabajo con empresas y
              fundadores que valoran el detalle y quieren un acompanamiento
              cercano, sin capas innecesarias.
            </p>
            <p>
              Cada proyecto se planifica de forma artesanal. No hay
              plantillas ni atajos: identidad, web y producto se piensan
              juntos para que el resultado sea coherente y duradero.
            </p>
            <p className="text-ink-200">
              Si tu marca esta empezando o necesita un nuevo capitulo,
              probablemente podamos ayudarte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
