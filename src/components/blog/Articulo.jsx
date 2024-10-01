import { articulos } from "@/data/articulos";
import Image from "next/image";
import Link from "next/link";
import { FaRegComments } from "react-icons/fa";

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
      <div className="lg:w-9/12 md:w-9/12 sm:w-full h-full flex flex-row">
        <div className="w-9/12 grid grid-cols-1 gap-2 place-content-start place-items-center lg:p-0 md:p-2 sm:p-2">
          <div className="w-full lg:h-[340px] md:h-[340px] sm:h-[150px] flex flex-row justify-center items-center text-3xl">
            <div className="px-2 text-xl h-full py-2 flex flex-col justify-between lg:leading-none md:leading-none sm:leading-4">
              <p className="lg:text-3xl md:text-3xl sm:text-[9px] font-bold lg:h-28 md:h-28 sm:h-20 w-full leading-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
                totam facilis nobis maxime
              </p>
              <span className="font-semibold lg:text-2xl md:text-2xl sm:text-[7px]">Seguridad</span>
              <p className="lg:text-lg md:text-lg sm:text-[5px] lg:h-28 md:h-28 sm:h-20 w-full leading-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique mollitia dolor nemo quidem dicta doloremque earum
                blanditiis veritatis explicabo ratione architecto, 
              </p>
              <div className="flex flex-row justify-between items-center w-full font-mono">
                <div className="text-lg flex flex-row justify-center items-center">
                  <FaRegComments className="lg:text-2xl md:text-2xl sm:text-xs" />
                  <span className="px-2 lg:text-base md:text-base sm:text-[5px]">0 - </span> 
                  <span className="lg:text-base md:text-base sm:text-[5px]">Mateo Lizcano</span>
                </div>
                <p className="lg:text-sm md:text-sm sm:text-[5px] px-2">Hace 2 horas</p>
              </div>
            </div>
            <Image
              src={"https://i.postimg.cc/ydTxQv82/javascript-512.png"}
              alt=""
              width={300}
              height={300}
              className="lg:px-2 md:px-2 sm:px-0 lg:w-[300px] md:w-[300px] lg:h-[300px] md:h-[300px] sm:w-32 sm:h-32"
            />
          </div>         
          

          <div className="w-full lg:h-[340px] md:h-[340px] sm:h-[150px] flex flex-row justify-center items-center text-3xl">
            <div className="px-2 text-xl h-full py-2 flex flex-col justify-between lg:leading-none md:leading-none sm:leading-4">
              <p className="lg:text-3xl md:text-3xl sm:text-[9px] font-bold lg:h-28 md:h-28 sm:h-20 w-full leading-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
                totam facilis nobis maxime
              </p>
              <span className="font-semibold lg:text-2xl md:text-2xl sm:text-[7px]">Seguridad</span>
              <p className="lg:text-lg md:text-lg sm:text-[5px] lg:h-28 md:h-28 sm:h-20 w-full leading-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique mollitia dolor nemo quidem dicta doloremque earum
                blanditiis veritatis explicabo ratione architecto, 
              </p>
              <div className="flex flex-row justify-between items-center w-full font-mono">
                <div className="text-lg flex flex-row justify-center items-center">
                  <FaRegComments className="lg:text-2xl md:text-2xl sm:text-xs" />
                  <span className="px-2 lg:text-base md:text-base sm:text-[5px]">0 - </span> 
                  <span className="lg:text-base md:text-base sm:text-[5px]">Mateo Lizcano</span>
                </div>
                <p className="lg:text-sm md:text-sm sm:text-[5px] px-2">Hace 2 horas</p>
              </div>
            </div>
            <Image
              src={"https://i.postimg.cc/ydTxQv82/javascript-512.png"}
              alt=""
              width={300}
              height={300}
              className="lg:px-2 md:px-2 sm:px-0 lg:w-[300px] md:w-[300px] lg:h-[300px] md:h-[300px] sm:w-32 sm:h-32"
            />
          </div> 
        </div>
        <div className="w-3/12 h-[400px]">
          <div className="w-full p-2 h-full bg-blue-100/50"></div>
        </div>
      </div>
    </div>
  );
};

export default Articulo;
