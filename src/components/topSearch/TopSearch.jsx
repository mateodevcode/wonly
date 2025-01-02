import Link from "next/link";

const TopSearch = ({
  path,
  enlacesSeries,
  setInicio,
  setFin,
  setBuscar,
  numeroPeliculas,
}) => {
  const paths = path === "series" ? "Peliculas" : "Series";

  return (
    <div className="flex flex-col items-start justify-center xl:w-10/12 lg:w-10/12 md:w-10/12 smd:w-11/12 sm:w-11/12 pt-20">
      <div
        className="flex flex-row justify-between items-center lg:mt-10 md:mt-10 sm:mt-5 w-full lg:h-10 md:h-10 smd:h-10 sm:h-10"
        id=""
      >
        <div className="dark:bg-zinc-900 bg-zinc-200 rounded-md lg:text-sm md:text-sm smd:text-sm sm:text-sm dark:text-gray-400 flex flex-row justify-center items-center p-1">
          <Link
            href={`${paths.toLocaleLowerCase()}`}
            className="dark:hover:bg-white hover:bg-black lg:py-2 md:py-2 sm:py-1.5 px-3 cursor-pointer hover:text-white dark:hover:text-black rounded-sm"
          >
            {paths}
          </Link>
          {enlacesSeries.map((enlace, index) => (
            <Link
              key={index}
              href={`${enlace.Url}`}
              className=" dark:hover:bg-white hover:bg-black hover:text-white lg:py-2 md:py-2 sm:py-1.5 px-3 cursor-pointer dark:hover:text-black rounded-sm"
            >
              {enlace.nombre}
            </Link>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center xl:w-[200px] lg:w-[200px] md:w-[200px] smd:w-[150px] sm:w-[100px] h-10">
          <input
            className="placeholder-gray-400 dark:text-white dark:bg-zinc-900 rounded-md w-full h-full pl-3 py-3 sm:text-xs smd:text-xs md:text-sm lg:text-sm xl:text-sm"
            type="text"
            placeholder="Buscar"
            fontFamily="monospace"
            border="none"
            onChange={(e) => {
              setInicio(0);
              setFin(numeroPeliculas);
              e.preventDefault();
              setBuscar(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TopSearch;
