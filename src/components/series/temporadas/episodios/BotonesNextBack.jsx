"use client";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GoListUnordered } from "react-icons/go";
import { Tooltip } from "@chakra-ui/react";

const BotonesNextBack = ({ temporadaActual }) => {
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
    <div className="lg:h-14 md:h-14 sm:h-10 flex flex-row justify-between items-center w-[750px] text-xl font-semibold text-white w-full">
      <div
        className={`flex flex-row justify-center items-center cursor-pointer select-none hover:text-black hover:bg-white lg:text-sm md:text-sm sm:text-xs ${
          numeroEpisodio === 1 ? "hidden" : ""
        } py-2 px-3 rounded-md`}
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
        <IoIosArrowBack className="lg:text-base md:text-base sm:text-base mr-2" />{" "}
        <p className="">Episodio Anterior</p>
      </div>
      <div
        className={`flex flex-row justify-center items-center cursor-pointer select-none hover:bg-white hover:text-black lg:text-lg md:text-lg sm:text-xs ${
          temporadaActual?.length === numeroEpisodio || numeroEpisodio === 1
            ? ""
            : "hidden"
        } p-2 rounded-md`}
        onClick={() => {
          router.push(`/series/${params.serie}/${params.temporada}`);
        }}
      >
        <Tooltip
          label="Lista de Episodios"
          fontSize="small"
          bg="black"
          color="white"
          rounded={5}
          paddingBottom={1}
        >
          <span>
            <GoListUnordered className="lg:text-lg md:text-lg sm:text-base" />
          </span>
        </Tooltip>
      </div>
      <div
        className={`flex flex-row justify-center items-center cursor-pointer select-none hover:text-black hover:bg-white lg:text-sm md:text-sm sm:text-xs ${
          temporadaActual?.length === numeroEpisodio ? "hidden" : ""
        } py-2 px-3 rounded-md`}
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
        <IoIosArrowBack className="lg:text-base md:text-base sm:text-base ml-2 rotate-180" />
      </div>
    </div>
  );
};

export default BotonesNextBack;
