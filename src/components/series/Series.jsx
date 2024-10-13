"use client";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CardSerie from "./CardSerie";
import { enlacesSeries } from "@/data/enlaces.series";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import SpinnerGlobal from "../spinner/SpinnerGlobal";
import Pagination from "../pagination/Pagination";

const Series = () => {
  const numeroSeries = 16;
  const [datosSeries, setDatosSeries] = useState([]);
  const [buscar, setBuscar] = useState("");
  let path = usePathname();
  path = path.replace("/", "");
  const [inicio, setInicio] = useState(0);
  const [fin, setFin] = useState(numeroSeries);

  useEffect(() => {
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

  const filtrarSeries = datosSeries.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(buscar.toLowerCase())
  );

  const SeriesCargadas = filtrarSeries.slice(inicio, fin);


  return (
    <div className="flex flex-col justify-center items-center pt-20 w-full bg-black text-white pb-20">
      <div className="flex flex-col items-start justify-center lg:w-10/12 md:w-10/12 sm:w-11/12 lg:mt-10 md:mt-10 sm:mt-3">
        <p className="lg:text-2xl md:text-2xl sm:text-sm">
          {`No te pierdas de las mejores ${
            path == "peliculas" ? "peliculas" : "series"
          }, disfruta de contenido exclusivo y
          de calidad.`}
        </p>
        <div className="flex flex-row justify-between items-center lg:mt-10 md:mt-10 sm:mt-5 lg:text-base md:text-base sm:text-[10px] bg-gray-900 w-full lg:h-10 md:h-10 sm:h-6">
          <div>
            <Link
              href={`${path === "series" ? "/peliculas" : "/series"}`}
              className="font-semibold hover:bg-green-600/50 lg:py-2 md:py-2 sm:py-1.5 px-3 cursor-pointer"
            >
              {path === "series" ? "Peliculas" : "Series"}
            </Link>
            {enlacesSeries.map((enlace, index) => (
              <Link
                key={index}
                href={`${enlace.Url}`}
                className="font-semibold hover:bg-green-600/50 lg:py-2 md:py-2 sm:py-1.5 px-3 cursor-pointer"
              >
                {enlace.nombre}
              </Link>
            ))}
          </div>
          <div className="flex flex-row justify-center items-center">
            <InputGroup size={{
              base: "xs",
              sm: "md",
              md: "md",
              lg: "md",
            }}>
              <InputLeftElement pointerEvents="none">
                <BsSearch className="lg:text-xl md:text-xl sm:text-xs"  />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Buscar"
                fontFamily={"monospace"}
                onChange={(e) => {
                  e.preventDefault();
                  setBuscar(e.target.value);
                }}
              />
            </InputGroup>
          </div>
        </div>
      </div>
      <div className="lg:w-10/12 md:w-10/12 sm:w-11/12 grid lg:grid-cols-4 sm:grid-cols-4 lg:gap-2 md:gap-2 sm:gap-1 mt-5 mb-10">
        {SeriesCargadas.map((serie, index) => (
          <CardSerie
            key={index}
            idUrl={serie.id}
            imagen_perfil={serie.imagen_perfil}
            titulo={serie.titulo}
            id={serie.id}
          />
        ))}
      </div>
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
      {datosSeries && datosSeries.length === 0 && (
        <SpinnerGlobal />
      )}
    </div>
  );
};

export default Series;
