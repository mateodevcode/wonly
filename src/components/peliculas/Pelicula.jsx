"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { PiListPlus } from "react-icons/pi";
import { MoviesContext } from "@/context/MoviesContext";
import AgregarLista from "../AgregarLista/AgregarLista";

const Pelicula = ({ index, imagen_perfil, titulo, id, year, _id }) => {
  const router = useRouter();
  const [isAdded, setIsAdded] = useState(false);
  const { miLista, handleAgregarMiLista, handleDeletePelicula } =
    useContext(MoviesContext);

  useEffect(() => {
    const Listas = miLista?.map((pelicula) => pelicula);
    if (Listas?.includes(_id)) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [miLista, _id]);

  return (
    <div
      key={index}
      className="flex flex-col justify-start items-center lg:my-5 md:my-5 sm:my-2 lg:mx-4 md:mx-4 sm:mx-2 cursor-pointer active:scale-95 transition-all duration-300 bg-zinc-900 pb-2 rounded-md"
      onClick={(e) => {
        e.preventDefault();
        const idUrl = e.target.id;
        router.push(`/peliculas/${idUrl}`);
      }}
    >
      <AgregarLista isAdded={isAdded} _id={_id} handleAgregarMiLista={handleAgregarMiLista} handleDeletePelicula={handleDeletePelicula} />
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
        className="lg:w-72 md:w-72 sm:w-40 lg:h-72 md:h-72 sm:h-40 hover:opacity-50"
      />
      <p className="lg:text-sm md:text-sm sm:text-[10px] mt-2 text-gray-400">{titulo}</p>
    </div>
  );
};

export default Pelicula;
