import ReproductorVideo from "@/components/reproductorVideo/ReproductorVideo";
import SliderEpisodios from "./SliderEpisodios";
import SliderEpisodiosTemp from "./SliderEpisodiosTemp";

const CardEpisodios = ({
  titulo,
  descripcion,
  url,
  duracion,
  temporadaActual,
  temporada,
  episodio,
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <ReproductorVideo
        tipoMovie={"serie"}
        titulo={titulo}
        descripcion={descripcion}
        duracion={duracion}
        url={url[0]}
        temporadaActual={temporadaActual}
        temporada={temporada}
        episodio={episodio}
      />
      <div className="xl:w-10/12 lg:w-11/12 w-full">
        <SliderEpisodios contenido={temporadaActual} />
      </div>
      <div className="xl:w-10/12 lg:w-11/12 w-full">
        <SliderEpisodiosTemp />
      </div>
    </div>
  );
};

export default CardEpisodios;
