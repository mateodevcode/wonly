"use client";
import { Input, InputGroup } from "@chakra-ui/react";
import { IoIosSend } from "react-icons/io";
import { TbDeviceTv, TbMovie } from "react-icons/tb";

const Formulario = ({ setNombre, setEmail, setTipo, onClose, handlePeticiones, tipo }) => {

  return (
    <div className="lg:w-[450px] md:w-[450px] smd:w-[450px] sm:w-[95%] bg-white/5 h-min lg:mt-24 md:mt-24 sm:mt-20 rounded-lg border-[1px] border-gray-600">
      <div className="flex flex-col justify-start items-start px-5 pt-5">
        <p className="text-2xl font-semibold text-white">
          ¿Te gustaría agregar nuevo contenido?
        </p>
        <p className="text-sm text-gray-300 my-2">
          <strong>¡Nos encantaría saber tu sugerencia!</strong> Por favor,
          completa los siguientes campos y haremos nuestro mejor esfuerzo para
          añadirla.
        </p>

        <div className="w-full mt-4 mb-4">
          <p className="text-sm text-white font-semibold">Tipo de contenido</p>
          <div className="flex flex-row justify-between items-center w-full text-black my-2">
            <button className={`flex flex-col justify-center items-center border-2 rounded-md py-2 px-5 mr-1 w-6/12 cursor-pointer select-none ${tipo === "pelicula" ? "border-blue-500 bg-blue-500/20" : "border-white"}`} id="pelicula" onClick={(e) => setTipo(e.target.id)
            }>
              <TbMovie className={`text-3xl ${tipo === "pelicula" ? "text-blue-500" : "text-white"}`} id="pelicula" />
              <p className={`text-lg select-none ${tipo === "pelicula" ? "text-blue-500" : "text-white"}`} id="pelicula">Película</p>
            </button>
            <button className={`flex flex-col justify-center items-center border-2 rounded-md py-2 px-5 mr-1 w-6/12 cursor-pointer select-none ${tipo === "serie" ? "border-blue-500 bg-blue-500/20" : "border-white"}`} id="serie" onClick={(e) => setTipo(e.target.id)
            }>
              <TbDeviceTv className={`text-3xl ${tipo === "serie" ? "text-blue-500" : "text-white"}`} id="serie" />
              <p className={`text-lg select-none ${tipo === "serie" ? "text-blue-500" : "text-white"}`} id="serie">Serie</p>
            </button>
          </div>
        </div>

        <div className="w-full">
        <InputGroup className="flex flex-row justify-center items-center">
          <Input
            type="text"
            placeholder={`Nombre de la ${tipo}`}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-4 py-2 rounded-md text-white text-sm border-[1px] border-gray-500 my-2 bg-white/5"
          />
        </InputGroup>
        </div>
        <div className="w-full">
        <InputGroup className="flex flex-row justify-center items-center">
          <Input
            type="email"
            placeholder="Tu correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md text-white text-sm border-[1px] border-gray-500 my-2 bg-white/5"
          />
        </InputGroup>
        </div>
        <div className="flex flex-row justify-between items-center w-full my-5">
          <div
            className="flex flex-row justify-center items-center bg-white text-black px-3 py-1.5 rounded-md cursor-pointer hover:bg-white/85 select-none mx-1"
            onClick={onClose}
          >
          Salir
          </div>
          <div
            className="flex flex-row justify-center items-center bg-blue-600 text-white px-3 py-1.5 rounded-md cursor-pointer hover:bg-blue-500 select-none mx-1"
            onClick={handlePeticiones}
          >
           <IoIosSend className="mr-2 text-base" /> Enviar petición
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
