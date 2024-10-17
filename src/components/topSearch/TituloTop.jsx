import React from "react";

const TituloTop = ({path}) => {
  return (
    <p className="lg:text-2xl md:text-2xl sm:text-sm">
      {`No te pierdas de las mejores ${
        path == "peliculas" ? "peliculas" : "series"
      }, disfruta de contenido exclusivo y
      de calidad.`}
    </p>
  );
};

export default TituloTop;
