"use client";
import { useToast } from "@chakra-ui/react";
import React, { createContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [miLista, setMiLista] = useState([]);
  const toast = useToast();
  const [isAdded, setIsAdded] = useState(false);
  const { data: session, status } = useSession();
  const [listUser, setListUser] = useState([]);
  const [idUsuario, setIdUsuario] = useState("");
  const [User, setUser] = useState([]);

  const [peticiones, setPeticiones] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (document.body.classList.contains("dark")) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, []);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  };

  const cargarLista = async (_id) => {
    try {
      const res = await fetch(`/api/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setListUser(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Error al cargar la lista",
        status: "error",
        duration: 8000,
        isClosable: true,
        position: "top",
      });
    }
  };

  useEffect(() => {
    const cargarLista = async () => {
      const listaUsuario = await listUser.find(
        (lista) => lista.email === session?.user?.email
      );
      const lista = await listaUsuario?.lista;
      const IdUsuario = await listaUsuario?._id;
      setIdUsuario(IdUsuario);
      setMiLista(lista);
    };
    cargarLista();
  }, [session, listUser]);

  useEffect(() => {
    cargarLista();
  }, []);

  const handleAgregarMiLista = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (status !== "authenticated") {
      toast({
        title: "Inicia sesión",
        description: "Debes iniciar sesión para agregar a tu lista",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      const res = await fetch(`/api/user/${idUsuario}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lista: [...miLista, e.target.id] }),
      });
      cargarLista();
      if (res.ok) {
        const peliculaAgregada = await res.json();
        setMiLista([...miLista, peliculaAgregada]);
      }
      setIsAdded(true);
      if (res.ok) {
        toast({
          title: "Se ha agregado a tu lista",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Error al agregar a la lista",
        status: "error",
        duration: 8000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleDeletePelicula = async (e) => {
    e.stopPropagation();
    const res = await fetch(`/api/user/${idUsuario}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lista: miLista.filter((item) => item !== e.target.id),
      }),
    });
    cargarLista();
    setIsAdded(false);
    if (res.ok) {
      toast({
        title: "Item eliminado",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
        size: "md",
      });
    }
  };

  useEffect(() => {
    const cargarUsuario = async () => {
      try {
        const res = await fetch(`/api/user/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setUser(data);
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

  const Usuario = User.find((user) => user.email === session?.user?.email);

  // Manejar peticiones

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

  const cargarPeticiones = async () => {
    const res = await fetch("/api/peticiones");
    const data = await res.json();
    setPeticiones(data);
  };

  useEffect(() => {
    cargarPeticiones();
  }, []);

  // Manejar peticiones end

  return (
    <MoviesContext.Provider
      value={{
        miLista,
        handleAgregarMiLista,
        handleDeletePelicula,
        isAdded,
        setIsAdded,
        Usuario,
        User,
        eliminarPeticion,
        peticiones,
        darkMode,
        handleDarkMode,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
