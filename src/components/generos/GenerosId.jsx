"use client";
import { enlacesOrdenados } from "@/data/navbar";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "@/context/MoviesContext";
import AgregarLista from "../AgregarLista/AgregarLista";
import { useSession } from "next-auth/react";
import { primerNombre } from "@/config/primerNombre";
import { logo } from "@/data/logo";
import { FcGenealogy } from "react-icons/fc";
import { RiArrowDropRightLine } from "react-icons/ri";
import { CgListTree } from "react-icons/cg";
import { acortarNombre } from "@/config/acortarNombre";
import SpinnerGlobal from "../spinner/SpinnerGlobal";
import { PiEmptyThin } from "react-icons/pi";
import Link from "next/link";
import { Input, Spinner, Tooltip } from "@chakra-ui/react";
import SwitchMode from "../navbar/switch/Switch";

const GenerosId = () => {
  const [buscar, setBuscar] = useState("");
  const [genero, setGenero] = useState("Acción");
  const router = useRouter();
  const { miLista, handleAgregarMiLista, handleDeletePelicula, Usuario } =
    useContext(MoviesContext);
  const [peliculas, setPeliculas] = useState([]);
  const [series, setSeries] = useState([]);
  const { data: session, status } = useSession();
  const params = useParams();

  useEffect(() => {
    const cargarPeliculas = async () => {
      try {
        const res = await fetch(`/api/peliculas`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setPeliculas(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Error al cargar las peliculas",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    };
    cargarPeliculas();
  }, []);

  useEffect(() => {
    const CargarSeries = async () => {
      try {
        const res = await fetch(`/api/series`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setSeries(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Error al cargar las series",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    };
    CargarSeries();
  }, []);

  let seriesYpeliculas = [...peliculas, ...series];

  useEffect(() => {
    const cargarGenero = async () => {
      const textoNormal = decodeURIComponent(params.genero);

      if (params.genero) {
        setGenero(textoNormal);
      }
    };
    cargarGenero();
  }, [params.genero]);

  // Filtrar peliculas por genero
  const peliculasFiltradasGeneros = seriesYpeliculas.filter((pelicula) =>
    pelicula.generos.includes(genero)
  );

  // Filtrar peliculas por busqueda
  let filtrarPeliculas = [];
  filtrarPeliculas = peliculasFiltradasGeneros.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(buscar.toLowerCase())
  );


  return (
    <div className="w-full h-svh p-2">
      <div className="w-full h-full border-[1px] border-zinc-700 rounded-md flex flex-row justify-between items-start">
        <div className="w-40 dark:-zinc-950 flex flex-col justify-between border-r-[1px] border-zinc-700 h-full rounded-md">
          {/* Asidebar */}
          <div>
            <div className="m-2 mb-4">
              <Link
                href="/"
                className="flex flex-row justify-start items-center cursor-pointer"
              >
                <Image
                  src={logo.src}
                  width={200}
                  height={200}
                  alt="logo"
                  className="w-20 h-9"
                />
              </Link>
              <SwitchMode />
            </div>
            <div className="flex flex-row justify-start items-center m-1">
              <div className="flex flex-row justify-center items-center p-1 rounded-full">
                <FcGenealogy className="dark:text-black lx:text-xl lg:text-xl md:text-xl smd:text-base sm:text-base" />
              </div>
              <div className="flex flex-col justify-center items-start mx-1">
                <h2 className="text-white text-xs">Generos</h2>
                <p className="text-gray-300 text-[10px] italic font-semibold">
                  Industrias LZO
                </p>
              </div>
            </div>
            <div className="flex flex-col xl:mx-3 lg:mx-3 smd:mx-2 sm:mx-2">
              {enlacesOrdenados.map((enlace, index) => (
                <div
                  key={index}
                  onClick={() => {
                    // setGenero(enlace.nombre)
                    router.push(`/generos/${enlace.nombre}`)
                  }}
                  id={genero.nombre}
                  className={`${
                    genero === enlace.nombre
                      ? "bg-zinc-900 text-white"
                      : "bg-zinc-950 text-gray-300"
                  } cursor-pointer hover:bg-zinc-900 hover:text-white transition duration-100 ease-in-out my-0.5 p-2 rounded-md text-xs select-none`}
                >
                  {enlace.nombre}
                </div>
              ))}
            </div>
          </div>
          <div>
            {status === "authenticated" && (
              <Link
                href={`/perfil/${Usuario?._id}`}
                className="flex flex-row justify-start items-center hover:bg-zinc-900 cursor-pointer m-1 rounded-md select-none"
              >
                <Image
                  src={session?.user?.image}
                  width={40}
                  height={40}
                  alt={session?.user?.name}
                  className="rounded-full xl:w-7 lg:w-7 md:w-7 smd:w-5 sm:w-5 xl:h-7 lg:h-7 md:h-7 smd:h-5 sm:h-5 m-2"
                />
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="text-white flex flex-col justify-center items-start">
                    <span className="text-[10px] font-semibold">
                      {primerNombre(session?.user?.name)}
                    </span>
                    <span className="text-[8px] xl:flex lg:flex md:flex smd:hidden sm:hidden">
                      {session?.user?.email}
                    </span>
                  </div>
                </div>
              </Link>
            )}
            {status === "unauthenticated" && (
              <div className="flex flex-row justify-center items-center m-1">
                <button
                  className={`bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded mx-1 lg:text-xs md:text-xs sm:text-xs lg:flex md:flex`}
                  onClick={() => router.push("/login")}
                >
                  Iniciar Sesión
                </button>
              </div>
            )}
            {status === "loading" && (
              <div className="flex flex-row justify-center items-center m-1">
                <Spinner
                  speed="0.5s"
                  emptyColor="gray.100"
                  color="blue.900"
                  size="md"
                />
              </div>
            )}
          </div>
        </div>

        <div className="w-full">
          {/* Contenido */}
          <div className="flex flex-row justify-between items-center w-full h-10 text-white lg:mb-0 sm:mb-5 px-3 mt-3">
            <div className="text-white p-2 flex flex-row justify-start items-center">
              <CgListTree className="lx:text-xl lg:text-xl md:text-xl smd:text-base sm:text-base mx-2 text-zinc-200" />
              <hr className="h-4 border-[0.5px] border-zinc-500 mx-2" />
              <span className="xl:text-sm lg:text-sm md:text-sm smd:text-xs sm:text-xs mx-2 text-zinc-200">
                Generos
              </span>
              <RiArrowDropRightLine className="text-2xl" />
              <span className="xl:text-sm lg:text-sm md:text-sm smd:text-xs sm:text-xs mx-2 text-blue-500">
                {genero}
              </span>
            </div>
            <div className="flex flex-row justify-center items-center mx-2">
              <Input
                className="placeholder-gray-400 text-white"
                type="text"
                placeholder="Buscar"
                border="none"
                size="sm"
                onChange={(e) => {
                  e.preventDefault();
                  setBuscar(e.target.value);
                }}
              />
            </div>
          </div>

          {filtrarPeliculas.length > 0 ? (
            <div
              className={`w-full grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 smd:grid-cols-3 sm:grid-cols-2 lg:gap-2 md:gap-2 sm:gap-1 overflow-y-scroll ${
                filtrarPeliculas.length < 5 ? "" : "h-[calc(100vh-5rem)]"
              }`}
            >
              {filtrarPeliculas.map((pelicula, index) => (
                <Tooltip
                  key={index}
                  label={pelicula.titulo}
                  fontSize="small"
                  bg="black"
                  color="white"
                  rounded={5}
                  paddingBottom={1}
                >
                  <div
                    key={index}
                    className="flex flex-col justify-start items-center lg:my-5 md:my-5 sm:my-2 lg:mx-4 md:mx-4 sm:mx-2 cursor-pointer active:scale-95 transition-all duration-300 bg-zinc-900 pb-2 rounded-md"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(`/peliculas/${pelicula.id}`);
                    }}
                  >
                    <AgregarLista
                      _id={pelicula._id}
                      handleAgregarMiLista={handleAgregarMiLista}
                      handleDeletePelicula={handleDeletePelicula}
                      miLista={miLista}
                    />
                    <Image
                      src={pelicula.imagen_perfil}
                      width={500}
                      height={500}
                      alt={pelicula.titulo}
                      id={pelicula.id}
                      className="w-full h-full object-cover hover:opacity-50"
                    />
                    <p className="xl:text-xs lg:text-xs md:text-xs sm:text-[10px] lg:mt-2 md:mt-2 sm:mt-1.5 text-gray-400">
                      {acortarNombre(pelicula.titulo, 20)}
                    </p>
                  </div>
                </Tooltip>
              ))}
            </div>
          ) : (
            <>
              {status === "loading" ? (
                <div className="w-full flex flex-row justify-center items-center h-[calc(100vh-4rem)]">
                  <SpinnerGlobal />
                </div>
              ) : (
                <div className="w-full flex flex-col justify-center items-center h-[calc(100vh-4rem)]">
                  <p className="text-white text-3xl font-semibold mt-40">
                    No hay resultados
                  </p>
                  <PiEmptyThin className="text-3xl text-white my-5" />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerosId;
