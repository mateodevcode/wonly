"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { enlaces } from "@/data/enlaces.navbar";
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "@/components/navbar/logo/Logo";
import Enlace from "../Enlace";
import NavbarLogin from "../NavbarLogin";
import { IoCloseOutline } from "react-icons/io5";
import MiLista from "@/components/miLista/MiLista";

function MenuHamburguer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip
        label="Menú"
        fontSize="small"
        bg="black"
        color="white"
        rounded={5}
        paddingBottom={1}
      >
        <span>
          <RxHamburgerMenu
            className="ml-2 text-2xl dark:text-white dark:hover:text-gray-300 cursor-pointer lg:hidden md:flex sm:flex"
            onClick={onOpen}
          />
        </span>
      </Tooltip>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent className="dark:bg-black/80 text-white">
          <div className="flex flex-col items-center justify-between h-screen w-full">
            <div className="w-full flex justify-between items-center py-2 px-5 pt-16 select-none">
              <Logo />
              <IoCloseOutline
                onClick={() => onClose()}
                className="text-white text-2xl select-none"
              />
            </div>
            <div className="flex flex-col items-center">
              {enlaces.map((enlace, index) => (
                <Enlace
                  key={index}
                  nombre={enlace.nombre}
                  Url={enlace.Url}
                  onClose={onClose}
                />
              ))}
              <MiLista menuResponsive={true} onClose={onClose} />
            </div>

            <div className="w-full">
              <NavbarLogin menuResponsive={true} />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MenuHamburguer;
