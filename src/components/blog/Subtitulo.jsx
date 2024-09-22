import Link from "next/link";

const Subtitulo = ({ nombre, LinkUrl }) => {
  return (
    <Link
      href={LinkUrl}
      target="_blank"
      className="lg:text-3xl md:text-3xl sm:text-xl mt-10 font-semibold dark:hover:text-blue-600"
    >
      {nombre}
    </Link>
  );
};

export default Subtitulo;
