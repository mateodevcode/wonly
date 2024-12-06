import { convertirMinutos } from "@/config/convertirMinutos";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

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
  const params = useParams();
  

  return (

    <div
      id={episodio}
      onClick={(e) => {
        e.preventDefault();
        router.push(Url);
      }}
      key={index}
      className={`w-full lg:h-56 md:h-56 sm:h-32 flex flex-row items-center justify-center my-2 rounded-xl hover:bg-zinc-700 cursor-pointer ${params.episodio === episodio ? "bg-zinc-800 text-white" : "bg-zinc-900 text-white"}`}
    >
      <div className="flex flex-row justify-start items-center w-full">
        <div className="rounded-lg lg:w-60 md:w-72 sm:w-40 lg:p-5 md:p-5 sm:p-2 lg:h-60 md:h-60 sm:h-24 flex flex-row items-center justify-center">
          <Image
            src={imagen_perfil}
            alt="imagen"
            width={500}
            height={500}
            className="w-full rounded-full"
          />
        </div>
        <div className="w-10/12 flex flex-col justify-between items-start mx-5 lg:h-60 md:h-60 sm:h-28 select-none py-5">
          <div className="flex flex-col justify-start items-start lg:mt-4 md:mt-4 sm:mt-0">
            <div className="flex flex-row justify-center items-center">
            <h1 className="lg:text-xl md:text-lg sm:text-[10px] font-bold lg:mx-2 md:mx-2 sm:mx-0">
              {temporada} {episodio} - {titulo}
            </h1>
            <p className="text-white mx-2 font-bold bg-red-600 lg:px-2 md:px-2 sm:px-1 rounded-full py-0.5 lg:text-xs md:text-xs sm:text-[7px]">
                {edad}
                {"+"}
              </p>
            </div>
            <div className="flex flex-row justify-center items-center">
              
              <p className="lg:mx-2 md:mx-2 sm:mx-0 font-bold lg:my-2 md:my-1 sm:my-0 py-1 md:text-base sm:text-[8px]">
                {convertirMinutos(duracion)} min
              </p>
            </div>
            <p className="lg:mx-2 md:mx-2 sm:mx-0 lg:text-base md:text-base sm:text-[8px] font-semibold text-gray-400">
              {descripcion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEpisodios;
