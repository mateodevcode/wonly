"use client";
import Image from "next/image";
import React, { useState } from "react";
import PreLenguaje from "./PreLenguaje";
import Link from "next/link";

const Api = () => {
  const [lenguaje, setLenguaje] = useState("nodejs");

  return (
    <div className="lg:w-8/12 md:w-8/12 sm:w-full flex flex-col justify-start items-center">
      <div className="w-full flex flex-row items-center justify-center">
        <Link href="/">
        <Image
          src="https://i.postimg.cc/qBKvQZYs/Logo-wonly-5.png"
          width={400}
          height={400}
          alt="Logo de Wonly"
          className="lg:w-96 md:w-96 sm:w-60 my-4"
        />
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center">
        <h2 className="lg:text-5xl md:text-5xl sm:text-lg text-center lg:mx-5 md:mx-5 sm:mx-2 font-extrabold font-mono">
          API Peliculas y Series Wonly{" "}
        </h2>
        <Image
          src="https://i.postimg.cc/ZYpstvBP/412836.png"
          width={50}
          height={50}
          alt="Logo de Wonly"
          className="lg:mx-5 md:mx-5 sm:mx-2"
        />
      </div>
      <div className="my-5 flex flex-col justify-start items-start w-full">
        <pre className="bg-slate-800 lg:py-5 md:py-5 sm:py-2 lg:px-10 md:px-10 sm:px-2 rounded-lg w-full text-green-700 lg:text-lg md:text-lg sm:text-[7px]">
          <code className="">{`{`}</code>
          <br />
          <code className="mx-4">
            {`{ "title": "Bienvenido a la API de Peliculas y Series de Wonly" },`}
          </code>
          <br />
          <code className="mx-4">
            {`{ "description": "Accede a una gran variedad de películas y series de manera gratuita." },`}
          </code>
          <br />
          <code className="mx-4">
            {`{ "endpoints": [ "/api/peliculas", "api/series" ] },`}
          </code>
          <br />
          <code className="mx-4">{`{ "status": "Online ✅" }`}</code>
          <br />
          <code className="">{`}`}</code>
        </pre>
      </div>
      <div className="w-full lg:my-10 md:my-10 sm:my-5">
        <h3 className="lg:text-2xl md:text-2xl sm:text-base text-center font-mono text-white lg:mb-10 md:mb-10 sm:mb-5">
          Recursos - Peliculas - Series
        </h3>
        <div className="w-full flex flex-col justify-start items-start">
          <Link
            href="https://wonly.vercel.app/api/peliculas"
            target="_blank"
            className="lg:text-xl md:text-xl sm:text-xs text-center font-mono text-white px-4  py-2 cursor-pointer select-none underline"
          >
            /api/peliculas
          </Link>
          <Link
            href="https://wonly.vercel.app/api/series"
            target="_blank"
            className="lg:text-xl md:text-xl sm:text-xs text-center font-mono text-white px-4  py-2 cursor-pointer select-none underline"
          >
            /api/series
          </Link>
        </div>
      </div>

      <div className="lg:my-10 md:my-10 sm:my-5">
        <h3 className="lg:text-2xl md:text-2xl sm:text-base text-center font-mono text-white lg:mb-10 md:mb-10 sm:mb-5">
          Guia de uso de la API
        </h3>
      </div>
      <div className="w-full">
        <span
          className={`lg:text-xl md:text-xl sm:text-xs text-center font-mono text-white px-4 bg-slate-900 py-2 cursor-pointer select-none ${lenguaje === "nodejs" ? "bg-slate-700" : ""}`}
          id="nodejs"
          onClick={() => {
            setLenguaje("nodejs");
          }}
        >
          node.js
        </span>
        <span
          className={`lg:text-xl md:text-xl sm:text-xs text-center font-mono text-white px-4 bg-slate-900 py-2 cursor-pointer select-none ${lenguaje === "python" ? "bg-slate-700" : ""}`}
          id="python"
          onClick={() => {
            setLenguaje("python");
          }}
        >
          python
        </span>
      </div>
      <div className="my-5 flex flex-col justify-start items-start w-full">
        <PreLenguaje lenguaje={lenguaje} />
      </div>
      <div className="w-full bg-slate-900 py-2 lg:mt-40 md:mt-40 sm:mt-10">
        <h4 className="lg:text-xl md:text-xl sm:text-[8px] text-center font-mono text-white">
          © 2024 One Second Cybersecurity. Todos los derechos reservados.
        </h4>
      </div>
    </div>
  );
};

export default Api;
