import React from "react";
import { CgOptions } from "react-icons/cg";

const OpcionesReproductor = ({ url, setUrlSeleccionada }) => {
  return (
    <div className="text-sm flex w-full justify-start items-center gap-2 lg:px-0 md:px-5">
      {url.map((url, index) => (
        <div
          key={index}
          className="flex flex-row justify-between items-center p-2 font-semibold bg-slate-100 hover:bg-slate-300 cursor-pointer font-mono my-1 select-none rounded-sm active:scale-95 transition-all duration-200 shadow-sm shadow-white hover:scale-[101%]"
          onClick={() => setUrlSeleccionada(url)}
        >
          <span className="mr-3">Opción {index + 1}</span>{" "}
          <CgOptions className="text-lg" />
        </div>
      ))}
    </div>
  );
};

export default OpcionesReproductor;
