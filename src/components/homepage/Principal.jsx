"use client";
// components/ImageSlider.js
import { useState, useEffect } from "react";
import Botones from "./Botones";
import { slides } from "@/data/slide.principal";
import CardInfo from "./CardInformativo";

const Principal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  slides.map((slide) => {
    return slide.generos.sort();
  });

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
          <CardInfo
            titulo={slides[currentIndex].titulo}
            descripcion={slides[currentIndex].descripcion}
            generos={slides[currentIndex].generos}
          />
          <Botones
            Url={slides[currentIndex].Url}
            musica={slides[currentIndex].musica}
          />
        </div>
      </div>
      {/* Botones de navegación */}
      {/* <div className="slider-controls">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Principal;
