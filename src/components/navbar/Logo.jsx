import Image from "next/image";
import Link from "next/link";
import { logo } from "../../data/navbar";

const Logo = () => {
  return (
    <Link href={`${logo.href}`}>
      <Image
        width={logo.width}
        height={logo.height}
        src={logo.src}
        className="w-52 mx-5 select-none h-16"
        alt={logo.alt}
      />
    </Link>
  );
};

export default Logo;
