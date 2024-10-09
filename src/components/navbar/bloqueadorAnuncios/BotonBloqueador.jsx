import { GoAlertFill } from "react-icons/go";

const BotonBloqueador = ({nombreBoton, abrir, menuResponsive}) => {
  return (
    <div
      onClick={abrir}
      className={`hover:bg-blue-500 bg-blue-600 text-white font-semibold lg:px-4 md:px-4 sm:px-2 lg:py-2 md:py-2 sm:py-1 rounded-md flex flex-row justify-center items-center lg:text-base md:text-base sm:text-sm mx-1 select-none cursor-pointer h-auto `}
    >
      <GoAlertFill className="lg:text-xl md:text-xl sm:text-lg" />{" "}
      <p className={`lg:flex md:hidden mx-2 text-base ${menuResponsive ? "sm:flex" : "sm:hidden"}`}>{nombreBoton}</p>
    </div>
  );
};

export default BotonBloqueador;
