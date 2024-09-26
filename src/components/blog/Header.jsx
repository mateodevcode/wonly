import { FiMenu } from "react-icons/fi";
import { Tooltip } from "@chakra-ui/react";
import { logo } from "@/data/navbar";
import Link from "next/link";
import Image from "next/image";
import MenuHamburguer from "../navbar/menuResponsivo/MenuHamburguer";

const Header = () => {
  return (
    <header className="w-full">
      <nav className="w-full flex flex-row justify-between items-center bg-black text-white h-16">
        <div className="flex flex-row justify-center items-center mx-4 lg:w-60 md:w-40 sm:w-32">
          <Link href={"/"} className="">
            <Image
              src={logo.src}
              width={150}
              height={150}
              alt={logo.alt}
              className="w-40 lg:h-12 md:h-12 sm:h-10"
            />
          </Link>
        </div>
        <div className="flex flex-row lg:justify-center md:justify-end sm:justify-center items-center mx-4 lg:w-40 md:w-40 sm:w-10">
          {/* <Tooltip
            label="Menu"
            fontSize="md"
            color={"white"}
            bg={"rebeccapurple"}
            px={5}
          >
            <FiMenu className="text-2xl cursor-pointer" />
          </Tooltip> */}
          <MenuHamburguer />
        </div>
      </nav>
    </header>
  );
};

export default Header;
