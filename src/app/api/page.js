import Api from "@/components/apipage/Api";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full bg-black text-white flex flex-row justify-center items-start">
      <Api />
    </div>
  );
};

export default page;
