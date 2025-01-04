import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

const CardTemporadas = ({ index, temporada, url, linkTo, serie }) => {
  const router = useRouter();

  return (
    <div
      key={index}
      className="flex flex-col justify-start items-center lg:my-5 md:my-5 sm:my-2 lg:mx-4 md:mx-4 sm:mx-2 cursor-pointer active:scale-95 transition-all duration-300 dark:bg-zinc-900 pb-2 rounded-md dark:text-white text-black bg-zinc-100"
      id={linkTo}
      onClick={async (e) => {
        e.preventDefault();
        router.push(`/series/${serie}/${e.target.id}`);
      }}
    >
      <div className="lg:text-sm md:text-sm sm:text-[10px] mt-2 dark:text-gray-400 flex flex-row justify-center items-center my-2 font-semibold">
        {temporada}
      </div>
      <Image
        src={url}
        width={500}
        height={500}
        alt={"temporada"}
        id={linkTo}
        className="w-full h-full object-cover hover:opacity-50"
      />
      <div className="lg:text-sm md:text-sm sm:text-[10px] mt-2 dark:text-gray-400 flex flex-row justify-center items-center select-none">
        <FaPlay className="mx-2" />
        Reproducir
      </div>
    </div>
  );
};

export default CardTemporadas;
