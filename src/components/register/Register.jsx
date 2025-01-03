"use client";
import { validateEmail } from "@/config/validateEmail";
import { validatePassword } from "@/config/validatePassword";
import { logo } from "@/data/logo";
import { Input, useToast } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const router = useRouter();
  const url = usePathname();
  const toast = useToast();
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const manejarCambio = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const crearUsuario = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !confirmarPassword
    ) {
      toast({
        title: "Error",
        description: "Por favor llena todos los campos",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Error",
        description: "Correo electrónico inválido",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    if (!validatePassword(formData.password)) {
      toast({
        title: "Error",
        description:
          "La contraseña debe tener al menos 8 caracteres, una letra y un número",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    if (formData.password !== confirmarPassword) {
      toast({
        title: "Error",
        description: "Las contraseñas no coinciden",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      const res = await fetch(`/api/user/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.error) {
        toast({
          title: "Error",
          description: data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      } else {
        toast({
          title: "Usuario Creado",
          description: "Usuario creado exitosamente, inicia sesión",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        router.push("/login");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Error al crear el usuario",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <div className="w-full h-screen place-content-center grid">
      <div className="absolute lg:top-10 md:top-10 sm:top-2 lg:left-10 md:left-10 sm:left-5 select-none">
      <button
          className="bg-black hover:bg-black/80 text-white py-1.5 px-3 rounded-lg text-sm"
          onClick={() => router.push("/")}
        >
          Volver
        </button>
      </div>
      <form
        onSubmit={crearUsuario}
        id={formData._id}
        action={`/api/user/`}
        method="POST"
        className="flex flex-col justify-start items-center w-[320px] h-full rounded-lg border-gray-300 border-[1px] text-black"
      >
          <Link href="/" className="w-40 my-5">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={150}
            height={150}
            className="w-full h-full object-cover"
          />
        </Link>
        <p className="text-gray-500 text-sm mb-4">
          Inicia sesión o crea una cuenta
        </p>
        <div className="flex flex-row justify-center items-center bg-zinc-100 p-1 rounded-md font-semibold text-xs mt-2 mb-5">
          <p
            onClick={() => router.push("/login")}
            className={`py-1.5 px-3 rounded-sm select-none cursor-pointer ${
              url === "/login"
                ? "bg-white text-zinc-800"
                : "bg-zinc-100 text-zinc-800"
            }`}
          >
            Iniciar Sesión
          </p>
          <p
            onClick={() => router.push("/register")}
            className={`py-1.5 px-3 rounded-sm select-none cursor-pointer ${
              url === "/register"
                ? "bg-white text-zinc-800"
                : "bg-zinc-100 text-zinc-800"
            }`}
          >
            Registrarse
          </p>
        </div>
        <div className="px-6 w-full text-sm">
          <Input
            placeholder="Tu nombre"
            name="name"
            defaultValue={formData.email}
            fontSize={14}
            onChange={manejarCambio}
            className="my-2 text-base"
          />
          <Input
            placeholder="wonly@gmail.com"
            name="email"
            defaultValue={formData.email}
            fontSize={14}
            onChange={manejarCambio}
            className="mt-2 mb-3 text-gray-500"
          />
          <Input
            placeholder="Contraseña"
            name="password"
            defaultValue={formData.password}
            onChange={manejarCambio}
            fontSize={14}
            className="mt-2 mb-3"
          />
          <Input
            placeholder="Repite tu contraseña"
            name="confirmarPassword"
            defaultValue={confirmarPassword}
            onChange={(e) => setConfirmarPassword(e.target.value)}
            fontSize={14}
            className="mt-2 mb-3"
          />
        </div>

        <div className="w-full flex flex-col justify-end items-center px-6 pb-5">
          <button className="bg-black hover:bg-black/80 text-white py-2 px-4 rounded-md w-full my-1 text-sm">
            Registrarse
          </button>
          <button className="text-black border-gray-300 hover:bg-gray-200 border-[1px] py-2 px-4 rounded-md w-full my-1 flex fle-row justify-center items-center text-sm font-semibold"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            signIn("google", {
              callbackUrl: "/",
            })
          }}
          >
            <FcGoogle className="mr-4" /> <span>Continuar con Google</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
