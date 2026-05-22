import Link from "next/link";

const links = [
  { href: "#about", label: "Sobre" },
  { href: "#services", label: "Servicios" },
  { href: "#portfolio", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ink-900/60 border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight text-ink-50 flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-accent" />
          AF Studio
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm text-ink-200">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-ink-50 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime text-ink-900 text-sm font-medium hover:bg-lime-400 transition-colors"
        >
          Empezar proyecto
        </Link>
      </nav>
    </header>
  );
}
