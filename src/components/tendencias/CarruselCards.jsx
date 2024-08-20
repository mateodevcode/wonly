import { carruselSliders } from "@/data/carrusel.sliders";
import React from "react";
import Videos from "./Videos";

const CarruselCards = () => {
    
  return (
    <>
      {carruselSliders.map((slider, index) => (
        <div
        id={slider.id}
          key={index}
          className="flex flex-col justify-center items-center pb-10 mb-10"
        >
          <Videos titulo={slider.titulo} 
            videos={slider.videos}
            Url={slider.url}
          />
        </div>
      ))}
    </>
  );
};

export default CarruselCards;
