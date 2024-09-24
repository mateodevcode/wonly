"use client";
import BotonPantallaCompleta from "@/components/peliculas/pelicula/BotonPantallaCompleta";
import CardDescripcion from "@/components/peliculas/pelicula/CardDescripcion";
import BotonesNextBack from "./BotonesNextBack";
import CardEpisodios from "./CardEpisodios";
import { useEffect, useState } from "react";



const CardEpisodio = ({ titulo, descripcion, url, duracion, temporadaActual, urlTemporada, edad, Id }) => {
  const [ListaEpisodios, setListaEpisodios] = useState([]);

  useEffect(() => {
    const cargarEpisodios = async () => {
      const res = await fetch(`/api/series`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setListaEpisodios(data);
    }
    cargarEpisodios();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-row justify-center items-center mt-20">
        <iframe
        className="sm:w-full lg:w-[950px] md:w-[750px] lg:h-[520px] md:h-[500px] sm:h-[300px]"
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
      <div className="w-full flex flex-col justify-center items-center">
      {temporadaActual.map((epi, index) => (
          <CardEpisodios
            key={index}
            imagen_perfil={epi.imagen_perfil}
            temporada={epi.temporada}
            episodio={epi.episodio}
            titulo={epi.titulo}
            duracion={epi.duracion}
            descripcion={epi.descripcion}
            Url={`/series/${Id}/${urlTemporada}/${epi.episodio}`}
            edad={edad}
          />
        ))}
      </div>
    </div>
  );
};

export default CardEpisodio;
