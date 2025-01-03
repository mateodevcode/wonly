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
        className="select-none lg:w-40 md:w-40 sm:w-36 lg:h-12 md:h-12 sm:h-10 cursor-pointer"
        alt={logo.alt}
        title={logo.alt}
      />
    </Link>
  );
};

export default Logo;
