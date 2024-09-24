"use client";
// components/ImageSlider.js
import { useState, useEffect } from "react";
import CardInformativo from "./CardInformativo";
import Botones from "./Botones";

const slides = [
  {
    image: "https://i.postimg.cc/zXqrXMPQ/juego-de-tronos-8x01-1556785704.jpg",
    titulo: "Juegos de Tronos",
    descripcion:
      "Donde los veranos duran décadas y los inviernos pueden durar una vida, los problemas acechan. Desde las maquinaciones del sur a las salvajes tierras del este...",
    generos: ["Drama", "Acción", "Fantasía", "Ciencia Ficción"],
    numeroTemp: 8,
    year: 2011,
    Url: "juegos-de-tronos",
  },
  {
    image: "https://i.postimg.cc/BQNCPYJb/ivar-carro-sangre-k39-C-1248x698-abc.jpg",
    titulo: "Vikingos",
    descripcion:
      "Vikingos sigue las aventuras de Ragnar Lothbrok, el mayor héroe de su época. La serie narra la saga de la banda de vikingos de Ragnar y su familia...",
    generos: ["Acción", "Suspenso"],
    numeroTemp: 6,
    year: 2013,
    Url: "vikingos",
  },
  {
    image: "https://i.postimg.cc/W1G4dwYd/T2.jpg",
    titulo: "Arsene Lupin III",
    descripcion:
      "Es el ladrón más buscado del mundo y habitualmente en sus aventuras él y sus compañeros frustran a otros criminales o ayudan a terceras personas.",
    generos: ["Misterio", "Drama", "Crimen", "Acción"],
    numeroTemp: 7,
    year: 1971,
    Url: "las-aventuras-de-arsene-lupin-iii",
  },
  // Agrega más objetos según sea necesario
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div
        className="slider-image"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgb(0, 0, 0)),url(${slides[currentIndex].image})`,

        }}
      >
        <div className="absolute top-[350px] lg:w-[800px] md:w-[800px] sm:w-[380px] lg:mx-10 md:mx-10 sm:mx-0">
          <CardInformativo
            titulo={slides[currentIndex].titulo}
            descripcion={slides[currentIndex].descripcion}
            generos={slides[currentIndex].generos}
            numeroTemp={slides[currentIndex].numeroTemp}
            year={slides[currentIndex].year}
          />
          <Botones Url={slides[currentIndex].Url} />
        </div>
      </div>

      <div className="slider-controls">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
