"use client";
import NavbarRight from "./NavbarRight";
import NavbarLeft from "./NavbarLeft";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const estilosBase =
    "flex flex-row justify-between items-center w-full fixed z-40 lg:h-16 sm:h-12";
  const estilos = isScrolled ? "bg-zinc-900/30 backdrop-blur-sm text-white" : "dark:bg-black bg-white";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${estilosBase} ${estilos} transition-all duration-200 ease-in-out`}
    >
      <NavbarLeft />
      <NavbarRight />
    </header>
  );
};

export default Navbar;
