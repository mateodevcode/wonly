"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { MoviesContext } from "@/context/MoviesContext";
import AgregarLista from "../AgregarLista/AgregarLista";

const CardSerie = ({ index, imagen_perfil, titulo, id, _id }) => {
  const router = useRouter();
  const { miLista, handleAgregarMiLista, handleDeletePelicula } =
    useContext(MoviesContext);

  return (
    <div
      key={index}
      className="flex flex-col justify-start items-center lg:my-5 md:my-2 sm:my-2 lg:mx-4 md:mx-2 sm:mx-2 cursor-pointer active:scale-95 transition-all duration-300 bg-zinc-900 pb-2 rounded-md"
      onClick={(e) => {
        e.preventDefault();
        const idUrl = e.target.id;
        router.push(`/series/${idUrl}`);
      }}
    >
      <AgregarLista
        _id={_id}
        handleAgregarMiLista={handleAgregarMiLista}
        handleDeletePelicula={handleDeletePelicula}
        miLista={miLista}
      />
      <Image
        src={imagen_perfil}
        width={500}
        height={500}
        alt={titulo}
        id={id}
        className="lg:w-72 md:w-60 sm:w-40 lg:h-72 md:h-60 sm:h-40 hover:opacity-50"
      />
      <p className="lg:text-sm md:text-sm sm:text-[10px] lg:mt-2 md:mt-2 sm:mt-1 text-gray-400">
        {titulo}
      </p>
    </div>
  );
};

export default CardSerie;
