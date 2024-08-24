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
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Link href={card.Url} key={index} className="cursor-pointer">
            <Image
              src={card.imagen_perfil}
              alt="imagen_perfil"
              width={400}
              height={400}
              className="w-56 h-40 rounded-md hover:scale-[102%] transition duration-200 ease-in-out"
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default SlideCard;
