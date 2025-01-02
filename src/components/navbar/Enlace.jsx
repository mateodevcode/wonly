"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Enlace = ({ nombre, Url }) => {
  const path = usePathname().slice(1).toLowerCase();
  const isActive = path === nombre?.toLowerCase();
  const baseClasses =
    "mx-0.5 p-2 px-3 rounded-md select-none cursor-pointer text-sm font-semibold my-0.5";
  const activeClasses = isActive
    ? "dark:bg-white dark:text-black bg-black/10 text-black"
    : "dark:text-white dark:hover:text-black dark:hover:bg-white hover:bg-black/10 hover:text-black";

  return (
    <Link href={`${Url}`} className={`${baseClasses} ${activeClasses}`}>
      {nombre}
    </Link>
  );
};

export default Enlace;
