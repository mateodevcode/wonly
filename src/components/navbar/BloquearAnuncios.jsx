"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoAlertFill } from "react-icons/go";

const BloquearAnuncios = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button
        onClick={onOpen}
        className="hover:bg-red-500 bg-red-500/50 text-white font-semibold px-4 py-2 rounded-md flex flex-row justify-center items-center lg:text-base md:text-base sm:text-sm mx-1 lg:flex md:flex sm:hidden"
      >
        <GoAlertFill className="mr-2 lg:text-xl md:text-xl sm:text-base" />{" "}
        Bloquear Anuncios
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          style={{
            backgroundColor: "rgb(22, 163, 74, 0.69)",
            color: "white",
          }}
        >
          <ModalHeader
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              marginLeft: "1px",
              marginRight: "1px",
            }}
          >
            🚀 Mejora tu Experiencia - Instala un Bloqueador de Anuncios 🚫
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{
            marginLeft: "5px",
            marginRight: "5px",
          }}>
            <div>
              <p className="text-lg">
                ✨ Los anuncios pueden ser molestos, pero son la razón por la
                que podemos ofrecer contenido gratuito. 🎥
              </p>
              <br />
              <p className="text-lg">
                💡 Aun así, te recomendamos instalar un bloqueador de anuncios
                para mejorar tu experiencia. 🔒
              </p>
              <Link
                href={"https://adblockplus.org/es/"}
                target="_blank"
                className="flex flex-row justify-center items-center text-xl select-none"
              >
                <Image
                  src="/adblock.png"
                  alt="adblockplus"
                  width={200}
                  height={200}
                  className="w-40"
                />{" "}
                Instalar Adblock Plus
              </Link>
            </div>
          </ModalBody>

          <ModalFooter>
            <div
              className="bg-blue-600 hover:bg-blue-600/80 text-white font-semibold px-4 py-2 rounded-md flex flex-row justify-center items-center select-none cursor-pointer mx-2 lg:text-base md:text-base sm:text-sm"
              onClick={onClose}
            >
              Cerrar
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BloquearAnuncios;
