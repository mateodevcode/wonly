import React from "react";
import Image from "next/image";
import { Icono } from "@/data/logo";

const HeaderTop = () => {
  return (
    <div className="w-full bg-white lg:h-32 md:h-32 sm:h-20 flex flex-row justify-between items-center mt-16">
      <div className="lg:mx-40 md:mx-40 sm:mx-5">
        <p className="lg:text-2xl md:text-2xl sm:text-base dark:text-black hover:text-gray-800 dark:hover:text-gray-800 cursor-pointer font-semibold">
          Noticias de Wonly
        </p>
      </div>
      <div className="lg:mx-40 md:mx-40 sm:mx-5">
        <Image src={Icono.src} alt={Icono.alt} width={400} height={400} className="w-28 h-28 mx-2" />
      </div>
    </div>
  );
};

export default HeaderTop;
