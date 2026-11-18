function ProductCard({ producto, onSelect }) {
  return (
    <article className="bg-white rounded-2xl border border-brand-soft shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col">
      <div className="aspect-square bg-brand-soft">
        {producto.imagen ? (
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            Ramo
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-xl font-bold">{producto.nombre}</h3>
        <p className="mt-2 text-sm text-gray-600 flex-1">{producto.descripcion}</p>
        <p className="mt-4 text-2xl font-bold text-brand">S/ {producto.precio}</p>
        <button
          onClick={() => onSelect(producto)}
          className="mt-4 bg-brand text-white py-3 rounded-full font-medium hover:bg-brand-dark transition"
        >
          Personalizar pedido
        </button>
      </div>
    </article>
  );
}

export default ProductCard;