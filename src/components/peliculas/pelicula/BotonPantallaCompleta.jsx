import { LuScreenShare } from "react-icons/lu";

const BotonPantallaCompleta = () => {
  return (
    <div
      className="text-xl text-white cursor-pointer bg-blue-600/20 hover:bg-green-600/20 sm:w-full lg:w-[750px] md:w-[750px] text-center select-none py-3 flex flex-row justify-center items-center font-semibold"
      onClick={() => {
        document.getElementById("videoplayer").requestFullscreen();
      }}
    >
     <LuScreenShare className="mx-4" /> Ver en pantalla completa 
    </div>
  );
};

export default BotonPantallaCompleta;
