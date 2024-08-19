"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CardPelicula from "./CardPelicula";

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
      <div className="w-8/12">
        <CardPelicula
          titulo={datosPeliculas.titulo}
          descripcion={datosPeliculas.descripcion}
          url={datosPeliculas.url}
          duracion={datosPeliculas.duracion}
        />
      </div>
    </div>
  );
};

export default PeliculaActual;
