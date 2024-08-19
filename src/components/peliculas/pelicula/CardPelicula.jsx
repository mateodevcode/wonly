"use client";


const CardPelicula = ({
  titulo,
  descripcion,
  url,
  duracion,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center mt-20">
        <iframe
          src={url}
          width="750"
          height="500"
          allow="autoplay"
          frameBorder="0"
          id="videoplayer"
        />
      </div>
      <div
        className="text-xl text-white cursor-pointer bg-blue-600/20 hover:bg-green-600/20 w-[750px] text-center select-none py-2"
        onClick={() => {
          document.getElementById("videoplayer").requestFullscreen();
        }}
      >
        Ver en pantalla completa
      </div>
      <div className="w-[800px] flex flex-col justify-center items-start mb-20 mt-5 px-8">
        <div className="font-bold text-2xl mt-2 dark:text-white flex flex-row justify-between items-center w-full">
          {titulo}{" "}
          <span className="bg-[#ffee00] px-2 rounded-md font-semibold py-1 mt-2 text-black text-sm">
            {duracion } min
          </span>{" "}
        </div>
        <p className="text-l dark:text-white mt-2">{descripcion}</p>
      </div>
    </div>
  );
};

export default CardPelicula;
