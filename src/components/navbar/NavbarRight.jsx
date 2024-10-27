"use client";
import BloquearAnuncios from "./bloqueadorAnuncios/BloquearAnuncios";
import MenuHamburguer from "./menuResponsivo/MenuHamburguer";
import MiLista from "../miLista/MiLista";
import NavbarLogin from "./NavbarLogin";
import { useSession } from "next-auth/react";

const NavbarRight = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-row justify-center items-center lg:mx-10 md:mx-10 sm:mx-2">
      <BloquearAnuncios />
      {status === "authenticated" && <MiLista />}
      <NavbarLogin menuResponsive={false} />
      <MenuHamburguer menuResponsive={false} />
    </div>
  );
};

export default NavbarRight;
