"use client";
import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Enlaces from "../series/Enlaces";
import Pelicula from "./Pelicula";

const Peliculas = () => {
  const [datosPeliculas, setDatosPeliculas] = useState([]);

  useEffect(() => {
    const cargarTemporada = async () => {
      const res = await fetch(`/api/peliculas`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setDatosPeliculas(data);
    };
    cargarTemporada();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center pt-20 w-full bg-black text-white">
      <div className="flex flex-col items-start justify-center lg:w-10/12 md:w-10/12 sm:w-11/12 mt-10">
        <p className="lg:text-2xl md:text-2xl sm:text-lg">
          No te pierdas de las mejores series, disfruta de contenido exclusivo y
          de calidad.
        </p>
        <Enlaces />
      </div>
      <div className="w-full flex flex-wrap items-start justify-center mt-5 mb-10">
        {datosPeliculas.map((pelicula, index) => (
          <Pelicula
            key={index}
            idUrl={pelicula.id}
            imagen_perfil={pelicula.imagen_perfil}
            titulo={pelicula.titulo}
            id={pelicula.id}
          />
        ))}
      </div>
      {datosPeliculas && datosPeliculas.length === 0 && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="red.500"
          size="xl"
          className="mt-32 mb-56"
        />
      )}
    </div>
  );
};

export default Peliculas;
