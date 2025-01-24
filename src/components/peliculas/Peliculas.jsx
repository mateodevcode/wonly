"use client";
import { useContext, useEffect, useState } from "react";
import { enlacesSeries } from "@/data/enlaces.series";
import { usePathname } from "next/navigation";
import SpinnerGlobal from "../spinner/SpinnerGlobal";
import Pagination from "../pagination/Pagination";
import TopSearch from "../topSearch/TopSearch";
import CardMovie from "../CardMovies/CardMovie";
import { MoviesContext } from "@/context/MoviesContext";

const Peliculas = () => {
  const numeroPeliculas = 20;
  const [buscar, setBuscar] = useState("");
  let path = usePathname();
  path = path.replace("/", "");
  const [inicio, setInicio] = useState(0);
  const [fin, setFin] = useState(numeroPeliculas);
  const { peliculas } = useContext(MoviesContext);

  const filtrarPeliculas = peliculas.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(buscar.toLowerCase())
  );

  const peliculasCargadas = filtrarPeliculas.slice(inicio, fin);

  return (
    <div className="flex flex-col justify-center items-center w-full bg-white dark:bg-black">
      <TopSearch
        path={path}
        enlacesSeries={enlacesSeries}
        setInicio={setInicio}
        setFin={setFin}
        setBuscar={setBuscar}
        numeroPeliculas={numeroPeliculas}
      />
      <div className="lg:w-10/12 md:w-10/12 sm:w-11/12 grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 smd:grid-cols-3 sm:grid-cols-2 lg:gap-2 md:gap-2 sm:gap-1 mt-5 mb-10">
        {peliculasCargadas.map((pelicula, index) => (
          <CardMovie
            key={index}
            imagen_perfil={pelicula.imagen_perfil}
            titulo={pelicula.titulo}
            id={pelicula.id}
            year={pelicula.year}
            _id={pelicula._id}
          />
        ))}
      </div>
      {peliculas && peliculas.length > 0 && (
        <Pagination
          filtrarPeliculas={filtrarPeliculas}
          peliculasCargadas={peliculasCargadas}
          inicio={inicio}
          fin={fin}
          numeroPeliculas={numeroPeliculas}
          setInicio={setInicio}
          setFin={setFin}
        />
      )}
      {peliculas && peliculas.length === 0 && (
        <div className="flex justify-center items-center w-full my-40">
          <SpinnerGlobal />
        </div>
      )}
    </div>
  );
};

export default Peliculas;
