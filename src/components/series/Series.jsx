"use client";
import { useEffect, useState } from "react";
import CardSerie from "./CardSerie";
import { enlacesSeries } from "@/data/enlaces.series";
import { usePathname } from "next/navigation";
import SpinnerGlobal from "../spinner/SpinnerGlobal";
import Pagination from "../pagination/Pagination";
import TopSearch from "../topSearch/TopSearch";

const Series = () => {
  const numeroSeries = 16;
  const [datosSeries, setDatosSeries] = useState([]);
  const [buscar, setBuscar] = useState("");
  let path = usePathname();
  path = path.replace("/", "");
  const [inicio, setInicio] = useState(0);
  const [fin, setFin] = useState(numeroSeries);

  useEffect(() => {
    // cargar las temporadas de las series
    const cargarTemporada = async () => {
      const res = await fetch(`/api/series`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setDatosSeries(data);
    };
    cargarTemporada();
  }, []);

  // Filtrar las series por el titulo de la serie y mostrarlas en la pagina de series
  const filtrarSeries = datosSeries.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(buscar.toLowerCase())
  );

  // Mostrar las series en la pagina de series
  const SeriesCargadas = filtrarSeries.slice(inicio, fin);

  return (
    <div className="flex flex-col justify-center items-center pt-16 w-full bg-black text-white pb-20">
      {/* Barra de busqueda y filtros */}
      <TopSearch
        path={path}
        enlacesSeries={enlacesSeries}
        setInicio={setInicio}
        setFin={setFin}
        setBuscar={setBuscar}
        numeroPeliculas={numeroSeries}
      />
      {/* Contenedor de series */}
      <div className="lg:w-10/12 md:w-10/12 sm:w-11/12 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-2 md:gap-2 sm:gap-1 mt-5 mb-10">
        {SeriesCargadas.map((serie, index) => (
          <CardSerie
            key={index}
            idUrl={serie.id}
            imagen_perfil={serie.imagen_perfil}
            titulo={serie.titulo}
            id={serie.id}
            _id={serie._id}
          />
        ))}
      </div>
      {/* Paginacion */}
      {datosSeries && datosSeries.length > 0 && (
        <Pagination
          filtrarPeliculas={filtrarSeries}
          peliculasCargadas={SeriesCargadas}
          inicio={inicio}
          fin={fin}
          numeroPeliculas={numeroSeries}
          setInicio={setInicio}
          setFin={setFin}
        />
      )}
      {/* Spinner */}
      {datosSeries && datosSeries.length === 0 && <SpinnerGlobal />}
    </div>
  );
};

export default Series;
