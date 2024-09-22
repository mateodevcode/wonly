import { articulos } from "@/data/articulos";
import Link from "next/link";

const Articulo = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="grid grid-cols-5 grid-rows-5 gap-0 h-[500px] w-9/12">
        <Link
          href={`/blog/${articulos[0].url}`}
          className="col-span-3 row-span-5 flex items-end justify-start"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgb(0, 0, 0)),url(${articulos[0].imagen})`,
            backgroundSize: "cover",
          }}
        >
          <p className="text-white text-2xl font-mono m-2">
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
          <p className="text-white text-2xl font-mono m-2">
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
          <p className="text-white text-2xl font-mono m-2">
            {articulos[2].titulo}
          </p>
        </Link>
      </div>
      {articulos.map((articulo) => (
        <Link href={`/blog/${articulo.url}`} key={articulo.url}>
          {articulo.nombre}
        </Link>
      ))}
    </div>
  );
};

export default Articulo;
