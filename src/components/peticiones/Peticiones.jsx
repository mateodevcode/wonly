"use client";
import { Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import SpinnerGlobal from "../spinner/SpinnerGlobal";
import { useSession } from "next-auth/react";
import { IoIosAdd } from "react-icons/io";
import { convertirFecha } from "@/config/convertirFecha";
import { CiCalendar } from "react-icons/ci";
import { TbClockHour4 } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import AgregarContenido from "../agregarPeliculas/AgregarContenido";
import { MoviesContext } from "@/context/MoviesContext";
import { useContext } from "react";

const Peticiones = () => {
  const router = useRouter();
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  const { eliminarPeticion, peticiones } = useContext(MoviesContext);
  const { data: session } = useSession();

  return (
    <div className="pt-20 pb-10 dark:bg-black flex flex-col justify-start items-center w-full">
      <div className="xl:w-6/12 lg:w-10/12 smd:w-9/12 sm:w-11/12 dark:bg-black rounded-md border-gray-700 border-[1px] lg:p-5 md:p-5 sm:p-3">
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <h1 className="dark:text-white lg:text-2xl md:text-2xl sm:text-base font-semibold">
              Lista de peticiones pendientes
            </h1>
            <p className="my-2 lg:text-base md:text-base sm:text-xs dark:text-gray-500 text-gray-700">
              Solicitudes de nuevos contenidos
            </p>
          </div>

          <AgregarContenido />
        </div>
        <div className="w-full flex flex-row justify-center items-start">
          <div className="w-full flex flex-col justify-center items-center">
            {peticiones.length <= 0 ? (
              <div className="my-40">
                <SpinnerGlobal />
              </div>
            ) : (
              <>
                {peticiones.map((peticion, index) => (
                  <div
                    key={index}
                    className="flex flex-row justify-between items-center w-full lg:p-4 md:p-4 sm:p-2 rounded-lg text-white border-gray-700 border-[1px] my-1 dark:bg-zinc-900"
                  >
                    <div className="flex flex-col justify-center items-start">
                      <div className="flex flex-row justify-center items-center">
                        <h2 className="lg:text-base md:text-base sm:text-xs font-semibold dark:text-white text-black">
                          {peticion.nombre}
                        </h2>
                        <div className="border-[1px] border-red-600 rounded-full lg:text-[10px] md:text-[10px] sm:text-[7px] text-red-500 lg:mx-4 md:mx-4 sm:mx-2 px-1.5 py-0.2">
                          Alta
                        </div>
                        <div className="dark:text-black dark:bg-white bg-black text-white rounded-full lg:text-[10px] md:text-[10px] sm:text-[7px] px-1.5 py-0.2">
                          {peticion?.tipo}
                        </div>
                      </div>

                      <div className="flex flex-row justify-center items-center my-2">
                        <div className="flex flex-row justify-center items-center lg:text-xs md:text-xs sm:text-[7px] dark:text-gray-400 text-gray-700 font-semibold">
                          <CiCalendar className="mr-1 lg:text-lg md:text-lg sm:text-xs" />
                          {convertirFecha(peticion.createdAt)}
                        </div>

                        <div className="flex flex-row justify-center items-center lg:text-xs md:text-xs sm:text-[7px] dark:text-gray-400 text-gray-700 font-semibold mx-5">
                          <TbClockHour4 className="mr-1 lg:text-lg md:text-lg sm:text-xs" />{" "}
                          Pendiente
                        </div>
                      </div>
                    </div>

                    {session && session.user.email === adminEmail ? (
                      <div className="grid grid-cols-2 lg:gap-2 md:gap-2 sm:gap-1">
                        <Tooltip
                          label={"Subir contenido"}
                          fontSize="small"
                          bg="black"
                          color="white"
                          rounded={5}
                          paddingBottom={1}
                        >
                          <button
                            className="border-[1px] border-blue-600 hover:bg-blue-600 rounded-lg p-1 hover:text-white text-black dark:text-white"
                            onClick={() => {
                              router.push(`/peticiones/${peticion._id}`);
                            }}
                          >
                            <IoIosAdd className="text-base" />
                          </button>
                        </Tooltip>
                        <Tooltip
                          label={"Eliminar peticion"}
                          fontSize="small"
                          bg="black"
                          color="white"
                          rounded={5}
                          paddingBottom={1}
                        >
                          <button
                            className="border-[1px] border-red-600 hover:bg-red-600 hover:text-white text-black dark:text-white rounded-lg p-1"
                            onClick={() => eliminarPeticion(peticion._id)}
                          >
                            <RiDeleteBin6Line className="text-base" />
                          </button>
                        </Tooltip>
                      </div>
                    ) : null}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peticiones;
