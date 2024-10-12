"use client";
import { useState } from "react";
import BotonPantallaCompleta from "./BotonPantallaCompleta";
import CardDescripcion from "./CardDescripcion";
import { CgOptions } from "react-icons/cg";

const CardPelicula = ({ titulo, descripcion, url, duracion }) => {
  const [UrlSeleccionada, setUrlSeleccionada] = useState(url[0]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-min lg:w-32 md:w-32 sm:s-10 absolute top-20 right-0 lg:mx-5 md:mx-5 sm:mx-0 text-sm">
        {url.map((url, index) => (
          <div key={index} className="flex flex-row justify-between items-center w-full p-2 font-semibold bg-slate-100 hover:bg-slate-300 cursor-pointer font-mono my-1 select-none rounded-sm active:scale-95 transition-all duration-200 shadow-sm shadow-white hover:scale-[101%]"
            onClick={() => setUrlSeleccionada(url)}
          >
            <span className="lg:flex md:flex sm:hidden mx-2">Opción {index + 1}</span> <CgOptions className="text-lg" />
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center mt-20">
        <iframe
          className="sm:w-full lg:w-[950px] md:w-[750px] lg:h-[520px] md:h-[500px] sm:h-[300px]"
          src={UrlSeleccionada} 
          width="750"
          height="500"
          allow="autoplay"
          frameBorder="0"
          id="videoplayer"
        />
      </div>
      <BotonPantallaCompleta />
      <CardDescripcion
        titulo={titulo}
        descripcion={descripcion}
        duracion={duracion}
      />
    </div>
  );
};

export default CardPelicula;
