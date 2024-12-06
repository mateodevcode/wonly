import { convertirHora } from "@/config/convertirHora";
import { convertirMinutos } from "@/config/convertirMinutos";

const BotonHora = ({ hora }) => {
  return (
    <div className="bg-[#ffee00] px-2.5 rounded-md font-semibold py-1 text-black lg:text-xs md:text-xs sm:text-xs">
      {convertirMinutos(hora)} min
    </div>
  );
};

export default BotonHora;
