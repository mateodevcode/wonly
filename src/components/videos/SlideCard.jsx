"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { Icono } from "@/data/logo";

const SlideCard = ({ cards, size }) => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: size,
    slidesToScroll: 2,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Link href={card.Url} key={index} className="cursor-pointer">
            <div
              className="xl:w-60 lg:w-48 md:w-72 sm:w-32 xl:h-60 lg:h-48 md:h-52 sm:h-32 rounded-lg"
              style={{
                backgroundImage: `url(${card.imagen_perfil})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-52 h-52">
                <div className="w-10 h-10 p-1">
                  <Image
                    src={Icono.src}
                    alt={Icono.alt}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full xl:h-56 lg:h-44 md:h-40 sm:h-24 flex flex-col items-start justify-end">
                  <h1 className="text-center font-semibold font-mono xl:text-9xl lg:text-8xl md:text-8xl sm:text-7xl text-border text-black xl:-ml-10 lg:-ml-6 md:-ml-6 sm:-ml-5">
                    {index + 1}
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default SlideCard;
