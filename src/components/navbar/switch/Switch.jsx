import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useContext } from "react";
import { MoviesContext } from "@/context/MoviesContext";

const SwitchMode = () => {
  const { darkMode, handleDarkMode } = useContext(MoviesContext);

  return (
    <div
      className="flex flex-row justify-center items-center dark:bg-white/10 dark:hover:bg-white/20 bg-black/10 hover:bg-black/20 dark:text-white rounded-md p-1 cursor-pointer select-none"
      onClick={() => handleDarkMode()}
    >
      {darkMode ? <BsMoon className="m-1" /> : <BsSun className="m-1" />}
    </div>
  );
};

export default SwitchMode;
