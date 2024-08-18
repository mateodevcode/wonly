import { enlacesSeries } from "@/data/enlaces.series";
import Link from "next/link";

const Enlaces = () => {
  return (
    <div className="flex flex-row justify-start items-center mt-10 lg:text-base md:text-base sm:text-sm bg-gray-900 w-full h-10">
      {enlacesSeries.map((enlace, index) => (
        <Link key={index} href={`${enlace.Url}`} className="font-semibold hover:bg-green-600/50 py-2 px-3 cursor-pointer">
          {enlace.nombre}
        </Link>
      ))}
    </div>
  );
};

export default Enlaces;
