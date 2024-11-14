"use client";
import { Tooltip } from "@chakra-ui/react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";

const NavbarLogin = ({ menuResponsive }) => {
  const { data: session, status } = useSession();
  const [User, setUser] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const cargarUsuario = async () => {
      try {
        const res = await fetch(`/api/user/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setUser(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Error al cargar el usuario",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    };
    cargarUsuario();
  }, []);

  const Usuario = User.find((user) => user.email === session?.user?.email);

  return (
    <>
      {status === "loading" ? (
        <p className="text-white mx-1">Cargando...</p>
      ) : (
        <div className="flex flex-row justify-center items-center">
          <Tooltip
            label={`${
              status === "authenticated" ? session?.user?.name : "Perfil"
            }`}
            fontSize="md"
            bg="green.600"
          >
            <span className={`${menuResponsive ? "hidden" : "flex"}`}>
              {session?.user?.email && (
                <Link href={`/perfil/${Usuario?._id}`}>
                  {session?.user?.image === "" ? (
                    <BsPersonCircle className="text-white text-2xl" />
                  ) : (
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
                  )}
                </Link>
              )}
            </span>
          </Tooltip>
          {status === "authenticated" ? (
            <div>
              <div className={`${menuResponsive ? "hidden" : "flex"}`}>
                <Tooltip label="Cerrar Sesión" fontSize="md" bg="green.600">
                  <div
                    className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-2 rounded mx-0 flex flex-row justify-center items-center"
                    onClick={() => signOut()}
                  >
                    <LuLogOut className="text-xl" />
                  </div>
                </Tooltip>
              </div>
              <div
                className={`${
                  menuResponsive
                    ? "flex flex-col justify-center items-center"
                    : "hidden"
                }`}
              >
                <p className="text-white text-sm">{session?.user?.name}</p>
                <button
                  className={`bg-white hover:bg-white/90 text-black font-bold py-2 px-4 rounded mx-2 lg:text-base md:text-sm sm:text-xs lg:flex md:flex ${
                    menuResponsive ? "sm:flex my-5" : "sm:hidden"
                  }`}
                  onClick={() => signOut()}
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-row justify-center items-center">
              <button
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded mx-2 lg:text-base md:text-sm sm:text-xs"
                onClick={() => router.push("/login")}
              >
                Iniciar Sesión
              </button>
              <button
                className={`bg-white hover:bg-white/90 text-black font-bold py-2 px-4 rounded mx-2 lg:text-base md:text-sm sm:text-xs lg:flex md:flex ${
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
