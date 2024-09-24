"use client";
import { useEffect, useState } from "react";
import CardEpisodio from "./CardEpisodio";
import { useParams } from "next/navigation";
import SpinnerGlobal from "@/components/spinner/SpinnerGlobal";

const Episodio = () => {
  const [imagenFondo, setImagenFondo] = useState([]);
  const [temporada, setTemporada] = useState([]);
  const [datosSeries, setDatosSeries] = useState([]);
  const [url, setUrl] = useState("");
  const [episodio, setEpisodio] = useState([]);
  const [temporadaActual, setTemporadaActual] = useState([]);
  const [episodioActual, setEpisodioActual] = useState([]);
  const [urlTemporada, setUrlTemporada] = useState("");
  const [edad, setEdad] = useState("");
  const [Id, setId] = useState("");

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
      setId(resultado.id);

      const url = window.location.href;
      const segments = url.split("/");
      const SeriesName = segments[segments.length - 3];
      setUrl(SeriesName);
      setEpisodio(resultado.temporadas[0].episodios);

      const key2 = "linkTo";
      const value2 = segments[segments.length - 2];
      const resultado2 = resultado.temporadas.find(
        (objeto) => objeto[key2] === value2
      );
      setImagenFondo(resultado2);
      setTemporadaActual(resultado2.episodios);
      setUrlTemporada(value2);

      const key3 = "episodio";
      const value3 = segments[segments.length - 1];
      const resultado3 = resultado2.episodios.find(
        (objeto) => objeto[key3] === value3
      );
      setEpisodioActual(resultado3);
    };
    cargarTemporada();
  }, []);

  return (
    <div className="w-full bg-black h-full flex flex-col justify-center items-center">
      <div className="lg:w-9/12 md:w-8/12 sm:w-full flex flex-row justify-center items-center">
        {episodioActual.titulo ? (
          <CardEpisodio
            titulo={episodioActual.titulo}
            temporada={episodioActual.temporada}
            episodio={episodioActual.episodio}
            descripcion={episodioActual.descripcion}
            url={episodioActual.url}
            duracion={episodioActual.duracion}
            temporadaActual={temporadaActual}
            urlTemporada={urlTemporada}
            edad={edad}
            Id={Id}
          />
        ) : (
          <SpinnerGlobal />
        )}
      </div>
    </div>
  );
};

export default Episodio;
