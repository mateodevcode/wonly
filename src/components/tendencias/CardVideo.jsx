import Image from "next/image";
import React from "react";
import img_cap01 from "/public/temp01/cap01.jpg";

const CardVideo = () => {
  return (
    <div className="bg-black/90 w-[390px] h-64 flex flex-row justify-center items-center m-2 rounded-lg hover:scale-105 cursor-pointer">
      <Image
        src={img_cap01}
        alt="cap01"
        className="w-[390px] h-64 rounded-md opacity-80 hover:opacity-100"
        width={390}
        height={64}
      />
    </div>
  );
};

export default CardVideo;
