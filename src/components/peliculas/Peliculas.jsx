"use client";
import { useEffect, useState } from "react";
import Pelicula from "./Pelicula";
import { enlacesSeries } from "@/data/enlaces.series";
import { usePathname } from "next/navigation";
import SpinnerGlobal from "../spinner/SpinnerGlobal";
import Pagination from "../pagination/Pagination";
import TopSearch from "../topSearch/TopSearch";

const Peliculas = () => {
  const numeroPeliculas = 16;
  const [datosPeliculas, setDatosPeliculas] = useState([]);
  const [buscar, setBuscar] = useState("");
  let path = usePathname();
  path = path.replace("/", "");
  const [inicio, setInicio] = useState(0);
  const [fin, setFin] = useState(numeroPeliculas);

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

  const filtrarPeliculas = datosPeliculas.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(buscar.toLowerCase())
  );

  const peliculasCargadas = filtrarPeliculas.slice(inicio, fin);

  return (
    <div className="flex flex-col justify-center items-center pt-20 pb-20 w-full bg-black text-white">
      <TopSearch path={path} enlacesSeries={enlacesSeries} setInicio={setInicio} setFin={setFin} setBuscar={setBuscar} numeroPeliculas={numeroPeliculas} />
      <div className="lg:w-10/12 md:w-10/12 sm:w-11/12 grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-2 md:gap-2 sm:gap-1 mt-5 mb-10">
        {peliculasCargadas.map((pelicula, index) => (
          <Pelicula
            key={index}
            idUrl={pelicula.id}
            imagen_perfil={pelicula.imagen_perfil}
            titulo={pelicula.titulo}
            id={pelicula.id}
            year={pelicula.year}
          />
        ))}
      </div>
      {datosPeliculas && datosPeliculas.length > 0 && (
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
      {datosPeliculas && datosPeliculas.length === 0 && <SpinnerGlobal />}
    </div>
  );
};

export default Peliculas;
