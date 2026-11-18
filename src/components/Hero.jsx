import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Cuando tengas las fotos, guárdalas en public/img/ y descomenta "imagen"
const slides = [
  {
    titulo: "Las Dos Margaritas",
    texto: "Flores que hablan por ti",
    // imagen: "/img/hero1.jpg",
  },
  {
    titulo: "Detalles que enamoran",
    texto: "Personaliza color, modelo y dedicatoria",
    // imagen: "/img/hero2.jpg",
  },
  {
    titulo: "Pídelo por WhatsApp",
    texto: "Rápido, fácil y sin registros",
    // imagen: "/img/hero3.jpg",
  },
];

function Hero() {
  return (
    <section id="inicio" className="pt-20">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-[70vh] min-h-[420px]"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.titulo}>
            <div
              className="relative h-full flex flex-col items-center justify-center text-center px-6 bg-linear-to-br from-brand-soft to-white bg-cover bg-center"
              style={s.imagen ? { backgroundImage: `url(${s.imagen})` } : undefined}
            >
              {s.imagen && <div className="absolute inset-0 bg-white/60" />}

              <div className="relative">
                <h1 className="font-display text-4xl md:text-6xl font-bold text-brand-dark">
                  {s.titulo}
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-700">{s.texto}</p>
                <a
                  href="#productos"
                  className="inline-block mt-8 bg-brand text-white px-8 py-3 rounded-full font-medium hover:bg-brand-dark transition"
                >
                  Ver productos
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;