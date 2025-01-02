"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CardTemporadas from "./CardTemporadas";
import SpinnerGlobal from "@/components/spinner/SpinnerGlobal";

const Temporadas = () => {
  const [temporada, setTemporada] = useState([]);
  const [datosSeries, setDatosSeries] = useState([]);
  const params = useParams();
  
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
      setDatosSeries(resultado);
      setTemporada(resultado.temporadas);
    };
    cargarTemporada();
  }, []);
  
  
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center dark:bg-black lg:pt-24 md:pt-24 sm:pt-20 lg:pb-40 sm:pb-20">
        <h2 className="uppercase font-bold lg:text-3xl sm:text-3xl dark:text-white mb-5 text-left lg:w-10/12 md:w-10/12 sm:w-11/12 underline">
          {datosSeries.titulo}
        </h2>
        <div className="lg:w-10/12 md:w-10/12 sm:w-11/12 grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 smd:grid-cols-3 sm:grid-cols-2 gap-2 place-items-center">
          {temporada.map((temp, index) => (
            <CardTemporadas
              key={index}
              url={temp.url}
              titulo={temp.titulo}
              cantidad={temp.episodios.length}
              linkTo={temp.linkTo}
              serie={params.serie}
              temporada={temp.temporada}
              episodios={temp.episodios}
            />
          ))}
        </div>
        {temporada && temporada.length === 0 && (
          <div className="flex justify-center items-center w-full my-40">
          <SpinnerGlobal />
        </div>
        )}
      </div>
    </>
  );
};

export default Temporadas;
