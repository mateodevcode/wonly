import { tops } from "@/data/tops";
import Link from "next/link";

const Tops = () => {
  return (
    <div className="xl:w-7/12 lg:w-9/12 md:w-10/12 smd:w-9/12 sm:w-full lg:h-40 md:h-40 smd:h-24 sm:h-20 lg:flex md:flex justify-center sm:flex">
      {tops.map((top, i) => (
        <div
          key={i}
          className="flex flex-col justify-start items-center"
        >
          <h3 className="lg:text-xl md:text-lg sm:text-xs mb-2 font-bold">
            {top.titulo}
          </h3>
          <div className="flex flex-col justify-center items-center">
            {top.items.map((item, index) => (
              <Link
              href={`/${item.url}`}
                key={index}
                className="lg:py-1 md:py-1 sm:py-0 lg:text-sm md:text-xs sm:text-[8px] cursor-pointer hover:text-white/50 select-none px-2 mx-2"
              >
                {item.nombre}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tops;
