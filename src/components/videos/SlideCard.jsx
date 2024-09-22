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
              className="w-52 h-52 rounded-lg hover:scale-[102%] transition duration-200 ease-in-out"
              style={{
                backgroundImage: `url(${card.imagen_perfil})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-52 h-52">
                <Image
                  src="https://i.postimg.cc/JzKQwjc7/logo-wonly-4.png"
                  alt="Inicial De Wonly"
                  width={400}
                  height={400}
                  className="w-12 h-12 mx-2"
                />
                <p className="text-center font-semibold font-mono text-8xl py-14 -ml-52 text-border text-black">
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
