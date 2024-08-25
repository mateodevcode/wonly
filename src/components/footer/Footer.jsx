import Image from "next/image";
import React from "react";
import { tops } from "@/data/tops";

const Footer = () => {
  return (
    <div className="w-full bg-black pt-4  0">
      <div className="flex flex-col justify-center items-center mx-20">
        <div className="w-full flex flex-row justify-between items-start px-10 text-white text-xl font-mono mb-10 text-center">
          {tops.map((top, i) => (
            <div key={i}>
              <h3 className="text-3xl mb-2 font-bold">{top.titulo}</h3>
              {top.items.map((item, index) => (
                <p key={index} className="py-1 hover:text-green-600 text-xl">
                  {item}
                </p>
              ))}
            </div>
          ))}
          <div className="flex flex-col justify-center items-center h-72">
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
          © 2024 Todos los derechos reservados. Desarollado por <strong>One Second CyberSecurity</strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;
