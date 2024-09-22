import Autor from "@/components/blog/Autor";
import ImgCompleta from "@/components/blog/ImgCompleta";
import ImgMediana from "@/components/blog/ImgMediana";
import LinkBlog from "@/components/blog/LinkBlog";
import Parrafo from "@/components/blog/Parrafo";
import Subtitulo from "@/components/blog/Subtitulo";
import Titulo from "@/components/blog/Titulo";
import HeaderTop from "../HeaderTop";
import Link from "next/link";
import PathToBlog from "../PathToBlog";

const VerIronMan = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center h-full">
      <HeaderTop />
      <div className="lg:w-7/12 md:w-7/12 sm:w-11/12 flex flex-col justify-start items-start h-full pb-20">
        <div className="mt-4 lg:flex md:flex sm:hidden">
          <PathToBlog Url1={"Blog"} Url2={"Peliculas"} Url3={"Iron Man"} />
        </div>
        <Titulo
          nombre={
            <p>
              Desde las Alturas de Stark Tower: Cómo Ver las Películas de Iron
              Man{" "}
              <Link href={"https://wonly.vercel.app/peliculas"}>
                <strong className="">Gratis</strong>
              </Link>
              ?
            </p>
          }
        />
        <Autor
          nombre={"Mateo Lizcano Noriega"}
          fecha={"21 de Septiembre de 2024"}
          imagen={"https://i.postimg.cc/L4ZzjFMH/foto-perfil.jpg"}
          Url={"/"}
        />
        <ImgCompleta
          imagen={"https://i.postimg.cc/g03qRsKD/iron-man.jpg"}
          nombre={"Peliculas de John Wick"}
        />
        <Parrafo
          texto={
            <p>
              El icónico <strong>Iron Man</strong> no solo marcó el inicio del
              Universo Cinematográfico de Marvel (UCM), sino que también
              catapultó a <strong>Robert Downey Jr.</strong> como uno de los
              actores más queridos de la franquicia. La trilogía de{" "}
              <strong>Iron Man</strong> mezcla acción, tecnología futurista y un
              ingenio único, convirtiéndose en un fenómeno mundial. Si estás
              buscando dónde ver estas películas{" "}
              <Link href={"https://wonly.vercel.app/peliculas"}>
                <strong className="hover:text-blue-700">Gratis</strong>
              </Link>
              , aquí te ofrecemos un resumen de cada una, junto con el mejor
              sitio para disfrutarlas sin costo.{" "}
            </p>
          }
        />
        <Subtitulo
          nombre={"Iron Man (2008)"}
          LinkUrl={"https://wonly.vercel.app/peliculas/iron-man-1"}
        />
        <Parrafo
          texto={
            "La primera película del UCM nos presenta a Tony Stark, un excéntrico y brillante multimillonario que, tras ser secuestrado, construye una armadura avanzada para escapar. Stark decide usar esta tecnología para luchar contra el mal, dando inicio a su transformación en Iron Man. Este filme sentó las bases del futuro de Marvel y es imprescindible para cualquier fanático de los superhéroes."
          }
        />
        <Subtitulo
          nombre={"Iron Man 2 (2010)"}
          LinkUrl={"https://wonly.vercel.app/peliculas/iron-man-2"}
        />
        <Parrafo
          texto={
            "La secuela expande el universo de Tony Stark mientras enfrenta nuevos desafíos tanto personales como profesionales. Con la introducción de nuevos personajes como Black Widow y un enemigo alimentado por la sed de venganza, Iron Man 2 combina acción trepidante con el carisma de Stark."
          }
        />
        <Subtitulo
          nombre={"Iron Man 3 (2013)"}
          LinkUrl={"https://wonly.vercel.app/peliculas/iron-man-3"}
        />
        <Parrafo
          texto={
            "En la tercera entrega, Tony Stark se enfrenta a su enemigo más letal hasta el momento: El Mandarín. Esta película profundiza en las consecuencias psicológicas de ser Iron Man y muestra a un Stark más vulnerable y humano, además de introducir nuevas armaduras y tecnologías sorprendentes."
          }
        />
        <Parrafo
          texto={
            <p>
              Si te consideras fan de Marvel, no puedes perderte esta trilogía
              que marcó un antes y un después en el cine de superhéroes. Lo
              mejor de todo es que puedes ver todas las películas de{" "}
              <strong>Iron Man</strong> completamente gratis en{" "}
              <strong>Wonly Películas y Series Gratis.</strong>
              <Link href={"https://wonly.vercel.app"} className="text-blue-400">
                {" "}
                Descubre cómo aquí
              </Link>{" "}
              y revive cada hazaña del genio, millonario, playboy y filántropo
              favorito del cine.
            </p>
          }
        />
        <ImgMediana
          imagen={"https://i.postimg.cc/JzKQwjc7/logo-wonly-4.png"}
          nombre={"Logo de Wonly"}
          Url={"https://wonly.vercel.app"}
        />
        <LinkBlog
          texto={"Wonly Peliculas y series gratis"}
          Url={"https://wonly.vercel.app"}
        />
      </div>
    </div>
  );
};

export default VerIronMan;
