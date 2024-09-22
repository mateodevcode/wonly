import Image from "next/image";
import Link from "next/link";
import Tops from "./Tops";
import { logo } from "@/data/navbar";

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
              src={logo.src}
              width={800}
              height={800}
              alt={logo.alt}
              className="w-96 h-28"
            />
          </Link>
        </div>
        <p className="text-white text-center py-5">
          © 2024 Todos los derechos reservados. Desarollado por{" "}
          <Link href={"https://one-second-cybersecurity.vercel.app/"}>
            <strong className="hover:text-blue-600">One Second CyberSecurity</strong>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
