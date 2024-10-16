"use client";
import BotonPantallaCompleta from "@/components/peliculas/pelicula/BotonPantallaCompleta";
import CardDescripcion from "@/components/peliculas/pelicula/CardDescripcion";
import BotonesNextBack from "./BotonesNextBack";
import CardEpisodios from "./CardEpisodios";
import { useEffect, useState } from "react";
import { CgOptions } from "react-icons/cg";

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
      <div className="flex flex-col justify-center items-center mt-16 lg:w-9/12 md:w-full">
        <div className="text-sm flex w-full justify-start items-center gap-2 lg:px-0 md:px-5">
          {url.map((url, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center p-2 font-semibold bg-slate-100 hover:bg-slate-300 cursor-pointer font-mono my-1 select-none rounded-sm active:scale-95 transition-all duration-200 shadow-sm shadow-white hover:scale-[101%]"
              onClick={() => setUrlSeleccionada(url)}
            >
              <span className="mr-3">Opción {index + 1}</span>{" "}
              <CgOptions className="text-lg" />
            </div>
          ))}
        </div>
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
