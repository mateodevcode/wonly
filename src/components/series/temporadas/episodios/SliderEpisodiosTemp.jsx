"use client";
import { acortarDescripcion } from "@/config/acortarDescripcion";
import { MoviesContext } from "@/context/MoviesContext";
import { Icono } from "@/data/logo";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext, useRef, useState } from "react";

export default function SliderEpisodiosTemp() {
  const scrollContainerRef = useRef();
  const params = useParams();
  const [temp, setTemp] = useState(params.temporada);
  const { series } = useContext(MoviesContext);

  const serie = series.find((serie) => serie.id === params.serie);
  const temporada = serie?.temporadas.find(
    (temporada) => temporada.linkTo === temp
  );

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full dark:bg-black dark:text-white p-4 h-[420px] mb-20">
      <div className="mb-4 flex flex-row justify-between items-center w-full">
        <div>
          {serie?.temporadas.map((movie, index) => (
            <button
              key={index}
              id={movie.linkTo}
              value={movie.linkTo}
              onClick={() => {
                setTemp(movie.linkTo);
              }}
              className={`m-1 p-2 rounded-md font-semibold border-[1px] border-zinc-700 dark:bg-black dark:hover:bg-blue-500 hover:bg-blue-500 text-xs dark:text-white hover:text-white ${
                temp === movie.linkTo
                  ? "dark:bg-blue-600 bg-blue-600 text-white"
                  : ""
              }`}
            >
              {movie.temporada}
            </button>
          ))}
        </div>
      </div>
      <div className="relative group">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 pb-8 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {temporada?.episodios.map((movie, index) => (
            <Link
              href={`/series/${serie.id}/${temporada.linkTo}/${movie.episodio}`}
              key={index}
              className={`relative flex-none w-[250px] max-h-96 bg-blue-600/10 rounded-lg p-4 border-[1px] border-zinc-700 dark:hover:bg-blue-600/20 hover:bg-blue-600/20`}
            >
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={movie.imagen_perfil}
                  alt={movie.titulo}
                  width={300}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute top-2 left-2">
                  <Image src={Icono.src} alt="Netflix" width={40} height={40} />
                </div>
                <div className="absolute top-44 right-2 bg-black/50 text-white py-1 px-3 rounded-md text-xs">
                  {movie.duracion} min
                </div>
              </div>
              <h3 className="mt-2 text-base font-medium mb-1">
                {movie.episodio} - {movie.titulo}
              </h3>
              <p className="text-xs dark:text-zinc-200">
                {acortarDescripcion(movie.descripcion, 100)}
              </p>
            </Link>
          ))}
        </div>
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
