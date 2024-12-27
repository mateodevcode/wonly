"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CardPelicula from "./CardPelicula";
import { usePathname } from "next/navigation";
import SpinnerGlobal from "@/components/spinner/SpinnerGlobal";
import CardMovie from "@/components/CardMovies/CardMovie";

const PeliculaActual = () => {
  const [datosPeliculas, setDatosPeliculas] = useState([]);
  const [Data, setData] = useState([]);
  const [genero, setGenero] = useState([]);
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
      setGenero(resultado.generos.sort()[0]);
    };
    cargarTemporada();
  }, []);

  const filtrarPeliculas = Data.filter((pelicula) =>
    pelicula.generos.includes(genero)
  );
  

  return (
    <div className="w-full bg-black h-full flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center w-full">
        {datosPeliculas.titulo ? (
          <CardPelicula
            titulo={datosPeliculas.titulo}
            descripcion={datosPeliculas.descripcion}
            url={datosPeliculas.url}
            duracion={datosPeliculas.duracion}
          />
        ) : (
          <div className="my-40">
            <SpinnerGlobal />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center items-center w-full bg-black text-white">
        <div className="flex flex-col items-start justify-center lg:w-10/12 md:w-10/12 sm:w-11/12">
          <div className="flex flex-row justify-start items-center lg:text-base md:text-base sm:text-sm  rounded-md border-[1px] border-gray-500">
            <p className="font-semibold py-2 px-3 select-none">
              {path === "peliculas"
                ? "Peliculas Similares"
                : "Series Similares"}
            </p>
          </div>
        </div>
        <div className="lg:w-10/12 md:w-10/12 sm:w-11/12 grid xl:grid-cols-5 lg:grid-cols-3 smd:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-2 mt-5 mb-10">
          {filtrarPeliculas.map((pelicula, index) => (
            <CardMovie
              key={index}
              imagen_perfil={pelicula.imagen_perfil}
              titulo={pelicula.titulo}
              id={pelicula.id}
              year={pelicula.year}
            />
          ))}
        </div>
        {datosPeliculas && datosPeliculas.length === 0 && <SpinnerGlobal />}
      </div>
    </div>
  );
};

export default PeliculaActual;
