import { convertirMinutos } from "@/config/convertirMinutos";

const BotonHora = ({ hora }) => {
  return (
    <div className="bg-[#ffee00] px-2 rounded-full py-0.1 text-black text-[12px]">
      {convertirMinutos(hora)} min
    </div>
  );
};

export default BotonHora;
