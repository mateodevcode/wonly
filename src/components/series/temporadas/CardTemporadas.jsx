import Image from "next/image";
import { useRouter } from "next/navigation";

const CardTemporadas = ({
  index,
  temporada,
  url,
  titulo,
  cantidad,
  linkTo,
  serie,
}) => {
  const router = useRouter();

  return (
    <div
      key={index}
      className="flex flex-col items-center justify-start bg-gray-950 my-5 rounded-xl text-white hover:bg-gray-900 m-4 p-4 h-[650px]"
    >
      <p className="text-4xl font-semibold my-5">{temporada}</p>
      <div className="w-72 my-2 mx-4">
        <Image
          src={url}
          alt={titulo}
          width={300}
          height={550}
          className="w-full h-96"
        />
      </div>
      <div className="flex flex-row justify-center items-center">
        <p className="mx-2 font-semibold bg-green-600 px-2 rounded-md my-3 py-1">
          {titulo}
        </p>
        <p className="mx-2 font-semibold bg-blue-600 px-2 rounded-md my-3 py-1">
          {cantidad} Episodios
        </p>
      </div>
      <div
        className="bg-blue-600 dark:bg-red-600 text-white dark:text-white font-semibold px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600/50 dark:hover:bg-red-600/50 mx-2 select-none my-4"
        id={linkTo}
        onClick={async (e) => {
          e.preventDefault();
          router.push(`/series/${serie}/${e.target.id}`);
        }}
      >
        Ver mas
      </div>
    </div>
  );
};

export default CardTemporadas;
