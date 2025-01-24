"use client";
import { acortarDescripcion } from "@/config/acortarDescripcion";
import { acortarNombre } from "@/config/acortarNombre";
import { Icono } from "@/data/logo";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRef } from "react";

export default function SliderSimiliar({ contenido }) {
  const scrollContainerRef = useRef();
  const params = useParams()


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
      <div className="relative group">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 pb-8 scrollbar-hide overflow-y-hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {contenido?.map((movie, index) => (
            <Link
              href={`${movie.linkTo}`}
              key={index}
              className={`relative flex-none w-[250px] max-h-96 bg-white/10 rounded-lg p-4 border-[1px] border-zinc-700 dark:hover:bg-white/20 hover:bg-black/10 ${params.pelicula === movie.linkTo ? "bg-white/20" : ""}`}
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
              </div>
              <h3 className="mt-2 text-base font-medium mb-1">{acortarNombre(movie.titulo, 24)}</h3>
              <p className="text-xs dark:text-zinc-200">
                {acortarDescripcion(movie.descripcion, 140)}
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
