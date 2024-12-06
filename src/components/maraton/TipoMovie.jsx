import React from "react";
import { FiVideo } from "react-icons/fi";
import { LuTv } from "react-icons/lu";

function TipoMovie({ tipoDeMovie, tipoDeLado }) {  
  return (
    <div className="z-10">
      {tipoDeMovie === "pelicula" ? (
        <div className={`w-10 h-10 rounded-full flex flex-row justify-center items-center ${tipoDeLado === "izquierda" ? "ml-7" : "mr-7"} ${tipoDeMovie === "pelicula" ? "bg-blue-500" : "bg-green-500"}`}>
          <FiVideo className="text-white text-lg" />
        </div>
      ) : (
        <div className={`w-10 h-10 rounded-full flex flex-row justify-center items-center ${tipoDeLado === "izquierda" ? "ml-7" : "mr-7"} ${tipoDeMovie === "pelicula" ? "bg-blue-500" : "bg-green-500"}`}>
          <LuTv className="text-white text-lg" />
        </div>
      )}
    </div>
  );
}

export default TipoMovie;
