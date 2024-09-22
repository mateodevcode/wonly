import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

const CardTemporadas = ({
  index,
  temporada,
  url,
  titulo,
  linkTo,
  serie,
  episodios,
}) => {
  const router = useRouter();

  return (
    <div
      className="w-60 h-72 font-mono flex flex-col justify-between items-center"
      key={index}
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-white text-2xl my-2 bg-black/80 w-full text-center">
        {temporada}
      </p>
      <div className="w-full flex flex-col">
        <p className="text-white text-lg my-2 bg-black/80 text-center">
          {titulo} - <span className="bg-red-900 p-1 ">{episodios.length}</span> Episodios
        </p>
        <div
          className="bg-blue-600 dark:bg-green-800/80 text-white dark:text-white font-semibold cursor-pointer hover:bg-blue-600/50 dark:hover:bg-green-700/80 select-none text-center py-2 flex flex-row justify-center items-center"
          id={linkTo}
          onClick={async (e) => {
            e.preventDefault();
            router.push(`/series/${serie}/${e.target.id}`);
          }}
        >
          <FaPlay className="mx-2" />
          Reproducir
          
        </div>
      </div>
    </div>
  );
};

export default CardTemporadas;
