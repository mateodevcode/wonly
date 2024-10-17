import React from "react";
import TituloTop from "./TituloTop";
import Link from "next/link";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const TopSearch = ({
  path,
  enlacesSeries,
  setInicio,
  setFin,
  setBuscar,
  numeroPeliculas,
}) => {
  return (
    <div className="flex flex-col items-start justify-center lg:w-10/12 md:w-10/12 sm:w-11/12 lg:mt-10 md:mt-10 sm:mt-3">
      <TituloTop path={path} />
      <div
        className="flex flex-row justify-between items-center lg:mt-10 md:mt-10 sm:mt-5 lg:text-base md:text-base sm:text-[10px] bg-gray-900 w-full lg:h-10 md:h-10 sm:h-6"
        id="page"
      >
        <div>
          <Link
            href={`${path === "series" ? "/peliculas" : "/series"}`}
            className="font-semibold hover:bg-green-600/50 lg:py-2 md:py-2 sm:py-1.5 px-3 cursor-pointer"
          >
            {path === "series" ? "Peliculas" : "Series"}
          </Link>
          {enlacesSeries.map((enlace, index) => (
            <Link
              key={index}
              href={`${enlace.Url}`}
              className="font-semibold hover:bg-green-600/50 lg:py-2 md:py-2 sm:py-1.5 px-3 cursor-pointer"
            >
              {enlace.nombre}
            </Link>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center">
          <InputGroup
            size={{
              base: "xs",
              sm: "md",
              md: "md",
              lg: "md",
            }}
          >
            <InputLeftElement pointerEvents="none">
              <BsSearch className="lg:text-xl md:text-xl sm:text-xs" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Buscar"
              fontFamily={"monospace"}
              onChange={(e) => {
                setInicio(0);
                setFin(numeroPeliculas);
                e.preventDefault();
                setBuscar(e.target.value);
              }}
            />
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default TopSearch;
