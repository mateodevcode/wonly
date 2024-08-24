"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CardPelicula from "./CardPelicula";
import { Spinner } from "@chakra-ui/react";
import Pelicula from "../Pelicula";
import { usePathname } from "next/navigation";

const PeliculaActual = () => {
  const [datosPeliculas, setDatosPeliculas] = useState([]);
  const [Data, setData] = useState([]);
  const params = useParams();

  let path = usePathname();
  path = path.includes("peliculas") ? "peliculas" : "series";


  useEffect(() => {
    const cargarTemporada = async () => {
      const res = await fetch(`/api/peliculas`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setData(data);

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
      <div className="flex flex-col justify-center items-center w-full bg-black text-white">
        <div className="flex flex-col items-start justify-center lg:w-10/12 md:w-10/12 sm:w-11/12">
          <div className="flex flex-row justify-start items-center lg:text-base md:text-base sm:text-sm bg-gray-900 w-full h-10">
            <p         
              className="font-semibold hover:bg-green-600/50 py-2 px-3 select-none"
            >
              {path === "peliculas" ? "Peliculas Similares" : "Series Similares"}
            </p>
          </div>
        </div>
        <div className="lg:w-10/12 md:w-10/12 sm:w-11/12 grid grid-cols-3 gap-2 mt-5 mb-10">
          {Data.map((pelicula, index) => (
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
    </div>
  );
};

export default PeliculaActual;
