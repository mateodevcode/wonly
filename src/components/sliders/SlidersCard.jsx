"use client";
import { Icono } from "@/data/logo";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function SlidersCard({ contenido }) {
  const scrollContainerRef = useRef();

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
    <div className="w-full dark:bg-black dark:text-white p-4 px-10 h-[420px]">
      <h2 className="text-3xl font-bold mb-4">{contenido.titulo}</h2>
      <div className="relative group">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 pb-8 scrollbar-hide"    
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {contenido.cards.map((movie, index) => (
            <Link
              href={movie.Url}
              key={index}
              className="relative flex-none w-[300px] transition-transform duration-300 hover:scale-105"
            >
              {/* <div className="absolute -left-4 -top-6 z-10">
                <span className="text-[120px] font-bold opacity-80 leading-none absolute top-56 -left-2">
                  {index + 1}
                </span>
              </div> */}
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={movie.imagen_perfil}
                  alt={movie.pelicula}
                  width={300}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute top-2 left-2">
                  <Image src={Icono.src} alt="Netflix" width={40} height={40} />
                </div>
              </div>
              <h3 className="mt-2 text-sm font-medium">{movie.pelicula}</h3>
            </Link>
          ))}
        </div>
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
