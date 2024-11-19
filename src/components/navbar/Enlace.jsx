"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Enlace = ({ nombre, Url }) => {
  let path = usePathname();
  path = path.replace("/", "");
  
  return (
    <Link
      href={`${Url}`}
      className={`font-semibold mx-0.5 p-2 px-3 hover:bg-black/20 hover:text-black hover:bg-white rounded-md select-none cursor-pointer text-sm ${
        path === nombre.toLowerCase() ? "bg-white" : "text-white"
      }`}
    >
      {nombre}
    </Link>
  );
};

export default Enlace;
