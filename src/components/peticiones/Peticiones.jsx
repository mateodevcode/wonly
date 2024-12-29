"use client";
import { Tooltip, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SpinnerGlobal from "../spinner/SpinnerGlobal";
import { useSession } from "next-auth/react";
import { IoIosAdd } from "react-icons/io";
import { convertirFecha } from "@/config/convertirFecha";
import { CiCalendar } from "react-icons/ci";
import { TbClockHour4 } from "react-icons/tb";
import { RiDeleteBin6Line, RiDeleteBinLine } from "react-icons/ri";
import AgregarContenido from "../agregarPeliculas/AgregarContenido";

const Peticiones = () => {
  const [peticiones, setPeticiones] = useState([]);
  const toast = useToast();
  const router = useRouter();
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  const cargarPeticiones = async () => {
    const res = await fetch("/api/peticiones");
    const data = await res.json();
    setPeticiones(data);
  };
  const { data: session, status } = useSession();

  useEffect(() => {
    cargarPeticiones();
  }, []);

  const eliminarPeticion = async (id) => {
    const confirmar = confirm("¿Estás seguro de eliminar esta peticion?");
    if (!confirmar) return;
    try {
      const res = await fetch(`/api/peticiones/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        toast({
          title: "Peticion eliminada.",
          description: "La peticion se ha eliminado correctamente.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
      cargarPeticiones();
    } catch (error) {
      toast({
        title: "Error.",
        description: "Ocurrió un error al eliminar el usuario.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <div className="pt-20 pb-10 bg-black flex flex-col justify-start items-center w-full">
      <div className="xl:w-6/12 lg:w-10/12 smd:w-9/12 sm:w-11/12 bg-black rounded-md border-gray-700 border-[1px] lg:p-5 md:p-5 sm:p-3">
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <h1 className="text-white lg:text-2xl md:text-2xl sm:text-base font-semibold">
              Lista de peticiones pendientes
            </h1>
            <p className="my-2 lg:text-base md:text-base sm:text-xs text-gray-500">
              Solicitudes de nuevos contenidos
            </p>
          </div>

          <AgregarContenido />
        </div>
        <div className="w-full flex flex-row justify-center items-start">
          <div className="w-full flex flex-col justify-center items-center">
            {peticiones.length <= 0 ? (
              <div>
                {" "}
                <SpinnerGlobal />
              </div>
            ) : (
              <>
                {peticiones.map((peticion, index) => (
                  <div
                    key={index}
                    className="flex flex-row justify-between items-center w-full lg:p-4 md:p-4 sm:p-2 rounded-lg text-white border-gray-700 border-[1px] my-1 bg-zinc-900"
                  >
                    <div className="flex flex-col justify-center items-start">
                      <div className="flex flex-row justify-center items-center">
                        <h2 className="lg:text-base md:text-base sm:text-xs font-semibold">
                          {peticion.nombre}
                        </h2>
                        <div className="border-[1px] border-red-600 rounded-full lg:text-[10px] md:text-[10px] sm:text-[7px] text-red-500 lg:mx-4 md:mx-4 sm:mx-2 px-1.5 py-0.2">
                          Alta
                        </div>
                        <div className="text-black bg-white rounded-full lg:text-[10px] md:text-[10px] sm:text-[7px] px-1.5 py-0.2">
                          {peticion?.tipo}
                        </div>
                      </div>

                      <div className="flex flex-row justify-center items-center my-2">
                        <div className="flex flex-row justify-center items-center lg:text-xs md:text-xs sm:text-[7px] text-gray-400 font-semibold">
                          <CiCalendar className="mr-1 lg:text-lg md:text-lg sm:text-xs" />
                          {convertirFecha(peticion.createdAt)}
                        </div>

                        <div className="flex flex-row justify-center items-center lg:text-xs md:text-xs sm:text-[7px] text-gray-400 font-semibold mx-5">
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
                            className="border-[1px] border-blue-600 hover:bg-blue-600 rounded-lg p-1"
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
                            className="border-[1px] border-red-600 hover:bg-red-600 rounded-lg p-1"
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
