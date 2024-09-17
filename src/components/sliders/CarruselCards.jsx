"use client";
import { useEffect, useState } from "react";
import Cards from "./Cards";

const CarruselCards = () => {
  const [datosSliders, setDatosSliders] = useState([]);

  useEffect(() => {
    const cargarTemporada = async () => {
      const res = await fetch(`/api/sliders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setDatosSliders(data);
    };
    cargarTemporada();
  }, []);

  return (
    <div className="pt-20">
      {datosSliders.map((slider, index) => (
        <div
          id={slider.id}
          key={index}
          className="flex flex-col justify-center items-center pb-10 lg:mb-10 sm:mb-5 lg:pt-10 sm:pt-5"
        >
          <Cards titulo={slider.titulo} cards={slider.cards} Url={slider.url} />
        </div>
      ))}
    </div>
  );
};

export default CarruselCards;
