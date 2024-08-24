
const Boton = ({ nombre, cerrar }) => {

  return (
    <div
      className="bg-blue-600 hover:bg-blue-600/80 text-white font-semibold px-4 py-2 rounded-md flex flex-row justify-center items-center select-none cursor-pointer mx-2 lg:text-base md:text-base sm:text-sm"
      onClick={cerrar}
    >
      {nombre}
    </div>
  );
};

export default Boton;
