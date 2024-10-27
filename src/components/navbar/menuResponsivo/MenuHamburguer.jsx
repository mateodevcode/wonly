"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../Logo";
import { enlaces } from "@/data/navbar";
import Link from "next/link";
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import NavbarLogin from "../NavbarLogin";
import MiLista from "@/components/miLista/MiLista";

function MenuHamburguer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip label="Menú" fontSize="md" bg="green.600">
        <span>
        <RxHamburgerMenu
        className="mx-2 text-2xl dark:text-white dark:hover:text-gray-300 cursor-pointer lg:hidden md:flex sm:flex"
        onClick={onOpen}
      />
        </span>
      </Tooltip>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent className="dark:bg-black/80 text-white">
          <DrawerCloseButton color={"white"} className="h-screen" />
          <div className="w-full text-white flex flex-col justify-between items-center h-screen">
            <div className="flex flex-col justify-center items-center">
              <div className="my-10 lg:w-40 md:w-40 sm:w-32">
                <Logo />
              </div>
              <MiLista menuResponsive={true} />
              <div className="flex flex-row justify-center items-center w-full">
                <Link
                  href={"/"}
                  className="hover:bg-green-600 w-full p-2 text-center"
                  onClick={onClose}
                >
                  Inicio
                </Link>
              </div>
              {enlaces.map((enlace, index) => (
                <div
                  key={index}
                  className="flex flex-row justify-center items-center w-full"
                >
                  <Link
                    href={enlace.Url}
                    className="hover:bg-green-600 w-full p-2 text-center"
                  >
                    {enlace.nombre}
                  </Link>
                </div>
              ))}
              <div className="flex flex-row justify-center items-center w-full">
                <Link
                  href="/api"
                  className="hover:bg-green-600 w-full p-2 text-center"
                >
                  REST API
                </Link>
              </div>
            </div>
            <div>
              <NavbarLogin menuResponsive={true} />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MenuHamburguer;
