"use client";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Boton from "./Boton";
import DatosModal from "./DatosModal";
import { bloqueador } from "@/data/bloqueadorAnuncios";
import BotonBloqueador from "./BotonBloqueador";

const BloquearAnuncios = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <BotonBloqueador nombreBoton={bloqueador.nombreBoton} abrir={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={bloqueador.estilosBloqueador}>
          <ModalHeader style={bloqueador.estilosHeader}>
            {bloqueador.title}
            <br />
            {bloqueador.subtitle}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody style={bloqueador.estilosBody}>
            <DatosModal />
          </ModalBody>

          <ModalFooter>
            <Boton nombre="Cerrar" cerrar={onClose} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BloquearAnuncios;
