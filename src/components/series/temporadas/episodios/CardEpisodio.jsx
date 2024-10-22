"use client";
import CardEpisodios from "./CardEpisodios";
import { useEffect, useState } from "react";
import ReproductorVideo from "@/components/reproductorVideo/ReproductorVideo";

const CardEpisodio = ({
  titulo,
  descripcion,
  url,
  duracion,
  temporadaActual,
  urlTemporada,
  edad,
  Id,
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
    <div className="flex flex-col justify-center items-center">
      <ReproductorVideo
        tipoMovie={"serie"}
        titulo={titulo}
        descripcion={descripcion}
        duracion={duracion}
        url={url}
        setUrlSeleccionada={setUrlSeleccionada}
        UrlSeleccionada={UrlSeleccionada}
        temporadaActual={temporadaActual}
      />
      <div className="sm:w-full xl:w-[1440px] lg:w-[950px] md:w-[750px]">
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
