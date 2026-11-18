import { useState } from "react";
import { WHATSAPP } from "../data/config";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-brand-soft">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/img/logo.png"
            alt="Las Dos Margaritas"
            className="h-12 w-auto"
          />
          <span className="font-display text-xl font-bold text-brand hidden sm:block">
            Las Dos Margaritas
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li><a href="#inicio" className="hover:text-brand transition">Inicio</a></li>
          <li><a href="#productos" className="hover:text-brand transition">Productos</a></li>
          <li><a href="#contacto" className="hover:text-brand transition">Contacto</a></li>
          <li>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="bg-brand text-white px-5 py-2.5 rounded-full hover:bg-brand-dark transition"
            >
              WhatsApp
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-brand"
          aria-label="Menú"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-sm font-medium bg-white">
          <li><a href="#inicio" onClick={() => setOpen(false)}>Inicio</a></li>
          <li><a href="#productos" onClick={() => setOpen(false)}>Productos</a></li>
          <li><a href="#contacto" onClick={() => setOpen(false)}>Contacto</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;