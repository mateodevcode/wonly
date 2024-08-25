import Image from "next/image";
import React from "react";
import { tops } from "@/data/tops";

const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="w-full flex flex-col justify-between items-center">
        <div className="w-full flex lg:flex-row sm:flex-col justify-between items-start lg:px-10 sm:px-2 text-white text-xl font-mono mb-10 text-center">
          <div className="lg:w-8/12 sm:w-full grid grid-cols-3 gap-4">
          {tops.map((top, i) => (
            <div key={i} className="sm:h-44 flex flex-col justify-between items-center">
              <h3 className="lg:text-3xl sm:text-base mb-2 font-bold">{top.titulo}</h3>
              <div>
              {top.items.map((item, index) => (
                <p key={index} className="py-1 hover:text-green-600 lg:text-xl sm:text-sm">
                  {item}
                </p>
              ))}
                </div>
            </div>
          ))}
          </div>
          <div className="flex flex-col justify-center items-center lg:h-72 sm:h-44 lg:w-4/12 sm:w-full">
            <Image
              src="/logo.png"
              width={800}
              height={800}
              alt="logo"
              className="w-80"
            />
          </div>
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
