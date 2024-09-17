import Image from "next/image";
import Boton from "./Boton";

const CardEpisodios = ({
  index,
  imagen_perfil,
  temporada,
  episodio,
  titulo,
  duracion,
  descripcion,
  Url,
  edad,
}) => {

  return (
    <div
      key={index}
      className="w-full lg:h-80 md:h-80 sm:h-44 flex flex-row items-center justify-center bg-gray-950 my-5 rounded-xl text-white hover:bg-gray-900"
    >
      <div className="flex flex-row justify-center items-start">
        <div className="rounded-lg lg:w-72 md:w-72 sm:w-40 lg:p-5 md:p-5 sm:p-2">
          <Image
            src={imagen_perfil}
            alt="imagen"
            width={200}
            height={200}
            className="w-full rounded-full"
          />
        </div>
        <div className="w-3/4 flex flex-col justify-between items-start mx-5 lg:h-72 md:h-72 sm:h-32">
          <div className="flex flex-col justify-start items-start">
            <h1 className="lg:text-xl md:text-xl sm:text-xs font-bold lg:mx-2 md:mx-2 sm:mx-0">
              {temporada} - {episodio} {titulo}
            </h1>
            <div className="flex flex-row justify-center items-center">
              <p className="lg:mx-2 md:mx-2 sm:mx-0 font-bold bg-green-600 lg:px-2 md:px-2 sm:px-1 rounded-md lg:my-3 md:my-3 sm:my-1 py-1 md:text-base sm:text-[5px]">
                {duracion}
              </p>
              <p className="mx-2 font-bold bg-red-600 lg:px-2 md:px-2 sm:px-1 rounded-md lg:my-3 md:my-3 sm:my-1 py-1 md:text-base sm:text-[5px]">
                {edad}
                {"+"}
              </p>
            </div>
            <p className="lg:mx-2 md:mx-2 sm:mx-0 lg:text-lg md:text-lg sm:text-[8px] font-semibold text-gray-400">
              {descripcion}
            </p>
          </div>
          <div className="w-full flex flex-row justify-end items-center lg:px-10 md:px-10 sm:px-5">
            <Boton episodio={episodio} Url={Url} nombre="Ver episodio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEpisodios;
