import BotonHora from "./BotonHora";

const CardDescripcion = ({ titulo, duracion, descripcion }) => {
  return (
    <div className="xl:w-[1440px] lg:w-[950px] md:w-[800px] sm:w-full flex flex-col justify-center items-start lg:mb-20 md:mb-20 sm:mb-5 lg:mt-2 md:mt-2 sm:mt-0 lg:px-0 md:px-5 sm:px-5">
      <div className="font-bold lg:text-2xl md:text-2xl sm:text-sm mt-2 dark:text-white flex flex-row justify-between items-center w-full">
        {titulo}
        <BotonHora hora={duracion} />
      </div>
      <p className="lg:text-base md:text-base sm:text-xs dark:text-white mt-2">
        {descripcion}
      </p>
    </div>
  );
};

export default CardDescripcion;
