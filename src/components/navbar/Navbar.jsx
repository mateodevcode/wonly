import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { enlaces } from "@/data/navbar";
import Enlace from "./Enlace";
import Logo from "./Logo";
import { Tooltip } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full fixed dark:bg-blue-950/80 z-40">
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
        <Tooltip label="Perfil" fontSize="md" bg={"green.600"}>
          <BsPersonCircle className="mx-2 text-2xl dark:text-white dark:hover:text-gray-300 cursor-pointer" />
        </Tooltip>

        <Tooltip label="Menu" fontSize="md" bg={"green.600"}>
          <RxHamburgerMenu className="mx-2 text-2xl dark:text-white dark:hover:text-gray-300 cursor-pointer" />
        </Tooltip>
      </div>
    </div>
  );
};

export default Navbar;
