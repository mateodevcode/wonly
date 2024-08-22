"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CardPelicula from "./CardPelicula";
import { Spinner } from "@chakra-ui/react";

const PeliculaActual = () => {
  const [datosPeliculas, setDatosPeliculas] = useState([]);
  const params = useParams();

  useEffect(() => {
    const cargarTemporada = async () => {
      const res = await fetch(`/api/peliculas`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      const key = "id";
      const value = params.pelicula;
      const resultado = data.find((objeto) => objeto[key] === value);
      setDatosPeliculas(resultado);
    };
    cargarTemporada();
  }, []);

  return (
    <div className="w-full bg-black h-full flex flex-col justify-center items-center">
      <div className="w-8/12 flex flex-row justify-center items-center">
        {datosPeliculas.titulo ? (
          <CardPelicula
            titulo={datosPeliculas.titulo}
            descripcion={datosPeliculas.descripcion}
            url={datosPeliculas.url}
            duracion={datosPeliculas.duracion}
          />
        ) : (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="red.500"
            size="xl"
            className="mt-80 mb-80"
          />
        )}
      </div>
    </div>
  );
};

export default PeliculaActual;
