import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        width={400}
        height={400}
        src={"/logo-hor-3.png"}
        className="w-52 mx-5 select-none h-16"
        alt="Logo de wonly"
      />
    </Link>
  );
};

export default Logo;
