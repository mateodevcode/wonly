"use client";
import { useParams } from "next/navigation";
import { useContext } from "react";
import SpinnerGlobal from "@/components/spinner/SpinnerGlobal";
import CardEpisodio from "./CardEpisodio";
import { MoviesContext } from "@/context/MoviesContext";

const Episodios = () => {
  const { series } = useContext(MoviesContext);
  const params = useParams();

  const serieActual = series.find((objeto) => objeto.id === params.serie);
  const temporadaActual = serieActual?.temporadas.find(
    (objeto) => objeto.linkTo === params.temporada
  );
  const listaEpisodios = temporadaActual?.episodios;
  const imagenFondo = temporadaActual?.imagen_fondo;

  return (
    <div className="dark:bg-black w-full flex flex-col justify-center items-center pt-16">
      {(temporadaActual && temporadaActual.length === 0) ||
        (temporadaActual === undefined && (
          <div className="flex justify-center items-center w-full my-40">
            <SpinnerGlobal />
          </div>
        ))}
      <div
        className="w-full h-[450px]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgb(0, 0, 0)),url('${imagenFondo}')`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-row justify-around items-end h-[450px] pb-5">
          <h2 className="font-extrabold xl:text-4xl lg:text-2xl md:text-2xl smd:text-xl sm:text-xl uppercase text-white">
            {temporadaActual?.titulo}
          </h2>
          <p className="font-semibold xl:text-2xl lg:text-xl md:text-lg smd:text-base sm:text-base text-white ml-5">
            {temporadaActual?.temporada} -{" "}
            <span className="bg-blue-600 px-2 rounded-md">
              {temporadaActual?.episodios.length}
            </span>{" "}
            Episodios
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center xl:px-40 lg:px-5 md:px-10 sm:px-2">
        {listaEpisodios?.map((epi, index) => (
          <CardEpisodio
            key={index}
            imagen_perfil={epi.imagen_perfil}
            temporada={epi.temporada}
            episodio={epi.episodio}
            titulo={epi.titulo}
            duracion={epi.duracion}
            descripcion={epi.descripcion}
            edad={serieActual.publico}
          />
        ))}
      </div>
    </div>
  );
};

export default Episodios;
