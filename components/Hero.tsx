import Link from "next/link";
import { Logo } from "./Logo";
import { SectionLabel } from "./SectionLabel";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 glow pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center gap-10 lg:gap-12 xl:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime" />
              </span>
              <SectionLabel>AF Studio / Diseño y impresión 3D</SectionLabel>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.02]">
              Diseño 3D
              <br />
              a medida para{" "}
              <em className="italic">motorsport</em>.
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink-200 leading-relaxed">
              Estudio independiente de diseño 3D y prototipaje para motorsport.
              Damos forma a tus ideas — del primer brief a la pieza final
              validada en pista.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-lime text-ink-900 font-medium hover:bg-lime-400 transition-colors"
              >
                Hablemos del proyecto
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-ink-50 hover:bg-white/5 transition-colors"
              >
                Ver trabajos
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-end items-center">
            <Logo className="h-[23.2rem] xl:h-[29rem] w-auto text-ink-50" />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value="10" label="Proyectos entregados" />
          <Stat value="5" label="Coches en pista" />
          <Stat value="100%" label="Trabajo a medida" />
          <Stat value="OU/GZ" label="Base del estudio" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="pt-4 border-t border-white/10">
      <div className="text-3xl md:text-4xl font-medium text-ink-50 tracking-tight">
        {value}
      </div>
      <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-200 leading-relaxed">
        {label}
      </div>
    </div>
  );
}
