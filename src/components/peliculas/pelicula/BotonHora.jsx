import { convertirMinutos } from "@/config/convertirMinutos";

const BotonHora = ({ hora }) => {
  return (
    <div className="bg-[#ffee00] px-2 rounded-full py-0.5 text-black xl:text-xs lg:text-xs md:text-xs smd:text-[8px] sm:text-[8px] flex flex-row justify-center items-center font-semibold">
      {convertirMinutos(hora)} min
    </div>
  );
};

export default BotonHora;
