import { WHATSAPP, NEGOCIO } from "../data/config";

function Contacto() {
  const mensaje = "Hola, quisiera más información sobre sus arreglos florales.";

  return (
    <section id="contacto" className="bg-brand-soft py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-brand font-semibold">Contacto</span>
        <h2 className="font-display text-4xl font-bold mt-2">¿Tienes un pedido especial?</h2>
        <p className="mt-4 text-gray-600">
          Escríbenos por WhatsApp y coordinamos tu arreglo, el pago y la entrega.
        </p>

        <a
          href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition"
        >
          Escríbenos por WhatsApp
        </a>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 text-left">
          <div className="bg-white rounded-2xl p-6">
            <h3 className="font-display text-xl font-bold text-brand">Ubicación</h3>
            <p className="mt-2 text-gray-600">{NEGOCIO.direccion}</p>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <h3 className="font-display text-xl font-bold text-brand">Horario de atención</h3>
            <p className="mt-2 text-gray-600">{NEGOCIO.horario}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;