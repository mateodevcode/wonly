"use client";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SpinnerGlobal from "../spinner/SpinnerGlobal";
import { useSession } from "next-auth/react";

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
  }, [peticiones]);

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
    <div className="pt-20 bg-black flex flex-col justify-start items-center w-full">
      <h1 className="text-white text-center lg:text-4xl md:text-4xl sm:text-2xl font-bold">
        Lista de peticiones pendiente
      </h1>
      <div className="w-full min-h-dvh flex flex-row justify-center items-start">
        <div className="mt-8 w-10/12 flex flex-col justify-center items-center">
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
                  className="flex flex-row justify-between items-center w-full lg:p-4 md:p-4 sm:p-2 rounded-lg text-white border-gray-400 border-2 my-1"
                >
                  <h2 className="lg:text-lg md:text-lg sm:text-sm font-bold">{peticion.nombre}</h2>

                  {session && session.user.email === adminEmail ? (
                    <div className="grid grid-cols-2 lg:gap-2 md:gap-2 sm:gap-0">
                      <button
                        className="font-semibold lg:px-4 md:px-4 sm:px-3 lg:py-2 md:py-2 sm:py-1.5 sm:text-xs rounded-md flex flex-row justify-center items-center select-none cursor-pointer mx-1 lg:text-sm md:text-sm  bg-blue-600 hover:bg-blue-600/80"
                        onClick={() => {
                          router.push(`/peticiones/${peticion._id}`);
                        }}
                      >
                        Agregar
                      </button>
                      <button
                        className="font-semibold lg:px-4 md:px-4 sm:px-3 lg:py-2 md:py-2 sm:py-1.5 rounded-md flex flex-row justify-center items-center select-none cursor-pointer mx-1 lg:text-sm md:text-sm sm:text-xs bg-red-600 hover:bg-red-600/80"
                        onClick={() => eliminarPeticion(peticion._id)}
                      >
                        Eliminar
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
  );
};

export default Peticiones;
