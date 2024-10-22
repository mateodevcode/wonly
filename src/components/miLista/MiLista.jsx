import { generos } from "@/data/navbar";
import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import Image from "next/image";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { SlOptions } from "react-icons/sl";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const MiLista = () => {
  return (
    <Menu>
      <MenuButton className="hover:bg-white/10 rounded-md">
        <div className="hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-md flex flex-row justify-center items-center lg:text-base md:text-base sm:text-sm mx-1 lg:flex md:flex sm:hidden cursor-pointer select-none">
          <BsInfoCircleFill className="mr-2 lg:text-xl md:text-xl sm:text-base" />{" "}
          Mi Lista
        </div>
      </MenuButton>
      <MenuList style={generos.estilosLista}>
        <ul className="flex flex-col justify-center items-center mx-2 w-72">
          <li className="w-full px-2 py-1 hover:bg-white/10 select-none cursor-pointer flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center items-center">
              <Image
                src={"https://i.postimg.cc/JzKQwjc7/logo-wonly_(4).png"}
                alt="logo"
                height={75}
                width={75}
              />
              <p className="text-white font-semibold text-sm mx-1">Wonly</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              {/* <SlOptions className="text-white hover:text-gray-400 text-lg" /> */}
              <Menu>
                <MenuButton className="hover:scale-[110%]">
                  <SlOptions className="text-white hover:text-gray-400 text-xl mx-2" />
                </MenuButton>
                <MenuList style={generos.estilosLista} className="mt-40 z-20">
                  <ul className="flex flex-col justify-center items-center mx-2">
                    <li className="w-full px-2 py-1 select-none cursor-pointer flex flex-row justify-between items-center">
                      <div className="flex flex-row justify-center items-center">
                      <p className="text-white font-semibold text-sm mx-1">
                        Marcar como visto 
                      </p>
                      <IoCheckmarkDoneOutline className="mx-2" />
                      </div>
                      <div className="flex flex-row justify-between items-center">
                      <RiDeleteBin5Line className="text-white hover:text-gray-400 text-lg hover:scale-[105%]" />
                      </div>
                    </li>
                  </ul>
                </MenuList>
              </Menu>
              {/* <FaPlay className="text-white hover:text-gray-400 text-2xl hover:scale-[110%]" /> */}
            </div>
          </li>
        </ul>
      </MenuList>
    </Menu>
  );
};

export default MiLista;
