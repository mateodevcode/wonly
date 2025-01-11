"use client";

import Link from "next/link";
import { Github, Mail } from "lucide-react";
import Image from "next/image";
import { Icono } from "@/data/logo";
import { useSession } from "next-auth/react";
import { MoviesContext } from "@/context/MoviesContext";
import { useContext } from "react";


export default function NewFooter() {
    const { data: session } = useSession();
    const { Usuario } = useContext(MoviesContext);

  return (
    <footer className="bg-zinc-100 dark:text-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex justify-between items-center border-b border-gray-800 dark:border-zinc-400">
          <p className="text-sm">© {new Date().getFullYear()} Wonly</p>
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors focus:outline-none"
          >
            <Image src={Icono.src} alt="Expandir" width={50} height={50} className="w-10" />
          </Link>
        </div>
          <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Explorar</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/peliculas"
                    className="dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-gray-400 transition-colors"
                  >
                    Películas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/series"
                    className="dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-gray-400 transition-colors"
                  >
                    Series
                  </Link>
                </li>
                <li>
                  <Link
                    href="/generos"
                    className="dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-gray-400 transition-colors"
                  >
                    Géneros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/peticiones"
                    className="dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-gray-400 transition-colors"
                  >
                    Peticiones
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Mi Cuenta</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`/perfil/${Usuario?._id}`}
                    className="dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-gray-400 transition-colors"
                  >
                    Perfil
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-gray-400 transition-colors"
                  >
                    Suscripción
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-gray-400 transition-colors"
                  >
                    Ajustes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-gray-400 transition-colors"
                  >
                    Historial
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-gray-400 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-gray-400 transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terminos"
                    className="dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-gray-400 transition-colors"
                  >
                    Términos de uso
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacidad"
                    className="dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-gray-400 transition-colors"
                  >
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Conecta</h3>
              <div className="flex space-x-4">
                <a
                  href="mailto:mateodevcode@gmail.com"
                  className="dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-gray-400 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
              <p className="mt-4 text-sm dark:text-gray-400 text-gray-700">
                Suscríbete a nuestro newsletter para recibir las últimas
                noticias y ofertas exclusivas.
              </p>
              <form className="mt-2 xl:flex lg:hidden md:hidden sm:hidden smd:hidden">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-grow px-3 py-2 dark:bg-zinc-700 bg-zinc-200 text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l-md"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-r-md"
                >
                  Suscribir
                </button>
              </form>
            </div>
          </div>
      </div>
    </footer>
  );
}
