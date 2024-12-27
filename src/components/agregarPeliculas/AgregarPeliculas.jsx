"use client";
import { validateEmail } from "@/config/validateEmail";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Tooltip,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import Formulario from "./Formulario";
import { RiVideoAddLine } from "react-icons/ri";

const OverlayOne = () => (
  <ModalOverlay
    bg="blackAlpha.300"
    backdropFilter="blur(10px) hue-rotate(90deg)"
  />
);

const AgregarPeliculas = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("pelicula");

  const handlePeticiones = async (e) => {
    e.preventDefault();

    if (!nombre || !email) {
      toast({
        title: "Campos vacíos.",
        description: "Todos los campos son obligatorios.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Correo inválido.",
        description: "Por favor, ingrese un correo electrónico válido.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      const res = await fetch("/api/peticiones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email, tipo }),
      });

      if (res.ok) {
        toast({
          title: "Se ha creado la petición.",
          description: "La petición se ha creado correctamente.",
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
        description: "Ocurrió un error al crear la petición.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
  };

  return (
    <>
      <Tooltip
        label="Agregar Película"
        fontSize="small"
        bg="black"
        color="white"
        rounded={5}
        paddingBottom={1}
        px={5}
      >
        <span
          onClick={() => {
            onOpen();
          }}
          className="fixed z-50 bg-blue-600 hover:bg-blue-500 p-2 lg:right-5 md:right-5 sm:right-0 top-64 rounded-full cursor-pointer"
        >
          <RiVideoAddLine className="text-base text-white hover:text-xl transition-all ease-out duration-150" />
        </span>
      </Tooltip>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalBody className="flex flex-row justify-center items-center">
            <Formulario
              setNombre={setNombre}
              setEmail={setEmail}
              onClose={onClose}
              handlePeticiones={handlePeticiones}
              setTipo={setTipo}
              tipo={tipo}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AgregarPeliculas;
