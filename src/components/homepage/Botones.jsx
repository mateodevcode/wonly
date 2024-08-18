"use client";
import React, { useRef, useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdPlayArrow } from "react-icons/md";
import { IoMusicalNotes } from "react-icons/io5";

const Botones = ({ Url }) => {
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
        className="bg-white hover:bg-white/80 text-black font-semibold px-4 py-2 mt-4 rounded-md flex flex-row justify-center items-center"
        onClick={() => {
          window.location.href = `/series/${Url}`;
        }}
      >
        <MdPlayArrow className="mr-1 text-2xl" /> Reproducir
      </button>
      <button className="bg-slate-800 hover:bg-white/20 text-white font-semibold px-4 py-2 mt-4 rounded-md ml-2 flex flex-row justify-center items-center">
        <BsInfoCircleFill className="mr-2 text-xl" /> Mi lista
      </button>
      <div
        className="bg-blue-600 hover:bg-blue-600/80 text-white font-semibold px-4 py-2 mt-4 rounded-md flex flex-row justify-center items-center select-none cursor-pointer mx-2"
        onClick={togglePlayPause}
      >
        <audio ref={audioRef} src="/music-lupin-iii.mp3" />
        <IoMusicalNotes className="mr-1 text-2xl" />{" "}
        {isPlaying ? "Pausar" : "Escuchar música"}
      </div>
    </div>
  );
};

export default Botones;
