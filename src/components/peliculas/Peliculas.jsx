"use client";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Pelicula from "./Pelicula";
import { enlacesSeries } from "@/data/enlaces.series";
import { usePathname } from "next/navigation";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import SpinnerGlobal from "../spinner/SpinnerGlobal";

const Peliculas = () => {
  const numeroPeliculas = 16;
  const [datosPeliculas, setDatosPeliculas] = useState([]);
  const [buscar, setBuscar] = useState("");
  let path = usePathname();
  path = path.replace("/", "");
  const [inicio, setInicio] = useState(0);
  const [fin, setFin] = useState(numeroPeliculas);
  const [numPelPorPagina, setNumPelPorPagina] = useState(numeroPeliculas);

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

  console.log(buscar);
  console.log(filtrarPeliculas);

  return (
    <div className="flex flex-col justify-center items-center pt-20 pb-20 w-full bg-black text-white">
      <div className="flex flex-col items-start justify-center lg:w-10/12 md:w-10/12 sm:w-11/12 mt-10">
        <p className="lg:text-2xl md:text-2xl sm:text-lg">
          {`No te pierdas de las mejores ${
            path == "peliculas" ? "peliculas" : "series"
          }, disfruta de contenido exclusivo y
          de calidad.`}
        </p>
        <div
          className="flex flex-row justify-between items-center mt-10 lg:text-base md:text-base sm:text-sm bg-gray-900 w-full h-10"
          id="page"
        >
          <div>
            <Link
              href={`${path === "series" ? "/peliculas" : "/series"}`}
              className="font-semibold hover:bg-green-600/50 py-2 px-3 cursor-pointer"
            >
              {path === "series" ? "Peliculas" : "Series"}
            </Link>
            {enlacesSeries.map((enlace, index) => (
              <Link
                key={index}
                href={`${enlace.Url}`}
                className="font-semibold hover:bg-green-600/50 py-2 px-3 cursor-pointer"
              >
                {enlace.nombre}
              </Link>
            ))}
          </div>
          <div className="flex flex-row justify-center items-center">
            <InputGroup size="sm" border={"none"}>
              <InputLeftElement pointerEvents="none">
                <BsSearch color="gray.300" />
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
      <div className="lg:w-10/12 md:w-10/12 sm:w-11/12 grid lg:grid-cols-4 sm:grid-cols-1 gap-2 mt-5 mb-10">
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
        <div className="w-full flex flex-row justify-center items-center">
          <div className="w-[600px]">
            <nav className="flex flex-row justify-center items-center text-sky-500">
              <ul className=" flex flex-row justify-center items-center  border-[1px] border-white rounded-md select-none font-semibol">
                <Link
                  href={`${inicio == 0 ? "#" : "#page"}`}
                  className={`p-2 hover:bg-white/10 rounded-l-md ${
                    inicio === 0 ? "text-gray-500" : ""
                  }`}
                  onClick={() => {
                    if (inicio === 0) return;
                    setInicio(inicio - numPelPorPagina);
                    setFin(fin - numPelPorPagina);
                  }}
                >
                  Anterior
                </Link>
                <Link
                  href={"#page"}
                  className={`py-2 px-4 border-l-[1px] border-white hover:bg-white/10 ${
                    inicio === 0 ? "hidden" : ""
                  }`}
                  onClick={() => {
                    setInicio(inicio - numPelPorPagina);
                    setFin(fin - numPelPorPagina);
                  }}
                >
                  {inicio / numPelPorPagina}
                </Link>
                <Link
                  href={"#page"}
                  className="py-2 px-4 border-l-[1px] border-r-[1px] border-white hover:bg-white/10 bg-sky-500/40"
                >
                  {Math.round(inicio / numPelPorPagina + 1)}
                </Link>
                <Link
                  href={"#page"}
                  className={`py-2 px-4 border-white hover:bg-white/10 ${
                    fin === filtrarPeliculas.length + 2 ||
                    filtrarPeliculas.length <= numeroPeliculas
                      ? "hidden"
                      : ""
                  }`}
                  onClick={() => {
                    setInicio(fin);
                    setFin(fin + numPelPorPagina);
                  }}
                >
                  {inicio / numPelPorPagina + 2}
                </Link>
                <Link
                  href={"#page"}
                  onClick={() => {
                    if (fin === filtrarPeliculas.length + 2) return;
                    if (filtrarPeliculas.length <= numeroPeliculas) return;
                    setInicio(fin);
                    setFin(fin + numPelPorPagina);
                  }}
                  className={`${
                    fin === filtrarPeliculas.length + 2 ||
                    filtrarPeliculas.length <= numeroPeliculas
                      ? "text-gray-500"
                      : ""
                  } p-2 hover:bg-white/10 border-l-[1px]`}
                >
                  Siguiente
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      )}
      {datosPeliculas && datosPeliculas.length === 0 && <SpinnerGlobal />}
    </div>
  );
};

export default Peliculas;
