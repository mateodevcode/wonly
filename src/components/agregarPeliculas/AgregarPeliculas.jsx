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
        body: JSON.stringify({ nombre, email }),
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
        label="Añadir contenido"
        fontSize="md"
        bg="white"
        color={"black"}
      >
        <div
          onClick={() => {
            onOpen();
          }}
          className="fixed z-50 bg-green-600 p-2 lg:right-5 md:right-5 sm:right-0 top-64 rounded-lg shadow-sm shadow-white cursor-pointer hover:scale-[105%] active:scale-95 transition-all duration-200"
        >
          <IoIosAdd className="text-white text-2xl" />
        </div>
      </Tooltip>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalBody className="grid place-content-center">
            <Formulario setNombre={setNombre} setEmail={setEmail} onClose={onClose} handlePeticiones={handlePeticiones} setTipo={setTipo} tipo={tipo} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AgregarPeliculas;
