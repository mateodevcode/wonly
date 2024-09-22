"use client"
import { useRouter } from "next/navigation";

const Boton = ({ nombre, episodio, Url }) => {
  const router = useRouter();

  return (
    <div
      id={episodio}
      onClick={(e) => {
        e.preventDefault();
        router.push(Url);
      }}
      className="bg-blue-600 hover:bg-blue-600/80 font-semibold rounded-md cursor-pointer select-none lg:text-base md:text-base sm:text-[8px] lg:w-36 md:w-36 sm:w-32 lg:py-2 md:py-2 sm:py-1 lg:px-4 md:px-4 sm:px-2 text-white flex flex-row justify-center items-center m-2"
    >
      {nombre}
    </div>
  );
};

export default Boton;
