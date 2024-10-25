"use client";
import { Tooltip } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { LuLogOut } from "react-icons/lu";

const NavbarLogin = () => {
  const { data: session, status } = useSession();
  return (
    <div className="flex flex-row justify-center items-center">
      <Tooltip
        label={`${status === "authenticated" ? session?.user?.name : "Perfil"}`}
        fontSize="md"
        bg="green.600"
      >
        <span>
          {session?.user?.email && (
            <Image
              src={session?.user?.image}
              alt={session?.user?.name}
              height={50}
              width={50}
              className="mx-2 w-9 h-9 cursor-pointer rounded-full"
            />
          )}
        </span>
      </Tooltip>
      {status === "authenticated" ? (
        <Tooltip label="Cerrar Sesión" fontSize="md" bg="green.600">
          <div
            className="hover:bg-white/10 text-white font-bold py-2 px-2 rounded mx-2 flex flex-row justify-center items-center"
            onClick={() => signOut()}
          >
            <LuLogOut className="text-xl" />
          </div>
        </Tooltip>
      ) : (
        <div>
          <button
            className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded mx-2"
            onClick={() => signIn("google")}
          >
            Iniciar Sesión
          </button>
          <button
            className="bg-white hover:bg-white/90 text-black font-bold py-2 px-4 rounded mx-2"
            onClick={() => signIn("google")}
          >
            Registrarse
          </button>
        </div>
      )}
    </div>
  );
};

export default NavbarLogin;
