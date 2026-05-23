import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between font-mono text-[11px] uppercase tracking-[0.15em] text-ink-200">
        <div className="flex items-center gap-3">
          <Logo className="h-10 w-auto text-ink-50" />
          <span>— {year}</span>
        </div>
        <p>Hecho a mano con Next.js + Tailwind</p>
      </div>
    </footer>
  );
}
