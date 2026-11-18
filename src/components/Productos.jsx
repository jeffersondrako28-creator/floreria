import { useState } from "react";
import { productos } from "../data/productos";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

function Productos() {
  const [seleccionado, setSeleccionado] = useState(null);

  return (
    <section id="productos" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <span className="text-brand font-semibold">Catálogo</span>
        <h2 className="font-display text-4xl font-bold mt-2">Nuestros productos</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productos.map((p) => (
          <ProductCard key={p.id} producto={p} onSelect={setSeleccionado} />
        ))}
      </div>

      {seleccionado && (
        <ProductModal
          key={seleccionado.id}
          producto={seleccionado}
          onClose={() => setSeleccionado(null)}
        />
      )}
    </section>
  );
}

export default Productos;