"use client";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { createContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [miLista, setMiLista] = useState([]);
  const toast = useToast();
  const router = useRouter();
  const [isAdded, setIsAdded] = useState(false);
  const { data: session, status } = useSession();

  const cargarLista = async (_id) => {
    try {
      const res = await fetch(`/api/milista`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setMiLista(data);
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
      const res = await fetch("/api/milista/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: e.target.id }),
      });
      cargarLista();
      if (res.ok) {
        const peliculaAgregada = await res.json();
        setMiLista([...miLista, peliculaAgregada]);
      }
      if (res.ok) {
        toast({
          title: "Se ha agregado a tu lista",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
      setIsAdded(true);
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
    const res = await fetch(`/api/milista/${e.target.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsAdded(false);
    cargarLista();
    if (res.ok) {
      toast({
        title: "Item eliminado",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }

    router.refresh();
  };

  return (
    <MoviesContext.Provider
      value={{
        miLista,
        handleAgregarMiLista,
        handleDeletePelicula,
        isAdded,
        setIsAdded,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
