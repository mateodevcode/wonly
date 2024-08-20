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

function MenuHamburguer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <RxHamburgerMenu
        className="mx-2 text-2xl dark:text-white dark:hover:text-gray-300 cursor-pointer lg:hidden md:hidden sm:flex"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent className="dark:bg-blue-950/80 text-white">
          <DrawerCloseButton color={"white"} />
          <div className="w-full text-white">
            <Logo />
            {enlaces.map((enlace, index) => (
              <div
                key={index}
                className="flex flex-row justify-center items-center mt-5 px-5 w-full"
              >
                <Link
                  href={enlace.Url}
                  className="hover:bg-green-600 w-full p-2"
                >
                  {enlace.nombre}
                </Link>
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MenuHamburguer;
