import { articulos } from "@/data/articulos";
import Image from "next/image";
import Link from "next/link";

const Articulo = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="grid grid-cols-5 grid-rows-5 gap-0 lg:h-[500px] md:h-[500px] sm:h-[150px] lg:w-9/12 md:w-9/12 sm:w-full">
        <Link
          href={`/blog/${articulos[0].url}`}
          className="col-span-3 row-span-5 flex items-end justify-start"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgb(0, 0, 0)),url(${articulos[0].imagen})`,
            backgroundSize: "cover",
          }}
        >
          <p className="text-white lg:text-2xl md:text-2xl sm:text-[8px] font-mono m-2">
            {articulos[0].titulo}
          </p>
        </Link>
        <Link
          href={`/blog/${articulos[1].url}`}
          className="col-span-2 row-span-3 col-start-4 flex items-end justify-start"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgb(0, 0, 0)),url(${articulos[1].imagen})`,
            backgroundSize: "cover",
          }}
        >
          <p className="text-white lg:text-2xl md:text-2xl sm:text-[8px] font-mono m-2">
            {articulos[1].titulo}
          </p>
        </Link>
        <Link
          href={`/blog/${articulos[2].url}`}
          className="col-span-2 row-span-2 col-start-4 row-start-4 flex items-end justify-start"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgb(0, 0, 0)),url(${articulos[2].imagen})`,
            backgroundSize: "cover",
          }}
        >
          <p className="text-white lg:text-2xl md:text-2xl sm:text-[8px] font-mono m-2">
            {articulos[2].titulo}
          </p>
        </Link>
      </div>
      {/* {articulos.map((articulo) => (
        <Link href={`/blog/${articulo.url}`} key={articulo.url}>
          {articulo.nombre}
        </Link>
      ))} */}
      <div className="w-9/12 bg-red-500 h-full flex flex-row">
        <div className="w-9/12 grid grid-cols-1 gap-2 place-content-start place-items-center p-2">
          <div className="w-full h-[340px] bg-blue-600 flex flex-row justify-center items-center text-white text-3xl">
            <Image src={articulos[0].imagen} alt="" width={300} height={300} />
          </div>
          <div className="w-full h-[340px] bg-blue-600 flex flex-row justify-center items-center text-white text-3xl">
            1
          </div>
          <div className="w-full h-[340px] bg-blue-600 flex flex-row justify-center items-center text-white text-3xl">
            1
          </div>
          <div className="w-full h-[340px] bg-blue-600 flex flex-row justify-center items-center text-white text-3xl">
            1
          </div>
        </div>
        <div className="w-3/12 bg-green-500 h-[400px]">
        <div className="w-full p-2 h-full bg-blue-600">

        </div>
        </div>
      </div>
    </div>
  );
};

export default Articulo;
