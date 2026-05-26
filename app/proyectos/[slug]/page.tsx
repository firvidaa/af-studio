import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/SectionLabel";
import { Gallery } from "@/components/Gallery";

type Params = { slug: string };

export function generateStaticParams() {
  return projects
    .filter((p): p is typeof p & { slug: string } => Boolean(p.slug))
    .map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — AF Studio`,
    description:
      project.description ??
      `${project.title} · ${project.category} · AF Studio`,
  };
}

export default function ProjectPage({ params }: { params: Params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const realProjects = projects.filter((p) => p.slug);
  const idx = realProjects.findIndex((p) => p.slug === project.slug);
  const next =
    realProjects.length > 1
      ? realProjects[(idx + 1) % realProjects.length]
      : null;

  const imageCount = project.images?.length ?? 0;

  return (
    <>
      <Navbar />
      <main>
        <section className="relative h-[78vh] min-h-[520px] overflow-hidden">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          )}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-ink-900/90 via-ink-900/50 to-transparent pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-ink-900 via-ink-900/70 to-transparent pointer-events-none"
          />

          <div className="absolute inset-x-0 top-0 pt-20 lg:pt-24">
            <div className="max-w-6xl mx-auto px-6 lg:px-10 flex items-center justify-between gap-6">
              <SectionLabel className="!text-ink-50">
                Proyectos / {project.code}
              </SectionLabel>
              <Link
                href="/#portfolio"
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-50 hover:text-lime transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
              >
                ← Volver
              </Link>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 pb-10 lg:pb-16">
            <div className="max-w-6xl mx-auto px-6 lg:px-10">
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.02] text-ink-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                {project.title}
              </h1>
            </div>
          </div>
        </section>

        <section className="bg-carbon border-t border-b border-white/10 py-8 lg:py-10">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
              <Spec label="Categoría" value={project.category} />
              <Spec label="Año" value={project.year ?? "—"} />
              <Spec label="Código" value={project.code} />
              <Spec
                label="Imágenes"
                value={String(imageCount).padStart(2, "0")}
              />
            </dl>
          </div>
        </section>

        <section className="pt-16 lg:pt-24 pb-16 lg:pb-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-3">
                <SectionLabel>Resumen</SectionLabel>
              </div>
              <div className="lg:col-span-8 lg:col-start-5">
                {project.description ? (
                  <p className="font-serif text-2xl md:text-3xl font-medium tracking-tight leading-[1.2]">
                    {project.description}
                  </p>
                ) : (
                  <p className="font-serif text-2xl md:text-3xl italic text-ink-300 tracking-tight leading-[1.2]">
                    Descripción pendiente.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {project.images && project.images.length > 0 && (
          <section className="border-t border-white/10 pt-10 lg:pt-14 pb-16 lg:pb-24">
            <div className="max-w-6xl mx-auto px-6 lg:px-10">
              <SectionLabel>
                Galería · {String(project.images.length).padStart(2, "0")}{" "}
                imágenes
              </SectionLabel>
              <div className="mt-10 lg:mt-12">
                <Gallery images={project.images} alt={project.title} />
              </div>
            </div>
          </section>
        )}

        <section className="border-t border-white/10 pt-10 lg:pt-14 pb-16 lg:pb-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <SectionLabel>Proceso · 04 fases</SectionLabel>
            <h3 className="mt-10 lg:mt-12 font-serif text-3xl md:text-4xl font-medium tracking-tight leading-[1.1] max-w-2xl">
              Del brief a la pieza,{" "}
              <em className="italic">en cuatro pasos</em>.
            </h3>
            <ol className="mt-12 lg:mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
              <Step
                n="01"
                label="Brief"
                body="Toma de medidas, fotos y referencia del original. Definimos plazo y presupuesto."
              />
              <Step
                n="02"
                label="Escaneo"
                body="Captura 3D de la pieza física. Salida lista para reconstruir en CAD."
              />
              <Step
                n="03"
                label="CAD / Print"
                body="Reconstrucción paramétrica e impresión técnica en PA12·CF o PETG-CF según uso."
              />
              <Step
                n="04"
                label="Validación"
                body="Prueba de ajuste y acabado. Iteración si hace falta. Pieza final lista para instalar."
              />
            </ol>
          </div>
        </section>

        {next && next.slug !== project.slug && (
          <section className="border-t border-white/10 pt-10 lg:pt-14 pb-24 lg:pb-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-10">
              <SectionLabel>Siguiente proyecto</SectionLabel>
              <Link
                href={`/proyectos/${next.slug}`}
                className="group mt-10 lg:mt-12 block"
              >
                <h3 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.02] group-hover:text-lime transition-colors">
                  {next.title}{" "}
                  <span
                    aria-hidden
                    className="inline-block transition-transform group-hover:translate-x-2"
                  >
                    →
                  </span>
                </h3>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-200">
                  {next.category}
                  {next.year && ` · ${next.year}`}
                  {` · ${next.code}`}
                </p>
              </Link>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-300">
        {label}
      </dt>
      <dd className="mt-2 font-mono text-sm md:text-base uppercase tracking-[0.1em] text-ink-50">
        {value}
      </dd>
    </div>
  );
}

function Step({
  n,
  label,
  body,
}: {
  n: string;
  label: string;
  body: string;
}) {
  return (
    <li className="border-t border-white/10 pt-5">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {n}
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-100">
          / {label}
        </span>
      </div>
      <p className="text-ink-200 leading-relaxed">{body}</p>
    </li>
  );
}
