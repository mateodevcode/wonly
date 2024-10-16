"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const Pelicula = ({index, imagen_perfil, titulo, id, year}) => {
    const router = useRouter();

  return (
    <div
      key={index}
      className="flex flex-col justify-start items-center lg:my-5 md:my-5 sm:my-2 lg:mx-4 md:mx-4 sm:mx-2 cursor-pointer active:scale-95 transition-all duration-300"
      onClick={(e) => {
        e.preventDefault();
        const idUrl = e.target.id;
        router.push(`/peliculas/${idUrl}`);
      }}
    >
      <div className="w-full">
      <p className="absolute bg-black/50 lg:px-3 md:px-1.5 sm:px-1.5 lg:py-1 md:py-1 sm:py-0.5 lg:rounded-md md:rounded-md sm:rounded-sm lg:text-sm md:text-sm sm:text-[10px] lg:m-2 md:m-2 sm:m-1 font-mono lg:mx-2 md:mx-3 sm:mx-1 font-bold">
        {year}
      </p>
      </div>
      <Image
        src={imagen_perfil}
        width={500}
        height={500}
        alt={titulo}
        id={id}
        className="lg:w-72 md:w-72 sm:w-40 lg:h-72 md:h-72 sm:h-40"
      />
      <p className="lg:text-base md:text-base sm:text-[10px] mt-2">{titulo}</p>
    </div>
  );
};

export default Pelicula;
