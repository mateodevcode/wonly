import { MdPlayArrow } from "react-icons/md";
import MiLista from "../miLista/MiLista";

const Botones = ({ Url }) => {
  return (
    <div className="flex flex-row justify-start items-center px-4 mt-2">
      <button
        className="bg-white hover:bg-white/70 text-black font-semibold px-4 py-2 rounded-md flex flex-row justify-center items-center lg:text-sm md:text-sm sm:text-sm mx-1 lg:flex md:flex cursor-pointer select-none"
        onClick={() => {
          window.location.href = `/series/${Url}`;
        }}
      >
        <MdPlayArrow className="mr-1 lg:text-xl md:text-xl sm:text-xl" />{" "}
        Reproducir
      </button>
      <MiLista menuResponsive={true} isButton={true} />
    </div>
  );
};

export default Botones;
