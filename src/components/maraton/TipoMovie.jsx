import { Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FiVideo } from "react-icons/fi";
import { LuTv } from "react-icons/lu";

const TipoMovie = ({ tipoDeMovie, tipoDeLado, enlace }) => {
  const commonClasses = `w-10 h-10 rounded-full flex flex-row justify-center items-center ${
    tipoDeLado === "izquierda" ? "ml-7" : "mr-7"
  } ${
    tipoDeMovie === "pelicula"
      ? "bg-blue-500 hover:bg-blue-400"
      : "bg-green-500 hover:bg-green-400"
  }`;

  return (
    <Tooltip
      label={`Ver ${tipoDeMovie}`}
      fontSize="small"
      bg="black"
      color="white"
      rounded={5}
      paddingBottom={1}
    >
      <Link className="z-10" href={enlace}>
        {tipoDeMovie === "pelicula" ? (
          <div className={commonClasses}>
            <FiVideo className="text-white text-lg hover:text-xl" />
          </div>
        ) : (
          <div className={commonClasses}>
            <LuTv className="text-white text-lg hover:text-xl" />
          </div>
        )}
      </Link>
    </Tooltip>
  );
};

export default TipoMovie;
