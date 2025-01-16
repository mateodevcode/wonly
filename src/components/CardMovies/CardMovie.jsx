"use client";
import Image from "next/image";
import { usePathname, useRouter, } from "next/navigation";
import { useContext } from "react";
import { MoviesContext } from "@/context/MoviesContext";
import AgregarLista from "../AgregarLista/AgregarLista";
import { acortarNombre } from "@/config/acortarNombre";
import { Tooltip } from "@chakra-ui/react";

const CardMovie = ({ index, imagen_perfil, titulo, id, year, _id, temporadas }) => {
  const router = useRouter();
  const { miLista, handleAgregarMiLista, handleDeletePelicula } =
    useContext(MoviesContext);

  const path = usePathname();
  let tipo = path.split("/")[1];
  
  if (temporadas) {
    tipo = "series";
  } else {
    tipo = "peliculas";
  }

  return (
    <Tooltip
      label={titulo}
      fontSize="small"
      bg="black"
      color="white"
      rounded={5}
      paddingBottom={1}
      key={index}
    >
      <div
        key={index}
        className="flex flex-col justify-start items-center lg:my-5 md:my-5 sm:my-2 lg:mx-4 md:mx-4 sm:mx-2 cursor-pointer active:scale-95 transition-all duration-300 dark:bg-zinc-900 bg-gray-100 pb-2 rounded-md"
        onClick={(e) => {
          e.preventDefault();
          const idUrl = e.target.id;
          router.push(`/${tipo}/${idUrl}`);
        }}
      >
        <AgregarLista
          _id={_id}
          handleAgregarMiLista={handleAgregarMiLista}
          handleDeletePelicula={handleDeletePelicula}
          miLista={miLista}
        />
        <div className="w-full">
          <p className="absolute dark:bg-black/50 bg-white/50 lg:px-3 md:px-1.5 sm:px-1.5 lg:py-1 md:py-1 sm:py-0.5 lg:rounded-md md:rounded-md sm:rounded-sm xl:text-xs lg:text-xs md:text-xs sm:text-[10px] lg:m-2 md:m-2 sm:m-1 font-mono lg:mx-2 md:mx-3 sm:mx-1 font-bold dark:text-white text-black">
            {year}
          </p>
        </div>
        <Image
          src={imagen_perfil}
          width={500}
          height={500}
          alt={titulo}
          id={id}
          className="w-full h-full object-cover hover:opacity-50"
        />
        <p className="lg:text-xs md:text-xs sm:text-[10px] lg:mt-2 md:mt-2 sm:mt-1.5 dark:text-gray-400 text-gray-900">
          {acortarNombre(titulo, 30)}
        </p>
      </div>
    </Tooltip>
  );
};

export default CardMovie;
