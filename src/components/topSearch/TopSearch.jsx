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
    <div className="flex flex-col items-start justify-center lg:w-10/12 md:w-10/12 sm:w-11/12">
      <div
        className="flex flex-row justify-between items-center lg:mt-10 md:mt-10 sm:mt-5 lg:text-base md:text-base sm:text-[10px]  w-full lg:h-10 md:h-10 sm:h-6"
        id="page"
      >
        <div className="bg-zinc-900 rounded-md lg:text-sm md:text-sm sm:text-[8px] text-gray-400 flex flex-row justify-center items-center p-1">
          <Link
            href={`${path === "series" ? "/peliculas" : "/series"}`}
            className="font-semibold hover:bg-white lg:py-2 md:py-2 sm:py-1.5 px-3 cursor-pointer hover:text-black rounded-sm"
          >
            {path === "series" ? "Peliculas" : "Series"}
          </Link>
          {enlacesSeries.map((enlace, index) => (
            <Link
              key={index}
              href={`${enlace.Url}`}
              className="font-semibold hover:bg-white lg:py-2 md:py-2 sm:py-1.5 px-3 cursor-pointer hover:text-black rounded-sm"
            >
              {enlace.nombre}
            </Link>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center ml-8">
          <InputGroup
          className="bg-zinc-900 rounded-md text-sm text-gray-400 flex flex-row justify-center items-center"
            size={{
              base: "xs",
              sm: "md",
              md: "md",
              lg: "md",
            }}
          >
            <InputLeftElement pointerEvents="none">
              <BsSearch className="lg:text-base md:text-base sm:text-[10px]" />
            </InputLeftElement>
            <Input
              className="placeholder-gray-400 text-white"
              type="text"
              placeholder="Buscar"
              fontFamily={"monospace"}
              fontSize={{
                base: "10",
                sm: "md",
                md: "md",
                lg: "md",
              }}
              border={"none"}
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
