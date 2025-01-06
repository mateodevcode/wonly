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
import { Icono } from "@/data/logo";

const VerHarryPotter = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center h-full">
      <HeaderTop />
      <div className="lg:w-7/12 md:w-7/12 sm:w-11/12 flex flex-col justify-start items-start h-full pb-20">
        <div className="mt-4 lg:flex md:flex sm:hidden">
          <PathToBlog Url1={"Blog"} Url2={"Peliculas"} Url3={"Harry Potter"} />
        </div>
        <Titulo
          nombre={
            <p>
              ¿Dónde Ver las Películas de Harry Potter{" "}
              <Link href={"https://wonly.vercel.app/peliculas"}>
                <strong className="hover:text-blue-700">Gratis</strong>
              </Link>
              ?
            </p>
          }
        />
        <Autor
          nombre={"Mateo Lizcano Noriega"}
          fecha={"20 de Septiembre de 2024"}
          imagen={"https://i.postimg.cc/L4ZzjFMH/foto-perfil.jpg"}
          Url={"/"}
        />
        <ImgCompleta
          imagen={"https://i.postimg.cc/T3ZM5kP1/harry-potter.jpg"}
          nombre={"Peliculas de Harry potter"}
        />
        <Parrafo
          texto={
            <p>
              <strong>El mundo mágico de Harry Potter</strong> ha cautivado a
              millones de personas a lo largo de los años. Desde su lanzamiento
              en 2001 con La piedra filosofal, hasta la épica conclusión con Las
              reliquias de la muerte: Parte 2, la saga sigue siendo uno de los
              pilares del <strong>cine de fantasía.</strong> Para los que buscan una forma de
              revivir cada hechizo, batalla y aventura, aquí te dejamos una guía
              breve de cada película, y lo mejor: <strong>cómo verlas{" "}
              <Link
                href={"https://wonly.vercel.app"}
                className="hover:text-blue-600"
              >
                gratis
              </Link></strong>
              .
            </p>
          }
        />
        <Subtitulo
          nombre={"1). Harry Potter y la Piedra Filosofal (2001)"}
          LinkUrl={
            "https://wonly.vercel.app/peliculas/harry-potter-y-la-piedra-filosofal"
          }
        />
        <Parrafo
          texto={
            "La primera entrega de la saga nos presenta al joven Harry, quien descubre su verdadera identidad como mago. Desde su primer viaje al Colegio Hogwarts de Magia y Hechicería hasta su enfrentamiento con Voldemort, este filme inicia la aventura que definirá una generación."
          }
        />
        <Subtitulo
          nombre={"2). Harry Potter y la Cámara Secreta (2002)"}
          LinkUrl={
            "https://wonly.vercel.app/peliculas/harry-potter-y-la-camara-secreta"
          }
        />
        <Parrafo
          texto={
            "En su segundo año en Hogwarts, Harry se enfrenta a nuevos desafíos cuando la Cámara Secreta es abierta, desatando un monstruo que aterroriza a los estudiantes. Misterio, criaturas mágicas y valentía son los ingredientes clave de esta película."
          }
        />
        <Subtitulo
          nombre={"3). Harry Potter y el Prisionero de Azkaban (2004)"}
          LinkUrl={
            "https://wonly.vercel.app/peliculas/harry-potter-y-el-prisionero-de-azkaban"
          }
        />
        <Parrafo
          texto={
            "Con un tono más oscuro, esta entrega nos presenta a Sirius Black, un peligroso fugitivo que parece estar tras Harry. Nuevos giros en la trama y el viaje en el tiempo hacen de esta película una de las favoritas de los fanáticos."
          }
        />
        <Subtitulo
          nombre={"4). Harry Potter y el Cáliz de Fuego (2005)"}
          LinkUrl={
            "https://wonly.vercel.app/peliculas/harry-potter-y-el-caliz-de-fuego"
          }
        />
        <Parrafo
          texto={
            "El Torneo de los Tres Magos llega a Hogwarts, y Harry, inesperadamente, se convierte en uno de los competidores. Los desafíos mortales y la reaparición de Voldemort marcan un punto de inflexión en la saga."
          }
        />
        <Subtitulo
          nombre={"5). Harry Potter y la Orden del Fénix (2007)"}
          LinkUrl={
            "https://wonly.vercel.app/peliculas/harry-potter-y-la-orden-del-fenix"
          }
        />
        <Parrafo
          texto={
            "La resistencia contra Voldemort se organiza en secreto con la ayuda de la Orden del Fénix, mientras Harry y sus amigos forman el Ejército de Dumbledore. En esta película, la batalla entre el bien y el mal se intensifica."
          }
        />
        <Subtitulo
          nombre={"6). Harry Potter y el Misterio del Príncipe (2009)"}
          LinkUrl={
            "https://wonly.vercel.app/peliculas/harry-potter-y-el-misterio-del-principe"
          }
        />
        <Parrafo
          texto={
            "Mientras el mundo mágico se sumerge en la oscuridad, Harry descubre más sobre el pasado de Voldemort y sus Horrocruxes, objetos que contienen fragmentos de su alma. Las tensiones emocionales entre los personajes también cobran mayor protagonismo."
          }
        />
        <Subtitulo
          nombre={
            "7-1). Harry Potter y las Reliquias de la Muerte: Parte 1 (2010)"
          }
          LinkUrl={
            "https://wonly.vercel.app/peliculas/harry-potter-y-las-reliquias-de-la-muerte-parte-1"
          }
        />
        <Parrafo
          texto={
            "La primera parte del épico final muestra a Harry, Hermione y Ron fuera de Hogwarts, en una peligrosa misión para destruir los Horrocruxes y detener a Voldemort de una vez por todas."
          }
        />
        <Subtitulo
          nombre={
            "7-2). Harry Potter y las Reliquias de la Muerte: Parte 2 (2011)"
          }
          LinkUrl={
            "https://wonly.vercel.app/peliculas/harry-potter-y-las-reliquias-de-la-muerte-parte-2"
          }
        />
        <Parrafo
          texto={
            "El gran desenlace. La batalla final entre Harry y Voldemort en Hogwarts decide el destino del mundo mágico. Acción, emociones a flor de piel y un cierre inolvidable para una saga que ha dejado huella en millones de personas."
          }
        />
        <Parrafo
          texto={
            "¿Te has quedado con ganas de ver todas estas películas nuevamente? ¡No busques más! En Wonly Películas y Series Gratis, puedes disfrutar de la saga completa de Harry Potter sin costo alguno. Accede fácilmente y sin complicaciones para revivir la magia."
          }
        />
        <ImgMediana
          imagen={Icono.src}
          nombre={Icono.alt}
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

export default VerHarryPotter;
