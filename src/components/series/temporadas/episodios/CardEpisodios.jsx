"use client";
import CardEpisodio from "./CardEpisodio";
import { useEffect, useState } from "react";
import ReproductorVideo from "@/components/reproductorVideo/ReproductorVideo";

const CardEpisodios = ({
  titulo,
  descripcion,
  url,
  duracion,
  temporadaActual,
  urlTemporada,
  edad,
  Id,
  temporada,
  episodio
}) => {
  const [ListaEpisodios, setListaEpisodios] = useState([]);
  const [UrlSeleccionada, setUrlSeleccionada] = useState(url[0]);

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
    };
    cargarEpisodios();
  }, []);
  

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <ReproductorVideo
        tipoMovie={"serie"}
        titulo={titulo}
        descripcion={descripcion}
        duracion={duracion}
        url={url}
        setUrlSeleccionada={setUrlSeleccionada}
        UrlSeleccionada={UrlSeleccionada}
        temporadaActual={temporadaActual}
        temporada={temporada}
        episodio={episodio}
      />
      <div className="w-full xl:px-40 lg:px-5 md:px-5 smd:px-5 sm:px-5">
        {temporadaActual.map((epi, index) => (
          <CardEpisodio
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

export default CardEpisodios;
