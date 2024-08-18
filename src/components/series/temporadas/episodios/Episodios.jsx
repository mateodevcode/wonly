"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CardEpisodios from "./CardEpisodios";
import { PiCardsFill } from "react-icons/pi";
import { Spinner } from "@chakra-ui/react";

const Episodios = () => {
  const [imagenFondo, setImagenFondo] = useState([]);
  const [temporada, setTemporada] = useState([]);
  const [datosSeries, setDatosSeries] = useState([]);
  const [url, setUrl] = useState("");
  const [episodio, setEpisodio] = useState([]);
  const [temporadaActual, setTemporadaActual] = useState([]);
  const [episodioActual, setEpisodioActual] = useState([]);
  const [urlTemporada, setUrlTemporada] = useState("");
  const [tempActual, setTempActual] = useState("");
  const [numeroEpisodios, setNumeroEpisodios] = useState(0);
  const [edad, setEdad] = useState("");

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

      setEdad(resultado.publico);

      const url = window.location.href;
      const segments = url.split("/");
      const SeriesName = segments[segments.length - 2];
      setUrl(SeriesName);
      setEpisodio(resultado.temporadas[0].episodios);

      const key2 = "linkTo";
      const value2 = segments[segments.length - 1];
      const resultado2 = resultado.temporadas.find(
        (objeto) => objeto[key2] === value2
      );
      setImagenFondo(resultado2);
      setTemporadaActual(resultado2.episodios);
      setUrlTemporada(value2);

      setTempActual(resultado2.temporada);
      setNumeroEpisodios(resultado2.episodios.length);

      const key3 = "episodio";
      const value3 = "E1";
      const resultado3 = resultado2.episodios.find(
        (objeto) => objeto[key3] === value3
      );
      setEpisodioActual(resultado3);
    };
    cargarTemporada();
  }, []);
  


  return (
    <div className="bg-black w-full flex flex-col justify-center items-center">
      {temporadaActual && temporadaActual.length === 0 && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="red.500"
          size="xl"
          className="mt-96"
        />
      )}
      <div
        className="w-full h-svh"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgb(0, 0, 0)),url('${imagenFondo.imagen_fondo}')`,
          backgroundSize: "cover",
        }}
      >
        {tempActual && (
          <div className="flex flex-col justify-center items-center h-screen">
            <h2 className="text-7xl text-white font-semibold">{tempActual}</h2>
            <div className="text-white text-6xl flex flex-row justify-center items-center mt-5">
              <span className="bg-blue-600 px-4 py-2 rounded-xl font-semibold text-4xl">
                {numeroEpisodios}
              </span>{" "}
              <p className="mx-4 text-5xl font-semibold">Episodios</p>{" "}
              <PiCardsFill className="text-8xl text-yellow-400" />
            </div>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col justify-center items-center px-40 pb-20">
        {temporadaActual.map((epi, index) => (
          <CardEpisodios
            key={index}
            imagen_perfil={epi.imagen_perfil}
            temporada={epi.temporada}
            episodio={epi.episodio}
            titulo={epi.titulo}
            duracion={epi.duracion}
            descripcion={epi.descripcion}
            Url={`/series/${url}/${urlTemporada}/${epi.episodio}`}
            edad={edad}
          />
        ))}
      </div>
    </div>
  );
};

export default Episodios;
