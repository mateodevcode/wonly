"use client";
import {
  Button,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";

const OverlayOne = () => (
  <ModalOverlay
    bg="blackAlpha.300"
    backdropFilter="blur(10px) hue-rotate(90deg)"
  />
  //   <ModalOverlay
  //     bg="none"
  //     backdropFilter="auto"
  //     backdropInvert="80%"
  //     backdropBlur="2px"
  //   />
);

const AgregarPeliculas = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

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
          className="fixed z-50 bg-green-600 p-2 lg:right-5 md:right-5 sm:right-0 top-64 rounded-lg shadow-sm shadow-white cursor-pointer hover:scale-[105%]"
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
                <strong>¡Nos encantaría saber tu sugerencia!</strong> Por favor, completa los siguientes campos, y haremos nuestro mejor esfuerzo para añadirla a nuestra base de datos.
                </p>
                <p className="text-xs italic font-semibold">
                Indica el título que deseas agregar a nuestro catálogo.
                </p>
                <InputGroup className="flex flex-row justify-center items-center">
                  <Input
                    type="text"
                    placeholder="Nombre de la película o serie"
                    className="w-full bg-gray-200 px-4 py-2 rounded-md text-black"
                  />
                </InputGroup>
                <p className="text-xs italic font-semibold">
                Te notificaremos tan pronto como la película o serie esté disponible.
                </p>
                <InputGroup className="flex flex-row justify-center items-center">
                  <Input
                    type="text"
                    placeholder="Tu correo electrónico"
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
                    onClick={onClose}
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
