"use client";
import { useState } from "react";
import ReproductorVideo from "@/components/reproductorVideo/ReproductorVideo";

const CardPelicula = ({ titulo, descripcion, url, duracion }) => {
  const [UrlSeleccionada, setUrlSeleccionada] = useState(url[0]);

  return (
    <ReproductorVideo
      tipoMovie={"pelicula"}
      titulo={titulo}
      descripcion={descripcion}
      duracion={duracion}
      url={url}
      setUrlSeleccionada={setUrlSeleccionada}
      UrlSeleccionada={UrlSeleccionada}
    />
  );
};

export default CardPelicula;
