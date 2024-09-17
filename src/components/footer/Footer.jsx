import Image from "next/image";
import Link from "next/link";
import Tops from "./Tops";

const Footer = () => {
  return (
    <div className="w-full bg-black pt-20">
      <div className="w-full flex flex-col justify-between items-center">
        <div className="w-full flex lg:flex-row sm:flex-col justify-between items-start lg:px-10 sm:px-2 text-white text-xl font-mono mb-10 text-center">
          <Tops />
          <Link
            href={"/"}
            className="flex flex-col justify-center items-center lg:h-72 sm:h-44 lg:w-4/12 sm:w-full"
          >
            <Image
              src="/logo.png"
              width={800}
              height={800}
              alt="logo"
              className="w-80 h-28"
            />
          </Link>
        </div>
        <p className="text-white text-center py-5">
          © 2024 Todos los derechos reservados. Desarollado por{" "}
          <strong>One Second CyberSecurity</strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;
