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

const VerJohnWick = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center h-full">
      <HeaderTop />
      <div className="lg:w-7/12 md:w-7/12 sm:w-11/12 flex flex-col justify-start items-start h-full pb-20">
        <div className="mt-4 lg:flex md:flex sm:hidden">
          <PathToBlog Url1={"Blog"} Url2={"Peliculas"} Url3={"John Wick"} />
        </div>
        <Titulo
          nombre={
            <p>
              ¿Dónde Ver las Películas de John Wick{" "}
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
          imagen={"https://i.postimg.cc/Y091J3f1/john-wick.jpg"}
          nombre={"Peliculas de John Wick"}
        />
        <Parrafo
          texto={
            <p>
              El universo de <strong>John Wick</strong> ha redefinido el cine de
              acción en la última década. Con un estilo visual único y escenas
              de combate coreografiadas de manera impecable, la saga ha
              cautivado a los fanáticos del género y ha elevado a{" "}
              <strong>Keanu Reeves</strong> como uno de los íconos de acción más
              emblemáticos. Si te preguntas dónde ver estas películas{" "}
              <Link href={"https://wonly.vercel.app/peliculas"}>
                <strong className="hover:text-blue-700">Gratis</strong>
              </Link>
              , aquí te dejamos una breve reseña de cada entrega y cómo puedes
              disfrutar de ellas sin costo. .
            </p>
          }
        />
        <Subtitulo
          nombre={"1). John Wick (2014)"}
          LinkUrl={
            "https://wonly.vercel.app/peliculas/john-wick-1"
          }
        />
        <Parrafo
          texto={
            "La primera película nos presenta a John Wick, un exasesino profesional que decide volver al mundo del crimen después de un trágico incidente personal. La historia de venganza, el impresionante combate cuerpo a cuerpo y la atmósfera oscura hicieron de esta película un clásico instantáneo."
          }
        />
        <Subtitulo
          nombre={"2). John Wick: Capítulo 2 (2017)"}
          LinkUrl={
            "https://wonly.vercel.app/peliculas/john-wick-2"
          }
        />
        <Parrafo
          texto={
            "La secuela expande el universo del asesino. John se ve obligado a cumplir una deuda de sangre, lo que lo lleva a Roma para enfrentarse a una red internacional de criminales. Las secuencias de acción se intensifican, y la trama ofrece un vistazo más profundo a las reglas y el código de honor de los asesinos."
          }
        />
        <Subtitulo
          nombre={"3). John Wick: Capítulo 3 - Parabellum (2019)"}
          LinkUrl={
            "https://wonly.vercel.app/peliculas/john-wick-3"
          }
        />
        <Parrafo
          texto={
            "John está en fuga tras ser excomulgado del gremio de asesinos y con una recompensa multimillonaria por su cabeza. La película es una carrera contra el tiempo, llena de batallas a gran escala, impresionantes coreografías de combate y un elenco estelar que se une a la caza del legendario asesino."
          }
        />
        <Subtitulo
          nombre={"4). John Wick: Capítulo 4 (2023)"}
          LinkUrl={
            "https://wonly.vercel.app/peliculas/john-wick-4"
          }
        />
        <Parrafo
          texto={
            "En la cuarta entrega, John continúa su lucha contra la Alta Mesa, enfrentándose a nuevos enemigos en su misión por obtener su libertad definitiva. La película lleva la acción a un nuevo nivel, con escenas de combate aún más épicas, y presenta nuevas alianzas y traiciones en un viaje sin tregua."
          }
        />
        <Parrafo
        texto={(<p>
          Si eres fanático de la acción desenfrenada y las historias de venganza, no te puedes perder esta saga. ¿Lo mejor de todo? Puedes ver <strong>John Wick</strong> y todas sus secuelas de forma gratuita en <strong>Wonly Películas</strong> y Series Gratis. <Link href={"https://wonly.vercel.app"} className="text-blue-400">Accede aquí</Link> y disfruta de toda la adrenalina que estas películas tienen para ofrecer.
        </p>)} />
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

export default VerJohnWick;
