const BotonStandar = ({ nombre, cerrar, color }) => {
  switch (color) {
    case "azul":
      color = "bg-blue-600 hover:bg-blue-600/80";
      break;

    case "rojo":
      color = "bg-red-600 hover:bg-red-600/80 text-white";
      break;

    case "verde":
      color = "bg-green-600 hover:bg-green-600/80 text-white";
      break;

    case "blanco":
      color = "bg-white hover:bg-white/80 text-black text-black";
      break;
    default:
      break;
  }

  return (
    <div
      className={`font-semibold px-4 py-2 rounded-md flex flex-row justify-center items-center select-none cursor-pointer mx-2 lg:text-sm md:text-sm sm:text-sm ${color}`}
      onClick={cerrar}
    >
      {nombre}
    </div>
  );
};

export default BotonStandar;
