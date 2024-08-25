"use client";
import { Input, InputGroup, InputLeftElement, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CardSerie from "./CardSerie";
import { enlacesSeries } from "@/data/enlaces.series";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";

const Series = () => {
  const [datosSeries, setDatosSeries] = useState([]);
  const [buscar, setBuscar] = useState("");
  let path = usePathname();
  path = path.replace("/", "");

  useEffect(() => {
    const cargarTemporada = async () => {
      const res = await fetch(`/api/series`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setDatosSeries(data);
    };
    cargarTemporada();
  }, []);

  const filtrarSeries = datosSeries.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(buscar.toLowerCase())
  );

  return (
    <div className="flex flex-col justify-center items-center pt-20 w-full bg-black text-white pb-20">
      <div className="flex flex-col items-start justify-center lg:w-10/12 md:w-10/12 sm:w-11/12 mt-10">
        <p className="lg:text-2xl md:text-2xl sm:text-lg">
          {`No te pierdas de las mejores ${
            path == "peliculas" ? "peliculas" : "series"
          }, disfruta de contenido exclusivo y
          de calidad.`}
        </p>
        <div className="flex flex-row justify-between items-center mt-10 lg:text-base md:text-base sm:text-sm bg-gray-900 w-full h-10">
          <div>
            <Link
              href={`${path === "series" ? "/peliculas" : "/series"}`}
              className="font-semibold hover:bg-green-600/50 py-2 px-3 cursor-pointer"
            >
              {path === "series" ? "Peliculas" : "Series"}
            </Link>
            {enlacesSeries.map((enlace, index) => (
              <Link
                key={index}
                href={`${enlace.Url}`}
                className="font-semibold hover:bg-green-600/50 py-2 px-3 cursor-pointer"
              >
                {enlace.nombre}
              </Link>
            ))}
          </div>
          <div className="flex flex-row justify-center items-center">
            <InputGroup size="sm" border={"none"}>
              <InputLeftElement pointerEvents="none">
                <BsSearch color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Buscar"
                fontFamily={"monospace"}
                onChange={(e) => {
                  e.preventDefault();
                  setBuscar(e.target.value);
                }}
              />
            </InputGroup>
          </div>
        </div>
      </div>
      <div className="lg:w-10/12 md:w-10/12 sm:w-11/12 grid lg:grid-cols-4 sm:grid-cols-1 gap-2 mt-5 mb-10">
        {filtrarSeries.map((serie, index) => (
          <CardSerie
            key={index}
            idUrl={serie.id}
            imagen_perfil={serie.imagen_perfil}
            titulo={serie.titulo}
            id={serie.id}
          />
        ))}
      </div>
      {datosSeries && datosSeries.length === 0 && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="red.500"
          size="xl"
          className="mt-32 mb-56"
        />
      )}
    </div>
  );
};

export default Series;
