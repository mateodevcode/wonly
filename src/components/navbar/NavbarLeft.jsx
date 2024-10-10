import Logo from "./Logo";
import Enlace from "./Enlace";
import Generos from "./Generos";
import { enlaces } from "@/data/navbar";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "@chakra-ui/react";

const NavbarLeft = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-row justify-center items-center lg:w-40 md:w-40 sm:w-32 lg:mx-10 md:mx-10 sm:mx-2">
      <Logo />
      </div>
      <div className="lg:flex md:hidden sm:hidden">
        {enlaces.map((enlace, index) => (
          <Enlace key={index} nombre={enlace.nombre} Url={enlace.Url} />
        ))}
        <Generos />
        <Tooltip label="API Musica Wonly" fontSize="md" color={"white"} bg={"rebeccapurple"} px={5}>
        <Link href="https://api-wonly-music.vercel.app/" className="flex flex-row justify-center items-center">
          <Image src="https://i.postimg.cc/Bvfn9sH7/logo-wonly-music.png" width={30} height={30} alt="API de musica wonly" />
        </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default NavbarLeft;
