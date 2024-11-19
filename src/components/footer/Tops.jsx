import { tops } from "@/data/tops";
import Link from "next/link";

const Tops = () => {
  return (
    <div className="lg:w-8/12 sm:w-full grid grid-cols-3 gap-4">
      {tops.map((top, i) => (
        <div
          key={i}
          className="flex flex-col justify-start items-center"
        >
          <h3 className="lg:text-xl md:text-xl sm:text-xs mb-2 font-bold">
            {top.titulo}
          </h3>
          <div className="flex flex-col justify-center items-center">
            {top.items.map((item, index) => (
              <Link
              href={`/${item.url}`}
                key={index}
                className="lg:py-1 md:py-1 sm:py-0 lg:text-base md:text-base sm:text-[9px] cursor-pointer hover:bg-white hover:text-black w-72 rounded-md select-none"
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
