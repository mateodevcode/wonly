import { convertirHora } from "@/config/convertirHora";
import { convertirMinutos } from "@/config/convertirMinutos";

const BotonHora = ({ hora }) => {
  return (
    <div className="bg-[#ffee00] px-2.5 rounded-md font-semibold font-mono py-1 mt-2 text-black lg:text-sm md:text-sm sm:text-xs">
      {convertirMinutos(hora)} min
    </div>
  );
};

export default BotonHora;
