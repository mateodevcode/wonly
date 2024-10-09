"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Enlace = ({ nombre, Url }) => {
  let path = usePathname();
  path = path.replace("/", "");

  return (
    <Link
      href={`${Url}`}
      className={`mx-0.5 p-2 hover:bg-black/20  dark:text-white dark:hover:bg-green-500/50 select-none cursor-pointer  ${
        path === "series" && nombre == "Series" ? "bg-green-500/50" : null
      }
       ${
         path === "peliculas" && nombre == "Peliculas"
           ? "bg-green-500/50"
           : null
       }`}
    >
      {nombre}
    </Link>
  );
};

export default Enlace;
