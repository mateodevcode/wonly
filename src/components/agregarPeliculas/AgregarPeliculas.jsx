"use client";
import { validateEmail } from "@/config/validateEmail";
import {
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Tooltip,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";

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
  const [Peticiones, setPeticiones] = useState([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const cargarPeticiones = async () => {
      const res = await fetch("/api/peticiones");
      const data = await res.json();
      setPeticiones(data);
    };
    cargarPeticiones();
  }, []);

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
        label="Agregar pelicula"
        fontSize="medium"
        color={"white"}
        bg={"rebeccapurple"}
        px={10}
        py={5}
      >
        <div
          onClick={() => {
            onOpen();
          }}
          className="fixed z-50 bg-green-600 p-2 lg:right-5 md:right-5 sm:right-0 top-64 rounded-lg shadow-sm shadow-white cursor-pointer hover:scale-[105%] active:scale-95 transition-all duration-200"
        >
          <RiAddCircleLine className="text-white text-2xl" />
        </div>
      </Tooltip>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalBody className="grid place-content-center">
            <div className="w-[450px] bg-gray-100 h-96 lg:mt-40 md:mt-40 sm:mt-28 rounded-lg">
              <div className="flex flex-col justify-between items-start h-full px-10 pt-10 pb-5">
                <p className="text-xl font-bold text-black">
                  Te gustaria agregar una pelicula?
                </p>
                <p className="text-sm my-2">
                  <strong>¡Nos encantaría saber tu sugerencia!</strong> Por
                  favor, completa los siguientes campos, y haremos nuestro mejor
                  esfuerzo para añadirla a nuestra base de datos.
                </p>
                <p className="text-xs italic font-semibold">
                  Indica el título que deseas agregar a nuestro catálogo.
                </p>
                <InputGroup className="flex flex-row justify-center items-center">
                  <Input
                    type="text"
                    placeholder="Nombre de la película o serie"
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full bg-gray-200 px-4 py-2 rounded-md text-black"
                  />
                </InputGroup>
                <p className="text-xs italic font-semibold">
                  Te notificaremos tan pronto como la película o serie esté
                  disponible.
                </p>
                <InputGroup className="flex flex-row justify-center items-center">
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-gray-200 px-4 py-2 rounded-md text-black"
                  />
                </InputGroup>
                <div className="flex flex-row justify-end items-end w-full">
                  <div
                    className="bg-black text-white px-3 py-1 rounded-md cursor-pointer hover:bg-black/80 select-none mx-1"
                    onClick={onClose}
                  >
                    Cerrar
                  </div>
                  <div
                    className="bg-blue-600 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-blue-500 select-none mx-1"
                    onClick={handlePeticiones}
                  >
                    Enviar
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AgregarPeliculas;
