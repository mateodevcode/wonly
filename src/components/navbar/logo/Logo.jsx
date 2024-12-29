import { logo } from "@/data/logo";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={`${logo.href}`}
      className="flex items-center justify-center lg:w-28 lg:h-12 sm:w-20 sm:h-10 select-none"
    >
      <Image
        src={logo.src}
        width={150}
        height={150}
        alt={logo.alt}
        title={logo.alt}
        className="object-cover w-full h-full select-none"
      />
    </Link>
  );
};

export default Logo;
