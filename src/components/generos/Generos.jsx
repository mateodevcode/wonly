"use client";
import { enlacesOrdenados } from "@/data/navbar";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MoviesContext } from "@/context/MoviesContext";
import AgregarLista from "../AgregarLista/AgregarLista";

const Generos = () => {
  const [buscar, setBuscar] = useState("");
  const [genero, setGenero] = useState("Acción");
  const router = useRouter();
  const { miLista, handleAgregarMiLista, handleDeletePelicula } =
    useContext(MoviesContext);
  const [peliculas, setPeliculas] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const cargarPeliculas = async () => {
      try {
        const res = await fetch(`/api/peliculas`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setPeliculas(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Error al cargar las peliculas",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    };
    cargarPeliculas();
  }, []);

  useEffect(() => {
    const CargarSeries = async () => {
      try {
        const res = await fetch(`/api/series`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setSeries(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Error al cargar las series",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    };
    CargarSeries();
  }, []);

  let seriesYpeliculas = [...peliculas, ...series];

  // Filtrar peliculas por genero
  const peliculasFiltradasGeneros = seriesYpeliculas.filter((pelicula) =>
    pelicula.generos.includes(genero)
  );

  // Filtrar peliculas por busqueda
  let filtrarPeliculas = [];
  filtrarPeliculas = peliculasFiltradasGeneros.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(buscar.toLowerCase())
  );

  return (
    <div className="w-full bg-black flex flex-row justify-center items-start pt-24 pb-40">
      <div
        className="lg:w-2/12 sm:w-5/12 bg-zinc-900 rounded-md border-[1px] border-gray-700"
        id="aside-generos"
      >
        <h1 className="text-white lg:text-3xl sm:text-2xl font-bold flex flex-row justify-start items-end select-none pt-4 px-4">
          Generos
        </h1>
        <ul className="text-white mt-5 pb-4">
          {enlacesOrdenados.map((genero, index) => (
            <li
              key={index}
              className="py-2 px-4 hover:bg-white hover:text-black cursor-pointer select-none mx-1 rounded-md"
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
      <div className="flex flex-col justify-center items-center lg:w-10/12 sm:w-7/12 bg-zinc-800 mx-2 rounded-md border-[1px] border-gray-700">
        <div className="flex flex-row justify-between items-center lg:text-base md:text-base sm:text-sm w-full h-10 text-white lg:mb-0 sm:mb-5 px-3 mt-3">
          <div></div>
          <div className="flex flex-row justify-center items-center mx-5">
            <InputGroup
              className="bg-zinc-900 rounded-md text-sm text-gray-400 flex flex-row justify-center items-center"
              size={{
                base: "xs",
                sm: "md",
                md: "md",
                lg: "md",
              }}
            >
              <InputLeftElement pointerEvents="none">
                <BsSearch className="lg:text-base md:text-base sm:text-xs" />
              </InputLeftElement>
              <Input
                className="placeholder-gray-400 text-white"
                type="text"
                placeholder="Buscar"
                fontFamily={"monospace"}
                border={"none"}
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
        <div className="w-full grid lg:grid-cols-4 sm:grid-cols-1 lg:gap-2 sm:gap-8 h-full lg:p-3 sm:p-2 text-white">
          {filtrarPeliculas.map((pelicula, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center lg:my-5 md:my-5 sm:my-2 lg:mx-4 md:mx-4 sm:mx-2 cursor-pointer active:scale-95 transition-all duration-300 bg-zinc-900 pb-2 rounded-md"
              onClick={(e) => {
                e.preventDefault();
                router.push(`/peliculas/${pelicula.id}`);
              }}
            >
              <AgregarLista
                _id={pelicula._id}
                handleAgregarMiLista={handleAgregarMiLista}
                handleDeletePelicula={handleDeletePelicula}
                miLista={miLista}
              />
              <div className="w-full">
                <p className="absolute bg-black/50 lg:px-3 md:px-1.5 sm:px-1.5 lg:py-1 md:py-1 sm:py-0.5 lg:rounded-md md:rounded-md sm:rounded-sm lg:text-sm md:text-sm sm:text-[10px] lg:m-2 md:m-2 sm:m-1 font-mono lg:mx-2 md:mx-3 sm:mx-1 font-bold">
                  {pelicula.year}
                </p>
              </div>
              <Image
                src={pelicula.imagen_perfil}
                width={500}
                height={500}
                alt={pelicula.titulo}
                id={pelicula.id}
                className="lg:w-72 md:w-72 sm:w-40 lg:h-72 md:h-72 sm:h-40 hover:opacity-50"
              />
              <p className="lg:text-sm md:text-sm sm:text-[10px] mt-2 text-gray-400">
                {pelicula.titulo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Generos;
