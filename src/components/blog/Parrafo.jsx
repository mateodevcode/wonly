import React from "react";

const Parrafo = ({texto}) => {
  return (
    <div className="lg:text-xl md:text-xl sm:text-base mt-5 leading-relaxed">
      {texto}
    </div>
  );
};

export default Parrafo;
