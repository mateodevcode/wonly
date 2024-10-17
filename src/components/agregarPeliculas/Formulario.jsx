"use client"
import { Input, InputGroup } from "@chakra-ui/react";

const Formulario = ({setNombre, setEmail, onClose, handlePeticiones}) => {
  return (
    <div className="w-[450px] bg-gray-100 h-96 lg:mt-40 md:mt-40 sm:mt-28 rounded-lg">
      <div className="flex flex-col justify-between items-start h-full px-10 pt-10 pb-5">
        <p className="text-xl font-bold text-black">
          Te gustaria agregar una pelicula?
        </p>
        <p className="text-sm my-2">
          <strong>¡Nos encantaría saber tu sugerencia!</strong> Por favor,
          completa los siguientes campos, y haremos nuestro mejor esfuerzo para
          añadirla a nuestra base de datos.
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
          Te notificaremos tan pronto como la película o serie esté disponible.
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
  );
};

export default Formulario;
