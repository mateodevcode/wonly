import React, { useState } from "react";

const PreLenguaje = ({ lenguaje }) => {
  switch (lenguaje) {
    case "nodejs":
      return (
        <pre className="bg-slate-800 lg:py-5 md:py-5 sm:py-2 lg:px-10 md:px-10 sm:px-2 rounded-lg w-full text-green-700 lg:text-lg md:text-lg sm:text-[7px]">
          <code className="mx-4">
            {`const res = await fetch("https://wonly.vercel.app/api/peliculas", {
        method: "GET",
        headers: { "Content-Type": "application/json"}});
  const data = await res.json();`}
          </code>
        </pre>
      );
    case "python":
      return (
        <pre className="bg-slate-800 lg:py-5 md:py-5 sm:py-2 lg:px-10 md:px-10 sm:px-2 rounded-lg w-full text-green-700 lg:text-lg md:text-lg sm:text-[7px]">
          <code className="mx-4">
            {`import requests

  url = "https://wonly.vercel.app/api/peliculas"
  headers = {
      "Content-Type": "application/json"
  }

  response = requests.get(url, headers=headers)
  data = response.json()

  print(data)`}
          </code>
        </pre>
      );
  }
};

export default PreLenguaje;
