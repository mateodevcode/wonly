import React from "react";
import { BsInfoCircleFill, BsPersonCircle } from "react-icons/bs";
import { enlaces } from "@/data/navbar";
import Enlace from "./Enlace";
import Logo from "./Logo";
import { Tooltip } from "@chakra-ui/react";
import MenuHamburguer from "./menuResponsivo/MenuHamburguer";
import { GoAlertFill } from "react-icons/go";
import BloquearAnuncios from "./BloquearAnuncios";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full fixed dark:bg-blue-950/80 z-40 h-16">
      <div className="flex flex-row justify-center items-center">
        <div>
          <Logo />
        </div>
        <div className="lg:flex md:flex sm:hidden">
          {enlaces.map((enlace, index) => (
            <Enlace key={index} nombre={enlace.nombre} Url={enlace.Url} />
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mx-5">
        <BloquearAnuncios />
        <button className="hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-md flex flex-row justify-center items-center lg:text-base md:text-base sm:text-sm mx-1 lg:flex md:flex sm:hidden">
          <BsInfoCircleFill className="mr-2 lg:text-xl md:text-xl sm:text-base" />{" "}
          Mi Lista
        </button>
        <Tooltip label="Perfil" fontSize="md" bg={"green.600"}>
          <BsPersonCircle className="mx-2 text-2xl dark:text-white dark:hover:text-gray-300 cursor-pointer" />
        </Tooltip>
        <MenuHamburguer />
      </div>
    </div>
  );
};

export default Navbar;
