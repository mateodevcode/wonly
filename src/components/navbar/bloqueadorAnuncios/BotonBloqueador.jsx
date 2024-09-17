import { GoAlertFill } from "react-icons/go";

const BotonBloqueador = ({nombreBoton, abrir, menuResponsive}) => {
  return (
    <div
      onClick={abrir}
      className={`hover:bg-red-500 bg-red-500/50 text-white font-semibold px-4 py-2 rounded-md flex flex-row justify-center items-center lg:text-base md:text-base sm:text-sm mx-1 select-none cursor-pointer h-auto `}
    >
      <GoAlertFill className="lg:text-xl md:text-xl sm:text-base" />{" "}
      <p className={`lg:flex md:hidden mx-2 text-base ${menuResponsive ? "sm:flex" : "sm:hidden"}`}>{nombreBoton}</p>
    </div>
  );
};

export default BotonBloqueador;
