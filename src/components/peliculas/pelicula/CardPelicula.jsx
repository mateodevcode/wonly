"use client";

import BotonPantallaCompleta from "./BotonPantallaCompleta";
import CardDescripcion from "./CardDescripcion";

const CardPelicula = ({ titulo, descripcion, url, duracion }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center mt-20">
        <iframe
          src={url}
          width="750"
          height="500"
          allow="autoplay"
          frameBorder="0"
          id="videoplayer"
        />
      </div>
      <BotonPantallaCompleta />
      <CardDescripcion titulo={titulo} descripcion={descripcion} duracion={duracion} />
    </div>
  );
};

export default CardPelicula;
