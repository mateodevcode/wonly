"use client";
import MenuHamburguer from "./menuResponsivo/MenuHamburguer";
import NavbarLogin from "./NavbarLogin";

const NavbarRight = () => {
  return (
    <div className="flex flex-row justify-center items-center px-5">
      <NavbarLogin menuResponsive={false} />
      <MenuHamburguer menuResponsive={false} />
    </div>
  );
};

export default NavbarRight;
