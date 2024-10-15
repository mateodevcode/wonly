"use client";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Pelicula from "./Pelicula";
import { enlacesSeries } from "@/data/enlaces.series";
import { usePathname } from "next/navigation";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import SpinnerGlobal from "../spinner/SpinnerGlobal";
import Pagination from "../pagination/Pagination";

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
      <div className="flex flex-col items-start justify-center lg:w-10/12 md:w-10/12 sm:w-11/12 lg:mt-10 md:mt-10 sm:mt-3">
        <p className="lg:text-2xl md:text-2xl sm:text-sm">
          {`No te pierdas de las mejores ${
            path == "peliculas" ? "peliculas" : "series"
          }, disfruta de contenido exclusivo y
          de calidad.`}
        </p>
        <div
          className="flex flex-row justify-between items-center lg:mt-10 md:mt-10 sm:mt-5 lg:text-base md:text-base sm:text-[10px] bg-gray-900 w-full lg:h-10 md:h-10 sm:h-6"
          id="page"
        >
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
            }} >
              <InputLeftElement pointerEvents="none">
                <BsSearch className="lg:text-xl md:text-xl sm:text-xs" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Buscar"
                fontFamily={"monospace"}
                onChange={(e) => {
                  setInicio(0);
                  setFin(numeroPeliculas);
                  e.preventDefault();
                  setBuscar(e.target.value);
                }}
              />
            </InputGroup>
          </div>
        </div>
      </div>
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
