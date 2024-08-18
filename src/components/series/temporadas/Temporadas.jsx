"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Spinner } from "@chakra-ui/react";
import CardTemporadas from "./CardTemporadas";

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
      <div className="w-full flex flex-col justify-center items-center bg-black pt-40">
        <h2 className="uppercase text-center font-bold text-5xl dark:text-white mb-5">
          {datosSeries.titulo}
        </h2>
        <div className="flex flex-wrap w-full justify-center items-center">
          {temporada.map((temp, index) => (
            <CardTemporadas
              key={index}
              url={temp.url}
              titulo={temp.titulo}
              cantidad={temp.episodios.length}
              linkTo={temp.linkTo}
              serie={params.serie}
              temporada={temp.temporada}
            />
          ))}
        </div>
        {temporada && temporada.length === 0 && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="red.500"
            size="xl"
            className="mt-32 mb-80"
          />
        )}
      </div>
    </>
  );
};

export default Temporadas;
