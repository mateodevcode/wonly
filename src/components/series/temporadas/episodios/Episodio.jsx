"use client";
import { useContext } from "react";
import CardEpisodio from "./CardEpisodios";
import { useParams } from "next/navigation";
import SpinnerGlobal from "@/components/spinner/SpinnerGlobal";
import { MoviesContext } from "@/context/MoviesContext";

const Episodio = () => {
  const { series } = useContext(MoviesContext);
  const params = useParams();

  const serieActual = series.find((objeto) => objeto.id === params.serie);
  const temporadaActual = serieActual?.temporadas.find(
    (objeto) => objeto.linkTo === params.temporada
  );
  const listaEpisodios = temporadaActual?.episodios;
  const episodioActual = listaEpisodios?.find(
    (objeto) => objeto.episodio === params.episodio
  );

  return (
    <div className="w-full dark:bg-black h-full flex flex-col justify-center items-center">
      <div className="lg:w-10/12 md:w-8/12 sm:w-full flex flex-row justify-center items-center">
        {episodioActual?.titulo ? (
          <CardEpisodio
            titulo={episodioActual.titulo}
            temporada={episodioActual.temporada}
            episodio={episodioActual.episodio}
            descripcion={episodioActual.descripcion}
            url={episodioActual.url}
            duracion={episodioActual.duracion}
            temporadaActual={listaEpisodios}
          />
        ) : (
          <div className="flex justify-center items-center w-full my-80">
            <SpinnerGlobal />
          </div>
        )}
      </div>
    </div>
  );
};

export default Episodio;
