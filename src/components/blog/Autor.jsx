import Image from "next/image";
import Link from "next/link";

const Autor = ({ nombre, fecha, imagen, Url }) => {
  return (
    <Link
      href={Url}
      className="flex flex-row justify-center items-center mt-10"
    >
      <Image
        src={imagen}
        alt={`Foto de ${nombre}`}
        width={50}
        height={50}
        className="rounded-full border-2 border-black"
      />
      <p className="flex flex-col justify-center items-start">
        <span className="mx-4 font-semibold text-sm">
          {nombre}
        </span>
        <span className="mx-4 text-sm text-gray-700">{fecha}</span>
      </p>
    </Link>
  );
};

export default Autor;
