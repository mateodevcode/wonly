"use client";
import { Spinner, Tooltip } from "@chakra-ui/react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { LuLogOut } from "react-icons/lu";
import { useContext } from "react";
import { MoviesContext } from "@/context/MoviesContext";
import SwitchMode from "@/components/navbar/switch/Switch";

const NavbarLogin = ({ menuResponsive }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { Usuario } = useContext(MoviesContext);
  
  return (
    <>
      {status === "loading" ? (
        <div className="xl:mx-5 lg:mx-5 md:mx-2 sm:mx-2">
          <Spinner
            speed="0.5s"
            emptyColor="gray.100"
            color="blue.900"
            size="md"
          />
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center">
          <SwitchMode />
          <Tooltip
            label={`${
              status === "authenticated" ? session?.user?.name : "Perfil"
            }`}
            fontSize="small"
            bg="black"
            color="white"
            rounded={5}
            paddingBottom={1}
          >
            <span className={`${menuResponsive ? "hidden" : "flex"}`}>
              {session?.user?.email && (
                <Link href={`/perfil/${Usuario?._id}`}>
                  <Image
                    src={
                      session?.user?.image ||
                      "https://i.postimg.cc/QNq4MwGh/imagen-perfil.png"
                    }
                    alt={session?.user?.name || "Imagen de perfil"}
                    height={50}
                    width={50}
                    className="mx-2 w-8 h-8 cursor-pointer rounded-full"
                  />
                </Link>
              )}
            </span>
          </Tooltip>
          {status === "authenticated" ? (
            <div>
              <div className={`${menuResponsive ? "hidden" : "flex"}`}>
                <Tooltip
                  label="Cerrar Sesión"
                  fontSize="small"
                  bg="black"
                  color="white"
                  rounded={5}
                  paddingBottom={1}
                >
                  <div
                    className="dark:bg-white/10 dark:hover:bg-white/20 bg-black/10 hover:bg-black/20 dark:text-white font-bold py-2 px-2 rounded mx-0 flex flex-row justify-center items-center"
                    onClick={() => {
                      confirm("¿Estás seguro de cerrar sesión?") && signOut();
                    }}
                  >
                    <LuLogOut className="text-base" />
                  </div>
                </Tooltip>
              </div>
              <div
                className={`w-full  ${
                  menuResponsive
                    ? "flex flex-col justify-center items-center"
                    : "hidden"
                }`}
              >
                <p className="text-white text-xs">{session?.user?.name}</p>
                <div className="w-full flex flex-row justify-between items-center my-2">
                  <Image
                    src={session?.user?.image}
                    alt="Imagen de perfil"
                    height={50}
                    width={50}
                    className="mx-2 w-8 h-8 cursor-pointer rounded-full"
                  />
                  <button
                    className={`bg-white hover:bg-white/90 text-black font-bold py-2 px-4 rounded mx-2 lg:text-base md:text-sm sm:text-xs lg:flex md:flex ${
                      menuResponsive ? "sm:flex" : "sm:hidden"
                    }`}
                    onClick={() => {
                      confirm("¿Estás seguro de cerrar sesión?") && signOut();
                    }}
                  >
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-row justify-center items-center">
              <button
                className={`dark:bg-white/10 dark:hover:bg-white/20 bg-black/10 hover:bg-black/20 dark:text-white font-semibold py-2 px-4 rounded mx-1 lg:text-xs md:text-xs sm:text-xs lg:flex md:flex ${
                  menuResponsive ? "sm:flex my-5" : "sm:hidden"
                }`}
                onClick={() => router.push("/login")}
              >
                Iniciar Sesión
              </button>
              <button
                className={`dark:bg-white dark:hover:bg-white/90 border-[1px] hover:bg-black/10 dark:text-black font-semibold py-2 px-4 rounded mx-1 lg:text-xs md:text-xs sm:text-xs xl:flex lg:hidden md:flex smd:hidden ${
                  menuResponsive ? "sm:flex my-5" : "sm:hidden"
                }`}
                onClick={() => router.push("/register")}
              >
                Registrarse
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NavbarLogin;
