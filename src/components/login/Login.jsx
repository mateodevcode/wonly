"use client";
import { Button, Input, useToast } from "@chakra-ui/react";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { logo } from "@/data/logo";

const Login = () => {
  const router = useRouter();
  const toast = useToast();
  const url = usePathname();
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [intentosContrasena, setIntentosContrasena] = useState(0);

  useEffect(() => {
    const cargarUsuarios = async () => {
      const res = await fetch(`/api/user/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setUsers(data);
    };
    cargarUsuarios();
  }, []);

  const user = users.find((user) => user.email === formData.email);
  const password = users.find((user) => user.password === formData.password);

  const manejarCambio = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (intentosContrasena >= 3) {
      const res = fetch(`/api/user/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bloqueado: true }),
      });
      if (res.error) {
        toast({
          title: "Error",
          description: "Usuario bloqueado",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    }
  }, [intentosContrasena, toast, user?._id]);

  const signImEmail = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast({
        title: "campos vacios",
        description: "Por favor, rellena todos los campos",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    if (!user) {
      toast({
        title: "Error",
        description: "Usuario no registrado",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    if (user?.bloqueado) {
      toast({
        title: "Usuario bloqueado",
        description: "Por favor, contacta con el administrador",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    if (!password) {
      if (intentosContrasena < 3) {
        toast({
          title: "Error",
          description: "Contraseña incorrecta",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        setIntentosContrasena(intentosContrasena + 1);
        return;
      }
      if (intentosContrasena >= 3) {
        toast({
          title: "Usuario bloqueado",
          description: "Intentos de contraseña excedidos",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        return;
      }
    }

    try {
      const res = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (res.error) {
        toast({
          title: "Error",
          description: "Correo o contraseña incorrectos",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      } else {
        router.push("/");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Correo o contraseña incorrectos",
        status: "error",
        duration: 3000,
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
        onSubmit={signImEmail}
        action={`/api/user/`}
        method="GET"
        className="flex flex-col justify-start items-center w-[320px] h-full rounded-lg border-gray-300 border-[1px]"
      >
        <Link href="/" className="w-40 my-5">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </Link>
        <p className="text-gray-500 text-sm mb-4">
          Inicia sesión o crea una cuenta
        </p>
        <div className="flex flex-row justify-center items-center bg-zinc-100 p-1 rounded-md font-semibold text-xs mt-2 mb-5">
          <p
            onClick={() => router.push("/login")}
            className={`py-1.5 px-3 mr-1 rounded-sm select-none cursor-pointer ${
              url === "/login"
                ? "bg-white text-zinc-800"
                : "bg-zinc-100 text-zinc-800"
            }`}
          >
            Iniciar Sesión
          </p>
          <p
            onClick={() => router.push("/register")}
            className={`py-1.5 px-3 mr-1 rounded-sm select-none cursor-pointer ${
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
            placeholder="Correo electrónico"
            name="email"
            defaultValue={formData.email}
            fontSize={14}
            onChange={manejarCambio}
            className="my-2 text-black"
          />
          <Input
            placeholder="Contraseña"
            name="password"
            defaultValue={formData.password}
            onChange={manejarCambio}
            fontSize={14}
            className="my-2 text-black"
          />
        </div>

        <div className="w-full flex flex-col justify-end items-center px-6 pb-5">
          <button className="bg-black hover:bg-black/80 text-white py-2 px-4 rounded-md w-full my-1 text-sm">
            Iniciar Sesión
          </button>
          <button
            className="text-black border-gray-300 hover:bg-gray-200 border-[1px] py-2 px-4 rounded-md w-full my-1 flex fle-row justify-center items-center text-sm font-semibold"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              signIn("google", {
                callbackUrl: "/",
              });
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
