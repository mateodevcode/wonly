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
import { RiAddCircleLine } from "react-icons/ri";
import Formulario from "./Formulario";
import { IoIosAdd } from "react-icons/io";
import FormAgregarContenido from "./FormAgregarContenido";

const OverlayOne = () => (
  <ModalOverlay
    bg="blackAlpha.300"
    backdropFilter="blur(10px) hue-rotate(90deg)"
  />
);

const AgregarContenido = () => {
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
      <button
        className="font-semibold lg:px-4 md:px-4 sm:px-2 lg:py-2 md:py-2 sm:py-1 rounded-md flex flex-row justify-center items-center select-none cursor-pointer text-sm bg-white hover:bg-white/80 text-black"
        onClick={() => onOpen()}
      >
        <IoIosAdd className="lg:mr-2 md:mr-2 sm:mr-1 text-base" /> <span className="lg:text-xs md:text-xs sm:text-[8px]">Nueva Peticion</span>
      </button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent className="w-full flex flex-row justify-center items-center">
            <FormAgregarContenido
              setNombre={setNombre}
              setEmail={setEmail}
              onClose={onClose}
              handlePeticiones={handlePeticiones}
                tipo={tipo}
                setTipo={setTipo}
            />
        </ModalContent>
      </Modal>
    </>
  );
};

export default AgregarContenido;
