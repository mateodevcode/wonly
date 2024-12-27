import Image from "next/image";
import Link from "next/link";
import Tops from "./Tops";
import { logo } from "@/data/logo";

const Footer = () => {
  return (
    <div className="w-full bg-zinc-900 xl:pt-8 lg:pt-8 md:pt-10 sm:pt-5">
      <div className="w-full flex flex-col justify-between items-center">
        <div className="w-full flex xl:flex-row lg:flex-row md:flex-row smd:flex-row sm:flex-col justify-between items-center  text-white font-mono text-center">
          <Tops />
          <div className="lg:w-3/12 smd:w-3/12 md:w-3/12 sm:w-7/12 lg:h-40 md:h-40 sm:h-16 flex flex-col justify-center items-center">
            <Link
              href={"/"}
              className="flex flex-col justify-center items-center xl:w-52 lg:w-48 lg:h-20 sm:w-32 sm:h-16 smd:w-32 smd:h-20 xl:h-24"
            >
              <Image
                src={logo.src}
                width={400}
                height={400}
                alt={logo.alt}
                className="object-cover w-full h-full"
              />
            </Link>
          </div>
        </div>
        <p className="text-white text-center py-2 lg:text-sm md:text-sm sm:text-[8px]">
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
