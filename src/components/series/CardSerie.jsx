import Image from "next/image";
import { useRouter } from "next/navigation";

const CardSerie = ({ index, imagen_perfil, titulo, id }) => {
  const router = useRouter();

  return (
    <div
      key={index}
      className="flex flex-col justify-start items-center lg:my-5 md:my-5 sm:my-2 lg:mx-4 md:mx-4 sm:mx-1 cursor-pointer active:scale-95 transition-all duration-300"
      onClick={(e) => {
        e.preventDefault();
        const idUrl = e.target.id;
        router.push(`/series/${idUrl}`);
      }}
    >
      <Image
        src={imagen_perfil}
        width={500}
        height={500}
        alt={titulo}
        id={id}
        className="lg:w-72 md:w-72 sm:w-20 lg:h-72 md:h-72 sm:h-20"
      />
      <p className="lg:text-base md:text-base sm:text-[5px] mt-2">{titulo}</p>
    </div>
  );
};

export default CardSerie;
