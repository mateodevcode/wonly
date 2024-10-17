"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const SlideCard = ({ cards, size }) => {
  var settings = {
    dots: true,
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
              className="lg:w-52 md:w-52 sm:w-28 lg:h-52 md:h-52 sm:h-28 rounded-lg"
              style={{
                backgroundImage: `url(${card.imagen_perfil})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-52 h-52">
                <div className="w-full flex flex-row justify-between items-center">
                  <Image
                    src="https://i.postimg.cc/JzKQwjc7/logo-wonly-4.png"
                    alt="Inicial De Wonly"
                    width={400}
                    height={400}
                    className="lg:w-12 md:w-12 sm:w-8  lg:h-12 md:h-12 sm:h-8 mx-2"
                  />
                </div>
                {/* <div className="text-center font-semibold font-mono lg:text-8xl md:text-8xl sm:text-5xl lg:py-14 md:py-14 sm:py-0.1 text-border text-black">
                  {index + 1}
                </div> */}
                <div className="w-full lg:h-40 md:h-40 sm:h-20 flex flex-col items-start justify-end">
                  <h1 className="text-center font-semibold font-mono lg:text-8xl md:text-8xl sm:text-7xl text-border text-black lg:-ml-6 md:-ml-6 sm:-ml-5">
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
