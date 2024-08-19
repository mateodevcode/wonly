"use client";
import { MdArrowForwardIos } from "react-icons/md";
import CardVideo from "../tendencias/CardVideo";
import { useState } from "react";
import { tendencias } from "@/data/tendencias";
import Slider from "react-slick";
import Image from "next/image";

const SlideCard = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-row justify-center items-center">
      {/* <MdArrowForwardIos
        // onClick={ImagenAnterior}
        className="text-white text-6xl hover:bg-white/10 rotate-180 p-1 cursor-pointer"
      /> */}
      {/* <Slider {...settings}> */}
        {tendencias.map((tendencia, index) => (
          <div key={index}>
            <Image
              src={tendencia.imagen_perfil}
              alt="imagen_perfil"
              width={400}
              height={400}
              className="w-80 h-60 rounded-md"
            />
          </div>
        ))}
      {/* </Slider> */}
      {/* <MdArrowForwardIos
        // onClick={ImagenSiguiente}
        className="text-white text-6xl hover:bg-white/10 p-1 cursor-pointer"
      /> */}
    </div>
  );
};

export default SlideCard;
