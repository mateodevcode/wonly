"use client";
import { carruselSliders } from "@/data/carrusel.sliders";
import { useEffect, useState } from "react";
import Cards from "./Cards";

const CarruselCards = () => {
  const [datosPeliculas, setDatosPeliculas] = useState([]);

  useEffect(() => {
    const cargarTemporada = async () => {
      const res = await fetch(`/api/series`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setDatosPeliculas(data);
    };
    cargarTemporada();
  }, []);
 

  return (
    <>
      {carruselSliders.map((slider, index) => (
        <div
          id={slider.id}
          key={index}
          className="flex flex-col justify-center items-center pb-10 mb-10"
        >
          <Cards
            titulo={slider.titulo}
            cards={slider.cards}
            Url={slider.url}
          />
        </div>
      ))}
    </>
  );
};

export default CarruselCards;
