import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { PiListPlus } from "react-icons/pi";

const AgregarLista = ({isAdded, _id, handleAgregarMiLista, handleDeletePelicula}) => {
  return (
    <div className="w-full flex flex-row justify-center items-center">
      {isAdded ? (
        <>
          <button
            className="bg-zinc-900 hover:bg-zinc-800 p-2 rounded-t-md w-full py-3"
            id={_id}
            onClick={handleDeletePelicula}
          >
            <p
              id={_id}
              className="text-white text-xs flex flex-row justify-start items-center select-none"
            >
              <IoIosCheckmarkCircle id={_id} className="text-base mr-2" /> Ya
              esta agregada
            </p>
          </button>
        </>
      ) : (
        <>
          <button
            className="bg-gray-900 hover:bg-blue-700/20 p-2 rounded-t-md w-full py-3"
            id={_id}
            onClick={handleAgregarMiLista}
          >
            <p
              id={_id}
              className="text-white text-xs flex flex-row justify-start items-center select-none"
            >
              <PiListPlus id={_id} className="text-base mr-2" /> Añadir a mi
              lista
            </p>
          </button>
        </>
      )}
    </div>
  );
};

export default AgregarLista;
