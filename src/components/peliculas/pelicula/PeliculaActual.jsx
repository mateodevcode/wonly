"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CardPelicula from "./CardPelicula";
import Pelicula from "../Pelicula";
import { usePathname } from "next/navigation";
import SpinnerGlobal from "@/components/spinner/SpinnerGlobal";

const PeliculaActual = () => {
  const [datosPeliculas, setDatosPeliculas] = useState([]);
  const [Data, setData] = useState([]);
  const [genero, setGenero] = useState([]);
  const params = useParams();
  const [Url1, setUrl1] = useState("");
  const [Url2, setUrl2] = useState("");

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
      <div className="lg:w-10/12 md:w-8/12 sm:w-full flex flex-row justify-center items-center">
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
          <div className="flex flex-row justify-start items-center lg:text-base md:text-base sm:text-sm bg-gray-900 w-full h-10">
            <p className="font-semibold hover:bg-green-600/50 py-2 px-3 select-none">
              {path === "peliculas"
                ? "Peliculas Similares"
                : "Series Similares"}
            </p>
          </div>
        </div>
        <div className="lg:w-10/12 md:w-10/12 sm:w-11/12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-2 mt-5 mb-10">
          {filtrarPeliculas.map((pelicula, index) => (
            <Pelicula
              key={index}
              idUrl={pelicula.id}
              imagen_perfil={pelicula.imagen_perfil}
              titulo={pelicula.titulo}
              id={pelicula.id}
            />
          ))}
        </div>
        {datosPeliculas && datosPeliculas.length === 0 && <SpinnerGlobal />}
      </div>
    </div>
  );
};

export default PeliculaActual;
