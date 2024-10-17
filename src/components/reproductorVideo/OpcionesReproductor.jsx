"use client";
import React, { useState } from "react";
import { CgOptions } from "react-icons/cg";

const OpcionesReproductor = ({ url, setUrlSeleccionada }) => {
  const [options, setOptions] = useState(0);

  return (
    <div className="text-sm flex w-full justify-start items-center gap-2 lg:px-0 md:px-5">
      {url.map((url, index) => (
        <div
          key={index}
          className={`flex flex-row justify-between items-center lg:p-2 md:p-2 sm:p-1.5 font-semibold hover:bg-slate-100 cursor-pointer font-mono my-1 select-none rounded-sm active:scale-95 transition-all duration-200 shadow-sm shadow-white hover:scale-[101%] ${
            index === options ? "bg-slate-100" : "bg-slate-100/60"
          }`}
          onClick={() => {
            setOptions(index);
            setUrlSeleccionada(url);
          }}
        >
          <span className="mr-3 lg:text-base md:text-base sm:text-[10px]">
            Opción {index + 1}
          </span>{" "}
          <CgOptions className="lg:text-lg md:text-lg sm:text-sm" />
        </div>
      ))}
    </div>
  );
};

export default OpcionesReproductor;
