import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

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
      <div className="w-[600px] my-5">
        <nav className="flex flex-row justify-center items-center dark:text-white">
          <ul className=" flex flex-row justify-center items-center lg:text-base md:text-base sm:text-[10px] rounded-md select-none font-semibol cursor-pointer">
            <li
              className={`p-2 dark:hover:bg-white/10 hover:bg-black/10 rounded-md flex flex-row justify-center items-center text-sm pr-3 pl-1.5 py-2.5 ${
                inicio === 0 ? "dark:text-gray-500 cursor-not-allowed" : ""
              }`}
              onClick={() => {
                if (inicio === 0) return;
                setInicio(inicio - numPelPorPagina);
                setFin(fin - numPelPorPagina);
                router.push(inicio == 0 ? "#" : "#page");
              }}
            >
              <MdKeyboardArrowLeft className="text-xl mr-1" /> Anterior
            </li>
            <li
              className={`py-2 px-4 dark:hover:bg-white/10 rounded-md ${
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
            <li className="py-2 px-4 border-[1px] dark:border-white/20 rounded-md mx-1 hover:bg-black/10 dark:hover:bg-white/10">
              {Math.round(inicio / numPelPorPagina + 1)}
            </li>
            <li
              className={`py-2 px-4 dark:hover:bg-white/10 hover:bg-black/10 rounded-md ${
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
                  ? "dark:text-gray-500 cursor-not-allowed"
                  : ""
              } pl-3 pr-1.5 py-2.5 dark:hover:bg-white/10 hover:bg-black/10 hover:rounded-md flex flex-row justify-center items-center text-sm`}
            >
              Siguiente
              <MdKeyboardArrowLeft className="rotate-180 text-xl ml-1" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
