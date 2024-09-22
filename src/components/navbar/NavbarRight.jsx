import BloquearAnuncios from "./bloqueadorAnuncios/BloquearAnuncios";
import { BsInfoCircleFill, BsPersonCircle } from "react-icons/bs";
import { Tooltip } from "@chakra-ui/react";
import MenuHamburguer from "./menuResponsivo/MenuHamburguer";

const NavbarRight = () => {
  return (
    <div className="flex flex-row justify-center items-center mx-5">
      <BloquearAnuncios />
      <button className="hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-md flex flex-row justify-center items-center lg:text-base md:text-base sm:text-sm mx-1 lg:flex md:flex sm:hidden">
        <BsInfoCircleFill className="mr-2 lg:text-xl md:text-xl sm:text-base" />{" "}
        Mi Lista
      </button>
      <Tooltip label="Perfil" fontSize="md" bg="green.600">
        <BsPersonCircle className="mx-2 text-2xl dark:text-white dark:hover:text-gray-300 cursor-pointer" />
      </Tooltip>
      <MenuHamburguer menuResponsive={false} />
    </div>
  );
};

export default NavbarRight;
