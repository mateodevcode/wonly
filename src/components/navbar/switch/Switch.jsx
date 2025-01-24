import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useContext } from "react";
import { MoviesContext } from "@/context/MoviesContext";
import { Tooltip } from "@chakra-ui/react";

const SwitchMode = () => {
  const { darkMode, handleDarkMode } = useContext(MoviesContext);

  return (
    <Tooltip
      label={darkMode ? "Modo oscuro" : "Modo claro"}
      fontSize="small"
      bg="black"
      color="white"
      rounded={5}
      paddingBottom={1}
    >
      <div
        className="flex flex-row justify-center items-center dark:bg-white/10 dark:hover:bg-white/20 bg-black/10 hover:bg-black/20 dark:text-white rounded-md p-1 cursor-pointer select-none"
        onClick={() => handleDarkMode()}
      >
        {darkMode ? <BsMoon className="m-1" /> : <BsSun className="m-1" />}
      </div>
    </Tooltip>
  );
};

export default SwitchMode;
