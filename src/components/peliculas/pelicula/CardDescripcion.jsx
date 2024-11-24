import BotonHora from "./BotonHora";

const CardDescripcion = ({ titulo, duracion, descripcion, temporada, episodio }) => {
  return (
    <div className="xl:w-[1440px] lg:w-[950px] md:w-full sm:w-full flex flex-col justify-center items-start lg:mb-20 md:mb-20 sm:mb-5 lg:mt-2 md:mt-2 sm:mt-0 px-5 bg-slate-500">
      <div className="font-bold lg:text-2xl md:text-2xl sm:text-sm mt-2 dark:text-white flex flex-row justify-between items-center w-full">
        {temporada ? temporada + " " + episodio + " - " : null} { titulo}
        <BotonHora hora={duracion} />
      </div>
      <p className="lg:text-base md:text-base sm:text-xs dark:text-white mt-2">
        {descripcion}
      </p>
    </div>
  );
};

export default CardDescripcion;
