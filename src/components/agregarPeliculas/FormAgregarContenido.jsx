"use client";
import { Input, InputGroup } from "@chakra-ui/react";
import { IoIosSend } from "react-icons/io";
import { TbDeviceTv, TbMovie } from "react-icons/tb";

const FormAgregarContenido = ({ setNombre, setEmail, setTipo, onClose, handlePeticiones, tipo }) => {

  return (
    <div className="w-[500px] bg-zinc-700 h-min rounded-lg border-[1px] border-gray-600">
      <div className="flex flex-col justify-start items-start px-5 pt-5">
        <p className="text-2xl font-semibold text-white">
          ¿Te gustaría agregar nuevo contenido?
        </p>
        <p className="text-sm text-gray-400 my-2">
          <strong>¡Nos encantaría saber tu sugerencia!</strong> Por favor,
          completa los siguientes campos y haremos nuestro mejor esfuerzo para
          añadirla.
        </p>

        <div className="w-full mt-4 mb-4">
          <p className="text-sm text-white font-semibold">Tipo de contenido</p>
          <div className="flex flex-row justify-between items-center w-full text-white my-2">
            <button className={`flex flex-col justify-center items-center border-2 rounded-md py-2 px-5 mr-1 w-6/12 cursor-pointer select-none ${tipo === "pelicula" ? "border-blue-500 bg-blue-500/20" : "border-gray-400"}`} id="pelicula" onClick={(e) => setTipo(e.target.id)
            }>
              <TbMovie className={`text-3xl ${tipo === "pelicula" ? "text-blue-500" : ""}`} id="pelicula" />
              <p className={`text-lg select-none ${tipo === "pelicula" ? "text-blue-500" : ""}`} id="pelicula">Película</p>
            </button>
            <button className={`flex flex-col justify-center items-center border-2 rounded-md py-2 px-5 mr-1 w-6/12 cursor-pointer select-none ${tipo === "serie" ? "border-blue-500 bg-blue-500/20" : "border-gray-400"}`} id="serie" onClick={(e) => setTipo(e.target.id)
            }>
              <TbDeviceTv className={`text-3xl ${tipo === "serie" ? "text-blue-500" : ""}`} id="serie" />
              <p className={`text-lg select-none ${tipo === "serie" ? "text-blue-500" : ""}`} id="serie">Serie</p>
            </button>
          </div>
        </div>

        <div className="w-full">
        <p className="text-sm text-white my-2 font-semibold">Titulo</p>
        <InputGroup className="flex flex-row justify-center items-center">
          <Input
            type="text"
            placeholder={`Nombre de la ${tipo}`}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full bg-zinc-600 px-4 py-2 rounded-md text-white text-sm border-[1px] border-gray-500"
          />
        </InputGroup>
        </div>
        <div className="w-full">
        <p className="text-sm text-white my-2 font-semibold">
          Correo electrónico
        </p>
        <InputGroup className="flex flex-row justify-center items-center">
          <Input
            type="email"
            placeholder="Tu correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-zinc-600 px-4 py-2 rounded-md text-white text-sm border-[1px] border-gray-500"
          />
        </InputGroup>
        </div>
        <div className="flex flex-row justify-between items-center w-full my-5">
          <div
            className="flex flex-row justify-center items-center bg-zinc-600 text-white px-3 py-1.5 rounded-md cursor-pointer hover:bg-zinc-700 select-none mx-1 border-[1px] border-gray-500"
            onClick={onClose}
          >
          Salir
          </div>
          <div
            className="flex flex-row justify-center items-center bg-blue-600 text-white px-3 py-1.5 rounded-md cursor-pointer hover:bg-blue-500 select-none mx-1"
            onClick={handlePeticiones}
          >
           <IoIosSend className="mr-2 text-2xl" /> Enviar petición
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAgregarContenido;
