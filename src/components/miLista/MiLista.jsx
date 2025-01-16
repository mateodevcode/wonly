"use client";
import { generos } from "@/data/navbar";
import { Menu, MenuButton, MenuList, Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { BsInfoCircleFill } from "react-icons/bs";
import { useContext } from "react";
import Link from "next/link";
import { MoviesContext } from "@/context/MoviesContext";
import { signIn, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { acortarNombre } from "@/config/acortarNombre";
import { MdDeleteForever } from "react-icons/md";
import { LuListPlus, LuPlus } from "react-icons/lu";

const MiLista = ({ menuResponsive, onClose }) => {
  const { miLista, handleDeletePelicula, seriesYpeliculas } =
    useContext(MoviesContext);
  const { status } = useSession();
  const router = useRouter();


  
  const prueba = miLista?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  let Listas = prueba?.map((pelicula) => pelicula);

  let peliculasFiltradas = seriesYpeliculas.filter((pelicula) =>
    Listas?.includes(pelicula._id)
  );

  const list = ["Acción", "Anime", "Drama", "Marvel"];

  return (
    <Menu>
      <MenuButton className="bg-white/10 hover:bg-white/20 rounded-md">
        <div
          className={`hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-md flex flex-row justify-center items-center lg:text-sm md:text-sm sm:text-sm mx-1 lg:flex md:flex cursor-pointer select-none ${
            menuResponsive ? "sm:flex" : "sm:hidden"
          }`}
        >
          <BsInfoCircleFill className="mr-2 lg:text-xl md:text-xl sm:text-base" />{" "}
          Mi Lista
        </div>
      </MenuButton>
      <MenuList
        className="w-60 h-80 overflow-y-auto border-[1px] border-white/10 rounded-xl z-40 bg-black/90 overflow-x-hidden"
        style={generos.estilosLista}
      >
        <ul className="flex flex-col justify-start items-center mx-1 w-56 z-40 h-full">
          {peliculasFiltradas.length <= 0 ? (
            <>
              {status === "unauthenticated" ? (
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <div className="w-full flex flex-col justify-end items-center">
                    <button
                      className="bg-white hover:bg-white/80 text-black py-2 rounded-md my-1 font-semibold text-sm w-48"
                      onClick={() => router.push("/login")}
                    >
                      Iniciar Sesión
                    </button>
                    <button
                      className="text-white border-gray-300 hover:bg-white/10 border-[1px] py-2 rounded-md w-48 my-1 flex fle-row justify-center items-center text-sm font-semibold"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        signIn("google", {
                          callbackUrl: "/",
                        });
                      }}
                    >
                      <FcGoogle className="mr-4" />{" "}
                      <span>Continuar con Google</span>
                    </button>
                  </div>
                </div>
              ) : (
                <li className="w-56 px-2 py-1 select-none text-center flex flex-col justify-center items-center h-full my-5">
                  <div className="">
                    <LuListPlus className="text-8xl bg-gray-200 text-gray-700 rounded-full p-5" />
                  </div>
                  <p className="font-bold text-xl">Tu Lista esta vacia</p>
                  <p className="my-2 text-gray-400 text-sm">
                    Comienza agregando películas y series a tu lista para
                    mantener un registro de lo que quieres ver
                  </p>
                  <button
                    className="bg-white hover:bg-white/70 text-black py-2 px-3 rounded-md w-full my-2 text-sm font-semibold flex fle-row justify-center items-center"
                    onClick={() => router.push("/peliculas")}
                  >
                    <LuPlus className="mr-2" /> Agregar pelicula o serie
                  </button>
                  <p className="text-gray-300 text-xs font-semibold">
                    ¿Necesitas inspiración? Explora nuestras categorías
                  </p>
                  <div className="flex flex-row justify-center items-center w-full my-2 font-semibold text-[10px]">
                    {list.map((genero, index) => (
                      <Link
                        href={`/generos/${genero}`}
                        key={index}
                        className="bg-red-500/50 rounded-md px-1 mx-1"
                      >
                        {genero}
                      </Link>
                    ))}
                  </div>
                </li>
              )}
            </>
          ) : (
            <>
              {peliculasFiltradas.map((pelicula, index) => (
                <li
                  className="w-full px-2 py-1 hover:bg-white/10 select-none cursor-pointer flex flex-row justify-between items-center rounded-md"
                  key={index}
                >
                  <div className="flex flex-row justify-between items-center w-full">
                    <Tooltip
                      label={pelicula.titulo}
                      fontSize="small"
                      bg="black"
                      color="white"
                      rounded={5}
                      paddingBottom={1}
                    >
                      <Link
                        href={`/${
                          pelicula.temporadas ? "series" : "peliculas"
                        }/${pelicula.id}`}
                        onClick={() => onClose}
                        className="flex flex-row justify-start items-center w-full"
                      >
                        <Image
                          src={pelicula.imagen_perfil}
                          alt="logo"
                          height={150}
                          width={150}
                          className="rounded-md w-9 h-9"
                        />
                        <div className="mx-2 flex flex-col justify-center items-start my-1">
                          <p className="text-white font-semibold text-xs">
                            {acortarNombre(pelicula.titulo, 18)}
                          </p>
                          <span
                            className={`text-white text-[10px] font-semibold rounded-md px-1 ${
                              pelicula.temporadas
                                ? "bg-red-500/50"
                                : "bg-blue-500/50"
                            }`}
                          >
                            {pelicula.temporadas ? "Serie" : "Pelicula"}
                          </span>
                        </div>
                      </Link>
                    </Tooltip>
                    <Tooltip
                      label="Eliminar de la lista"
                      fontSize="small"
                      bg="black"
                      color="white"
                      rounded={5}
                      paddingBottom={1}
                    >
                      <button
                        className="w-8 h-8 hover:bg-white/10 flex flex-row justify-center items-center rounded-md"
                        id={pelicula._id}
                        onClick={handleDeletePelicula}
                      >
                        <MdDeleteForever
                          className="text-white text-xl mx-2"
                          id={pelicula._id}
                          onClick={handleDeletePelicula}
                        />
                      </button>
                    </Tooltip>
                  </div>
                </li>
              ))}
            </>
          )}
        </ul>
      </MenuList>
    </Menu>
  );
};

export default MiLista;
