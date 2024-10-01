const CardInformativo = ({
  titulo,
  descripcion,
  generos,
  numeroTemp,
  year,
}) => {
  return (
    <div className="lg:w-[700px] sm:w-full lg:h-[220px] md:h-[220px] sm:h-[170px]">
      <h1 className="lg:text-6xl md:text-6xl sm:text-4xl text-white font-bold font-serif text-left px-4">
        {titulo}
      </h1>
      <p className="text-white font-semibold px-4 lg:text-lg md:text-lg sm:text-sm mt-3 lg:w-[500px] md:w-[500px] sm:w-full">
        {descripcion}
      </p>
      <div className="px-4">
        {generos.map((genero, index) => (
          <p
            key={index}
            className="text-white px-2 py-1 mt-2 bg-green-600 w-max inline-block lg:mx-1 md:mx-1 sm:mx-0.5 rounded-md text-sm"
          >
            {genero}
          </p>
        ))}
      </div>
      <div className="flex px-4 font-bold font-mono mt-2 lg:text-lg md:text-lg sm:text-sm">
        <p className="text-white mx-2">
          {numeroTemp} {numeroTemp ? "Temporadas" : ""}
        </p>
        <p className="text-white mx-2">{year}</p>
      </div>
    </div>
  );
};

export default CardInformativo;
