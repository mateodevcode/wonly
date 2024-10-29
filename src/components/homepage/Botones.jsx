"use client";
import { useRef, useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import MiLista from "../miLista/MiLista";

const Botones = ({ Url, musica }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-row justify-start items-center px-4">
      <button
        className="bg-white hover:bg-white/80 text-black font-semibold pr-4 pl-3 py-2 mt-4 rounded-md flex flex-row justify-center items-center lg:text-base md:text-base sm:text-xs mr-2"
        onClick={() => {
          window.location.href = `/series/${Url}`;
        }}
      >
        <MdPlayArrow className="mr-1 lg:text-2xl md:text-2xl sm:text-xl" />{" "}
        Reproducir
      </button>
      {/* <button className="bg-slate-800 hover:bg-white/20 text-white font-semibold px-4 py-2 mt-4 rounded-md ml-2 flex flex-row justify-center items-center lg:text-base md:text-base sm:text-xs">
        <BsInfoCircleFill className="mr-2 lg:text-xl md:text-xl sm:text-base" />{" "}
        Mi lista
      </button> */}
      <div className="mt-4">
      <MiLista menuResponsive={true} />
      </div>
    </div>
  );
};

export default Botones;
