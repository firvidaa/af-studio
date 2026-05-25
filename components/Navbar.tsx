"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { Logo } from "./Logo";
import { WallapopIcon } from "./WallapopIcon";

const links = [
  { href: "#about", label: "Sobre" },
  { href: "#services", label: "Servicios" },
  { href: "#portfolio", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ink-900/60 border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="AF Studio — Inicio"
          onClick={() => setOpen(false)}
          className="text-ink-50 hover:text-lime transition-colors shrink-0"
        >
          <Logo className="h-[3.6rem] w-auto" />
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

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/34694295842"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp"
              className="group inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 text-ink-50 shadow-sm transition-all duration-300 ease-out hover:scale-110 hover:bg-[#25D366] hover:text-white hover:border-transparent"
            >
              <SiWhatsapp className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/afirvida.studio?igsh=MjNycmtwdWhwdm12"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Mi perfil de Instagram"
              className="group inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 text-ink-50 shadow-sm transition-all duration-300 ease-out hover:scale-110 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white hover:border-transparent"
            >
              <SiInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://es.wallapop.com/user/alfredof-303495134"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Mi perfil de Wallapop"
              className="group inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 text-ink-50 shadow-sm transition-all duration-300 ease-out hover:scale-110 hover:bg-[#13C1AC] hover:text-white hover:border-transparent"
            >
              <WallapopIcon className="w-4 h-4" />
            </a>
          </div>

          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime text-ink-900 text-sm font-medium hover:bg-lime-400 transition-colors"
          >
            Empezar proyecto
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 text-ink-50 transition-colors hover:bg-white/[0.1]"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-ink-900/95 backdrop-blur-md">
          <ul className="max-w-6xl mx-auto px-6 py-4 space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-200 hover:text-ink-50 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 mt-3 border-t border-white/5">
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime text-ink-900 text-sm font-medium hover:bg-lime-400 transition-colors"
              >
                Empezar proyecto
                <span aria-hidden>→</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

