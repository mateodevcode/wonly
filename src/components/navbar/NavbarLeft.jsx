import Logo from "./Logo";
import Enlace from "./Enlace";
import Generos from "./Generos";
import { enlaces } from "@/data/navbar";

const NavbarLeft = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <Logo />
      <div className="lg:flex md:flex sm:hidden">
        {enlaces.map((enlace, index) => (
          <Enlace key={index} nombre={enlace.nombre} Url={enlace.Url} />
        ))}
        <Generos />
      </div>
    </div>
  );
};

export default NavbarLeft;
