import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Pagination = ({
  filtrarPeliculas,
  inicio,
  fin,
  peliculasCargadas,
  numeroPeliculas,
  setFin,
  setInicio,
}) => {
  const [numPelPorPagina, setNumPelPorPagina] = useState(numeroPeliculas);
  const router = useRouter();

  return (
    <div className="w-full flex flex-row justify-center items-center font-mono">
      <div className="w-[600px]">
        <nav className="flex flex-row justify-center items-center text-sky-500">
          <ul className=" flex flex-row justify-center items-center lg:text-base md:text-base sm:text-[10px] border-[1px] border-white rounded-md select-none font-semibol cursor-pointer">
            <li
              className={`p-2 hover:bg-white/10 rounded-l-md ${
                inicio === 0 ? "text-gray-500" : ""
              }`}
              onClick={() => {
                if (inicio === 0) return;
                setInicio(inicio - numPelPorPagina);
                setFin(fin - numPelPorPagina);
                router.push(inicio == 0 ? "#" : "#page");
              }}
            >
              Anterior
            </li>
            <li
              className={`py-2 px-4 border-l-[1px] border-white hover:bg-white/10 ${
                inicio === 0 ? "hidden" : ""
              }`}
              onClick={() => {
                setInicio(inicio - numPelPorPagina);
                setFin(fin - numPelPorPagina);
                router.push("#page");
              }}
            >
              {inicio / numPelPorPagina}
            </li>
            <li className="py-2 px-4 border-l-[1px] border-r-[1px] border-white hover:bg-white/10 bg-sky-500/40">
              {Math.round(inicio / numPelPorPagina + 1)}
            </li>
            <li
              className={`py-2 px-4 border-white hover:bg-white/10 ${
                peliculasCargadas.length < numeroPeliculas ||
                filtrarPeliculas.length <= numeroPeliculas
                  ? "hidden"
                  : ""
              }`}
              onClick={() => {
                setInicio(fin);
                setFin(fin + numPelPorPagina);
                router.push("#page");
              }}
            >
              {inicio / numPelPorPagina + 2}
            </li>
            <li
              onClick={() => {
                if (peliculasCargadas.length < numeroPeliculas) return;
                if (filtrarPeliculas.length <= numeroPeliculas) return;
                setInicio(fin);
                setFin(fin + numPelPorPagina);
                router.push("#page");
              }}
              className={`${
                peliculasCargadas.length < numeroPeliculas ||
                filtrarPeliculas.length <= numeroPeliculas
                  ? "text-gray-500 "
                  : "border-l-[1px]"
              } p-2 hover:bg-white/10`}
            >
              Siguiente
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
