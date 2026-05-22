export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-sm text-ink-200">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-accent" />
          <span>AF Studio — {year}</span>
        </div>
        <p>Hecho a mano con Next.js + Tailwind.</p>
      </div>
    </footer>
  );
}
