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
      className="w-full h-80 flex flex-row items-center justify-center bg-gray-950 my-5 rounded-xl text-white hover:bg-gray-900"
    >
      <div className="flex flex-row justify-center items-start">
        <div className="rounded-lg w-72 p-5">
          <Image
            src={imagen_perfil}
            alt="imagen"
            width={200}
            height={200}
            className="w-full rounded-full"
          />
        </div>
        <div className="w-3/4 flex flex-col justify-between items-start mx-5 h-72">
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-xl font-bold mx-2">
              {temporada} - {episodio} {titulo}
            </h1>
            <div className="flex flex-row justify-center items-center">
              <p className="mx-2 font-bold bg-green-600 px-2 rounded-md my-3 py-1">
                {duracion}
              </p>
              <p className="mx-2 font-bold bg-red-600 px-2 rounded-md my-3 py-1">
                {edad}
                {"+"}
              </p>
            </div>
            <p className="mx-2 text-lg font-semibold text-gray-400">
              {descripcion}
            </p>
          </div>
          <div className="w-full flex flex-row justify-end items-center px-10">
            <Boton episodio={episodio} Url={Url} nombre="Ver episodio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEpisodios;
