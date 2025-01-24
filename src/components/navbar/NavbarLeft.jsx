"use client";
import Logo from "@/components/navbar/logo/Logo";
import Enlace from "./Enlace";
import { enlaces } from "@/data/enlaces.navbar";

const NavbarLeft = () => {
  return (
    <div className="flex flex-row justify-center items-center pl-5">
      <Logo />
      <div className="lg:flex md:hidden sm:hidden ml-5">
        {enlaces.map((enlace, index) => (
          <Enlace key={index} nombre={enlace.nombre} Url={enlace.Url} />
        ))}
      </div>
    </div>
  );
};

export default NavbarLeft;
