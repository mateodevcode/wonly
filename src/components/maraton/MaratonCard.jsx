"use client";
import TipoMovie from "./TipoMovie";

const MaratonCard = ({titulo, height, contenido}) => {

  const izq = contenido.filter((_, index) => (index + 1) % 2 !== 0);
  const der = contenido.filter((_, index) => (index + 1) % 2 === 0);

  return (
    <div className="w-full bg-[#F3F4F6] flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-center pt-20 p-10">
        {titulo}
      </h2>
      <div className="w-full flex flex-row justify-center items-center mt-10">
        {/* Lado izquierdo */}
        <div
          className={`w-96 flex flex-col justify-start items-center ${height}`}
        >
          {izq.map((movie, index) => (
            <div
              className={`flex flex-row justify-center items-center -mr-10 ${
                index === 0 ? "mb-20" : "mt-20 mb-20"
              }`}
              key={index}
            >
              <div className="bg-white w-96 p-5 rounded-md">
                <p className="text-lg font-bold">{movie.nombre}</p>
                <div className="flex flex-row justify-start items-center">
                  <p className="text-gray-400 text-sm">{movie.fecha}</p>
                  {movie.TipoMovie === "serie" ? (
                    <p className="ml-2 font-bold text-sm">{movie.temporada}</p>
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
              <TipoMovie
                tipoDeMovie={movie.TipoMovie}
                tipoDeLado={movie.TipoLado}
                enlace={movie.enlace}
              />
            </div>
          ))}
        </div>
        {/* Lado centro */}
        <div className={`w-1 bg-gray-300 ${height} mx-8`}></div>
        {/* Lado derecho */}
        <div
          className={`w-96 flex flex-col justify-start items-center ${height}`}
        >
          {der.map((movie, index) => (
            <div
              className={`flex flex-row justify-center items-center -ml-9 ${
                index === 0 ? "mt-36 mb-20" : "mt-20 mb-20"
              }`}
              key={index}
            >
              <TipoMovie
                tipoDeMovie={movie.TipoMovie}
                tipoDeLado={movie.TipoLado}
                enlace={movie.enlace}
              />
              <div className="bg-white w-96 p-5 rounded-md">
                <p className="text-lg font-bold">{movie.nombre}</p>
                <div className="flex flex-row justify-start items-center">
                  <p className="text-gray-400 text-sm">{movie.fecha}</p>
                  {movie.TipoMovie === "serie" ? (
                    <p className="ml-2 font-bold text-sm">{movie.temporada}</p>
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaratonCard;
