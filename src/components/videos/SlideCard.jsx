"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const SlideCard = ({ cards }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Link href={card.Url} key={index} className="cursor-pointer">
            <div
              className="lg:w-52 md:w-52 sm:w-16 lg:h-52 md:h-52 sm:h-16 rounded-lg hover:scale-[102%] transition duration-200 ease-in-out"
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
                <p className="text-center font-semibold font-mono lg:text-8xl md:text-8xl sm:text-5xl lg:py-14 md:py-14 sm:py-0.1 -ml-52 text-border text-black">
                  {index + 1}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default SlideCard;
