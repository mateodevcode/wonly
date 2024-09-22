import React from "react";
import Image from "next/image";

const HeaderTop = () => {
  return (
    <div className="w-full bg-blue-800/15 lg:h-40 md:h-40 sm:h-20 flex flex-row justify-between items-center">
      <div className="lg:mx-40 md:mx-40 sm:mx-5">
        <p className="lg:text-2xl md:text-2xl sm:text-base dark:text-black hover:text-gray-800 dark:hover:text-gray-800 cursor-pointer font-semibold">
          Noticias de Wonly
        </p>
      </div>
      <div className="lg:mx-40 md:mx-40 sm:mx-5">
        <Image src="https://i.postimg.cc/JzKQwjc7/logo-wonly-4.png" alt="Logo de Wonly" width={400} height={400} className="lg:w-40 md:w-40 sm:w-20 lg:h-40 md:h-40 sm:h-20 mx-2" />
      </div>
    </div>
  );
};

export default HeaderTop;
