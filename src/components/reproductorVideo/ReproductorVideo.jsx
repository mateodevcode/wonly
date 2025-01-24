import React from "react";
import IframeVideo from "./IframeVideo";
import BotonesNextBack from "../series/temporadas/episodios/BotonesNextBack";
import CardDescripcion from "../peliculas/pelicula/CardDescripcion";
// import MoviePlayer from "./newReproductorVideo/MoviePlayer";
// import dynamic from "next/dynamic";

const ReproductorVideo = ({tipoMovie, titulo, descripcion, duracion, url, temporadaActual, temporada, episodio}) => {
// const MoviePlayer = dynamic(() => import('./newReproductorVideo/MoviePlayer'), { ssr: false })

  return (
    <div className="flex flex-col justify-center items-center xl:w-7/12 lg:w-10/12 md:w-10/12 smd:w-11/12 sm:w-11/12">
      <div className={`flex flex-col justify-center items-center mt-16 w-full`}>
        {/* <OpcionesReproductor
          url={url}
          setUrlSeleccionada={setUrlSeleccionada}
        /> */}
        <IframeVideo url={url} />
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
