import { GoAlertFill } from "react-icons/go";

const BotonBloqueador = ({nombreBoton, abrir}) => {
  return (
    <div
      onClick={abrir}
      className="hover:bg-red-500 bg-red-500/50 text-white font-semibold px-4 py-2 rounded-md flex flex-row justify-center items-center lg:text-base md:text-base sm:text-sm mx-1 lg:flex md:flex sm:hidden select-none cursor-pointer"
    >
      <GoAlertFill className="mr-2 lg:text-xl md:text-xl sm:text-base" />{" "}
      {nombreBoton}
    </div>
  );
};

export default BotonBloqueador;
