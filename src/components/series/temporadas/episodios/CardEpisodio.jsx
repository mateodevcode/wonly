"use client";
import BotonPantallaCompleta from "@/components/peliculas/pelicula/BotonPantallaCompleta";
import CardDescripcion from "@/components/peliculas/pelicula/CardDescripcion";
import BotonesNextBack from "./BotonesNextBack";

const CardEpisodio = ({ titulo, descripcion, url, duracion }) => {
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
      <BotonesNextBack />
      <CardDescripcion
        titulo={titulo}
        descripcion={descripcion}
        duracion={duracion}
      />
    </div>
  );
};

export default CardEpisodio;
