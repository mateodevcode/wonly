"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../Logo";
import { enlaces } from "@/data/navbar";
import Link from "next/link";
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import BloquearAnuncios from "../bloqueadorAnuncios/BloquearAnuncios";

function MenuHamburguer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <RxHamburgerMenu
        className="mx-2 text-2xl dark:text-white dark:hover:text-gray-300 cursor-pointer lg:hidden md:flex sm:flex"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent className="dark:bg-black/80 text-white">
          <DrawerCloseButton color={"white"} />
          <div className="w-full text-white flex flex-col justify-center items-center">
            <div className="my-10">
            <Logo />
            </div>
            <div
                className="flex flex-row justify-center items-center w-full"
              >
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
            <div className="my-20">
            <BloquearAnuncios menuResponsive={true} />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MenuHamburguer;
