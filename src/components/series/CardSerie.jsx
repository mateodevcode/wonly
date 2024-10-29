"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { PiListPlus } from "react-icons/pi";
import { MoviesContext } from "@/context/MoviesContext";

const CardSerie = ({ index, imagen_perfil, titulo, id, _id }) => {
  const router = useRouter();
  const [isAdded, setIsAdded] = useState(false);
  const { miLista, handleAgregarMiLista, handleDeletePelicula } =
    useContext(MoviesContext);

  useEffect(() => {
    const Listas = miLista?.map((serie) => serie);
    if (Listas?.includes(_id)) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [miLista, _id]);

  return (
    <div
      key={index}
      className="flex flex-col justify-start items-center lg:my-5 md:my-5 sm:my-2 lg:mx-4 md:mx-4 sm:mx-2 cursor-pointer active:scale-95 transition-all duration-300"
      onClick={(e) => {
        e.preventDefault();
        const idUrl = e.target.id;
        router.push(`/series/${idUrl}`);
      }}
    >
      <div className="w-full grid place-content-end">
        {isAdded ? (
          <>
            <button
              className="bg-blue-700 p-2"
              id={_id}
              onClick={handleDeletePelicula}
            >
              <p
                id={_id}
                className="text-white hover:text-gray-300 text-xs flex flex-row justify-between items-center"
              >
                Ya esta agregada{" "}
                <IoIosCheckmarkCircle id={_id} className="text-base ml-2" />
              </p>
            </button>
          </>
        ) : (
          <>
            <button
              className="bg-blue-700 p-2"
              id={_id}
              onClick={handleAgregarMiLista}
            >
              <p
                id={_id}
                className="text-white hover:text-gray-300 text-xs flex flex-row justify-between items-center"
              >
                Agregar a mi lista{" "}
                <PiListPlus id={_id} className="text-base ml-2" />
              </p>
            </button>
          </>
        )}
      </div>
      <Image
        src={imagen_perfil}
        width={500}
        height={500}
        alt={titulo}
        id={id}
        className="lg:w-72 md:w-72 sm:w-40 lg:h-72 md:h-72 sm:h-40"
      />
      <p className="lg:text-base md:text-base sm:text-[10px] mt-2">{titulo}</p>
    </div>
  );
};

export default CardSerie;
