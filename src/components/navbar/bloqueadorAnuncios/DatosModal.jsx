import Image from "next/image";
import Link from "next/link";
import React from "react";

const DatosModal = () => {
  return (
    <div>
      <p className="text-lg">
        ✨ Los anuncios pueden ser molestos, pero son la razón por la que
        podemos ofrecer contenido gratuito. 🎥
      </p>
      <br />
      <p className="text-lg">
        💡 Aun así, te recomendamos instalar un bloqueador de anuncios para
        mejorar tu experiencia. 🔒
      </p>
      <Link
        href={"https://adblockplus.org/es/"}
        target="_blank"
        className="flex flex-row justify-center items-center text-xl select-none hover:text-blue-500 cursor-pointer font-bold mt-2"
      >
        <Image
          src="/adblockplus.png"
          alt="adblockplus"
          width={200}
          height={200}
          className="w-20 mx-5"
        />{" "}
        <p className="mx-5">
          <strong>Instalar</strong> Adblock Plus
        </p>
      </Link>
    </div>
  );
};

export default DatosModal;
