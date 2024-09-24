"use client";
import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { enlacesOrdenados } from "@/data/navbar";
import Link from "next/link";
import { generos } from "@/data/navbar";

const Generos = () => {
  const [activo, setActivo] = useState(false);

  return (
    <Menu>
      <MenuButton
        className={`mx-0.5 p-2 hover:bg-black/20 dark:text-white dark:hover:bg-green-500/50 select-none cursor-pointer`}
        onClick={() => setActivo(!activo)}
      >
        <div className="flex flex-row justify-center items-center">
          <p>{generos.nombre}</p>{" "}
          {activo ? (
            <MdKeyboardArrowRight className="text-xl" />
          ) : (
            <MdKeyboardArrowDown className="text-xl" />
          )}
        </div>
      </MenuButton>
      <MenuList style={generos.estilosLista}>
        <ul className="flex flex-col justify-center items-center">
          {enlacesOrdenados.map((enlace, index) => (
            <Link
              href={`${enlace.Url}`}
              key={index}
              className="w-full px-2 py-1 hover:bg-green-700 select-none cursor-pointer"
            >
              {enlace.nombre}
            </Link>
          ))}
          <Link
            href="/generos"
            className="w-full px-2 py-1 hover:bg-green-700 select-none cursor-pointer"
          >
            Ver Todos
          </Link>
        </ul>
      </MenuList>
    </Menu>
  );
};

export default Generos;
