import BotonHora from "./BotonHora";

const CardDescripcion = ({ titulo, duracion, descripcion, temporada, episodio }) => {

  return (
    <div className={`flex flex-col justify-center items-start lg:mb-10 md:mb-10 sm:mb-5 p-1 w-full`}>
      <div className="flex flex-row justify-between items-center w-full">
        <p className="font-semibold lg:text-xl md:text-xl sm:text-sm smd:text-base dark:text-white max-w-[80%] ">{temporada ? temporada + " " + episodio + " - " : null} { titulo}</p>
        <BotonHora hora={duracion} />
      </div>
      <p className="lg:text-base md:text-base sm:text-xs dark:text-gray-300 mt-2">
        {descripcion}
      </p>
    </div>
  );
};

export default CardDescripcion;
