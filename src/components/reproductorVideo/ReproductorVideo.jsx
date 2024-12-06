import React from "react";
import OpcionesReproductor from "./OpcionesReproductor";
import IframeVideo from "./IframeVideo";
import CardDescripcion from "../peliculas/pelicula/CardDescripcion";
// import BotonPantallaCompleta from "../peliculas/pelicula/BotonPantallaCompleta";
import BotonesNextBack from "../series/temporadas/episodios/BotonesNextBack";
import MoviePlayer from "./newReproductorVideo/MoviePlayer";
import dynamic from "next/dynamic";

const ReproductorVideo = ({tipoMovie, titulo, descripcion, duracion, url, setUrlSeleccionada, UrlSeleccionada, temporadaActual, temporada, episodio}) => {
// const MoviePlayer = dynamic(() => import('./newReproductorVideo/MoviePlayer'), { ssr: false })

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mt-16 sm:w-full xl:w-[1440px] lg:w-[950px] md:w-[750px]">
        <OpcionesReproductor
          url={url}
          setUrlSeleccionada={setUrlSeleccionada}
        />
        <IframeVideo UrlSeleccionada={UrlSeleccionada} />
        {/* <MoviePlayer UrlSeleccionada={UrlSeleccionada} titulo={titulo} /> */}
      </div>
      {/* <BotonPantallaCompleta /> */}
      {tipoMovie === "serie" ? <BotonesNextBack temporadaActual={temporadaActual} /> : null}
      <CardDescripcion
        titulo={titulo}
        descripcion={descripcion}
        duracion={duracion}
        temporada={temporada}
        episodio={episodio}
      />
    </div>
  );
};

export default ReproductorVideo;
