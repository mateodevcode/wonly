import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import CardVideo from "./CardVideo";

const Videos = () => {
  return (
    <>
    <h1 className="text-white text-5xl font-semibold mt-10 mb-5 mx-28">Tendencias</h1>
    <div className="flex flex-row justify-center items-center w-full">
      <MdArrowBackIos className="text-white text-6xl hover:bg-white/10 pl-4"/>
      <CardVideo />
      <CardVideo />
      <CardVideo />
      <MdArrowForwardIos className="text-white text-6xl hover:bg-white/10 p-2" />
    </div>
    </>
  );
};

export default Videos;
