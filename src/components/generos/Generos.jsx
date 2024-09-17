"use client";
import { enlacesOrdenados } from "@/data/navbar";
import { Input, InputGroup, InputLeftElement, Spinner } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowLeft, BsSearch } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Generos = () => {
  const [Data, setData] = useState([]);
  const [buscar, setBuscar] = useState("");
  const [genero, setGenero] = useState("Acción");
  const [pelisOseries, setPelisOseries] = useState("peliculas");
  const [mostrarGeneros, setMostrarGeneros] = useState(false);

  useEffect(() => {
    const cargarTemporada = async () => {
      const res = await fetch(`/api/${pelisOseries}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setData(data);
    };
    cargarTemporada();
  }, [pelisOseries]);

  // Filtrar peliculas por genero
  const peliculasFiltradasGeneros = Data.filter((pelicula) =>
    pelicula.generos.includes(genero)
  );

  // Filtrar peliculas por busqueda
  let filtrarPeliculas = [];
  filtrarPeliculas = peliculasFiltradasGeneros.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(buscar.toLowerCase())
  );

  return (
    <div className="w-full bg-black flex flex-row justify-center items-start pt-24 pb-40">
      <div className="lg:w-2/12 sm:w-5/12 bg-gray-950" id="aside-generos">
        <h1 className="text-white lg:text-4xl sm:text-2xl px-2 font-bold flex flex-row justify-start items-end select-none">Generos</h1>
        <ul className="text-white mt-5">
          {enlacesOrdenados.map((genero, index) => (
            <li
              key={index}
              className="py-2 px-4 hover:bg-green-600 cursor-pointer select-none"
              id={genero.nombre}
              onClick={(e) => {
                e.preventDefault();
                setGenero(e.target.id);
              }}
            >
              {genero.nombre}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-950 flex flex-col justify-center items-center lg:w-10/12 sm:w-7/12">
        <div className="flex flex-row justify-between items-center lg:text-base md:text-base sm:text-sm bg-gray-950 w-full h-10 text-white lg:mb-0 sm:mb-5">
          <div>
            <div
              className="font-semibold py-2 px-3 cursor-pointer select-none"
              // onClick={() => {
              // if (pelisOseries === "peliculas") {
              //   setPelisOseries("series");
              // }
              // if (pelisOseries === "series") {
              //   setPelisOseries("peliculas");
              // }
              // }}
            >
              {pelisOseries === "peliculas" ? "Peliculas" : "Series"}
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mx-5">
            <InputGroup size="sm" border={"none"}>
              <InputLeftElement pointerEvents="none">
                <BsSearch color="gray.300" />
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
        {filtrarPeliculas.length === 0 && (
          <div className="w-full h-full flex flex-col justify-center items-center pt-10">
            <h1 className="text-white text-3xl font-semibold">
              No hay resultados
            </h1>
          </div>
        )}
        <div className="w-full grid lg:grid-cols-5 sm:grid-cols-1 lg:gap-4 sm:gap-8 h-full lg:p-3 sm:p-2 text-white">
          {filtrarPeliculas.map((pelicula, index) => (
            <Link
              href={`/peliculas/${pelicula.id}`}
              key={index}
              className="lg:w-60 sm:w-44 lg:h-60 sm:h-44 flex flex-col justify-center items-center cursor-pointer"
            >
              <Image
                src={pelicula.imagen_perfil}
                alt={pelicula.titulo}
                width={200}
                height={200}
              />
              <span className="lg:text-sm sm:text-xs cursor-pointer pt-1 h-10">
                {pelicula.titulo}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Generos;
