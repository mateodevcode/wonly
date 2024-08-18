

const CardInformativo = ({titulo, descripcion, generos, numeroTemp, year}) => {
  return (
    <>
      <h1 className="text-6xl text-white font-bold font-serif text-left px-4">
        {titulo}
      </h1>
      <p className="text-white font-semibold px-4 text-lg mt-3 w-[500px]">
        {descripcion}
      </p>
      <div className="px-4">
        {generos.map((genero, index) => (
          <p
            key={index}
            className="text-white px-2 py-1 italic mt-2 bg-green-600 w-max inline-block mx-1 rounded-md text-sm"
          >
            {genero}
          </p>
        ))}
      </div>
      <div className="flex px-2 font-bold font-mono mt-2">
        <p className="text-white mx-2 text-sm">
          {numeroTemp} {numeroTemp ? "Temporadas" : ""}
        </p>
        <p className="text-white mx-2 text-sm">{year}</p>
      </div>
    </>
  );
};

export default CardInformativo;
