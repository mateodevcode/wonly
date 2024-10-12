"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const Pelicula = ({index, imagen_perfil, titulo, id, year}) => {
    const router = useRouter();

  return (
    <div
      key={index}
      className="flex flex-col justify-start items-center my-5 mx-4 cursor-pointer active:scale-95 transition-all duration-300"
      onClick={(e) => {
        e.preventDefault();
        const idUrl = e.target.id;
        router.push(`/peliculas/${idUrl}`);
      }}
    >
      <div className="w-full">
      <p className="absolute bg-black/50 px-3 py-1 rounded-md text-sm m-2 font-mono lg:mx-2 md:mx-2 sm:mx-6 font-bold">
        {year}
      </p>
      </div>
      <Image
        src={imagen_perfil}
        width={500}
        height={500}
        alt={titulo}
        id={id}
        className="w-72 h-72"
      />
      <p className="text-base mt-2">{titulo}</p>
    </div>
  );
};

export default Pelicula;
