"use client";
import { useRef, useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdPlayArrow } from "react-icons/md";
import { IoMusicalNotes } from "react-icons/io5";

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
    <div className="flex px-4">
      <button
        className="bg-white hover:bg-white/80 text-black font-semibold px-4 py-2 mt-4 rounded-md flex flex-row justify-center items-center lg:text-base md:text-base sm:text-xs"
        onClick={() => {
          window.location.href = `/series/${Url}`;
        }}
      >
        <MdPlayArrow className="mr-1 lg:text-2xl md:text-2xl sm:text-xl" />{" "}
        Reproducir
      </button>
      <button className="bg-slate-800 hover:bg-white/20 text-white font-semibold px-4 py-2 mt-4 rounded-md ml-2 flex flex-row justify-center items-center lg:text-base md:text-base sm:text-xs">
        <BsInfoCircleFill className="mr-2 lg:text-xl md:text-xl sm:text-base" />{" "}
        Mi lista
      </button>
      {musica && (
        <div
          className="bg-blue-600 hover:bg-blue-600/80 text-white font-semibold px-4 py-2 mt-4 rounded-md flex flex-row justify-center items-center select-none cursor-pointer mx-2 lg:text-base md:text-base sm:text-xs"
          onClick={togglePlayPause}
        >
          <audio ref={audioRef} src="/music-lupin-iii.mp3" />
          <IoMusicalNotes className="mr-1 lg:text-2xl md:text-2xl sm:text-xl" />{" "}
          <span className="lg:flex md:flex sm:hidden">
            {isPlaying ? "Pausar" : "Escuchar música"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Botones;
