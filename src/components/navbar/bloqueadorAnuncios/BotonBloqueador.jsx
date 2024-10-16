import { SiAdblockplus } from "react-icons/si";

const BotonBloqueador = ({ abrir }) => {
  return (
    <div onClick={abrir} className="mx-2 select-none cursor-pointer">
      <SiAdblockplus className="lg:text-3xl md:text-3xl sm:text-2xl text-red-600 hover:text-red-500" />
    </div>
  );
};

export default BotonBloqueador;
