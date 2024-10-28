"use client";
import { Input, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { signOut } from "next-auth/react";

const MiPerfil = () => {
  const router = useRouter();
  const toast = useToast();
  const params = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });
  const [initialFormData, setInitialFormData] = useState(null);

  useEffect(() => {
    const cargarUsuario = async () => {
      try {
        const res = await fetch(`/api/user/${params.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setFormData({
          name: data.name,
          email: data.email,
          password: data.password,
          image: data.image,
        });
        setInitialFormData({
          name: data.name,
          email: data.email,
          password: data.password,
          image: data.image,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Error al cargar el usuario",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    };
    cargarUsuario();
  }, []);

  const manejarCambio = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const actualizarUsuario = async (e) => {
    e.preventDefault();

    if (JSON.stringify(formData) === JSON.stringify(initialFormData)) {
      console.log("No se ha realizado ningún cambio"); // Verifica el flujo de ejecución
      toast({
        title: "Sin cambios.",
        description: "No se ha realizado ningún cambio.",
        status: "info",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return; // Terminar aquí si no ha habido cambios
    }
    try {
      const res = await fetch(`/api/user/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          image: formData.image,
        }),
      });
      if (res.ok) {
        toast({
          title: "Usuario actualizado.",
          description: "El usuario se ha actualizado correctamente.",
          status: "success",
          duration: 8000,
          isClosable: true,
          position: "top",
        });
        setTimeout(() => {
          location.reload();
        }, 700);
      }
    } catch (error) {
      toast({
        title: "Error.",
        description: "Ocurrió un error al crear el un usuario.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const eliminarUsuario = async () => {
    const confirmar = confirm("¿Estás seguro de eliminar tu cuenta?");
    if (!confirmar) return;
    try {
      const res = await fetch(`/api/user/${params.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        toast({
          title: "Usuario eliminado.",
          description: "El usuario se ha eliminado correctamente.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        await signOut({
            callbackUrl: "/",
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
    <div className="w-full h-screen place-content-center grid">
      <div className="absolute lg:top-10 md:top-10 sm:top-0 lg:left-10 md:left-10 sm:left-5">
        <button
          className="bg-black hover:bg-black/80 text-white py-2 px-4 rounded-lg"
          onClick={() => router.push("/")}
        >
          Volver
        </button>
      </div>
      {isEditing ? (
        <form
          onSubmit={actualizarUsuario}
          id={formData._id}
          action={`/api/user/${params._id}`}
          method="PUT"
          className="flex flex-col justify-start items-center w-[280px] h-full rounded-lg border-gray-300 border-[1px]"
        >
          <h3 className="text-2xl font-bold mt-7 mb-1">Perfil de Usuario</h3>
          <div className="w-full flex flex-row justify-center items-center">
            <Image
              src={
                formData.image ||
                "https://i.postimg.cc/QNq4MwGh/imagen-perfil.png"
              }
              alt={formData.name || "Avatar perfil"}
              width={150}
              height={150}
              className="w-24 h-24 rounded-full m-5"
            />
          </div>
          <div className="px-6 w-full text-sm">
            <label className="font-semibold">Nombre</label>
            <Input
              placeholder="Nombre"
              name="name"
              defaultValue={formData.name}
              fontSize={14}
              onChange={manejarCambio}
              className="mt-2 mb-3"
            />
            <label className="font-semibold">Correo electrónico</label>
            <Input
              placeholder="Correo electrónico"
              name="email"
              defaultValue={formData.email}
              fontSize={14}
              onChange={manejarCambio}
              readOnly={true}
              className="mt-2 mb-3 text-gray-500"
            />
            <label className="font-semibold">Contraseña</label>
            <Input
              placeholder="Contraseña"
              name="password"
              defaultValue={formData.password}
              onChange={manejarCambio}
              fontSize={14}
              className="mt-2 mb-3"
            />
            <label className="font-semibold">URL de la imagen</label>
            <Input
              placeholder="Contraseña"
              name="image"
              defaultValue={formData.image}
              onChange={manejarCambio}
              fontSize={14}
              className="mt-2"
            />
          </div>

          <div className="w-full flex flex-row justify-end items-center px-6">
            <button
              className="text-black border-gray-300 hover:bg-gray-200 border-[1px] py-2 px-4 rounded-md my-5 mr-1"
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(!isEditing);
              }}
            >
              Cancelar
            </button>
            <button className="bg-black hover:bg-black/80 text-white py-2 px-4 rounded-md my-5 ml-1">
              Guardar
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col justify-start items-center lg:w-[450px] md:w-[450px] sm:w-full h-full rounded-lg border-gray-300 border-[1px]">
          <h3 className="text-2xl font-bold mt-7 mb-1">Perfil de Usuario</h3>
          <div className="w-full flex flex-row justify-center items-center">
            <Image
              src={
                formData.image ||
                "https://i.postimg.cc/QNq4MwGh/imagen-perfil.png"
              }
              alt={formData.name || "Avatar perfil"}
              width={150}
              height={150}
              className="w-24 h-24 rounded-full m-5"
            />
          </div>
          <div className="px-6 w-full">
            <p className="my2">
              <span className="font-bold">Nombre: </span>
              {formData.name}
            </p>
            <p className="my-2">
              <span className="font-bold">Correo electrónico: </span>
              {formData.email}
            </p>
            <p className="my-2">
              <span className="font-bold">Contraseña: </span>
              {formData.password === ""
                ? "Agrega una contraseña"
                : formData.password}
            </p>
          </div>
          <div className="w-full flex flex-row justify-end items-center px-6">
            <button
              className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-lg my-5 mr-1"
              onClick={eliminarUsuario}
            >
              Eliminar
            </button>
            <button
              className="bg-black hover:bg-black/80 text-white py-2 px-4 rounded-lg my-5 ml-1"
              onClick={() => setIsEditing(!isEditing)}
            >
              Editar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiPerfil;
