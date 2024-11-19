"use client";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SpinnerGlobal from "../spinner/SpinnerGlobal";
import { useSession } from "next-auth/react";
import { IoIosAdd } from "react-icons/io";
import { convertirFecha } from "@/config/convertirFecha";
import { CiCalendar } from "react-icons/ci";
import { TbClockHour4 } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
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
      <div className="w-7/12 bg-zinc-900 rounded-md border-gray-700 border-[1px] p-5">
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <h1 className="text-white lg:text-2xl md:text-2xl sm:text-2xl font-semibold">
              Lista de peticiones pendientes
            </h1>
            <p className="my-2 text-lg text-gray-500">
              Solicitudes de nuevos contenidos
            </p>
          </div>

          <AgregarContenido />
        </div>
        <div className="w-full min-h-dvh flex flex-row justify-center items-start">
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
                    className="flex flex-row justify-between items-center w-full lg:p-4 md:p-4 sm:p-2 rounded-lg text-white border-gray-700 border-[1px] my-1 bg-zinc-800"
                  >
                    <div className="flex flex-col justify-center items-start">
                      <div className="flex flex-row justify-center items-center">
                        <h2 className="lg:text-xl md:text-xl sm:text-sm font-semibold">
                          {peticion.nombre}
                        </h2>
                        <div className="border-[1px] border-red-600 rounded-full text-xs text-red-500 mx-4 px-3 py-1 font-semibold">
                          Alta
                        </div>
                        <div className="text-black bg-white rounded-full px-3 py-1 text-xs font-semibold">
                          {peticion?.tipo}
                        </div>
                      </div>

                      <div className="flex flex-row justify-center items-center my-2">
                        <div className="flex flex-row justify-center items-center text-sm text-gray-400 font-semibold">
                          <CiCalendar className="mr-1 text-xl" />
                          {convertirFecha(peticion.createdAt)}
                        </div>

                        <div className="flex flex-row justify-center items-center text-sm text-gray-400 font-semibold mx-5">
                          <TbClockHour4 className="mr-1 text-xl" /> Pendiente
                        </div>
                      </div>
                    </div>

                    {session && session.user.email === adminEmail ? (
                      <div className="grid grid-cols-2 lg:gap-2 md:gap-2 sm:gap-0">
                        <button
                          className="font-semibold lg:px-4 md:px-4 sm:px-3 lg:py-2 md:py-2 sm:py-1.5 sm:text-xs rounded-md flex flex-row justify-center items-center select-none cursor-pointer mx-1 lg:text-sm md:text-sm  bg-white hover:bg-white/80 text-black"
                          onClick={() => {
                            router.push(`/peticiones/${peticion._id}`);
                          }}
                        >
                          <IoIosAdd className="mr-2 text-2xl" /> Agregar
                        </button>
                        <button
                          className="font-semibold lg:px-4 md:px-4 sm:px-3 lg:py-2 md:py-2 sm:py-1.5 rounded-md flex flex-row justify-center items-center select-none cursor-pointer mx-1 lg:text-sm md:text-sm sm:text-xs bg-red-500 hover:bg-red-600/80"
                          onClick={() => eliminarPeticion(peticion._id)}
                        >
                         <RiDeleteBinLine className="mr-2 text-2xl" />  Eliminar
                        </button>
                      </div>
                    ) : null}
                  </div>
                ))}{" "}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peticiones;
