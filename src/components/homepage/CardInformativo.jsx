import { acortarDescripcion } from "@/config/acortarDescripcion";

const CardInfo = ({ titulo, descripcion, generos }) => {
  return (
    <div className="lg:w-[700px] sm:w-full lg:h-[190px] md:h-[190px] sm:h-[135px]">
      <h1 className="lg:text-6xl md:text-6xl smd:text-4xl sm:text-4xl text-white font-bold font-serif text-left px-4">
        {titulo}
      </h1>
      <p className="text-white font-semibold px-4 lg:text-lg md:text-lg sm:text-sm mt-2 lg:w-[500px] md:w-[500px] sm:w-full">
        {acortarDescripcion(descripcion, 200)}
      </p>
      <div className="px-4">
        {generos.map((genero, index) => (
          <p
            key={index}
            className="text-white px-2 lg:py-1 md:py-1 sm:py-0.7 mt-2 bg-blue-950/80 w-max inline-block lg:mx-1 md:mx-1 sm:mx-0.5 rounded-full lg:text-[10px] md:text-[10px] sm:text-[10px] font-semibold"
          >
            {genero}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardInfo;
