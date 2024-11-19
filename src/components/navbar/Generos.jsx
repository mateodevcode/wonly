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
        className={`font-semibold text-sm mx-0.5 p-2 px-3 hover:bg-black/20 hover:text-black hover:bg-white rounded-md select-none cursor-pointer text-white`}
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
              className="w-full px-3 py-1 hover:bg-white hover:text-black select-none cursor-pointer"
            >
              {enlace.nombre}
            </Link>
          ))}
          <Link
            href="/generos"
            className="w-full px-2 py-1 hover:bg-white hover:text-black select-none cursor-pointer"
          >
            Ver Todos
          </Link>
        </ul>
      </MenuList>
    </Menu>
  );
};

export default Generos;
