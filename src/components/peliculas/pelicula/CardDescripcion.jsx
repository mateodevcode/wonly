import BotonHora from "./BotonHora";

const CardDescripcion = ({titulo, duracion, descripcion}) => {
  return (
    <div className="w-[800px] flex flex-col justify-center items-start mb-20 mt-2 px-8">
      <div className="font-bold text-2xl mt-2 dark:text-white flex flex-row justify-between items-center w-full">
        {titulo}
        <BotonHora hora={duracion} />
      </div>
      <p className="text-l dark:text-white mt-2">{descripcion}</p>
    </div>
  );
};

export default CardDescripcion;
