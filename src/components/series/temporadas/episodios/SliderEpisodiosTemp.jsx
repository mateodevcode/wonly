"use client";
import { acortarDescripcion } from "@/config/acortarDescripcion";
import { Icono } from "@/data/logo";
import { Select } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SliderEpisodiosTemp() {
  const scrollContainerRef = useRef();
  const params = useParams()
  const [listaSeries, setListaSeries] = useState([]);
  const [temp, setTemp] = useState(params.temporada);


  useEffect(() => {
    const cargarSeries = async () => {
      const res = await fetch(`/api/series`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setListaSeries(data);
    }
    cargarSeries();
  }, []);
  
  const serie = listaSeries.find((serie) => serie.id === params.serie);
  const temporada = serie?.temporadas.find((temporada) => temporada.linkTo === temp);

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
      <div className="mb-4 flex flex-row justify-between items-center">
        <h2 className="font-bold text-3xl">Episodios</h2>
      <div>
        {serie?.temporadas.map((movie, index) => (
          <button key={index} id={movie.linkTo} value={movie.linkTo} onClick={() => {
            setTemp(movie.linkTo);
          }} className={`mx-1 p-2 rounded-md font-semibold border-[1px] border-zinc-700 dark:bg-black dark:hover:bg-white/10 hover:bg-black/10 text-xs dark:text-white ${temp === movie.linkTo ? "dark:bg-zinc-700 bg-zinc-100 text-black" : ""}`}>{movie.temporada}</button>
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
              href={`https://wonly.vercel.app/series/${serie.id}/${temporada.linkTo}/${movie.episodio}`}
              key={index}
              className={`relative flex-none w-[250px] bg-white/10 rounded-lg p-4 border-[1px] border-zinc-700 dark:hover:bg-white/20 hover:bg-black/10`}
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
              <h3 className="mt-2 text-base font-medium mb-1">{index + 1}. {" "}{movie.titulo}</h3>
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


// <select className="p-2 rounded-md font-semibold border-[1px] border-zinc-700 dark:bg-black dark:text-white" >
//        {/* <option value="0">Selecciona un episodio</option> */}
//   {serie?.temporadas.map((movie, index) => (
//    <option key={index} id={movie.linkTo} value={movie.linkTo} onClick={() => {
//      setTemp(movie.linkTo);
//    }}>{movie.temporada}</option>
//  ))}
// </select>