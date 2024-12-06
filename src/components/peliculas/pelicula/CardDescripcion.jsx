import BotonHora from "./BotonHora";

const CardDescripcion = ({ titulo, duracion, descripcion, temporada, episodio }) => {
  return (
    <div className="xl:w-[1440px] lg:w-[950px] md:w-full sm:w-full flex flex-col justify-center items-start lg:mb-10 md:mb-10 sm:mb-5 px-5">
      <div className="font-semibold lg:text-xl md:text-xl sm:text-sm text-white flex flex-row justify-between items-center w-full">
        {temporada ? temporada + " " + episodio + " - " : null} { titulo}
        <BotonHora hora={duracion} />
      </div>
      <p className="lg:text-base md:text-base sm:text-xs text-gray-300 mt-2">
        {descripcion}
      </p>
    </div>
  );
};

export default CardDescripcion;
