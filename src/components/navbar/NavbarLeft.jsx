"use client";
import Logo from "./Logo";
import Enlace from "./Enlace";
import Generos from "./Generos";
import { enlaces } from "@/data/navbar";
import Link from "next/link";
import { Tooltip } from "@chakra-ui/react";

const NavbarLeft = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-row justify-center items-center lg:w-40 md:w-40 sm:w-32 lg:mx-10 md:mx-10 sm:mx-2">
        <Logo />
      </div>
      <div className="lg:flex md:hidden sm:hidden">
        {enlaces.map((enlace, index) => (
          <Enlace key={index} nombre={enlace.nombre} Url={enlace.Url} />
        ))}
        <Generos />
        <Link
          href="/peticiones"
          className="mx-0.5 p-2 hover:bg-black/20  dark:text-white dark:hover:bg-green-500/50 select-none cursor-pointer"
        >
          Peticiones
        </Link>
        <Tooltip
          label="API Peliculas y Series"
          fontSize="md"
          color={"white"}
          bg={"rebeccapurple"}
          px={5}
        >
          <Link
            href="/api"
            className="flex flex-row justify-center items-center text-white font-mono dark:hover:bg-green-500/50 px-2"
          >
            REST API
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default NavbarLeft;
