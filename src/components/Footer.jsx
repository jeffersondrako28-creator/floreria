import { NEGOCIO } from "../data/config";

function Footer() {
  return (
    <footer className="bg-white border-t border-brand-soft py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-3">
          <img src="/img/logo.png" alt={NEGOCIO.nombre} className="h-10 w-auto" />
          <span className="font-display font-bold text-brand">{NEGOCIO.nombre}</span>
        </div>

        <div className="flex gap-6">
          <a href={NEGOCIO.instagram} target="_blank" rel="noreferrer" className="hover:text-brand transition">
            Instagram
          </a>
          <a href={NEGOCIO.facebook} target="_blank" rel="noreferrer" className="hover:text-brand transition">
            Facebook
          </a>
        </div>

        <p>© {new Date().getFullYear()} {NEGOCIO.nombre}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;