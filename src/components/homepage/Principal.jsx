"use client";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import Botones from "./Botones";
import CardInformativo from "./CardInformativo";

const Principal = () => {
  const [Data, setData] = useState([]);
  const seleccionPelicula = "las-aventuras-de-arsene-lupin-iii";
  const [numeroTemporadas, setNumeroTemporadas] = useState("");
  const [generos, setGeneros] = useState([]);

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
      const value = seleccionPelicula;
      const resultado = data.find((objeto) => objeto[key] === value);
      setData(resultado);
      setNumeroTemporadas(resultado.temporadas.length);
      setGeneros(resultado.generos);
    };
    cargarTemporada();
  }, []);

  return (
    <div>
      <div
        className="w-full h-svh"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgb(0, 0, 0)),url('${Data.imagen_fondo}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute top-[340px] lg:w-[800px] md:w-[800px] sm:w-[450px] lg:mx-10 md:mx-10 sm:mx-0">
        {Data.length !== 0 ? (
          <>
            <CardInformativo
              titulo={Data.titulo}
              descripcion={Data.descripcion}
              generos={generos}
              numeroTemp={numeroTemporadas}
              year={Data.year}
            />
            <Botones Url={Data.id} />
          </>
        ) : (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="red.500"
            size="xl"
            className="mt-32 ml-40 mr-40"
          />
        )}
      </div>
    </div>
  );
};

export default Principal;
