import { tendencias } from "@/data/tendencias";
import Image from "next/image";

const CardVideo = () => {
  return (
    <>
      {tendencias.map((tendencia, index) => (
        <div key={index}>
          <Image
            src={tendencia.imagen_perfil}
            alt="imagen_perfil"
            width={400}
            height={400}
            className="w-80 h-60 rounded-md"
          />
        </div>
      ))}
    </>
  );
};

export default CardVideo;
