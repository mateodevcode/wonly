"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { MoviesContext } from "@/context/MoviesContext";
import AgregarLista from "../AgregarLista/AgregarLista";
import { acortarNombre } from "@/config/acortarNombre";

const CardMovie = ({ index, imagen_perfil, titulo, id, year, _id }) => {
  const router = useRouter();
  const { miLista, handleAgregarMiLista, handleDeletePelicula } =
    useContext(MoviesContext);

    const path = usePathname();
    const ruta = path.replace("/", "");


  return (
    <div
      key={index}
      className="flex flex-col justify-start items-center lg:my-5 md:my-5 sm:my-2 lg:mx-4 md:mx-4 sm:mx-2 cursor-pointer active:scale-95 transition-all duration-300 bg-zinc-900 pb-2 rounded-md"
      onClick={(e) => {
        e.preventDefault();
        const idUrl = e.target.id;
        router.push(`/${ruta}/${idUrl}`);
      }}
    >
      <AgregarLista
        _id={_id}
        handleAgregarMiLista={handleAgregarMiLista}
        handleDeletePelicula={handleDeletePelicula}
        miLista={miLista}
      />
      <div className="w-full">
        <p className="absolute bg-black/50 lg:px-3 md:px-1.5 sm:px-1.5 lg:py-1 md:py-1 sm:py-0.5 lg:rounded-md md:rounded-md sm:rounded-sm lg:text-sm md:text-sm sm:text-[10px] lg:m-2 md:m-2 sm:m-1 font-mono lg:mx-2 md:mx-3 sm:mx-1 font-bold">
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
      <p className="lg:text-xs md:text-xs sm:text-[10px] lg:mt-2 md:mt-2 sm:mt-2 text-gray-400">
        {acortarNombre(titulo)}
      </p>
    </div>
  );
};

export default CardMovie;
