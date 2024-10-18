"use client";
import { TiArrowBack, TiArrowForward } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegListAlt } from "react-icons/fa";

const BotonesNextBack = ({temporadaActual}) => {
  const [temporada, setTemporada] = useState([]);
  const [numeroEpisodios, setNumeroEspisodios] = useState([]);
  const router = useRouter();
  const params = useParams();
  const nombreEpisodio = parseInt(params.episodio.replace("E", ""));
  const numeroEpisodio = Number(nombreEpisodio);


  useEffect(() => {
    const cargarTemporada = async () => {
      const res = await fetch(`/api/series`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      const key = "id";
      const value = params.serie;
      const resultado = data.find((objeto) => objeto[key] === value);
      setTemporada(resultado.temporadas);

      const key2 = "linkTo";
      const value2 = params.temporada;
      const resultado2 = resultado.temporadas.find(
        (objeto) => objeto[key2] === value2
      );
      setNumeroEspisodios(resultado2.episodios.length);
    };
    cargarTemporada();
  }, []);


  return (
    <div className="lg:h-14 md:h-14 sm:h-10 flex flex-row justify-between items-center w-[750px] text-xl font-semibold text-white sm:w-full xl:w-[1440px] lg:w-[950px] md:w-[750px]">
      <div
        className={`flex flex-row justify-center items-center cursor-pointer select-none hover:text-white/50 lg:text-lg md:text-lg sm:text-base ${numeroEpisodio === 1 ? "hidden" : ""}`}
        onClick={() => {
          if (numeroEpisodio === 1) {
            router.push(`/series/${params.serie}/${params.temporada}`);
            return;
          } else {
            router.push(
              `/series/${params.serie}/${params.temporada}/E${
                numeroEpisodio - 1
              }`
            );
          }
        }}
      >
        <TiArrowBack className="lg:text-3xl md:text-3xl sm:text-base mr-2" />{" "}
        Episodio Anterior
      </div>
      <div
        className={`flex flex-row justify-center items-center cursor-pointer select-none hover:text-white/50 lg:text-lg md:text-lg sm:text-base ${temporadaActual?.length === numeroEpisodio || numeroEpisodio === 1 ? "" : "hidden"}`}
        onClick={() => {
            router.push(`/series/${params.serie}/${params.temporada}`);
        }}
      >
        <FaRegListAlt className="lg:text-3xl md:text-4xl sm:text-base mr-2" />
        Lista de Episodios
      </div>
      <div
        className={`flex flex-row justify-center items-center cursor-pointer select-none hover:text-white/50 lg:text-lg md:text-lg sm:text-base ${temporadaActual?.length === numeroEpisodio ? "hidden" : ""}`}
        onClick={() => {
          if (numeroEpisodio === numeroEpisodios) {
            router.push(`/series/${params.serie}/${params.temporada}`);
            return;
          } else {
            router.push(
              `/series/${params.serie}/${params.temporada}/E${
                numeroEpisodio + 1
              }`
            );
          }
        }}
      >
        Episodio Siguiente
        <TiArrowForward className="lg:text-3xl md:text-4xl sm:text-base ml-2" />
      </div>
    </div>
  );
};

export default BotonesNextBack;
