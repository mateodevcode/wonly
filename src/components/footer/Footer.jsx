import Image from "next/image";
import Link from "next/link";
import Tops from "./Tops";
import { logo } from "@/data/navbar";

const Footer = () => {
  return (
    <div className="w-full bg-zinc-900 lg:pt-10 md:pt-10 sm:pt-5">
      <div className="w-full flex flex-col justify-between items-center">
        <div className="w-full flex lg:flex-row md:flex-row sm:flex-col justify-between items-start  text-white font-mono text-center">
          <Tops />
          <Link
            href={"/"}
            className="flex flex-col justify-center items-center lg:h-52 md:h-40 sm:h-16 lg:w-4/12 md:w-3/12 sm:w-full"
          >
            <Image
              src={logo.src}
              width={800}
              height={800}
              alt={logo.alt}
              className="lg:w-72 md:w-68 sm:w-40 lg:h-20 md:h-12 sm:h-12"
            />
          </Link>
        </div>
        <p className="text-white text-center py-2 lg:text-base md:text-base sm:text-[8px]">
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
