"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Props = {
  images: string[];
  alt: string;
};

const bentoSpans = [
  "lg:col-span-8",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-8",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-8",
  "lg:col-span-4",
];

export function Gallery({ images, alt }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const isOpen = openIdx !== null;

  const close = useCallback(() => setOpenIdx(null), []);
  const next = useCallback(
    () =>
      setOpenIdx((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () =>
      setOpenIdx((i) =>
        i === null ? null : (i - 1 + images.length) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    setLoaded(false);
  }, [openIdx]);

  useEffect(() => {
    if (!isOpen) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, next, prev]);

  const preloadIndices =
    openIdx === null
      ? []
      : Array.from(
          new Set([
            (openIdx + 1) % images.length,
            (openIdx - 1 + images.length) % images.length,
          ])
        ).filter((i) => i !== openIdx);

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 auto-rows-[260px] md:auto-rows-[280px] lg:auto-rows-[320px] gap-3 md:gap-4">
        {images.map((src, i) => (
          <li
            key={src}
            className={`relative ${bentoSpans[i % bentoSpans.length] ?? ""}`}
          >
            <button
              type="button"
              onClick={() => setOpenIdx(i)}
              aria-label={`Abrir imagen ${i + 1} de ${images.length}`}
              className="group absolute inset-0 rounded-lg border border-white/10 overflow-hidden cursor-zoom-in hover:border-white/20 transition-colors"
            >
              <Image
                src={src}
                alt={`${alt} — ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 60vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      {isOpen && openIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visor de galería"
          onClick={close}
          className="fixed inset-0 z-[60] bg-ink-900/95 backdrop-blur-md flex items-center justify-center"
        >
          <div className="absolute top-6 left-6 font-mono text-xs uppercase tracking-[0.2em] text-ink-200 pointer-events-none select-none">
            {String(openIdx + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Cerrar visor"
            className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 text-ink-50 hover:bg-white/[0.12] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh] mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[openIdx]}
              alt={`${alt} — ${openIdx + 1}`}
              fill
              sizes="(min-width: 1280px) 1280px, 100vw"
              className={`object-contain transition-opacity duration-200 ${
                loaded ? "opacity-100" : "opacity-30"
              }`}
              onLoad={() => setLoaded(true)}
              priority
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Imagen anterior"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/[0.06] border border-white/10 text-ink-50 hover:bg-white/[0.12] transition-colors"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Imagen siguiente"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/[0.06] border border-white/10 text-ink-50 hover:bg-white/[0.12] transition-colors"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div
            className="fixed -top-[9999px] -left-[9999px] pointer-events-none"
            aria-hidden
          >
            {preloadIndices.map((i) => (
              <Image
                key={`preload-${i}`}
                src={images[i]}
                alt=""
                width={1280}
                height={720}
                loading="eager"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
