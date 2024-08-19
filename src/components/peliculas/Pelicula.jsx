"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const Pelicula = ({index, imagen_perfil, titulo, id}) => {
    const router = useRouter();

  return (
    <div
      key={index}
      className="flex flex-col justify-center items-center my-5 mx-4 cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        const idUrl = e.target.id;
        router.push(`/peliculas/${idUrl}`);
      }}
    >
      <Image
        src={imagen_perfil}
        width={500}
        height={500}
        alt={titulo}
        id={id}
        className="w-96 h-96"
      />
      <p className="text-xl mt-2">{titulo}</p>
    </div>
  );
};

export default Pelicula;
