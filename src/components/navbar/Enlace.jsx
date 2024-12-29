"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Enlace = ({ nombre, Url }) => {
  const path = usePathname().slice(1).toLowerCase();
  const isActive = path === nombre?.toLowerCase();
  const baseClasses =
    "mx-0.5 p-2 px-3 rounded-md select-none cursor-pointer text-sm font-semibold my-0.5";
  const activeClasses = isActive
    ? "bg-white text-black"
    : "text-white hover:bg-black/20 hover:text-black hover:bg-white";

  return (
    <Link href={`${Url}`} className={`${baseClasses} ${activeClasses}`}>
      {nombre}
    </Link>
  );
};

export default Enlace;
