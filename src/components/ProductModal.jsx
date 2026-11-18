import { useState } from "react";
import { WHATSAPP } from "../data/config";

function ProductModal({ producto, onClose }) {
  const [cantidad, setCantidad] = useState(1);
  const [color, setColor] = useState(producto.colores[0]);
  const [modelo, setModelo] = useState(producto.modelos[0]);
  const [dedicatoria, setDedicatoria] = useState("");

  const total = producto.precio * cantidad;

  const enviarPedido = () => {
    const mensaje = `Hola, quiero hacer un pedido en Las Dos Margaritas:

*Producto:* ${producto.nombre}
*Cantidad:* ${cantidad}
*Color:* ${color}
*Modelo:* ${modelo}
*Dedicatoria:* ${dedicatoria.trim() || "Sin dedicatoria"}
*Total:* S/ ${total}`;

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  const opcion = (activo) =>
    `px-4 py-2 rounded-full border text-sm transition ${
      activo
        ? "bg-brand text-white border-brand"
        : "border-gray-300 hover:border-brand"
    }`;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-display text-2xl font-bold">{producto.nombre}</h3>
            <p className="text-brand font-bold text-xl">S/ {producto.precio}</p>
          </div>
          <button onClick={onClose} className="text-2xl text-gray-400" aria-label="Cerrar">
            ✕
          </button>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold mb-2">Cantidad</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCantidad(Math.max(1, cantidad - 1))}
              className="w-10 h-10 rounded-full border border-gray-300 text-xl"
            >
              −
            </button>
            <span className="text-lg font-semibold w-6 text-center">{cantidad}</span>
            <button
              onClick={() => setCantidad(cantidad + 1)}
              className="w-10 h-10 rounded-full border border-gray-300 text-xl"
            >
              +
            </button>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold mb-2">Color</p>
          <div className="flex flex-wrap gap-2">
            {producto.colores.map((c) => (
              <button key={c} onClick={() => setColor(c)} className={opcion(color === c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold mb-2">Modelo</p>
          <div className="flex flex-wrap gap-2">
            {producto.modelos.map((m) => (
              <button key={m} onClick={() => setModelo(m)} className={opcion(modelo === m)}>
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <label className="text-sm font-semibold mb-2 block">Dedicatoria (opcional)</label>
          <textarea
            value={dedicatoria}
            onChange={(e) => setDedicatoria(e.target.value)}
            rows={3}
            maxLength={200}
            placeholder="Escribe el mensaje que irá en la tarjeta"
            className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:border-brand"
          />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-gray-600">Total</span>
          <span className="text-2xl font-bold text-brand">S/ {total}</span>
        </div>

        <button
          onClick={enviarPedido}
          className="mt-4 w-full bg-green-600 text-white py-3 rounded-full font-medium hover:bg-green-700 transition"
        >
          Pedir por WhatsApp
        </button>
      </div>
    </div>
  );
}

export default ProductModal;