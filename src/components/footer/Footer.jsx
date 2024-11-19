import Image from "next/image";
import Link from "next/link";
import Tops from "./Tops";
import { logo } from "@/data/navbar";

const Footer = () => {
  return (
    <div className="w-full bg-zinc-900 lg:pt-20 md:pt-20 sm:pt-5">
      <div className="w-full flex flex-col justify-between items-center">
        <div className="w-full flex lg:flex-row sm:flex-col justify-between items-start lg:px-10 sm:px-2 text-white font-mono text-center">
          <Tops />
          <Link
            href={"/"}
            className="flex flex-col justify-center items-center lg:h-60 md:h-40 sm:h-16 lg:w-4/12 sm:w-full "
          >
            <Image
              src={logo.src}
              width={800}
              height={800}
              alt={logo.alt}
              className="lg:w-96 md:w-96 sm:w-40 lg:h-28 md:h-28 sm:h-12"
            />
          </Link>
        </div>
        <p className="text-white text-center py-5 lg:text-lg md:text-base sm:text-[8px]">
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
