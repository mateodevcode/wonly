import React from "react";

const BotonHora = ({ hora }) => {
  return (
    <div className="bg-[#ffee00] px-2.5 rounded-md font-semibold font-mono py-1 mt-2 text-black text-sm">
      {hora} min
    </div>
  );
};

export default BotonHora;