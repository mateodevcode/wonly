import Image from "next/image";
import Link from "next/link";

const ImgMediana = ({ imagen, nombre, Url }) => {
  return (
    <Link href={Url} target="_blank">
      <Image
        src={imagen}
        alt={nombre}
        width={400}
        height={400}
        className="w-40 h-40 mx-2"
      />
    </Link>
  );
};

export default ImgMediana;
