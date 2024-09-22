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
      <div className="w-full flex flex-col justify-center items-center bg-black lg:pt-40 sm:pt-20 lg:pb-40 sm:pb-20">
        <h2 className="uppercase text-center font-bold lg:text-5xl sm:text-3xl dark:text-white mb-10">
          {datosSeries.titulo}
        </h2>
        <div className="lg:w-10/12 md:w-10/12 sm:w-11/12 grid lg:grid-cols-5 sm:grid-cols-1 gap-4">
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
          <SpinnerGlobal />
        )}
      </div>
    </>
  );
};

export default Temporadas;
