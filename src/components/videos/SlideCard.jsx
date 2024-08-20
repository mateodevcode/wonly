"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = ({videos, Url}) => {
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
        {videos.map((tendencia, index) => (
          <div key={index}>
            <Image
              src={tendencia.imagen_perfil}
              alt="imagen_perfil"
              width={400}
              height={400}
              className="w-56 h-40 rounded-md hover:scale-[102%] transition duration-200 ease-in-out"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideCard;
