import Image from "next/image";
import Link from "next/link";
import { logo } from "../../data/navbar";

const Logo = () => {
  return (
    <Link href={`${logo.href}`}>
      <Image
        src={logo.src}
        width={150}
        height={150}
        className="mx-5 select-none w-40 h-12"
        alt={logo.alt}
      />
    </Link>
  );
};

export default Logo;
