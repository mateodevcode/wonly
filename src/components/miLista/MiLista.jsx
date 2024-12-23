"use client";
import { generos } from "@/data/navbar";
import { Menu, MenuButton, MenuList, useToast } from "@chakra-ui/react";
import Image from "next/image";
import { BsInfoCircleFill } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import { useContext, useEffect, useState } from "react";
import { GoTasklist } from "react-icons/go";
import Link from "next/link";
import { MoviesContext } from "@/context/MoviesContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import { signIn, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const MiLista = ({ menuResponsive }) => {
  const [peliculas, setPeliculas] = useState([]);
  const [series, setSeries] = useState([]);
  const toast = useToast();
  const { miLista, handleDeletePelicula } = useContext(MoviesContext);
  const { status } = useSession();
  const router = useRouter();

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

  const prueba = miLista?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  let Listas = prueba?.map((pelicula) => pelicula);

  let peliculasFiltradas = seriesYpeliculas.filter((pelicula) =>
    Listas?.includes(pelicula._id)
  );

  return (
    <Menu>
      <MenuButton className="bg-white/10 hover:bg-white/20 rounded-md">
        <div
          className={`hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-md flex flex-row justify-center items-center lg:text-base md:text-base sm:text-sm mx-1 lg:flex md:flex cursor-pointer select-none ${
            menuResponsive ? "sm:flex" : "sm:hidden"
          }`}
        >
          <BsInfoCircleFill className="mr-2 lg:text-xl md:text-xl sm:text-base" />{" "}
          Mi Lista
        </div>
      </MenuButton>
      <MenuList style={generos.estilosLista}>
        <ul className="flex flex-col justify-start items-center mx-2 w-80 ste z-40">
          {peliculasFiltradas.length <= 0 ? (
            <>
              {status === "unauthenticated" ? (
                <div className="w-full h-full grid place-content-center">
                  <div className="w-full flex flex-col justify-end items-center px-6 pb-5">
          <button className="bg-white hover:bg-white/80 text-black py-3 px-4 rounded-md w-full my-1"
            onClick={() => router.push("/login")}
          >
            Iniciar Sesión
          </button>
          <button
            className="text-white border-gray-300 hover:bg-white/10 border-[1px] py-2 px-4 rounded-md w-full my-1 flex fle-row justify-center items-center text-sm font-semibold"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              signIn("google", {
                callbackUrl: "/",
              });
            }}
          >
            <FcGoogle className="mr-4" /> <span>Continuar con Google</span>
          </button>
        </div>
                </div>
              ) : (
                <li className="w-80 px-2 py-1 select-none text-center flex flex-col justify-center items-center h-full">
                  <p className="">Upps!!! Lista vacia. </p>
                  <GoTasklist className="text-7xl my-5" />
                  <p className="">Agrega una Pelicula o Serie</p>
                </li>
              )}
            </>
          ) : (
            <>
              {peliculasFiltradas.map((pelicula, index) => (
                <li
                  className="w-80 px-2 py-1 hover:bg-white/10 select-none cursor-pointer flex flex-row justify-between items-center"
                  key={index}
                >
                  <Link
                    href={`/${pelicula.temporadas ? "series" : "peliculas"}/${
                      pelicula.id
                    }`}
                    className="flex flex-row justify-center items-center"
                  >
                    <Image
                      src={pelicula.imagen_perfil}
                      alt="logo"
                      height={75}
                      width={75}
                    />
                    <p className="text-white font-semibold text-sm mx-1">
                      {pelicula.titulo}
                    </p>
                  </Link>
                  <div className="flex flex-row justify-between items-center">
                    <Menu>
                      <MenuButton className="hover:scale-[105%]">
                        <SlOptions className="text-white hover:text-gray-400 text-xl mx-2" />
                      </MenuButton>
                      <MenuList
                        style={generos.estilosLista}
                        className="mt-40 z-20"
                      >
                        <ul className="flex flex-col justify-center items-center mx-2">
                          <li className="w-full px-2 py-1 select-none cursor-pointer flex flex-row justify-between items-center">
                            <button className="p-2 flex flex-row justify-between items-center w-full">
                              <p
                                className="text-sm text-white hover:text-gray-400"
                                id={pelicula._id}
                                onClick={handleDeletePelicula}
                              >
                                Eliminar de la lista
                              </p>
                              <RiDeleteBin5Line className="text-xl" />
                            </button>
                          </li>
                        </ul>
                      </MenuList>
                    </Menu>
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
