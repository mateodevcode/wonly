"use client";
import { useContext } from "react";
import { useParams } from "next/navigation";
import CardPelicula from "./CardPelicula";
import { usePathname } from "next/navigation";
import SpinnerGlobal from "@/components/spinner/SpinnerGlobal";
import CardMovie from "@/components/CardMovies/CardMovie";
import { MoviesContext } from "@/context/MoviesContext";
import Image from "next/image";
import SliderSimiliar from "@/components/series/temporadas/episodios/SliderSimilar";

const PeliculaActual = () => {
  const { seriesYpeliculas, peliculas } = useContext(MoviesContext);
  const params = useParams();

  let path = usePathname();
  path = path.includes("peliculas") ? "peliculas" : "series";

  const resultado = peliculas.find(
    (objeto) => objeto["id"] === params.pelicula
  );
  const genero = resultado?.generos?.sort()[0];
  let marvel = resultado?.generos?.includes("Marvel");
  let filtrarPeliculas = peliculas.filter((pelicula) =>
    pelicula.generos.includes(marvel ? "Marvel" : genero)
  );

  const keyFiltrar = resultado?.keyFiltrar;
  const filtrarPeliculas2 = seriesYpeliculas.filter((pelicula) =>
    pelicula.keyFiltrar?.toLowerCase().includes(keyFiltrar)
  );

  return (
    <div className="w-full dark:bg-black h-full flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center w-full">
        {resultado?.titulo ? (
          <CardPelicula
            titulo={resultado.titulo}
            descripcion={resultado.descripcion}
            url={resultado.url}
            duracion={resultado.duracion}
          />
        ) : (
          <div className="flex justify-center items-center w-full my-40">
            <SpinnerGlobal />
          </div>
        )}
      </div>
      {resultado?.keyFiltrar && (
        <div className="flex flex-col justify-center items-center w-full dark:bg-black dark:text-white">
          <div className="flex flex-col items-start justify-center lg:w-10/12 md:w-10/12 sm:w-11/12">
            <div className="flex flex-row justify-start items-center lg:text-base md:text-base sm:text-xs rounded-md border-[1px] border-gray-500">
              <p className="font-semibold py-2 px-3 select-none">
                {path === "peliculas"
                  ? "Peliculas Similares"
                  : "Series Similares"}
              </p>
            </div>
          </div>
          <div className="lg:w-10/12 md:w-10/12 sm:w-11/12 grid xl:grid-cols-5 lg:grid-cols-3 smd:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-2 mt-5 mb-10">
            {filtrarPeliculas2.map((pelicula, index) => (
              <CardMovie
                key={index}
                imagen_perfil={pelicula.imagen_perfil}
                titulo={pelicula.titulo}
                id={pelicula.id}
                year={pelicula.year}
                temporadas={pelicula?.temporadas}
              />
            ))}
          </div>
          {(resultado && resultado.length === 0) ||
            (resultado === undefined && (
              <div className="flex justify-center items-center w-full my-40">
                <SpinnerGlobal />
              </div>
            ))}
        </div>
      )}

      {resultado === undefined ? (
        null
      ) : (
        <div className="flex flex-col justify-center items-center w-full dark:bg-black dark:text-white">
          <div className="flex flex-col items-start justify-center lg:w-10/12 md:w-10/12 sm:w-11/12">
            <div className="flex flex-row justify-start items-center lg:text-base md:text-base sm:text-xs rounded-md">
              {marvel ? (
                <Image
                  src="https://i.postimg.cc/sDtk7Bqk/marvelstudios-7611c.png"
                  width={100}
                  height={100}
                  alt="Marvel"
                  className="rounded-md"
                />
              ) : (
                <p className="font-semibold py-2 px-3 select-none text-xl underline">
                  {path === "peliculas"
                    ? `Más Peliculas de ${genero}`
                    : `Más Series de ${genero}`}
                </p>
              )}
            </div>
          </div>
          <div className="lg:w-10/12 md:w-10/12 sm:w-11/12">
            <SliderSimiliar contenido={filtrarPeliculas} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PeliculaActual;
