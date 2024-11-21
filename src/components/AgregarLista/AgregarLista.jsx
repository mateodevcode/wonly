"use client";
import React, { useEffect, useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { PiListPlus } from "react-icons/pi";

const AgregarLista = ({
  _id,
  handleAgregarMiLista,
  handleDeletePelicula,
  miLista,
}) => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const Listas = miLista?.map((pelicula) => pelicula);
    if (Listas?.includes(_id)) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [miLista, _id]);

  return (
    <div className="w-full flex flex-row justify-center items-center" id={_id}>
      {isAdded ? (
        <>
          <button
            className="bg-zinc-900 hover:bg-zinc-700 p-2 rounded-t-md w-full lg:py-3 md:py-3 sm:py-1.5"
            id={_id}
            onClick={handleDeletePelicula}
          >
            <p
              id={_id}
              className="text-white lg:text-xs md:text-xs sm:text-[10px] flex flex-row justify-start items-center select-none"
            >
              <IoIosCheckmarkCircle id={_id} className="lg:text-base md:text-base sm:text-xs mr-2" /> Ya
              esta agregada
            </p>
          </button>
        </>
      ) : (
        <>
          <button
            className="bg-gray-900 hover:bg-blue-700/20 p-2 rounded-t-md w-full lg:py-3 md:py-3 sm:py-1.5"
            id={_id}
            onClick={handleAgregarMiLista}
          >
            <p
              id={_id}
              className="text-white lg:text-xs md:text-xs sm:text-[10px] flex flex-row justify-start items-center select-none"
            >
              <PiListPlus id={_id} className="lg:text-base md:text-base sm:text-xs mr-2" /> Añadir a mi
              lista
            </p>
          </button>
        </>
      )}
    </div>
  );
};

export default AgregarLista;
