import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 glow pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-8 text-sm text-ink-200">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime" />
            </span>
            Disponible para nuevos proyectos
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tightest leading-[0.95] max-w-5xl">
          Disenamos marcas
          <br />
          y producto digital
          <br />
          <span className="text-accent">con caracter.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink-200 leading-relaxed">
          AF Studio es un estudio independiente que ayuda a empresas y
          fundadores a construir presencia digital cuidada, honesta y bien
          ejecutada — del primer trazo al codigo final.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-lime text-ink-900 font-medium hover:bg-lime-400 transition-colors"
          >
            Hablemos del proyecto
            <span aria-hidden>-&gt;</span>
          </Link>
          <Link
            href="#portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-ink-50 hover:bg-white/5 transition-colors"
          >
            Ver trabajos
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-ink-200">
          <Stat value="40+" label="Proyectos entregados" />
          <Stat value="8" label="Anos de experiencia" />
          <Stat value="100%" label="Trabajo a medida" />
          <Stat value="ES / EU" label="Base de operaciones" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l border-white/10 pl-4">
      <div className="text-3xl md:text-4xl font-semibold text-ink-50 tracking-tight">
        {value}
      </div>
      <div className="mt-1 text-sm">{label}</div>
    </div>
  );
}
