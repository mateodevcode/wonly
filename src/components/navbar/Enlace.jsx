import Link from "next/link";

const Enlace = ({ nombre, Url }) => {
  return (
    <Link
      href={`${Url}`}
      className="mx-1 p-2 hover:bg-black/20 rounded-lg dark:text-white dark:hover:bg-green-500/50"
    >
      {nombre}
    </Link>
  );
};

export default Enlace;
