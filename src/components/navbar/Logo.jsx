import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/logo-hor-3.png"}
        className="w-52 mx-5 select-none"
        alt="Logo de wonly"
        width={400}
        height={400}
      />
    </Link>
  );
};

export default Logo;
