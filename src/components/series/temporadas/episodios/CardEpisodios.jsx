import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <div
      id={episodio}
      onClick={(e) => {
        e.preventDefault();
        router.push(Url);
      }}
      key={index}
      className="w-full lg:h-60 md:h-60 sm:h-32 flex flex-row items-center justify-center bg-slate-800/50 my-2 rounded-xl text-white hover:bg-slate-800/70 cursor-pointer"
    >
      <div className="flex flex-row justify-start items-start w-full">
        <div className="rounded-lg lg:w-2/12 md:w-72 sm:w-40 lg:p-5 md:p-5 sm:p-2 lg:h-60 md:h-60 sm:h-24 flex flex-row items-center justify-center">
          <Image
            src={imagen_perfil}
            alt="imagen"
            width={200}
            height={200}
            className="w-full rounded-full"
          />
        </div>
        <div className="w-10/12 flex flex-col justify-between items-start mx-5 lg:h-60 md:h-72 sm:h-24 select-none">
          <div className="flex flex-col justify-start items-start lg:mt-4 md:mt-4 sm:mt-0">
            <h1 className="lg:text-xl md:text-xl sm:text-xs font-bold lg:mx-2 md:mx-2 sm:mx-0">
              {temporada} {episodio} - {titulo}
            </h1>
            <div className="flex flex-row justify-center items-center">
              <p className="lg:mx-2 md:mx-2 sm:mx-0 font-bold lg:my-2 md:my-3 sm:my-1 py-1 md:text-base sm:text-[5px]">
                {duracion} min
              </p>
              <p className="mx-2 font-bold bg-red-600 lg:px-2 md:px-2 sm:px-1 rounded-md lg:my-2 md:my-3 sm:my-1 py-1 md:text-base sm:text-[5px]">
                {edad}
                {"+"}
              </p>
            </div>
            <p className="lg:mx-2 md:mx-2 sm:mx-0 lg:text-lg md:text-lg sm:text-[8px] font-semibold text-gray-400">
              {descripcion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEpisodios;
