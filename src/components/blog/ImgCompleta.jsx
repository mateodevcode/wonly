import Image from "next/image";

const ImgCompleta = ({ imagen, nombre }) => {
  return (
    <div className="mt-10 w-full">
      <Image src={imagen} alt={`Foto de ${nombre}`} className="w-full h-full" width={2200} height={800} />
    </div>
  );
};

export default ImgCompleta;
